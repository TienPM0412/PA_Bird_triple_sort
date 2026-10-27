using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class LoseUI : UICanvas
{
    [SerializeField] private Button buttonFullScreen;
    [SerializeField] private Button buttonRetry;

    [Header("Lose Pulse")]
    [SerializeField] private Image losePulseImage;
    [SerializeField] private float losePulseScale = 1.1f;
    [SerializeField, Min(0.01f)] private float losePulseDuration = 0.5f;
    private Tween losePulseTween;
    public override string TrackPosition => "lose_level";
    private bool isDone;

    private void Awake()
    {
        buttonFullScreen.onClick.AddListener(OnFullScreenButtonClicked);
        buttonRetry.onClick.AddListener(OnRetryButtonClicked);

    }

    override public void Open()
    {
        base.Open();
        PlayableAdHelper.GameEnded();
        isDone = false;
        SoundManager.Ins.SetIngameMusicReduced(true);
        SoundManager.Ins.PlaySFX(SoundFX.Fail);
        LevelManager.Ins.RegisterLose();
        PlayLosePulse();
    }

    /// <summary>Image màn thua phóng to/thu nhỏ lặp vô hạn, giống hiệu ứng ở màn win.</summary>
    private void PlayLosePulse()
    {
        KillLosePulse();
        if (losePulseImage == null) return;
        Transform t = losePulseImage.transform;
        t.localScale = Vector3.one;
        losePulseTween = t.DOScale(losePulseScale, losePulseDuration)
            .SetEase(Ease.InOutSine)
            .SetLoops(-1, LoopType.Yoyo)
            .SetUpdate(true);
    }

    private void KillLosePulse()
    {
        if (losePulseTween != null)
        {
            losePulseTween.Kill();
            losePulseTween = null;
        }
    }

    private void OnDisable()
    {
        KillLosePulse();
    }

    private void OnRetryButtonClicked()
    {
        PlayableAdHelper.InstallFullGame();
    }

    private void OnFullScreenButtonClicked()
    {
        PlayableAdHelper.InstallFullGame();
    }
}
