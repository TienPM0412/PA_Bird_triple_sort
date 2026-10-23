using UnityEngine;

public class BubbleOneSlot : BubbleBase
{
    override protected void SetupPosition()
    {
        if (birds.Count > 0)
        {
            birds[0].transform.localPosition = Vector3.zero;
        }
    }
}
