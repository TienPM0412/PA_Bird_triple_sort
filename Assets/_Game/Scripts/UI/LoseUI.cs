using UnityEngine;
using UnityEngine.UI;
using Spine.Unity;

public class LoseUI : UICanvas
{
    [SerializeField] private Button buttonClose;
    [SerializeField] private Button buttonRetry;

    [Header("Bird Lose Anim")]
    [SerializeField] private SkeletonGraphic birdLoseSkeleton;
    [SerializeField] private string birdLoseAnimName = "animation";
    [SerializeField] private bool birdLoseLoop = true;
    public override string TrackPosition => "lose_level";
    private bool isDone;

    private void Awake()
    {
        buttonClose.onClick.AddListener(OnCloseButtonClicked);
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
        if (birdLoseSkeleton != null)
            Ultils.PlayAnimationUI(birdLoseSkeleton, birdLoseAnimName, loop: birdLoseLoop);
    }

    private void OnRetryButtonClicked()
    {
        if (isDone) return;
        isDone = true;

        LevelManager.Ins.RestartLevel();
        CloseDirectly();
    }

    private void OnCloseButtonClicked()
    {
        PlayableAdHelper.InstallFullGame();
    }
}
