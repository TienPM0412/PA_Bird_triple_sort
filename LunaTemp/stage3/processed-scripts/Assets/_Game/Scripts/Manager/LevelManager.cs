using System;
using System.Collections.Generic;
// using PuzzleGame.Core;
using Sirenix.OdinInspector;
using UnityEngine;

[Serializable]
public class LevelDifficultyConfig
{
    public int Difficulty;
    public float LevelProgress;
    public int TempCount;
    public float Order1;
    public float Order2;
    public float Order3;
    public float Order4;
    public float Order5;

    public float GetOrderWeight(int index)
    {
        switch (index)
        {
            case 0: return Order1;
            case 1: return Order2;
            case 2: return Order3;
            case 3: return Order4;
            case 4: return Order5;
            default: return 0f;
        }
    }
}

public class BirdOrder
{
    public int BirdId;
    public BirdData BirdData;
}

public class LevelManager : Singleton<LevelManager>
{
    [Serializable]
    private class DifficultyConfigArray
    {
        public LevelDifficultyConfig[] Items = new LevelDifficultyConfig[0];
    }

    [SerializeField] private BirdDataSO birdDataSO;
    [SerializeField] private ObstacleConfigSO obstacleConfigSO;
    [SerializeField] private BoardManager boardManager;
    [SerializeField] private TextAsset levelDifficultyFile;
    [SerializeField] private int totalLevelCount = 400;
    public Bird birdPrefab;
    [ShowInInspector] public LevelData CurrentLevelData { get; private set; }

    [Serializable]
    public class LevelSet
    {
        public string name;
        public TextAsset levelTableFile;
        public TextAsset[] bubbleFiles;
    }

    [SerializeField] private LevelSet[] levelSets;

    private TextAsset levelTableFile;
    private TextAsset[] bubbleFiles;
    private const string LevelSetIndexKey = "Remote_LevelSetIndex";

    private LevelDifficultyConfig[] difficultyConfigs = new LevelDifficultyConfig[0];
    private readonly List<BirdOrder> pendingOrders = new List<BirdOrder>();
    private System.Random orderRandom;
    private int totalOrderCount;
    private int completedOrderCount;

    public int TotalBirdCount { get; private set; }
    public float OrderProgress => totalOrderCount > 0 ? (float)completedOrderCount / totalOrderCount : 0f;
    public BoardManager BoardManager => boardManager;
    public ObstacleConfigSO ObstacleConfig => obstacleConfigSO;

    public void LoadLevel()
    {
        LoadLevel(VariableSystem.IndexLevel + 1);
    }

    [Button]
    public void LoadLevel(int levelId)
    {
        Debug.Log($"[DEBUG] LoadLevel({levelId}) — IndexLevel={VariableSystem.IndexLevel}\n{Environment.StackTrace}");
        ApplyLevelSet();
        LoadDifficultyConfigs();                       // chuyển từ BuildOrders lên đây
        LevelConfig level = LevelConverter.FindLevel(levelTableFile, levelId);
        int version = SelectLevelVersion(level);
        CurrentLevelData = LevelConverter.Convert(level, bubbleFiles, version);
        BuildOrders(levelId);

        if (boardManager == null)
        {
            boardManager = FindObjectOfType<BoardManager>();
        }

        if (boardManager == null)
        {
            Debug.LogError("Cannot load level because BoardManager was not found.", this);
            return;
        }

        TopContainer.Ins.gameObject.SetActive(true);
        TimeNestController.Ins.ResetForLevel(CurrentLevelData.Level);
        TopContainer.Ins.Initialize();
        boardManager.Init(CurrentLevelData.Bubbles, -1, CurrentLevelData.Level.LevelDifficulty);
        // boardManager.Init(CurrentLevelData.Bubbles, TutorialManager.Ins.GetSpawnHoldLimit(levelId), CurrentLevelData.Level.LevelDifficulty);
        // // UIManager.Ins.OpenUI<GameplayUI>().ShowWarning(CurrentLevelData.Level.LevelDifficulty);
        // TutorialManager.Ins.TryStart(levelId);
        BoosterManager.Ins.TryShowUnlockBoosterUI();
        // DataBucketEvent.Ins.StartLevel(levelId);
    }

    private int SelectLevelVersion(LevelConfig level)
    {
        int loseStreak = GetLoseStreak(level.LevelID);
        if (loseStreak <= 0) return 1;                  // lần đầu: bản gốc

        float progress = Mathf.Clamp01((float)level.LevelID / totalLevelCount);
        LevelDifficultyConfig config = FindDifficultyConfig(level.LevelDifficulty, progress, loseStreak);
        if (config == null) return 1;

        // Order1..5 = tỉ lệ ra bản 1..5; bản nào không có file thì bỏ qua
        float[] weights = new float[5];
        float total = 0f;
        for (int i = 0; i < 5; i++)
        {
            int v = i + 1;
            if (v > 1 && LevelConverter.GetBubbleDataName(level, v, bubbleFiles) == null)
                continue;
            weights[i] = Mathf.Max(0f, config.GetOrderWeight(i));
            total += weights[i];
        }
        if (total <= 0f) return 1;

        float r = UnityEngine.Random.value * total;
        for (int i = 0; i < 5; i++)
        {
            if (weights[i] <= 0f) continue;
            r -= weights[i];
            if (r <= 0f)
            {
                //Debug.Log($"Level {level.LevelID} lose {loseStreak} -> version {i + 1}"); 
                return i + 1;
            }
        }
        return 1;
    }
    public void RestartLevel()
    {
        LoadLevel();
    }
    public void ClearLevel()
    {
        // TutorialManager.Ins.Cancel();
        CurrentLevelData = null;
        pendingOrders.Clear();
        completedOrderCount = 0;
        totalOrderCount = 0;
        TotalBirdCount = 0;
        boardManager.Clear();
        TopContainer.Ins.ResetTop();

        TopContainer.Ins.gameObject.SetActive(false);
    }

    public BirdOrder GetNextBirdOrder(int tempCount)
    {
        if (pendingOrders.Count == 0)
        {
            return null;
        }

        float progress = totalOrderCount > 0
            ? (float)completedOrderCount / totalOrderCount
            : 1f;
        int difficulty = CurrentLevelData?.Level != null
            ? CurrentLevelData.Level.LevelDifficulty
            : 1;

        LevelDifficultyConfig config = FindDifficultyConfig(difficulty, progress, tempCount);
        int candidateCount = Mathf.Min(5, pendingOrders.Count);
        int selectedIndex = SelectOrderIndex(config, candidateCount);

        BirdOrder result = pendingOrders[selectedIndex];
        pendingOrders.RemoveAt(selectedIndex);
        return result;
    }

    public void CompleteBirdOrder()
    {
        completedOrderCount = Mathf.Min(completedOrderCount + 1, totalOrderCount);
    }

    private void BuildOrders(int levelId)
    {
        LoadDifficultyConfigs();
        pendingOrders.Clear();
        completedOrderCount = 0;
        TotalBirdCount = 0;
        orderRandom = new System.Random(levelId);

        Dictionary<int, int> birdCounts = new Dictionary<int, int>();
        BubbleConfig[] bubbles = CurrentLevelData?.Bubbles ?? new BubbleConfig[0];
        for (int i = 0; i < bubbles.Length; i++)
        {
            string fishStr = bubbles[i]?.FishStr;
            if (string.IsNullOrWhiteSpace(fishStr)) continue;

            string[] fishIds = fishStr.Split(',');
            for (int j = 0; j < fishIds.Length; j++)
            {
                if (!int.TryParse(fishIds[j], out int birdId)) continue;

                TotalBirdCount++;

                birdCounts.TryGetValue(birdId, out int count);
                count++;
                birdCounts[birdId] = count;

                // The order list follows the source bubble stream. Reaching the
                // third occurrence creates the easiest currently completable
                // candidate; Order1..Order5 then select among the first five.
                if (count % 3 != 0) continue;

                BirdData birdData = GetBirdDataById(birdId);
                if (birdData == null) continue;

                pendingOrders.Add(new BirdOrder
                {
                    BirdId = birdId,
                    BirdData = birdData
                });
            }
        }

        foreach (KeyValuePair<int, int> pair in birdCounts)
        {
            if (pair.Value % 3 != 0)
            {
                Debug.LogWarning(
                    $"Bird source ID {pair.Key} appears {pair.Value} times; " +
                    "only complete groups of 3 can become orders.",
                    this);
            }
        }

        totalOrderCount = pendingOrders.Count;
    }

    private void LoadDifficultyConfigs()
    {
        if (levelDifficultyFile == null || string.IsNullOrWhiteSpace(levelDifficultyFile.text))
        {
            difficultyConfigs = new LevelDifficultyConfig[0];
            return;
        }

        string json = levelDifficultyFile.text.Trim();
        if (!json.StartsWith("[", StringComparison.Ordinal) ||
            !json.EndsWith("]", StringComparison.Ordinal))
        {
            Debug.LogError("LevelDifficultyConfig must contain a JSON array.", this);
            difficultyConfigs = new LevelDifficultyConfig[0];
            return;
        }

        // Playworks không hỗ trợ JsonUtility và không có Newtonsoft lúc chạy, nên dùng SimpleJson tự viết.
        var items = SimpleJson.ParseObjectArray(json, levelDifficultyFile.name);
        difficultyConfigs = new LevelDifficultyConfig[items.Count];
        for (int i = 0; i < items.Count; i++)
        {
            var item = items[i];
            difficultyConfigs[i] = new LevelDifficultyConfig
            {
                Difficulty = SimpleJson.GetInt(item, "Difficulty"),
                LevelProgress = SimpleJson.GetFloat(item, "LevelProgress"),
                TempCount = SimpleJson.GetInt(item, "TempCount"),
                Order1 = SimpleJson.GetFloat(item, "Order1"),
                Order2 = SimpleJson.GetFloat(item, "Order2"),
                Order3 = SimpleJson.GetFloat(item, "Order3"),
                Order4 = SimpleJson.GetFloat(item, "Order4"),
                Order5 = SimpleJson.GetFloat(item, "Order5"),
            };
        }
    }

    private void ApplyLevelSet()
    {
        if (levelSets == null || levelSets.Length == 0)
        {
            Debug.LogError("[LevelManager] Chưa gán Level Sets trong Inspector.", this);
            return;
        }

        // Lấy giá trị đã lưu từ lần fetch thành công gần nhất; mất mạng thì vẫn giữ đúng bộ cũ
        int index = 1;
        index = Mathf.Clamp(index, 0, levelSets.Length - 1);

        levelTableFile = levelSets[index].levelTableFile;
        bubbleFiles = levelSets[index].bubbleFiles;
    }

    private LevelDifficultyConfig FindDifficultyConfig(
        int difficulty,
        float progress,
        int tempCount)
    {
        LevelDifficultyConfig best = null;
        float bestScore = float.MaxValue;

        for (int i = 0; i < difficultyConfigs.Length; i++)
        {
            LevelDifficultyConfig candidate = difficultyConfigs[i];
            int difficultyDistance = Mathf.Abs(candidate.Difficulty - difficulty);
            int tempDistance = Mathf.Abs(candidate.TempCount - tempCount);

            // Prefer the next progress threshold (0.4, 0.65, 0.85, 1.0).
            float progressDistance = candidate.LevelProgress >= progress
                ? candidate.LevelProgress - progress
                : 10f + progress - candidate.LevelProgress;
            float score = difficultyDistance * 1000f + tempDistance * 100f + progressDistance;

            if (score < bestScore)
            {
                bestScore = score;
                best = candidate;
            }
        }

        return best;
    }

    private int SelectOrderIndex(LevelDifficultyConfig config, int candidateCount)
    {
        if (config == null || candidateCount <= 1)
        {
            return 0;
        }

        float totalWeight = 0f;
        for (int i = 0; i < candidateCount; i++)
        {
            totalWeight += Mathf.Max(0f, config.GetOrderWeight(i));
        }

        if (totalWeight <= 0f)
        {
            return 0;
        }

        double randomValue = orderRandom.NextDouble() * totalWeight;
        float accumulated = 0f;
        for (int i = 0; i < candidateCount; i++)
        {
            accumulated += Mathf.Max(0f, config.GetOrderWeight(i));
            if (randomValue <= accumulated)
            {
                return i;
            }
        }

        return candidateCount - 1;
    }

    public BirdData GetBirdDataById(int birdId)
    {
        if (birdDataSO == null)
        {
            Debug.LogError("BirdDataSO is not assigned.", this);
            return null;
        }

        BirdData birdData = birdDataSO.GetBirdDataById(birdId);
        if (birdData != null)
        {
            return birdData;
        }

        // Level files contain source fish IDs that are not all represented by
        // the small prototype BirdDataSO. Map missing IDs deterministically so
        // repeated source IDs always display and match as the same bird type.
        if (birdDataSO.birds == null || birdDataSO.birds.Length == 0)
        {
            Debug.LogError("BirdDataSO does not contain any birds.", this);
            return null;
        }

        int safeId = birdId == int.MinValue ? 0 : Mathf.Abs(birdId);
        int index = safeId > 0 ? (safeId - 1) % birdDataSO.birds.Length : 0;
        return birdDataSO.birds[index];
    }
    /// <summary>
    /// Mở UnlockObstacleUI cho các obstacle có unlockLevel == level hiện tại (ObstacleConfigSO.obstacleDatas).
    /// Mỗi obstacle chỉ hiện một lần (lưu PlayerPrefs theo tên) nên restart / chơi lại không hiện lại.
    /// </summary>
    

    private static string ObstacleUnlockShownKey(ObstacleData data) => $"ObstacleUnlockShown_{data.name}";

    public ObstacleBase GetObstaclePrefab(ObstacleType type)
    {
        if (obstacleConfigSO == null)
        {
            Debug.LogError("ObstacleConfigSO is not assigned.", this);
            return null;
        }

        return obstacleConfigSO.GetPrefab(type);
    }

    public void RegisterLose()
    {
        int levelId = VariableSystem.IndexLevel + 1;
        if (VariableSystem.LoseStreakLevelId != levelId)
        {
            VariableSystem.LoseStreakLevelId = levelId;
            VariableSystem.LoseStreakCount = 0;
        }
        VariableSystem.LoseStreakCount++;
    }

    public void ResetLoseStreak()
    {
        VariableSystem.LoseStreakLevelId = 0;
        VariableSystem.LoseStreakCount = 0;
    }

    private int GetLoseStreak(int levelId) =>
        VariableSystem.LoseStreakLevelId == levelId ? VariableSystem.LoseStreakCount : 0;


#if UNITY_EDITOR
    [Button]
    private void AutoFillBubbleFiles(int setIndex = 0, string folder = "Assets/_Game/Levels/Custom8")
    {
        if (levelSets == null || setIndex < 0 || setIndex >= levelSets.Length)
        {
            Debug.LogError($"Level Sets chưa có phần tử [{setIndex}].", this);
            return;
        }

        List<TextAsset> files = new List<TextAsset>();
        foreach (string guid in UnityEditor.AssetDatabase.FindAssets("t:TextAsset BubbleConfig_", new[] { folder }))
        {
            string path = UnityEditor.AssetDatabase.GUIDToAssetPath(guid);
            files.Add(UnityEditor.AssetDatabase.LoadAssetAtPath<TextAsset>(path));
        }
        levelSets[setIndex].bubbleFiles = files.ToArray();
        UnityEditor.EditorUtility.SetDirty(this);
        Debug.Log($"Assigned {files.Count} bubble files from {folder} to Level Sets[{setIndex}]");
    }

#endif
}
