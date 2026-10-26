using UnityEditor;
using UnityEngine;

/// <summary>Imports every PNG under SlingshotShot/Resources as a clean UI sprite (no atlas, no mipmaps).</summary>
public class SlingshotImporter : AssetPostprocessor
{
    void OnPreprocessTexture()
    {
        if (!assetPath.Replace('\\', '/').Contains("SlingshotShot/Resources/")) return;
        var ti = (TextureImporter)assetImporter;
        ti.textureType = TextureImporterType.Sprite;
        ti.spriteImportMode = SpriteImportMode.Single;
        ti.alphaIsTransparency = true;
        ti.mipmapEnabled = false;
        ti.filterMode = FilterMode.Bilinear;
        ti.maxTextureSize = 2048;
        var s = new TextureImporterSettings();
        ti.ReadTextureSettings(s);
        s.spriteMeshType = SpriteMeshType.FullRect;
        s.spriteAlignment = (int)SpriteAlignment.Center;
        ti.SetTextureSettings(s);
    }
}
