using UnityEngine;

/// <summary>
/// Trứng chứa chìa (IsKey): chim bên trong tap bình thường.
/// Khi trứng hết chim -> giao chìa cho trứng khóa sớm nhất còn thiếu chìa.
/// </summary>
public class KeyNestObstacle : ObstacleBase
{
    [Header("Phần hình trong bubble (khai báo trong BubbleParts)")]
    [SerializeField] private BubblePart keyPart = BubblePart.KeyIcon;

    private Transform keyIcon;

    public override ObstacleType Type => ObstacleType.Key;

    // Trứng chìa không chặn tap
    public override bool BlocksBirdTap => false;

    // Magnet rút sạch chim của trứng chìa chưa spawn -> mất chìa -> trứng khóa kẹt mãi
    public override bool ProtectsFromBooster(BoosterType booster) => booster == BoosterType.Net;

    protected override void OnInit(BubbleConfig config)
    {
        keyIcon = Bubble.GetPart(keyPart);
        if (keyIcon == null)
        {
            Debug.LogWarning($"[Key] {Bubble.name} chưa có BubblePart.{keyPart} trong BubbleParts", Bubble);
            return;
        }

        keyIcon.gameObject.SetActive(true);
    }

    protected override void OnRelease()
    {
        if (keyIcon != null) keyIcon.gameObject.SetActive(false);
        keyIcon = null;
    }

    protected override void Subscribe() => EventManager.AddListener<OnBirdReleasedEvent>(OnBirdReleased);
    protected override void Unsubscribe() => EventManager.RemoveListener<OnBirdReleasedEvent>(OnBirdReleased);

    private void OnBirdReleased([Bridge.Ref] OnBirdReleasedEvent evt)
    {
        // Chỉ xét trứng của chính mình, và chỉ khi con chim cuối cùng vừa rời trứng
        if (!IsActive || evt.bubble != Bubble || Bubble.BirdCount > 0) return;

        Vector3 from = keyIcon != null ? keyIcon.position : Bubble.transform.position;

        LockedNestObstacle target = LockedNestObstacle.FindKeyTarget();
        if (target != null)
        {
            target.ReceiveKey(from);
        }
        else
        {
            Debug.LogWarning($"[Key] {Bubble.name}: thu được chìa nhưng không có trứng khóa nào cần chìa", Bubble);
        }

        Clear();
    }

    // Bubble xoay theo vật lý -> giữ chìa luôn thẳng
    private void LateUpdate()
    {
        if (keyIcon != null) keyIcon.rotation = Quaternion.identity;
    }
}