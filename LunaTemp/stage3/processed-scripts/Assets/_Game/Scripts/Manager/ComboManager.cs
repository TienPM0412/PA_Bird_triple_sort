using System;
using System.Collections;
using UnityEngine;

public class ComboManager : Singleton<ComboManager>
{
    [SerializeField, Min(0.1f)] private float comboTime = 8f;

    private static readonly string[] ComboSfx =
    {
        SoundFX.Pop_Prize_1,
        SoundFX.Pop_Prize_2,
        SoundFX.Pop_Prize_3,
        SoundFX.Pop_Prize_4,
        SoundFX.Pop_Prize_5,
    };

    public Action<int> OnComboUp;
    public Action<float> OnTimerUpdate;
    public Action OnTimerComplete;

    public int ComboCount { get; private set; }

    private Coroutine comboCoroutine;

    private void OnEnable()
    {
        EventManager.AddListener<OnDockMatchedEvent>(OnDockMatchedEventCallBack);
    }

    private void OnDisable()
    {
        EventManager.RemoveListener<OnDockMatchedEvent>(OnDockMatchedEventCallBack);
    }

    private void OnDockMatchedEventCallBack([Bridge.Ref] OnDockMatchedEvent obj)
    {
        AddCombo(obj.dock.transform.position);
    }

    public void ResetCombo()
    {
        ComboCount = 0;
        StopCountdown();
    }

    public void AddCombo([Bridge.Ref] Vector3 position)
    {
        ComboCount++;
        PlayComboSfx();
        OnComboUp?.Invoke(ComboCount);

        // The first match is not a combo yet: effect starts from combo 2.
        if (ComboCount >= 2)
        {
            int RandomId = UnityEngine.Random.Range(100, 106);
            ParticlesManager.Ins.PlayEffect((ParticleEffectType)RandomId, position);
        }

        StopCountdown();
        comboCoroutine = StartCoroutine(CountdownCombo());
    }

    private void PlayComboSfx()
    {
        // Combo 1..5 plays Pop Prize 1..5; higher combos keep the last one.

        int index = Mathf.Min(ComboCount, ComboSfx.Length) - 1;
        SoundManager.Ins.PlaySFXwithPitch(ComboSfx[index], SoundManager.SFXType.Minor);
    }

    private void StopCountdown()
    {
        if (comboCoroutine != null)
        {
            StopCoroutine(comboCoroutine);
            comboCoroutine = null;
        }
    }

    private IEnumerator CountdownCombo()
    {
        float remaining = comboTime;
        while (remaining > 0f)
        {
            remaining -= Time.deltaTime;
            OnTimerUpdate?.Invoke(Mathf.Max(0f, remaining / comboTime));
            yield return null;
        }

        ComboCount = 0;
        comboCoroutine = null;
        OnTimerComplete?.Invoke();
    }
}
