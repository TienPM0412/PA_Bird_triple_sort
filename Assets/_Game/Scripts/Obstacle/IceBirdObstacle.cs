using System;
using System.Collections.Generic;
using DG.Tweening;
using TMPro;
using UnityEngine;

/// <summary>
/// Ice Bird: chim bị đóng băng, vẫn thấy loại chim nhưng không tap được.
/// Mỗi lần có 1 match ở dock thì giảm 1; về 0 thì băng vỡ.
/// </summary>
public class IceBirdObstacle : ObstacleBase
{
    [SerializeField, TextArea] private string blockedMessage = "Match other birds to break the ice.";

    [Header("Phần hình trong Bird (khai báo trong BirdParts)")]
    [SerializeField] private BirdPart overlayPart = BirdPart.IceBirdOverlay;
    [SerializeField] private BirdPart textPart = BirdPart.IceBirdText;

    private Transform overlay;
    private TMP_Text countText;
    private Vector3 overlayBaseScale;
    private readonly List<Renderer> overlayRenderers = new List<Renderer>();
    private readonly List<int> baseOrders = new List<int>();
    private int remaining;

    public override ObstacleType Type => ObstacleType.IceBird;
    public override string BlockedMessage => blockedMessage;

    // Chim băng không bị Magnet (Net) kéo ra
    public override bool ProtectsFromBooster(BoosterType booster) => booster == BoosterType.Net;

    protected override void OnInit(BubbleConfig config)
    {
        remaining = Mathf.Max(1, ObstacleDataHelper.ReadSlotValue(config.IceFishStr, OwnerBird.FishIndex));

        overlay = OwnerBird.GetPart(overlayPart);
        if (overlay == null)
        {
            Debug.LogWarning($"[IceBird] {OwnerBird.name} chưa có BirdPart.{overlayPart} trong BirdParts", OwnerBird);
            return;
        }

        overlayBaseScale = overlay.localScale;

        Transform textTransform = OwnerBird.GetPart(textPart);
        countText = textTransform != null ? textTransform.GetComponent<TMP_Text>() : null;
        if (countText != null) countText.gameObject.SetActive(true);

        // Sprite băng + MeshRenderer của chữ: order theo chim, giữ khoảng cách giữa chúng
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
            overlayRenderers[i].sortingOrder = OwnerBird.SortingOrder + 1 + (baseOrders[i] - minOrder);
        }

        // Băng to hơn trứng nên phải bị cắt theo vòng tròn của bubble giống chim
        for (int i = 0; i < overlayRenderers.Count; i++)
        {
            if (overlayRenderers[i] is SpriteRenderer) OwnerBird.AddMaskRenderer(overlayRenderers[i]);
        }

        overlay.gameObject.SetActive(true);
        UpdateText(false);
    }

    protected override void Subscribe() => EventManager.AddListener<OnBirdMatchedEvent>(OnBirdMatched);
    protected override void Unsubscribe() => EventManager.RemoveListener<OnBirdMatchedEvent>(OnBirdMatched);

    private void OnBirdMatched(OnBirdMatchedEvent evt)
    {
        if (!IsActive) return;

        remaining--;
        if (remaining <= 0)
        {
            UpdateText(false);
            Clear();
            return;
        }

        UpdateText(true);
    }

    private void UpdateText(bool punch)
    {
        if (countText != null) countText.text = Mathf.Max(0, remaining).ToString();

        if (punch && overlay != null)
        {
            overlay.DOKill(true);
            overlay.DOPunchScale(overlayBaseScale * 0.15f, 0.25f, 8, 0.8f);
        }
    }

    public override void PlayBlockedFeedback()
    {
        if (!IsActive || overlay == null) return;

        overlay.DOKill(true);
        overlay.DOPunchScale(overlayBaseScale * 0.1f, 0.2f, 10, 1f);
    }

    protected override void PlayClearAnimation(Action onComplete)
    {
        SoundManager.Ins.PlaySFX(SoundFX.Ice_Breaking);
        if (overlay == null)
        {
            onComplete?.Invoke();
            return;
        }

        ParticlesManager.Ins.PlayEffect(ParticleEffectType.FX_Ice, overlay.position);

        overlay.DOKill();
        Sequence seq = DOTween.Sequence().SetTarget(this);
        seq.Append(overlay.DOScale(overlayBaseScale * 1.2f, 0.1f).SetEase(Ease.OutQuad));
        seq.Append(overlay.DOScale(Vector3.zero, 0.18f).SetEase(Ease.InBack));
        seq.OnComplete(() => onComplete?.Invoke());
    }

    protected override void OnRelease()
    {
        DOTween.Kill(this);

        if (overlay != null)
        {
            overlay.DOKill();
            overlay.localScale = overlayBaseScale;
            overlay.gameObject.SetActive(false);
        }

        for (int i = 0; i < overlayRenderers.Count; i++)
        {
            if (overlayRenderers[i] == null) continue;

            OwnerBird.RemoveMaskRenderer(overlayRenderers[i]);
            overlayRenderers[i].sortingOrder = baseOrders[i];
        }

        overlayRenderers.Clear();
        baseOrders.Clear();
        overlay = null;
        countText = null;
    }
}