
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Lean.Pool;
using Sirenix.OdinInspector;
using UnityEngine;

public enum ParticleEffectType
{
    None,
    LongChim_Blue = 1,
    LongChim_Orange = 2,
    LongChim_Cyan = 3,
    LongChim_Green = 4,
    LongChim_Pink = 5,
    LongChim_Purple = 6,
    LongChim_Red = 7,
    LongChim_Yellow = 8,

    FX_Amazing = 100,
    FX_Awesome = 101,
    FX_Excellent = 102,
    FX_Good = 103,
    FX_Nice = 104,
    FX_Perfect = 105,
    FX_WindyShuffle = 106,
    FX_Binding = 107,
    FX_Egg = 108,
    FX_Ice = 109,
    FX_Mys_Egg = 110,
    vfx_Wood = 111,
    FX_BigEgg1 = 112,
    FX_BigEgg2 = 113,
    FX_BigEgg3 = 114,
    FX_BigEgg4 = 115,
    FX_BigEgg5 = 116,
    FX_Wood = 117,

}

public class ParticlesManager : Singleton<ParticlesManager>
{
    [SerializeField] private ParticlesBase[] particleEffectData;
    private Dictionary<ParticleEffectType, ParticlesBase> particleEffects = new Dictionary<ParticleEffectType, ParticlesBase>();

    [SerializeField] private GameObject coinPrefab;
    [SerializeField] private float spreadRange = 100f;
    [SerializeField] private float spreadRangeOnSum = 0.025f;
    [SerializeField] private float moveDuration = 1.6f;
    [SerializeField] private float magMut = 0.4f;
    [SerializeField] private float toptopOGScale = 1f;
    [SerializeField] private float sum = 10f;

    public ParticleSystem set;
    public Transform target;
    public Transform startTarget;
    [Button]
    public void PlaySet()
    {
        var t = Instantiate(set, target.position, Quaternion.identity);
        Vector3 dir = startTarget.position - target.position;

        float angle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg;

        t.transform.rotation = Quaternion.Euler(0, 0, angle);
        t.Play();
    }

    private void Start()
    {
        foreach (var particleEffect in particleEffectData)
        {
            particleEffects.Add(particleEffect.EffectType, particleEffect);
        }
    }

    public ParticlesBase SpawnParticleEffect(ParticleEffectType effectType, Vector3 position)
    {
        if (particleEffects.TryGetValue(effectType, out var particleEffect) && particleEffect != null)
        {
            // Spawn thẳng ParticlesBase thay vì field Particles: trên Playworks field này có thể null
            // (prefab variant như LongTrymBlue) khiến LeanPool báo "Attempting to spawn a null prefab".
            var particle = LeanPool.Spawn(particleEffect, this.transform);
            if (particle == null) return null;

            particle.transform.position = position;
            return particle;
        }

        return null;
    }
    [Button]
    public void PlayEffect(ParticleEffectType effectType, Vector3 position)
    {
        var particle = SpawnParticleEffect(effectType, position);
        if (particle != null)
        {
            particle.Play();
        }
    }

    [Button]
    public void SpawnABunchCoin(int number, Transform target = null, Transform startTaget = null)
    {
        if (startTaget == null)
            startTaget = transform;
        // if (target == null)
        //     target = UIManager.Ins.coinUI.iconTarget;
        //SoundManager.Ins.PlaySound(SoundData.instance.coinAppear);
        //SoundManager.Ins.PlaySFX(SFX.SFX_COIN);

        float lastMag = number > 1 ? ((float)(number - 1)) / ((float)number) : 0f;
        float lastCoinGatherDuration = 0.1f + (lastMag * magMut) * (1f + (lastMag * magMut));
        float coinTextDuration = lastCoinGatherDuration + moveDuration / 3f;

        for (int i = 0; i < number; i++)
        {
            Vector3 randomOffset = (Vector3)Random.insideUnitCircle * spreadRange * (1f + sum * spreadRangeOnSum) * (float)Screen.width / 720f;
            if (i == 0)
            {
                StartCoroutine(MoveToTargetUI(LeanPool.Spawn(coinPrefab, startTaget.position, Quaternion.identity, UIManager.Ins.CanvasParentTF).transform, target.position, moveDuration
                , startTaget.position + randomOffset, ((float)i) / ((float)number), true, true, coinTextDuration));
            }
            else
            {
                StartCoroutine(MoveToTargetUI(LeanPool.Spawn(coinPrefab, startTaget.position, Quaternion.identity, UIManager.Ins.CanvasParentTF).transform, target.position, moveDuration
                , startTaget.position + randomOffset, ((float)i) / ((float)number)));
            }
        }
    }
    IEnumerator MoveToTargetUI(Transform obj, Vector3 target, float _moveDuration, Vector3 startTarget, float mag, bool isCoin = true, bool isUpdateCoin = false, float coinTextDuration = 0.3f)
    {
        float elapsedTime = 0;
        //Vector3 startPos = obj.position; 
        float t = 0f;
        while (elapsedTime < 0.1f + (mag * magMut) * (1 + (mag * magMut)))
        {
            obj.position = Vector3.Lerp(obj.position, startTarget, elapsedTime);
            elapsedTime += Time.deltaTime;
            yield return null;
        }
        //startPos = obj.position;

        elapsedTime = 0;
        //yield return wait;
        while (elapsedTime < _moveDuration / 3f)
        {
            t = elapsedTime / _moveDuration;
            obj.position = Vector3.Lerp(obj.position, target, t);
            elapsedTime += Time.deltaTime;
            yield return null;
            if (Vector2.Distance(obj.position, target) < 0.01f)
            {
                break;
            }
        }

        if (isCoin)
        {
            PlayCoinFxAtPosition(target);

            // UIManager.Ins.coinUI.transform.DORestart();
            // UIManager.Ins.coinUI.transform.DOScale(toptopOGScale * 1.1f, 0.1f).SetEase(Ease.OutQuad).OnComplete(() =>
            //     UIManager.Ins.coinUI.transform.DOScale(toptopOGScale * 0.9f, 0.1f).SetEase(Ease.OutBounce).OnComplete(() =>
            //     UIManager.Ins.coinUI.transform.DOScale(toptopOGScale * 1, 0.1f).SetEase(Ease.OutBounce)));

            //SoundManager.Ins.PlaySFX(SFX.SFX_COIN, SoundManager.SFXType.Minor);
        }


        obj.position = target;
        if (isCoin)
        {
            if (isUpdateCoin)
            {
                // UIManager.Ins.coinUI.UpdateCoinText(VariableSystem.StoreCoin, coinTextDuration - 0.12f);
            }
            else
            {
                //SaveManager.instance.ChangeCoinVisualOverTime();
            }
        }
        LeanPool.Despawn(obj.gameObject);
    }

    public void PlayCoinFxAtPosition(Vector3 position)
    {
        //PlayEffect(ParticleEffectType.CoinCollect, position);
    }
    [Button]
    public void DoArcMove(RectTransform target, Vector2 endPos, float duration, float height, System.Action onComplete = null)
    {

        Vector2 startPos = Vector2.zero;
        target.anchoredPosition = startPos;

        float time = 0f;

        DOVirtual.DelayedCall(0.05f, () =>
        {
            DOTween.To(() => time, x => time = x, 1f, duration)
                .SetEase(Ease.InQuad)
                .OnUpdate(() =>
                {
                    Vector2 pos = Vector2.Lerp(startPos, endPos, time);

                    float arc = height * 4 * (time - time * time);
                    pos.y += arc;

                    target.anchoredPosition = pos;
                })
                .OnComplete(() =>
                {
                    onComplete?.Invoke();
                });

            target.DORotate(new Vector3(0, 0, 360), duration, RotateMode.FastBeyond360)
                .SetEase(Ease.Linear);

            target.DOScale(Vector3.one * 0.9f, duration)
                .SetEase(Ease.OutBack);
        });
    }
}