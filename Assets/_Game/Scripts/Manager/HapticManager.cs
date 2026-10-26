using System.Collections.Generic;
// using Lofelt.NiceVibrations;
using UnityEngine;

/// <summary>
/// Cổng duy nhất cho mọi hiệu ứng rung trong game. Nền dưới là NiceVibrations (Feel).
/// Bật/tắt theo VariableSystem.Vibration (dùng chung với SettingUI và GameplayUI).
/// </summary>
public class HapticManager : Singleton<HapticManager>
{
    private const float NestBreakCooldown = 0.1f;
    private const float FireworkCooldown = 0.05f;
    private const float BoosterCollectCooldown = 0.05f;
    private const int CoinCollectMaxHaptics = 4;
    private readonly Dictionary<HapticPatterns.PresetType, float> lastPlayTime = new();

    public void ButtonTapHaptic()
    {
        Play(HapticPatterns.PresetType.LightImpact);
    }

    /// <summary>
    /// Tạo callback cho 1 lượt bay coin: mỗi coin đập vào target rung 1 lần,
    /// nhưng rải đều để cả lượt chỉ rung tối đa <see cref="CoinCollectMaxHaptics"/> lần.
    /// Callback nhận tỉ lệ coin còn lại (RewardItemAnim truyền _activeItems / amount).
    /// </summary>
    public System.Action<float> CreateCoinCollectHaptic()
    {
        int lastStep = 0;
        return remainingRatio =>
        {
            int step = Mathf.CeilToInt((1f - remainingRatio) * CoinCollectMaxHaptics - 0.001f);
            if (step <= lastStep) return;

            lastStep = step;
            Play(HapticPatterns.PresetType.LightImpact);
        };
    }

    public void BoosterCollectHaptic()
    {
        PlayWithCooldown(HapticPatterns.PresetType.MediumImpact, BoosterCollectCooldown);
    }

    /// <summary>Rung khi từng quà bật ra giữa màn hình.</summary>
    public void RewardAppearHaptic()
    {
        Play(HapticPatterns.PresetType.MediumImpact);
    }

    /// <summary>Rung khi nút Play ở Home đập xuống để đổi level.</summary>
    public void PlayButtonLevelUpHaptic()
    {
        Play(HapticPatterns.PresetType.HeavyImpact);
    }

    public void BirdTapHaptic()
    {
        Play(HapticPatterns.PresetType.Selection);
    }

    public void NestBreakHaptic()
    {
        PlayWithCooldown(HapticPatterns.PresetType.SoftImpact, NestBreakCooldown);
    }

    /// <summary>Rung khi pháo hoa nổ ở màn chúc mừng. Các group có thể chồng nhau nên có cooldown.</summary>
    public void FireworkHaptic()
    {
        PlayWithCooldown(HapticPatterns.PresetType.LightImpact, FireworkCooldown);
    }

    /// <summary>
    /// Chỉ phát nếu preset này chưa phát trong <paramref name="cooldown"/> giây gần nhất.
    /// Dùng Time.unscaledTime để không bị ảnh hưởng khi game pause hoặc đổi timeScale.
    /// </summary>
    private void PlayWithCooldown(HapticPatterns.PresetType type, float cooldown)
    {
        if (!VariableSystem.Vibration)
        {
            return;
        }

        float now = Time.unscaledTime;
        if (lastPlayTime.TryGetValue(type, out float last) && now - last < cooldown)
        {
            return;
        }

        lastPlayTime[type] = now;
        HapticPatterns.PlayPreset(type);
    }

    private static void Play(HapticPatterns.PresetType type)
    {
        if (!VariableSystem.Vibration)
        {
            return;
        }

        HapticPatterns.PlayPreset(type);
    }
}
