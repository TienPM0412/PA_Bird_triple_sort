using System;
using DG.Tweening;
using TMPro;
using UnityEngine;

/// <summary>
/// Big Egg: trứng có kho chim (FishStr dài hơn BubbleType). Kho do BubbleBase quản lý;
/// obstacle này chỉ hiển thị số chim còn trong kho, dùng chữ "BigNestText" có sẵn trong bubble.
/// </summary>
public class BigNestObstacle : ObstacleBase
{
    [Header("Phần hình trong bubble (khai báo trong BubbleParts)")]
    [SerializeField] private BubblePart countTextPart = BubblePart.BigNestText;

    private TMP_Text countText;
    private Vector3 textBaseScale;

    public override ObstacleType Type => ObstacleType.BigNest;

    // Chim đang hiện tap bình thường
    public override bool BlocksBirdTap => false;

    protected override void OnInit(BubbleConfig config)
    {
        Transform textPart = Bubble.GetPart(countTextPart);
        countText = textPart != null ? textPart.GetComponent<TMP_Text>() : null;
        if (countText == null)
        {
            Debug.LogWarning($"[BigNest] {Bubble.name} chưa có BubblePart.{countTextPart} (TMP_Text) trong BubbleParts", Bubble);
            return;
        }

        // Lưu scale gốc để OnRelease trả lại cho bubble
        textBaseScale = countText.transform.localScale;
        countText.gameObject.SetActive(true);
        UpdateCount(false);
    }

    protected override void OnRelease()
    {
        DOTween.Kill(this);

        if (countText != null)
        {
            countText.transform.DOKill();
            countText.transform.localScale = textBaseScale;
            countText.gameObject.SetActive(false);
        }

        countText = null;
    }

    protected override void Subscribe() => EventManager.AddListener<OnBubbleStorageChangedEvent>(OnStorageChanged);
    protected override void Unsubscribe() => EventManager.RemoveListener<OnBubbleStorageChangedEvent>(OnStorageChanged);

    private void OnStorageChanged(OnBubbleStorageChangedEvent evt)
    {
        if (!IsActive || evt.bubble != Bubble) return;

        UpdateCount(true);

        if (Bubble.StoredCount == 0)
        {
            Clear();
        }
    }

    private void UpdateCount(bool punch)
    {
        if (countText == null || Bubble == null) return;

        // Quyết định A: số chim còn trong kho.
        // Muốn tổng số chim còn lại: Bubble.StoredCount + Bubble.BirdCount
        countText.text = Bubble.StoredCount.ToString();

        if (punch)
        {
            countText.transform.DOKill(true);
            countText.transform.DOPunchScale(textBaseScale * 0.3f, 0.25f, 8, 0.8f);
        }
    }

    protected override void PlayClearAnimation(Action onComplete)
    {
        if (countText == null)
        {
            onComplete?.Invoke();
            return;
        }

        countText.transform.DOKill();
        countText.transform
            .DOScale(Vector3.zero, 0.2f)
            .SetEase(Ease.InBack)
            .SetTarget(this)
            .OnComplete(() => onComplete?.Invoke());
    }

    // Bubble xoay theo vật lý -> giữ chữ luôn thẳng
    private void LateUpdate()
    {
        if (countText != null)
        {
            countText.transform.rotation = Quaternion.identity;
        }
    }
}