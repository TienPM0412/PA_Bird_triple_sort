using System;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

/// <summary>
/// Bind Bird: 2 chim trong cùng trứng bị buộc vào nhau. Tap 1 con thì cả 2 cùng bay.
/// Ghép cặp tự động: con spawn sau tìm con spawn trước (cùng trứng) đang chờ ghép.
/// </summary>
public class BindBirdObstacle : ObstacleBase
{
    [Header("Phần hình trong Bird (khai báo trong BirdParts)")]
    [SerializeField] private BirdPart overlayPart = BirdPart.BindBirdOverlay;
    [Tooltip("Order của overlay = order của chim + offset. +1: vẽ trên chim, -1: vẽ dưới chim")]
    [SerializeField] private int sortingOffset = 1;
    [SerializeField, Min(0.01f)] private float clearDuration = 0.15f;

    private BindBirdObstacle partner;
    private Transform overlay;
    private SpriteRenderer overlayRenderer;
    private Vector3 overlayBaseScale;
    private int baseOrder;

    public override ObstacleType Type => ObstacleType.BindBird;

    // Chim buộc vẫn tap được
    public override bool BlocksBirdTap => false;

    protected override void OnInit(BubbleConfig config)
    {
        partner = null;

        overlay = OwnerBird.GetPart(overlayPart);
        if (overlay == null)
        {
            Debug.LogWarning($"[BindBird] {OwnerBird.name} chưa có BirdPart.{overlayPart} trong BirdParts", OwnerBird);
        }
        else
        {
            overlayBaseScale = overlay.localScale;
            overlayRenderer = overlay.GetComponent<SpriteRenderer>();
            if (overlayRenderer != null)
            {
                baseOrder = overlayRenderer.sortingOrder;
                overlayRenderer.sortingOrder = OwnerBird.SortingOrder + sortingOffset;
            }
            overlay.gameObject.SetActive(true);
        }

        TryPairWithBirdInSameBubble();
    }

    /// Con spawn sau tìm con spawn trước (cùng trứng) đang có Bind nhưng chưa có cặp
    private void TryPairWithBirdInSameBubble()
    {
        if (Bubble == null) return;

        IReadOnlyList<Bird> birds = Bubble.Birds;
        for (int i = 0; i < birds.Count; i++)
        {
            Bird other = birds[i];
            if (other == null || other == OwnerBird) continue;

            if (other.TryGetObstacle(out BindBirdObstacle otherBind) && otherBind.partner == null)
            {
                partner = otherBind;
                otherBind.partner = this;
                return;
            }
        }
    }

    public override void CollectLinkedBirds(List<Bird> result)
    {
        if (IsActive && partner != null && partner.IsActive && partner.OwnerBird != null)
        {
            result.Add(partner.OwnerBird);
        }
    }

    // Chim của mình bắt đầu bay (tap hoặc Magnet) -> tháo cặp, bỏ dấu cả 2
    public override void OnOwnerBirdLeaving()
    {
        if (!IsActive) return;

        BindBirdObstacle other = partner;
        partner = null;
        Clear();

        if (other != null)
        {
            other.partner = null;
            if (other.IsActive) other.Clear();
        }
    }

    protected override void PlayClearAnimation(Action onComplete)
    {
        if (overlay == null)
        {
            onComplete?.Invoke();
            return;
        }

        // Mỗi chim có obstacle + overlay riêng, cả 2 đều Clear() nên mỗi bên tự spawn FX tại overlay của mình
        ParticlesManager.Ins.PlayEffect(ParticleEffectType.FX_Binding, overlay.position);

        overlay.DOKill();
        overlay.DOScale(Vector3.zero, clearDuration)
            .SetEase(Ease.InBack)
            .SetTarget(this)
            .OnComplete(() => onComplete?.Invoke());
    }

    protected override void OnRelease()
    {
        DOTween.Kill(this);

        // Tháo cặp nhưng KHÔNG Clear partner: chim của partner có thể đang bị despawn riêng
        if (partner != null)
        {
            partner.partner = null;
            partner = null;
        }

        if (overlay != null)
        {
            overlay.DOKill();
            overlay.localScale = overlayBaseScale;
            overlay.gameObject.SetActive(false);
        }

        if (overlayRenderer != null) overlayRenderer.sortingOrder = baseOrder;

        overlay = null;
        overlayRenderer = null;
    }
}