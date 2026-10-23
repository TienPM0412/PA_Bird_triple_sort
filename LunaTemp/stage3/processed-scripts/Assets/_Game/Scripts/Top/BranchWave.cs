using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// Song rung chay doc than canh khi bi da ban trung (dung shader Custom/SpriteBranchWave).
/// Cac la (slot) cuoi theo cung lan song: nang/ha va nghieng theo do doc tai vi tri cua la.
/// </summary>
[RequireComponent(typeof(SpriteRenderer))]
public class BranchWave : MonoBehaviour
{
    [SerializeField] private float amplitude = 0.07f;   // uv (theo chieu cao sprite)
    [SerializeField] private float speed = 3f;          // uv / giay
    [SerializeField] private float frequency = 27f;
    [SerializeField] private float damping = 8f;
    [SerializeField] private float falloff = 1f;
    [SerializeField, Tooltip("Nhan do nghieng cua la theo do doc song.")]
    private float riderTiltScale = 1f;

    private static readonly int HitU = Shader.PropertyToID("_HitU");
    private static readonly int WaveAge = Shader.PropertyToID("_WaveAge");
    private static readonly int Amp = Shader.PropertyToID("_Amp");
    private static readonly int Speed = Shader.PropertyToID("_Speed");
    private static readonly int Freq = Shader.PropertyToID("_Freq");
    private static readonly int Damp = Shader.PropertyToID("_Damp");
    private static readonly int Falloff = Shader.PropertyToID("_Falloff");

    private SpriteRenderer sr;
    private MaterialPropertyBlock mpb;
    private float hitU;
    private float age = -1f;
    private float duration;

    private readonly List<Transform> riders = new List<Transform>();
    private readonly List<Vector3> riderBasePos = new List<Vector3>();
    private readonly List<Quaternion> riderBaseRot = new List<Quaternion>();

    private void Awake()
    {
        sr = GetComponent<SpriteRenderer>();
        mpb = new MaterialPropertyBlock();
        Apply(-1f);
    }

    /// <summary>Phat song tai hitWorldPos; riders (cac la) cuoi theo song.</summary>
    public void Play([Bridge.Ref] Vector3 hitWorldPos, IEnumerable<Transform> riderTransforms)
    {
        RestoreRiders();

        Bounds b = sr.sprite.bounds;  // local space cua sprite
        Vector3 local = transform.InverseTransformPoint(hitWorldPos);
        hitU = Mathf.InverseLerp(b.min.x, b.max.x, local.x);
        // Song chay het doan xa nhat + phan duoi tat dan.
        duration = (Mathf.Max(hitU, 1f - hitU) + 4f / Mathf.Max(0.01f, damping)) / Mathf.Max(0.01f, speed);

        if (riderTransforms != null)
        {
            foreach (Transform t in riderTransforms)
            {
                if (t == null || !t.gameObject.activeInHierarchy) continue;
                riders.Add(t);
                riderBasePos.Add(t.position);
                riderBaseRot.Add(t.rotation);
            }
        }

        age = 0f;
        Apply(age);
    }

    private void Update()
    {
        if (age < 0f) return;

        age += Time.deltaTime;
        if (age >= duration)
        {
            age = -1f;
            Apply(age);
            RestoreRiders();
            return;
        }

        Apply(age);
        MoveRiders();
    }

    private void Apply(float waveAge)
    {
        sr.GetPropertyBlock(mpb);
        mpb.SetFloat(HitU, hitU);
        mpb.SetFloat(WaveAge, waveAge);
        mpb.SetFloat(Amp, amplitude);
        mpb.SetFloat(Speed, speed);
        mpb.SetFloat(Freq, frequency);
        mpb.SetFloat(Damp, damping);
        mpb.SetFloat(Falloff, falloff);
        sr.SetPropertyBlock(mpb);
    }

    // Giong het WaveOffset trong shader (am = nho len).
    private float Offset(float u)
    {
        float d = Mathf.Abs(u - hitU);
        float behind = speed * age - d;
        if (behind <= 0f) return 0f;
        float env = Mathf.Exp(-damping * behind) / (1f + d * falloff);
        return -amplitude * env * Mathf.Sin(behind * frequency);
    }

    private void MoveRiders()
    {
        Bounds b = sr.sprite.bounds;
        Vector3 worldSize = sr.bounds.size;  // kich thuoc sprite tren world
        for (int i = 0; i < riders.Count; i++)
        {
            Transform rider = riders[i];
            if (rider == null) continue;

            Vector3 local = transform.InverseTransformPoint(riderBasePos[i]);
            float u = Mathf.InverseLerp(b.min.x, b.max.x, local.x);
            float waveOffset = Offset(u);
            const float e = 0.01f;
            float slope = (Offset(u + e) - Offset(u - e)) / (2f * e);  // uv / uv

            // offset uv am = nho len -> doi sang world.
            rider.position = riderBasePos[i] + transform.up * (-waveOffset * worldSize.y);
            float angle = Mathf.Atan(-slope * worldSize.y / worldSize.x) * Mathf.Rad2Deg * riderTiltScale;
            rider.rotation = riderBaseRot[i] * Quaternion.Euler(0f, 0f, angle);
        }
    }

    private void RestoreRiders()
    {
        for (int i = 0; i < riders.Count; i++)
        {
            if (riders[i] == null) continue;
            riders[i].position = riderBasePos[i];
            riders[i].rotation = riderBaseRot[i];
        }
        riders.Clear();
        riderBasePos.Clear();
        riderBaseRot.Clear();
    }

    private void OnDisable()
    {
        age = -1f;
        if (sr != null) Apply(age);
        RestoreRiders();
    }
}
