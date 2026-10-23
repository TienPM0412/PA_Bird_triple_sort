using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class ControllerManager : MonoBehaviour
{
    //[SerializeField] private float idleTime = 10f;
    [SerializeField] private LayerMask layerMask;
    [SerializeField] private LayerMask layerMaskBlocker;
    [SerializeField] private LayerMask layerDockMask;
    private Camera _mainCamera;
    private RaycastHit2D hit;
    [SerializeField] private IClickable selectedTile;

    private IClickable temp;
    private Vector2 worldPoint;
    private PointerEventData pointerData;
    private readonly List<RaycastResult> uiHits = new List<RaycastResult>();

    //private float currentIdleTime = 0f;
    //private bool isIdle = false;

    void OnEnable()
    {
        //GameEventBus.OnExitIdle += OnExitIdle;
    }

    void OnDisable()
    {
        //GameEventBus.OnExitIdle -= OnExitIdle;
    }


    protected void Awake()
    {
        _mainCamera = Camera.main;
    }

    private void Update()
    {
        // Playworks chỉ hỗ trợ UnityEngine.Input (input cũ); chạm màn hình được Unity giả lập thành chuột trái.
        if (IsPointerOverUI())
            return;
        // if (GameManager.Ins.GameState != GameState.Playing || GameManager.Ins.IsBlockInput)
        // {
        //     return;
        // }

        // if (TopContainer.Ins.CheckFullSlots())
        // {
        //     return;
        // }

        //VariableSystem.TimePlaying += Time.deltaTime;

        if (Input.GetMouseButtonDown(0))
        {
            worldPoint = _mainCamera.ScreenToWorldPoint(Input.mousePosition);

            ClearSelection(false);
            temp = GetClickableAtPoint(worldPoint);
            if (temp != null)
            {
                selectedTile = temp;
                selectedTile?.OnHover();
            }
            // currentIdleTime = 0f;

            // if (isIdle)
            // {
            //     isIdle = false;
            //     GameEventBus.FireExitIdle();
            // }
            return;
        }

        if (Input.GetMouseButtonUp(0))
        {
            worldPoint = _mainCamera.ScreenToWorldPoint(Input.mousePosition);

            temp = GetClickableAtPoint(worldPoint);
            if (temp != null)
            {
                if (temp == selectedTile)
                {
                    selectedTile?.OnClick();
                }
                else
                {
                    selectedTile?.OnExit();
                }
            }
            else if (selectedTile != null)
            {
                selectedTile.OnExit();
            }

            ClearSelection(false);
            // currentIdleTime = 0f;
            // return;
        }

        // currentIdleTime += Time.deltaTime;
        // if (currentIdleTime >= idleTime && !isIdle)
        // {
        //     GameEventBus.FireIdle();
        //     currentIdleTime = 0f;
        //     isIdle = true;
        // }
    }

    //     private void OnExitIdle()
    //     {
    //         isIdle = false;
    //         currentIdleTime = 0f;
    //     }
    private IClickable GetClickableAtPoint([Bridge.Ref] Vector2 point)
    {
        IClickable result = ResolveClickableAtPoint(point);
        // if (result is Component component && !TutorialManager.Ins.CanClick(component))
        // {
        //     return null;
        // }

        return result;
    }

    private IClickable ResolveClickableAtPoint([Bridge.Ref] Vector2 point)
    {
        // Dock is part of the top UI and may intentionally overlap the world
        // blocker. Give it priority so the blocker only stops birds behind it.
        Collider2D dockCollider = Physics2D.OverlapPoint(point, layerDockMask);
        IClickable dock = GetClickable(dockCollider);
        if (dock != null)
        {
            return dock;
        }

        Collider2D blockerCollider = layerMaskBlocker.value != 0
            ? Physics2D.OverlapPoint(point, layerMaskBlocker)
            : null;
        IClickable blockerClickable = GetClickable(blockerCollider);
        if (blockerClickable != null)
        {
            return blockerClickable;
        }

        if (blockerCollider != null)
        {
            return null;
        }

        Collider2D regularCollider = Physics2D.OverlapPoint(point, layerMask);
        return GetClickable(regularCollider);
    }

    private static IClickable GetClickable(Collider2D collider)
    {
        if (collider == null) return null;

        IClickable clickable = collider.GetComponent<IClickable>();
        return clickable ?? collider.GetComponentInParent<IClickable>();
    }

    private void ClearSelection(bool invokeExit)
    {
        if (invokeExit)
        {
            selectedTile?.OnExit();
        }

        selectedTile = null;
        temp = null;
    }

    private bool IsPointerOverUI()
    {
        if (EventSystem.current == null) return false;

        if (pointerData == null) pointerData = new PointerEventData(EventSystem.current);
        pointerData.position = Input.mousePosition;
        uiHits.Clear();
        EventSystem.current.RaycastAll(pointerData, uiHits);

        // Chỉ tính UI trên cùng. Nếu đó là lớp tối của tutorial thì coi như không có UI:
        // lớp tối đã chặn các nút bên dưới, còn chim vẫn được bấm (TutorialManager.CanClick lọc tiếp).
        // return uiHits.Count > 0 && !TutorialManager.Ins.IsTutorialDim(uiHits[0].gameObject);
        return uiHits.Count > 0;
    }
}
