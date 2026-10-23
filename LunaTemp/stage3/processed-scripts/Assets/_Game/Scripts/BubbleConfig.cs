using System;
using UnityEngine;

public enum BubbleType
{
    None = 0,
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5

}

[Serializable]
public class BubbleConfig
{
    public int BubbleID;
    public int BubbleType;                     // capacity: 1..5 fish visible in the cell
    public string FishStr = "";                // fish ids, one per slot; "" for obstacle cells

    // cell-level flags
    public bool IsFrozen;
    public bool IsUnknown;
    public bool IsKey;
    public int LockCount;
    public int Lock2Count;
    public bool IsObstacle;
    public int Obstacle2Count;
    public bool IsMore;
    public bool IsConveyor;
    public int MaskTargetFish;

    // per-slot arrays, same length as FishStr when present
    public string BindFishStr = "";            // "0,1,0,1,0"
    public string IceFishStr = "";             // "8,3,2,0"
    public string UnKnowFishStr = "";          // "1,0,0,1"
    public string KeyFishStr = "";
    public string LockFishStr = "";
}
