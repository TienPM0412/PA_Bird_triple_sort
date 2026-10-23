using System;
using UnityEngine;

public static class LevelConverter
{
    /// <summary>
    /// Converts a BubbleConfig_*.json TextAsset into BubbleConfig objects.
    /// </summary>
    public static BubbleConfig[] Convert(TextAsset bubbleFile)
    {
        if (bubbleFile == null)
        {
            throw new ArgumentNullException(nameof(bubbleFile));
        }

        return ParseBubbles(bubbleFile.text, bubbleFile.name);
    }

    private static readonly string[][] VersionSuffixes =
    {
        new[] { "" },          // bản 1
        new[] { "_2", "_6" },  // bản 2
        new[] { "_3" },
        new[] { "_4" },
        new[] { "_5" },
    };




    /// <summary>
    /// Converts the raw JSON array from a BubbleConfig_*.json file.
    /// </summary>
    public static BubbleConfig[] ParseBubbles(string json, string sourceName = "level JSON")
    {
        var items = ParseArray(json, sourceName);
        BubbleConfig[] bubbles = new BubbleConfig[items.Count];

        for (int i = 0; i < items.Count; i++)
        {
            var item = items[i];
            bubbles[i] = new BubbleConfig
            {
                BubbleID = SimpleJson.GetInt(item, "BubbleID"),
                BubbleType = SimpleJson.GetInt(item, "BubbleType"),
                FishStr = SimpleJson.GetString(item, "FishStr"),
                IsFrozen = SimpleJson.GetBool(item, "IsFrozen"),
                IsUnknown = SimpleJson.GetBool(item, "IsUnknown"),
                IsKey = SimpleJson.GetBool(item, "IsKey"),
                LockCount = SimpleJson.GetInt(item, "LockCount"),
                Lock2Count = SimpleJson.GetInt(item, "Lock2Count"),
                IsObstacle = SimpleJson.GetBool(item, "IsObstacle"),
                Obstacle2Count = SimpleJson.GetInt(item, "Obstacle2Count"),
                IsMore = SimpleJson.GetBool(item, "IsMore"),
                IsConveyor = SimpleJson.GetBool(item, "IsConveyor"),
                MaskTargetFish = SimpleJson.GetInt(item, "MaskTargetFish"),
                BindFishStr = SimpleJson.GetString(item, "BindFishStr"),
                IceFishStr = SimpleJson.GetString(item, "IceFishStr"),
                UnKnowFishStr = SimpleJson.GetString(item, "UnKnowFishStr"),
                KeyFishStr = SimpleJson.GetString(item, "KeyFishStr"),
                LockFishStr = SimpleJson.GetString(item, "LockFishStr"),
            };

            Normalize(bubbles[i]);
        }

        return bubbles;
    }

    /// <summary>
    /// Converts a LevelConfig*.json table into its level metadata entries.
    /// </summary>
    public static LevelConfig[] ParseLevelTable(TextAsset levelTableFile)
    {
        if (levelTableFile == null)
        {
            throw new ArgumentNullException(nameof(levelTableFile));
        }

        return ParseLevelTable(levelTableFile.text, levelTableFile.name);
    }

    public static LevelConfig[] ParseLevelTable(string json, string sourceName = "level table JSON")
    {
        var items = ParseArray(json, sourceName);
        LevelConfig[] levels = new LevelConfig[items.Count];

        for (int i = 0; i < items.Count; i++)
        {
            var item = items[i];
            levels[i] = new LevelConfig
            {
                LevelID = SimpleJson.GetInt(item, "LevelID"),
                BubbleDataStr = SimpleJson.GetString(item, "BubbleDataStr"),
                LevelTime = SimpleJson.GetFloat(item, "LevelTime"),
                PointRangeStr = SimpleJson.GetString(item, "PointRangeStr"),
                NoAdWeight = SimpleJson.GetFloat(item, "NoAdWeight"),
                OneAdWeight = SimpleJson.GetFloat(item, "OneAdWeight"),
                TwoAdWeight = SimpleJson.GetFloat(item, "TwoAdWeight"),
                ThreeAdWeight = SimpleJson.GetFloat(item, "ThreeAdWeight"),
                LevelDifficulty = SimpleJson.GetInt(item, "LevelDifficulty"),
                CountdownTargetProgress = SimpleJson.GetString(item, "CountdownTargetProgress"),
                BranchObstacle = SimpleJson.GetString(item, "BranchObstacle"),
                IsFishRay = SimpleJson.GetBool(item, "IsFishRay"),
            };

            Normalize(levels[i]);
        }

        return levels;
    }

    /// <summary>
    /// Finds levelId in a level table and loads its matching BubbleDataStr file
    /// from the supplied level files.
    /// </summary>
    public static LevelData Convert(
        int levelId,
        TextAsset levelTableFile,
        TextAsset[] bubbleFiles)
    {
        if (bubbleFiles == null)
        {
            throw new ArgumentNullException(nameof(bubbleFiles));
        }

        LevelConfig[] levels = ParseLevelTable(levelTableFile);
        LevelConfig selectedLevel = FindLevel(levels, levelId);
        TextAsset bubbleFile = FindBubbleFile(bubbleFiles, selectedLevel.BubbleDataStr);

        return new LevelData
        {
            Level = selectedLevel,
            Bubbles = Convert(bubbleFile)
        };
    }

    public static LevelConfig FindLevel(TextAsset levelTableFile, int levelId)
        => FindLevel(ParseLevelTable(levelTableFile), levelId);

    public static string GetBubbleDataName(LevelConfig level, int version, TextAsset[] files)
    {
        string[] suffixes = VersionSuffixes[Mathf.Clamp(version, 1, VersionSuffixes.Length) - 1];
        foreach (string suffix in suffixes)
        {
            string name = level.BubbleDataStr + suffix;
            if (HasBubbleFile(files, name)) return name;
        }
        return null; // không có file cho bản này
    }

    public static bool HasBubbleFile(TextAsset[] files, string name)
    {
        foreach (TextAsset f in files)
            if (f != null && string.Equals(f.name, name, StringComparison.OrdinalIgnoreCase)) return true;
        return false;
    }

    public static LevelData Convert(LevelConfig level, TextAsset[] bubbleFiles, int version)
    {
        string bubbleDataName = GetBubbleDataName(level, version, bubbleFiles);
        if (bubbleDataName == null)
        {
            throw new InvalidOperationException(
                $"LevelID {level.LevelID}: no bubble file '{level.BubbleDataStr}' (version {version}) in LevelManager.bubbleFiles ({bubbleFiles.Length} files assigned).");
        }

        TextAsset bubbleFile = FindBubbleFile(bubbleFiles, bubbleDataName);
        return new LevelData { Level = level, Bubbles = Convert(bubbleFile) };
    }

    public static bool TryConvert(
        TextAsset bubbleFile,
        out BubbleConfig[] bubbles,
        out string error)
    {
        try
        {
            bubbles = Convert(bubbleFile);
            error = string.Empty;
            return true;
        }
        catch (Exception exception)
        {
            bubbles = new BubbleConfig[0];
            error = exception.Message;
            return false;
        }
    }

    // Playworks không hỗ trợ JsonUtility và không có Newtonsoft lúc chạy, nên dùng SimpleJson tự viết.
    private static System.Collections.Generic.List<System.Collections.Generic.Dictionary<string, object>> ParseArray(
        string json,
        string sourceName)
    {
        if (string.IsNullOrWhiteSpace(json))
        {
            throw new FormatException($"{sourceName} is empty.");
        }

        return SimpleJson.ParseObjectArray(json, sourceName);
    }

    private static LevelConfig FindLevel(LevelConfig[] levels, int levelId)
    {
        for (int i = 0; i < levels.Length; i++)
        {
            if (levels[i].LevelID == levelId)
            {
                return levels[i];
            }
        }

        throw new InvalidOperationException($"LevelID {levelId} does not exist in the selected level table.");
    }

    private static TextAsset FindBubbleFile(TextAsset[] files, string bubbleDataName)
    {
        for (int i = 0; i < files.Length; i++)
        {
            TextAsset file = files[i];
            if (file != null && string.Equals(file.name, bubbleDataName, StringComparison.OrdinalIgnoreCase))
            {
                return file;
            }
        }

        throw new InvalidOperationException($"Cannot find the level file '{bubbleDataName}.json'.");
    }

    private static void Normalize(BubbleConfig bubble)
    {
        if (bubble.FishStr == null) bubble.FishStr = string.Empty;
        if (bubble.BindFishStr == null) bubble.BindFishStr = string.Empty;
        if (bubble.IceFishStr == null) bubble.IceFishStr = string.Empty;
        if (bubble.UnKnowFishStr == null) bubble.UnKnowFishStr = string.Empty;
        if (bubble.KeyFishStr == null) bubble.KeyFishStr = string.Empty;
        if (bubble.LockFishStr == null) bubble.LockFishStr = string.Empty;
    }

    private static void Normalize(LevelConfig level)
    {
        if (level.BubbleDataStr == null) level.BubbleDataStr = string.Empty;
        if (level.PointRangeStr == null) level.PointRangeStr = string.Empty;
        if (level.CountdownTargetProgress == null) level.CountdownTargetProgress = string.Empty;
        if (level.BranchObstacle == null) level.BranchObstacle = string.Empty;
    }
}
