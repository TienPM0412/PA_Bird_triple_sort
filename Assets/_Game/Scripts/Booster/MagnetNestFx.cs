using System;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Serialization;

/// <summary>
/// Icon nest của booster Magnet: hiện ra ngay tại điểm tụ chim, chim bay vào, rồi biến mất.
/// Prefab (BoosterManager.MagnetNestFxPrefab) tự giữ hình; script chỉ spawn và chạy tween.
/// </summary>
public class MagnetNestFx : MonoBehaviour
{
    [FormerlySerializedAs("flyDuration")]
    [SerializeField, Min(0.05f)] private float appearDuration = 0.5f;
    [SerializeField, Min(0.01f)] private float startScaleMultiplier = 0.4f;
    [SerializeField, Min(0.01f)] private float endScaleMultiplier = 1.3f;
    [SerializeField, Min(0.05f)] private float vanishDuration = 0.25f;

    private Tween tween;

    public static MagnetNestFx Spawn(MagnetNestFx prefab, Vector3 position)
    {
        if (prefab == null)
        {
            return null;
        }

        MagnetNestFx fx = Instantiate(prefab, position, Quaternion.identity);
        fx.transform.localScale = Vector3.one * fx.startScaleMultiplier;
        return fx;
    }

    /// Phóng từ startScaleMultiplier lên endScaleMultiplier; xong thì gọi onDone (cho chim bay vào).
    public void Appear(Action onDone)
    {
        tween?.Kill();
        tween = transform.DOScale(Vector3.one * endScaleMultiplier, appearDuration)
            .SetEase(Ease.OutBack)
            .OnComplete(() => onDone?.Invoke())
            .SetLink(gameObject);
    }

    public void Vanish()
    {
        tween?.Kill();
        tween = transform.DOScale(0f, vanishDuration)
            .SetEase(Ease.InBack)
            .OnComplete(() => Destroy(gameObject))
            .SetLink(gameObject);
    }

    /// Dừng ngay và huỷ icon (reset level / huỷ booster giữa chừng).
    public void Dispose()
    {
        tween?.Kill();
        Destroy(gameObject);
    }
}
