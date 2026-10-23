/*
Author: quocbr
Github: https://github.com/quocbr
Updated: Optimized for Thread Safety & Unity Lifecycle
*/

using System;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// EventManager - Quản lý sự kiện tập trung (Observer Pattern).
/// Hỗ trợ Thread-safety và Exception isolation.
/// </summary>
public static class EventManager
{
    #region Private Fields

    // Dictionary lưu trữ các delegate đã được wrap
    private static readonly Dictionary<Type, Action<IGameEvent>> s_Events = new Dictionary<Type, Action<IGameEvent>>();

    // Dictionary dùng để lookup khi RemoveListener (Key: Delegate gốc của user -> Value: Wrapper)
    private static readonly Dictionary<Delegate, Action<IGameEvent>> s_EventLookups = new Dictionary<Delegate, Action<IGameEvent>>();

    // Object dùng để khóa luồng (Thread safety)
    private static readonly object s_Lock = new object();

    #endregion

    #region Public Methods

    /// <summary>
    /// Tự động reset static data khi nhấn Play trong Unity Editor
    /// </summary>
    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
    public static void ClearAll()
    {
        lock (s_Lock)
        {
            s_Events.Clear();
            s_EventLookups.Clear();
        }
    }

    /// <summary>
    /// Đăng ký lắng nghe sự kiện
    /// </summary>
    public static void AddListener<T>(Action<T> listener) where T : IGameEvent
    {
        if (listener == null) return;

        lock (s_Lock)
        {
            // Tránh đăng ký trùng lặp
            if (s_EventLookups.ContainsKey(listener)) return;

            // Tạo wrapper để chuyển đổi từ IGameEvent sang T
            Action<IGameEvent> wrapper = e => listener((T)e);
            s_EventLookups[listener] = wrapper;

            // Thêm vào danh sách Events
            if (s_Events.TryGetValue(typeof(T), out var existingAction))
            {
                s_Events[typeof(T)] = existingAction + wrapper;
            }
            else
            {
                s_Events[typeof(T)] = wrapper;
            }
        }
    }

    /// <summary>
    /// Hủy đăng ký sự kiện
    /// </summary>
    public static void RemoveListener<T>(Action<T> listener) where T : IGameEvent
    {
        if (listener == null) return;

        lock (s_Lock)
        {
            if (s_EventLookups.TryGetValue(listener, out var wrapper))
            {
                if (s_Events.TryGetValue(typeof(T), out var existingAction))
                {
                    existingAction -= wrapper;

                    // Nếu không còn ai lắng nghe thì xóa Key khỏi Dictionary để tiết kiệm bộ nhớ
                    if (existingAction == null)
                        s_Events.Remove(typeof(T));
                    else
                        s_Events[typeof(T)] = existingAction;
                }

                s_EventLookups.Remove(listener);
            }
        }
    }

    /// <summary>
    /// Bắn sự kiện đi
    /// </summary>
    public static void Trigger(IGameEvent evt)
    {
        if (evt == null) return;

        Action<IGameEvent> actionToInvoke = null;

        // 1. Lấy delegate ra khỏi Dictionary một cách an toàn
        lock (s_Lock)
        {
            if (!s_Events.TryGetValue(evt.GetType(), out actionToInvoke))
                return;
        }

        // 2. Thực thi (Invoke) bên ngoài lock để tránh deadlock và blocking
        if (actionToInvoke != null)
        {
            // Lấy danh sách các hàm con để gọi từng cái
            Delegate[] invocationList = actionToInvoke.GetInvocationList();

            for (int i = 0; i < invocationList.Length; i++)
            {
                try
                {
                    ((Action<IGameEvent>)invocationList[i]).Invoke(evt);
                }
                catch (Exception ex)
                {
                    // Log lỗi rõ ràng: Sự kiện nào, Hàm nào bị lỗi
                    // Không dùng invocationList[i].Method.Name: Playworks không có Method nên chính dòng log này lại ném lỗi
                    // ("Cannot read properties of undefined (reading 'n')") và che mất lỗi thật.
                    Debug.LogError($"[EventManager] Exception when triggering event of type {evt.GetType().Name}: {ex}");
                }
            }
        }
    }

    /// <summary>
    /// Kiểm tra xem sự kiện có người lắng nghe không (Tiện ích)
    /// </summary>
    public static bool HasListener<T>() where T : IGameEvent
    {
        lock (s_Lock)
        {
            return s_Events.ContainsKey(typeof(T));
        }
    }

    #endregion
}

/// <summary>
/// Interface đánh dấu (Marker Interface) bắt buộc cho mọi Event
/// </summary>
public interface IGameEvent { }

public struct OnFadeToHome : IGameEvent { }

public struct OnBirdClickEvent : IGameEvent
{
    public Bird bird;
    public bool canSubmit;
    public Bird[] linkedBirds;
}

public struct OnShowMessage : IGameEvent
{
    public string message;
}

public struct OnBirdReleasedEvent : IGameEvent
{
    public BubbleBase bubble;
}

public struct OnObstacleClearedEvent : IGameEvent
{
    public BubbleBase bubble;
    public ObstacleType type;
}

public struct OnBubbleStorageChangedEvent : IGameEvent
{
    public BubbleBase bubble;
}

public struct WinEvent : IGameEvent
{

}
public struct OnBirdMatchedEvent : IGameEvent
{
    public BirdDock dock;
    public int birdId;
}

public struct OnDockOrderAssignedEvent : IGameEvent
{
    public BirdDock dock;
}


/// <summary>Một con chim đã bay tới và vào vị trí trong dock.</summary>
public struct OnBirdArrivedDockEvent : IGameEvent { }

/// <summary>Một dock đã gom đủ chim và hoàn thành order.</summary>
public struct OnDockMatchedEvent : IGameEvent
{
    public BirdDock dock;
}

public class OnBuyIAPEvent : IGameEvent
{
    public IAP_Product product;
    public bool success;
}
