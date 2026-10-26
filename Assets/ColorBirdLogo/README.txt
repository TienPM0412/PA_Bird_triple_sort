Color Bird logo - Unity UI player (layer based, ~0.6 MB total)

1. Copy the whole "ColorBirdLogo" folder into your project's Assets/ folder.
   (Resources/ColorBirdLogo/*.png are imported as sprites automatically by Editor/ColorBirdLogoImporter.cs)
2. In the Win screen Canvas: create an empty GameObject, add the "ColorBirdLogoAnimator" component.
   Its size/scale controls the logo size (design size is 706 x 504 units).
3. The logo plays intro -> idle (loops) automatically when the object is enabled.
   Code:  logo.Play();                      // restart from the intro
          logo.PlayOutro(() => { ... });    // play the outro, callback when it finished

Intro + outro only (no idle loop): untick "Play Idle" on the component. The logo then holds
its final intro pose until PlayOutro() is called.

Keep the PNGs inside Resources/ColorBirdLogo (the script loads them by name).
Motion tracks are in Resources/ColorBirdLogo/logo_anim.json (regenerate with export_unity.py).

Requirements: Unity 2022.3+ with the Unity UI package (com.unity.ugui, included in standard templates).
Tested: Unity 2022.3.62f2, compiles clean and renders correctly (intro, idle, outro frames).
