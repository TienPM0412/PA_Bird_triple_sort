using System;

[Serializable]
public class LevelConfig
{
    public int LevelID;
    public string BubbleDataStr = "";
    public float LevelTime;
    public string PointRangeStr = "";
    public float NoAdWeight;
    public float OneAdWeight;
    public float TwoAdWeight;
    public float ThreeAdWeight;
    public int LevelDifficulty;
    public string CountdownTargetProgress = "";

    // Fields used by the newer LevelConfig6 data set.
    public string BranchObstacle = "";
    public bool IsFishRay;
}
