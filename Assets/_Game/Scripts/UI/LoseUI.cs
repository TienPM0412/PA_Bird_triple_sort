using UnityEngine;
using UnityEngine.UI;
using Spine.Unity;

public class LoseUI : UICanvas
{
    [SerializeField] private Button buttonFullScreen;
    [SerializeField] private Button buttonRetry;

    [Header("Bird Lose Anim")]
    [SerializeField] private SkeletonGraphic birdLoseSkeleton;
    [SerializeField] private string birdLoseAnimName = "animation";
    [SerializeField] private bool birdLoseLoop = true;
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
        if (birdLoseSkeleton != null)
            Ultils.PlayAnimationUI(birdLoseSkeleton, birdLoseAnimName, loop: birdLoseLoop);
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
