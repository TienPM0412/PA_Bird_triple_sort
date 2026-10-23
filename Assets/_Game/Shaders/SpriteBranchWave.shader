Shader "Custom/SpriteBranchWave"
{
    Properties
    {
        [PerRendererData] _MainTex ("Sprite Texture", 2D) = "white" {}
        _Color ("Tint", Color) = (1,1,1,1)
        _HitU ("Hit U (0-1)", Float) = 0.5
        _WaveAge ("Wave Age (s, <0 = off)", Float) = -1
        _Amp ("Amplitude (uv)", Float) = 0.07
        _Speed ("Speed (uv/s)", Float) = 3
        _Freq ("Frequency", Float) = 27
        _Damp ("Damping behind front", Float) = 8
        _Falloff ("Distance falloff", Float) = 1
    }
    SubShader
    {
        Tags { "Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Transparent"
               "PreviewType"="Plane" "CanUseSpriteAtlas"="True" }
        Cull Off Lighting Off ZWrite Off
        Blend One OneMinusSrcAlpha

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            struct appdata { float4 vertex : POSITION; float4 color : COLOR; float2 uv : TEXCOORD0; };
            struct v2f { float4 pos : SV_POSITION; fixed4 color : COLOR; float2 uv : TEXCOORD0; };

            sampler2D _MainTex;
            fixed4 _Color;
            float _HitU, _WaveAge, _Amp, _Speed, _Freq, _Damp, _Falloff;

            v2f vert (appdata v)
            {
                v2f o;
                o.pos = UnityObjectToClipPos(v.vertex);
                o.uv = v.uv;
                o.color = v.color * _Color;
                return o;
            }

            // Song chay tu diem trung ra 2 ben: dau song nho len, phia sau dao dong tat dan.
            float WaveOffset (float u)
            {
                if (_WaveAge < 0) return 0;
                float d = abs(u - _HitU);
                float behind = _Speed * _WaveAge - d;      // khoang cach sau dau song
                if (behind <= 0) return 0;                 // song chua toi
                float env = exp(-_Damp * behind) / (1 + d * _Falloff);
                return -_Amp * env * sin(behind * _Freq);  // am = nho len
            }

            fixed4 frag (v2f i) : SV_Target
            {
                float2 uv = i.uv;
                uv.y -= WaveOffset(uv.x);  // offset > 0 -> hinh dich len
                fixed4 c = tex2D(_MainTex, uv) * i.color;
                c *= step(0, uv.y) * step(uv.y, 1);        // khong lay pixel ngoai sprite
                c.rgb *= c.a;
                return c;
            }
            ENDCG
        }
    }
}
