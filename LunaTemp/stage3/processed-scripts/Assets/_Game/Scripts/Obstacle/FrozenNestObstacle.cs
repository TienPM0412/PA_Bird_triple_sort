using System;
using DG.Tweening;
using TMPro;
using UnityEngine;

/// <summary>
/// Frozen: lồng bị đóng băng, chim bên trong không tap được.
/// Mỗi lần 1 con chim rời khỏi lồng đang TIẾP XÚC với lồng này thì mất 1 lớp băng.
/// Là prefab riêng, được spawn vào bubble; phần hình dùng "FrozenOverlay" có sẵn trong bubble.
/// </summary>
public class FrozenNestObstacle : ObstacleBase
{
    [SerializeField, Min(1)] private int layers = 3;
    [Tooltip("Khoảng cách mép-mép tối đa giữa 2 collider để coi là tiếp xúc")]
    [SerializeField, Min(0f)] private float touchTolerance = 0.05f;
    [SerializeField, TextArea]
    private string blockedMessage =
        "Click on the adjacent bird three times to defrost the ice block";

    [Header("Phần hình trong bubble (đường dẫn tính từ root bubble)")]
    [SerializeField] private BubblePart overlayPart = BubblePart.FrozenOverlay;
    [SerializeField] private BubblePart layerTextPart = BubblePart.FrozenText;
    [SerializeField, Range(0f, 1f)] private float minAlpha = 0.45f;

    private Transform overlay;
    private SpriteRenderer iceRenderer;
    private TMP_Text layerText;
    private Vector3 overlayBaseScale;
    private Color iceBaseColor;
    private int remaining;

    public override ObstacleType Type => ObstacleType.Frozen;
    public override string BlockedMessage => blockedMessage;
    public override bool ProtectsFromBooster(BoosterType booster) => true;

    private void LateUpdate()
    {
        if (layerText != null)
        {
            layerText.transform.rotation = Quaternion.identity;
        }
    }

    protected override void OnInit(BubbleConfig config)
    {
        remaining = layers;

        overlay = Bubble.GetPart(overlayPart);
        if (overlay == null)
        {
            Debug.LogWarning($"[Frozen] {Bubble.name} chưa có BubblePart.{overlayPart} trong BubbleParts", Bubble);
        }
        else
        {
            // Lưu trạng thái gốc để OnRelease trả lại cho bubble
            overlayBaseScale = overlay.localScale;
            iceRenderer = overlay.GetComponent<SpriteRenderer>();
            if (iceRenderer != null) iceBaseColor = iceRenderer.color;

            overlay.gameObject.SetActive(true);
        }

        Transform textPart = Bubble.GetPart(layerTextPart);
        layerText = textPart != null ? textPart.GetComponent<TMP_Text>() : null;
        if (layerText != null) layerText.gameObject.SetActive(true);

        UpdateVisual();
    }

    protected override void OnRelease()
    {
        if (overlay != null)
        {
            overlay.DOKill();
            overlay.localScale = overlayBaseScale;
            overlay.gameObject.SetActive(false);
        }

        if (iceRenderer != null) iceRenderer.color = iceBaseColor;
        if (layerText != null) layerText.gameObject.SetActive(false);

        overlay = null;
        iceRenderer = null;
        layerText = null;
    }

    protected override void Subscribe() => EventManager.AddListener<OnBirdReleasedEvent>(OnBirdReleased);
    protected override void Unsubscribe() => EventManager.RemoveListener<OnBirdReleasedEvent>(OnBirdReleased);

    private void OnBirdReleased([Bridge.Ref] OnBirdReleasedEvent evt)
    {
        if (!IsActive || evt.bubble == null || evt.bubble == Bubble) return;
        if (!IsTouching(evt.bubble)) return;

        remaining--;
        SoundManager.Ins.PlaySFX(SoundFX.Ice_Breaking);
        if (remaining <= 0)
        {
            Clear();
            return;
        }

        UpdateVisual();
        if (overlay != null)
        {
            overlay.DOKill(true);
            overlay.DOPunchScale(overlayBaseScale * 0.12f, 0.25f, 8, 0.8f);
        }
    }

    private bool IsTouching(BubbleBase other)
    {
        Collider2D myCollider = Bubble.Collider;
        Collider2D otherCollider = other.Collider;
        if (myCollider == null || otherCollider == null || !otherCollider.enabled)
        {
            return false;
        }

        // Đo mép-mép nên đúng với mọi kích thước bubble (1..5 slot)
        return Ultils.ColliderEdgeDistance(myCollider, otherCollider) <= touchTolerance;
    }

    public override void PlayBlockedFeedback()
    {
        if (!IsActive || overlay == null) return;

        // DOKill(true) để tap liên tục không làm scale bị lệch dần
        overlay.DOKill(true);
        overlay.DOPunchScale(overlayBaseScale * 0.08f, 0.2f, 10, 1f);
    }

    protected override void PlayClearAnimation(Action onComplete)
    {
        SoundManager.Ins.PlaySFX(SoundFX.Ice_Breaking);
        UpdateVisual();

        if (overlay == null)
        {
            onComplete?.Invoke();
            return;
        }

        ParticlesManager.Ins.PlayEffect(ParticleEffectType.FX_Ice, overlay.position);

        overlay.DOKill();
        Sequence seq = DOTween.Sequence();
        seq.Append(overlay.DOScale(overlayBaseScale * 1.15f, 0.1f).SetEase(Ease.OutQuad));
        seq.Append(overlay.DOScale(Vector3.zero, 0.18f).SetEase(Ease.InBack));
        seq.SetTarget(overlay);   // để overlay.DOKill() trong OnRelease dừng được cả sequence
        seq.OnComplete(() => onComplete?.Invoke());
    }

    private void UpdateVisual()
    {
        if (iceRenderer != null)
        {
            // Càng ít lớp thì băng càng trong
            float t = layers > 1 ? (float)(remaining - 1) / (layers - 1) : 1f;
            Color color = iceBaseColor;
            color.a = iceBaseColor.a * Mathf.Lerp(minAlpha, 1f, Mathf.Clamp01(t));
            iceRenderer.color = color;
        }

        if (layerText != null)
        {
            layerText.text = remaining.ToString();
        }
    }
}