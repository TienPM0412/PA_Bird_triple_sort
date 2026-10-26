Slingshot booster - Unity UI player (~1.5 MB)

1. Copy the whole "SlingshotShot" folder into your project's Assets/ folder.
   (Resources/SlingshotShot/*.png are imported as sprites automatically by Editor/SlingshotImporter.cs)
2. In the Canvas: create an empty GameObject, add the "SlingshotAnimator" component.
   The slingshot is 774 x 731 design units. Scale the GameObject to resize it, rotate it to tilt it
   (the reference demo uses scale 0.4 and a 9 degree tilt, top leaning left).
3. Fire it:
       sling.FireAt(targetRectTransform, () => { /* stone landed: shake the branch, play dust... */ },
                                         () => { /* whole shot finished, new stone is loaded */ });
   or   sling.Fire(localPoint, onHit, onFinished);   // local point of the sling object, y up, origin = centre
   The stone is driven by code, so it can land on any point. The shot is designed for aiming UP the screen:
   it flies almost straight up, goes slightly past the target and curls down onto it.

Timing (60 fps): yank 0.28s, hold, release at 0.44s, flight 0.42s (Flight Time field), reload pop 0.26s.
The landing effect (branch shake, dust) is NOT included: do it in the onHit callback.

Keep the PNGs inside Resources/SlingshotShot (the script loads them by name).
Data: Resources/SlingshotShot/sling_anim.json (regenerate with export_sling_unity.py).

Requirements: Unity 2022.3+ with the Unity UI package (com.unity.ugui, included in standard templates).
Tested: Unity 2022.3.62f2, compiles clean; stepped playback lands the stone on the target.
