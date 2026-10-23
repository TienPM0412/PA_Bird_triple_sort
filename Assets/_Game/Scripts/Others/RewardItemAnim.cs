
using System;
using System.Collections;
using Sirenix.OdinInspector;
using UnityEngine;
using Random = UnityEngine.Random;

public class RewardItemAnim : MonoBehaviour
{
    [Header("References")]
    public Vector3 startPos;
    public Vector3 targetPos;
    public GameObject itemIconPrefab;

    [Header("Spawn Settings")]
    public int amount = 5;
    public float spawnRadius = 100f;

    [Header("Drift Settings")]
    public float driftDuration = 0.3f;
    public float driftDistance = 30f;

    [Header("Move Settings")]
    public float moveDuration = 0.6f;
    public float moveDelay = 0.05f;
    public float curveHeight = 200f;
    public AnimationCurve moveCurve = AnimationCurve.EaseInOut(0, 0, 1, 1);

    [Header("Flock Arc Settings")]
    [Tooltip("Bat rieng tren coinAnim: bung rong, vong xuong roi bay thanh dan len target.")]
    public bool useFlockArc;
    public float flockBurstWidth = 180f;
    public float flockBurstHeight = 120f;
    public float flockArcDrop = 260f;
    public float flockArcSideBend = 55f;
    public float flockApproachSpread = 70f;
    public float flockMoveDuration = 0.8f;

    [Header("Cluster Mode (sinh ca cum truoc, sau do bay lan luot)")]
    [Tooltip("Thoi gian ca cum bung ra tu diem spawn.")]
    public float clusterBurstDuration = 0.35f;
    [Tooltip("Do tre giua 2 coin khi sinh ra (tao cam giac bung ra tung chut).")]
    public float clusterSpawnStagger = 0.015f;
    [Tooltip("Cum dung yen bao lau sau khi bung xong roi dong dau tien moi bay.")]
    public float clusterHoldTime = 0.15f;
    [Tooltip("Khoang cach thoi gian giua 2 coin bay. Tong thoi gian xuat phat bi gioi han 1.25s.")]
    public float clusterLaunchInterval = 0.06f;
    [Tooltip("Luy thua cua easing: 2 = nhanh dan deu, cang lon cang cham luc dau va lao nhanh o cuoi.")]
    public float clusterAccelPower = 2.2f;

    [Header("Scale Settings")]
    public float startScale = 0f;
    public float midScale = 1.2f;
    public float endScale = 0.5f;


    public event Action<float> OnItemReachTarget;

    private int _activeItems;
    private Action _onAnimationComplete;
    private Vector2[] _flockBurstOffsets;
    private float _moveDurationOverride = -1f;
    private bool _useAcceleratingMove;
    private bool _keepMoveScale;
    private float _burstDistanceMultiplier = 1f;
    private bool _useStraightTakeBackMove;
    private float _takeBackDistance;
    private float _takeBackDuration;
    private bool _keepConstantScale;
    private Vector3? _constantScaleOverride;
    private float _moveEndScaleMultiplier = 1f;
    private float _appearDuration;
    private Action<Transform> _onItemSpawn;
    private bool _spawnExactlyAtStart;
    private bool _waitForRelease;
    private bool _releaseRequested;
    private Action _onAppeared;
    private bool _clusterFirst;

    // Cluster mode dung chung duong bung rong + duong cong Bezier cua flock.
    private bool UseFlockPath => useFlockArc || _clusterFirst;


    private ParticleSystem particleEffect;

    public void PlayAnim(GameObject itemIconPrefab, Vector3 startPosition, Vector3 targetPosition, int amount = 5,
        Action<float> onItemReachTarget = null, ParticleSystem particleEffect = null,
        Action onAnimationComplete = null, float moveDurationOverride = -1f,
        bool useAcceleratingMove = false, bool keepMoveScale = false,
        float burstDistanceMultiplier = 1f, bool useStraightTakeBackMove = false,
        float takeBackDistance = 0f, float takeBackDuration = 0.18f,
        bool keepConstantScale = false, Vector3? constantScaleOverride = null,
        float moveEndScaleMultiplier = 1f, float appearDuration = 0f,
        Action<Transform> onItemSpawn = null, bool spawnExactlyAtStart = false,
        bool waitForRelease = false, Action onAppeared = null, bool clusterFirst = false)
    {
        // Clear all previous items
        while (this.transform.childCount > 0)
        {
            Transform child = this.transform.GetChild(0);
            Destroy(child.gameObject);
        }
        this.itemIconPrefab = itemIconPrefab;
        this.startPos = startPosition;
        this.targetPos = targetPosition;
        this.amount = amount;

        OnItemReachTarget = onItemReachTarget;
        this.particleEffect = particleEffect;
        _onAnimationComplete = onAnimationComplete;
        _moveDurationOverride = moveDurationOverride;
        _useAcceleratingMove = useAcceleratingMove;
        _keepMoveScale = keepMoveScale;
        _burstDistanceMultiplier = Mathf.Max(0f, burstDistanceMultiplier);
        _useStraightTakeBackMove = useStraightTakeBackMove;
        _takeBackDistance = Mathf.Max(0f, takeBackDistance);
        _takeBackDuration = Mathf.Max(0.01f, takeBackDuration);
        _keepConstantScale = keepConstantScale;
        _constantScaleOverride = constantScaleOverride;
        _moveEndScaleMultiplier = Mathf.Max(0f, moveEndScaleMultiplier);
        _appearDuration = Mathf.Max(0f, appearDuration);
        _onItemSpawn = onItemSpawn;
        _spawnExactlyAtStart = spawnExactlyAtStart;
        _waitForRelease = waitForRelease;
        _releaseRequested = !waitForRelease;
        _onAppeared = onAppeared;
        _clusterFirst = clusterFirst;

        StartCoroutine(SpawnAndAnimateItems());
    }

    public void ReleaseWaitingItems()
    {
        _releaseRequested = true;
    }

    public void PlayAnimation()
    {
        StartCoroutine(SpawnAndAnimateItems());
    }

    public void PlayAnimation(int customAmount)
    {
        amount = customAmount;
        StartCoroutine(SpawnAndAnimateItems());
    }

    private IEnumerator SpawnAndAnimateItems()
    {
        _activeItems = amount;
        PrepareFlockBurstOffsets();

        if (_clusterFirst)
        {
            // Sinh ca cum, cho bung xong roi tung coin moi bay (launchTime tinh san cho tung coin).
            float launchInterval = amount > 1
                ? Mathf.Min(clusterLaunchInterval, 1.25f / amount)
                : 0f;
            float firstLaunch = Time.time + clusterSpawnStagger * (amount - 1) +
                clusterBurstDuration + clusterHoldTime;
            for (int i = 0; i < amount; i++)
            {
                SpawnItem(i, firstLaunch + i * launchInterval);
                if (clusterSpawnStagger > 0f)
                    yield return new WaitForSeconds(clusterSpawnStagger);
            }
            yield break;
        }

        float moveDelayAdjust = moveDelay;
        if (amount * moveDelay > 1.25f)
        {
            moveDelayAdjust = 1.25f / amount;
        }
        for (int i = 0; i < amount; i++)
        {
            SpawnItem(i);
            yield return new WaitForSeconds(moveDelayAdjust);
        }
    }

    private void SpawnItem(int itemIndex, float launchTime = -1f)
    {
        // Instantiate item
        Transform parentTransform = this.transform;
        GameObject item = Instantiate(itemIconPrefab, parentTransform);
        item.SetActive(true);
        Transform itemTransform = item.transform;

        // Coin bat dau tai cung diem reward roi moi bung rong ra. Cac item khac
        // van giu kieu spawn random cu.
        if (UseFlockPath || _useStraightTakeBackMove || _spawnExactlyAtStart)
            itemTransform.position = startPos;
        else
        {
            Vector2 randomOffset = Random.insideUnitCircle * spawnRadius;
            itemTransform.position = startPos + new Vector3(randomOffset.x, randomOffset.y, 0);
        }
        Vector3 constantScale = _constantScaleOverride ?? Vector3.one * midScale;
        itemTransform.localScale = _appearDuration > 0f
            ? Vector3.zero
            : _keepConstantScale ? constantScale : Vector3.one * startScale;
        try
        {
            _onItemSpawn?.Invoke(itemTransform);
        }
        catch (Exception exception)
        {
            Debug.LogException(exception);
        }

        // Start animation coroutine
        StartCoroutine(AnimateItem(itemTransform, item, itemIndex, constantScale, launchTime));
    }

    private IEnumerator AnimateItem(Transform itemTransform, GameObject item, int itemIndex, Vector3 constantScale,
        float launchTime = -1f)
    {
        if (_appearDuration > 0f)
        {
            float appearElapsed = 0f;
            Vector3 visibleScale = _keepConstantScale ? constantScale : Vector3.one * midScale;
            while (appearElapsed < _appearDuration)
            {
                appearElapsed += Time.deltaTime;
                float appearT = Mathf.Clamp01(appearElapsed / _appearDuration);
                itemTransform.localScale = Vector3.LerpUnclamped(Vector3.zero, visibleScale,
                    EaseOutBack(appearT));
                yield return null;
            }
            itemTransform.localScale = visibleScale;
        }

        _onAppeared?.Invoke();
        while (_waitForRelease && !_releaseRequested)
            yield return null;

        Vector3 spawnPos = itemTransform.position;

        // Phase 1: Scale up and drift
        Vector3 driftTarget;
        float lane = amount <= 1 ? 0f : Mathf.Lerp(-1f, 1f, itemIndex / (float)(amount - 1));
        if (_useStraightTakeBackMove)
        {
            Vector3 awayFromTarget = spawnPos - targetPos;
            if (awayFromTarget.sqrMagnitude < 0.0001f)
                awayFromTarget = Vector3.down;
            driftTarget = spawnPos + awayFromTarget.normalized * _takeBackDistance;
        }
        else if (UseFlockPath)
        {
            Vector2 burstOffset = _flockBurstOffsets != null && itemIndex < _flockBurstOffsets.Length
                ? _flockBurstOffsets[itemIndex]
                : Random.insideUnitCircle;
            lane = burstOffset.x;
            driftTarget = spawnPos + new Vector3(
                burstOffset.x * flockBurstWidth * _burstDistanceMultiplier,
                burstOffset.y * flockBurstHeight * _burstDistanceMultiplier,
                0f);
        }
        else
        {
            Vector2 driftDirection = Random.insideUnitCircle.normalized;
            driftTarget = spawnPos + new Vector3(driftDirection.x, driftDirection.y, 0) * driftDistance;
        }

        float elapsed = 0f;
        float activeDriftDuration = _useStraightTakeBackMove
            ? _takeBackDuration
            : _clusterFirst ? clusterBurstDuration : driftDuration;
        while (elapsed < activeDriftDuration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / activeDriftDuration;

            // Scale from startScale to midScale
            if (_keepConstantScale)
                itemTransform.localScale = constantScale;
            else
                itemTransform.localScale = Vector3.one * Mathf.Lerp(startScale, midScale, EaseOutBack(t));

            // Drift position
            itemTransform.position = Vector3.Lerp(spawnPos, driftTarget, EaseOutQuad(t));

            yield return null;
        }

        itemTransform.localScale = _keepConstantScale
            ? constantScale
            : Vector3.one * midScale;
        itemTransform.position = driftTarget;

        // Cluster mode: ca cum nam yen o day, den luot cua tung coin moi bay.
        while (Time.time < launchTime)
            yield return null;

        // Phase 2: Move along curve to target
        Vector3 startPosition = itemTransform.position;
        Vector3 endPosition = targetPos;

        Vector3 controlPoint = Vector3.zero;
        Vector3 controlPoint1 = Vector3.zero;
        Vector3 controlPoint2 = Vector3.zero;
        float activeMoveDuration = moveDuration;
        if (UseFlockPath)
        {
            // Control 1 keo coin xuong duoi; control 2 giu dan coin con tach lane
            // mot chut truoc khi tat ca hoi tu vao target.
            float sideSign = Mathf.Approximately(lane, 0f) ? (itemIndex % 2 == 0 ? -1f : 1f) : Mathf.Sign(lane);
            float dropVariation = Random.Range(0.88f, 1.12f);
            float verticalTravel = Mathf.Abs(endPosition.y - startPosition.y);
            float visibleArcDrop = Mathf.Max(flockArcDrop, verticalTravel * 0.32f);
            controlPoint1 = startPosition + new Vector3(
                sideSign * flockArcSideBend,
                -visibleArcDrop * dropVariation,
                0f);
            controlPoint2 = new Vector3(
                Mathf.Lerp(startPosition.x, endPosition.x, 0.68f) +
                lane * flockApproachSpread,
                Mathf.Min(startPosition.y, endPosition.y) - visibleArcDrop * 0.72f,
                Mathf.Lerp(startPosition.z, endPosition.z, 0.68f));
            activeMoveDuration = Mathf.Max(0.05f, flockMoveDuration);
        }
        else
        {
            Vector3 midPoint = (startPosition + endPosition) / 2f;
            Vector3 perpendicular = Vector3.Cross((endPosition - startPosition).normalized, Vector3.forward);
            controlPoint = midPoint + perpendicular * curveHeight;
        }

        if (_moveDurationOverride > 0f)
            activeMoveDuration = _moveDurationOverride;

        elapsed = 0f;
        while (elapsed < activeMoveDuration)
        {
            elapsed += Time.deltaTime;
            float normalizedTime = Mathf.Clamp01(elapsed / activeMoveDuration);
            // Home reward: khoi dau cham, sau do tang toc dan va lao vao target.
            // Cac luong khac van dung moveCurve da setup tren prefab.
            float t = _clusterFirst
                ? Mathf.Pow(normalizedTime, Mathf.Max(1f, clusterAccelPower))
                : _useAcceleratingMove
                    ? normalizedTime * normalizedTime
                    : moveCurve.Evaluate(normalizedTime);

            itemTransform.position = _useStraightTakeBackMove
                ? Vector3.LerpUnclamped(startPosition, endPosition, t)
                : UseFlockPath
                    ? CubicBezier(startPosition, controlPoint1, controlPoint2, endPosition, t)
                    : QuadraticBezier(startPosition, controlPoint, endPosition, t);

            // Scale from midScale to endScale
            if (_keepConstantScale)
                itemTransform.localScale = Vector3.Lerp(constantScale,
                    constantScale * _moveEndScaleMultiplier, normalizedTime);
            else
                itemTransform.localScale = Vector3.one * (_keepMoveScale
                    ? midScale
                    : Mathf.Lerp(midScale, endScale, t));

            yield return null;
        }

        itemTransform.position = endPosition;
        itemTransform.localScale = _keepConstantScale
            ? constantScale * _moveEndScaleMultiplier
            : Vector3.one * (_keepMoveScale ? midScale : endScale);

        // Item reached target


        // Destroy item
        Destroy(item);
        // PLay Particle Effect Here

        // Check if all items completed
        _activeItems--;
        particleEffect?.Play();
        try
        {
            OnItemReachTarget?.Invoke(_activeItems / (float)amount);
        }
        catch (Exception exception)
        {
            // Mot hieu ung UI target bi thieu reference khong duoc phep lam dung
            // sequence va chan callback chuyen man.
            Debug.LogException(exception);
        }

        if (_activeItems <= 0)
        {
            Action complete = _onAnimationComplete;
            _onAnimationComplete = null;
            complete?.Invoke();
        }

    }

    private Vector3 QuadraticBezier(Vector3 p0, Vector3 p1, Vector3 p2, float t)
    {
        float u = 1 - t;
        return u * u * p0 + 2 * u * t * p1 + t * t * p2;
    }

    private Vector3 CubicBezier(Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3, float t)
    {
        float u = 1f - t;
        return u * u * u * p0 +
               3f * u * u * t * p1 +
               3f * u * t * t * p2 +
               t * t * t * p3;
    }

    private void PrepareFlockBurstOffsets()
    {
        if (!UseFlockPath || amount <= 0)
        {
            _flockBurstOffsets = null;
            return;
        }

        _flockBurstOffsets = new Vector2[amount];
        Vector2 center = Vector2.zero;
        for (int i = 0; i < amount; i++)
        {
            float angle = Random.Range(0f, Mathf.PI * 2f);
            float radius = Mathf.Sqrt(Random.Range(0.12f, 1f));
            Vector2 offset = new Vector2(Mathf.Cos(angle), Mathf.Sin(angle)) * radius;
            _flockBurstOffsets[i] = offset;
            center += offset;
        }

        // Dua tam ngau nhien cua ca dan ve 0 de van rai quanh diem spawn,
        // nhung tung coin khong nam tren cac goc chia deu nhu hinh tron.
        center /= amount;
        for (int i = 0; i < amount; i++)
        {
            Vector2 offset = _flockBurstOffsets[i] - center;
            if (offset.sqrMagnitude > 1f)
                offset.Normalize();
            _flockBurstOffsets[i] = offset;
        }
    }

    private float EaseOutBack(float t)
    {
        const float c1 = 1.70158f;
        const float c3 = c1 + 1;
        return 1 + c3 * Mathf.Pow(t - 1, 3) + c1 * Mathf.Pow(t - 1, 2);
    }

    private float EaseOutQuad(float t)
    {
        return 1 - (1 - t) * (1 - t);
    }

    private float EaseInQuad(float t)
    {
        return t * t;
    }

#if UNITY_EDITOR
    [Button]
    private void TestAnimation()
    {
        if (Application.isPlaying)
        {
            PlayAnimation();
        }
    }
#endif
}
