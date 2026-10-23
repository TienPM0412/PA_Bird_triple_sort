using System;
using DG.Tweening;
using UnityEngine;

/// <summary>
/// Chong chóng xuất hiện giữa bàn, quay nhanh dần (đổi sang sprite blur), tới đỉnh thì báo
/// onPeak để shuffle chim, rồi quay chậm lại và biến mất.
/// </summary>
public class ShuffleFX : MonoBehaviour
{
    [SerializeField] private Transform fan;
    [SerializeField] private Transform fan_spin;

    [Header("Timing")]
    [SerializeField, Min(0.01f)] private float appearDuration = 0.3f;
    [SerializeField, Min(0.01f)] private float spinDuration = 1.4f;
    [SerializeField, Min(0.01f)] private float disappearDuration = 0.25f;

    [Header("Spin")]
    [Tooltip("Tổng góc quay trong lúc spin (độ). Quay ngược chiều kim đồng hồ nếu dương.")]
    [SerializeField] private float totalSpinAngle = 1800f;

    [Tooltip("Tốc độ quay (0-1) từ mức này trở lên thì đổi sang sprite blur.")]
    [SerializeField, Range(0.05f, 0.95f)] private float blurThreshold = 0.5f;

    [Header("Wobble")]
    [Tooltip("Độ nghiêng lắc tối đa (độ) lúc quay nhanh nhất. Lúc mới quay/sắp dừng lắc ít hơn.")]
    [SerializeField, Min(0f)] private float wobbleAngle = 8f;
    [Tooltip("Độ rung vị trí tối đa (đơn vị world).")]
    [SerializeField, Min(0f)] private float wobbleOffset = 0.06f;
    [SerializeField, Min(0f)] private float wobbleSpeed = 22f;

    [Header("Sorting")]
    [Tooltip("Cộng thêm vào sortingOrder của mọi sprite để FX nằm trên bubble và chim.")]
    [SerializeField] private int sortingOrderOffset = 200;

    private SpriteRenderer fanRenderer;
    private SpriteRenderer fanSpinRenderer;
    private Sequence sequence;
    private bool sortingApplied;
    private ParticlesBase particle;

    private void Awake()
    {
        CacheRenderers();
        ApplySorting();
        ResetVisual();
    }

    private void CacheRenderers()
    {
        if (fanRenderer == null && fan != null) fanRenderer = fan.GetComponent<SpriteRenderer>();
        if (fanSpinRenderer == null && fan_spin != null) fanSpinRenderer = fan_spin.GetComponent<SpriteRenderer>();
    }

    private void ApplySorting()
    {
        if (sortingApplied) return;
        sortingApplied = true;

        foreach (SpriteRenderer sprite in GetComponentsInChildren<SpriteRenderer>(true))
        {
            sprite.sortingOrder += sortingOrderOffset;
        }
    }

    /// Thời gian chong chóng hiện ra xong (bắt đầu quay).
    public float AppearDuration => appearDuration;

    /// Thời điểm quay nhanh nhất, tính từ lúc Play (onPeak được gọi ở đây).
    public float PeakTime => appearDuration + spinDuration * 0.5f;

    /// Sinh FX tại position (ẩn, scale 0 tới khi Play). Thiếu prefab thì trả về null, shuffle chạy không FX.
    public static ShuffleFX Spawn(ShuffleFX prefab, Vector3 position)
    {
        if (prefab == null)
        {
            return null;
        }

        position.z = prefab.transform.position.z;
        return Instantiate(prefab, position, Quaternion.identity);
    }

    /// Dừng ngay và huỷ FX (shuffle không chạy được / reset level giữa chừng).
    public void Dispose()
    {
        Stop();
        Destroy(gameObject);
    }

    private void ResetVisual()
    {
        transform.localScale = Vector3.zero;
        SetRotation(0f);
        SetBlur(0f);
    }

    /// <param name="onPeak">Gọi khi cánh quạt quay nhanh nhất (lúc này chim đã bị che, shuffle ở đây).</param>
    /// <param name="onComplete">Gọi khi FX đã biến mất hoàn toàn.</param>
    public void Play(Action onPeak, Action onComplete)
    {
        CacheRenderers();
        ApplySorting();
        Stop();
        gameObject.SetActive(true);
        ResetVisual();

        float angle = 0f;
        float peakTime = PeakTime;
        Vector3 basePosition = transform.localPosition;
        float phase = UnityEngine.Random.value * Mathf.PI * 2f;

        sequence = DOTween.Sequence().SetLink(gameObject);
        sequence.Append(transform.DOScale(Vector3.one, appearDuration).SetEase(Ease.OutBack));
        particle = ParticlesManager.Ins.SpawnParticleEffect(ParticleEffectType.FX_WindyShuffle, transform.position);
        if (particle != null)
        {
            // LeanPool tái sử dụng object, lần trước đã scale về 0 nên phải trả lại 1.
            Transform windTransform = particle.transform;
            windTransform.DOKill();
            windTransform.localScale = Vector3.one;
            particle.Play();

            // Gió thu nhỏ dần về 0 đúng lúc chim bị hút hết vào tâm (PeakTime), nhanh dần giống chim (InQuad).
            sequence.Insert(appearDuration,
                windTransform.DOScale(Vector3.zero, peakTime - appearDuration).SetEase(Ease.InQuad));
        }
        // Quay nhanh dần rồi chậm dần; độ blur bám theo tốc độ (đỉnh ở giữa).
        sequence.Insert(appearDuration, DOTween.To(() => angle, value =>
            {
                angle = value;
                SetRotation(angle);
                float speed = Mathf.Sin(Mathf.PI * Mathf.Clamp01(angle / totalSpinAngle));
                SetBlur(speed);
                ApplyWobble(basePosition, phase, speed);
            }, totalSpinAngle, spinDuration)
            .SetEase(Ease.InOutSine));

        sequence.InsertCallback(peakTime, () =>
        {
            onPeak?.Invoke();


        });

        sequence.Insert(appearDuration + spinDuration,
            transform.DOScale(Vector3.zero, disappearDuration).SetEase(Ease.InBack));

        sequence.OnComplete(() =>
        {
            sequence = null;
            gameObject.SetActive(false);
            onComplete?.Invoke();
            if (particle != null)
            {
                particle.DeSpawn();
                particle = null;
            }
        });
    }

    public void Stop()
    {
        sequence?.Kill();
        sequence = null;
    }

    // Lắc cả chong chóng (nghiêng + rung nhẹ), biên độ bám theo tốc độ quay nên đầu/cuối tự êm lại.
    private void ApplyWobble([Bridge.Ref] Vector3 basePosition, float phase, float intensity)
    {
        float t = Time.time * wobbleSpeed + phase;
        transform.localRotation = Quaternion.Euler(0f, 0f, Mathf.Sin(t) * wobbleAngle * intensity);
        transform.localPosition = basePosition + new Vector3(
            Mathf.Sin(t * 1.3f) * wobbleOffset * intensity,
            Mathf.Cos(t * 0.9f) * wobbleOffset * intensity,
            0f);
    }

    private void SetRotation(float angle)
    {
        Quaternion rotation = Quaternion.Euler(0f, 0f, -angle);
        if (fan != null) fan.localRotation = rotation;
        if (fan_spin != null) fan_spin.localRotation = rotation;
    }

    // Đổi sprite tức thì, không fade: quay đủ nhanh thì dùng bản blur, chậm lại thì về bản rõ nét.
    private void SetBlur(float speed)
    {
        bool blurred = speed >= blurThreshold;
        if (fanRenderer != null) fanRenderer.enabled = !blurred;
        if (fanSpinRenderer != null) fanSpinRenderer.enabled = blurred;
    }

    private void OnDestroy()
    {
        Stop();
    }
}
