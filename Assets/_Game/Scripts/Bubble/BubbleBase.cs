using System.Collections.Generic;
using DG.Tweening;
using Lean.Pool;
using Sirenix.OdinInspector;
using UnityEngine;

public class BubbleBase : MonoBehaviour
{
    private const int FirstBirdSortingOrder = 7;

    [SerializeField] private Transform birdParent;
    [SerializeField] protected BubbleConfig currentConfig;

    [SerializeField] protected List<Bird> birds;
    [SerializeField, Min(0f)] private float refillPopDuration = 0.25f;
    [SerializeField, Min(0f)] private float refillMoveDuration = 0.3f;

    private static readonly ParticleEffectType[] EggBreakEffects =
    {
        ParticleEffectType.FX_BigEgg1,
        ParticleEffectType.FX_BigEgg2,
        ParticleEffectType.FX_BigEgg3,
        ParticleEffectType.FX_BigEgg4,
        ParticleEffectType.FX_BigEgg5,
    };

    [Header("Circle Mask")]
    [SerializeField] private bool clipBirdsToCircle = true;
    private float circleMaskRadiusScale = 0.9f;
    private CircleCollider2D _circle;
    private readonly List<int> _birdSlots = new List<int>();
    private readonly List<Vector3> _slotPositions = new List<Vector3>();
    private readonly List<int> _storedBirdIds = new List<int>();
    private readonly List<int> _storedFishIndexes = new List<int>();
    private BoardManager _boardManager;

    private readonly List<ObstacleBase> _obstacles = new List<ObstacleBase>();
    private static readonly List<ObstacleType> s_obstacleTypes = new List<ObstacleType>();
    private Collider2D _collider;
    private BubbleParts _parts;
    public int BirdCount => birds.Count;
    public int StoredCount => _storedBirdIds.Count;
    public Collider2D Collider
    {
        get
        {
            if (_collider == null) _collider = GetComponent<Collider2D>();
            return _collider;
        }
    }
    public bool CanTapBird
    {
        get
        {
            if (TryGetBlockingObstacle(out _)) return false;

            for (int i = 0; i < birds.Count; i++)
            {
                if (birds[i] != null && !birds[i].TryGetBlockingObstacle(out _)) return true;
            }

            return false;
        }
    }

    public IReadOnlyList<Bird> Birds => birds;

    protected Vector2[] positions;


    public virtual void Init(BubbleConfig config, BoardManager boardManager = null)
    {
        ClearBirds();
        ClearObstacles();
        _boardManager = boardManager;
        currentConfig = config;

        SetupBirds(config);

        // Setup birds
        SetupPosition();
        CacheSlotPositions();
        SpawnObstacles(config);
    }

    private void SetupBirds(BubbleConfig config)
    {
        string[] fishIds = string.IsNullOrEmpty(config.FishStr) ? new string[0] : config.FishStr.Split(',');
        var validBirdIds = new List<int>(fishIds.Length);
        var validBirdData = new List<BirdData>(fishIds.Length);
        var validFishIndexes = new List<int>(fishIds.Length);

        for (int i = 0; i < fishIds.Length; i++)
        {
            if (int.TryParse(fishIds[i], out int birdId))
            {
                BirdData birdData = LevelManager.Ins.GetBirdDataById(birdId);
                if (birdData == null)
                {
                    continue;
                }

                validBirdIds.Add(birdId);
                validBirdData.Add(birdData);
                validFishIndexes.Add(i);
            }
        }

        int visibleCount = config.BubbleType > 0
            ? Mathf.Min(config.BubbleType, validBirdData.Count)
            : validBirdData.Count;

        for (int i = 0; i < visibleCount; i++)
        {
            Bird bird = LeanPool.Spawn(LevelManager.Ins.birdPrefab, birdParent);
            bird.Init(validBirdData[i], this, validBirdIds[i], GetSlotSortingOrder(i, visibleCount));
            bird.SetupObstacles(config, validFishIndexes[i]);
            birds.Add(bird);
            _birdSlots.Add(i);
        }

        for (int i = visibleCount; i < validBirdIds.Count; i++)
        {
            _storedBirdIds.Add(validBirdIds[i]);
            _storedFishIndexes.Add(validFishIndexes[i]);
        }
    }

    private void CacheSlotPositions()
    {
        _slotPositions.Clear();
        for (int i = 0; i < birds.Count; i++)
        {
            _slotPositions.Add(birds[i].transform.localPosition);
        }
    }

    private static int GetSlotSortingOrder(int slot, int slotCount)
    {
        return FirstBirdSortingOrder + slotCount - 1 - slot;
    }

    private void SpawnObstacles(BubbleConfig config)
    {
        ObstacleDataHelper.GetBubbleObstacles(config, s_obstacleTypes);

        for (int i = 0; i < s_obstacleTypes.Count; i++)
        {
            ObstacleType type = s_obstacleTypes[i];
            ObstacleBase prefab = LevelManager.Ins.GetObstaclePrefab(type);
            if (prefab == null)
            {
                Debug.LogWarning($"[{name}] Chưa có prefab cho obstacle {type} trong ObstacleConfigSO", this);
                continue;
            }

            ObstacleBase obstacle = LeanPool.Spawn(prefab, transform);
            obstacle.transform.localPosition = Vector3.zero;
            obstacle.Init(this, config);
            _obstacles.Add(obstacle);
        }
    }

    /// Obstacle gọi khi đã bị phá xong (sau hiệu ứng vỡ)
    public void RemoveObstacle(ObstacleBase obstacle)
    {
        if (obstacle == null || !_obstacles.Remove(obstacle)) return;

        obstacle.Release();
        LeanPool.Despawn(obstacle.gameObject);
    }

    /// Gọi khi bubble được Init lại hoặc sắp bị despawn
    public void ClearObstacles()
    {
        for (int i = _obstacles.Count - 1; i >= 0; i--)
        {
            ObstacleBase obstacle = _obstacles[i];
            if (obstacle == null) continue;

            obstacle.Release();
            LeanPool.Despawn(obstacle.gameObject);
        }

        _obstacles.Clear();
    }

    public Transform GetPart(BubblePart key)
    {
        if (_parts == null) _parts = GetComponent<BubbleParts>();
        return _parts != null ? _parts.Get(key) : null;
    }

    public bool TryGetBlockingObstacle(out ObstacleBase obstacle)
    {
        for (int i = 0; i < _obstacles.Count; i++)
        {
            if (_obstacles[i].BlocksBirdTap)
            {
                obstacle = _obstacles[i];
                return true;
            }
        }

        obstacle = null;
        return false;
    }

    /// Trứng đang có obstacle kích hoạt, hoặc chim bên trong đang có obstacle.
    public bool HasActiveObstacle()
    {
        for (int i = 0; i < _obstacles.Count; i++)
        {
            if (_obstacles[i].IsActive)
            {
                return true;
            }
        }

        for (int i = 0; i < birds.Count; i++)
        {
            if (birds[i] != null && birds[i].HasActiveObstacle())
            {
                return true;
            }
        }

        return false;
    }

    public bool IsProtectedFromBooster(BoosterType booster)
    {
        for (int i = 0; i < _obstacles.Count; i++)
        {
            ObstacleBase obstacle = _obstacles[i];
            if (obstacle.IsActive && obstacle.ProtectsFromBooster(booster))
            {
                return true;
            }
        }

        return false;
    }

    public void ReleaseBird(Bird bird)
    {
        int index = bird != null ? birds.IndexOf(bird) : -1;
        if (index < 0)
        {
            return;
        }

        int slot = _birdSlots[index];
        birds.RemoveAt(index);
        _birdSlots.RemoveAt(index);

        // Big Egg: chim tiếp theo trong kho ra thay đúng chỗ vừa trống
        RefillSlot(slot);

        // Giữ nguyên các field bạn đã thêm cho event này (ví dụ byPlayerTap)
        EventManager.Trigger(new OnBirdReleasedEvent { bubble = this });

        // Kho đã được bổ sung ở trên -> Count == 0 nghĩa là trứng thật sự hết chim
        if (birds.Count == 0 && _boardManager != null)
        {
            BoardManager boardManager = _boardManager;
            _boardManager = null;
            SoundManager.Ins.PlaySFX(SoundFX.Egg_Break);  
            ParticlesManager.Ins.PlayEffect(GetEggBreakEffect(), transform.position);          
            boardManager.DespawnBubble(this);
        }
    }

    private ParticleEffectType GetEggBreakEffect()
    {
        int size = Mathf.Clamp(currentConfig.BubbleType, 1, EggBreakEffects.Length);
        return EggBreakEffects[size - 1];
    }

    private void RefillSlot(int slot)
    {
        if (_storedBirdIds.Count == 0 || slot < 0 || slot >= _slotPositions.Count)
        {
            return;
        }

        int birdId = _storedBirdIds[0];
        int fishIndex = _storedFishIndexes[0];
        _storedBirdIds.RemoveAt(0);
        _storedFishIndexes.RemoveAt(0);

        BirdData birdData = LevelManager.Ins.GetBirdDataById(birdId);
        if (birdData != null)
        {
            Bird newBird = LeanPool.Spawn(LevelManager.Ins.birdPrefab, birdParent);
            newBird.Init(birdData, this, birdId, GetSlotSortingOrder(slot, _slotPositions.Count));
            newBird.SetupObstacles(currentConfig, fishIndex);
            Transform birdTransform = newBird.transform;
            Vector3 eggCenter = birdParent.InverseTransformPoint(transform.position);
            eggCenter.z = _slotPositions[slot].z;

            birdTransform.DOKill();
            birdTransform.localPosition = eggCenter;
            birdTransform.localScale = Vector3.zero;

            DOTween.Sequence()
                .SetLink(newBird.gameObject)
                .Join(birdTransform.DOLocalMove(_slotPositions[slot], refillMoveDuration).SetEase(Ease.OutQuad))
                .Join(birdTransform.DOScale(Vector3.one, refillPopDuration).SetEase(Ease.OutBack));

            birds.Add(newBird);
            _birdSlots.Add(slot);
        }

        EventManager.Trigger(new OnBubbleStorageChangedEvent { bubble = this });
    }

    public int CountStoredBirds(int birdId)
    {
        int count = 0;
        for (int i = 0; i < _storedBirdIds.Count; i++)
        {
            if (_storedBirdIds[i] == birdId) count++;
        }
        return count;
    }

    /// Magnet: lấy 1 chim có birdId ra khỏi kho
    public bool TryTakeStoredBird(int birdId)
    {
        int index = _storedBirdIds.IndexOf(birdId);
        if (index < 0) return false;

        _storedBirdIds.RemoveAt(index);
        _storedFishIndexes.RemoveAt(index);
        EventManager.Trigger(new OnBubbleStorageChangedEvent { bubble = this });
        return true;
    }

    public void ClearBirds()
    {
        for (int i = birds.Count - 1; i >= 0; i--)
        {
            if (birds[i] != null)
            {
                LeanPool.Despawn(birds[i].gameObject);
            }
        }

        birds.Clear();
        _birdSlots.Clear();
        _storedBirdIds.Clear();
        _storedFishIndexes.Clear();
    }

    public void ApplyShuffledBirdIds(IReadOnlyList<int> shuffledBirdIds, int startIndex)
    {
        if (shuffledBirdIds == null ||
            startIndex < 0 ||
            startIndex + birds.Count > shuffledBirdIds.Count)
        {
            return;
        }

        List<string> configBirdIds = new List<string>(birds.Count);
        for (int i = 0; i < birds.Count; i++)
        {
            Bird bird = birds[i];
            int birdId = shuffledBirdIds[startIndex + i];
            BirdData birdData = LevelManager.Ins.GetBirdDataById(birdId);
            if (bird == null || birdData == null)
            {
                continue;
            }

            int sortingOrder = GetSlotSortingOrder(_birdSlots[i], _slotPositions.Count);
            bird.Init(birdData, this, birdId, sortingOrder);
            bird.transform.localScale = Vector3.zero;
            bird.SetInteraction(false);
            configBirdIds.Add(birdId.ToString());
        }

        if (currentConfig != null)
        {
            for (int i = 0; i < _storedBirdIds.Count; i++)
            {
                configBirdIds.Add(_storedBirdIds[i].ToString());
            }

            currentConfig.FishStr = string.Join(",", configBirdIds);
        }
    }

    protected virtual void SetupPosition()
    {
    }

    private void LateUpdate()
    {
        for (int i = 0; i < birds.Count; i++)
        {
            birds[i].VisualsTransform.rotation = Quaternion.Euler(
            0f,
            0f,
            0f
        );
        }

        ApplyCircleMask();
    }

    /// Cắt phần chim thò ra ngoài hình tròn của bubble bằng shader (tâm/bán kính world theo CircleCollider2D).
    /// Làm mỗi frame vì bubble có thể di chuyển/scale; mỗi bubble tự gửi vòng tròn của mình nên không lẫn nhau.
    // Shuffle: chim bay ra ngoài trứng nên phải tạm tắt mask, không thì bị cắt theo hình tròn.
    private bool _maskSuspended;

    public void SetMaskSuspended(bool suspended)
    {
        _maskSuspended = suspended;
        if (!suspended) return;

        for (int i = 0; i < birds.Count; i++)
        {
            if (birds[i] != null)
            {
                birds[i].ClearCircleMask();
            }
        }
    }

    private void ApplyCircleMask()
    {
        if (!clipBirdsToCircle || _maskSuspended)
        {
            return;
        }

        if (_circle == null)
        {
            _circle = GetComponent<CircleCollider2D>();
            if (_circle == null)
            {
                return;
            }
        }

        Transform circleTransform = _circle.transform;
        Vector3 scale = circleTransform.lossyScale;
        Vector2 center = circleTransform.TransformPoint(_circle.offset);
        float radius = _circle.radius * Mathf.Max(Mathf.Abs(scale.x), Mathf.Abs(scale.y)) * circleMaskRadiusScale;

        for (int i = 0; i < birds.Count; i++)
        {
            if (birds[i] != null)
            {
                birds[i].SetCircleMask(center, radius);
            }
        }
    }
}
