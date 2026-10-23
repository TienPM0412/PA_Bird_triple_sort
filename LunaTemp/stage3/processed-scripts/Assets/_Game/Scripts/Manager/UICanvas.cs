
using UnityEngine;
using DG.Tweening;
using System;
using Sirenix.OdinInspector;


public class UICanvas : MonoBehaviour
{
    //public bool IsAvoidBackKey = false;

    private bool canClose;
    private bool canOpen;
    public CanvasGroup canvaG;
    public GameObject imgPanel;
    public bool IsDestroyOnClose = false;

    protected RectTransform m_RectTransform;
    private Animator m_Animator;
    //private float m_OffsetY = 0;
    public bool isFadeIn = false;
    public bool isFadeOut = false;
    public bool isSoundOpen = true;

    public Action OnOpen;
    public Action OnClose;

    public Action OnFadeIn_Complete;
    public Action OnFadeOut_Complete;
    public RectTransform contentFadeIO;

    // ===Tracking position===
    public virtual string TrackPosition => null;
    public int OpenOrder { get; private set; }
    public bool IsClosing { get; private set; }
    private static int openCounter;

    private void Start()
    {
        OnInit();
    }

    //Init default Canvas
    //khoi tao gia tri canvas
    protected void OnInit()
    {
        m_RectTransform = GetComponent<RectTransform>();
        m_Animator = GetComponent<Animator>();

        // // xu ly tai tho
        // float ratio = (float)Screen.height / (float)Screen.width;
        // if (ratio > 2.1f)
        // {
        //     Vector2 leftBottom = m_RectTransform.offsetMin;
        //     Vector2 rightTop = m_RectTransform.offsetMax;
        //     rightTop.y = -100f;
        //     m_RectTransform.offsetMax = rightTop;
        //     leftBottom.y = 0f;
        //     m_RectTransform.offsetMin = leftBottom;
        //     m_OffsetY = 100f;
        // }
    }

    //Setup canvas to avoid flash UI
    //set up mac dinh cho UI de tranh truong hop bi nhay' hinh
    public virtual void Setup()
    {
        UIManager.Ins.AddBackUI(this);
        UIManager.Ins.PushBackAction(this, BackKey);
    }


    //back key in android device
    //back key danh cho android
    public virtual void BackKey()
    {

    }

    //Open canvas
    //mo canvas
    public virtual void Open()
    {
        OpenOrder = ++openCounter;
        IsClosing = false;
        if (isFadeIn) contentFadeIO.localScale = Vector3.zero;
        transform.SetAsLastSibling();
        gameObject.SetActive(true);
        if (isSoundOpen)
        {
            SoundManager.Ins.PlaySFX(SoundFX.Popup_Show);
        }
        if (isFadeIn)
        {
            contentFadeIO.localScale = Vector3.one;
            canvaG.alpha = 0;

            PlayPopupIn(contentFadeIO, () => OnFadeIn_Complete?.Invoke());
        }
        canClose = true;
        canOpen = false;
        OnOpen?.Invoke();
    }

    //close canvas directly
    //dong truc tiep, ngay lap tuc
    public virtual void CloseDirectly()
    {
        IsClosing = true;
        UIManager.Ins.RemoveBackUI(this);
        OnClose?.Invoke();
        OnClose = null;
        OnOpen = null;
        OnFadeIn_Complete = null;
        if (isSoundOpen)
        {
            //SoundManager.Ins.PlaySFX(SFX.SFX_POPUP_CLOSE, SoundManager.SFXType.Minor);
        }
        //Animation
        if (isFadeOut)
        {
            Sequence seq = DOTween.Sequence();

            seq.Join(
                canvaG.DOFade(0, 0.15f)
            );

            seq.Join(
                contentFadeIO.DOScale(Vector3.zero, 0.15f)
                    .SetEase(Ease.InBack)
            );

            seq.OnComplete(() =>
            {
                gameObject.SetActive(false);
                OnFadeOut_Complete?.Invoke();
                OnFadeOut_Complete = null;

                if (IsDestroyOnClose)
                    Destroy(gameObject);

            });
        }
        else
        {
            gameObject.SetActive(false);
            OnFadeOut_Complete?.Invoke();
            OnFadeOut_Complete = null;
            if (IsDestroyOnClose)
                Destroy(gameObject);
        }


    }

    //close canvas with delay time, used to anim UI action
    //dong canvas sau mot khoang thoi gian delay
    public virtual void Close(float delayTime)
    {
        Invoke(nameof(CloseDirectly), delayTime);
    }

    // scale up nhanh vuot qua 1 chut roi nhun nhe ve 1
    private void PlayPopupIn(Transform target, Action onComplete = null)
    {
        const float fadeTime = 0.1f;
        const float scaleUpTime = 0.08f;
        const float settleTime = 0.08f;
        const float overshoot = 1.05f;

        target.DOKill();
        target.localScale = Vector3.one;

        Sequence seq = DOTween.Sequence();

        if (canvaG != null)
        {
            canvaG.DOKill();
            canvaG.alpha = 0f;
            seq.Append(canvaG.DOFade(1f, fadeTime).SetEase(Ease.OutQuad));
        }

        // seq.Join(target.DOScale(overshoot, scaleUpTime).SetEase(Ease.OutQuad));
        // seq.Append(target.DOScale(1f, settleTime).SetEase(Ease.InOutSine));

        // fade xong moi scale to ra 1 chut roi nhun ve 1
        seq.Append(contentFadeIO.DOScale(overshoot, scaleUpTime).SetEase(Ease.OutCubic));
        seq.Append(contentFadeIO.DOScale(1f, settleTime).SetEase(Ease.InOutQuad));


        seq.OnComplete(() => onComplete?.Invoke());
    }

    public virtual void FadeIn()
    {
        if (!canOpen)
        {
            canOpen = true;
            PlayPopupIn(imgPanel.transform);
        }
    }

    public virtual void FadeIn(Action c)
    {
        if (!canOpen)
        {
            canOpen = true;
            PlayPopupIn(imgPanel.transform, c);
        }
    }

    public virtual void CloseFadeOut(Action end = null)
    {
        if (canClose)
        {
            canClose = false;

            if (canvaG != null)
            {
                canvaG.DOFade(0f, 0.2f);
            }

            Vector3 targetScale = new Vector3(0.1f, 0.1f, 0.1f);
            imgPanel.transform.DOScale(targetScale, 0.2f).SetEase(Ease.InBack)
                .OnComplete(() =>
                {
                    end?.Invoke();
                    CloseDirectly();
                });
        }

    }
}
