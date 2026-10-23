using System;
using System.Collections.Generic;
using UnityEngine;
using Sirenix.OdinInspector;

public enum BoosterType
{
    Net,
    Clear,
    Shuffle,
}

public class BoosterManager : Singleton<BoosterManager>
{
    [SerializeField] private BoosterConfig boosterConfig;

    // Factory tạo booster (không dùng prefab)
    private Dictionary<BoosterType, Func<BoosterBase>> factory;
    private Dictionary<BoosterType, BoosterBase> activeBoosters = new Dictionary<BoosterType, BoosterBase>();
    private BoosterBase currentBooster;
    public bool IsAnyBoosterRunning => currentBooster != null;
    public Action OnGlobalStateChanged;

    public BoosterConfig BoosterConfig => boosterConfig;
    public MagnetNestFx MagnetNestFxPrefab;
    public ShuffleFX _shuffleFXPrefab;
    [Tooltip("FX khi da cua booster Clear dap vao canh.")]
    public GameObject ClearHitFxPrefab;
    [Min(0.1f)] public float clearHitFxLifetime = 2f;

    [Header("Shuffle")]
    [Tooltip("Thời gian chim bị hút vào tâm khi không có ShuffleFX (có FX thì lấy theo FX: từ lúc quay tới đỉnh).")]
    [Min(0.01f)] public float shuffleSuckDuration = 0.7f;
    [Tooltip("Thời gian chim bay từ tâm ra vị trí mới.")]
    [Min(0.01f)] public float shuffleSpreadDuration = 0.7f;
    [Tooltip("Độ lệch thời điểm giữa các chim (giây): chim gần tâm bị hút trước, xa tâm sau.")]
    [Min(0f)] public float shuffleStagger = 0.25f;
    [Tooltip("Sorting order của chim trong lúc bị hút / bay ra. Thấp hơn obstacle (14) để không đè lên obstacle.")]
    public int shuffleBirdSortingOrder = 13;

    protected void Awake()
    {
        InitFactory();
    }


    private void InitFactory()
    {
        factory = new Dictionary<BoosterType, Func<BoosterBase>>()
        {
            { BoosterType.Clear, () => new BoosterClear() },
            { BoosterType.Net, () => new BoosterMagnet() },
            {BoosterType.Shuffle, () => new BoosterShuffle() },
        };
    }

    public BoosterInfo GetBoosterInfo(BoosterType type)
    {
        return boosterConfig != null && boosterConfig.boosterInfos != null
            ? boosterConfig.boosterInfos.Find(x => x.type == type)
            : null;
    }

    public BoosterBase CreateBooster(BoosterType type)
    {
        if (factory.TryGetValue(type, out var creator))
        {
            return creator();
        }

        Debug.LogWarning($"[BoosterManager] Không tìm thấy booster type: {type}");
        return null;
    }

    [Button]
    public bool ActiveBooster(BoosterType type)
    {
        if (currentBooster != null)
        {
            return false;
        }

        var booster = GetOrCreateBooster(type);
        if (booster == null) return false;

        bool success = booster.Activate();

        if (success)
        {
            currentBooster = booster;

            booster.OnStateChanged += OnBoosterStateChanged;
            OnGlobalStateChanged?.Invoke();
        }
        else
        {
            currentBooster = null;
        }

        return success;
    }

    public BoosterBase GetOrCreateBooster(BoosterType type)
    {
        if (activeBoosters.TryGetValue(type, out var booster))
            return booster;

        BoosterInfo info = GetBoosterInfo(type);

        if (!factory.TryGetValue(type, out var creator))
        {
            Debug.LogWarning($"No booster factory for {type}");
            return null;
        }

        booster = creator();
        booster.SetData(info);
        booster.Init();

        activeBoosters[type] = booster;

        return booster;
    }

    public void HandleBuyBooster(BoosterType type, int amount)
    {
        int currentAmount = PlayerPrefs.GetInt($"Booster_{type}", 1);
        PlayerPrefs.SetInt($"Booster_{type}", currentAmount + amount);

        OnGlobalStateChanged?.Invoke();
    }

    public (int, BoosterInfo) CheckTutorialBooster()
    {
        if (boosterConfig == null || boosterConfig.boosterInfos == null)
        {
            return (-1, null);
        }

        for (int i = 0; i < boosterConfig.boosterInfos.Count; i++)
        {
            if (boosterConfig.boosterInfos[i].levelUnlock == VariableSystem.IndexLevel + 1)
            {
                return (i, boosterConfig.boosterInfos[i]);
            }
        }
        return (-1, null);
    }

    /// <summary>
    /// Mở UnlockBoosterUI cho booster vừa mở khoá ở level hiện tại. Mỗi booster chỉ hiện một lần
    /// (lưu PlayerPrefs) nên chơi lại / restart level không hiện lại.
    /// </summary>
    public bool TryShowUnlockBoosterUI()
    {
        (int index, BoosterInfo info) = CheckTutorialBooster();
        if (info == null) return false;

        string key = $"BoosterUnlockShown_{info.type}";
        if (PlayerPrefs.GetInt(key, 0) == 1) return false;

        PlayerPrefs.SetInt(key, 1);
        PlayerPrefs.Save();
        return true;
    }

    private void OnBoosterStateChanged()
    {
        if (currentBooster != null && !currentBooster.IsBusy)
        {
            currentBooster.OnStateChanged -= OnBoosterStateChanged;
            currentBooster = null;

            OnGlobalStateChanged?.Invoke();
        }
    }
}
