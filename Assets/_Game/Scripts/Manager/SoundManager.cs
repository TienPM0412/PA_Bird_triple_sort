using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundManager : Singleton<SoundManager>
{
    [Header("Audio Sources")]
    [SerializeField] private AudioSource musicSource;
    [SerializeField, Range(0f, 1f), Tooltip("Ingame music volume multiplier during win/lose and revive popups.")]
    private float resultMusicVolumeMultiplier = 0.25f;
    [SerializeField, Range(0f, 1f)] private float ingameMusicVolume = 0.5f;
    public float IngameMusicVolume => ingameMusicVolume;

    private float musicBaseVolume = 1f;

    [SerializeField] private Transform parentSFX;
    [SerializeField] private int poolSize = 5;

    private Queue<AudioSource> sfxPool = new Queue<AudioSource>();
    private Dictionary<string, float> lastSFXPlayTime = new Dictionary<string, float>();
    private const float SFX_DUPLICATE_DELAY = 0.1f;

    private const float SFX_COALESCE_WINDOW = 0.1f;
    private Dictionary<string, float> lastCoalescedPlayTime = new Dictionary<string, float>();

    [SerializeField] private int maxLoopingPerClip = 10;
    private Dictionary<string, int> loopingCount = new Dictionary<string, int>();

    [Header("Audio Clips")]
    [SerializeField] private List<AudioClip> musicClips;
    [SerializeField] private List<AudioClip> sfxClips;

    private Dictionary<string, AudioClip> musicDict;
    private Dictionary<string, AudioClip> sfxDict;

    [SerializeField] private float importantVolume = 1f;
    [SerializeField] private float normalVolume = 0.7f;
    [SerializeField] private float minorVolume = 0.2f;
    [SerializeField] private float smallVolume = 0.1f;

    private const string MUSIC_KEY = "music_on";
    private const string SFX_KEY = "sfx_on";

    public enum SFXType
    {
        Important,
        Normal,
        Minor,
        Small,
    }


    protected void Awake()
    {
        Init();
        InitPool();
        LoadSettings();
    }
    void LoadSettings()
    {
        musicSource.mute = !VariableSystem.Music;
    }

    void Init()
    {
        musicDict = new Dictionary<string, AudioClip>();
        foreach (var clip in musicClips)
        {
            if (clip == null) continue;

            if (!musicDict.ContainsKey(clip.name))
                musicDict.Add(clip.name, clip);
        }

        sfxDict = new Dictionary<string, AudioClip>();
        foreach (var clip in sfxClips)
        {
            if (clip == null) continue;

            if (!sfxDict.ContainsKey(clip.name))
                sfxDict.Add(clip.name, clip);
        }
    }

    void InitPool()
    {
        for (int i = 0; i < poolSize; i++)
        {
            AudioSource source = CreateNewSource();
            source.gameObject.SetActive(false);
            sfxPool.Enqueue(source);
        }
    }
    AudioSource CreateNewSource()
    {
        GameObject go = new GameObject("SFX_Audio");
        go.transform.SetParent(parentSFX);

        AudioSource source = go.AddComponent<AudioSource>();

        // setup mặc định
        source.playOnAwake = false;
        source.loop = false;
        source.spatialBlend = 0f; // 2D sound
        source.volume = 1f;

        return source;
    }

    AudioSource GetSFXSource()
    {
        if (sfxPool.Count > 0)
            return sfxPool.Dequeue();

        return CreateNewSource(); // fallback
    }

    void ReturnToPool(AudioSource source)
    {
        source.Stop();
        source.clip = null;
        source.pitch = 1f;
        source.gameObject.SetActive(false);
        sfxPool.Enqueue(source);
    }

    #region MUSIC
    public void PlayMusic(string clipName, float volume = 1f, bool loop = true)
    {
        if (!musicDict.TryGetValue(clipName, out var clip)) return;

        // Reset result volume even while muted, so enabling music in the next level restores it.
        musicBaseVolume = Mathf.Clamp01(volume);
        musicSource.volume = musicBaseVolume;
        if (!VariableSystem.Music) return;

        musicSource.clip = clip;
        musicSource.loop = loop;
        musicSource.Play();

    }

    public void SetIngameMusicReduced(bool reduced)
    {
        if (musicSource.clip == null || musicSource.clip.name != Music.MUSIC_INGAME) return;

        musicSource.volume = musicBaseVolume * (reduced ? resultMusicVolumeMultiplier : 1f);
    }

    public void StopMusic()
    {
        musicSource.Stop();
    }

    public void PauseMusic()
    {
        musicSource.Pause();
    }

    public void ResumeMusic()
    {
        musicSource.UnPause();
    }

    public void ToggleMusic()
    {
        VariableSystem.Music = !VariableSystem.Music;
        musicSource.mute = !VariableSystem.Music;
    }
    #endregion

    #region SFX
    public void PlaySFX(string clipName, SFXType type = SFXType.Minor, float pitch = 1f)
    {
        PlaySFXImmediate(clipName, GetVolumeByType(type), pitch);
    }

    public void PlaySFX(string clipName, float volume, float pitch = 1f)
    {
        PlaySFXScheduled(clipName, volume, pitch);
    }

    public void PlaySFXOnce(string clipName, SFXType type = SFXType.Normal)
    {
        if (!VariableSystem.Sound) return;

        if (lastCoalescedPlayTime.TryGetValue(clipName, out float lastTime)
            && Time.time - lastTime < SFX_COALESCE_WINDOW)
            return;

        lastCoalescedPlayTime[clipName] = Time.time;
        PlaySFXScheduled(clipName, GetVolumeByType(type), 1f);
    }

    public void PlaySFXwithPitch(string clipName, float volume, float pitch = 1f)
    {
        PlaySFXScheduled(clipName, volume, pitch);
    }

    public void PlaySFXwithPitch(string clipName, SFXType type = SFXType.Normal, float pitch = 1f)
    {
        PlaySFXScheduled(clipName, GetVolumeByType(type), pitch);
    }

    private float GetVolumeByType(SFXType type)
    {
        switch (type)
        {
            case SFXType.Important: return importantVolume;
            case SFXType.Normal: return normalVolume;
            case SFXType.Minor: return minorVolume;
            case SFXType.Small: return smallVolume;
            default: return 1f;
        }
    }

    public AudioSource PlayLoopingSFX(string clipName, float volume = 1f)
    {
        if (!VariableSystem.Sound) return null;
        if (!sfxDict.TryGetValue(clipName, out var clip)) return null;

        loopingCount.TryGetValue(clipName, out int active);
        if (active >= maxLoopingPerClip) return null;
        loopingCount[clipName] = active + 1;

        AudioSource source = GetSFXSource();
        source.gameObject.name = "SFX_Loop_" + clipName;
        source.gameObject.SetActive(true);
        source.clip = clip;
        source.volume = volume;
        //source.pitch = 1f;
        source.loop = true;
        source.Play();
        return source;
    }

    public void StopLoopingSFX(AudioSource source)
    {
        if (source == null) return;
        if (source.clip != null && loopingCount.TryGetValue(source.clip.name, out int active))
            loopingCount[source.clip.name] = Mathf.Max(0, active - 1);
        source.loop = false;
        ReturnToPool(source);
    }

    // Nếu cùng 1 clip vừa được phát cách đây < SFX_DUPLICATE_DELAY thì bỏ qua lần phát này
    // (không phát trễ nữa), tránh chồng âm khi bắn nhiều SFX cùng lúc.
    private void PlaySFXScheduled(string clipName, float volume, float pitch)
    {
        if (!VariableSystem.Sound) return;
        if (!sfxDict.ContainsKey(clipName)) return;

        if (lastSFXPlayTime.TryGetValue(clipName, out var lastTime)
            && Time.time - lastTime < SFX_DUPLICATE_DELAY)
            return;

        lastSFXPlayTime[clipName] = Time.time;
        PlaySFXImmediate(clipName, volume, pitch);
    }

    private void PlaySFXImmediate(string clipName, float volume, float pitch)
    {
        if (!VariableSystem.Sound) return;
        if (!sfxDict.TryGetValue(clipName, out var clip)) return;

        AudioSource source = GetSFXSource();
        source.gameObject.name = "SFX_" + clipName;
        source.gameObject.SetActive(true);

        source.clip = clip;
        source.volume = volume;
        source.pitch = pitch;

        source.Play();

        StartCoroutine(ReturnAfterPlay(source));
    }

    IEnumerator ReturnAfterPlay(AudioSource source)
    {
        // Chia cho pitch vì pitch thay đổi tốc độ phát: pitch < 1 kéo dài thời lượng thực tế,
        // nếu không tính sẽ bị ReturnToPool() gọi Stop() cắt ngang trước khi phát xong.
        float duration = source.clip.length / Mathf.Max(0.01f, Mathf.Abs(source.pitch));
        yield return new WaitForSeconds(duration);
        ReturnToPool(source);
    }

    public void ToggleSFX()
    {
        VariableSystem.Sound = !VariableSystem.Sound;

        foreach (var source in parentSFX.GetComponentsInChildren<AudioSource>(true))
        {
            source.mute = !VariableSystem.Sound;
        }
    }
    #endregion
}
