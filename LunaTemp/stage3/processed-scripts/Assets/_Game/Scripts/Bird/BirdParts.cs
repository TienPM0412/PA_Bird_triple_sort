using System;
using System.Collections.Generic;
using Sirenix.OdinInspector;
using UnityEngine;
public class BirdParts : MonoBehaviour
{
    [Serializable]
    public class Entry
    {
        public BirdPart key;
        public Transform target;
    }

    [SerializeField] private Entry[] parts = new Entry[0];

    public Transform Get(BirdPart key)
    {
        for (int i = 0; i < parts.Length; i++)
        {
            if (parts[i] != null && parts[i].key == key)
            {
                return parts[i].target;
            }
        }

        return null;
    }

    #if UNITY_EDITOR
    [Button("Auto Fill (theo tên object)")]
    private void AutoFill()
    {
        Transform[] children = GetComponentsInChildren<Transform>(true);
        var result = new List<Entry>();

        foreach (BirdPart key in Enum.GetValues(typeof(BirdPart)))
        {
            if (key == BirdPart.None) continue;

            Transform found = Array.Find(children, t => t.name == key.ToString());
            if (found != null) result.Add(new Entry { key = key, target = found });
            else Debug.LogWarning($"[BirdParts] {name}: không có object tên '{key}'", this);
        }

        parts = result.ToArray();
        UnityEditor.EditorUtility.SetDirty(this);
        Debug.Log($"[BirdParts] {name}: đã điền {parts.Length} phần hình", this);
    }
    #endif
}
