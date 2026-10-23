// Sprites/Default + cắt theo hình tròn trong không gian world (không dùng stencil).
// Cùng interface với "BirdSort/Spine/Skeleton Circle Mask": tâm/bán kính được gửi qua MaterialPropertyBlock
// (_CircleMaskCenter, _CircleMaskRadius) nên Bird.SetCircleMask dùng chung được cho cả Spine lẫn SpriteRenderer.
// _CircleMaskRadius <= 0 nghĩa là tắt mask.
Shader "BirdSort/Sprite World Circle Mask"
{
    Properties
    {
        [PerRendererData] _MainTex ("Sprite Texture", 2D) = "white" {}
        _Color ("Tint", Color) = (1, 1, 1, 1)

        // Được set từ code bằng MaterialPropertyBlock, đơn vị world.
        [HideInInspector] _CircleMaskCenter ("Circle Mask Center (World XY)", Vector) = (0, 0, 0, 0)
        [HideInInspector] _CircleMaskRadius ("Circle Mask Radius", Float) = 0
        [HideInInspector] _CircleMaskSoftness ("Circle Mask Softness", Float) = 0.05

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
                float2 worldXY : TEXCOORD1;
            };

            sampler2D _MainTex;
            sampler2D _AlphaTex;
            float4 _MainTex_ST;
            fixed4 _Color;
            fixed4 _RendererColor;
            float4 _Flip;
            float _EnableExternalAlpha;
            float4 _CircleMaskCenter;
            float _CircleMaskRadius;
            float _CircleMaskSoftness;

            v2f vert(appdata_t input)
            {
                v2f output;

                input.vertex.xy *= _Flip.xy;
                output.vertex = UnityObjectToClipPos(input.vertex);
                output.worldXY = mul(unity_ObjectToWorld, input.vertex).xy;
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

            fixed4 frag(v2f input) : SV_Target
            {
                fixed4 color = SampleSpriteTexture(input.texcoord) * input.color;

                // Premultiplied alpha phù hợp với Blend One OneMinusSrcAlpha.
                color.rgb *= color.a;

                // Mềm dần ở sát mép, bằng 0 ở ngoài vòng tròn. Nhân cả rgba vì màu đã premultiplied.
                if (_CircleMaskRadius > 0.0)
                {
                    float softness = max(_CircleMaskSoftness, 0.0001);
                    float dist = distance(input.worldXY, _CircleMaskCenter.xy);
                    color *= 1.0 - smoothstep(_CircleMaskRadius - softness, _CircleMaskRadius, dist);
                }

                return color;
            }
            ENDCG
        }
    }

    Fallback "Sprites/Default"
}
