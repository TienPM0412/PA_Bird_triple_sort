using System.Collections.Generic;
using System.Globalization;
using UnityEngine;

/// <summary>
/// Time Nest: theo tiến độ level, gắn đồng hồ đếm ngược vào đơn hàng tiếp theo của một tổ.
/// Hết giờ -> thua level. Mốc đọc từ LevelConfig.CountdownTargetProgress ("0.1,30|0.3,60|0.55,90").
/// </summary>
public class TimeNestController : Singleton<TimeNestController>
{
    private struct Milestone
    {
        public float Progress;
        public float Seconds;
    }

    private readonly List<Milestone> milestones = new List<Milestone>();
    private int nextIndex;

    private void OnEnable()
    {
        EventManager.AddListener<OnDockOrderAssignedEvent>(OnDockOrderAssigned);
        EventManager.AddListener<OnBirdMatchedEvent>(OnBirdMatched);
    }

    private void OnDisable()
    {
        EventManager.RemoveListener<OnDockOrderAssignedEvent>(OnDockOrderAssigned);
        EventManager.RemoveListener<OnBirdMatchedEvent>(OnBirdMatched);
    }

    /// LevelManager gọi TRƯỚC TopContainer.Initialize
    public void ResetForLevel(LevelConfig level)
    {
        StopAll();
        milestones.Clear();
        nextIndex = 0;

        string raw = level != null ? level.CountdownTargetProgress : null;
        if (string.IsNullOrWhiteSpace(raw)) return;

        foreach (string part in raw.Split('|'))
        {
            string[] pair = part.Split(',');
            if (pair.Length == 2 &&
                float.TryParse(pair[0], NumberStyles.Float, CultureInfo.InvariantCulture, out float progress) &&
                float.TryParse(pair[1], NumberStyles.Float, CultureInfo.InvariantCulture, out float seconds))
            {
                milestones.Add(new Milestone { Progress = progress, Seconds = seconds });
            }
            else
            {
                Debug.LogWarning($"[TimeNest] CountdownTargetProgress sai định dạng: '{part}'", this);
            }
        }

        milestones.Sort((a, b) => a.Progress.CompareTo(b.Progress));
    }

    private void OnDockOrderAssigned([Bridge.Ref] OnDockOrderAssignedEvent evt)
    {
        if (nextIndex >= milestones.Count || evt.dock == null) return;
        if (LevelManager.Ins.OrderProgress < milestones[nextIndex].Progress) return;

        DockCountdown countdown = evt.dock.GetComponent<DockCountdown>();
        if (countdown == null)
        {
            Debug.LogWarning($"[TimeNest] {evt.dock.name} chưa có DockCountdown", evt.dock);
            return;
        }

        countdown.StartCountdown(milestones[nextIndex].Seconds, OnTimeUp);
        nextIndex++;
    }

    // Tổ có đồng hồ đã hoàn thành đơn hàng -> thành công
    private void OnBirdMatched([Bridge.Ref] OnBirdMatchedEvent evt)
    {
        if (evt.dock == null) return;

        DockCountdown countdown = evt.dock.GetComponent<DockCountdown>();
        if (countdown != null && countdown.IsRunning) countdown.Stop();
    }

    private void OnTimeUp(DockCountdown countdown)
    {
        // Giữ "00:00" của tổ hết giờ, dừng các tổ khác
        foreach (DockCountdown other in GetAllCountdowns())
        {
            if (other != countdown && other.IsRunning) other.Stop();
        }

        TopContainer.Ins.TriggerLose(LoseReason.TimeUp);
    }

    private void StopAll()
    {
        foreach (DockCountdown countdown in GetAllCountdowns())
        {
            countdown.Stop();
        }
    }

    private IEnumerable<DockCountdown> GetAllCountdowns()
    {
        if (TopContainer.Ins == null || TopContainer.Ins.DockContainer == null) yield break;

        List<BirdDock> docks = TopContainer.Ins.DockContainer.DockTiles;
        for (int i = 0; i < docks.Count; i++)
        {
            if (docks[i] == null) continue;

            DockCountdown countdown = docks[i].GetComponent<DockCountdown>();
            if (countdown != null) yield return countdown;
        }
    }
}