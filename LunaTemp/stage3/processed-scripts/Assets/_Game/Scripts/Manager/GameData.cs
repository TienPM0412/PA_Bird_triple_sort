using UnityEngine;

public class GameData : Singleton<GameData>
{
    public Color[] birdColors;

    public Color GetColorByBirdType(BirdType birdType)
    {
        int index = (int)birdType - 1; // Assuming BirdType enum starts from 1
        if (index >= 0 && index < birdColors.Length)
        {
            return birdColors[index];
        }
        else
        {
            Debug.LogWarning($"Invalid BirdType: {birdType}. Returning default color.");
            return Color.white; // Default color if bird type is invalid
        }
    }
}
