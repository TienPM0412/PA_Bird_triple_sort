using System;
using DG.Tweening;
using TMPro;
using UnityEngine;

/// <summary>
/// Đồng hồ đếm ngược của một tổ (Time Nest). Gắn lên TargetTankX (cùng object với BirdDock).
/// TimeNestController quyết định khi nào bật/tắt.
/// </summary>
[RequireComponent(typeof(BirdDock))]
public class DockCountdown : MonoBehaviour
{
    [SerializeField] private GameObject countdownRoot;          // TargetTankX/Countdown
    [SerializeField] private TMP_Text timeText;                 // Countdown/Plate/TimeText

    [Header("Cảnh báo sắp hết giờ")]
    [SerializeField, Min(0f)] private float warningThreshold = 10f;
    [SerializeField] private Color warningColor = Color.red;
    [SerializeField] private GameObject[] warningObjects;       // Visual/Warning, Visual/WarningFront (tùy chọn)

    private float remaining;
    private bool running;
    private int lastShownSecond = -1;
    private Action<DockCountdown> onTimeUp;
    private Color textBaseColor = Color.white;
    private Vector3 textBaseScale = Vector3.one;
    private Vector3 rootBaseScale = Vector3.one;

    public bool IsRunning => running;

    // Add Component trong Editor -> tự tìm theo tên
    private void Reset()
    {
        Transform root = transform.Find("Countdown");
        if (root != null) countdownRoot = root.gameObject;

        Transform text = transform.Find("Countdown/Plate/TimeText");
        if (text != null) timeText = text.GetComponent<TMP_Text>();
    }

    private void Awake()
    {
        if (timeText != null)
        {
            textBaseColor = timeText.color;
            textBaseScale = timeText.transform.localScale;
        }

        if (countdownRoot != null)
        {
            rootBaseScale = countdownRoot.transform.localScale;
            countdownRoot.SetActive(false);
        }

        SetWarning(false);
    }

    public void StartCountdown(float seconds, Action<DockCountdown> timeUpCallback)
    {
        remaining = Mathf.Max(0f, seconds);
        onTimeUp = timeUpCallback;
        running = true;
        lastShownSecond = -1;

        if (countdownRoot != null)
        {
            countdownRoot.SetActive(true);
            countdownRoot.transform.DOKill();
            countdownRoot.transform.localScale = Vector3.zero;
            countdownRoot.transform.DOScale(rootBaseScale, 0.3f).SetEase(Ease.OutBack);
        }

        UpdateText();
    }

    /// Dừng và ẩn đồng hồ (hoàn thành đơn hàng, hoặc bắt đầu level mới)
    public void Stop()
    {
        running = false;
        onTimeUp = null;
        SetWarning(false);

        if (timeText != null)
        {
            timeText.transform.DOKill();
            timeText.transform.localScale = textBaseScale;
            timeText.color = textBaseColor;
        }

        if (countdownRoot != null)
        {
            countdownRoot.transform.DOKill();
            countdownRoot.transform.localScale = rootBaseScale;
            countdownRoot.SetActive(false);
        }
    }

    private void Update()
    {
        if (!running) return;

        // Thắng/thua/đang chờ hồi sinh -> tạm dừng
        if (TopContainer.Ins != null && TopContainer.Ins.HasEnded) return;

        remaining -= Time.deltaTime;
        if (remaining <= 0f)
        {
            remaining = 0f;
            running = false;
            UpdateText();                       // giữ "00:00" trên màn hình khi thua

            Action<DockCountdown> callback = onTimeUp;
            onTimeUp = null;
            callback?.Invoke(this);
            return;
        }

        UpdateText();
    }

    private void UpdateText()
    {
        int seconds = Mathf.CeilToInt(remaining);
        if (seconds == lastShownSecond) return;     // chỉ cập nhật khi số giây đổi
        lastShownSecond = seconds;

        if (timeText == null) return;

        timeText.text = $"{seconds / 60:00}:{seconds % 60:00}";

        bool warning = running && remaining <= warningThreshold;
        timeText.color = warning ? warningColor : textBaseColor;
        SetWarning(warning);

        if (warning)
        {
            timeText.transform.DOKill(true);
            timeText.transform.DOPunchScale(textBaseScale * 0.15f, 0.2f, 6, 0.8f);
        }
    }

    private void SetWarning(bool active)
    {
        if (warningObjects == null) return;

        for (int i = 0; i < warningObjects.Length; i++)
        {
            if (warningObjects[i] != null) warningObjects[i].SetActive(active);
        }
    }
}