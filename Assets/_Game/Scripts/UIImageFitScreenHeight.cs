using UnityEngine;

[RequireComponent(typeof(RectTransform))]
public class UIImageFitScreenHeight : MonoBehaviour
{
    [Tooltip("Design size of the image. At or below this canvas height the image keeps this size; above it, both axes scale up together.")]
    [SerializeField]
    private Vector2 m_BaseSize = new Vector2(1920f, 1920f);

    [Tooltip("Canvas height the base size is designed for. The image is only refitted when the canvas is taller than this.")]
    [SerializeField, Min(1f)]
    private float m_BaseHeight = 1920f;

    [Tooltip("Extra scale on top of the exact fit (1.01 hides a one pixel seam at the edges from rounding).")]
    [SerializeField, Min(0.01f)]
    private float m_Overscan = 1.01f;

    private RectTransform m_Rect;

    private void Awake()
    {
        m_Rect = (RectTransform)transform;
    }

    private void OnEnable()
    {
        Fit();
    }

    [ContextMenu("Fit Image To Screen Height")]
    public void Fit()
    {
        if (m_Rect == null)
        {
            m_Rect = (RectTransform)transform;
        }

        Canvas canvas = GetComponentInParent<Canvas>();
        if (canvas == null)
        {
            return;
        }

        // Canvas height in canvas units (after CanvasScaler). Width is ignored on purpose.
        float canvasHeight = ((RectTransform)canvas.rootCanvas.transform).rect.height;
        if (canvasHeight <= Mathf.Epsilon || m_BaseHeight <= Mathf.Epsilon)
        {
            return;
        }

        // Already tall enough to cover the canvas (this also holds right after a
        // previous Fit, because of the overscan): nothing left to do.
        if (m_Rect.rect.height >= canvasHeight)
        {
            return;
        }

        // Screen not taller than the base: keep the design size.
        float factor = 1f;
        if (canvasHeight > m_BaseHeight)
        {
            float overscan = m_Overscan > 0f ? m_Overscan : 1f;
            factor = canvasHeight * overscan / m_BaseHeight;
        }

        // The same factor on both axes keeps the aspect ratio of the base size.
        m_Rect.SetSizeWithCurrentAnchors(RectTransform.Axis.Horizontal, m_BaseSize.x * factor);
        m_Rect.SetSizeWithCurrentAnchors(RectTransform.Axis.Vertical, m_BaseSize.y * factor);
    }

    // private void OnValidate()
    // {
    //     m_BaseSize.x = Mathf.Max(1f, m_BaseSize.x);
    //     m_BaseSize.y = Mathf.Max(1f, m_BaseSize.y);
    //     m_Overscan = Mathf.Max(0.01f, m_Overscan);

    //     if (isActiveAndEnabled)
    //     {
    //         Fit();
    //     }
    // }
}
