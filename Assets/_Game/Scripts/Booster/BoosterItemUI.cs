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
    [SerializeField] private ButtonScaleUI button;
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

        // Playable Ads: không lưu PlayerPrefs, mỗi lần chạy đều bắt đầu với 1 lượt free và 0 lượt thường.
        isFirstUse = true;
        currentAmount = 0;

        priceText.text = $"{info.price}";


        icon.sprite = info.icon;

        booster.OnStateChanged -= RefreshUI;
        BoosterManager.Ins.OnGlobalStateChanged -= RefreshUI;

        booster.OnStateChanged += RefreshUI;
        BoosterManager.Ins.OnGlobalStateChanged += RefreshUI;
        button.action.RemoveAllListeners();
        button.action.AddListener(() =>
        {
            if (currentState == BoosterState.Lock)
            {
                return;
            }

            // Hết lượt (đang hiện addObject): mở trang tải game (CTA) rồi tặng thêm 1 lượt.
            if (currentState == BoosterState.NotReady)
            {
                PlayableAdHelper.InstallFullGame();
                currentAmount++;
                SoundManager.Ins.PlaySFX(SoundFX.Booster_Collect);
                RefreshUI();
                return;
            }

            bool success = BoosterManager.Ins.ActiveBooster(type);

            if (success)
            {
                if (isFirstUse)
                {
                    isFirstUse = false;
                }
                else
                {
                    if (currentAmount > 0)
                    {
                        currentAmount--;
                    }
                }
                RefreshUI();
            }
        });

        RefreshUI();

    }

    public void SetLock()
    {
        SetState(BoosterState.Lock);
    }

    public void RefreshUI()
    {
        if (booster == null) return;

        bool isLocked = false;

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