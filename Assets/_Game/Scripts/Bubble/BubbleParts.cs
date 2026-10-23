using System;
using System.Collections.Generic;
using Sirenix.OdinInspector;
using UnityEngine;

/// <summary>
/// Gắn lên ROOT của prefab bubble. Bảng tra BubblePart -> Transform
/// để obstacle bật/tắt phần hình mà không cần chuỗi đường dẫn.
/// </summary>
public class BubbleParts : MonoBehaviour
{
    [Serializable]
    public class Entry
    {
        public BubblePart key;
        public Transform target;
    }

    [SerializeField] private Entry[] parts = new Entry[0];

    public Transform Get(BubblePart key)
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
    /// Tìm object con (kể cả đang tắt) có tên trùng tên enum và điền vào bảng
    [Button("Auto Fill (theo tên object)")]
    private void AutoFill()
    {
        Transform[] children = GetComponentsInChildren<Transform>(true);
        var result = new List<Entry>();

        foreach (BubblePart key in Enum.GetValues(typeof(BubblePart)))
        {
            if (key == BubblePart.None) continue;

            Transform found = Array.Find(children, t => t.name == key.ToString());
            if (found != null)
            {
                result.Add(new Entry { key = key, target = found });
            }
            else
            {
                Debug.LogWarning($"[BubbleParts] {name}: không có object tên '{key}'", this);
            }
        }

        parts = result.ToArray();
        UnityEditor.EditorUtility.SetDirty(this);
        Debug.Log($"[BubbleParts] {name}: đã điền {parts.Length} phần hình", this);
    }
#endif
}