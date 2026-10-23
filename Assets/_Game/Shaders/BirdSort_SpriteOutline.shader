Shader "BirdSort/SpriteOutline"
{
    Properties
    {
        [PerRendererData] _MainTex ("Sprite Texture", 2D) = "white" {}
        _Color ("Tint", Color) = (1, 1, 1, 1)
        _OutlineColor ("Outline Color", Color) = (1, 1, 1, 1)
        _OutlineSize ("Outline Size (pixels)", Range(0, 24)) = 2

        [MaterialToggle] PixelSnap ("Pixel snap", Float) = 0
        [HideInInspector] _RendererColor ("Renderer Color", Color) = (1, 1, 1, 1)
        [HideInInspector] _Flip ("Flip", Vector) = (1, 1, 1, 1)
        [PerRendererData] _AlphaTex ("External Alpha", 2D) = "white" {}
        [PerRendererData] _EnableExternalAlpha ("Enable External Alpha", Float) = 0
    }

    SubShader
    {
        Tags
        {
            "Queue" = "Transparent"
            "IgnoreProjector" = "True"
            "RenderType" = "Transparent"
            "PreviewType" = "Plane"
            "CanUseSpriteAtlas" = "True"
        }

        Cull Off
        Lighting Off
        ZWrite Off
        Blend One OneMinusSrcAlpha

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma target 2.0
            #pragma multi_compile _ PIXELSNAP_ON
            #pragma multi_compile _ ETC1_EXTERNAL_ALPHA

            #include "UnityCG.cginc"

            struct appdata_t
            {
                float4 vertex : POSITION;
                float4 color : COLOR;
                float2 texcoord : TEXCOORD0;
            };

            struct v2f
            {
                float4 vertex : SV_POSITION;
                fixed4 color : COLOR;
                float2 texcoord : TEXCOORD0;
            };

            sampler2D _MainTex;
            sampler2D _AlphaTex;
            float4 _MainTex_ST;
            float4 _MainTex_TexelSize;
            fixed4 _Color;
            fixed4 _OutlineColor;
            fixed4 _RendererColor;
            float4 _Flip;
            float _OutlineSize;
            float _EnableExternalAlpha;

            v2f vert(appdata_t input)
            {
                v2f output;

                input.vertex.xy *= _Flip.xy;
                output.vertex = UnityObjectToClipPos(input.vertex);
                output.texcoord = TRANSFORM_TEX(input.texcoord, _MainTex);
                output.color = input.color * _Color * _RendererColor;

                #ifdef PIXELSNAP_ON
                    output.vertex = UnityPixelSnap(output.vertex);
                #endif

                return output;
            }

            fixed4 SampleSpriteTexture(float2 uv)
            {
                fixed4 color = tex2D(_MainTex, uv);

                #if ETC1_EXTERNAL_ALPHA
                    fixed4 alpha = tex2D(_AlphaTex, uv);
                    color.a = lerp(color.a, alpha.r, _EnableExternalAlpha);
                #endif

                return color;
            }

            fixed SampleSpriteAlpha(float2 uv)
            {
                return SampleSpriteTexture(uv).a;
            }

            fixed4 frag(v2f input) : SV_Target
            {
                fixed4 textureColor = SampleSpriteTexture(input.texcoord);
                fixed4 spriteColor = textureColor * input.color;

                float2 offset = _MainTex_TexelSize.xy * max(_OutlineSize, 0.0);
                float2 diagonal = offset * 0.70710678;

                fixed neighbourAlpha = 0.0;
                neighbourAlpha = max(neighbourAlpha, SampleSpriteAlpha(input.texcoord + float2( offset.x, 0.0)));
                neighbourAlpha = max(neighbourAlpha, SampleSpriteAlpha(input.texcoord + float2(-offset.x, 0.0)));
                neighbourAlpha = max(neighbourAlpha, SampleSpriteAlpha(input.texcoord + float2(0.0,  offset.y)));
                neighbourAlpha = max(neighbourAlpha, SampleSpriteAlpha(input.texcoord + float2(0.0, -offset.y)));
                neighbourAlpha = max(neighbourAlpha, SampleSpriteAlpha(input.texcoord + float2( diagonal.x,  diagonal.y)));
                neighbourAlpha = max(neighbourAlpha, SampleSpriteAlpha(input.texcoord + float2(-diagonal.x,  diagonal.y)));
                neighbourAlpha = max(neighbourAlpha, SampleSpriteAlpha(input.texcoord + float2( diagonal.x, -diagonal.y)));
                neighbourAlpha = max(neighbourAlpha, SampleSpriteAlpha(input.texcoord + float2(-diagonal.x, -diagonal.y)));

                // Chỉ đặt outline vào vùng trong suốt sát hình gốc.
                fixed outlineAlpha = saturate(neighbourAlpha - textureColor.a);
                outlineAlpha *= _OutlineColor.a * input.color.a;

                // Ghép phần hình gốc lên trên outline mà không làm biến dạng silhouette gốc.
                fixed4 outputColor;
                outputColor.rgb = spriteColor.rgb * spriteColor.a + _OutlineColor.rgb * outlineAlpha;
                outputColor.a = saturate(spriteColor.a + outlineAlpha);
                return outputColor;
            }
            ENDCG
        }
    }

    Fallback "Sprites/Default"
}
