using UnityEngine;

public static class PlayableAdHelper
{
    public static void InstallFullGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }

    public static void GameEnded()
    {
        Luna.Unity.LifeCycle.GameEnded();
    }
}
