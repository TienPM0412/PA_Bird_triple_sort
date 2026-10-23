using System.Collections;
using UnityEngine;

[RequireComponent(typeof(SpriteRenderer))]
public class SpriteFitScreenHeight : MonoBehaviour
{
    [SerializeField]
    [Tooltip("Camera the sprite is fitted to. Empty = the enabled MainCamera-tagged camera of this object's scene (Camera.main is the persistent Service camera in this project).")]
    private Camera m_Camera;

    [Tooltip("Extra scale on top of the exact fit (1.01 hides a one pixel seam at the edges from rounding).")]
    [SerializeField, Min(0.01f)]
    private float m_Overscan = 1.01f;

    private SpriteRenderer m_Renderer;
    private Camera m_ResolvedCamera;

    private void Awake()
    {
        m_Renderer = GetComponent<SpriteRenderer>();
    }

    private IEnumerator Start()
    {
        // TopContainer fits the whole board during Start/LateUpdate. Waiting
        // until the end of that frame lets this component use the final parent
        // scale, while still fitting the background only once.
        yield return new WaitForEndOfFrame();
        Fit();
    }

    [ContextMenu("Fit Sprite To Screen Height")]
    public void Fit()
    {
        if (m_Renderer == null)
        {
            m_Renderer = GetComponent<SpriteRenderer>();
        }

        Fit(ResolveCamera());
    }

    private void Fit(Camera camera)
    {
        if (camera == null || m_Renderer == null || m_Renderer.sprite == null)
        {
            return;
        }

        // Playworks không có SpriteRenderer.localBounds
        float spriteHeight = m_Renderer.drawMode == SpriteDrawMode.Simple
            ? m_Renderer.sprite.bounds.size.y
            : m_Renderer.size.y;
        float viewHeight = GetCameraViewHeight(camera);
        Vector3 parentScale = GetParentWorldScale();
        float parentScaleX = Mathf.Abs(parentScale.x);
        float parentScaleY = Mathf.Abs(parentScale.y);

        if (spriteHeight <= Mathf.Epsilon ||
            viewHeight <= Mathf.Epsilon ||
            parentScaleX <= Mathf.Epsilon ||
            parentScaleY <= Mathf.Epsilon)
        {
            return;
        }

        float overscan = m_Overscan > 0f ? m_Overscan : 1f;
        float targetWorldScale = viewHeight * overscan / spriteHeight;
        Vector3 localScale = transform.localScale;
        float xSign = localScale.x < 0f ? -1f : 1f;
        float ySign = localScale.y < 0f ? -1f : 1f;

        // Compensating each parent axis keeps the sprite's world-space aspect
        // ratio intact even when the parent uses a non-uniform scale.
        localScale.x = xSign * targetWorldScale / parentScaleX;
        localScale.y = ySign * targetWorldScale / parentScaleY;
        transform.localScale = localScale;

        m_ResolvedCamera = camera;
    }

    private Camera ResolveCamera()
    {
        if (m_Camera != null)
        {
            return m_Camera;
        }

        if (IsUsableSceneCamera(m_ResolvedCamera))
        {
            return m_ResolvedCamera;
        }

        Camera[] cameras = Camera.allCameras; // Playworks không có FindObjectsByType

        Camera bestCamera = null;
        for (int i = 0; i < cameras.Length; i++)
        {
            Camera camera = cameras[i];
            if (!IsUsableSceneCamera(camera))
            {
                continue;
            }

            if (bestCamera == null || camera.depth > bestCamera.depth)
            {
                bestCamera = camera;
            }
        }

        m_ResolvedCamera = bestCamera;
        return bestCamera;
    }

    private bool IsUsableSceneCamera(Camera camera)
    {
        return camera != null &&
               camera.enabled && camera.gameObject.activeInHierarchy &&
               camera.gameObject.scene == gameObject.scene &&
               camera.CompareTag("MainCamera");
    }

    private float GetCameraViewHeight(Camera camera)
    {
        if (camera.orthographic)
        {
            return camera.orthographicSize * 2f;
        }

        float distance = Vector3.Dot(
            transform.position - camera.transform.position,
            camera.transform.forward);
        if (distance <= Mathf.Epsilon)
        {
            return 0f;
        }

        return 2f * distance * Mathf.Tan(camera.fieldOfView * 0.5f * Mathf.Deg2Rad);
    }

    private Vector3 GetParentWorldScale()
    {
        return transform.parent != null ? transform.parent.lossyScale : Vector3.one;
    }

    private void OnValidate()
    {
        m_Overscan = Mathf.Max(0.01f, m_Overscan);

        if (!isActiveAndEnabled)
        {
            return;
        }

        m_Renderer = GetComponent<SpriteRenderer>();
        Fit();
    }
}
