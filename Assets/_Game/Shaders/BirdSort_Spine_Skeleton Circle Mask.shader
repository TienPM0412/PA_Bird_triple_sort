// Spine/Skeleton + cắt theo hình tròn trong không gian world (không dùng stencil).
// Mỗi bubble gửi tâm/bán kính của riêng nó qua MaterialPropertyBlock nên các bubble chồng nhau không bị lẫn.
// _CircleMaskRadius <= 0 nghĩa là tắt mask (chim đang bay ra ngoài bubble).
Shader "BirdSort/Spine/Skeleton Circle Mask" {
	Properties {
		_Cutoff ("Shadow alpha cutoff", Range(0, 1)) = 0.1
		[NoScaleOffset] _MainTex ("Main Texture", 2D) = "black" {}
		[Toggle(_STRAIGHT_ALPHA_INPUT)] _StraightAlphaInput ("Straight Alpha Texture", Float) = 0
		[HideInInspector] _StencilRef ("Stencil Reference", Float) = 1
		[HideInInspector] [Enum(UnityEngine.Rendering.CompareFunction)] _StencilComp ("Stencil Comparison", Float) = 8 // Always

		// Được set từ code bằng MaterialPropertyBlock, đơn vị world.
		[HideInInspector] _CircleMaskCenter ("Circle Mask Center (World XY)", Vector) = (0, 0, 0, 0)
		[HideInInspector] _CircleMaskRadius ("Circle Mask Radius", Float) = 0
		[HideInInspector] _CircleMaskSoftness ("Circle Mask Softness", Float) = 0.05
	}

	SubShader {
		Tags { "Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Transparent" "PreviewType"="Plane" }

		Fog { Mode Off }
		Cull Off
		ZWrite Off
		Blend One OneMinusSrcAlpha
		Lighting Off

		Stencil {
			Ref [_StencilRef]
			Comp [_StencilComp]
			Pass Keep
		}

		Pass {
			Name "Normal"

			CGPROGRAM
			#pragma shader_feature _ _STRAIGHT_ALPHA_INPUT
			#pragma vertex vert
			#pragma fragment frag
			#include "UnityCG.cginc"
			#include "Assets/Spine/Runtime/spine-unity/Shaders/CGIncludes/Spine-Common.cginc"

			sampler2D _MainTex;
			float4 _CircleMaskCenter;
			float _CircleMaskRadius;
			float _CircleMaskSoftness;

			struct VertexInput {
				float4 vertex : POSITION;
				float2 uv : TEXCOORD0;
				float4 vertexColor : COLOR;
			};

			struct VertexOutput {
				float4 pos : SV_POSITION;
				float2 uv : TEXCOORD0;
				float4 vertexColor : COLOR;
				float2 worldXY : TEXCOORD1;
			};

			VertexOutput vert (VertexInput v) {
				VertexOutput o;
				o.pos = UnityObjectToClipPos(v.vertex);
				o.uv = v.uv;
				o.vertexColor = PMAGammaToTargetSpace(v.vertexColor);
				o.worldXY = mul(unity_ObjectToWorld, v.vertex).xy;
				return o;
			}

			float4 frag (VertexOutput i) : SV_Target {
				float4 texColor = tex2D(_MainTex, i.uv);

				#if defined(_STRAIGHT_ALPHA_INPUT)
				texColor.rgb *= texColor.a;
				#endif

				float4 color = texColor * i.vertexColor;

				// Mềm dần ở sát mép, bằng 0 ở ngoài vòng tròn. Nhân cả rgba vì texture là premultiplied alpha.
				if (_CircleMaskRadius > 0.0) {
					float softness = max(_CircleMaskSoftness, 0.0001);
					float dist = distance(i.worldXY, _CircleMaskCenter.xy);
					color *= 1.0 - smoothstep(_CircleMaskRadius - softness, _CircleMaskRadius, dist);
				}

				return color;
			}
			ENDCG
		}
	}

	// ShadowCaster và các pass còn lại lấy từ shader gốc.
	Fallback "Spine/Skeleton"
}
