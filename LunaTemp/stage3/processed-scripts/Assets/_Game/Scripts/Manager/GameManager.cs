using Sirenix.OdinInspector;
using UnityEngine;

public enum LoseReason
{
    None,
    OutOfSpace,
    TimeUp,
    ObstacleDeadlock,
    Other
}

public enum GameState
{
    None,
    Home,
    Playing,
    Pause,
    Win,
    Lose
}

public class GameManager : Singleton<GameManager>
{
    public GameState currentGameState = GameState.None;
    public bool isTestMode = false;
    private void Start()
    {
        LevelManager.Ins.LoadLevel();
    }

    public void SetGameState(GameState state)
    {
        currentGameState = state;
    }
    [Button]
    private void ShowRateUI()
    {
        // UIManager.Ins.OpenUI<RateUI>();
    }
}
