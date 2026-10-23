using System;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

/// <summary>
/// Hidden Bird: chim bị ẩn (overlay bật, Spine tắt). Vẫn tap được;
/// khi chim bắt đầu bay (tap hợp lệ hoặc Magnet) thì lộ ra.
/// </summary>
public class HiddenBirdObstacle : ObstacleBase
{
    [Header("Phần hình trong Bird (khai báo trong BirdParts)")]
    [SerializeField] private BirdPart overlayPart = BirdPart.HiddenBirdOverlay;
    [SerializeField, Min(0.01f)] private float revealDuration = 0.15f;

    private Transform overlay;
    private Vector3 overlayBaseScale;
    private readonly List<SpriteRenderer> overlayRenderers = new List<SpriteRenderer>();
    private readonly List<int> baseOrders = new List<int>();

    public override ObstacleType Type => ObstacleType.HiddenBird;

    // Chim ẩn vẫn tap được, chỉ bị giấu loại
    public override bool BlocksBirdTap => false;

    protected override void OnInit(BubbleConfig config)
    {
        overlay = OwnerBird.GetPart(overlayPart);
        if (overlay == null)
        {
            Debug.LogWarning($"[HiddenBird] {OwnerBird.name} chưa có BirdPart.{overlayPart} trong BirdParts", OwnerBird);
            return;
        }

        overlayBaseScale = overlay.localScale;

        // Overlay vẽ theo order của chính con chim, giữ khoảng cách giữa các renderer (nền, Icon)
        overlay.GetComponentsInChildren(true, overlayRenderers);
        baseOrders.Clear();
        int minOrder = int.MaxValue;
        for (int i = 0; i < overlayRenderers.Count; i++)
        {
            baseOrders.Add(overlayRenderers[i].sortingOrder);
            minOrder = Mathf.Min(minOrder, overlayRenderers[i].sortingOrder);
        }
        for (int i = 0; i < overlayRenderers.Count; i++)
        {
            overlayRenderers[i].sortingOrder = OwnerBird.SortingOrder + (baseOrders[i] - minOrder);
        }

        overlay.gameObject.SetActive(true);
        OwnerBird.SetVisualHidden(true);
    }

    // Tap hợp lệ (hoặc Magnet): chim bắt đầu bay -> lộ ra
    public override void OnOwnerBirdLeaving()
    {
        if (IsActive) Clear();
    }

    protected override void PlayClearAnimation(Action onComplete)
    {
        SoundManager.Ins.PlaySFX(SoundFX.Hidden_Reveal);
        if (OwnerBird != null) OwnerBird.SetVisualHidden(false);

        if (overlay == null)
        {
            onComplete?.Invoke();
            return;
        }

        ParticlesManager.Ins.PlayEffect(ParticleEffectType.FX_Mys_Egg, overlay.position);

        overlay.DOKill();
        overlay.DOScale(Vector3.zero, revealDuration)
            .SetEase(Ease.InBack)
            .SetTarget(this)
            .OnComplete(() => onComplete?.Invoke());
    }

    protected override void OnRelease()
    {
        DOTween.Kill(this);

        // Trả Bird về nguyên trạng: pool sẽ dùng lại cho chim thường
        if (OwnerBird != null) OwnerBird.SetVisualHidden(false);

        if (overlay != null)
        {
            overlay.DOKill();
            overlay.localScale = overlayBaseScale;
            overlay.gameObject.SetActive(false);
        }

        for (int i = 0; i < overlayRenderers.Count; i++)
        {
            if (overlayRenderers[i] != null) overlayRenderers[i].sortingOrder = baseOrders[i];
        }

        overlayRenderers.Clear();
        baseOrders.Clear();
        overlay = null;
    }
}