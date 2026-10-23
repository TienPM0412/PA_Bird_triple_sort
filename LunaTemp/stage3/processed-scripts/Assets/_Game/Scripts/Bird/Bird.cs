using System;
using DG.Tweening;
using Lean.Pool;
using Spine.Unity;
using UnityEngine;
using System.Collections.Generic;
using Random = UnityEngine.Random;

public class Bird : MonoBehaviour, IClickable, ISlotable, IPoolable
{
    private static readonly string[] IdleAnimations = { "Idle", "Idle2", "Idle3" };
    private const string FlyAnimation = "Fly";
    private const string LandAnimation = "Landing";
    private const string IdleToSleepAnimation = "Idle_to_sleep";
    private const string SleepAnimation = "Sleep";
    private const string LandContactEvent = "land_contact";

    [SerializeField] private SkeletonAnimation _skeletalAnimation;
    [SerializeField] private BirdData _birdData;
    [SerializeField, Min(0f)] private float _moveDuration = 0.2f;
    [SerializeField, Min(0.01f)] private float _slotScale = 0.75f;
    [SerializeField, Min(0.01f)] private float _flightSpeed = 15f;
    [SerializeField, Min(0f)] private float _flightJumpPower = 0.55f;
    [SerializeField, Min(0f)] private float _flightJumpPowerPerUnit = 0.08f;
    [SerializeField] private bool _sourceFacesRight;
    [SerializeField, Min(0f)] private float _flightFacingDeadZone = 0.35f;
    [SerializeField, Min(0f)] private float _landContactFallbackDelay = 0.4f;

    private static readonly int CircleMaskCenterId = Shader.PropertyToID("_CircleMaskCenter");
    private static readonly int CircleMaskRadiusId = Shader.PropertyToID("_CircleMaskRadius");

    [SerializeField] private Collider2D _collider;
    [SerializeField] private MeshRenderer _skeletalRenderer;
    [Tooltip("Chim idle/ngủ update Spine tối đa bằng số fps này (anim vẫn chạy đúng tốc độ). Đặt >= fps của game để tắt throttle.")]
    [SerializeField, Range(10f, 120f)] private float _idleUpdateFps = 40f;
    [Tooltip("Chim còn nằm trong bubble chỉ dựng Spine ở các frame đầu rồi đứng yên tư thế đó; rời bubble mới chạy animation lại. Giảm mạnh chi phí Spine (nhất là trên Playworks).")]
    [SerializeField] private bool _freezeSpineInBubble = true;
    private const int FullRateWarmupFrames = 2;
    private float _tickTimer;
    private int _fullRateFramesLeft;
    private float _pendingDelta;
    private MaterialPropertyBlock _maskBlock;
    private bool _maskApplied;
    private readonly List<Renderer> _extraMaskRenderers = new List<Renderer>();
    private Vector2 _lastMaskCenter;
    private float _lastMaskRadius;
    private BubbleBase _ownerBubble;
    private readonly List<ObstacleBase> _obstacles = new List<ObstacleBase>();
    private static readonly List<ObstacleType> s_obstacleTypes = new List<ObstacleType>();
    private static readonly List<Bird> s_linkedBirds = new List<Bird>();
    private BirdParts _parts;
    private Spine.AnimationState _animationState;
    private BirdState _birdState = BirdState.Idle;
    private bool _isIdleAnimationPlaying;
    private bool _flightMovementStarted;
    private bool _landingStarted;
    private bool _landingFinished;
    private bool _landAnimationPlaying;
    private bool _flipDuringFlight;
    private float _defaultSkeletonScaleX = 1f;
    private Vector3 _moveTargetPosition;
    private Transform _moveTargetParent;
    private Action _moveOnFinish;
    private Tween _landFallbackTween;

    public Transform Content;

    //public TrailRenderer trailRenderer;
    public ParticleSystem[] trailParticles;

    public bool IsLanding => _landAnimationPlaying;
    public int SortingOrder => _skeletalRenderer != null ? _skeletalRenderer.sortingOrder : 0;
    public int FishIndex { get; private set; } = -1;
    public BirdData BirdData => _birdData;
    public BirdState BirdState
    {
        get => _birdState;
        set
        {
            bool enteredIdle = _birdState != BirdState.Idle && value == BirdState.Idle;
            _birdState = value;

            if (enteredIdle)
            {
                PlayRandomIdleAnimation();
            }
            else if (value != BirdState.Idle)
            {
                _isIdleAnimationPlaying = false;
            }
        }
    }
    public void SetSortingOrder(int order)
    {
        if (_skeletalRenderer != null)
        {
            _skeletalRenderer.sortingOrder = order;
        }
    }

    public int UniqueElementID { get; set; }
    public Transform Transform { get; set; }
    public Transform VisualsTransform => transform;
    private static Color WithAlpha(Color color, float alpha)
    {
        color.a = alpha;
        return color;
    }

    private void SetTrailColor([Bridge.Ref] Color color)
    {
        for (int i = 0; i < trailParticles.Length; i++)
        {
            var main = trailParticles[i].main;
            main.startColor = WithAlpha(color, main.startColor.color.a);
        }
    }
    public void Init(
        BirdData birdData,
        BubbleBase ownerBubble = null,
        int sourceBirdId = -1,
        int sortingOrder = 7)
    {
        SetTrailColor(GameData.Ins.GetColorByBirdType(birdData.birdType));
        trailParticles[0].gameObject.SetActive(false);
        ResetMovementAnimation();
        transform.DOKill();
        _birdData = birdData;
        _ownerBubble = ownerBubble;
        _birdState = BirdState.Idle;
        _isIdleAnimationPlaying = false;
        UniqueElementID = sourceBirdId >= 0
            ? sourceBirdId
            : birdData != null ? birdData.birdId : -1;
        Transform = transform;

        transform.localScale = Vector3.one;
        transform.localRotation = Quaternion.identity;

        if (_skeletalAnimation != null)
        {
            UnsubscribeFromAnimationState();
            _skeletalAnimation.ClearState();
            _skeletalAnimation.skeletonDataAsset = birdData != null
                ? birdData.skeletonDataAsset
                : null;
            _skeletalAnimation.Initialize(true);

            if (_skeletalAnimation.Skeleton != null)
            {
                _defaultSkeletonScaleX = _skeletalAnimation.Skeleton.ScaleX;
            }

            if (_skeletalRenderer != null)
            {
                _skeletalRenderer.sortingOrder = sortingOrder;
            }

            // Chim lấy từ pool có thể còn mask của bubble cũ; BubbleBase sẽ set lại mask đúng.
            ClearCircleMask();

            // Tắt component để Spine không tự Update/LateUpdate; Bird.LateUpdate sẽ gọi thủ công (xem LateUpdate).
            _skeletalAnimation.enabled = false;
            _skeletalAnimation.timeScale = 1f;
            _tickTimer = UnityEngine.Random.value / Mathf.Max(1f, _idleUpdateFps); // lệch pha giữa các chim
            _fullRateFramesLeft = FullRateWarmupFrames;
            _pendingDelta = 0f;

            _animationState = _skeletalAnimation.AnimationState;
            if (_animationState != null)
            {
                _animationState.Complete += OnAnimationComplete;
                _animationState.Event += OnAnimationEvent;
            }
        }

        PlayRandomIdleAnimation();

        SetInteraction(true);
        Content.localScale = Vector3.one * Random.Range(0.95f, 1.05f);
    }

    // Đang bay/hạ cánh thì phải update mỗi frame (di chuyển + event land_contact cần chính xác).
    private bool NeedsFullRateAnimation =>
        _landAnimationPlaying || ((_flightMovementStarted || _landingStarted) && !_landingFinished);

    /// Bird tự điều khiển Spine (SkeletonAnimation luôn bị tắt nên không tự Update/LateUpdate).
    /// Chim idle/ngủ chỉ chạy animation + dựng mesh 1 trong N frame, mesh cũ vẫn được vẽ ở các frame còn lại.
    /// Thời gian của các frame bỏ qua được dồn lại và đưa vào lần Update kế tiếp nên tốc độ animation không đổi.
    private void LateUpdate()
    {
        if (_skeletalAnimation == null)
        {
            return;
        }

        _pendingDelta += Time.deltaTime;

        bool fullRate = _fullRateFramesLeft > 0 || NeedsFullRateAnimation;
        if (_fullRateFramesLeft > 0)
        {
            _fullRateFramesLeft--;
        }

        // Chim trong bubble: mesh đã được dựng ở các frame warmup ngay sau Init, giữ nguyên tư thế đó.
        // Bỏ luôn thời gian dồn lại để khi rời bubble animation không bị nhảy cóc.
        if (!fullRate && _freezeSpineInBubble && _ownerBubble != null)
        {
            _pendingDelta = 0f;
            return;
        }

        if (!fullRate)
        {
            // Giới hạn theo thời gian (không phải số frame) nên chọn được fps không chia hết fps của game, vd 40/60.
            float interval = 1f / Mathf.Max(1f, _idleUpdateFps);
            _tickTimer += Time.deltaTime;
            if (_tickTimer < interval - 0.001f)
            {
                return;
            }

            _tickTimer = Mathf.Clamp(_tickTimer - interval, 0f, interval);
        }

        float delta = _pendingDelta;
        _pendingDelta = 0f;
        _skeletalAnimation.Update(delta);   // animation + event (Complete, land_contact...)
        _skeletalAnimation.LateUpdate();    // dựng mesh
    }

    /// Cắt chim theo hình tròn world (do BubbleBase gọi mỗi frame). radius <= 0 là tắt mask.
    public void SetCircleMask([Bridge.Ref] Vector2 worldCenter, float worldRadius)
    {
        if (_skeletalRenderer == null ||
            (_maskApplied && worldRadius == _lastMaskRadius && worldCenter == _lastMaskCenter))
        {
            return;
        }

        _maskApplied = true;
        _lastMaskCenter = worldCenter;
        _lastMaskRadius = worldRadius;

        if (_maskBlock == null) _maskBlock = new MaterialPropertyBlock();
        ApplyMaskTo(_skeletalRenderer);
        for (int i = 0; i < _extraMaskRenderers.Count; i++)
        {
            ApplyMaskTo(_extraMaskRenderers[i]);
        }
    }

    private void ApplyMaskTo(Renderer target)
    {
        if (target == null) return;

        target.GetPropertyBlock(_maskBlock);
        _maskBlock.SetVector(CircleMaskCenterId, new Vector4(_lastMaskCenter.x, _lastMaskCenter.y, 0f, 0f));
        _maskBlock.SetFloat(CircleMaskRadiusId, _lastMaskRadius);
        target.SetPropertyBlock(_maskBlock);
    }

    /// Renderer phụ (băng của Ice Bird...) cũng bị cắt theo mask của bubble. Material phải dùng shader có _CircleMask*
    /// (vd BirdSort/Sprite World Circle Mask), nếu không thì không có tác dụng.
    public void AddMaskRenderer(Renderer target)
    {
        if (target == null || _extraMaskRenderers.Contains(target)) return;

        _extraMaskRenderers.Add(target);
        if (_maskApplied)
        {
            if (_maskBlock == null) _maskBlock = new MaterialPropertyBlock();
            ApplyMaskTo(target);
        }
    }

    public void RemoveMaskRenderer(Renderer target)
    {
        if (target == null || !_extraMaskRenderers.Remove(target)) return;

        if (_maskBlock == null) _maskBlock = new MaterialPropertyBlock();
        float radius = _lastMaskRadius;
        _lastMaskRadius = 0f;
        ApplyMaskTo(target);   // trả renderer về không bị cắt (object này sẽ vào pool)
        _lastMaskRadius = radius;
    }

    public void ClearCircleMask()
    {
        SetCircleMask(Vector2.zero, 0f);
    }

    public void OnClick()
    {
        if (_birdData == null || BirdState != BirdState.Idle)
        {
            return;
        }

        // Obstacle của TRỨNG (Frozen, Locked, Hidden Egg...)
        if (_ownerBubble != null && _ownerBubble.TryGetBlockingObstacle(out ObstacleBase bubbleObstacle))
        {
            ShowBlocked(bubbleObstacle);
            return;
        }

        // Obstacle của CHIM (Ice Bird... sau này). Hidden Bird không chặn
        if (TryGetBlockingObstacle(out ObstacleBase birdObstacle))
        {
            ShowBlocked(birdObstacle);
            return;
        }

        s_linkedBirds.Clear();
        for (int i = 0; i < _obstacles.Count; i++)
        {
            _obstacles[i].CollectLinkedBirds(s_linkedBirds);
        }

        for (int i = 0; i < s_linkedBirds.Count; i++)
        {
            Bird linked = s_linkedBirds[i];
            if (linked == null || linked.BirdState != BirdState.Idle) return;

            // Con đi kèm bị chặn -> cả nhóm không bay
            if (linked.TryGetBlockingObstacle(out ObstacleBase linkedObstacle))
            {
                ShowBlocked(linkedObstacle);
                return;
            }
        }

        EventManager.Trigger(new OnBirdClickEvent
        {
            bird = this,
            canSubmit = true,
            linkedBirds = s_linkedBirds.Count > 0 ? s_linkedBirds.ToArray() : null
        });
    }

    private static void ShowBlocked(ObstacleBase obstacle)
    {
        obstacle.PlayBlockedFeedback();

        if (!string.IsNullOrEmpty(obstacle.BlockedMessage))
        {
            EventManager.Trigger(new OnShowMessage { message = obstacle.BlockedMessage });
        }
    }

    public void OnExit()
    {
    }

    public void OnHover()
    {
    }

    public void Clear()
    {
        ResetMovementAnimation();
        transform.DOKill();
        _birdState = BirdState.Idle;
        _isIdleAnimationPlaying = false;
        SetInteraction(false);
        LeanPool.Despawn(gameObject);
    }

    public void SubmitMove(Transform position, Action onFinish = null)
    {
        if (position == null)
        {
            BirdState = BirdState.Idle;
            onFinish?.Invoke();
            return;
        }

        MoveTo(position.position, position, onFinish);
    }

    public void SubmitMove([Bridge.Ref] Vector3 position, Action onFinish = null)
    {
        MoveTo(position, null, onFinish);
    }

    public bool IsSameType(ISlotable other)
    {
        return other is Bird otherBird &&
               _birdData != null &&
               otherBird.BirdData != null &&
               UniqueElementID == otherBird.UniqueElementID;
    }

    public void MatchAnimation(float delay)
    {
        transform.DOKill();
        transform.DOScale(0f, 0.2f)
            .SetDelay(Mathf.Max(0f, delay))
            .SetEase(Ease.InBack);
    }

    public void SetInteraction(bool enabled)
    {
        if (_collider == null)
        {
            _collider = GetComponent<Collider2D>();
        }

        if (_collider != null)
        {
            _collider.enabled = enabled;
        }
    }

    private void MoveTo([Bridge.Ref] Vector3 targetPosition, Transform targetParent, Action onFinish)
    {
        SpawnVFX(_birdData.birdType);
        trailParticles[0].gameObject.SetActive(true);
        ResetMovementAnimation();
        transform.DOKill();
        DetachFromBubble();
        SetInteraction(false);
        BirdState = BirdState.Flying;
        SoundManager.Ins.PlaySFX(SoundFX.Bird_Fly, 0.4f);

        _moveTargetPosition = targetPosition;
        _moveTargetParent = targetParent;
        _moveOnFinish = onFinish;
        PrepareFlightFacing(targetPosition);

        if (_skeletalRenderer != null)
        {
            _skeletalRenderer.sortingOrder = 100;
        }

        BeginFlying();
    }

    private void BeginFlying()
    {
        ApplyFlightFacing();
        PlayAnimation(FlyAnimation, true);
        BeginFlightMovement();
    }

    private void BeginFlightMovement()
    {
        if (_flightMovementStarted || !isActiveAndEnabled)
        {
            return;
        }

        _flightMovementStarted = true;

        Vector3 startPosition = transform.position;
        Vector3 endPosition = _moveTargetPosition;
        float distance = Vector2.Distance(startPosition, endPosition);
        float flightDuration = Mathf.Max(_moveDuration, distance / Mathf.Max(0.01f, _flightSpeed));
        float jumpPower = _flightJumpPower + distance * _flightJumpPowerPerUnit;

        Sequence sequence = transform
            .DOJump(endPosition, jumpPower, 1, flightDuration)
            .SetEase(Ease.InOutSine);
        sequence.Join(transform.DOScale(Vector3.one * _slotScale, flightDuration).SetEase(Ease.InOutSine));
        sequence.OnComplete(OnFlightMovementComplete);
    }

    private void OnFlightMovementComplete()
    {
        // Tới đích là hạ cánh ngay, không chờ Fly chạy hết vòng.
        BeginLanding();
    }

    private void BeginLanding()
    {
        if (_landingStarted)
        {
            return;
        }

        _landingStarted = true;
        RestoreDefaultFacing();

        if (PlayAnimation(LandAnimation, false))
        {
            _landAnimationPlaying = true;
            if (_skeletalRenderer != null)
            {
                _skeletalRenderer.sortingOrder = 21;
            }

            _landFallbackTween = DOVirtual
                .DelayedCall(_landContactFallbackDelay, FinishLanding)
                .SetTarget(transform);
        }
        else
        {
            FinishLanding();
            PlaySleepAnimation();
        }
    }

    private void FinishLanding()
    {
        if (_landingFinished)
        {
            return;
        }

        _landingFinished = true;
        _landFallbackTween?.Kill();
        _landFallbackTween = null;
        trailParticles[0].gameObject.SetActive(false);

        if (_moveTargetParent != null)
        {
            transform.SetParent(_moveTargetParent, true);
            transform.position = _moveTargetParent.position;
        }

        Action onFinish = _moveOnFinish;
        _moveOnFinish = null;
        onFinish?.Invoke();
    }

    private void DetachFromBubble()
    {
        // Rời bubble thì phải bỏ mask, nếu không chim bị cắt giữa đường bay.
        ClearCircleMask();
        NotifyObstaclesLeaving();
        if (_ownerBubble == null)
        {
            transform.SetParent(null, true);
            return;
        }

        BubbleBase owner = _ownerBubble;
        _ownerBubble = null;
        transform.SetParent(null, true);
        owner.ReleaseBird(this);
    }

    private void PlayRandomIdleAnimation(bool ignoreBirdState = false)
    {
        if ((!ignoreBirdState && _birdState != BirdState.Idle) ||
            !isActiveAndEnabled ||
            _skeletalAnimation == null ||
            _animationState == null)
        {
            return;
        }

        _isIdleAnimationPlaying = true;
        // 80% Idle, 10% Idle2, 10% Idle3
        int roll = UnityEngine.Random.Range(0, 100);
        string animationName = roll < 80 ? IdleAnimations[0] : roll < 90 ? IdleAnimations[1] : IdleAnimations[2];

        PlayAnimation(animationName, false);
    }

    // Chim đã hạ cánh vào slot -> Idle_to_sleep rồi Sleep (loop). Thiếu anim thì lùi dần về Sleep / idle
    private void PlaySleepAnimation()
    {
        _isIdleAnimationPlaying = false;
        if (PlayAnimation(IdleToSleepAnimation, false))
        {
            return;
        }

        PlayLoopSleepAnimation();
    }

    private void PlayLoopSleepAnimation(bool keepPose = false)
    {
        if (!PlayAnimation(SleepAnimation, true, resetPose: !keepPose))
        {
            PlayRandomIdleAnimation(true);
        }
    }

    private void OnAnimationComplete(Spine.TrackEntry trackEntry)
    {
        if (trackEntry.TrackIndex != 0)
        {
            return;
        }

        string animationName = trackEntry.Animation.Name;
        if (_isIdleAnimationPlaying && Array.IndexOf(IdleAnimations, animationName) >= 0)
        {
            PlayRandomIdleAnimation();
            return;
        }

        if (animationName == LandAnimation)
        {
            _landAnimationPlaying = false;
            FinishLanding();
            PlaySleepAnimation();
        }
        else if (animationName == IdleToSleepAnimation)
        {
            // Sleep chỉ key vài slot (Z, Z2), mắt/mỏ do Idle_to_sleep set. Reset setup pose ở đây
            // làm mắt mở lại 1 nhịp -> nhìn như chớp mắt, nên giữ nguyên pose cuối của Idle_to_sleep.
            PlayLoopSleepAnimation(keepPose: true);
        }
    }

    private void OnAnimationEvent(Spine.TrackEntry trackEntry, Spine.Event spineEvent)
    {
        if (trackEntry.TrackIndex != 0)
        {
            return;
        }

        if (spineEvent.Data.Name == LandContactEvent)
        {
            FinishLanding();
        }
    }

    private bool PlayAnimation(string animationName, bool loop, bool resetPose = true)
    {
        if (_skeletalAnimation == null ||
            _animationState == null ||
            _skeletalAnimation.skeletonDataAsset == null ||
            _skeletalAnimation.skeletonDataAsset.GetSkeletonData(false)?.FindAnimation(animationName) == null)
        {
            return false;
        }

        // Anim mới phải hiện ngay, không chờ tới frame được phép update.
        _fullRateFramesLeft = FullRateWarmupFrames;
        _pendingDelta = 0f; // thời gian dồn từ anim cũ không được tính cho anim mới

        // Ultils.PlayAnimation chỉ ClearTracks, pose cũ vẫn còn trên skeleton. Anim mới không key hết
        // bone/slot/attachment nên phần không được key giữ lại pose của anim trước -> nhìn như bị mix.
        if (resetPose)
        {
            _skeletalAnimation.Skeleton.SetToSetupPose();
        }

        Ultils.PlayAnimation(_skeletalAnimation, animationName, loop: loop);
        return true;
    }

    private void PrepareFlightFacing([Bridge.Ref] Vector3 targetPosition)
    {
        float horizontalDirection = targetPosition.x - transform.position.x;
        if (Mathf.Abs(horizontalDirection) <= _flightFacingDeadZone)
        {
            _flipDuringFlight = false;
            return;
        }

        bool currentlyFacesRight = _sourceFacesRight ^ (_defaultSkeletonScaleX < 0f);
        bool targetIsToTheRight = horizontalDirection > 0f;
        _flipDuringFlight = currentlyFacesRight != targetIsToTheRight;
    }

    private void ApplyFlightFacing()
    {
        if (_skeletalAnimation == null || _skeletalAnimation.skeleton == null)
        {
            return;
        }

        _skeletalAnimation.skeleton.ScaleX = _flipDuringFlight
            ? -_defaultSkeletonScaleX
            : _defaultSkeletonScaleX;
    }

    private void RestoreDefaultFacing()
    {
        if (_skeletalAnimation != null && _skeletalAnimation.skeleton != null)
        {
            _skeletalAnimation.skeleton.ScaleX = _defaultSkeletonScaleX;
        }

        _flipDuringFlight = false;
    }

    private void ResetMovementAnimation()
    {
        RestoreDefaultFacing();
        _landFallbackTween?.Kill();
        _landFallbackTween = null;
        _flightMovementStarted = false;
        _landingStarted = false;
        _landingFinished = false;
        _landAnimationPlaying = false;
        _moveTargetParent = null;
        _moveOnFinish = null;
    }

    private void UnsubscribeFromAnimationState()
    {
        if (_animationState != null)
        {
            _animationState.Complete -= OnAnimationComplete;
            _animationState.Event -= OnAnimationEvent;
            _animationState = null;
        }
    }

    private void OnDisable()
    {
        ResetMovementAnimation();
        transform.DOKill();
        _isIdleAnimationPlaying = false;
        UnsubscribeFromAnimationState();
        _ownerBubble = null;
    }

    public void SetupObstacles(BubbleConfig config, int fishIndex)
    {
        ClearObstacles();
        FishIndex = fishIndex;
        ObstacleDataHelper.GetBirdObstacles(config, fishIndex, s_obstacleTypes);

        for (int i = 0; i < s_obstacleTypes.Count; i++)
        {
            ObstacleType type = s_obstacleTypes[i];
            ObstacleBase prefab = LevelManager.Ins.GetObstaclePrefab(type);
            if (prefab == null)
            {
                Debug.LogWarning($"[Bird] Chưa có prefab cho obstacle {type} trong ObstacleConfigSO", this);
                continue;
            }

            ObstacleBase obstacle = LeanPool.Spawn(prefab, transform);
            obstacle.transform.localPosition = Vector3.zero;
            obstacle.InitOnBird(this, _ownerBubble, config);
            _obstacles.Add(obstacle);
        }
    }

    public void RemoveObstacle(ObstacleBase obstacle)
    {
        if (obstacle == null || !_obstacles.Remove(obstacle)) return;

        obstacle.Release();
        LeanPool.Despawn(obstacle.gameObject);
    }

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

    public bool TryGetObstacle<T>(out T result) where T : ObstacleBase
    {
        for (int i = 0; i < _obstacles.Count; i++)
        {
            if (_obstacles[i] is T typed && typed.IsActive)
            {
                result = typed;
                return true;
            }
        }

        result = null;
        return false;
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

    public bool HasActiveObstacle()
    {
        for (int i = 0; i < _obstacles.Count; i++)
        {
            if (_obstacles[i].IsActive)
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

    private void NotifyObstaclesLeaving()
    {
        // Duyệt ngược: obstacle có thể tự gỡ khỏi danh sách ngay trong lúc được báo
        for (int i = _obstacles.Count - 1; i >= 0; i--)
        {
            if (i < _obstacles.Count) _obstacles[i].OnOwnerBirdLeaving();
        }
    }

    public Transform GetPart(BirdPart key)
    {
        if (_parts == null) _parts = GetComponent<BirdParts>();
        return _parts != null ? _parts.Get(key) : null;
    }

    /// Ẩn/hiện hình chim (tắt MeshRenderer của Spine, animation vẫn chạy)
    public void SetVisualHidden(bool hidden)
    {
        if (_skeletalRenderer != null) _skeletalRenderer.enabled = !hidden;
    }

    // LeanPool gọi TRƯỚC khi tắt object -> được phép bật/tắt object con
    public void OnSpawn() { }
    public void OnDespawn()
    {
        ClearObstacles();
        FishIndex = -1;
    }

    private void SpawnVFX(BirdType birdType)
    {
        ParticleEffectType effectType = ParticleEffectType.LongChim_Blue;
        switch (birdType)
        {
            case BirdType.Blue:
                effectType = ParticleEffectType.LongChim_Blue;
                break;
            case BirdType.Orange:
                effectType = ParticleEffectType.LongChim_Orange;
                break;
            case BirdType.Cyan:
                effectType = ParticleEffectType.LongChim_Cyan;
                break;
            case BirdType.Green:
                effectType = ParticleEffectType.LongChim_Green;
                break;
            case BirdType.Pink:
                effectType = ParticleEffectType.LongChim_Pink;
                break;
            case BirdType.Purple:
                effectType = ParticleEffectType.LongChim_Purple;
                break;
            case BirdType.Red:
                effectType = ParticleEffectType.LongChim_Red;
                break;
            case BirdType.Yellow:
                effectType = ParticleEffectType.LongChim_Yellow;
                break;
        }

        ParticlesManager.Ins.PlayEffect(effectType, transform.position);
    }
}
