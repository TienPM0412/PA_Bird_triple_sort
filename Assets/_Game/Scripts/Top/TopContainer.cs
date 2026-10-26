using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Lean.Pool;
using Sirenix.OdinInspector;
using TMPro;
using UnityEngine;

public class TopContainer : Singleton<TopContainer>
{
    [SerializeField] private DockContainer dockContainer;
    [SerializeField] private SlotContainer slotContainer;
    [SerializeField] private TextMeshPro _countComplateText;
    [SerializeField] private OutsideBirdHolder outsideBirdHolder;

    [Header("Camera Fit")]
    [SerializeField] private Camera fitCamera;
    [SerializeField] private Vector2 referenceResolution = new Vector2(1080f, 1920f);
    [SerializeField, Min(0.01f)] private float referenceOrthographicSize = 11.4f;
    [SerializeField, Range(0.1f, 1f)] private float cameraFitPadding = 1f;
    [SerializeField] private bool allowCameraFitUpscale;

    public DockContainer DockContainer => dockContainer;
    public SlotContainer SlotContainer => slotContainer;
    public TextMeshPro CompletedCountText => _countComplateText;

    [ShowInInspector] public int animatingCount;
    private readonly Queue<ISlotable> queue = new Queue<ISlotable>();
    private readonly List<Bird> birdsMovingOutside = new List<Bird>();
    private readonly List<Bird> birdsMovingByMagnet = new List<Bird>();

    private static readonly List<ISlotable> s_group = new List<ISlotable>();

    private readonly HashSet<int> matchedBirdIds = new HashSet<int>();

    public bool HasMatchedBird(int birdId) => matchedBirdIds.Contains(birdId);
    public bool HasEnded => hasEnded;

    private int dockedBirdCount;
    public int DockedBirdCount => dockedBirdCount;

    private Coroutine checkCoroutine;
    private Coroutine winCoroutine;
    private const float MaxWaitLastDockMatch = 3f;


    private bool isProcessing;
    private bool hasEnded;
    private bool isMovingBirdsOutside;
    private bool isClearCharging;
    public void SetClearCharging(bool value) => isClearCharging = value;
    private bool isMovingBirdsByMagnet;
    private int magnetMoveVersion;
    private Action magnetOnComplete;
    private MagnetNestFx magnetNestFx;
    private Vector3 cameraFitBaseScale;
    private Camera lastFitCamera;
    private int lastFitPixelWidth = -1;
    private int lastFitPixelHeight = -1;
    private float lastFitProjection = float.NaN;
    private Vector2 lastFitReferenceResolution;
    private float lastFitReferenceOrthographicSize = float.NaN;
    private float lastCameraFitPadding = float.NaN;
    private bool lastAllowCameraFitUpscale;

    //private bool isAnim = false;

    [Tooltip("Kept attached to the top edge of the screen when the camera fit rescales this container.")]
    public Transform top;
    private float topOffsetFromScreenTop;
    private bool hasTopOffset;


    private void Awake()
    {
        cameraFitBaseScale = transform.localScale;
    }

    private void Start()
    {
        FitCamera();

        // LevelManager owns order generation. Only prepare an empty top area
        // here when no level has been loaded yet, avoiding consuming orders
        // twice when LoadLevel runs before this Start method.
        if (LevelManager.Ins.CurrentLevelData == null)
        {
            ResetTop();
        }
    }

    private void OnEnable()
    {
        // EventManager.AddListener<UndoTileEvent>(OnUndoTileEventCallback);
        EventManager.AddListener<OnBirdClickEvent>(OnBirdClickEventCallBack);
        if (dockContainer != null) dockContainer.DockMatched += OnDockMatched;
        // EventManager.AddListener<OnDockCreatedEvent>(OnDockCreatedEventCallback);
        // EventManager.AddListener<ExtraTileEvent>(OnExtraTileEventCallBack);
    }

    private void OnDisable()
    {
        // EventManager.RemoveListener<UndoTileEvent>(OnUndoTileEventCallback);
        EventManager.RemoveListener<OnBirdClickEvent>(OnBirdClickEventCallBack);
        if (dockContainer != null) dockContainer.DockMatched -= OnDockMatched;
        // EventManager.RemoveListener<OnDockCreatedEvent>(OnDockCreatedEventCallback);
        // EventManager.RemoveListener<ExtraTileEvent>(OnExtraTileEventCallBack);
    }

    private void OnUndoTileEventCallback(/*UndoTileEvent obj*/)
    {
        // slotContainer.RemoveTile(obj.tile);
        // dockContainer.RemoveTile(obj.tile);
    }

    public void ResetTop()
    {
        queue.Clear();
        CancelMagnetMove();
        ClearBirdsMovingOutside();
        matchedBirdIds.Clear();
        isProcessing = false;
        hasEnded = false;
        isMovingBirdsOutside = false;
        if (winCoroutine != null)
        {
            StopCoroutine(winCoroutine);
            winCoroutine = null;
        }
        if (checkCoroutine != null)
        {
            StopCoroutine(checkCoroutine);
            checkCoroutine = null;
        }

        if (dockContainer != null) dockContainer.ResetDock();
        if (slotContainer != null) slotContainer.ResetSlot();
        animatingCount = 0;
        dockedBirdCount = 0;
        outsideBirdHolder.ResetHolder();
        UpdateCompletedBirdText();
    }

    public void Initialize()
    {
        queue.Clear();
        CancelMagnetMove();
        ClearBirdsMovingOutside();
        isProcessing = false;
        hasEnded = false;
        isMovingBirdsOutside = false;
        animatingCount = 0;
        dockedBirdCount = 0;
        outsideBirdHolder.ResetHolder();
        UpdateCompletedBirdText();
        matchedBirdIds.Clear();
        if (winCoroutine != null)
        {
            StopCoroutine(winCoroutine);
            winCoroutine = null;
        }
        if (dockContainer != null) dockContainer.Initialize();
        if (slotContainer != null) slotContainer.Initialize();
    }

    public bool Enqueue(ISlotable slotable)
    {
        if (hasEnded ||
            isMovingBirdsOutside ||
            isMovingBirdsByMagnet ||
            slotable == null ||
            slotable.BirdState != BirdState.Idle ||
            !CanAccept(slotable))
        {
            return false;
        }

        slotable.BirdState = BirdState.Flying;
        queue.Enqueue(slotable);

        if (!isProcessing)
            Process();

        return true;
    }

    private bool CanAccept(ISlotable slotable)
    {
        if (dockContainer != null && dockContainer.GetDockSameType(slotable.UniqueElementID) != null)
        {
            return true;
        }

        return slotContainer != null && slotContainer.HasEmptySlot();
    }

    public void TriggerLose(LoseReason reason)
    {
        if (hasEnded) return;
        // DataBucketEvent.Ins.SetLoseBy(reason);
        // switch (reason)
        // {
        //     case LoseReason.OutOfSpace:
        //         UIManager.Ins.OpenUI<OutOfSpaceUI>();
        //         break;
        //     case LoseReason.TimeUp:
        //         UIManager.Ins.OpenUI<OutOfTimeUI>();
        //         break;
        //     default:
        //         hasEnded = true;
        //         UIManager.Ins.OpenUI<LoseUI>();
        //         break;
        // }
    }
    public bool TryUnlockDock(BirdDock dock)
    {
        if (hasEnded ||
            dock == null ||
            !dock.isLock ||
            dock.IsChangingOrder ||
            dockContainer == null ||
            !dockContainer.DockTiles.Contains(dock))
        {
            return false;
        }

        if (!TryAssignNextOrder(dock, true))
        {
            Debug.LogWarning("Cannot unlock dock because there are no remaining orders.", dock);
            return false;
        }

        Debug.Log("Dock unlocked.", dock);
        return true;
    }

    public bool IsAnim()
    {
        if (isMovingBirdsOutside) return true;
        if (isMovingBirdsByMagnet) return true;
        if (isClearCharging) return true;
        if (dockContainer != null && dockContainer.IsAnim()) return true;
        if (slotContainer != null && slotContainer.IsAnim()) return true;
        return false;
    }

    public bool CanMoveSlotsOutside()
    {
        return !hasEnded &&
               !isMovingBirdsOutside &&
               !IsAnim() &&
               slotContainer != null &&
               slotContainer.OccupiedCount > 0;
    }

    public bool MoveAllSlotBirdsOutside(Action onComplete = null)
    {
        if (!CanMoveSlotsOutside())
        {
            return false;
        }
        List<ISlotable> removedTiles = slotContainer.TakeAllTiles();
        List<Bird> birds = new List<Bird>(removedTiles.Count);

        for (int i = 0; i < removedTiles.Count; i++)
        {
            if (removedTiles[i] is Bird bird)
            {
                birds.Add(bird);
            }
        }

        if (birds.Count == 0)
        {
            return false;
        }

        isMovingBirdsOutside = true;
        outsideBirdHolder.ShowHolder();
        birdsMovingOutside.AddRange(birds);
        int remaining = birds.Count;

        for (int i = 0; i < birds.Count; i++)
        {
            Bird movingBird = birds[i];
            movingBird.SubmitMove(outsideBirdHolder.ArrivalPoint, () =>
            {
                birdsMovingOutside.Remove(movingBird);
                if (outsideBirdHolder.StoreBird(movingBird))
                {
                    outsideBirdHolder.PlayReceiveShake();
                }
                else
                {
                    movingBird.Clear();
                }

                remaining--;

                if (remaining > 0)
                {
                    return;
                }

                isMovingBirdsOutside = false;
                onComplete?.Invoke();
            });
        }

        return true;
    }

    /// <param name="nestFx">Icon nest hiện ở điểm tụ trước khi chim bay vào; null thì chim bay ngay như cũ.
    /// TopContainer sở hữu nó từ lúc nhận (kể cả khi trả về false thì caller tự Dispose).</param>
    public bool MoveFirstDockBirdsByMagnet(
        BoardManager boardManager,
        Action onComplete = null,
        MagnetNestFx nestFx = null)
    {
        if (boardManager == null ||
            hasEnded ||
            isMovingBirdsOutside ||
            isMovingBirdsByMagnet ||
            isProcessing ||
            queue.Count > 0 ||
            animatingCount > 0 ||
            IsAnim() ||
            !TryGetFirstMagnetDock(out BirdDock targetDock))
        {
            return false;
        }

        int amount = targetDock.ItemCountRemain;
        if (!boardManager.TryTakeBirdsForMagnet(
                targetDock.birdId,
                amount,
                out List<Bird> birds) ||
            birds.Count != amount)
        {
            return false;
        }

        isMovingBirdsByMagnet = true;
        magnetOnComplete = onComplete;
        int moveVersion = ++magnetMoveVersion;
        birdsMovingByMagnet.AddRange(birds);
        int birdsWaitingAtCenter = birds.Count;
        Vector3 gatherPosition = boardManager.MagnetGatherPosition;
        magnetNestFx = nestFx;

        // Khoá chim ngay, kể cả lúc icon còn đang bay.
        for (int i = 0; i < birds.Count; i++)
        {
            birds[i].BirdState = BirdState.Flying;
            birds[i].SetInteraction(false);
        }

        void SendBirdsToGather()
        {
            if (!isMovingBirdsByMagnet || moveVersion != magnetMoveVersion)
            {
                return;
            }

            for (int i = 0; i < birds.Count; i++)
            {
                birds[i].SubmitMove(gatherPosition, () =>
                {
                    if (!isMovingBirdsByMagnet || moveVersion != magnetMoveVersion)
                    {
                        return;
                    }

                    birdsWaitingAtCenter--;
                    if (birdsWaitingAtCenter == 0)
                    {
                        // Chim tụ xong: icon biến mất, chim bay lên order.
                        ReleaseMagnetNestFx(true);
                        MoveMagnetBirdsToDock(targetDock, birds, moveVersion);
                    }
                });
            }
        }

        if (nestFx != null)
        {
            nestFx.Appear(SendBirdsToGather);
        }
        else
        {
            SendBirdsToGather();
        }

        return true;
    }

    private void ReleaseMagnetNestFx(bool playVanish)
    {
        if (magnetNestFx == null)
        {
            return;
        }

        if (playVanish)
        {
            magnetNestFx.Vanish();
        }
        else
        {
            magnetNestFx.Dispose();
        }

        magnetNestFx = null;
    }

    public void UnlockDock()
    {
        if (dockContainer == null)
        {
            return;
        }

        for (int i = 0; i < dockContainer.DockTiles.Count; i++)
        {
            BirdDock dock = dockContainer.DockTiles[i];
            if (dock == null || !dock.isLock)
            {
                continue;
            }

            // Thử dock khoá kế tiếp nếu dock này đang bận (vd: giữa animation đổi order).
            if (TryUnlockDock(dock))
            {
                return;
            }
        }
    }

    private bool TryGetFirstMagnetDock(out BirdDock targetDock)
    {
        targetDock = null;
        if (dockContainer == null)
        {
            return false;
        }

        for (int i = 0; i < dockContainer.DockTiles.Count; i++)
        {
            BirdDock dock = dockContainer.DockTiles[i];
            if (dock == null ||
                dock.isLock ||
                dock.IsChangingOrder ||
                dock.IsFull ||
                dock.birdId < 0)
            {
                continue;
            }

            targetDock = dock;
            return true;
        }

        return false;
    }

    private void MoveMagnetBirdsToDock(
        BirdDock targetDock,
        List<Bird> birds,
        int moveVersion)
    {
        int birdsWaitingAtDock = birds.Count;
        for (int i = 0; i < birds.Count; i++)
        {
            Bird movingBird = birds[i];
            bool accepted = targetDock.AddTileNewDock(movingBird, () =>
            {
                if (moveVersion != magnetMoveVersion)
                {
                    return;
                }

                birdsMovingByMagnet.Remove(movingBird);
                OnBirdArrivedDock();
                birdsWaitingAtDock--;
                if (birdsWaitingAtDock == 0)
                {
                    CompleteMagnetMove();
                }
            });

            if (accepted)
            {
                // From this point BirdDock owns the bird and will clear it if
                // the level resets before the flight finishes.
                birdsMovingByMagnet.Remove(movingBird);
                animatingCount++;
                continue;
            }

            Debug.LogError("Magnet could not add a reserved bird to the target dock.", targetDock);
            birdsMovingByMagnet.Remove(movingBird);
            movingBird.BirdState = BirdState.Idle;
            movingBird.SetInteraction(true);
            birdsWaitingAtDock--;
        }

        if (birdsWaitingAtDock == 0)
        {
            CompleteMagnetMove();
        }
    }

    private void CompleteMagnetMove()
    {
        if (!isMovingBirdsByMagnet)
        {
            return;
        }

        isMovingBirdsByMagnet = false;
        birdsMovingByMagnet.Clear();
        Action onComplete = magnetOnComplete;
        magnetOnComplete = null;
        onComplete?.Invoke();
    }

    private void CancelMagnetMove()
    {
        magnetMoveVersion++;
        ReleaseMagnetNestFx(false);
        for (int i = birdsMovingByMagnet.Count - 1; i >= 0; i--)
        {
            if (birdsMovingByMagnet[i] != null)
            {
                birdsMovingByMagnet[i].Clear();
            }
        }

        birdsMovingByMagnet.Clear();
        isMovingBirdsByMagnet = false;
        Action onComplete = magnetOnComplete;
        magnetOnComplete = null;
        onComplete?.Invoke();
    }

    private void ClearBirdsMovingOutside()
    {
        for (int i = birdsMovingOutside.Count - 1; i >= 0; i--)
        {
            if (birdsMovingOutside[i] != null)
            {
                birdsMovingOutside[i].Clear();
            }
        }

        birdsMovingOutside.Clear();
    }

    private void OnAnimComplete()
    {
        animatingCount = Mathf.Max(0, animatingCount - 1);

        if (animatingCount == 0)
        {
            if (checkCoroutine != null) StopCoroutine(checkCoroutine);
            checkCoroutine = StartCoroutine(CheckAfterAllAnim());
        }
    }

    private void OnBirdArrivedDock()
    {
        int totalBirdCount = LevelManager.Ins.TotalBirdCount;
        dockedBirdCount = totalBirdCount > 0
            ? Mathf.Min(dockedBirdCount + 1, totalBirdCount)
            : dockedBirdCount + 1;

        UpdateCompletedBirdText();
        EventManager.Trigger(new OnBirdArrivedDockEvent());

        if (!hasEnded && totalBirdCount > 0 && dockedBirdCount >= totalBirdCount)
        {
            hasEnded = true;
            Debug.Log("WIN - All birds have been collected.", this);
            if (dockContainer != null) dockContainer.SetEnded();   // chặn click tổ Ads ngay

            if (winCoroutine != null) StopCoroutine(winCoroutine);
            winCoroutine = StartCoroutine(BreakDocksThenWin());
        }

        OnAnimComplete();
    }

    private void UpdateCompletedBirdText()
    {
        if (_countComplateText != null)
        {
            _countComplateText.text = $"{dockedBirdCount}/{LevelManager.Ins.TotalBirdCount}";
        }
    }

    private IEnumerator CheckAfterAllAnim()
    {
        yield return new WaitUntil(() => !IsAnim());
        yield return new WaitForSeconds(0.2f);
        checkCoroutine = null;

        // A new move may have started during the small settle delay. Its own
        // completion will schedule a fresh result check.
        if (IsAnim() || animatingCount > 0)
        {
            yield break;
        }

        // A bird can reach a temporary slot after the new dock order was
        // assigned. Re-scan stable slots before declaring a loss so those
        // late birds still move to their matching dock automatically.
        if (!hasEnded && PromoteWaitingBirdsToDock())
        {
            yield break;
        }

        if (!hasEnded && slotContainer != null && slotContainer.CheckFullSlots())
        {
            // hasEnded = true;
            TriggerLose(LoseReason.OutOfSpace);
        }
    }

    private IEnumerator BreakDocksThenWin()
    {
        if (dockContainer != null)
        {
            float timeout = MaxWaitLastDockMatch;
            while (timeout > 0f && dockContainer.IsAnim())
            {
                timeout -= Time.deltaTime;
                yield return null;
            }

            bool done = false;
            dockContainer.BreakAllDocks(() => done = true);
            yield return new WaitUntil(() => done);
        }

        yield return new WaitForSeconds(0.3f);
        winCoroutine = null;
        EventManager.Trigger(new WinEvent());
    }

    private void Process()
    {
        if (queue.Count == 0)
        {
            isProcessing = false;
            return;
        }

        isProcessing = true;

        while (queue.Count > 0)
        {
            ISlotable slotable = queue.Dequeue();
            bool accepted = false;

            BirdDock tileDock = dockContainer != null && slotable is Bird birdToPlace
                ? dockContainer.GetOrAssignDock(birdToPlace)
                : null;

            if (tileDock != null)
            {
                accepted = tileDock.AddTile(slotable, OnBirdArrivedDock);
                if (accepted)
                {
                    animatingCount++;
                }
                else
                {
                    accepted = slotContainer != null &&
                               slotContainer.AddTile(slotable, OnAnimComplete);
                    if (accepted) animatingCount++;
                }
            }
            else
            {
                accepted = slotContainer != null &&
                           slotContainer.AddTile(slotable, OnAnimComplete);
                if (accepted) animatingCount++;
            }

            if (!accepted)
            {
                slotable.BirdState = BirdState.Idle;
                if (slotable is Bird bird)
                {
                    bird.SetInteraction(true);
                }
            }
        }

        isProcessing = false;
    }

    public (int, int) GetFirstOrder()
    {
        for (int i = 0; i < dockContainer.DockTiles.Count; i++)
        {
            if (dockContainer.DockTiles[i] != null)
            {
                return (dockContainer.DockTiles[i].birdId, dockContainer.DockTiles[i].ItemCountRemain);
            }
        }

        return (-1, -1);
    }

    public (int, int) GetSecondOrder()
    {
        int index = 0;
        for (int i = 0; i < dockContainer.DockTiles.Count; i++)
        {
            if (dockContainer.DockTiles[i] != null && index >= 1)
            {
                return (dockContainer.DockTiles[i].birdId, dockContainer.DockTiles[i].ItemCountRemain);
            }
            else if (dockContainer.DockTiles[i] != null)
            {
                index++;
            }
        }

        return (-1, -1);
    }

    [Button]
    private void FitCamera()
    {
        FitCamera(ResolveFitCamera());
    }

    private void FitCamera(Camera camera)
    {
        if (camera == null)
        {
            return;
        }

        float cameraHeight = camera.orthographic
            ? camera.orthographicSize * 2f
            : GetPerspectiveViewHeight(camera);
        if (cameraHeight <= Mathf.Epsilon)
        {
            return;
        }

        float fitScale = GetCameraFitScale(cameraHeight, camera.aspect);

        // Remember how far `top` sits below the screen edge in the unscaled
        // (base 1920) layout, before the fit scale moves it.
        float cameraTopY = camera.transform.position.y + cameraHeight * 0.5f;
        if (top != null && !hasTopOffset)
        {
            topOffsetFromScreenTop = cameraTopY - top.position.y;
            hasTopOffset = true;
        }

        transform.localScale = new Vector3(
            cameraFitBaseScale.x * fitScale,
            cameraFitBaseScale.y * fitScale,
            cameraFitBaseScale.z);

        // Scaling shifts `top` away from the screen edge; pin it back.
        if (top != null && hasTopOffset)
        {
            Vector3 topPosition = top.position;
            topPosition.y = cameraTopY - topOffsetFromScreenTop;
            top.position = topPosition;
        }

        lastFitCamera = camera;
        lastFitPixelWidth = camera.pixelWidth > 0 ? (int)camera.pixelWidth : Screen.width;
        lastFitPixelHeight = camera.pixelHeight > 0 ? (int)camera.pixelHeight : Screen.height;
        lastFitProjection = camera.orthographic
            ? camera.orthographicSize
            : GetPerspectiveViewHeight(camera);
        lastFitReferenceResolution = referenceResolution;
        lastFitReferenceOrthographicSize = referenceOrthographicSize;
        lastCameraFitPadding = cameraFitPadding;
        lastAllowCameraFitUpscale = allowCameraFitUpscale;
    }

    private float GetCameraFitScale(float cameraHeight, float aspect)
    {
        Vector2 resolution = referenceResolution.x > Mathf.Epsilon && referenceResolution.y > Mathf.Epsilon
            ? referenceResolution : new Vector2(1080f, 1920f);
        float height = (referenceOrthographicSize > Mathf.Epsilon ? referenceOrthographicSize : 11.4f) * 2f;
        float widthScale = cameraHeight * aspect / (height * resolution.x / resolution.y);
        float heightScale = cameraHeight / height;
        float scale = Mathf.Min(widthScale, heightScale) * (cameraFitPadding > 0f ? cameraFitPadding : 1f);
        return Mathf.Max(0.01f, allowCameraFitUpscale ? scale : Mathf.Min(1f, scale));
    }

    // Project an authored board point into another aspect ratio without changing the live board/camera.
    public Vector3 GetLayoutPositionAtAspect(Vector3 worldPosition, float aspect)
    {
        Camera camera = ResolveFitCamera();
        if (camera == null) return worldPosition;

        float cameraHeight = camera.orthographic ? camera.orthographicSize * 2f : GetPerspectiveViewHeight(camera);
        float scale = GetCameraFitScale(cameraHeight, aspect);
        Vector3 localPoint = transform.InverseTransformPoint(worldPosition);
        Matrix4x4 layout = Matrix4x4.TRS(transform.localPosition, transform.localRotation,
            Vector3.Scale(cameraFitBaseScale, new Vector3(scale, scale, 1f)));
        if (transform.parent != null) layout = transform.parent.localToWorldMatrix * layout;
        return layout.MultiplyPoint3x4(localPoint);
    }

    private Camera ResolveFitCamera()
    {
        if (fitCamera != null)
        {
            return fitCamera;
        }

        if (IsValidFitCamera(lastFitCamera))
        {
            return lastFitCamera;
        }

        Camera[] cameras = Camera.allCameras; // Playworks không có FindObjectsByType
        Camera result = null;
        for (int i = 0; i < cameras.Length; i++)
        {
            Camera camera = cameras[i];
            if (!IsValidFitCamera(camera))
            {
                continue;
            }

            if (result == null || camera.depth > result.depth)
            {
                result = camera;
            }
        }

        return result;
    }

    private bool IsValidFitCamera(Camera camera)
    {
        return camera != null &&
               camera.enabled && camera.gameObject.activeInHierarchy &&
               camera.gameObject.scene == gameObject.scene &&
               camera.CompareTag("MainCamera");
    }

    private float GetPerspectiveViewHeight(Camera camera)
    {
        float distance = Vector3.Dot(
            transform.position - camera.transform.position,
            camera.transform.forward);
        if (distance <= Mathf.Epsilon)
        {
            return 0f;
        }

        return 2f * distance * Mathf.Tan(camera.fieldOfView * 0.5f * Mathf.Deg2Rad);
    }

    #region Event Callbacks

    private void OnBirdClickEventCallBack(OnBirdClickEvent obj)
    {
        if (!obj.canSubmit)
        {
            return;
        }

        if (obj.linkedBirds == null || obj.linkedBirds.Length == 0)
        {
            // Playable không có HapticManager nên chỉ giữ lại phần cho chim bay.
            Enqueue(obj.bird);
            return;
        }

        // Bind Bird: cả nhóm cùng bay, hoặc không con nào bay
        s_group.Clear();
        s_group.Add(obj.bird);
        for (int i = 0; i < obj.linkedBirds.Length; i++)
        {
            s_group.Add(obj.linkedBirds[i]);
        }

        EnqueueGroup(s_group);
    }

    public bool EnqueueGroup(List<ISlotable> group)
    {
        if (hasEnded ||
            isMovingBirdsOutside ||
            isMovingBirdsByMagnet ||
            group == null ||
            group.Count == 0)
        {
            return false;
        }

        for (int i = 0; i < group.Count; i++)
        {
            if (group[i] == null || group[i].BirdState != BirdState.Idle) return false;
        }

        if (!CanAcceptAll(group))
        {
            return false;
        }

        for (int i = 0; i < group.Count; i++)
        {
            group[i].BirdState = BirdState.Flying;
            queue.Enqueue(group[i]);
        }

        if (!isProcessing)
            Process();

        return true;
    }

    private bool CanAcceptAll(List<ISlotable> group)
    {
        int freeSlots = slotContainer != null ? slotContainer.EmptyCount : 0;
        var reservedInDock = new Dictionary<BirdDock, int>();

        for (int i = 0; i < group.Count; i++)
        {
            BirdDock dock = dockContainer != null
                ? dockContainer.GetDockSameType(group[i].UniqueElementID)
                : null;

            if (dock != null)
            {
                reservedInDock.TryGetValue(dock, out int reserved);
                if (reserved < dock.ItemCountRemain)
                {
                    reservedInDock[dock] = reserved + 1;
                    continue;
                }
            }

            if (freeSlots <= 0) return false;
            freeSlots--;
        }

        return true;
    }

    private void OnDockMatched(BirdDock matchedDock)
    {
        int matchedId = matchedDock != null ? matchedDock.LastMatchedBirdId : -1;
        if (matchedId >= 0) matchedBirdIds.Add(matchedId);
        EventManager.Trigger(new OnBirdMatchedEvent { dock = matchedDock, birdId = matchedId });
        if (matchedDock == null || dockContainer == null || slotContainer == null)
        {
            return;
        }

        LevelManager.Ins.CompleteBirdOrder();
        EventManager.Trigger(new OnDockMatchedEvent { dock = matchedDock });

        TryAssignNextOrder(matchedDock, false);
    }

    private bool TryAssignNextOrder(BirdDock targetDock, bool playUnlockPop)
    {
        if (targetDock == null || slotContainer == null)
        {
            return false;
        }

        BirdOrder nextOrder = LevelManager.Ins.GetNextBirdOrder(slotContainer.OccupiedCount);
        if (nextOrder == null)
        {
            return false;
        }

        targetDock.SetOrder(nextOrder);
        EventManager.Trigger(new OnDockOrderAssignedEvent { dock = targetDock });
        if (playUnlockPop)
        {
            targetDock.PlayUnlockPop();
        }

        PromoteMatchingBirds(targetDock, true);
        PromoteOutsideBirds(targetDock, true);

        return true;
    }

    private bool PromoteWaitingBirdsToDock()
    {
        if (dockContainer == null || slotContainer == null)
        {
            return false;
        }

        for (int i = 0; i < dockContainer.DockTiles.Count; i++)
        {
            BirdDock dock = dockContainer.DockTiles[i];
            if (dock == null ||
                dock.isLock ||
                dock.IsChangingOrder ||
                dock.IsFull ||
                dock.birdId < 0)
            {
                continue;
            }

            // Promote one dock per pass. The next animation completion scans again.
            if (PromoteMatchingBirds(dock, false) > 0)
            {
                return true;
            }

            if (PromoteOutsideBirds(dock, false) > 0)
            {
                return true;
            }
        }

        return false;
    }

    private int PromoteMatchingBirds(BirdDock targetDock, bool allowChangingOrder)
    {
        if (targetDock == null ||
            slotContainer == null ||
            targetDock.isLock ||
            targetDock.IsFull ||
            (!allowChangingOrder && targetDock.IsChangingOrder))
        {
            return 0;
        }

        List<ISlotable> promotedBirds = slotContainer.TakeMatchingTiles(
            targetDock.birdId,
            targetDock.ItemCountRemain);

        int promotedCount = 0;
        for (int i = 0; i < promotedBirds.Count; i++)
        {
            if (targetDock.AddTileNewDock(promotedBirds[i], OnBirdArrivedDock))
            {
                animatingCount++;
                promotedCount++;
            }
        }

        return promotedCount;
    }

    private int PromoteOutsideBirds(BirdDock targetDock, bool allowChangingOrder)
    {
        if (targetDock == null ||
            outsideBirdHolder == null ||
            !outsideBirdHolder.HasBirds ||
            targetDock.isLock ||
            targetDock.IsFull ||
            (!allowChangingOrder && targetDock.IsChangingOrder))
        {
            return 0;
        }

        int availableCount = Mathf.Min(
            outsideBirdHolder.GetBirdCount(targetDock.birdId),
            targetDock.ItemCountRemain);
        int promotedCount = 0;

        for (int i = 0; i < availableCount; i++)
        {
            if (!outsideBirdHolder.TryTakeBird(targetDock.birdId, out Bird bird))
            {
                break;
            }

            bird.BirdState = BirdState.Flying;
            bird.SetInteraction(false);

            if (!targetDock.AddTileNewDock(bird, OnBirdArrivedDock))
            {
                outsideBirdHolder.StoreBird(bird);
                break;
            }

            animatingCount++;
            promotedCount++;
        }

        return promotedCount;
    }

    // private void OnDockCreatedEventCallback(OnDockCreatedEvent obj)
    // {
    //     TileDock newDock = obj.dock;
    //     obj.dock.isAnim = false;
    //     for (int i = slotContainer.TileSlots.Count - 1; i >= 0; i--)
    //     {
    //         var slotTile = slotContainer.TileSlots[i];
    //         if (newDock.IsFull) break;

    //         if (!slotTile.IsEmpty &&
    //             slotTile.Tile is Tile tile &&
    //             tile.UniqueElementID == newDock.tileId)
    //         {
    //             animatingCount++;
    //             newDock.AddTileNewDock(tile, OnAnimComplete);
    //             slotContainer.RemoveTile(tile);
    //         }
    //     }
    // }

    #endregion
}
