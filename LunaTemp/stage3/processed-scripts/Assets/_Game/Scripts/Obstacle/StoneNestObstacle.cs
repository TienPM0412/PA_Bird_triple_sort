using UnityEngine;
using System.Collections.Generic;


/// <summary>
/// Stone: bubble không có chim, chỉ nằm trên board làm vật cản (chặn bằng vật lý).
/// Không tap được, không bị phá. Bị dọn khi restart level.
/// </summary>
public class StoneNestObstacle : ObstacleBase
{
    [Header("Phần hình trong bubble (khai báo trong BubbleParts)")]
    [SerializeField] private BubblePart stonePart = BubblePart.StoneOverlay;
    [SerializeField] private BubblePart[] hiddenParts = { BubblePart.Visual, BubblePart.Front };
    [SerializeField] private bool keepUpright = false;

    [Header("Vật lý (tùy chọn)")]
    [Tooltip("0 = giữ nguyên khối lượng của prefab bubble. > 0 = đá nặng hơn, khó bị đẩy")]
    [SerializeField, Min(0f)] private float stoneMass = 0f;

    private Transform stone;
    private readonly List<SpriteRenderer> hiddenRenderers = new List<SpriteRenderer>();
    private Rigidbody2D body;
    private float baseMass;
    private bool massChanged;

    public override ObstacleType Type => ObstacleType.Stone;

    // Không có chim để chặn
    public override bool BlocksBirdTap => false;

    protected override void OnInit(BubbleConfig config)
    {
        stone = Bubble.GetPart(stonePart);
        if (stone == null)
        {
            Debug.LogWarning($"[Stone] {Bubble.name} chưa có BubblePart.{stonePart} trong BubbleParts", Bubble);
        }
        else
        {
            stone.gameObject.SetActive(true);
        }

        for (int i = 0; i < hiddenParts.Length; i++)
        {
            Transform part = Bubble.GetPart(hiddenParts[i]);
            SpriteRenderer sprite = part != null ? part.GetComponent<SpriteRenderer>() : null;
            if (sprite == null)
            {
                Debug.LogWarning($"[Stone] {Bubble.name} chưa có BubblePart.{hiddenParts[i]} (SpriteRenderer) trong BubbleParts", Bubble);
                continue;
            }

            sprite.enabled = false;
            hiddenRenderers.Add(sprite);
        }

        if (Bubble.BirdCount > 0)
        {
            Debug.LogWarning($"[Stone] BubbleID {config.BubbleID} là Stone nhưng có {Bubble.BirdCount} chim", Bubble);
        }

        body = Bubble.GetComponent<Rigidbody2D>();
        massChanged = body != null && stoneMass > 0f;
        if (massChanged)
        {
            baseMass = body.mass;
            body.mass = stoneMass;
        }
    }

    protected override void OnRelease()
    {
        for (int i = 0; i < hiddenRenderers.Count; i++)
        {
            if (hiddenRenderers[i] != null) hiddenRenderers[i].enabled = true;
        }
        hiddenRenderers.Clear();
        if (stone != null) stone.gameObject.SetActive(false);

        // Trả khối lượng gốc: bubble về pool có thể dùng lại cho trứng thường
        if (massChanged && body != null) body.mass = baseMass;

        stone = null;
        body = null;
        massChanged = false;
    }

    private void LateUpdate()
    {
        if (keepUpright && stone != null) stone.rotation = Quaternion.identity;
    }
}