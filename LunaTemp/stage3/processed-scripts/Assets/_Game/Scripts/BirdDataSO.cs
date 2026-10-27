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
    Bird_001,
    Bird_002,
    Bird_003,
    Bird_004,
    Bird_005,
    Bird_006,
    Bird_007,
    Bird_008,
    Bird_009,
    Bird_010,
    Bird_011,
    Bird_012,
    Bird_013,
    Bird_014,
    Bird_015,
    Bird_016,
    Bird_017,
    Bird_018,
    Bird_019,
    Bird_020,
    Bird_021,
    Bird_022,
    Bird_023,
    Bird_024,
    Bird_025,
    Bird_026,
    Bird_027,
    Bird_028,
    Bird_029,
    Bird_030,
    Bird_031,
    Bird_032,
    Bird_033,
    Bird_034,
    Bird_035,
    Bird_036,
    Bird_037,
    Bird_038
}

[System.Serializable]
public class BirdData
{
    public BirdType birdType;
    public int birdId;
    public Sprite spriteIcon;
    public SkeletonDataAsset skeletonDataAsset;
    [Tooltip("Leave empty for the default skin. Select a skin when multiple birds share one Spine asset.")]
    [SpineSkin(dataField: nameof(skeletonDataAsset), includeNone: true, defaultAsEmptyString: true)]
    public string skinName;
    public Sprite skeletonSprite;
}
