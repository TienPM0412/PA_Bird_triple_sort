using System;
using UnityEngine;

[CreateAssetMenu(fileName = "ObstacleConfigSO", menuName = "ScriptableObjects/ObstacleConfigSO", order = 2)]
public class ObstacleConfigSO : ScriptableObject
{
    [Serializable]
    public class ObstacleEntry
    {
        public ObstacleType type;
        public ObstacleBase prefab;
    }

    public ObstacleEntry[] obstacles = new ObstacleEntry[0];
    public ObstacleData[] obstacleDatas = new ObstacleData[0];

    public ObstacleBase GetPrefab(ObstacleType type)
    {
        for (int i = 0; i < obstacles.Length; i++)
        {
            if (obstacles[i] != null && obstacles[i].type == type)
            {
                return obstacles[i].prefab;
            }
        }

        return null;
    }
}
[Serializable]
public class ObstacleData
{
    public string name;
    public string description;
    public Sprite icon;
    public Sprite titleIcon;
    public int unlockLevel;
}