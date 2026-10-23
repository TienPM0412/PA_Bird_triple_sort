using System;
using DG.Tweening;
using Lean.Pool;
using UnityEngine;

public class ParticlesBase : MonoBehaviour
{
    [SerializeField] private ParticleEffectType effectType;
    [SerializeField] private ParticleSystem particles;
    public ParticleEffectType EffectType => effectType;
    public ParticleSystem Particles => particles;

    [SerializeField] private ParticleSystem[] allParticles;
    public ParticleSystem[] AllParticles => allParticles;

    void Reset()
    {
        particles = GetComponentInChildren<ParticleSystem>();
        allParticles = GetComponentsInChildren<ParticleSystem>();
    }

#if UNITY_EDITOR
    // Chỉ chạy trong Editor; Playworks không có ParticleSystem.MainModule.stopAction.
    void OnValidate()
    {
        particles = GetComponentInChildren<ParticleSystem>();
        allParticles = GetComponentsInChildren<ParticleSystem>();

        var main = particles.main;
        main.stopAction = ParticleSystemStopAction.Callback;
    }
#endif

    public void Play()
    {
        // Field có thể null trên Playworks (prefab variant) nên lấy lại từ GameObject.
        if (particles == null) particles = GetComponentInChildren<ParticleSystem>();
        if (particles != null) particles.Play();
    }

    public void MoveTo([Bridge.Ref] Vector3 target, float duration, Action onComplete = null)
    {
        transform.DOJump(target, 0.2f, 1, duration).OnComplete(() =>
        {
            onComplete?.Invoke();
            DeSpawn();
        });
    }

    public void DeSpawn()
    {
        LeanPool.Despawn(gameObject);
    }

    void OnParticleSystemStopped()
    {
        DeSpawn();
    }
}