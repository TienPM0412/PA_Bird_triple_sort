using System.Collections.Generic;
using DG.Tweening;
using Lean.Pool;
using Sirenix.OdinInspector;
using UnityEngine;

public class DockContainer : MonoBehaviour
{
    [SerializeField, Min(1)] private int dockCount = 4;
    [SerializeField, Min(1)] private int activeOrderCount = 2;

    [SerializeField] private List<BirdDock> dockSlot = new List<BirdDock>();
    [SerializeField] private BirdDock tileDockPrefab;

    public event System.Action<BirdDock> DockMatched;

    public List<BirdDock> DockTiles => dockSlot;

    public List<int> GetAllTilesInDock()
    {
        List<int> result = new List<int>();

        for (int i = 0; i < dockSlot.Count; i++)
        {
            var dock = dockSlot[i];
            if (dock == null) continue;
            for (int j = 0; j < dock.Tiles.Count; j++)
            {
                if (dock.Tiles[j] != null)
                {
                    result.Add(dock.Tiles[j].UniqueElementID);
                }
            }
        }

        return result;
    }

    private void OnEnable()
    {
        // EventManager.AddListener<OnDockMatchedEvent>(OnDockMatchedEventCallback);
        // EventManager.AddListener<OnAddDockClickEvent>(OnAddDockClickEventCallback);
    }

    private void OnDisable()
    {
        // EventManager.RemoveListener<OnDockMatchedEvent>(OnDockMatchedEventCallback);
        // EventManager.RemoveListener<OnAddDockClickEvent>(OnAddDockClickEventCallback);
    }

    public bool IsAnim()
    {
        for (int i = 0; i < dockSlot.Count; i++)
        {
            if (dockSlot[i] != null && dockSlot[i].isAnim) return true;
        }

        return false;
    }

    public void RemoveTile(ISlotable obj)
    {
        for (int i = 0; i < dockSlot.Count; i++)
        {
            if (dockSlot[i] != null) dockSlot[i].RemoveTile(obj);
        }
    }

    public void ResetDock()
    {
        EnsureDockCount();

        for (int i = 0; i < dockSlot.Count; i++)
        {
            if (dockSlot[i] == null) continue;

            dockSlot[i].MatchCompleted -= OnDockMatched;
            dockSlot[i].MatchCompleted += OnDockMatched;
            dockSlot[i].ResetDock();
        }
    }


    public void Initialize()
    {
        ResetDock();

        int orderDockCount = Mathf.Min(activeOrderCount, dockSlot.Count);
        for (int i = 0; i < orderDockCount; i++)
        {
            BirdOrder order = LevelManager.Ins.GetNextBirdOrder(0);
            if (order == null)
            {
                break;
            }

            dockSlot[i].SetOrder(order);
        }
    }

    // public (bool, BirdData) GetTileType()
    // {
    //     BirdData result = null;
    //     bool found = GridManager.Ins.queue.Count > 0;
    //     if (found)
    //     {
    //         result = GridManager.Ins.queue.Dequeue();
    //     }

    //     return (found, result);
    // }

    public BirdDock GetDockSameType(int uniqueElementID)
    {
        BirdDock bestDock = null;
        int maxCount = 999;

        for (int i = 0; i < dockSlot.Count; i++)
        {
            var dock = dockSlot[i];

            if (dock != null &&
                dock.birdId == uniqueElementID &&
                !dock.isLock &&
                !dock.IsChangingOrder &&
                !dock.IsFull)
            {
                int count = dock.ItemCountRemain;

                if (count < maxCount)
                {
                    maxCount = count;
                    bestDock = dock;
                }
            }
        }

        return bestDock;
    }

    private void EnsureDockCount()
    {
        dockSlot.RemoveAll(dock => dock == null);

        if (tileDockPrefab == null)
        {
            if (dockSlot.Count == 0)
                Debug.LogError("DockContainer requires a BirdDock prefab.", this);
            return;
        }

        while (dockSlot.Count < dockCount)
        {
            BirdDock newDock = LeanPool.Spawn(tileDockPrefab, transform);
            newDock.name = $"BirdDock ({dockSlot.Count + 1})";
            dockSlot.Add(newDock);
        }
    }
    public BirdDock GetOrAssignDock(Bird bird)
    {
        if (bird == null || bird.BirdData == null)
        {
            return null;
        }

        BirdDock sameTypeDock = GetDockSameType(bird.UniqueElementID);
        if (sameTypeDock != null)
        {
            return sameTypeDock;
        }

        return null;
    }

    public void ReleaseDock(BirdDock dock)
    {
        if (dock != null)
        {
            dock.ResetDock();
        }
    }

    public void SetEnded()
    {
        for (int i = 0; i < dockSlot.Count; i++)
        {
            if (dockSlot[i] != null) dockSlot[i].SetEnded();
        }
    }

    /// Cho các tổ còn lại vỡ lần lượt, xong hết mới gọi onComplete
    public void BreakAllDocks(System.Action onComplete, float stagger = 0.08f)
    {
        int pending = 0;
        for (int i = 0; i < dockSlot.Count; i++)
        {
            if (dockSlot[i] != null) pending++;
        }

        if (pending == 0)
        {
            onComplete?.Invoke();
            return;
        }

        float delay = 0f;
        for (int i = 0; i < dockSlot.Count; i++)
        {
            if (dockSlot[i] == null) continue;

            dockSlot[i].PlayEndBreak(delay, () =>
            {
                if (--pending == 0) onComplete?.Invoke();
            });
            delay += stagger;
        }
    }


    private void OnDockMatched(BirdDock dock)
    {
        DockMatched?.Invoke(dock);
    }
    #region Callbacks

    // private void OnDockMatchedEventCallback(OnDockMatchedEvent evt)
    // {
    //     var (found, newType) = GetTileType();
    //     if (found)
    //     {

    //         //evt.dock.transform.localPosition = evt.dock.Pos + Vector3.left;
    //         evt.dock.SetTileType(newType);
    //         evt.dock.AnimVisualPoc(() =>
    //         {
    //             //evt.dock.transform.localPosition = evt.dock.Pos;
    //             OnDockCreatedEvent newEvt = new OnDockCreatedEvent();
    //             newEvt.dock = evt.dock;
    //             EventManager.Trigger(newEvt);
    //         });
    //         // evt.dock.transform.DOLocalMoveX(evt.dock.Pos.x, 0.2f).OnComplete(() =>
    //         // {

    //         // });
    //     }
    //     else
    //     {
    //         evt.dock.isAnim = false;
    //         RemoveSlot(evt.dock);
    //     }
    // }

    // private void OnAddDockClickEventCallback(OnAddDockClickEvent obj)
    // {
    //     var (found, newType) = GetTileType();
    //     if (found)
    //     {
    //         obj.dock.SetLock(!found);
    //         obj.dock.SetTileType(newType);
    //         OnDockCreatedEvent newEvt = new OnDockCreatedEvent();
    //         newEvt.dock = obj.dock;
    //         EventManager.Trigger(newEvt);
    //     }
    // }

    #endregion
}
