
using System;
using System.Collections;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.Events;
using UnityEngine.UI;

public class ButtonScaleUI : Button
{
    private float scaleFactor = 0.95f;

    // Thời gian tween khi scale xuống/hồi lại, để hiệu ứng mượt thay vì snap tức thì
    public float scaleDuration = 0.08f;

    public UnityEvent action = new UnityEvent();

    // Thời gian giữ nguyên trạng thái scale sau khi click xong rồi mới hồi lại
    private float releaseDelay = 0.1f;

    public Transform transformToScale;

    private bool isHolding;
    private bool isPointerInside;
    private Coroutine releaseRoutine;
    private Coroutine scaleRoutine;

    // Đã click xong nhưng chưa hồi scale (chờ delay / chờ được enable lại)
    private bool pendingRelease;

    protected override void OnEnable()
    {
        base.OnEnable();
        transformToScale.localScale = Vector3.one;
        pendingRelease = false;
    }

    protected override void Start()
    {
        base.Start();
        if (transformToScale == null)
        {
            transformToScale = this.transform.GetChild(0);
        }
    }

    public override void OnPointerDown(PointerEventData eventData)
    {
        base.OnPointerDown(eventData);
        StopReleaseRoutine();
        pendingRelease = false;
        isHolding = true;
        isPointerInside = true;
        ApplyScale(scaleFactor);


    }

    public override void OnPointerUp(PointerEventData eventData)
    {
        base.OnPointerUp(eventData);
        isHolding = false;

        // Nhả tay bên ngoài -> không phải click, hồi lại ngay
        if (!isPointerInside)
        {
            pendingRelease = false;
            ApplyScale(1f);
            return;
        }

        // Là click thật -> giữ scale thêm releaseDelay rồi mới hồi lại
        if (releaseDelay <= 0f)
        {
            pendingRelease = false;
            ApplyScale(1f);
            return;
        }

        // Giữ nguyên scale, chờ delay mới hồi.
        // Nếu bị disable giữa chừng thì vẫn giữ, khi enable lại sẽ đếm tiếp.
        pendingRelease = true;
        StartReleaseRoutine();
    }
    public override void OnPointerClick(PointerEventData eventData)
    {
        if (eventData.button != PointerEventData.InputButton.Left || !IsActive() || !IsInteractable())
        {
            return;
        }

        base.OnPointerClick(eventData);
        action?.Invoke();
        SoundManager.Ins.PlaySFX(SoundFX.UI_Button);
    }

    public override void OnPointerEnter(PointerEventData eventData)
    {
        isPointerInside = true;

        // Ngón tay quay lại trong lúc vẫn đang giữ -> scale xuống lại
        if (isHolding)
        {
            StopReleaseRoutine();
            pendingRelease = false;
            ApplyScale(scaleFactor);
        }
    }

    public override void OnPointerExit(PointerEventData eventData)
    {
        isPointerInside = false;

        // Di tay ra ngoài raycast -> hồi lại như cũ (kể cả khi đang giữ)
        StopReleaseRoutine();
        pendingRelease = false;
        ApplyScale(1f);
    }

    private IEnumerator DelayedRelease()
    {
        yield return new WaitForSecondsRealtime(releaseDelay);
        releaseRoutine = null;
        pendingRelease = false;
        ApplyScale(1f);
    }

    private void StartReleaseRoutine()
    {
        StopReleaseRoutine();
        if (isActiveAndEnabled)
        {
            releaseRoutine = StartCoroutine(DelayedRelease());
        }
    }

    private void StopReleaseRoutine()
    {
        if (releaseRoutine != null)
        {
            StopCoroutine(releaseRoutine);
            releaseRoutine = null;
        }
    }

    private void ApplyScale(float factor)
    {
        if (transformToScale == null) return;

        if (scaleRoutine != null)
        {
            StopCoroutine(scaleRoutine);
            scaleRoutine = null;
        }

        if (scaleDuration <= 0f || !isActiveAndEnabled)
        {
            transformToScale.localScale = Vector3.one * factor;
            return;
        }

        scaleRoutine = StartCoroutine(AnimateScale(factor));
    }

    private IEnumerator AnimateScale(float targetFactor)
    {
        Vector3 startScale = transformToScale.localScale;
        Vector3 targetScale = Vector3.one * targetFactor;
        float t = 0f;

        while (t < scaleDuration)
        {
            t += Time.unscaledDeltaTime;
            transformToScale.localScale = Vector3.LerpUnclamped(startScale, targetScale, Mathf.Clamp01(t / scaleDuration));
            yield return null;
        }

        transformToScale.localScale = targetScale;
        scaleRoutine = null;
    }



    protected override void OnDisable()
    {
        base.OnDisable();
        StopReleaseRoutine();
        if (scaleRoutine != null)
        {
            StopCoroutine(scaleRoutine);
            scaleRoutine = null;
        }
        isHolding = false;
        isPointerInside = false;

        // Đang chờ hồi scale -> giữ nguyên trạng thái scale, chờ enable lại
        if (!pendingRelease)
        {
            ApplyScale(1f);
        }
    }
#if UNITY_EDITOR
    protected override void OnValidate()
    {
        base.OnValidate();
        transition = Transition.None;

        // RectTransform rectTransform = transformToScale as RectTransform;
        // if (rectTransform != null)
        // {
        //     rectTransform.anchoredPosition3D = new Vector3(0f, 5f, 0f);
        // }

    }
#endif
}

