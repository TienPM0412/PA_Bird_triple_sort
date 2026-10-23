using UnityEngine;

public class BubbleThreeSlot : BubbleBase
{
    [Header("Three Bird Triangle Layout")]
    [SerializeField] private Vector2 layoutCenter = Vector2.zero;
    [SerializeField, Min(0f)] private float horizontalOffset = 0.32f;
    [SerializeField, Min(0f)] private float verticalOffset = 0.37f;

    protected override void SetupPosition()
    {
        if (birds == null || birds.Count == 0)
        {
            return;
        }

        // Layout cố định nên chỉ cần tính 1 lần rồi cache lại; tính lazy ở đây (thay vì
        // trong Start()) vì Init() có thể chạy trước Start() khi bubble mới được spawn.
        // Keep the triangle centroid at layoutCenter.
        if (positions == null) positions = new Vector2[]
        {
            layoutCenter + new Vector2(0f, verticalOffset),
            layoutCenter + new Vector2(-horizontalOffset, -verticalOffset * 0.5f),
            layoutCenter + new Vector2(horizontalOffset, -verticalOffset * 0.5f),
        };

        // Magnet có thể rút bớt chim khỏi bubble chưa spawn nên số chim thực tế
        // có thể ít hơn số slot; vẫn phải xếp cho đủ số chim đang có, không bỏ qua hết.
        int count = Mathf.Min(birds.Count, positions.Length);
        for (int i = 0; i < count; i++)
        {
            SetBirdPosition(i, positions[i]);
        }
    }

    [ContextMenu("Refresh Three Bird Layout")]
    private void RefreshLayout()
    {
        positions = null; // Ép tính lại vì offset trong Inspector có thể vừa đổi.
        SetupPosition();
    }

    private void SetBirdPosition(int index, [Bridge.Ref] Vector2 position)
    {
        Bird bird = birds[index];
        if (bird == null)
        {
            Debug.LogWarning(
                $"Bird at index {index} is not assigned on '{name}'.",
                this);
            return;
        }

        Transform birdTransform = bird.transform;
        Vector3 currentPosition = birdTransform.localPosition;
        birdTransform.localPosition = new Vector3(position.x, position.y, currentPosition.z);
    }
}
