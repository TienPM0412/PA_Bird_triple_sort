using System;
using System.Collections.Generic;
using Lean.Pool;
using Sirenix.OdinInspector;
using UnityEngine;

public class SlotContainer : MonoBehaviour
{
    [SerializeField] private List<BirdSlot> tileSlots = new List<BirdSlot>();
    [SerializeField] private Transform ExtraSlotPos;
    [SerializeField] private BirdSlot tile;
    [SerializeField] private BranchWave branchWave;

    public List<BirdSlot> TileSlots => tileSlots;

    private bool warningActive;

    // Còn đúng 1 slot trống (vd 4/5 chim) -> tất cả slot nhấp nháy viền đỏ cảnh báo.
    private void Update()
    {
        bool shouldWarn = tileSlots.Count > 1 && OccupiedCount == tileSlots.Count - 1;
        if (shouldWarn == warningActive) return;

        SetWarning(shouldWarn);
    }

    private void SetWarning(bool active)
    {
        warningActive = active;
        for (int i = 0; i < tileSlots.Count; i++)
        {
            if (tileSlots[i] != null) tileSlots[i].SetWarning(active);
        }
    }

    private void OnDisable()
    {
        SetWarning(false);
    }

    public int OccupiedCount
    {
        get
        {
            int count = 0;
            for (int i = 0; i < tileSlots.Count; i++)
            {
                if (tileSlots[i] != null && !tileSlots[i].IsEmpty) count++;
            }

            return count;
        }
    }

    public int EmptyCount
    {
        get
        {
            int count = 0;
            for (int i = 0; i < tileSlots.Count; i++)
            {
                if (tileSlots[i] != null && tileSlots[i].IsEmpty) count++;
            }
            return count;
        }
    }

    public bool HasEmptySlot()
    {
        for (int i = 0; i < tileSlots.Count; i++)
        {
            if (tileSlots[i] != null && tileSlots[i].IsEmpty)
            {
                return true;
            }
        }

        return false;
    }

    public bool HasTileInSlot()
    {
        for (int i = 0; i < tileSlots.Count; i++)
        {
            if (!tileSlots[i].IsEmpty && tileSlots[i].Tile != null)
            {
                return true;
            }
        }

        return false;
    }

    public List<int> GetAllTilesInSlot()
    {
        List<int> result = new List<int>();

        for (int i = 0; i < tileSlots.Count; i++)
        {
            var slot = tileSlots[i];
            if (!slot.IsEmpty)
            {
                result.Add(slot.Tile.UniqueElementID);
            }
        }

        return result;
    }

    public bool IsAnim()
    {
        for (int i = 0; i < tileSlots.Count; i++)
        {
            if (tileSlots[i].isAnim) return true;
        }

        return false;
    }
    public void Initialize()
    {
        foreach (var slot in tileSlots)
        {
            if (slot == null) continue;
            slot.ClearTile();
            slot.Init();
        }

    }
    public void ResetSlot()
    {
        for (int i = 0; i < tileSlots.Count; i++)
        {
            tileSlots[i].ClearTile();
        }
    }

    public bool AddTile(ISlotable tile, Action onComplete = null)
    {
        for (int i = 0; i < tileSlots.Count; i++)
        {
            if (tileSlots[i] != null && tileSlots[i].IsEmpty)
            {
                tileSlots[i].PlaceTile(tile, onComplete);
                return true;
            }
        }

        return false;
    }

    public void RemoveTile(ISlotable tile)
    {
        for (int i = 0; i < tileSlots.Count; i++)
        {
            if (tileSlots[i].Tile == tile)
            {
                tileSlots[i].RemoveTile();
                //RemoveSlot(tileSlots[i]);
                return;
            }
        }
    }

    public bool CheckFullSlots()
    {
        if (tileSlots.Count == 0)
        {
            return false;
        }

        for (int i = 0; i < tileSlots.Count; i++)
        {
            if (tileSlots[i] == null || tileSlots[i].IsEmpty)
                return false;
        }

        return true;
    }

    public ISlotable PeekFirstTile()
    {
        for (int i = 0; i < tileSlots.Count; i++)
        {
            if (tileSlots[i] != null && !tileSlots[i].IsEmpty)
            {
                return tileSlots[i].Tile;
            }
        }

        return null;
    }

    public List<ISlotable> TakeMatchingTiles(int uniqueElementId, int maxCount)
    {
        List<ISlotable> result = new List<ISlotable>();
        if (maxCount <= 0)
        {
            return result;
        }

        for (int i = 0; i < tileSlots.Count && result.Count < maxCount; i++)
        {
            BirdSlot slot = tileSlots[i];
            if (slot == null || slot.IsEmpty || slot.Tile.UniqueElementID != uniqueElementId)
            {
                continue;
            }

            result.Add(slot.Tile);
            slot.RemoveTile();
        }

        return result;
    }

    public List<ISlotable> TakeAllTiles()
    {
        List<ISlotable> result = new List<ISlotable>();

        for (int i = 0; i < tileSlots.Count; i++)
        {
            BirdSlot slot = tileSlots[i];
            if (slot == null || slot.IsEmpty || slot.Tile == null)
            {
                continue;
            }

            result.Add(slot.Tile);
            slot.RemoveTile();
        }

        return result;
    }

    public void PlayHitShake([Bridge.Ref] Vector3 hitWorldPos)
    {
        if (branchWave == null) return;

        var leaves = new List<Transform>(tileSlots.Count);
        for (int i = 0; i < tileSlots.Count; i++)
            if (tileSlots[i] != null) leaves.Add(tileSlots[i].transform);
        branchWave.Play(hitWorldPos, leaves);
    }
}
