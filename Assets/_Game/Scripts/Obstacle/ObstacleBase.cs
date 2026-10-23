using System;
using System.Collections.Generic;
using Sirenix.OdinInspector;
using UnityEngine;


/// <summary>
/// Base cho mọi obstacle. Obstacle là prefab riêng, được BubbleBase spawn (LeanPool)
/// làm con của bubble khi BubbleConfig yêu cầu, và despawn khi bị phá hoặc khi bubble bị despawn.
/// </summary>
public abstract class ObstacleBase : MonoBehaviour
{
    public abstract ObstacleType Type { get; }

    [ShowInInspector, ReadOnly] public bool IsActive { get; private set; }

    /// Obstacle còn hiệu lực thì chặn tap vào chim trong lồng
    public virtual bool BlocksBirdTap => IsActive;

    /// Thông báo hiện ra khi người chơi tap vào chim bị chặn
    public virtual string BlockedMessage => null;

    protected BubbleBase Bubble { get; private set; }

    /// Chim sở hữu obstacle. null với obstacle cấp trứng
    protected Bird OwnerBird { get; private set; }

    /// Obstacle cấp TRỨNG: BubbleBase gọi ngay sau khi spawn
    public void Init(BubbleBase bubble, BubbleConfig config) => Setup(bubble, null, config);

    /// Obstacle cấp CHIM: Bird gọi ngay sau khi spawn
    public void InitOnBird(Bird bird, BubbleBase bubble, BubbleConfig config) => Setup(bubble, bird, config);

    private void Setup(BubbleBase bubble, Bird bird, BubbleConfig config)
    {
        Bubble = bubble;
        OwnerBird = bird;
        IsActive = true;
        OnInit(config);
        Subscribe();
    }

    /// Chủ sở hữu gọi trước khi despawn obstacle: trả trứng/chim về trạng thái ban đầu
    public void Release()
    {
        IsActive = false;
        Unsubscribe();
        OnRelease();
        Bubble = null;
        OwnerBird = null;
    }

    /// Obstacle cấp chim: chim sở hữu bắt đầu rời trứng (tap hợp lệ hoặc Magnet)
    public virtual void OnOwnerBirdLeaving() { }
    /// Obstacle cấp chim: thêm các chim PHẢI BAY CÙNG khi chim sở hữu được tap (Bind Bird)
    public virtual void CollectLinkedBirds(List<Bird> result) { }

    /// Hiệu ứng khi người chơi tap vào chim bị chặn
    public virtual void PlayBlockedFeedback() { }
    public virtual bool ProtectsFromBooster(BoosterType booster) => false;

    // public virtual bool ResolvesOnItsOwn => false;

    /// Bật phần hình trong bubble, reset trạng thái
    protected abstract void OnInit(BubbleConfig config);

    /// Tắt phần hình trong bubble, trả scale/màu về như cũ
    protected abstract void OnRelease();

    /// Hiệu ứng vỡ. BẮT BUỘC gọi onComplete khi xong
    protected virtual void PlayClearAnimation(Action onComplete) => onComplete?.Invoke();

    protected virtual void Subscribe() { }
    protected virtual void Unsubscribe() { }

    // Về pool (bị tắt) thì chắc chắn ngừng nghe event
    protected virtual void OnDisable() => Unsubscribe();

    protected void Clear()
    {
        if (!IsActive) return;

        IsActive = false;
        Unsubscribe();

        EventManager.Trigger(new OnObstacleClearedEvent
        {
            bubble = Bubble,
            type = Type
        });

        BubbleBase ownerBubble = Bubble;
        Bird ownerBird = OwnerBird;
        PlayClearAnimation(() =>
        {
            if (ownerBird != null) ownerBird.RemoveObstacle(this);
            else if (ownerBubble != null) ownerBubble.RemoveObstacle(this);
        });
    }

    [Button("Force Clear (test)")]
    private void ForceClear() => Clear();
}