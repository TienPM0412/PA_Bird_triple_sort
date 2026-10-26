using System;
using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// Plays the Color Bird logo (intro -> idle loop -> outro) from layer sprites and 60 fps tracks.
/// Put it on an empty GameObject under a Canvas, then call Play() and, when leaving, PlayOutro().
/// Scale the GameObject to resize the whole logo.
/// </summary>
[RequireComponent(typeof(RectTransform))]
public class ColorBirdLogoAnimator : MonoBehaviour
{
    const string Folder = "ColorBirdLogo/";

    [Serializable] class LayerInfo { public string name, sprite; public float x, y, w, h, px, py; }
    [Serializable] class Track { public float[] d; }
    [Serializable] class Phase { public string name; public int frames; public bool loop; public Track[] tracks; }
    [Serializable] class LogoData { public int fps; public float width, height; public LayerInfo[] layers; public Phase[] phases; }

    enum State { Stopped, Intro, Idle, Outro }

    [Tooltip("Start the intro automatically when the object is enabled.")]
    public bool playOnEnable = true;
    [Tooltip("Ignore Time.timeScale (use this if the Win screen runs while the game is paused/slowed).")]
    public bool useUnscaledTime = true;
    [Tooltip("Off = no idle loop: after the intro the logo holds its final pose until PlayOutro() is called.")]
    public bool playIdle = true;
    [Tooltip("On = skip the intro, show the logo and start the idle loop right away.")]
    public bool skipIntro = false;
    [Tooltip("Loop: intro -> idle for loopHoldTime -> outro -> intro ... until PlayOutro() is called or the object is disabled.")]
    public bool loopIntroOutro = false;
    [Min(0f)] public float loopHoldTime = 1f;
    public float speed = 1f;

    // Playworks không xuất thư mục Resources nên phải tham chiếu trực tiếp; bấm "Auto Fill From Resources" để điền.
    [Header("Assets (tham chiếu trực tiếp để Playworks đóng gói)")]
    [SerializeField] TextAsset animJson;
    [SerializeField] Sprite[] layerSprites;

    LogoData data;
    RectTransform[] nodes;
    Image[] images;
    State state = State.Stopped;
    float t;
    float idleTime;
    bool autoOutro; // outro started by the loop -> restart the intro when it ends
    Action onOutroDone;

    public bool IsIntroPlaying => state == State.Intro;

    Phase PhaseOf(string n) { foreach (var p in data.phases) if (p.name == n) return p; return null; }

    void Build()
    {
        if (data != null) return;
        var json = animJson;
#if UNITY_EDITOR
        // Chưa Auto Fill thì Editor vẫn chạy được nhờ Resources; bản Playworks bắt buộc phải gán animJson.
        if (json == null) json = Resources.Load<TextAsset>(Folder + "logo_anim");
#endif
        if (json == null) { Debug.LogError("ColorBirdLogo: chưa gán animJson (logo_anim.json) - bấm Auto Fill From Resources", this); return; }
        // Playworks không hỗ trợ JsonUtility nên đọc bằng SimpleJson.
        data = ParseLogoData(json.text);

        var root = (RectTransform)transform;
        int n = data.layers.Length;
        nodes = new RectTransform[n];
        images = new Image[n];
        for (int i = 0; i < n; i++)
        {
            var li = data.layers[i];
            // AddComponent từng cái thay cho new GameObject(name, typeof(...)) để chắc chạy trên Playworks.
            var go = new GameObject(li.name);
            var rt = go.AddComponent<RectTransform>();
            rt.SetParent(root, false);
            rt.anchorMin = rt.anchorMax = new Vector2(0.5f, 0.5f);
            rt.sizeDelta = new Vector2(li.w, li.h);
            rt.pivot = new Vector2(li.px / li.w, 1f - li.py / li.h);
            var img = go.AddComponent<Image>();
            img.sprite = FindSprite(li.sprite);
            if (img.sprite == null) Debug.LogWarning("ColorBirdLogo: thiếu sprite '" + li.sprite + "' trong layerSprites", this);
            img.raycastTarget = false;
            nodes[i] = rt; images[i] = img;
        }
        Hide();
    }

    Sprite FindSprite(string spriteName)
    {
        if (layerSprites != null)
        {
            for (int i = 0; i < layerSprites.Length; i++)
            {
                if (layerSprites[i] != null && layerSprites[i].name == spriteName) return layerSprites[i];
            }
        }
#if UNITY_EDITOR
        return Resources.Load<Sprite>(Folder + spriteName);
#else
        return null;
#endif
    }

#if UNITY_EDITOR
    [ContextMenu("Auto Fill From Resources")]
    void AutoFillFromResources()
    {
        animJson = Resources.Load<TextAsset>(Folder + "logo_anim");
        layerSprites = Resources.LoadAll<Sprite>(Folder.TrimEnd('/'));
        UnityEditor.EditorUtility.SetDirty(this);
        Debug.Log("ColorBirdLogo: Auto Fill xong - animJson=" + (animJson != null ? animJson.name : "null") + ", sprites=" + layerSprites.Length, this);
    }
#endif

    static LogoData ParseLogoData(string text)
    {
        var root = (System.Collections.Generic.Dictionary<string, object>)SimpleJson.Parse(text);
        var result = new LogoData
        {
            fps = SimpleJson.GetInt(root, "fps"),
            width = SimpleJson.GetFloat(root, "width"),
            height = SimpleJson.GetFloat(root, "height"),
        };

        var layers = SimpleJson.GetObjectArray(root, "layers");
        result.layers = new LayerInfo[layers.Count];
        for (int i = 0; i < layers.Count; i++)
        {
            var l = layers[i];
            result.layers[i] = new LayerInfo
            {
                name = SimpleJson.GetString(l, "name"),
                sprite = SimpleJson.GetString(l, "sprite"),
                x = SimpleJson.GetFloat(l, "x"),
                y = SimpleJson.GetFloat(l, "y"),
                w = SimpleJson.GetFloat(l, "w"),
                h = SimpleJson.GetFloat(l, "h"),
                px = SimpleJson.GetFloat(l, "px"),
                py = SimpleJson.GetFloat(l, "py"),
            };
        }

        var phases = SimpleJson.GetObjectArray(root, "phases");
        result.phases = new Phase[phases.Count];
        for (int i = 0; i < phases.Count; i++)
        {
            var p = phases[i];
            var tracks = SimpleJson.GetObjectArray(p, "tracks");
            var phase = new Phase
            {
                name = SimpleJson.GetString(p, "name"),
                frames = SimpleJson.GetInt(p, "frames"),
                loop = SimpleJson.GetBool(p, "loop"),
                tracks = new Track[tracks.Count],
            };
            for (int k = 0; k < tracks.Count; k++)
            {
                phase.tracks[k] = new Track { d = SimpleJson.GetFloatArray(tracks[k], "d") };
            }
            result.phases[i] = phase;
        }

        return result;
    }

    void Hide()
    {
        if (images == null) return;
        foreach (var im in images) { var c = im.color; c.a = 0f; im.color = c; }
    }

    void OnEnable() { Build(); if (playOnEnable) Play(); }

    /// <summary>Intro, then idle forever (or straight to idle when skipIntro is on).</summary>
    public void Play()
    {
        Build();
        if (data == null) return;
        t = 0f;
        idleTime = 0f;
        autoOutro = false;
        onOutroDone = null;
        if (skipIntro)
        {
            state = State.Idle;
            Apply(PhaseOf("idle"), 0f);
            return;
        }
        state = State.Intro;
        Apply(PhaseOf("intro"), 0f);
    }

    /// <summary>Plays the outro from wherever the idle currently is, then calls onDone.</summary>
    public void PlayOutro(Action onDone = null)
    {
        if (data == null) return;
        if (state == State.Outro)
        {
            // Already in a loop outro: finish it as the real outro instead of looping again.
            if (autoOutro) { autoOutro = false; onOutroDone = onDone; }
            return;
        }
        autoOutro = false;
        state = State.Outro; t = 0f; onOutroDone = onDone;
    }

    void Update() { Tick((useUnscaledTime ? Time.unscaledDeltaTime : Time.deltaTime) * speed); }

    /// <summary>Advances the animation by dt seconds (called every frame by Update).</summary>
    public void Tick(float dt)
    {
        if (state == State.Stopped || data == null) return;
        t += dt;

        if (state == State.Intro)
        {
            var p = PhaseOf("intro");
            float len = p.frames / (float)data.fps;
            if (t >= len)
            {
                if (!playIdle && !loopIntroOutro) { Apply(p, p.frames - 1); t = len; return; }
                t -= len; state = State.Idle; idleTime = 0f;
            }
            else { Apply(p, t * data.fps); return; }
        }
        if (state == State.Idle)
        {
            idleTime += dt;
            if (loopIntroOutro && idleTime >= loopHoldTime)
            {
                state = State.Outro; t = 0f; autoOutro = true;
                return;
            }
            var p = PhaseOf("idle");
            float len = p.frames / (float)data.fps;
            t %= len;
            Apply(p, t * data.fps);
            return;
        }
        if (state == State.Outro)
        {
            var p = PhaseOf("outro");
            float len = p.frames / (float)data.fps;
            if (t >= len)
            {
                if (autoOutro) { Play(); return; } // loop: back to the intro
                state = State.Stopped; Hide();
                var cb = onOutroDone; onOutroDone = null; cb?.Invoke();
                return;
            }
            Apply(p, t * data.fps);
        }
    }

    // Track layout per frame: sx, sy, rot(deg, clockwise), dx, dy (pixels, y down), alpha
    void Apply(Phase p, float f)
    {
        int i0 = Mathf.FloorToInt(f);
        float k = f - i0;
        int i1 = i0 + 1;
        if (p.loop) { i0 %= p.frames; i1 %= p.frames; }
        else { i0 = Mathf.Min(i0, p.frames - 1); i1 = Mathf.Min(i1, p.frames - 1); }

        for (int i = 0; i < nodes.Length; i++)
        {
            var d = p.tracks[i].d;
            int a = i0 * 6, b = i1 * 6;
            float sx = Mathf.Lerp(d[a], d[b], k);
            float sy = Mathf.Lerp(d[a + 1], d[b + 1], k);
            float rot = Mathf.Lerp(d[a + 2], d[b + 2], k);
            float dx = Mathf.Lerp(d[a + 3], d[b + 3], k);
            float dy = Mathf.Lerp(d[a + 4], d[b + 4], k);
            float al = Mathf.Lerp(d[a + 5], d[b + 5], k);

            var li = data.layers[i];
            var rt = nodes[i];
            rt.anchoredPosition = new Vector2(li.x + li.px + dx - data.width * 0.5f,
                                              -(li.y + li.py + dy - data.height * 0.5f));
            rt.localScale = new Vector3(sx, sy, 1f);
            rt.localEulerAngles = new Vector3(0f, 0f, -rot);
            var c = images[i].color; c.a = al; images[i].color = c;
        }
    }
}
