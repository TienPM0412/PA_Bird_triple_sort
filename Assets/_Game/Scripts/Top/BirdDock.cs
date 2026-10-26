using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class BirdDock : MonoBehaviour, IClickable
{
    [SerializeField] private Transform visual;
    [SerializeField] private List<Transform> points = new List<Transform>();
    [SerializeField] private SpriteRenderer _targetSprite;
    [SerializeField] private Text _amountText;
    [SerializeField] private GameObject addUI;
    [SerializeField] private GameObject orderUI;
    [SerializeField] private int Max = 3;

    public BirdType tileType;
    public int birdId;
    public bool isLock;

    private List<ISlotable> birds = new List<ISlotable>();
    private int arrivedCount;
    private const float MaxLandingWait = 2f;

    public List<Transform> Points => points;

    private Transform orderBoard;
    /// <summary>Bảng icon + số lượng order nằm dưới dock (child "OrderBoard" trong scene).</summary>
    public Transform OrderBoard => orderBoard != null ? orderBoard : orderBoard = transform.Find("OrderBoard");

    private int Capacity => Mathf.Min(Max, points.Count);
    public bool IsFull => Capacity <= 0 || birds.Count >= Capacity;
    public int ItemCountRemain => Mathf.Max(0, Capacity - birds.Count);
    public Vector3 Pos { get; private set; }

    public List<ISlotable> Tiles => birds;

    public bool isAnim;
    public event Action<BirdDock> MatchCompleted;

    private bool animPocVisual = false;
    private bool isEnded;
    private Vector3 dockDefaultScale = Vector3.one;

    public bool IsChangingOrder => animPocVisual;

    public int LastMatchedBirdId { get; private set; } = -1;

    private void Awake()
    {
        dockDefaultScale = transform.localScale;
    }

    public void ResetDock()
    {
        transform.DOKill();
        StopAllCoroutines();
        transform.localScale = dockDefaultScale;

        for (int i = 0; i < birds.Count; i++)
        {
            if (birds[i] != null)
            {
                birds[i].Clear();
            }
        }

        if (_targetSprite != null)
        {
            _targetSprite.sprite = null;
        }

        birds.Clear();
        arrivedCount = 0;
        isAnim = false;
        SetLock(true);
        birdId = -1;
        tileType = BirdType.None;
        animPocVisual = false;
        isEnded = false;
        UpdateAmountText();
    }

    public void RemoveTile(ISlotable tile)
    {
        birds.Remove(tile);
    }

    public void SetLock(bool isLock)
    {
        this.isLock = isLock;
        if (addUI != null) addUI.SetActive(isLock);
        if (visual != null) visual.gameObject.SetActive(!isLock);
        if (orderUI != null) orderUI.SetActive(!isLock);
    }

    public void SetTileType(BirdData newBird)
    {
        if (newBird == null)
        {
            return;
        }

        birdId = newBird.birdId;
        tileType = newBird.birdType;
        SetLock(false);

        if (_targetSprite != null)
        {
            _targetSprite.sprite = newBird.spriteIcon;
        }
    }

    public void SetOrder(BirdOrder order)
    {
        if (order?.BirdData == null)
        {
            ResetDock();
            return;
        }

        birdId = order.BirdId;
        tileType = order.BirdData.birdType;
        SetLock(false);

        if (_targetSprite != null)
        {
            _targetSprite.sprite = order.BirdData.spriteIcon;
        }
    }

    public bool AddTile(ISlotable tile, Action onComplete = null)
    {
        if (tile == null || IsFull) return false;

        isAnim = true;

        birds.Add(tile);
        int index = birds.Count - 1;

        tile.SubmitMove(points[index], () =>
        {
            PlayBirdLandSound();
            tile.BirdState = BirdState.Colleced;
            Bird tempTile = tile.Transform.GetComponent<Bird>();
            //tempTile.SetLayer(index);
            //tempTile.SetSortingLayer(Constants.SORTINGLAYER_DONE);
            //_spriteRenderers[index].enabled = false;
            arrivedCount++;
            UpdateAmountText();
            if (IsFull && arrivedCount >= birds.Count)
            {
                AnimChangeType();
            }
            else if (arrivedCount >= birds.Count)
            {
                isAnim = false;
            }
            onComplete?.Invoke();
        });
        return true;
    }

    public bool AddTileNewDock(ISlotable tile, Action onComplete = null)
    {
        if (IsFull) return false;
        isAnim = true;
        birds.Add(tile);
        int index = birds.Count - 1;
        StartCoroutine(AnimAddTile(tile, index, onComplete));
        return true;
    }



    IEnumerator AnimAddTile(ISlotable tile, int index, Action onComplete = null)
    {
        yield return new WaitUntil(() => !animPocVisual);
        tile.SubmitMove(points[index], () =>
                {
                    PlayBirdLandSound();
                    tile.BirdState = BirdState.Colleced;
                    tile.Transform.GetComponent<Bird>();
                    //.SetLayer(index);
                    //_spriteRenderers[index].enabled = false;
                    arrivedCount++;
                    UpdateAmountText();
                    if (IsFull && arrivedCount >= birds.Count)
                    {
                        AnimChangeType();
                    }
                    else if (arrivedCount >= birds.Count)
                    {
                        isAnim = false;
                    }
                    onComplete?.Invoke();
                });
    }

    private static void PlayBirdLandSound()
    {
        string[] landSounds = { SoundFX.Ingame_Bird_Land_1, SoundFX.Ingame_Bird_Land_2, SoundFX.Ingame_Bird_Land_3 };
        SoundManager.Ins.PlaySFX(landSounds[UnityEngine.Random.Range(0, landSounds.Length)]);
    }

    private void AnimChangeType()
    {
        isAnim = true;
        animPocVisual = true;
        StartCoroutine(WaitLandingThenMatch());
    }

    // Đủ chim thì đợi con cuối hạ cánh xong (anim Landing) rồi mới chạy hiệu ứng match
    private IEnumerator WaitLandingThenMatch()
    {
        float timeout = MaxLandingWait;
        while (timeout > 0f && IsAnyBirdLanding())
        {
            timeout -= Time.deltaTime;
            yield return null;
        }

        PlayMatchAnimation();
    }

    private bool IsAnyBirdLanding()
    {
        for (int i = 0; i < birds.Count; i++)
        {
            if (birds[i]?.Transform != null &&
                birds[i].Transform.TryGetComponent(out Bird bird) &&
                bird.IsLanding)
            {
                return true;
            }
        }

        return false;
    }

    private void PlayMatchAnimation()
    {
        Sequence sequence = DOTween.Sequence();

        for (int i = 0; i < birds.Count; i++)
        {
            ISlotable matchedBird = birds[i];
            if (matchedBird?.Transform == null) continue;

            sequence.Join(
                matchedBird.Transform.DOScale(0f, 0.2f)
                    .SetDelay(i * 0.04f)
                    .SetEase(Ease.InBack));
        }

        transform.DOKill();
        sequence.Join(
            transform.DOScale(Vector3.zero, 0.25f)
                .SetEase(Ease.InBack));

        sequence.OnComplete(() =>
        {
            PlayBreakFX();
            for (int i = 0; i < birds.Count; i++)
            {
                birds[i]?.Clear();
            }

            birds.Clear();
            arrivedCount = 0;
            UpdateAmountText();
            LastMatchedBirdId = birdId;
            birdId = -1;
            tileType = BirdType.None;
            isLock = true;
            if (_targetSprite != null) _targetSprite.sprite = null;
            if (addUI != null) addUI.SetActive(false);

            MatchCompleted?.Invoke(this);

            if (isLock || birdId < 0)
            {
                if (addUI != null) addUI.SetActive(false);
                animPocVisual = false;
                isAnim = false;
                return;
            }

            PlayNewOrderPop();
        });
    }

    private void PlayBreakFX()
    {
        ParticlesManager.Ins.PlayEffect(ParticleEffectType.FX_Wood, transform.position);
    }

    private void PlayNewOrderPop()
    {
        transform.DOKill();
        transform.localScale = Vector3.zero;
        transform.DOScale(dockDefaultScale, 0.4f)
            .SetEase(Ease.OutBack)
            .OnComplete(() =>
            {
                animPocVisual = false;
                isAnim = birds.Count > arrivedCount;
            });
    }

    public void PlayUnlockPop()
    {
        SoundManager.Ins.PlaySFX(SoundFX.Add_Nest);
        isAnim = true;
        animPocVisual = true;
        PlayNewOrderPop();
    }

    public void SetEnded()
    {
        isEnded = true;
    }

    public void PlayEndBreak(float delay, Action onComplete = null)
    {
        isEnded = true;
        isAnim = true;
        transform.DOKill();

        if (transform.localScale.sqrMagnitude < 0.0001f)
        {
            onComplete?.Invoke();
            return;
        }

        transform.DOScale(Vector3.zero, 0.25f)
            .SetDelay(delay)
            .SetEase(Ease.InBack)
            .OnComplete(() =>
            {
                PlayBreakFX();
                onComplete?.Invoke();
            });
    }

    private void UpdateAmountText()
    {
        if (_amountText != null)
        {
            _amountText.text = $"{arrivedCount}/{Capacity}";
        }
    }

    public void UpdatePos(Vector3 newPos)
    {
        transform.DOLocalMove(newPos, 0.15f).SetEase(Ease.Linear);
        Pos = newPos;
    }

    public void AnimVisualPoc(Action onComplete = null)
    {
        animPocVisual = true;
        _targetSprite.enabled = false;
        transform.DOScale(0, 0.25f).SetEase(Ease.InBack).OnComplete(() =>
        {
            _targetSprite.enabled = true;
            onComplete?.Invoke();
            transform.DOScale(1, 0.5f).SetEase(Ease.OutBack).OnComplete(() =>
            {
                animPocVisual = false;
            });
        });
    }

    #region IClickable Implementation

    public void OnHover()
    {
    }

    public void OnClick()
    {
        // if (isEnded || !isLock || isAnim || animPocVisual) return;
        // //SoundManager.Ins.PlaySFX(SFX.SFX_BUTTON_CLICK, SoundManager.SFXType.Minor);
        // UIManager.Ins.OpenUI<BuyNestUI>().Initialize(this);
    }

    public void OnExit()
    {
    }

    #endregion
}
