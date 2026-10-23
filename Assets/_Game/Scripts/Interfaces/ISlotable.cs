using System;
using UnityEngine;

public enum BirdState
{
    Idle,
    Flying,
    Colleced,
}

public interface ISlotable
{
    BirdState BirdState { get; set; }
    int UniqueElementID { get; set; }
    Transform Transform { get; set; }
    Transform VisualsTransform { get; }
    void Clear();
    void SubmitMove(Transform position, Action onFinish = null);
    void SubmitMove(Vector3 position, Action onFinish = null);
    bool IsSameType(ISlotable other);
    void MatchAnimation(float delay);
}