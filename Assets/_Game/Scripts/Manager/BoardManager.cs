using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Lean.Pool;
using UnityEngine;

public class BoardManager : MonoBehaviour
{
    [Header("Bubble Prefabs (index 0 = type 1)")]
    [SerializeField] private BubbleBase[] _bubblePrefabs = new BubbleBase[5];

    [Header("Spawn Gates")]
    [SerializeField] private Transform[] _spawnPoints;
    [SerializeField] private Transform _waterSurface;
    [SerializeField] private Transform _bubbleParent;
    [SerializeField] private Transform _magnetGatherPoint;
    [SerializeField, Min(0f)] private float _surfaceTolerance = 0.05f;

    [Header("Walls")]
    [SerializeField] private Transform _wallsParent;
    [SerializeField] private Transform _cloude;
    [SerializeField] private Collider2D _bottomCollider;
    [SerializeField, Tooltip("Camera rendering the board. Empty = MainCamera in this scene, excluding the persistent Service camera.")]
    private Camera _alignmentCamera;

    [Header("Spawn Motion")]
    [SerializeField, Min(0f)] private float _horizontalSpawnJitter = 0.2f;
    [SerializeField, Min(0f)] private float _inwardImpulseMin = 0.35f;
    [SerializeField, Min(0f)] private float _inwardImpulseMax = 0.8f;

    [Header("Timing")]
    [SerializeField, Min(0)] private int _initialSpawnCount = 10;
    [SerializeField, Min(0f)] private float _initialSpawnInterval = 0.02f;
    [SerializeField, Min(0.02f)] private float _checkInterval = 0.1f;
    [SerializeField, Min(0f)] private float _spawnInterval = 0.15f;

    [Header("Deadlock")]
    [SerializeField, Min(0f)] private float _deadlockCheckDelay = 0.5f;
    [SerializeField, Min(0f)] private float _settleSpeed = 0.05f;
    [SerializeField, Min(0f)] private float _settleTime = 0.3f;
    [SerializeField, Min(0f)] private float _settleTimeout = 5f;

    [SerializeField] private SpriteRenderer _boxBird;
    [SerializeField] private Sprite[] _SpriteBoxBirds;
    private Coroutine _deadlockRoutine;

    private readonly Queue<BubbleConfig> bubbleRemaining = new Queue<BubbleConfig>();

    public readonly List<BubbleBase> bubbleActive = new List<BubbleBase>();

    private Coroutine _spawnRoutine;
    private int _nextSpawnPointIndex;
    private bool[] _spawnPointBusy;
    private System.Action _shuffleCancelHandler;
    private bool _isShuffling;
    private int _spawnHoldLimit = -1;
    private int _spawnedCount;

    // Khi >= 0: dừng spawn thêm lồng sau khi đã spawn đủ chừng này (dùng cho tutorial).
    private bool IsSpawnHeld => _spawnHoldLimit >= 0 && _spawnedCount >= _spawnHoldLimit;

    public void ReleaseSpawnHold()
    {
        _spawnHoldLimit = -1;
    }

    public int RemainingCount => bubbleRemaining.Count;
    public int ActiveCount => bubbleActive.Count;
    public Vector3 MagnetGatherPosition => _magnetGatherPoint != null
        ? _magnetGatherPoint.position
        : _bubbleParent != null ? _bubbleParent.position : transform.position;
    public Vector3 BoardCenterPosition => _bubbleParent != null ? _bubbleParent.position : transform.position;
    public Collider2D BottomCollider => _bottomCollider;
    private void Awake()
    {
        ResolveSceneReferences();
    }

    public void AlignWallsToScreenPoint(Vector2 screenPoint)
    {
        if (_wallsParent == null || _cloude == null) return;

        if (_alignmentCamera == null || !(_alignmentCamera.enabled && _alignmentCamera.gameObject.activeInHierarchy))
        {
            _alignmentCamera = null;
            foreach (Camera camera in Camera.allCameras)
            {
                if (camera.gameObject.scene == gameObject.scene && camera.CompareTag("MainCamera") &&
                    (_alignmentCamera == null || camera.depth > _alignmentCamera.depth))
                {
                    _alignmentCamera = camera;
                }
            }
        }

        if (_alignmentCamera == null) return;

        // Use the board camera and the marker's actual depth, preserving horizontal alignment.
        Vector3 projectedPoint = _alignmentCamera.WorldToScreenPoint(_cloude.position);
        if (projectedPoint.z <= 0f) return;
        projectedPoint.y = screenPoint.y;
        AlignWallsToPoint(_alignmentCamera.ScreenToWorldPoint(projectedPoint));
    }

    /// <summary>
    /// Dời _wallsParent theo trục Y sao cho _cloude trùng độ cao với worldPoint
    /// (dùng khi UI đáy bị đẩy lên chừa chỗ cho banner). _cloude phải là con của _wallsParent.
    /// Tính delta từ vị trí hiện tại nên gọi lặp lại nhiều lần vẫn đúng.
    /// </summary>
    public void AlignWallsToPoint(Vector3 worldPoint)
    {
        if (_wallsParent == null || _cloude == null) return;

        if (!_cloude.IsChildOf(_wallsParent))
        {
            Debug.LogWarning("_cloude must be a child of _wallsParent to align walls.", this);
            return;
        }

        float deltaY = worldPoint.y - _cloude.position.y;
        if (Mathf.Approximately(deltaY, 0f)) return;

        Vector3 position = _wallsParent.position;
        position.y += deltaY;
        _wallsParent.position = position;
    }

    public void Init(IEnumerable<BubbleConfig> bubbleConfigs, int spawnHoldLimit = -1, int levelDifficulty = 0)
    {
        _spawnHoldLimit = spawnHoldLimit;
        _spawnedCount = 0;
        CancelActiveShuffle();
        StopSpawnRoutine();
        DespawnActiveBubbles();
        SetupBox(levelDifficulty);

        bubbleRemaining.Clear();
        _nextSpawnPointIndex = 0;
        _spawnPointBusy = _spawnPoints == null
            ? new bool[0]
            : new bool[_spawnPoints.Length];

        if (bubbleConfigs == null)
        {
            Debug.LogError("Cannot initialize BoardManager with null bubble configs.", this);
            return;
        }

        foreach (BubbleConfig bubbleConfig in bubbleConfigs)
        {
            if (bubbleConfig != null)
            {
                bubbleRemaining.Enqueue(bubbleConfig);
            }
        }

        if (!ValidateSetup() || bubbleRemaining.Count == 0)
        {
            return;
        }

        _spawnRoutine = StartCoroutine(SpawnWhenPossible());
    }

    private void SetupBox(int levelDifficulty)
    {
        switch (levelDifficulty)
        {
            case 1:
                _boxBird.sprite = _SpriteBoxBirds[0];
                break;
            case 2:
                _boxBird.sprite = _SpriteBoxBirds[1];
                break;
            case 3:
                _boxBird.sprite = _SpriteBoxBirds[2];
                break;
        }
    }

    public void Clear()
    {
        CancelActiveShuffle();
        StopSpawnRoutine();
        DespawnActiveBubbles();
        bubbleRemaining.Clear();
    }

    public void DespawnBubble(BubbleBase bubble)
    {
        if (bubble == null)
        {
            return;
        }

        bubbleActive.Remove(bubble);
        bubble.ClearBirds();
        bubble.ClearObstacles();
        LeanPool.Despawn(bubble.gameObject);
    }

    private IEnumerator SpawnWhenPossible()
    {
        WaitForSeconds waitForSpace = new WaitForSeconds(_checkInterval);
        WaitForSeconds waitAfterSpawn = new WaitForSeconds(_spawnInterval);

        int initialCount = Mathf.Min(_initialSpawnCount, bubbleRemaining.Count);
        WaitForSeconds waitInitialSpawn = _initialSpawnInterval > 0f
            ? new WaitForSeconds(_initialSpawnInterval)
            : null;

        // Fill the opening with a fast burst. This phase intentionally ignores
        // WaterSurface so bubbles do not have to wait for the previous one to fall.
        for (int i = 0; i < initialCount; i++)
        {
            while (_isShuffling)
            {
                yield return null;
            }

            while (IsSpawnHeld)
            {
                yield return null;
            }

            // A magnet can remove birds from queued configs while this opening
            // burst is yielding between spawns.
            if (bubbleRemaining.Count == 0)
            {
                break;
            }

            int spawnPointIndex = _nextSpawnPointIndex;
            _nextSpawnPointIndex = (_nextSpawnPointIndex + 1) % _spawnPoints.Length;

            BubbleConfig config = bubbleRemaining.Dequeue();
            SpawnBubble(config, spawnPointIndex);
            _spawnedCount++;

            if (waitInitialSpawn != null && i < initialCount - 1)
            {
                yield return waitInitialSpawn;
            }
        }

        while (bubbleRemaining.Count > 0)
        {
            while (_isShuffling)
            {
                yield return null;
            }

            if (IsSpawnHeld)
            {
                yield return null;
                continue;
            }

            RemoveInvalidActiveBubbles();

            if (!TryGetFreeSpawnPoint(out int spawnPointIndex))
            {
                yield return waitForSpace;
                continue;
            }

            BubbleConfig config = bubbleRemaining.Dequeue();
            BubbleBase spawnedBubble = SpawnBubble(config, spawnPointIndex);
            _spawnedCount++;
            if (spawnedBubble != null)
            {
                _spawnPointBusy[spawnPointIndex] = true;
                StartCoroutine(WaitUntilBubblePassesSurface(spawnPointIndex, spawnedBubble));
            }

            // Let Physics2D register the collider of the bubble just spawned.
            yield return new WaitForFixedUpdate();

            if (_spawnInterval > 0f)
            {
                yield return waitAfterSpawn;
            }
        }

        _spawnRoutine = null;
        RequestDeadlockCheck();
    }

    public bool TryTakeBirdsForMagnet(int birdId, int amount, out List<Bird> result)
    {
        result = new List<Bird>(Mathf.Max(0, amount));
        if (birdId < 0 ||
            amount <= 0 ||
            LevelManager.Ins == null ||
            LevelManager.Ins.birdPrefab == null)
        {
            return false;
        }

        BirdData birdData = LevelManager.Ins.GetBirdDataById(birdId);
        if (birdData == null)
        {
            return false;
        }

        RemoveInvalidActiveBubbles();

        List<Bird> activeMatches = new List<Bird>(amount);
        for (int bubbleIndex = 0;
             bubbleIndex < bubbleActive.Count && activeMatches.Count < amount;
             bubbleIndex++)
        {
            BubbleBase bubble = bubbleActive[bubbleIndex];
            if (bubble == null) continue;
            if (bubble.IsProtectedFromBooster(BoosterType.Net)) continue;

            IReadOnlyList<Bird> bubbleBirds = bubble.Birds;
            for (int birdIndex = 0;
                 birdIndex < bubbleBirds.Count && activeMatches.Count < amount;
                 birdIndex++)
            {
                Bird bird = bubbleBirds[birdIndex];
                if (bird != null &&
                    bird.gameObject.activeInHierarchy &&
                    bird.BirdState == BirdState.Idle &&
                    bird.UniqueElementID == birdId &&
                    !bird.IsProtectedFromBooster(BoosterType.Net)
                    )
                {
                    activeMatches.Add(bird);
                }
            }
        }

        int storedToTake = Mathf.Min(amount - activeMatches.Count, CountStoredBirds(birdId));

        // (2) Còn thiếu thì lấy từ trứng chưa spawn
        int queueAmountNeeded = amount - activeMatches.Count - storedToTake;
        if (queueAmountNeeded > CountQueuedBirds(birdId))
        {
            return false;
        }

        // Đủ số lượng -> bắt đầu lấy thật
        result.AddRange(activeMatches);

        int spawnedCount = 0;
        for (int bubbleIndex = 0; bubbleIndex < bubbleActive.Count && storedToTake > 0; bubbleIndex++)
        {
            BubbleBase bubble = bubbleActive[bubbleIndex];
            if (bubble == null || bubble.IsProtectedFromBooster(BoosterType.Net)) continue;

            while (storedToTake > 0 && bubble.TryTakeStoredBird(birdId))
            {
                Bird bird = LeanPool.Spawn(
                    LevelManager.Ins.birdPrefab,
                    bubble.transform.position,
                    Quaternion.identity,
                    _bubbleParent);
                bird.Init(birdData, null, birdId, 100 + spawnedCount);
                result.Add(bird);
                spawnedCount++;
                storedToTake--;
            }
        }

        if (queueAmountNeeded == 0)
        {
            return result.Count == amount;
        }

        int removedFromQueue = RemoveQueuedBirds(birdId, queueAmountNeeded);
        for (int i = 0; i < removedFromQueue; i++)
        {
            Vector3 spawnPosition = GetMagnetBirdSpawnPosition(i);
            Bird bird = LeanPool.Spawn(
                LevelManager.Ins.birdPrefab,
                spawnPosition,
                Quaternion.identity,
                _bubbleParent);
            bird.Init(birdData, null, birdId, 100 + spawnedCount + i);
            result.Add(bird);
        }

        return result.Count == amount;
    }

    private int CountStoredBirds(int birdId)
    {
        int count = 0;
        for (int i = 0; i < bubbleActive.Count; i++)
        {
            BubbleBase bubble = bubbleActive[i];
            if (bubble == null || bubble.IsProtectedFromBooster(BoosterType.Net)) continue;
            count += bubble.CountStoredBirds(birdId);
        }
        return count;
    }

    /// <summary>Dữ liệu một lần shuffle: chim, trứng chứa chúng và thứ tự id mới. BoosterShuffle lo phần hiệu ứng.</summary>
    public class ShufflePlan
    {
        public readonly List<Bird> Birds = new List<Bird>();
        public readonly List<BubbleBase> Bubbles = new List<BubbleBase>();
        public readonly List<int> ShuffledBirdIds = new List<int>();
    }

    /// Kiểm tra và chốt dữ liệu shuffle. Thành công thì bàn bị khoá (không spawn/deadlock check) tới khi FinishShuffle.
    /// onCancel được gọi nếu level bị reset/clear giữa chừng để BoosterShuffle dừng hiệu ứng.
    public bool TryPrepareShuffle(System.Action onCancel, out ShufflePlan plan)
    {
        plan = null;
        if (_isShuffling || TopContainer.Ins == null || TopContainer.Ins.IsAnim())
        {
            return false;
        }

        RemoveInvalidActiveBubbles();

        ShufflePlan result = new ShufflePlan();
        List<int> originalBirdIds = new List<int>();
        for (int bubbleIndex = 0; bubbleIndex < bubbleActive.Count; bubbleIndex++)
        {
            BubbleBase bubble = bubbleActive[bubbleIndex];
            if (bubble == null) continue;
            // Trứng/chim đang dính obstacle thì đứng yên, không tham gia shuffle (không bị hút, không đổi layer).
            if (bubble.IsProtectedFromBooster(BoosterType.Shuffle) || bubble.HasActiveObstacle()) continue;

            IReadOnlyList<Bird> bubbleBirds = bubble.Birds;
            bool hasBird = false;
            for (int birdIndex = 0; birdIndex < bubbleBirds.Count; birdIndex++)
            {
                Bird bird = bubbleBirds[birdIndex];
                if (bird == null ||
                    !bird.gameObject.activeInHierarchy ||
                    bird.BirdState != BirdState.Idle)
                {
                    return false;
                }

                hasBird = true;
                originalBirdIds.Add(bird.UniqueElementID);
                result.Birds.Add(bird);
            }

            if (hasBird)
            {
                result.Bubbles.Add(bubble);
            }
        }

        if (originalBirdIds.Count < 2 || !HasDifferentBirdIds(originalBirdIds))
        {
            return false;
        }

        result.ShuffledBirdIds.AddRange(originalBirdIds);
        ShuffleIds(result.ShuffledBirdIds);
        if (HasSameOrder(originalBirdIds, result.ShuffledBirdIds))
        {
            int firstId = result.ShuffledBirdIds[0];
            result.ShuffledBirdIds.RemoveAt(0);
            result.ShuffledBirdIds.Add(firstId);
        }

        _isShuffling = true;
        _shuffleCancelHandler = onCancel;
        plan = result;
        return true;
    }

    /// Đổi id chim theo thứ tự mới (chim reset scale 0, BoosterShuffle tự cho hiện lại).
    public void ApplyShuffle(ShufflePlan plan)
    {
        int birdOffset = 0;
        for (int i = 0; i < plan.Bubbles.Count; i++)
        {
            BubbleBase bubble = plan.Bubbles[i];
            if (bubble == null) continue;

            bubble.ApplyShuffledBirdIds(plan.ShuffledBirdIds, birdOffset);
            birdOffset += bubble.Birds.Count;
        }
    }

    /// Shuffle chạy xong: mở khoá bàn.
    public void FinishShuffle()
    {
        _isShuffling = false;
        _shuffleCancelHandler = null;
    }

    private static void ShuffleIds(List<int> birdIds)
    {
        for (int i = birdIds.Count - 1; i > 0; i--)
        {
            int randomIndex = Random.Range(0, i + 1);
            (birdIds[i], birdIds[randomIndex]) = (birdIds[randomIndex], birdIds[i]);
        }
    }

    private static bool HasDifferentBirdIds(IReadOnlyList<int> birdIds)
    {
        int firstId = birdIds[0];
        for (int i = 1; i < birdIds.Count; i++)
        {
            if (birdIds[i] != firstId)
            {
                return true;
            }
        }

        return false;
    }

    private static bool HasSameOrder(IReadOnlyList<int> first, IReadOnlyList<int> second)
    {
        if (first.Count != second.Count)
        {
            return false;
        }

        for (int i = 0; i < first.Count; i++)
        {
            if (first[i] != second[i])
            {
                return false;
            }
        }

        return true;
    }

    // Level bị reset/clear giữa lúc shuffle: dừng hiệu ứng của booster rồi mở khoá bàn.
    private void CancelActiveShuffle()
    {
        System.Action cancel = _shuffleCancelHandler;
        _shuffleCancelHandler = null;
        _isShuffling = false;
        cancel?.Invoke();
    }

    private int CountQueuedBirds(int birdId)
    {
        int count = 0;
        foreach (BubbleConfig config in bubbleRemaining)
        {
            if (config == null || string.IsNullOrWhiteSpace(config.FishStr)) continue;
            if (ObstacleDataHelper.IsProtectedFromBooster(config, BoosterType.Net)) continue;
            string[] fishIds = config.FishStr.Split(',');
            for (int i = 0; i < fishIds.Length; i++)
            {
                if (ObstacleDataHelper.IsBirdProtectedFromBooster(config, i, BoosterType.Net)) continue;
                if (int.TryParse(fishIds[i], out int queuedBirdId) && queuedBirdId == birdId)
                {
                    count++;
                }
            }
        }

        return count;
    }

    private int RemoveQueuedBirds(int birdId, int amount)
    {
        BubbleConfig[] queuedConfigs = bubbleRemaining.ToArray();
        bubbleRemaining.Clear();

        int removedCount = 0;
        for (int configIndex = 0; configIndex < queuedConfigs.Length; configIndex++)
        {
            BubbleConfig config = queuedConfigs[configIndex];
            if (config == null)
            {
                continue;
            }

            if (ObstacleDataHelper.IsProtectedFromBooster(config, BoosterType.Net))
            {
                bubbleRemaining.Enqueue(config);
                continue;
            }

            int removedBeforeConfig = removedCount;
            while (removedCount < amount && TryRemoveBirdFromConfig(config, birdId))
            {
                removedCount++;
            }

            // Do not spawn an empty bubble after all of its birds were taken.
            // Empty obstacle configs which were already in the queue are kept.
            if (removedCount == removedBeforeConfig ||
                !string.IsNullOrWhiteSpace(config.FishStr))
            {
                bubbleRemaining.Enqueue(config);
            }
        }

        return removedCount;
    }

    private static bool TryRemoveBirdFromConfig(BubbleConfig config, int birdId)
    {
        if (config == null || string.IsNullOrWhiteSpace(config.FishStr))
        {
            return false;
        }

        List<string> fishIds = new List<string>(config.FishStr.Split(','));
        int removeIndex = -1;
        for (int i = 0; i < fishIds.Count; i++)
        {
            if (ObstacleDataHelper.IsBirdProtectedFromBooster(config, i, BoosterType.Net)) continue;
            if (int.TryParse(fishIds[i], out int queuedBirdId) && queuedBirdId == birdId)
            {
                removeIndex = i;
                break;
            }
        }

        if (removeIndex < 0)
        {
            return false;
        }

        fishIds.RemoveAt(removeIndex);
        config.FishStr = string.Join(",", fishIds);
        config.BindFishStr = RemoveCsvItem(config.BindFishStr, removeIndex);
        config.IceFishStr = RemoveCsvItem(config.IceFishStr, removeIndex);
        config.UnKnowFishStr = RemoveCsvItem(config.UnKnowFishStr, removeIndex);
        config.KeyFishStr = RemoveCsvItem(config.KeyFishStr, removeIndex);
        config.LockFishStr = RemoveCsvItem(config.LockFishStr, removeIndex);
        return true;
    }

    private static string RemoveCsvItem(string source, int index)
    {
        if (string.IsNullOrEmpty(source))
        {
            return source;
        }

        List<string> values = new List<string>(source.Split(','));
        if (index < 0 || index >= values.Count)
        {
            return source;
        }

        values.RemoveAt(index);
        return string.Join(",", values);
    }

    private Vector3 GetMagnetBirdSpawnPosition(int index)
    {
        if (_spawnPoints != null && _spawnPoints.Length > 0)
        {
            Transform spawnPoint = _spawnPoints[index % _spawnPoints.Length];
            if (spawnPoint != null)
            {
                return spawnPoint.position;
            }
        }

        return _waterSurface != null ? _waterSurface.position : MagnetGatherPosition;
    }

    private bool TryGetFreeSpawnPoint(out int spawnPointIndex)
    {
        if (!IsWaterSurfaceClear())
        {
            spawnPointIndex = -1;
            return false;
        }

        int spawnPointCount = _spawnPoints.Length;

        for (int offset = 0; offset < spawnPointCount; offset++)
        {
            int index = (_nextSpawnPointIndex + offset) % spawnPointCount;
            if (_spawnPointBusy[index])
            {
                continue;
            }

            spawnPointIndex = index;
            _nextSpawnPointIndex = (index + 1) % spawnPointCount;
            return true;
        }

        spawnPointIndex = -1;
        return false;
    }

    private bool IsWaterSurfaceClear()
    {
        if (_waterSurface == null)
        {
            return true;
        }

        float fullLineY = _waterSurface.position.y - _surfaceTolerance;

        for (int i = 0; i < bubbleActive.Count; i++)
        {
            BubbleBase bubble = bubbleActive[i];
            if (bubble != null &&
                bubble.gameObject.activeInHierarchy &&
                bubble.transform.position.y >= fullLineY)
            {
                return false;
            }
        }

        return true;
    }

    private BubbleBase SpawnBubble(BubbleConfig config, int spawnPointIndex)
    {
        BubbleBase prefab = GetBubblePrefab(config.BubbleType);
        if (prefab == null)
        {
            Debug.LogError(
                $"No bubble prefab is assigned for BubbleType {config.BubbleType} " +
                $"(BubbleID {config.BubbleID}).",
                this);
            return null;
        }

        Transform spawnPoint = _spawnPoints[spawnPointIndex];
        Vector3 spawnPosition = spawnPoint.position;
        spawnPosition.x += Random.Range(-_horizontalSpawnJitter, _horizontalSpawnJitter);

        BubbleBase bubble = LeanPool.Spawn(
            prefab,
            spawnPosition,
            spawnPoint.rotation,
            _bubbleParent);

        bubble.Init(config, this);
        ApplySpawnMotion(bubble, spawnPoint);
        bubbleActive.Add(bubble);
        return bubble;
    }

    private void ApplySpawnMotion(BubbleBase bubble, Transform spawnPoint)
    {
        Rigidbody2D body = bubble.GetComponent<Rigidbody2D>();
        if (body == null)
        {
            return;
        }

        // LeanPool can return a body with velocity left over from its previous use.
        body.velocity = Vector2.zero;
        body.angularVelocity = 0f;

        // Perfectly round bubbles spawned on the same X coordinate can form a
        // physically stable vertical column. A small, varied inward impulse
        // breaks that symmetry so they roll into the middle of the board.
        float centerX = _bubbleParent != null
            ? _bubbleParent.position.x
            : transform.position.x;
        float inwardDirection = Mathf.Sign(centerX - spawnPoint.position.x);
        if (Mathf.Approximately(inwardDirection, 0f))
        {
            inwardDirection = Random.value < 0.5f ? -1f : 1f;
        }

        float minImpulse = Mathf.Min(_inwardImpulseMin, _inwardImpulseMax);
        float maxImpulse = Mathf.Max(_inwardImpulseMin, _inwardImpulseMax);
        float impulse = Random.Range(minImpulse, maxImpulse);

        body.AddForce(Vector2.right * inwardDirection * impulse, ForceMode2D.Impulse);
    }

    private IEnumerator WaitUntilBubblePassesSurface(int spawnPointIndex, BubbleBase bubble)
    {
        while (bubble != null && bubble.gameObject.activeInHierarchy)
        {
            if (_waterSurface == null ||
                bubble.transform.position.y < _waterSurface.position.y - _surfaceTolerance)
            {
                break;
            }

            yield return new WaitForFixedUpdate();
        }

        if (_spawnPointBusy != null && spawnPointIndex < _spawnPointBusy.Length)
        {
            _spawnPointBusy[spawnPointIndex] = false;
        }
    }

    private BubbleBase GetBubblePrefab(int bubbleType)
    {
        int prefabIndex = bubbleType - 1;
        if (prefabIndex < 0 || prefabIndex >= _bubblePrefabs.Length)
        {
            return null;
        }

        return _bubblePrefabs[prefabIndex];
    }

    private bool ValidateSetup()
    {
        ResolveSceneReferences();

        if (_spawnPoints == null || _spawnPoints.Length == 0)
        {
            Debug.LogError("BoardManager requires at least one spawn point.", this);
            return false;
        }

        for (int i = 0; i < _spawnPoints.Length; i++)
        {
            if (_spawnPoints[i] == null)
            {
                Debug.LogError($"Spawn point at index {i} is not assigned.", this);
                return false;
            }
        }

        if (_waterSurface == null)
        {
            Debug.LogError("BoardManager requires the WaterSurface transform.", this);
            return false;
        }

        if (_bubblePrefabs == null || _bubblePrefabs.Length < 5)
        {
            Debug.LogError(
                "BoardManager requires 5 bubble prefabs ordered from type 1 to type 5.",
                this);
            return false;
        }

        return true;
    }

    private void ResolveSceneReferences()
    {
        if (_spawnPoints == null || _spawnPoints.Length == 0)
        {
            Transform spawnRoot = transform.Find("SpawnPoints");
            if (spawnRoot != null)
            {
                _spawnPoints = new Transform[spawnRoot.childCount];
                for (int i = 0; i < spawnRoot.childCount; i++)
                {
                    _spawnPoints[i] = spawnRoot.GetChild(i);
                }
            }
        }

        if (_spawnPoints == null || _spawnPoints.Length == 0)
        {
            return;
        }

        if (_waterSurface != null)
        {
            return;
        }

        Transform[] sceneTransforms = GetComponentsInChildren<Transform>(true);
        for (int i = 0; i < sceneTransforms.Length; i++)
        {
            if (sceneTransforms[i].name == "WaterSurface")
            {
                _waterSurface = sceneTransforms[i];
                break;
            }
        }
    }

    private void OnBirdReleased(OnBirdReleasedEvent evt)
    {
        RequestDeadlockCheck();
    }

    private void RequestDeadlockCheck()
    {
        if (!isActiveAndEnabled) return;

        if (_deadlockRoutine != null)
        {
            StopCoroutine(_deadlockRoutine);
        }

        _deadlockRoutine = StartCoroutine(CheckObstacleDeadlock());
    }

    /// Thua khi: không còn bubble chờ spawn, board đã đứng yên,
    /// và trên board còn chim nhưng KHÔNG con nào tap được.
    private IEnumerator CheckObstacleDeadlock()
    {
        yield return new WaitForSeconds(_deadlockCheckDelay);

        // Đợi board đứng yên: bubble đang rơi có thể sắp chạm đáy (Hidden Egg lộ ra)
        // hoặc sắp đổi vị trí. Kiểm tra lúc đang rơi dễ xử thua sai.
        float stillTime = 0f;
        float waited = 0f;
        while (stillTime < _settleTime && waited < _settleTimeout)
        {
            yield return new WaitForFixedUpdate();
            waited += Time.fixedDeltaTime;
            stillTime = IsBoardSettled() ? stillTime + Time.fixedDeltaTime : 0f;
        }

        _deadlockRoutine = null;

        // Còn bubble sẽ spawn thì chưa kẹt
        if (bubbleRemaining.Count > 0) yield break;

        RemoveInvalidActiveBubbles();

        bool hasBird = false;
        for (int i = 0; i < bubbleActive.Count; i++)
        {
            BubbleBase bubble = bubbleActive[i];
            if (bubble == null || bubble.BirdCount == 0) continue;

            hasBird = true;

            // Còn ít nhất 1 lồng tap được -> vẫn còn nước đi
            if (bubble.CanTapBird) yield break;
        }

        if (hasBird)
        {
            TopContainer.Ins.TriggerLose(LoseReason.ObstacleDeadlock);
        }
    }

    /// Mọi bubble trên board đều gần như đứng yên
    private bool IsBoardSettled()
    {
        if (TopContainer.Ins != null && TopContainer.Ins.IsAnim()) return false;
        float maxSqr = _settleSpeed * _settleSpeed;
        for (int i = 0; i < bubbleActive.Count; i++)
        {
            BubbleBase bubble = bubbleActive[i];
            if (bubble == null) continue;

            Rigidbody2D body = bubble.GetComponent<Rigidbody2D>();
            if (body != null && body.velocity.sqrMagnitude > maxSqr)
            {
                return false;
            }
        }

        return true;
    }

    private void RemoveInvalidActiveBubbles()
    {
        for (int i = bubbleActive.Count - 1; i >= 0; i--)
        {
            BubbleBase bubble = bubbleActive[i];
            if (bubble == null || !bubble.gameObject.activeInHierarchy)
            {
                bubbleActive.RemoveAt(i);
            }
        }
    }

    private void DespawnActiveBubbles()
    {
        for (int i = bubbleActive.Count - 1; i >= 0; i--)
        {
            BubbleBase bubble = bubbleActive[i];
            if (bubble != null)
            {
                bubble.ClearBirds();
                bubble.ClearObstacles();
                LeanPool.Despawn(bubble.gameObject);
            }
        }

        bubbleActive.Clear();
    }

    private void StopSpawnRoutine()
    {
        StopAllCoroutines();
        _deadlockRoutine = null;
        _spawnRoutine = null;

        if (_spawnPointBusy == null)
        {
            return;
        }

        for (int i = 0; i < _spawnPointBusy.Length; i++)
        {
            _spawnPointBusy[i] = false;
        }
    }

    private void OnEnable()
    {
        EventManager.AddListener<OnBirdReleasedEvent>(OnBirdReleased);
    }

    private void OnDisable()
    {
        EventManager.RemoveListener<OnBirdReleasedEvent>(OnBirdReleased);
        CancelActiveShuffle();
        StopSpawnRoutine();
    }
}
