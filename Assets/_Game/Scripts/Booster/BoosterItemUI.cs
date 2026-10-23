using UnityEngine;
using UnityEngine.UI;
using TMPro;
using DG.Tweening;
using Sirenix.OdinInspector;

public enum BoosterState
{
    Ready,
    Lock,
    Free,
    NotReady
}

public class BoosterItemUI : MonoBehaviour
{
    [SerializeField] private BoosterType type;

    [Header("UI")]
    [SerializeField] private Image icon;
    // [SerializeField] private ButtonScaleUI button;
    [SerializeField] private GameObject amountObject;
    [SerializeField] private GameObject addObject;
    [SerializeField] private GameObject freeObject;
    [SerializeField] private TextMeshProUGUI amountText;
    [SerializeField] private GameObject lockObj;
    [SerializeField] private TextMeshProUGUI levelText;
    [SerializeField] private TextMeshProUGUI priceText;

    private BoosterBase booster;
    private BoosterInfo info;

    private int currentAmount;
    private BoosterState currentState;
    private bool isFirstUse;
    public void Init(BoosterInfo info, BoosterBase booster)
    {
        this.type = info.type;
        this.info = info;
        this.booster = booster;

        if (info == null || booster == null)
        {
            Debug.LogWarning($"BoosterItemUI missing data: {type}");
            return;
        }

        //isFirstUse = VariableSystem.IndexLevel + 1 == info.levelUnlock;
        isFirstUse = PlayerPrefs.GetInt($"Booster_{type}_FirstUse", 1) == 1;
        currentAmount = PlayerPrefs.GetInt($"Booster_{type}", info.amountFirst);

        priceText.text = $"{info.price}";


        icon.sprite = info.icon;

        booster.OnStateChanged -= RefreshUI;
        BoosterManager.Ins.OnGlobalStateChanged -= RefreshUI;

        booster.OnStateChanged += RefreshUI;
        BoosterManager.Ins.OnGlobalStateChanged += RefreshUI;
        // button.action.RemoveAllListeners();
        // button.action.AddListener(() =>
        // {
        //     //SoundManager.Ins.PlaySFX(SFX.SFX_BUTTON_CLICK);
        //     bool isBuying = false;
        //     if (currentState == BoosterState.Lock)
        //     {
        //         //GameEventBus.FireShowMessage($"Locked at level {info.levelUnlock}");
        //         return;
        //     }
        //     else if (currentState == BoosterState.NotReady)
        //     {
        //         UIManager.Ins.OpenUI<BuyBoosterUI>().Init(info);
        //         return;
        //     }

        //     bool success = BoosterManager.Ins.ActiveBooster(type);

        //     if (success)
        //     {
        //         // if (TutotialManager.Ins.IsTutorial)
        //         // {
        //         //     TutotialManager.Ins.HideHandTutorial();
        //         //     //GameManager.Ins.BlockFull(false);
        //         // }

        //         if (isBuying)
        //         {
        //             //DataManager.Ins.SpendCoin(info.price);
        //             PlayerPrefs.SetInt($"Booster_{type}", currentAmount + info.amountBuy - 1);
        //             SoundManager.Ins.PlaySFX(SoundFX.Booster_Collect);
        //         }
        //         else if (VariableSystem.IndexLevel + 1 >= info.levelUnlock && isFirstUse)
        //         {
        //             //TutotialManager.Ins.HideHandTutorial();
        //             //GameManager.Ins.BlockInput(false);
        //             isFirstUse = false;
        //             PlayerPrefs.SetInt($"Booster_{type}_FirstUse", 0);
        //         }
        //         else
        //         {
        //             if (currentAmount > 0)
        //             {
        //                 currentAmount--;
        //                 PlayerPrefs.SetInt($"Booster_{type}", currentAmount);
        //                 DataBucketEvent.Ins.SpendResource("booster", type.ToString(), "1", "use");
        //             }
        //         }
        //         //GameEventBus.FireExitIdle();
        //         RefreshUI();
        //     }
        // });

        RefreshUI();

    }

    public void SetLock()
    {
        SetState(BoosterState.Lock);
    }

    public void RefreshUI()
    {
        if (booster == null) return;
        currentAmount = PlayerPrefs.GetInt($"Booster_{type}", info.amountFirst);

        bool isLocked = VariableSystem.IndexLevel + 1 < info.levelUnlock;

        if (isLocked)
        {
            SetState(BoosterState.Lock);
        }
        else if (isFirstUse)
        {
            SetState(BoosterState.Free);
        }
        else if (currentAmount > 0)
        {
            SetState(BoosterState.Ready);
        }
        else
        {
            SetState(BoosterState.NotReady);
        }

        //bool blockedByOther = BoosterManager.Ins.IsAnyBoosterRunning && !booster.IsBusy;

        //button.interactable = !booster.IsBusy && !isLocked && !blockedByOther;
    }

    private void SetState(BoosterState state)
    {
        currentState = state;
        switch (state)
        {
            case BoosterState.Ready:
                amountObject.SetActive(true);
                addObject.SetActive(false);
                freeObject.SetActive(false);
                lockObj.SetActive(false);
                amountText.text = $"{currentAmount}";
                break;
            case BoosterState.Lock:
                amountObject.SetActive(false);
                addObject.SetActive(false);
                freeObject.SetActive(false);
                lockObj.SetActive(true);
                levelText.text = $"Level {info.levelUnlock}";
                break;
            case BoosterState.Free:
                amountObject.SetActive(false);
                addObject.SetActive(false);
                freeObject.SetActive(true);
                lockObj.SetActive(false);
                break;
            case BoosterState.NotReady:
                amountObject.SetActive(false);
                addObject.SetActive(true);
                freeObject.SetActive(false);
                lockObj.SetActive(false);
                break;
        }
    }

    private void OnDestroy()
    {
        if (booster != null)
            booster.OnStateChanged -= RefreshUI;

        if (BoosterManager.Ins != null)
            BoosterManager.Ins.OnGlobalStateChanged -= RefreshUI;
    }

}