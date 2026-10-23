using Sirenix.OdinInspector;
using UnityEngine;

public class BoosterMagnet : BoosterBase
{
    public override void Init()
    {
    }

    [Button]
    public override bool Activate()
    {
        if (IsBusy || TopContainer.Ins == null)
        {
            return false;
        }

        BoardManager boardManager = LevelManager.Ins != null
            ? LevelManager.Ins.BoardManager
            : null;
        if (boardManager == null)
        {
            boardManager = Object.FindObjectOfType<BoardManager>();
        }

        if (boardManager == null)
        {
            Debug.LogWarning("Magnet cannot run because BoardManager was not found.");
            return false;
        }
        SoundManager.Ins.PlaySFX(SoundFX.Net);
        IsBusy = true;

        MagnetNestFx nestFx = CreateNestFx(boardManager.MagnetGatherPosition);
        if (TopContainer.Ins.MoveFirstDockBirdsByMagnet(
                boardManager,
                () =>
                {
                    IsBusy = false;

                },
                nestFx))
        {
            return true;
        }

        if (nestFx != null)
        {
            nestFx.Dispose();
        }

        IsBusy = false;
        return false;
    }

    // Sinh prefab icon nest ngay tại điểm tụ chim. Thiếu prefab thì bỏ hiệu ứng.
    private MagnetNestFx CreateNestFx(Vector3 gatherPosition)
    {
        MagnetNestFx prefab = BoosterManager.Ins != null
            ? BoosterManager.Ins.MagnetNestFxPrefab
            : null;
        return MagnetNestFx.Spawn(prefab, gatherPosition);
    }
}
