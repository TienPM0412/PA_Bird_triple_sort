using System;
using System.Collections.Generic;
using DG.Tweening;
using Lean.Pool;
using TMPro;
using UnityEngine;

/// <summary>
/// Locked Egg: trứng bị khóa bằng xích, chim bên trong không tap được.
/// Cần LockCount chìa. Chìa đến từ trứng IsKey (KeyNestObstacle) khi trứng đó hết chim.
/// </summary>
public class LockedNestObstacle : ObstacleBase
{
    // Trứng khóa đang trên board, theo thứ tự spawn (= thứ tự trong data level)
    private static readonly List<LockedNestObstacle> s_lockedOnBoard = new List<LockedNestObstacle>();

    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
    private static void ResetStatics() => s_lockedOnBoard.Clear();

    /// Trứng khóa sớm nhất còn thiếu chìa (null nếu không có)
    public static LockedNestObstacle FindKeyTarget()
    {
        for (int i = 0; i < s_lockedOnBoard.Count; i++)
        {
            if (s_lockedOnBoard[i].locksRemaining > 0)
            {
                return s_lockedOnBoard[i];
            }
        }

        return null;
    }

    [SerializeField, TextArea] private string blockedMessage =
        "Eliminate the egg with a key to unlock the egg locked by a chain.";

    [Header("Chìa bay tới")]
    [SerializeField] private Transform flyingKeyPrefab;
    [SerializeField, Min(0.05f)] private float keyFlyDuration = 0.5f;
    [SerializeField, Min(0f)] private float keyArcHeight = 1.2f;
    [SerializeField] private int keySortingOffset = 10;

    [Header("Phần hình trong bubble (khai báo trong BubbleParts)")]
    [SerializeField] private BubblePart chainPart = BubblePart.ChainOverlay;
    [SerializeField] private BubblePart lockPart = BubblePart.ChainLock;
    [SerializeField] private BubblePart countTextPart = BubblePart.ChainText;

    private Transform chain;
    private Transform lockIcon;
    private TMP_Text countText;
    private Vector3 chainBaseScale;
    private Vector3 lockBaseScale;

    private int totalLocks;
    private int locksRemaining;      // số chìa còn thiếu (chưa được giao)
    private int keysInFlight;        // số chìa đang bay tới
    private Action pendingUnlock;    // callback của Clear(), chờ chìa cuối bay tới
    private readonly List<Transform> flyingKeys = new List<Transform>();

    public override ObstacleType Type => ObstacleType.Locked;
    public override string BlockedMessage => blockedMessage;
    public override bool ProtectsFromBooster(BoosterType booster) => true;

    /// Điểm chìa bay tới (ổ khóa), cập nhật theo bubble đang trôi
    private Vector3 KeyTargetPosition =>
        lockIcon != null ? lockIcon.position :
        Bubble != null ? Bubble.transform.position : transform.position;

    protected override void OnInit(BubbleConfig config)
    {
        totalLocks = Mathf.Max(1, config.LockCount);
        locksRemaining = totalLocks;
        keysInFlight = 0;
        pendingUnlock = null;

        chain = ShowPart(chainPart, out chainBaseScale);
        lockIcon = ShowPart(lockPart, out lockBaseScale);

        Transform textPart = Bubble.GetPart(countTextPart);
        countText = textPart != null ? textPart.GetComponent<TMP_Text>() : null;
        if (countText != null) countText.gameObject.SetActive(totalLocks > 1);   // chỉ hiện khi cần >1 chìa
        UpdateCountText();

        s_lockedOnBoard.Add(this);
    }

    protected override void OnRelease()
    {
        DOTween.Kill(this);

        // Tween bị kill không gọi OnComplete -> tự despawn chìa đang bay
        for (int i = 0; i < flyingKeys.Count; i++)
        {
            if (flyingKeys[i] != null) LeanPool.Despawn(flyingKeys[i].gameObject);
        }
        flyingKeys.Clear();

        HidePart(chain, chainBaseScale);
        HidePart(lockIcon, lockBaseScale);
        if (countText != null) countText.gameObject.SetActive(false);

        chain = null;
        lockIcon = null;
        countText = null;
        keysInFlight = 0;
        pendingUnlock = null;

        s_lockedOnBoard.Remove(this);
    }

    /// KeyNestObstacle gọi khi thu được chìa
    public void ReceiveKey([Bridge.Ref] Vector3 fromPosition)
    {
        if (!IsActive || locksRemaining <= 0) return;

        locksRemaining--;
        keysInFlight++;
        FlyKey(fromPosition);

        // Chìa cuối: mở khóa NGAY về logic (hết chặn tap, không bị tính là kẹt game).
        // Hiệu ứng mở khóa sẽ đợi chìa bay tới trong PlayClearAnimation.
        if (locksRemaining == 0)
        {
            Clear();
        }
    }

    private void FlyKey([Bridge.Ref] Vector3 from)
    {
        if (flyingKeyPrefab == null)
        {
            Debug.LogWarning("[Locked] Chưa gán flyingKeyPrefab", this);
            OnKeyArrived();
            return;
        }

        Transform key = LeanPool.Spawn(flyingKeyPrefab, from, Quaternion.identity);
        flyingKeys.Add(key);
        ApplyKeySorting(key);

        DOVirtual.Float(0f, 1f, keyFlyDuration, t =>
            {
                // Đích tính lại mỗi frame vì trứng khóa đang trôi
                Vector3 arc = Vector3.up * (keyArcHeight * 4f * t * (1f - t));
                key.position = Vector3.Lerp(from, KeyTargetPosition, t) + arc;
            })
            .SetEase(Ease.InOutSine)
            .SetTarget(this)
            .OnComplete(() =>
            {
                flyingKeys.Remove(key);
                LeanPool.Despawn(key.gameObject);
                OnKeyArrived();
            });
    }

    private void OnKeyArrived()
    {
        keysInFlight = Mathf.Max(0, keysInFlight - 1);
        UpdateCountText();

        if (lockIcon != null)
        {
            lockIcon.DOKill(true);
            lockIcon.DOPunchScale(lockBaseScale * 0.25f, 0.25f, 8, 0.8f);
        }

        TryPlayUnlock();
    }

    protected override void PlayClearAnimation(Action onComplete)
    {
        // Không chạy ngay: đợi chìa cuối bay tới
        pendingUnlock = onComplete;
        TryPlayUnlock();
    }

    private void TryPlayUnlock()
    {
        if (pendingUnlock == null || keysInFlight > 0) return;

        Action done = pendingUnlock;
        pendingUnlock = null;

        SoundManager.Ins.PlaySFX(SoundFX.Unlock);
        Sequence seq = DOTween.Sequence().SetTarget(this);
        if (lockIcon != null)
        {
            seq.Join(lockIcon.DOScale(lockBaseScale * 1.3f, 0.12f).SetEase(Ease.OutQuad));
        }
        seq.AppendInterval(0.05f);
        if (lockIcon != null) seq.Append(lockIcon.DOScale(Vector3.zero, 0.18f).SetEase(Ease.InBack));
        if (chain != null) seq.Join(chain.DOScale(Vector3.zero, 0.25f).SetEase(Ease.InBack));
        seq.OnComplete(() => done?.Invoke());
    }

    public override void PlayBlockedFeedback()
    {
        if (!IsActive || lockIcon == null) return;

        lockIcon.DOKill(true);
        lockIcon.DOPunchRotation(new Vector3(0f, 0f, 20f), 0.3f, 10, 1f);
    }

    // Bubble xoay theo vật lý -> giữ ổ khóa và chữ luôn thẳng
    private void LateUpdate()
    {
        if (lockIcon != null && !DOTween.IsTweening(lockIcon)) lockIcon.rotation = Quaternion.identity;
        if (countText != null) countText.transform.rotation = Quaternion.identity;
    }
    private void ApplyKeySorting(Transform key)
    {
        int topOrder = int.MinValue;
        int layerId = 0;
        CollectTopOrder(lockIcon, ref topOrder, ref layerId);
        CollectTopOrder(chain, ref topOrder, ref layerId);
        if (topOrder == int.MinValue) return;

        // Đọc order gốc từ prefab, vì instance lấy từ pool đã bị sửa ở lần dùng trước
        SpriteRenderer[] prefabRenderers = flyingKeyPrefab.GetComponentsInChildren<SpriteRenderer>(true);
        SpriteRenderer[] renderers = key.GetComponentsInChildren<SpriteRenderer>(true);
        if (renderers.Length == 0 || renderers.Length != prefabRenderers.Length) return;

        int minOrder = int.MaxValue;
        for (int i = 0; i < prefabRenderers.Length; i++) minOrder = Mathf.Min(minOrder, prefabRenderers[i].sortingOrder);

        for (int i = 0; i < renderers.Length; i++)
        {
            renderers[i].sortingLayerID = layerId;
            renderers[i].sortingOrder = topOrder + keySortingOffset + (prefabRenderers[i].sortingOrder - minOrder);
        }
    }
    private static void CollectTopOrder(Transform root, ref int topOrder, ref int layerId)
    {
        if (root == null) return;

        foreach (Renderer r in root.GetComponentsInChildren<Renderer>(true))
        {
            if (r.sortingOrder > topOrder)
            {
                topOrder = r.sortingOrder;
                layerId = r.sortingLayerID;
            }
        }
    }

    private void UpdateCountText()
    {
        // Hiển thị số chìa chưa tới nơi (gồm cả chìa đang bay)
        if (countText != null) countText.text = (locksRemaining + keysInFlight).ToString();
    }

    private Transform ShowPart(BubblePart part, out Vector3 baseScale)
    {
        Transform t = Bubble.GetPart(part);
        baseScale = Vector3.one;

        if (t == null)
        {
            Debug.LogWarning($"[Locked] {Bubble.name} chưa có BubblePart.{part} trong BubbleParts", Bubble);
            return null;
        }

        baseScale = t.localScale;
        t.gameObject.SetActive(true);
        return t;
    }

    private static void HidePart(Transform t, [Bridge.Ref] Vector3 baseScale)
    {
        if (t == null) return;

        t.DOKill();
        t.localScale = baseScale;
        t.gameObject.SetActive(false);
    }
}