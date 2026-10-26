using System;
using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// Slingshot booster: pull the band, release, the stone spins away on a lobbed arc and lands on a target.
/// Put it on an empty GameObject under a Canvas. Tilt / scale the GameObject however you like.
/// Call Fire(...) or FireAt(...). The stone is driven by code, so it can be sent to any point.
/// </summary>
[RequireComponent(typeof(RectTransform))]
public class SlingshotAnimator : MonoBehaviour
{
    const string Folder = "SlingshotShot/";

    [Serializable]
    class LayerInfo
    {
        public string name, type, sprite;
        public float x, y, w, h, px, py;
        public int frames;
        public float[] d;                   // rigid layers: per frame sx, sy, rot(deg cw), tx, ty
    }
    [Serializable] class StoneInfo { public float cx, cy; }
    [Serializable]
    class SlingData
    {
        public int fps, frames; public float width, height, tRelease, pocketHz;
        public StoneInfo stone; public float[] pocket; public LayerInfo[] layers;
    }

    [Tooltip("Ignore Time.timeScale (use this if the screen runs while the game is paused/slowed).")]
    public bool useUnscaledTime = true;
    public float speed = 1f;
    [Tooltip("Seconds the stone takes from leaving the pouch to landing.")]
    public float flightTime = 0.42f;
    [Tooltip("Seconds after landing before a new stone pops into the pouch.")]
    public float reloadDelay = 0.12f;

    // Playworks không xuất thư mục Resources nên phải tham chiếu trực tiếp; bấm "Auto Fill From Resources" để điền.
    [Header("Assets (tham chiếu trực tiếp để Playworks đóng gói)")]
    [SerializeField] TextAsset animJson;
    [SerializeField] Sprite[] sprites;

    // fixed by the animation: the stone rides the snapping pouch until it passes its rest point, then flies
    const float RideTime = 1f / 24f;       // after release
    const float BehindLip = 0.07f;         // stays behind the pouch's front lip this long after leaving it
    const float HookLift = 1.063f, HookW = 1.916f;   // y overshoots the target ~6% then drops onto it

    SlingData data;
    RectTransform[] nodes;
    Image[] images;
    Sprite[][] seq;                         // baked frames for the stretchy straps
    Image stoneImg;
    RectTransform stoneRoot, stoneChild;
    int stoneIndex;

    bool shooting;
    float t;
    Vector2 targetPsd;                      // target in sling "design" units (y down)
    bool hit, finished, flying;
    Action onHit, onFinished;
    Vector2 flightStart;

    void Awake() { Build(); }
    void OnEnable() { Build(); ResetPose(); }

    void Build()
    {
        if (data != null) return;
        var json = animJson;
#if UNITY_EDITOR
        // Chưa Auto Fill thì Editor vẫn chạy được nhờ Resources; bản Playworks bắt buộc phải gán animJson.
        if (json == null) json = Resources.Load<TextAsset>(Folder + "sling_anim");
#endif
        if (json == null) { Debug.LogError("SlingshotShot: chưa gán animJson (sling_anim.json) - bấm Auto Fill From Resources", this); return; }
        // Playworks không hỗ trợ JsonUtility nên đọc bằng SimpleJson.
        data = ParseSlingData(json.text);

        var root = (RectTransform)transform;
        root.pivot = new Vector2(0.5f, 0.5f);
        root.sizeDelta = new Vector2(data.width, data.height);

        int n = data.layers.Length;
        nodes = new RectTransform[n]; images = new Image[n]; seq = new Sprite[n][];
        for (int i = 0; i < n; i++)
        {
            var li = data.layers[i];
            if (li.type == "stone") { BuildStone(li); stoneIndex = i; continue; }
            // AddComponent từng cái thay cho new GameObject(name, typeof(...)) để chắc chạy trên Playworks.
            var go = new GameObject(li.name);
            var rt = go.AddComponent<RectTransform>();
            rt.SetParent(root, false);
            rt.anchorMin = rt.anchorMax = new Vector2(0.5f, 0.5f);
            rt.sizeDelta = new Vector2(li.w, li.h);
            var im = go.AddComponent<Image>(); im.raycastTarget = false;
            if (li.type == "rigid")
            {
                rt.pivot = new Vector2((li.px - li.x) / li.w, 1f - (li.py - li.y) / li.h);
                im.sprite = FindSprite(li.sprite);
            }
            else   // seq
            {
                rt.pivot = new Vector2(0.5f, 0.5f);
                rt.anchoredPosition = new Vector2(li.x + li.w * 0.5f - data.width * 0.5f, -(li.y + li.h * 0.5f - data.height * 0.5f));
                seq[i] = new Sprite[li.frames];
                for (int f = 0; f < li.frames; f++) seq[i][f] = FindSprite(li.sprite + "_" + f.ToString("D3"));
                im.sprite = seq[i][0];
            }
            nodes[i] = rt; images[i] = im;
        }
    }

    // stone: root (aim direction + stretch) > child (spin)
    void BuildStone(LayerInfo li)
    {
        var sr = new GameObject("Stone");
        stoneRoot = sr.AddComponent<RectTransform>(); stoneRoot.SetParent(transform, false);
        stoneRoot.anchorMin = stoneRoot.anchorMax = stoneRoot.pivot = new Vector2(0.5f, 0.5f);
        stoneRoot.sizeDelta = new Vector2(li.w, li.h);
        var sc = new GameObject("Spin");
        stoneChild = sc.AddComponent<RectTransform>(); stoneChild.SetParent(stoneRoot, false);
        stoneChild.anchorMin = stoneChild.anchorMax = stoneChild.pivot = new Vector2(0.5f, 0.5f);
        stoneChild.sizeDelta = new Vector2(li.w, li.h);
        stoneChild.anchoredPosition = Vector2.zero;
        stoneImg = sc.AddComponent<Image>();
        stoneImg.sprite = FindSprite(li.sprite); stoneImg.raycastTarget = false;
    }

    Sprite FindSprite(string spriteName)
    {
        if (sprites != null)
        {
            for (int i = 0; i < sprites.Length; i++)
            {
                if (sprites[i] != null && sprites[i].name == spriteName) return sprites[i];
            }
        }
#if UNITY_EDITOR
        return Resources.Load<Sprite>(Folder + spriteName);
#else
        Debug.LogWarning("SlingshotShot: thiếu sprite '" + spriteName + "' trong sprites", this);
        return null;
#endif
    }

#if UNITY_EDITOR
    [ContextMenu("Auto Fill From Resources")]
    void AutoFillFromResources()
    {
        animJson = Resources.Load<TextAsset>(Folder + "sling_anim");
        sprites = Resources.LoadAll<Sprite>(Folder.TrimEnd('/'));
        UnityEditor.EditorUtility.SetDirty(this);
        Debug.Log("SlingshotShot: Auto Fill xong - animJson=" + (animJson != null ? animJson.name : "null") + ", sprites=" + sprites.Length, this);
    }
#endif

    static SlingData ParseSlingData(string text)
    {
        var root = (System.Collections.Generic.Dictionary<string, object>)SimpleJson.Parse(text);
        var result = new SlingData
        {
            fps = SimpleJson.GetInt(root, "fps"),
            frames = SimpleJson.GetInt(root, "frames"),
            width = SimpleJson.GetFloat(root, "width"),
            height = SimpleJson.GetFloat(root, "height"),
            tRelease = SimpleJson.GetFloat(root, "tRelease"),
            pocketHz = SimpleJson.GetFloat(root, "pocketHz"),
            pocket = SimpleJson.GetFloatArray(root, "pocket"),
        };

        var stone = SimpleJson.GetObject(root, "stone");
        result.stone = new StoneInfo
        {
            cx = stone != null ? SimpleJson.GetFloat(stone, "cx") : 0f,
            cy = stone != null ? SimpleJson.GetFloat(stone, "cy") : 0f,
        };

        var layers = SimpleJson.GetObjectArray(root, "layers");
        result.layers = new LayerInfo[layers.Count];
        for (int i = 0; i < layers.Count; i++)
        {
            var l = layers[i];
            result.layers[i] = new LayerInfo
            {
                name = SimpleJson.GetString(l, "name"),
                type = SimpleJson.GetString(l, "type"),
                sprite = SimpleJson.GetString(l, "sprite"),
                x = SimpleJson.GetFloat(l, "x"),
                y = SimpleJson.GetFloat(l, "y"),
                w = SimpleJson.GetFloat(l, "w"),
                h = SimpleJson.GetFloat(l, "h"),
                px = SimpleJson.GetFloat(l, "px"),
                py = SimpleJson.GetFloat(l, "py"),
                frames = SimpleJson.GetInt(l, "frames"),
                d = SimpleJson.GetFloatArray(l, "d"),
            };
        }

        return result;
    }

    /// <summary>Back to the loaded pose (band at rest, stone in the pouch).</summary>
    public void ResetPose()
    {
        if (data == null) return;
        shooting = false; t = 0f; hit = finished = flying = false;
        ShowFrame(0f);
        stoneRoot.SetSiblingIndex(stoneIndex);
        PlaceStone(PsdToLocal(new Vector2(data.stone.cx, data.stone.cy + Pocket(0f))), 1f, 0f, 1f, 0f, 1f);
    }

    /// <summary>Shoot at a point given in this object's local space (units = design pixels, y up, origin = centre).</summary>
    public void Fire(Vector2 targetLocal, Action onHit = null, Action onFinished = null)
    {
        Build();
        if (data == null || shooting) return;
        targetPsd = new Vector2(targetLocal.x + data.width * 0.5f, -targetLocal.y + data.height * 0.5f);
        this.onHit = onHit; this.onFinished = onFinished;
        shooting = true; hit = finished = flying = false; t = 0f;
    }

    /// <summary>Shoot at another RectTransform (any canvas / any tilt of this object).</summary>
    public void FireAt(RectTransform target, Action onHit = null, Action onFinished = null)
    {
        Vector3 p = transform.InverseTransformPoint(target.position);
        Fire(new Vector2(p.x, p.y), onHit, onFinished);
    }

    void Update() { Tick((useUnscaledTime ? Time.unscaledDeltaTime : Time.deltaTime) * speed); }

    /// <summary>Advances the animation by dt seconds (called every frame by Update).</summary>
    public void Tick(float dt)
    {
        if (!shooting || data == null) return;
        t += dt;

        ShowFrame(t * data.fps);

        float tLeave = data.tRelease + RideTime;
        if (t < tLeave)                                   // pulled, held, then riding the snapping pouch
        {
            PlaceStone(PsdToLocal(new Vector2(data.stone.cx, data.stone.cy + Pocket(t))), 1f, 0f, 1f, 0f, 1f);
            return;
        }

        float t0 = t - tLeave;
        if (!flying)
        {
            flying = true;
            flightStart = new Vector2(data.stone.cx, data.stone.cy + Pocket(tLeave));
        }
        if (t0 < flightTime)
        {
            float u = t0 / flightTime;
            float pe = 1f - Mathf.Pow(1f - u, 2.6f);
            Vector2 d = targetPsd - flightStart;
            var c = new Vector2(flightStart.x + d.x * Mathf.Pow(pe, 3.5f),
                                flightStart.y + d.y * HookLift * Mathf.Sin(HookW * pe));
            float s = Mathf.Lerp(1f, 0.7f, pe);
            float rot = 720f * (1f - Mathf.Pow(1f - u, 1.6f)) * Smooth(u / 0.08f);
            float st = 1f + 0.45f * Smooth(t0 / 0.03f) * (1f - Smooth((t0 - 0.03f) / 0.10f));
            if (t0 >= BehindLip) stoneRoot.SetAsLastSibling();
            float ang = Mathf.Atan2(-d.y, d.x) * Mathf.Rad2Deg;
            PlaceStone(PsdToLocal(c), s, rot, st, ang, 1f);
            return;
        }

        if (!hit)
        {
            hit = true;
            SetStoneAlpha(0f);
            if (onHit != null) onHit();
        }

        float k = (t0 - flightTime - reloadDelay) / 0.26f;
        if (k > 0f)
        {
            stoneRoot.SetSiblingIndex(stoneIndex);
            float s = Spring(k, 1.9f, 5.5f);
            PlaceStone(PsdToLocal(new Vector2(data.stone.cx, data.stone.cy + Pocket(t))), s, 0f, 1f, 0f, Mathf.Clamp01(k * 6f));
        }
        if (k >= 1f && !finished)
        {
            finished = true;
            var cb = onFinished;
            ResetPose();
            if (cb != null) cb();
        }
    }

    // ---------- helpers ----------
    // f = frame position (fractional): rigid parts interpolate their tracks, straps show the nearest baked frame
    void ShowFrame(float f)
    {
        int last = data.frames - 1;
        f = Mathf.Clamp(f, 0f, last);
        int i0 = Mathf.FloorToInt(f), i1 = Mathf.Min(i0 + 1, last);
        float k = f - i0;
        for (int i = 0; i < nodes.Length; i++)
        {
            var li = data.layers[i];
            if (li.type == "rigid")
            {
                var d = li.d; int a = i0 * 5, b = i1 * 5;
                float sx = Mathf.Lerp(d[a], d[b], k), sy = Mathf.Lerp(d[a + 1], d[b + 1], k);
                float rot = Mathf.Lerp(d[a + 2], d[b + 2], k);
                float tx = Mathf.Lerp(d[a + 3], d[b + 3], k), ty = Mathf.Lerp(d[a + 4], d[b + 4], k);
                nodes[i].anchoredPosition = new Vector2(li.px + tx - data.width * 0.5f, -(li.py + ty - data.height * 0.5f));
                nodes[i].localScale = new Vector3(sx, sy, 1f);
                nodes[i].localEulerAngles = new Vector3(0f, 0f, -rot);
            }
            else if (li.type == "seq")
            {
                images[i].sprite = seq[i][k > 0.5f ? i1 : i0];
            }
        }
    }

    Vector2 PsdToLocal(Vector2 p) { return new Vector2(p.x - data.width * 0.5f, -(p.y - data.height * 0.5f)); }

    void PlaceStone(Vector2 local, float scale, float spinCwDeg, float stretch, float angDeg, float alpha)
    {
        stoneRoot.anchoredPosition = local;
        stoneRoot.localEulerAngles = new Vector3(0f, 0f, angDeg);
        stoneRoot.localScale = new Vector3(scale * stretch, scale / Mathf.Sqrt(stretch), 1f);
        stoneChild.localEulerAngles = new Vector3(0f, 0f, -spinCwDeg - angDeg);
        SetStoneAlpha(alpha);
    }

    void SetStoneAlpha(float a) { var c = stoneImg.color; c.a = a; stoneImg.color = c; }

    float Pocket(float time)
    {
        float x = Mathf.Max(0f, time) * data.pocketHz;
        int i = Mathf.FloorToInt(x);
        int last = data.pocket.Length - 1;
        if (i >= last) return data.pocket[last];
        return Mathf.Lerp(data.pocket[i], data.pocket[i + 1], x - i);
    }

    static float Smooth(float x) { x = Mathf.Clamp01(x); return x * x * (3f - 2f * x); }

    static float Spring(float u, float f, float d)
    {
        if (u <= 0f) return 0f;
        if (u >= 1f) return 1f;
        return 1f - Mathf.Exp(-d * u) * Mathf.Cos(2f * Mathf.PI * f * u);
    }
}
