using System.Collections.Generic;
using DG.Tweening;
using Sirenix.OdinInspector;
using UnityEngine;

/// <summary>
/// Shuffle: chong chóng hiện giữa bàn, hút toàn bộ chim vào tâm (đường thẳng, nhanh dần),
/// tới đỉnh thì đổi chim rồi chim bay từ tâm ra vị trí mới.
/// BoardManager chỉ lo dữ liệu (chim nào, thứ tự id mới); mọi hiệu ứng nằm ở đây.
/// </summary>
public class BoosterShuffle : BoosterBase
{
    private BoardManager boardManager;
    private BoardManager.ShufflePlan plan;
    private ShuffleFX fx;
    private Sequence sequence;
    private Vector3 center;
    private float stagger;

    // Theo thứ tự plan.Birds
    private readonly List<Vector3> homeLocal = new List<Vector3>();
    private readonly List<int> homeSorting = new List<int>();
    private readonly List<float> delays = new List<float>();

    public override void Init()
    {
    }

    [Button]
    public override bool Activate()
    {
        if (IsBusy)
        {
            return false;
        }

        boardManager = LevelManager.Ins != null
            ? LevelManager.Ins.BoardManager
            : null;
        
        if (boardManager == null)
        {
            Debug.LogWarning("Shuffle cannot run because BoardManager was not found.");
            return false;
        }

        if (!boardManager.TryPrepareShuffle(Cancel, out plan))
        {
            return false;
        }

        IsBusy = true;
        Begin();
        return true;
    }

    private BoosterManager Settings => BoosterManager.Ins;

    private void Begin()
    {
        fx = ShuffleFX.Spawn(Settings != null ? Settings._shuffleFXPrefab : null, boardManager.BoardCenterPosition);
        center = fx != null ? fx.transform.position : boardManager.BoardCenterPosition;

        for (int i = 0; i < plan.Birds.Count; i++)
        {
            plan.Birds[i].SetInteraction(false);
        }

        CaptureBirds();

        // Chim bắt đầu bị hút khi chong chóng quay, và tụm hết đúng lúc chong chóng quay nhanh nhất.
        float suckDelay = fx != null ? fx.AppearDuration : 0f;
        float suckWindow = fx != null ? fx.PeakTime - fx.AppearDuration : (Settings != null ? Settings.shuffleSuckDuration : 0.7f);
        stagger = Mathf.Min(Settings != null ? Settings.shuffleStagger : 0.25f, suckWindow * 0.5f);
        float suckTravel = suckWindow - stagger;

        sequence = DOTween.Sequence().SetLink(boardManager.gameObject);
        if (suckDelay > 0f)
        {
            sequence.AppendInterval(suckDelay);
        }

        sequence.Append(
            DOVirtual.Float(0f, suckWindow, suckWindow, elapsed => UpdateSuck(elapsed, suckTravel))
                .SetEase(Ease.Linear));

        if (fx != null)
        {
            fx.Play(OnPeak, Complete);
        }
        else
        {
            sequence.OnComplete(() =>
            {
                OnPeak();
                sequence.OnComplete(Complete);
            });
        }
    }

    // Lưu chỗ ở và sorting order gốc, độ trễ theo khoảng cách tới tâm; tắt mask tròn để chim bay ra ngoài trứng không bị cắt.
    private void CaptureBirds()
    {
        for (int i = 0; i < plan.Bubbles.Count; i++)
        {
            if (plan.Bubbles[i] != null) plan.Bubbles[i].SetMaskSuspended(true);
        }

        homeLocal.Clear();
        homeSorting.Clear();
        delays.Clear();

        float maxDistance = 0.0001f;
        for (int i = 0; i < plan.Birds.Count; i++)
        {
            Transform birdTransform = plan.Birds[i].transform;
            homeLocal.Add(birdTransform.localPosition);
            homeSorting.Add(plan.Birds[i].SortingOrder);
            maxDistance = Mathf.Max(maxDistance, Vector2.Distance(birdTransform.position, center));
        }

        // Gần tâm đi trước, xa tâm đi sau (0..stagger giây); stagger tính lại ở Begin nên lưu tỉ lệ 0..1.
        for (int i = 0; i < plan.Birds.Count; i++)
        {
            delays.Add(Vector2.Distance(plan.Birds[i].transform.position, center) / maxDistance);
        }

        SetShuffleSorting();
    }

    // Chim đang bị hút / bay ra dùng sorting order riêng (mặc định 13, thấp hơn obstacle ở 14) để không đè lên obstacle.
    private void SetShuffleSorting()
    {
        int order = Settings != null ? Settings.shuffleBirdSortingOrder : 13;
        for (int i = 0; i < plan.Birds.Count; i++)
        {
            if (plan.Birds[i] != null) plan.Birds[i].SetSortingOrder(order);
        }
    }

    // Bị hút: đi thẳng vào tâm, nhanh dần (InQuad), nhỏ dần về 0. Không xoay.
    private void UpdateSuck(float elapsed, float travel)
    {
        for (int i = 0; i < plan.Birds.Count; i++)
        {
            float t = Mathf.Clamp01((elapsed - delays[i] * stagger) / travel);
            MoveBird(i, t * t, 1f - t * t, toCenter: true);
        }
    }

    // Từ tâm bay ra vị trí mới: nhanh rồi chậm dần (OutQuad), to dần về 1.
    private void UpdateSpread(float elapsed, float travel)
    {
        for (int i = 0; i < plan.Birds.Count; i++)
        {
            // Chim gần tâm ra trước.
            float t = Mathf.Clamp01((elapsed - delays[i] * stagger) / travel);
            float e = 1f - (1f - t) * (1f - t);
            MoveBird(i, e, e, toCenter: false);
        }
    }

    private void MoveBird(int index, float progress, float scale, bool toCenter)
    {
        Bird bird = plan.Birds[index];
        if (bird == null) return;

        Transform birdTransform = bird.transform;
        Transform parent = birdTransform.parent;
        Vector3 home = parent != null ? parent.TransformPoint(homeLocal[index]) : homeLocal[index];

        // toCenter: home -> center; còn lại: center -> home.
        Vector3 from = toCenter ? home : center;
        Vector3 to = toCenter ? center : home;
        Vector3 position = Vector3.LerpUnclamped(from, to, progress);
        position.z = home.z;

        birdTransform.position = position;
        birdTransform.localScale = Vector3.one * scale;
    }

    // Chong chóng quay nhanh nhất: chim đã tụm hết ở tâm -> đổi chim rồi cho bay ra vị trí mới.
    private void OnPeak()
    {
        // Chưa tụm xong thì chốt luôn.
        sequence?.Complete();
        sequence = null;

        boardManager.ApplyShuffle(plan);

        // Init chim đã đặt lại sorting order theo slot -> đặt lại sorting của shuffle cho tới khi chim ra tới nơi.
        SetShuffleSorting();

        float spreadWindow = Settings != null ? Settings.shuffleSpreadDuration : 0.7f;
        float spreadTravel = Mathf.Max(0.01f, spreadWindow - stagger);

        sequence = DOTween.Sequence().SetLink(boardManager.gameObject);
        sequence.Append(
            DOVirtual.Float(0f, spreadWindow, spreadWindow, elapsed => UpdateSpread(elapsed, spreadTravel))
                .SetEase(Ease.Linear));
        sequence.OnComplete(RestoreBirds);
    }

    // Chim ra tới nơi: đặt đúng chỗ, trả sorting order gốc, bật lại mask.
    private void RestoreBirds()
    {
        if (plan == null) return;

        for (int i = 0; i < plan.Birds.Count && i < homeLocal.Count; i++)
        {
            Bird bird = plan.Birds[i];
            if (bird == null) continue;

            bird.transform.localPosition = homeLocal[i];
            bird.transform.localScale = Vector3.one;
            if (i < homeSorting.Count) bird.SetSortingOrder(homeSorting[i]);
        }

        for (int i = 0; i < plan.Bubbles.Count; i++)
        {
            if (plan.Bubbles[i] != null) plan.Bubbles[i].SetMaskSuspended(false);
        }

        homeLocal.Clear();
        homeSorting.Clear();
    }

    private void DisposeFx()
    {
        if (fx == null) return;

        fx.Dispose();
        fx = null;
    }

    private void EnableInteraction()
    {
        for (int i = 0; i < plan.Birds.Count; i++)
        {
            Bird bird = plan.Birds[i];
            if (bird != null && bird.gameObject.activeInHierarchy)
            {
                bird.SetInteraction(true);
            }
        }
    }

    // FX tắt hẳn: kết thúc shuffle bình thường.
    private void Complete()
    {
        sequence?.Complete();
        sequence = null;
        RestoreBirds();
        DisposeFx();
        EnableInteraction();

        boardManager.FinishShuffle();
        plan = null;
        IsBusy = false;
    }

    // Level bị reset/clear giữa chừng (BoardManager gọi): dừng ngay, trả chim về chỗ cũ.
    private void Cancel()
    {
        if (plan == null) return;

        sequence?.Kill();
        sequence = null;
        RestoreBirds();
        DisposeFx();
        EnableInteraction();

        plan = null;
        IsBusy = false;
    }
}
