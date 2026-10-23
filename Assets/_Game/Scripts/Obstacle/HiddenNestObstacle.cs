using System;
using DG.Tweening;
using UnityEngine;

/// <summary>
/// Hidden Egg: trứng bị che kín, chim bên trong không nhìn thấy và không tap được.
/// Khi trứng chạm đáy board (Walls/Bottom) đủ lâu thì lớp che biến mất.
/// </summary>
public class HiddenNestObstacle : ObstacleBase
{
    [SerializeField, TextArea]
    private string blockedMessage =
        "When the egg fall to the bottom, you can see clearly the bird inside.";

    [Header("Chạm đáy")]
    [Tooltip("Khoảng cách mép-mép tối đa tới Bottom để coi là chạm đáy")]
    [SerializeField, Min(0f)] private float bottomTolerance = 0.05f;
    [Tooltip("Phải nằm ở đáy liên tục bao lâu mới lộ (tránh chạm thoáng qua khi nảy)")]
    [SerializeField, Min(0f)] private float settleTime = 0.1f;

    [Header("Hiệu ứng lộ")]
    [SerializeField, Min(0.01f)] private float revealDuration = 0.35f;

    [Header("Phần hình trong bubble (khai báo trong BubbleParts)")]
    [SerializeField] private BubblePart coverPart = BubblePart.UnknownOverlay;

    private Transform cover;
    private SpriteRenderer coverRenderer;
    private Vector3 coverBaseScale;
    private Color coverBaseColor;
    private Collider2D bottom;
    private float touchTimer;

    public override ObstacleType Type => ObstacleType.HiddenNest;
    public override string BlockedMessage => blockedMessage;
    public override bool ProtectsFromBooster(BoosterType booster) => true;

    // Tự lộ nhờ trọng lực -> không tính là "kẹt" khi kiểm tra thua
    // public override bool ResolvesOnItsOwn => true;

    protected override void OnInit(BubbleConfig config)
    {
        touchTimer = 0f;

        cover = Bubble.GetPart(coverPart);
        if (cover == null)
        {
            Debug.LogWarning($"[Hidden] {Bubble.name} chưa có BubblePart.{coverPart} trong BubbleParts", Bubble);
        }
        else
        {
            coverBaseScale = cover.localScale;
            coverRenderer = cover.GetComponent<SpriteRenderer>();
            if (coverRenderer != null) coverBaseColor = coverRenderer.color;
            cover.gameObject.SetActive(true);
        }

        BoardManager board = LevelManager.Ins.BoardManager;
        bottom = board != null ? board.BottomCollider : null;
        if (bottom == null)
        {
            Debug.LogWarning("[Hidden] Không tìm thấy collider Bottom (BoardManager.BottomCollider)", this);
        }
    }

    protected override void OnRelease()
    {
        DOTween.Kill(this);

        if (cover != null)
        {
            cover.localScale = coverBaseScale;
            cover.gameObject.SetActive(false);
        }

        // Trả alpha gốc: lần sau bubble này che lại phải kín
        if (coverRenderer != null) coverRenderer.color = coverBaseColor;

        cover = null;
        coverRenderer = null;
        bottom = null;
    }

    private void FixedUpdate()
    {
        if (!IsActive || bottom == null) return;

        if (IsTouchingBottom())
        {
            touchTimer += Time.fixedDeltaTime;
            if (touchTimer >= settleTime)
            {
                Clear();   // hết chặn tap ngay, hiệu ứng lộ chạy trong PlayClearAnimation
            }
        }
        else
        {
            touchTimer = 0f;
        }
    }

    private bool IsTouchingBottom()
    {
        Collider2D myCollider = Bubble.Collider;
        if (myCollider == null || !myCollider.enabled) return false;

        // Đo mép-mép, chồng lên nhau thì giá trị âm -> vẫn tính là chạm
        return Ultils.ColliderEdgeDistance(myCollider, bottom) <= bottomTolerance;
    }

    public override void PlayBlockedFeedback()
    {
        if (!IsActive || cover == null) return;

        cover.DOKill(true);
        cover.DOPunchScale(coverBaseScale * 0.08f, 0.2f, 10, 1f);
    }

    protected override void PlayClearAnimation(Action onComplete)
    {
        SoundManager.Ins.PlaySFX(SoundFX.Hidden_Reveal);
        if (cover == null || coverRenderer == null)
        {
            onComplete?.Invoke();
            return;
        }

        ParticlesManager.Ins.PlayEffect(ParticleEffectType.FX_Egg, cover.position);

        cover.DOKill();
        Sequence seq = DOTween.Sequence().SetTarget(this);
        seq.Join(coverRenderer.DOFade(0f, revealDuration).SetEase(Ease.OutQuad));
        seq.Join(cover.DOScale(coverBaseScale * 1.1f, revealDuration).SetEase(Ease.OutQuad));
        seq.OnComplete(() => onComplete?.Invoke());
    }
}
