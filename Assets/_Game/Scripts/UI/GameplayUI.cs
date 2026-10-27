using System;
using DG.Tweening;
using Sirenix.OdinInspector;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using System.Collections;


public class GameplayUI : UICanvas
{
    [SerializeField] private TMP_Text levelText;
    [SerializeField] private ButtonScaleUI settingButton;
    [SerializeField] private ButtonScaleUI outButton;
    [SerializeField] private ButtonScaleUI musicButton;
    [SerializeField] private ButtonScaleUI soundButton;
    [SerializeField] private ButtonScaleUI happticButton;
    [SerializeField] private ButtonScaleUI replayButton;
    [SerializeField] private Button canlelSettingButton;
    [SerializeField] private BoosterItemUI[] boosterItemUIs;
    [SerializeField] private GameObject musicCrossGameObject;
    [SerializeField] private GameObject soundCrossGameObject;
    [SerializeField] private GameObject happticCrossGameObject;
    //[SerializeField] private FireworkSequencePlayer fireworkSequencePlayer;
    [SerializeField] private RectTransform ContentBottomTransform;
    [SerializeField] private RectTransform pointBottom;
    [SerializeField] Image tagLevelImage;
    [SerializeField] Image tagSettingImage;
    [SerializeField] Image tagSetting1Image;
    [SerializeField] Image tagSetting2Image;

    [SerializeField] private Sprite[] tagLevelSprites;
    [SerializeField] private Sprite[] tagSettingSprites;
    [SerializeField] private Sprite[] tagSetting1Sprites;
    [SerializeField] private Sprite[] tagSetting2Sprites;

    [Header("Pre Win Panel")]
    [SerializeField] private GameObject PanelPreWin;
    [SerializeField] private Transform textPanelWinTransform;
    [SerializeField] private Image winPulseImage;
    [SerializeField] private float winPulseScale = 1.1f;
    [SerializeField, Min(0.01f)] private float winPulseDuration = 0.5f;
    [SerializeField] private Button btnPreWinContinue;
    [SerializeField] private Button btnPlayAgain;
    [Tooltip("Chan nhan trong khoang nay de nguoi choi khong vo tinh bam qua.")]
    [SerializeField] private float preWinTapDelay = 0.8f;
    private bool canContinuePreWin;
    private Coroutine preWinRoutine;

    [Header("Clear Booster")]
    [SerializeField] private SlingshotAnimator clearSlingshot;
    [SerializeField, Min(0.01f)] private float slingshotPopDuration = 0.2f;
    private Vector3 slingshotBaseScale = Vector3.one;


    [SerializeField] private Animator settingAnimator;
    private bool isSettingOpened = false;
    private Sequence preWinSequence;
    public CanvasGroup warningHard;
    public CanvasGroup warningExtreme;

    public BoosterItemUI[] BoosterItemUIs => boosterItemUIs;
    public override string TrackPosition => "ingame";

    // Playable Ads không dùng UIManager: GameplayUI đặt sẵn trong scene, script khác gọi qua Ins.
    public static GameplayUI Ins { get; private set; }

    [Header("Lose")]
    [SerializeField] private LoseUI loseUI;

    void Awake()
    {
        Ins = this;
        settingButton.action.AddListener(OnSettingButtonClick);
        outButton.action.AddListener(OnOutButtonClick);
        musicButton.action.AddListener(OnMusicButtonClick);
        soundButton.action.AddListener(OnSoundButtonClick);
        happticButton.action.AddListener(OnHappticButtonClick);
        replayButton.action.AddListener(OnReplayButtonClick);
        canlelSettingButton.onClick.AddListener(OnSettingButtonClick);
        btnPreWinContinue.onClick.AddListener(OnPreWinContinue);
        btnPlayAgain.onClick.AddListener(OnPreWinContinue);
        if (clearSlingshot != null)
        {
            slingshotBaseScale = clearSlingshot.transform.localScale;
            clearSlingshot.gameObject.SetActive(false);
        }
    }

    void OnEnable()
    {
        EventManager.AddListener<WinEvent>(OnWin);
    }

    void OnDisable()
    {
        EventManager.RemoveListener<WinEvent>(OnWin);
        Canvas.willRenderCanvases -= AlignBoardToBottomPointOnce;
        KillPreWin();
    }

    // public void RefreshBottomLayout()
    // {
    //     // Playworks không có Canvas.preWillRenderCanvases: dời UI đáy ngay,
    //     // rồi căn board một lần ở lượt render canvas kế tiếp (gộp nhiều lần gọi thành một).
    //     Canvas.willRenderCanvases -= AlignBoardToBottomPointOnce;
    //     if (!isActiveAndEnabled) return;

    //     RefreshBottomOffset();
    //     Canvas.willRenderCanvases += AlignBoardToBottomPointOnce;
    // }

    private void AlignBoardToBottomPointOnce()
    {
        Canvas.willRenderCanvases -= AlignBoardToBottomPointOnce;
        AlignBoardToBottomPoint();
    }


    void Start()
    {
        BoosterConfig config = BoosterManager.Ins.BoosterConfig;

        for (int i = 0; i < config.boosterInfos.Count; i++)
        {
            BoosterBase item = BoosterManager.Ins.CreateBooster(config.boosterInfos[i].type);
            item.SetData(config.boosterInfos[i]);

            boosterItemUIs[i].Init(config.boosterInfos[i], item);
        }
    }

    public override void Open()
    {
        base.Open();
        Initialize();

    }

    public void Initialize()
    {
        ResetSettingPanel();
        musicCrossGameObject.SetActive(!VariableSystem.Music);
        soundCrossGameObject.SetActive(!VariableSystem.Sound);
        // happticCrossGameObject.SetActive(!VariableSystem.Vibration);
        //RefreshBottomLayout();

        StopClearSlingshot();

        levelText.text = $"Lv.{VariableSystem.IndexLevel + 1}";
        ResetPreWin();

        for (int i = 0; i < boosterItemUIs.Length; i++)
        {
            boosterItemUIs[i].RefreshUI();
        }

        SoundManager.Ins.PlayMusic(Music.MUSIC_INGAME, SoundManager.Ins.IngameMusicVolume);
    }
    /// <summary>Đẩy ContentBottomTransform lên đúng bằng chiều cao banner; đã mua RemoveAds thì không đẩy.</summary>
//     private void RefreshBottomOffset()
//     {
//         if (ContentBottomTransform == null) return;
// #if UNITY_EDITOR
//         float bannerHeight = Ultils.GetBannerHeightPixels() * 2 + 30f; // RemoveAds → 0
// #else
//       float bannerHeight = Ultils.GetBannerHeightPixels();  
// #endif
//         Canvas canvas = ContentBottomTransform.GetComponentInParent<Canvas>();
//         float scale = canvas != null && canvas.rootCanvas.scaleFactor > 0f ? canvas.rootCanvas.scaleFactor : 1f;

//         Vector2 offsetMin = ContentBottomTransform.offsetMin;
//         float targetY = bannerHeight / scale; // pixel → đơn vị Canvas
//         if (!Mathf.Approximately(offsetMin.y, targetY))
//         {
//             offsetMin.y = targetY;
//             ContentBottomTransform.offsetMin = offsetMin;
//         }

//     }

    /// <summary>Căn _wallsParent của board để _cloude trùng độ cao với pointBottom sau khi UI đáy đã dời.</summary>
    private void AlignBoardToBottomPoint()
    {
        BoardManager board = LevelManager.Ins != null ? LevelManager.Ins.BoardManager : null;
        if (pointBottom == null || board == null || !board.isActiveAndEnabled) return;

        Canvas canvas = pointBottom.GetComponentInParent<Canvas>();
        Camera uiCamera = canvas != null && canvas.rootCanvas.renderMode != RenderMode.ScreenSpaceOverlay
            ? canvas.rootCanvas.worldCamera
            : null;

        Vector2 screenPoint = RectTransformUtility.WorldToScreenPoint(uiCamera, pointBottom.position);
        board.AlignWallsToScreenPoint(screenPoint);
    }

    public void ShowWarning(int leveldifficulty)
    {
        switch (leveldifficulty)
        {
            case 1:
                tagLevelImage.sprite = tagLevelSprites[0];
                tagSettingImage.sprite = tagSettingSprites[0];
                tagSetting1Image.sprite = tagSetting1Sprites[0];
                tagSetting2Image.sprite = tagSetting2Sprites[0];
                break;
            case 2:
                tagLevelImage.sprite = tagLevelSprites[1];
                tagSettingImage.sprite = tagSettingSprites[1];
                tagSetting1Image.sprite = tagSetting1Sprites[1];
                tagSetting2Image.sprite = tagSetting2Sprites[1];
                break;
            case 3:
                tagLevelImage.sprite = tagLevelSprites[2];
                tagSettingImage.sprite = tagSettingSprites[2];
                tagSetting1Image.sprite = tagSetting1Sprites[2];
                tagSetting2Image.sprite = tagSetting2Sprites[2];
                SoundManager.Ins.PlaySFX(SoundFX.Extreme_Hard_Level);
                ShowWarning(warningExtreme);
                break;
            default:
                break;
        }
    }
    public void ShowWarning(CanvasGroup canvasGroup)
    {
        //GameManager.Ins.isBlockInput = true;
        canvasGroup.alpha = 0f;

        canvasGroup.gameObject.SetActive(true);
        //IsWarningBlockingInput = true;

        canvasGroup
            .DOFade(1f, 0.25f)
            .OnComplete(() =>
            {
                DOVirtual.DelayedCall(
                    1f,
                    () =>
                    {
                        //GameManager.Ins.isBlockInput = false;
                        canvasGroup
                            .DOFade(0f, 0.25f)
                            .OnComplete(() =>
                            {
                                canvasGroup.gameObject.SetActive(false);
                                //IsWarningBlockingInput = false;
                            });
                    }
                );
            });
    }

    /// <summary>Đưa panel pre-win về trạng thái đầu (ẩn, text/icon scale 0) để lần thắng sau chạy lại từ đầu.</summary>
    private void ResetPreWin()
    {
        KillPreWin();
        canContinuePreWin = false;
        PanelPreWin.transform.localScale = Vector3.one;
        textPanelWinTransform.localScale = Vector3.zero;
        if (winPulseImage != null) winPulseImage.transform.localScale = Vector3.one;
        PanelPreWin.SetActive(false);
    }

    private void KillPreWin()
    {
        if (preWinSequence != null)
        {
            preWinSequence.Kill();
            preWinSequence = null;
        }
        if (preWinRoutine != null)
        {
            StopCoroutine(preWinRoutine);
            preWinRoutine = null;
        }
    }
[Button]
    private void Test()
    {
        PanelPreWin.SetActive(true);
    }


    private void OnWin(WinEvent e)
    {
        SoundManager.Ins.SetIngameMusicReduced(true);
        PlayableAdHelper.GameEnded();
        ResetPreWin();
        SoundManager.Ins.PlaySFX(SoundFX.Win);
        PanelPreWin.SetActive(true);
        PlayWinPulse();
        preWinRoutine = StartCoroutine(IE_PreWinTapDelay());
    }

    /// <summary>Image trong panel win phóng to/thu nhỏ lặp vô hạn; KillPreWin sẽ dừng.</summary>
    private void PlayWinPulse()
    {
        if (winPulseImage == null) return;
        Transform t = winPulseImage.transform;
        t.localScale = Vector3.one;
        preWinSequence = DOTween.Sequence()
            .Append(t.DOScale(winPulseScale, winPulseDuration).SetEase(Ease.InOutSine))
            .SetLoops(-1, LoopType.Yoyo)
            .SetUpdate(true);
    }

    private IEnumerator IE_PreWinTapDelay()
    {
        // Chặn bấm trong preWinTapDelay để người chơi không vô tình bấm qua.
        yield return new WaitForSecondsRealtime(preWinTapDelay);
        canContinuePreWin = true;
        preWinRoutine = null;
    }

    /// Mở màn thua (LoseUI con của GameplayUI). LoseUI.Open() tự gọi GameEnded.
    public void ShowLose()
    {
        if (loseUI == null)
        {
            Debug.LogError("GameplayUI: chưa gán loseUI trong Inspector.", this);
            return;
        }

        loseUI.Open();
    }

    private void OnDestroy()
    {
        if (Ins == this) Ins = null;
    }

    private void OnPreWinContinue()
    {
        if (!canContinuePreWin) return;
        // Playable Ads: màn Win giữ nguyên, bấm thì mở trang tải game (CTA); bấm lại được nếu store chưa mở.
        PlayableAdHelper.InstallFullGame();
    }

    /// <summary>Na bat ra, ban da vao worldTarget; onHit khi da cham. Tra false neu khong dien duoc.</summary>
    public bool PlayClearSlingshot(Vector3 worldTarget, Action onHit)
    {
        Camera worldCamera = Camera.main;
        if (clearSlingshot == null || worldCamera == null) return false;

        RectTransform sling = (RectTransform)clearSlingshot.transform;

        sling.DOKill();
        // Bật ná trước rồi mới tìm Canvas: Playworks không có GetComponentInParent(includeInactive).
        clearSlingshot.gameObject.SetActive(true);

        Canvas canvas = sling.GetComponentInParent<Canvas>();
        Camera uiCamera = canvas != null && canvas.rootCanvas.renderMode != RenderMode.ScreenSpaceOverlay
            ? canvas.rootCanvas.worldCamera
            : null;

        // Doi toa do world cua slot -> local cua na. Tinh o scale goc truoc khi pop tu 0.
        sling.localScale = slingshotBaseScale;
        Vector2 screenPoint = worldCamera.WorldToScreenPoint(worldTarget);
        RectTransformUtility.ScreenPointToLocalPointInRectangle(sling, screenPoint, uiCamera, out Vector2 localTarget);

        sling.localScale = Vector3.zero;
        sling.DOScale(slingshotBaseScale, slingshotPopDuration).SetEase(Ease.OutBack).SetUpdate(true)
            .OnComplete(() => clearSlingshot.Fire(localTarget, () =>
            {
                onHit?.Invoke();
                // Da cham la xong: thu na luon, khong cho dien nap vien moi.
                sling.DOScale(Vector3.zero, slingshotPopDuration).SetEase(Ease.InBack).SetUpdate(true)
                    .OnComplete(() => clearSlingshot.gameObject.SetActive(false));
            }));
        return true;
    }

    private void StopClearSlingshot()
    {
        if (clearSlingshot == null) return;

        clearSlingshot.transform.DOKill();
        clearSlingshot.gameObject.SetActive(false);
    }


    #region Button Click
    private void OnSettingButtonClick()
    {
        if (isSettingOpened)
        {
            settingAnimator.SetBool("open", false);
            isSettingOpened = false;
        }
        else
        {
            settingAnimator.SetBool("open", true);
            isSettingOpened = true;
        }
    }

    private void OnOutButtonClick()
    {
        // Playable Ads không có màn Home: nút thoát mở trang tải game (CTA).
        PlayableAdHelper.InstallFullGame();
    }

    private void OnMusicButtonClick()
    {
        //GameManager.Ins.ToggleMusic();
        SoundManager.Ins.ToggleMusic();
        musicCrossGameObject.SetActive(!VariableSystem.Music);
    }

    private void OnSoundButtonClick()
    {
        //GameManager.Ins.ToggleSound();
        SoundManager.Ins.ToggleSFX();
        soundCrossGameObject.SetActive(!VariableSystem.Sound);
    }

    private void OnHappticButtonClick()
    {
        VariableSystem.Vibration = !VariableSystem.Vibration;
        happticCrossGameObject.SetActive(!VariableSystem.Vibration);
    }

    private void OnReplayButtonClick()
    {
        OnSettingButtonClick();
        // Playable Ads: không có quảng cáo xen kẽ, chơi lại ngay.
        LevelManager.Ins.RestartLevel();
    }

    private void ResetSettingPanel()
    {
        isSettingOpened = false;
        if (settingAnimator == null) return;

        settingAnimator.SetBool("open", false);
        // Ve state mac dinh (dong) ngay, khong cho anim dong chay -> background tat luon.
        settingAnimator.Rebind();
        settingAnimator.Update(0f);
    }

    #endregion
}
