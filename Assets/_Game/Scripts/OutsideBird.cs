using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class OutsideBird : MonoBehaviour
{
    [SerializeField]
    private Image m_ImageIcon;

    [SerializeField]
    private TMP_Text m_TxtCount;

    public void Init(Sprite sprite, int count)
    {
        int safeCount = Mathf.Max(0, count);

        if (m_ImageIcon != null)
        {
            m_ImageIcon.sprite = sprite;
            m_ImageIcon.enabled = sprite != null;
        }

        if (m_TxtCount != null)
        {
            m_TxtCount.text = safeCount.ToString();
        }

        gameObject.SetActive(safeCount > 0);
    }
}
