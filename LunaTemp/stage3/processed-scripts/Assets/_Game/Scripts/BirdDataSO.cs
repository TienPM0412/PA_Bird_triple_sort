using Spine.Unity;
using UnityEngine;

[CreateAssetMenu(fileName = "BirdDataSO", menuName = "ScriptableObjects/BirdDataSO", order = 1)]
public class BirdDataSO : ScriptableObject
{
    public BirdData[] birds;

    public BirdData GetBirdDataById(int birdId)
    {
        foreach (var bird in birds)
        {
            if (bird.birdId == birdId)
            {
                return bird;
            }
        }
        return null;
    }

    public BirdData GetRandomBird()
    {
        if (birds.Length == 0)
        {
            return null;
        }

        int randomIndex = Random.Range(0, birds.Length);
        return birds[randomIndex];
    }
}

public enum BirdType
{
    None,
    Blue,
    Orange,
    Cyan,
    Green,
    Pink,
    Purple,
    Red,
    Yellow,
}

[System.Serializable]
public class BirdData
{
    public BirdType birdType;
    public int birdId;
    public Sprite spriteIcon;
    public SkeletonDataAsset skeletonDataAsset;
}
