using System.Collections.Generic;

/// <summary>
/// Đọc BubbleConfig và trả về các obstacle mà bubble cần.
/// Thêm obstacle mới: thêm 1 dòng if ở đây.
/// </summary>
public static class ObstacleDataHelper
{
    private static readonly List<ObstacleType> s_checkBuffer = new List<ObstacleType>();
    private static readonly List<ObstacleType> s_birdCheckBuffer = new List<ObstacleType>();
    public static bool IsProtectedFromBooster(BubbleConfig config, BoosterType booster)
    {
        GetBubbleObstacles(config, s_checkBuffer);

        for (int i = 0; i < s_checkBuffer.Count; i++)
        {
            ObstacleBase prefab = LevelManager.Ins.GetObstaclePrefab(s_checkBuffer[i]);
            if (prefab != null && prefab.ProtectsFromBooster(booster))
            {
                return true;
            }
        }
        return false;
    }

    public static bool IsBirdProtectedFromBooster(BubbleConfig config, int fishIndex, BoosterType booster)
    {
        GetBirdObstacles(config, fishIndex, s_birdCheckBuffer);

        for (int i = 0; i < s_birdCheckBuffer.Count; i++)
        {
            ObstacleBase prefab = LevelManager.Ins.GetObstaclePrefab(s_birdCheckBuffer[i]);
            if (prefab != null && prefab.ProtectsFromBooster(booster))
            {
                return true;
            }
        }

        return false;
    }

    public static void GetBubbleObstacles(BubbleConfig config, List<ObstacleType> result)
    {
        result.Clear();
        if (config == null) return;

        if (config.IsFrozen) result.Add(ObstacleType.Frozen);

        if(config.LockCount > 0) result.Add(ObstacleType.Locked);

        if(config.IsKey) result.Add(ObstacleType.Key);
        
        if(config.IsUnknown) result.Add(ObstacleType.HiddenNest);
        if(config.IsObstacle) result.Add(ObstacleType.Stone);
        if(config.IsMore) result.Add(ObstacleType.BigNest);
        if (config.MaskTargetFish > 0) result.Add(ObstacleType.TargetNest);
    }

    public static void GetBirdObstacles(BubbleConfig config, int fishIndex, List<ObstacleType> result)
    {
        result.Clear();
        if(config == null || fishIndex < 0) return;
        if(ReadSlotValue(config.UnKnowFishStr, fishIndex) == 1) result.Add(ObstacleType.HiddenBird);
        if(ReadSlotValue(config.BindFishStr, fishIndex) == 1) result.Add(ObstacleType.BindBird);
        if(ReadSlotValue(config.IceFishStr, fishIndex) > 0) result.Add(ObstacleType.IceBird);
    }

    public static int ReadSlotValue(string csv, int index)
    {
        if(string.IsNullOrEmpty(csv) || index < 0) return 0;

        string[] parts = csv.Split(',');
        if(index > parts.Length) return 0;
        return int.TryParse(parts[index].Trim(), out int value) ? value : 0;
    }
}