using DG.Tweening;
using UnityEngine;

public class ItemPop : MonoBehaviour
{
    [SerializeField] bool disablePopOnAwake;
    [SerializeField] float min = 0.1f;
    [SerializeField] float max = 1.2f;
    [SerializeField] float dur1 = 0.125f;
    [SerializeField] float dur2 = 0.1f;
    [SerializeField] float dur3 = 0.065f;
    float startScale;
    private void Awake()
    {
        startScale = transform.localScale.x;
    }
    private void OnEnable()
    {
        if (disablePopOnAwake)
            return;
        transform.localScale = min * startScale * Vector3.one;
        transform.DOScale(max * startScale, dur1).SetEase(Ease.OutQuad).OnComplete(() =>
              transform.DOScale(0.85f * startScale, dur2).SetEase(Ease.OutQuad).OnComplete(() =>
              transform.DOScale(startScale, dur3).SetEase(Ease.OutQuad)
           ));
    }

    public void LightBounce()
    {
        transform.localScale = 0.8f * startScale * Vector3.one;
        transform.DOScale(1.15f * startScale, dur1).SetEase(Ease.OutQuad).OnComplete(() =>
              transform.DOScale(0.9f * startScale, dur2).SetEase(Ease.OutQuad).OnComplete(() =>
              transform.DOScale(startScale, dur3).SetEase(Ease.OutQuad)
           ));
    }
    public void LightBounceOut()
    {
        transform.localScale = 1.05f * startScale * Vector3.one;
        transform.DOScale(1.1f * startScale, 0.05f).SetEase(Ease.OutQuad).OnComplete(() =>
              transform.DOScale(1f * startScale, 0.1f).SetEase(Ease.OutQuad));
    }

    public void Disappear()
    {
        transform.localScale = 1.05f * startScale * Vector3.one;
        transform.DOScale(1.1f * startScale, 0.05f).SetEase(Ease.OutQuad).OnComplete(() =>
              transform.DOScale(0f * startScale, 0.15f).SetEase(Ease.OutQuad).OnComplete(() =>
              transform.gameObject.SetActive(false)
           ));
    }
}
