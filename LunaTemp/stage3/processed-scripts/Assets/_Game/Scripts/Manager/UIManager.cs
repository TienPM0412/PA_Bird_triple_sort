///
/// Create by linh soi - Abi Game studio
/// mentor Minh tito - CTO Abi Game studio
/// 
/// Manage list UI canvas for easy to use
/// Member nen inherit UI canvas
/// 
/// Update: 09-10-2020 
///             manage UI with Generic
///         09-10-2021 
///             Open, Close UI with Typeof(T)
///         28/11/2022
///             Close All UI
///             Close delay time
///

using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Sirenix.OdinInspector;
using TMPro;
using UnityEngine;
using UnityEngine.Events;

public class UIManager : Singleton<UIManager>
{
    //dict for quick query UI prefab
    //dict dung de lu thong tin prefab canvas truy cap cho nhanh
    private Dictionary<System.Type, UICanvas> uiCanvasPrefab = new Dictionary<System.Type, UICanvas>();

    //list from resource
    //list load ui resource
    private UICanvas[] uiResources;

    //dict for UI active
    //dict luu cac ui dang dung
    private Dictionary<System.Type, UICanvas> uiCanvas = new Dictionary<System.Type, UICanvas>();

    //canvas container, it should be a canvas - root
    //canvas chua dung cac canvas con, nen la mot canvas - root de chua cac canvas nay
    public Transform CanvasParentTF;
    public RectTransform CanvasParentRect;

    public List<GameObject> bgList;

    public GameObject blockInputPanel;


    public TextMeshProUGUI MessgeText;
    public Animator messageAnim;

    public Canvas canvas;
    // public CoinUI coinUI;

    //public GameObject containerCoinAndHeart;
    public CanvasGroup canvaG;

    private void Awake()
    {
        if (canvaG == null)
        {
            canvaG = GetComponent<CanvasGroup>();
        }
    }

    void OnEnable()
    {
        EventManager.AddListener<OnShowMessage>(ShowMessage);
    }

    void OnDisable()
    {
        EventManager.RemoveListener<OnShowMessage>(ShowMessage);
    }




    #region Canvas

    //open UI
    //mo UI canvas
    public T OpenUI<T>() where T : UICanvas
    {
        UICanvas canvas = GetUI<T>();

        canvas.Setup();
        canvas.Open();

        return canvas as T;
    }

    //close UI directly
    //dong UI canvas ngay lap tuc
    public void CloseUI<T>() where T : UICanvas
    {
        if (IsOpened<T>())
        {
            GetUI<T>().CloseDirectly();
        }
    }

    //close UI with delay time
    //dong ui canvas sau delay time
    public void CloseUI<T>(float delayTime) where T : UICanvas
    {
        if (IsOpened<T>())
        {
            GetUI<T>().Close(delayTime);
        }
    }

    //check UI is Opened
    //kiem tra UI dang duoc mo len hay khong
    public bool IsOpened<T>() where T : UICanvas
    {
        return IsLoaded<T>() && uiCanvas[typeof(T)].gameObject.activeInHierarchy;
    }

    //check UI is loaded
    //kiem tra UI da duoc khoi tao hay chua
    public bool IsLoaded<T>() where T : UICanvas
    {
        System.Type type = typeof(T);
        return uiCanvas.ContainsKey(type) && uiCanvas[type] != null;
    }

    //Get component UI 
    //lay component cua UI hien tai
    public T GetUI<T>() where T : UICanvas
    {
        if (!IsLoaded<T>())
        {
            // UI đặt sẵn trong scene (vd HomeUI trong Loading.unity) thì dùng luôn,
            // không có mới load prefab từ Resources/UI.
            UICanvas canvas = Ultils.FindObjectIncludeInactive<T>();
            if (canvas == null)
            {
                T prefab = GetUIPrefab<T>();
                if (prefab == null) return null;
                canvas = Instantiate(prefab, CanvasParentTF);
            }
            uiCanvas[typeof(T)] = canvas;
        }

        return uiCanvas[typeof(T)] as T;
    }

    //Close all UI
    //dong tat ca UI ngay lap tuc -> tranh truong hop dang mo UI nao dong ma bi chen 2 UI cung mot luc
    public void CloseAll()
    {
        foreach (var item in uiCanvas)
        {
            if (item.Value != null && item.Value.gameObject.activeInHierarchy)
            {
                item.Value.CloseDirectly();
            }
        }
    }

    //Get prefab from resource
    //lay prefab tu Resources/UI 
    private T GetUIPrefab<T>() where T : UICanvas
    {
        if (!uiCanvasPrefab.ContainsKey(typeof(T)))
        {
            if (uiResources == null)
            {
                uiResources = Resources.LoadAll<UICanvas>("UI/");
            }

            for (int i = 0; i < uiResources.Length; i++)
            {
                if (uiResources[i] is T)
                {
                    uiCanvasPrefab[typeof(T)] = uiResources[i];
                    break;
                }
            }
        }

        if (!uiCanvasPrefab.TryGetValue(typeof(T), out UICanvas prefab))
        {
            Debug.LogError($"[UIManager] Không tìm thấy {typeof(T).Name}: không có trong scene, cũng không có prefab trong Resources/UI/.");
            return null;
        }
        return prefab as T;
    }


    #endregion

    #region Back Button

    private Dictionary<UICanvas, UnityAction> BackActionEvents = new Dictionary<UICanvas, UnityAction>();
    private List<UICanvas> backCanvas = new List<UICanvas>();
    UICanvas BackTopUI
    {
        get
        {
            UICanvas canvas = null;
            if (backCanvas.Count > 0)
            {
                canvas = backCanvas[backCanvas.Count - 1];
            }

            return canvas;
        }
    }


    private void LateUpdate()
    {
        // Playworks chỉ hỗ trợ UnityEngine.Input (input cũ). Nút Back của Android được map vào KeyCode.Escape.
        if (Input.GetKeyDown(KeyCode.Escape) && BackTopUI != null)
        {
            BackActionEvents[BackTopUI]?.Invoke();
        }
    }

    public void PushBackAction(UICanvas canvas, UnityAction action)
    {
        if (!BackActionEvents.ContainsKey(canvas))
        {
            BackActionEvents.Add(canvas, action);
        }
    }

    public void AddBackUI(UICanvas canvas)
    {
        if (!backCanvas.Contains(canvas))
        {
            backCanvas.Add(canvas);
        }
    }

    public void RemoveBackUI(UICanvas canvas)
    {
        backCanvas.Remove(canvas);
    }

    /// <summary>
    /// CLear backey when comeback index UI canvas
    /// </summary>
    public void ClearBackKey()
    {
        backCanvas.Clear();
    }

    #endregion

    public void ShowBG(int index)
    {
        if (index < 0 || index >= bgList.Count)
        {
            Debug.LogWarning("Index out of range in ShowBG: " + index);
            return;
        }
        for (int i = 0; i < bgList.Count; i++)
        {
            bgList[i].SetActive(false);
        }

        bgList[index].SetActive(true);
    }

    public void BlockInputUI(bool show)
    {
        blockInputPanel.SetActive(show);
    }

    private void ShowMessage([Bridge.Ref] OnShowMessage message)
    {
        // UIManager trong GamePlay.unity chưa gán Message; bản đầy đủ nằm ở Loading.unity
        if (MessgeText == null)
        {
            Debug.Log($"[Message] {message.message}", this);
            return;
        }

        MessgeText.text = message.message;
        if (messageAnim != null)
        {
            messageAnim.SetTrigger("Show");
        }
    }

    // public void ShowCoinAndHeart(bool show)
    // {
    //     coinUI.gameObject.SetActive(show);
    // }

    // public void AddCoin(int amount)
    // {
    //     VariableSystem.StoreCoin += amount;
    //     OnUpdateCoin e = new OnUpdateCoin();
    //     e.coinAmount = VariableSystem.StoreCoin;
    //     EventManager.Trigger(e);
    // }

    #region Other

    [Header("Reward Flight")]
    [Tooltip("Vung de item bat ra truoc khi bay. De trong thi item bat ra ngay tai vi tri nguon.")]
    [SerializeField] private RectTransform rewardSpawnArea;
    [Tooltip("He so thoi gian bay cua item. Nho hon 1 se bay nhanh hon.")]
    [SerializeField, Range(0.1f, 2f)] private float rewardMoveDurationMultiplier = 1f;
    [Tooltip("He so thoi gian bay khi la phan thuong Star Chest.")]
    [SerializeField, Range(0.1f, 2f)] private float starChestItemMoveDurationMultiplier = 0.36f;
    [SerializeField, Min(0f)] private float rewardTakeBackDistance = 110f;
    [SerializeField, Min(0.01f)] private float rewardTakeBackDuration = 0.1f;
    [Tooltip("Co item khi bat ra, so voi co item nguon.")]
    [SerializeField, Range(0.1f, 2f)] private float rewardSpawnScaleMultiplier = 0.9f;
    [Tooltip("Thoi gian item bat ra o vi tri moi truoc khi lay da bay vao target.")]
    [SerializeField, Min(0.01f)] private float rewardAppearDuration = 0.22f;
    [Tooltip("Khoang cach thoi gian giua hai item bat ra.")]
    [SerializeField, Min(0f)] private float rewardAppearStagger = 0.22f;
    [Tooltip("Thoi gian giu tat ca item tren man truoc khi bat dau bay.")]
    [SerializeField, Min(0f)] private float rewardHoldBeforeFlight = 0.08f;
    [Tooltip("Khoang cach thoi gian giua hai item bat dau bay vao target.")]
    [SerializeField, Min(0f)] private float rewardFlightStagger = 0.12f;

    private sealed class ToastRewardFlight
    {
        public bool Appeared;
        public bool Completed;
        public Action Release;
    }

    private struct FlyReward
    {
        public bool isLife;
        public BoosterType booster;
        public Transform start;
    }

    // Map field cua IAPItem sang booster cua project nay.
    // hammer -> Clear, ufo -> Net, extraSlot -> Shuffle: doi lai o day neu map khac.
    private static readonly (Func<IAPItem, int> amount, BoosterType type)[] BoosterRewardMap =
    {
        (item => item.clearAmount, BoosterType.Clear),
        (item => item.netAmount, BoosterType.Net),
        (item => item.shuffleAmount, BoosterType.Shuffle),
    };

    /// <summary>
    /// Bay phan thuong cua cac goi IAP ve target (booster, live, coin).
    /// Value cua dictionary la slot nguon (icon item tren popup/shop) de item bat ra tu do.
    /// Ham chi chay animation, viec cong tai nguyen do noi goi xu ly.
    /// </summary>


    private List<Vector3> CreateToastItemSpawnPositions(int count)
    {
        var positions = new List<Vector3>(count);
        if (count <= 0 || rewardSpawnArea == null) return positions;

        RectTransform area = rewardSpawnArea;
        int columns = Mathf.Min(3, Mathf.CeilToInt(Mathf.Sqrt(count)));
        int rows = Mathf.CeilToInt(count / (float)columns);
        float stepX = Mathf.Min(220f, area.rect.width * 0.28f);
        float stepY = Mathf.Min(220f, area.rect.height * 0.18f);
        for (int row = 0; row < rows; row++)
        {
            int itemsInRow = Mathf.Min(columns, count - row * columns);
            for (int column = 0; column < itemsInRow; column++)
            {
                float x = (column - (itemsInRow - 1) * 0.5f) * stepX +
                    UnityEngine.Random.Range(-0.08f, 0.08f) * stepX;
                float y = ((rows - 1) * 0.5f - row) * stepY +
                    UnityEngine.Random.Range(-0.08f, 0.08f) * stepY;
                positions.Add(area.TransformPoint(new Vector3(x, y, 0f)));
            }
        }

        for (int i = positions.Count - 1; i > 0; i--)
        {
            int randomIndex = UnityEngine.Random.Range(0, i + 1);
            Vector3 previous = positions[i];
            positions[i] = positions[randomIndex];
            positions[randomIndex] = previous;
        }
        return positions;
    }

    public string GetTrackPosition()
    {
        UICanvas top = null;
        foreach (UICanvas ui in uiCanvas.Values)
        {
            if (ui == null || ui.IsClosing || !ui.gameObject.activeInHierarchy) continue;
            if (string.IsNullOrEmpty(ui.TrackPosition)) continue;
            if (top == null || ui.OpenOrder > top.OpenOrder) top = ui;
        }
        return top != null ? top.TrackPosition : "null";
    }
    #endregion
}
