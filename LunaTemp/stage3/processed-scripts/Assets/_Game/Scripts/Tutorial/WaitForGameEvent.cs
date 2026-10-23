using System;
using UnityEngine;

/// <summary>
/// Yield instruction: dừng coroutine cho tới khi EventManager bắn event kiểu T
/// (và thoả điều kiện filter nếu có). Tự gỡ listener khi xong hoặc khi Dispose.
/// </summary>
public class WaitForGameEvent<T> : CustomYieldInstruction, IDisposable where T : IGameEvent
{
    private readonly Func<T, bool> filter;
    private bool received;
    private bool disposed;

    public T Result { get; private set; }

    public override bool keepWaiting => !received && !disposed;

    public WaitForGameEvent(Func<T, bool> filter = null)
    {
        this.filter = filter;
        EventManager.AddListener<T>(OnEvent);
    }

    private void OnEvent(T evt)
    {
        if (received || (filter != null && !filter(evt)))
        {
            return;
        }

        Result = evt;
        received = true;
        Dispose();
    }

    public void Dispose()
    {
        if (disposed) return;
        disposed = true;
        EventManager.RemoveListener<T>(OnEvent);
    }
}
