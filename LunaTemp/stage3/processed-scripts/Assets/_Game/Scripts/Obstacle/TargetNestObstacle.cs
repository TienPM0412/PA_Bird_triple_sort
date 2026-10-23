using System;
using DG.Tweening;
using UnityEngine;

/// <summary>
/// Target Egg: trứng bị che, hiển thị icon loại chim target.
/// Match đúng loại chim đó ở dock thì trứng mở, chim bên trong tap được.
/// </summary>
public class TargetNestObstacle : ObstacleBase
{
    [SerializeField, TextArea] private string blockedMessage = "Match the target bird to open the egg.";
    [SerializeField, Min(0.01f)] private float revealDuration = 0.3f;

    [Header("Phần hình trong bubble (khai báo trong BubbleParts)")]
    [SerializeField] private BubblePart overlayPart = BubblePart.MaskOverlay;
    [SerializeField] private BubblePart iconPart = BubblePart.TargetIcon;

    private int targetBirdId = -1;

    private Transform overlay;
    private SpriteRenderer overlayRenderer;
    private Vector3 overlayBaseScale;
    private Color overlayBaseColor;

    private Transform icon;
    private SpriteRenderer iconRenderer;
    private Sprite iconBaseSprite;
    private Vector3 iconBaseScale;
    private Vector3 iconBaseLocalPos;
    private Vector3 iconWorldOffset;

    public override ObstacleType Type => ObstacleType.TargetNest;
    public override string BlockedMessage => blockedMessage;
    public override bool ProtectsFromBooster(BoosterType booster) => booster == BoosterType.Net;

    protected override void OnInit(BubbleConfig config)
    {
        targetBirdId = config.MaskTargetFish;

        overlay = Bubble.GetPart(overlayPart);
        if (overlay != null)
        {
            overlayBaseScale = overlay.localScale;
            overlayRenderer = overlay.GetComponent<SpriteRenderer>();
            if (overlayRenderer != null) overlayBaseColor = overlayRenderer.color;
            overlay.gameObject.SetActive(true);
        }
        else
        {
            Debug.LogWarning($"[Target] {Bubble.name} chưa có BubblePart.{overlayPart}", Bubble);
        }

        icon = Bubble.GetPart(iconPart);
        if (icon != null)
        {
            iconBaseScale = icon.localScale;
            iconBaseLocalPos = icon.localPosition;

            // Offset theo thế giới, tính một lần: giữ icon cố định phía trên trứng dù trứng xoay
            Vector3 parentScale = icon.parent != null ? icon.parent.lossyScale : Vector3.one;
            iconWorldOffset = Vector3.Scale(iconBaseLocalPos, parentScale);

            iconRenderer = icon.GetComponent<SpriteRenderer>();
            if (iconRenderer != null)
            {
                iconBaseSprite = iconRenderer.sprite;
                BirdData target = LevelManager.Ins.GetBirdDataById(targetBirdId);
                iconRenderer.sprite = target != null ? target.spriteIcon : null;
            }

            icon.gameObject.SetActive(true);
        }

        // Quyết định A: target đã match trước khi trứng spawn -> mở ngay
        if (TopContainer.Ins != null && TopContainer.Ins.HasMatchedBird(targetBirdId))
        {
            Clear();
        }
    }

    protected override void Subscribe() => EventManager.AddListener<OnBirdMatchedEvent>(OnBirdMatched);
    protected override void Unsubscribe() => EventManager.RemoveListener<OnBirdMatchedEvent>(OnBirdMatched);

    private void OnBirdMatched([Bridge.Ref] OnBirdMatchedEvent evt)
    {
        if (!IsActive || evt.birdId != targetBirdId) return;
        Clear();
    }

    public override void PlayBlockedFeedback()
    {
        if (!IsActive || icon == null) return;

        icon.DOKill(true);
        icon.DOPunchScale(iconBaseScale * 0.25f, 0.25f, 8, 0.8f);
    }

    // Bubble xoay theo vật lý -> icon đứng thẳng, cố định phía trên trứng
    private void LateUpdate()
    {
        if (icon == null || Bubble == null) return;

        icon.position = Bubble.transform.position + iconWorldOffset;
        icon.rotation = Quaternion.identity;
    }

    protected override void PlayClearAnimation(Action onComplete)
    {
        Sequence seq = DOTween.Sequence().SetTarget(this);

        ParticlesManager.Ins.PlayEffect(ParticleEffectType.FX_Binding, Bubble.transform.position);

        if (icon != null)
        {
            icon.DOKill();
            seq.Append(icon.DOScale(iconBaseScale * 1.3f, 0.12f).SetEase(Ease.OutQuad));
            seq.Append(icon.DOScale(Vector3.zero, 0.15f).SetEase(Ease.InBack));
        }

        if (overlayRenderer != null)
        {
            seq.Join(overlayRenderer.DOFade(0f, revealDuration).SetEase(Ease.OutQuad));
        }

        seq.OnComplete(() => onComplete?.Invoke());
    }

    protected override void OnRelease()
    {
        DOTween.Kill(this);

        if (icon != null)
        {
            icon.DOKill();
            icon.localScale = iconBaseScale;
            icon.localPosition = iconBaseLocalPos;
            icon.localRotation = Quaternion.identity;
            if (iconRenderer != null) iconRenderer.sprite = iconBaseSprite;
        }

        if (overlay != null)
        {
            overlay.localScale = overlayBaseScale;
            overlay.gameObject.SetActive(false);
        }

        // Trả alpha gốc: lần sau bubble này bị che lại phải kín
        if (overlayRenderer != null) overlayRenderer.color = overlayBaseColor;

        overlay = null;
        overlayRenderer = null;
        icon = null;
        iconRenderer = null;
        targetBirdId = -1;
    }
}