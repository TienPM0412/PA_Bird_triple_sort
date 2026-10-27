using Sirenix.OdinInspector;
using UnityEngine;

public class BoosterClear : BoosterBase
{
    public override void Init()
    {
    }

    [Button]
    public override bool Activate()
    {
        if (IsBusy)
        {
            return false;
        }

        TopContainer topContainer = TopContainer.Ins;
        if (topContainer == null || !topContainer.CanMoveSlotsOutside())
        {
            return false;
        }

        IsBusy = true;

        // Không dùng UIManager nữa: GameplayUI đặt sẵn trong scene, lấy qua GameplayUI.Ins.
        GameplayUI gameplayUI = GameplayUI.Ins;
        Vector3 target = topContainer.SlotContainer.transform.position;
        topContainer.SetClearCharging(true);
        if (gameplayUI != null && gameplayUI.isActiveAndEnabled && gameplayUI.PlayClearSlingshot(target, OnStoneHit))
        {
            return true;
        }

        // Khong co na (chua gan / UI chua mo) thi clear ngay nhu cu.
        topContainer.SetClearCharging(false);
        return StartClear(topContainer);
    }

    private void OnStoneHit()
    {
        TopContainer topContainer = TopContainer.Ins;
        if (topContainer == null)
        {
            IsBusy = false;
            return;
        }

        Vector3 hitPos = topContainer.SlotContainer.transform.position;
        topContainer.SetClearCharging(false);
        SpawnHitFx(hitPos);
        topContainer.SlotContainer.PlayHitShake(hitPos);
        StartClear(topContainer);
    }

    private static void SpawnHitFx([Bridge.Ref] Vector3 position)
    {
        BoosterManager settings = BoosterManager.Ins;
        if (settings == null || settings.ClearHitFxPrefab == null) return;
        GameObject prefab = settings.ClearHitFxPrefab;
        GameObject fx = Object.Instantiate(prefab, position, prefab.transform.rotation);
        Object.Destroy(fx, settings.clearHitFxLifetime);
    }

    private bool StartClear(TopContainer topContainer)
    {
        bool started = topContainer.MoveAllSlotBirdsOutside(() => IsBusy = false);
        if (!started)
        {
            IsBusy = false;
        }

        return started;
    }

    public override void ResetBehavior()
    {
        IsBusy = false;
        if (TopContainer.Ins != null)
            TopContainer.Ins.SetClearCharging(false);
    }
}
