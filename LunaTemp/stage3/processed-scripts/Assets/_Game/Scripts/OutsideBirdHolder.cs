using System.Collections.Generic;
using DG.Tweening;
using Lean.Pool;
using Sirenix.OdinInspector;
using TMPro;
using UnityEngine;

public class OutsideBirdHolder : MonoBehaviour, IClickable
{
    private const float AUTO_HIDE_CONTENT_DELAY = 2f;

    private sealed class StoredBirdGroup
    {
        public BirdData BirdData;
        public int Count;
    }

    [SerializeField]
    private TMP_Text m_TxtCount;

    [SerializeField]
    private Canvas m_Canvas;

    [SerializeField]
    private GameObject m_ObjContent;

    [SerializeField]
    private OutsideBird m_OutsideBirdPrefab;

    [Header("Receive Shake")]
    [SerializeField, Tooltip("Phan hinh cua to de rung. De trong thi rung chinh transform nay.")]
    private Transform m_NestVisual;
    [SerializeField, Min(0.05f)] private float m_ShakeDuration = 0.25f;
    [SerializeField, Tooltip("Do phong to moi nhip, tinh theo ti le scale hien tai.")]
    private float m_ShakeScale = 0.12f;
    [SerializeField, Tooltip("Goc lac qua lai moi nhip (do).")]
    private float m_ShakeRotation = 8f;

    private List<OutsideBird> m_OutsideBirds;

    private readonly Dictionary<int, StoredBirdGroup> m_StoredBirds = new Dictionary<int, StoredBirdGroup>();

    private Tween m_TwnAutoHideContent;

    private bool m_CanShowContent;

    public int BirdCount { get; private set; }

    public bool HasBirds => BirdCount > 0;

    public Transform ArrivalPoint => transform;

    private void Awake()
    {
        m_OutsideBirds = new List<OutsideBird>();

        if (m_Canvas != null && m_Canvas.worldCamera == null)
        {
            m_Canvas.worldCamera = Camera.main;
        }

        ResetHolder();
    }

    public void Init(List<(Sprite sprite, int count)> datas)
    {
        ClearDisplayItems();

        int totalCount = 0;
        if (datas != null)
        {
            for (int i = 0; i < datas.Count; i++)
            {
                (Sprite sprite, int count) data = datas[i];
                if (data.count <= 0)
                {
                    continue;
                }

                totalCount += data.count;

                if (m_OutsideBirdPrefab == null || m_ObjContent == null)
                {
                    continue;
                }

                OutsideBird outsideBird = Instantiate(
                    m_OutsideBirdPrefab,
                    m_ObjContent.transform);
                outsideBird.Init(data.sprite, data.count);
                m_OutsideBirds.Add(outsideBird);
            }
        }

        BirdCount = totalCount;
        m_CanShowContent = totalCount > 0;
        if (m_TxtCount != null)
        {
            m_TxtCount.text = totalCount.ToString();
        }

        if (!m_CanShowContent)
        {
            SwitchContentVisibility(false);
        }
    }

    public void SwitchContentVisibility(bool? value = null)
    {
        if (m_Canvas == null)
        {
            return;
        }

        bool shouldShow = value ?? !m_Canvas.gameObject.activeSelf;
        if (shouldShow && !m_CanShowContent)
        {
            return;
        }

        KillAutoHideTween();
        m_Canvas.gameObject.SetActive(shouldShow);

        if (shouldShow)
        {
            m_TwnAutoHideContent = DOVirtual
                .DelayedCall(AUTO_HIDE_CONTENT_DELAY, () => SwitchContentVisibility(false))
                .SetUpdate(true)
                .SetTarget(this);
        }
    }
    [Button]
    public void ShowHolder()
    {
        gameObject.SetActive(true);
    }

    public void ResetHolder()
    {
        KillAutoHideTween();
        m_StoredBirds.Clear();
        BirdCount = 0;
        Init(null);
        gameObject.SetActive(false);
    }

    public bool StoreBird(Bird bird)
    {
        if (bird == null || bird.BirdData == null)
        {
            return false;
        }

        ShowHolder();

        int birdId = bird.UniqueElementID >= 0
            ? bird.UniqueElementID
            : bird.BirdData.birdId;

        if (!m_StoredBirds.TryGetValue(birdId, out StoredBirdGroup group))
        {
            group = new StoredBirdGroup
            {
                BirdData = bird.BirdData,
                Count = 0
            };
            m_StoredBirds.Add(birdId, group);
        }

        group.Count++;
        BirdCount++;

        bird.Clear();
        RefreshDisplay();
        SwitchContentVisibility(true);
        return true;
    }

    public void PlayReceiveShake()
    {
        Transform target = m_NestVisual != null ? m_NestVisual : transform;

        // Hoan tat nhip truoc (tra ve scale/goc goc) roi moi rung nhip moi,
        // nen chim bay vao lien tiep van ra dung tung nhip, khong bi phinh dan.
        target.DOKill(true);
        target.DOPunchScale(target.localScale * m_ShakeScale, m_ShakeDuration, 6, 0.7f);
        target.DOPunchRotation(new Vector3(0f, 0f, m_ShakeRotation), m_ShakeDuration, 8, 0.6f);
    }

    public int GetBirdCount(int birdId)
    {
        return m_StoredBirds.TryGetValue(birdId, out StoredBirdGroup group)
            ? group.Count
            : 0;
    }

    public bool TryTakeBird(int birdId, out Bird bird)
    {
        bird = null;

        if (!m_StoredBirds.TryGetValue(birdId, out StoredBirdGroup group) ||
            group.Count <= 0 ||
            group.BirdData == null)
        {
            return false;
        }

        Bird prefab = LevelManager.Ins != null ? LevelManager.Ins.birdPrefab : null;
        if (prefab == null)
        {
            Debug.LogError("OutsideBirdHolder cannot release a bird because the Bird prefab is missing.", this);
            return false;
        }

        bird = LeanPool.Spawn(
            prefab,
            transform.position,
            Quaternion.identity,
            (Transform)null);
        bird.Init(group.BirdData, null, birdId, 100);

        group.Count--;
        BirdCount = Mathf.Max(0, BirdCount - 1);
        if (group.Count == 0)
        {
            m_StoredBirds.Remove(birdId);
        }

        RefreshDisplay();
        if (!HasBirds)
        {
            SwitchContentVisibility(false);
            gameObject.SetActive(false);
        }

        return true;
    }

    public void OnHover()
    {
    }

    public void OnClick()
    {
        SwitchContentVisibility();
    }

    public void OnExit()
    {
    }

    private void RefreshDisplay()
    {
        var displayData = new List<(Sprite sprite, int count)>(m_StoredBirds.Count);
        var sortedIds = new List<int>(m_StoredBirds.Keys);
        sortedIds.Sort();

        for (int i = 0; i < sortedIds.Count; i++)
        {
            StoredBirdGroup group = m_StoredBirds[sortedIds[i]];
            displayData.Add((group.BirdData.spriteIcon, group.Count));
        }

        Init(displayData);
    }

    private void ClearDisplayItems()
    {
        if (m_OutsideBirds == null)
        {
            m_OutsideBirds = new List<OutsideBird>();
            return;
        }

        for (int i = 0; i < m_OutsideBirds.Count; i++)
        {
            if (m_OutsideBirds[i] == null)
            {
                continue;
            }

            m_OutsideBirds[i].gameObject.SetActive(false);
            Destroy(m_OutsideBirds[i].gameObject);
        }

        m_OutsideBirds.Clear();
    }

    private void KillAutoHideTween()
    {
        m_TwnAutoHideContent?.Kill();
        m_TwnAutoHideContent = null;
    }

    private void OnDisable()
    {
        KillAutoHideTween();
        if (m_Canvas != null)
        {
            m_Canvas.gameObject.SetActive(false);
        }
    }

    private void OnDestroy()
    {
        KillAutoHideTween();
    }
}
