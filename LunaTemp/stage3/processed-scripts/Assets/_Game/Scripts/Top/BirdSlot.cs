using System;
using DG.Tweening;
using Sirenix.OdinInspector;
using UnityEngine;

public class BirdSlot : MonoBehaviour
{
    [SerializeField] private SpriteRenderer warningSprite;
    [ShowInInspector] private ISlotable tile;

    public bool IsEmpty => tile == null;
    public ISlotable Tile => tile;

    public bool isAnim;

    // Callback hoàn thành của chim đang bay tới slot; gọi đúng 1 lần
    // kể cả khi chim bị lấy đi giữa đường (Bird.MoveTo sẽ huỷ callback cũ).
    private Action pendingComplete;

    private const float WarningBlinkDuration = 0.35f;

    private Tween warningTween;

    public void Init()
    {
        isAnim = false;
        pendingComplete = null;
        SetWarning(false);
    }

    // Viền đỏ nhấp nháy khi dock sắp đầy. Tween tách riêng khỏi transform.DOKill() của AnimSpring.
    public void SetWarning(bool active)
    {
        warningTween?.Kill();
        warningTween = null;

        if (warningSprite == null) return;

        Color color = warningSprite.color;
        if (!active)
        {
            color.a = 0f;
            warningSprite.color = color;
            warningSprite.enabled = false;
            return;
        }

        color.a = 0f;
        warningSprite.color = color;
        warningSprite.enabled = true;
        warningTween = warningSprite
            .DOFade(1f, WarningBlinkDuration)
            .SetEase(Ease.InOutSine)
            .SetLoops(-1, LoopType.Yoyo)
            .SetUpdate(true)
            .SetLink(gameObject);
    }

    private void OnDisable()
    {
        SetWarning(false);
    }

    public void ClearTile()
    {
        transform.DOKill();
        isAnim = false;
        pendingComplete = null;

        if (tile != null)
        {
            tile.Clear();
            tile = null;
        }
    }

    public void RemoveTile()
    {
        tile = null;
        isAnim = false;

        Action complete = pendingComplete;
        pendingComplete = null;
        complete?.Invoke();
    }

    private void AnimSpring()
    {
        transform.DOKill();

        Vector3 original = transform.localPosition;

        Sequence seq = DOTween.Sequence();

        seq.Append(transform.DOLocalMoveY(original.y - 0.1f, 0.08f))
            .Append(transform.DOLocalMoveY(original.y + 0.05f, 0.08f))
            .Append(transform.DOLocalMoveY(original.y, 0.08f));
    }

    public void PlaceTile(ISlotable newTile, Action onComplete = null)
    {
        if (newTile == null || !IsEmpty)
        {
            onComplete?.Invoke();
            return;
        }

        isAnim = true;
        tile = newTile;
        ISlotable movingTile = newTile;

        bool done = false;
        void Complete()
        {
            if (done) return;
            done = true;
            onComplete?.Invoke();
        }
        pendingComplete = Complete;

        movingTile.SubmitMove(transform, () =>
        {
            if (tile == movingTile)
            {
                movingTile.BirdState = BirdState.Colleced;
                pendingComplete = null;
                AnimSpring();
                isAnim = false;
            }

            Complete();
        });
    }
}
