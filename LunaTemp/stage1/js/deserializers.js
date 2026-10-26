var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2676 = root || request.c( 'UnityEngine.JointSpring' )
  var i2677 = data
  i2676.spring = i2677[0]
  i2676.damper = i2677[1]
  i2676.targetPosition = i2677[2]
  return i2676
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2678 = root || request.c( 'UnityEngine.JointMotor' )
  var i2679 = data
  i2678.m_TargetVelocity = i2679[0]
  i2678.m_Force = i2679[1]
  i2678.m_FreeSpin = i2679[2]
  return i2678
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2680 = root || request.c( 'UnityEngine.JointLimits' )
  var i2681 = data
  i2680.m_Min = i2681[0]
  i2680.m_Max = i2681[1]
  i2680.m_Bounciness = i2681[2]
  i2680.m_BounceMinVelocity = i2681[3]
  i2680.m_ContactDistance = i2681[4]
  i2680.minBounce = i2681[5]
  i2680.maxBounce = i2681[6]
  return i2680
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2682 = root || request.c( 'UnityEngine.JointDrive' )
  var i2683 = data
  i2682.m_PositionSpring = i2683[0]
  i2682.m_PositionDamper = i2683[1]
  i2682.m_MaximumForce = i2683[2]
  i2682.m_UseAcceleration = i2683[3]
  return i2682
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2684 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2685 = data
  i2684.m_Spring = i2685[0]
  i2684.m_Damper = i2685[1]
  return i2684
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2686 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2687 = data
  i2686.m_Limit = i2687[0]
  i2686.m_Bounciness = i2687[1]
  i2686.m_ContactDistance = i2687[2]
  return i2686
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2688 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2689 = data
  i2688.m_ExtremumSlip = i2689[0]
  i2688.m_ExtremumValue = i2689[1]
  i2688.m_AsymptoteSlip = i2689[2]
  i2688.m_AsymptoteValue = i2689[3]
  i2688.m_Stiffness = i2689[4]
  return i2688
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2690 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2691 = data
  i2690.m_LowerAngle = i2691[0]
  i2690.m_UpperAngle = i2691[1]
  return i2690
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2692 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2693 = data
  i2692.m_MotorSpeed = i2693[0]
  i2692.m_MaximumMotorTorque = i2693[1]
  return i2692
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2694 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2695 = data
  i2694.m_DampingRatio = i2695[0]
  i2694.m_Frequency = i2695[1]
  i2694.m_Angle = i2695[2]
  return i2694
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2696 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2697 = data
  i2696.m_LowerTranslation = i2697[0]
  i2696.m_UpperTranslation = i2697[1]
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2698 = root || new pc.UnityMaterial()
  var i2699 = data
  i2698.name = i2699[0]
  request.r(i2699[1], i2699[2], 0, i2698, 'shader')
  i2698.renderQueue = i2699[3]
  i2698.enableInstancing = !!i2699[4]
  var i2701 = i2699[5]
  var i2700 = []
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2701[i + 0]) );
  }
  i2698.floatParameters = i2700
  var i2703 = i2699[6]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2703[i + 0]) );
  }
  i2698.colorParameters = i2702
  var i2705 = i2699[7]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2705[i + 0]) );
  }
  i2698.vectorParameters = i2704
  var i2707 = i2699[8]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2707[i + 0]) );
  }
  i2698.textureParameters = i2706
  var i2709 = i2699[9]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2709[i + 0]) );
  }
  i2698.materialFlags = i2708
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2713 = data
  i2712.name = i2713[0]
  i2712.value = i2713[1]
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2717 = data
  i2716.name = i2717[0]
  i2716.value = new pc.Color(i2717[1], i2717[2], i2717[3], i2717[4])
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2721 = data
  i2720.name = i2721[0]
  i2720.value = new pc.Vec4( i2721[1], i2721[2], i2721[3], i2721[4] )
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2725 = data
  i2724.name = i2725[0]
  request.r(i2725[1], i2725[2], 0, i2724, 'value')
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2729 = data
  i2728.name = i2729[0]
  i2728.enabled = !!i2729[1]
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2731 = data
  i2730.name = i2731[0]
  i2730.width = i2731[1]
  i2730.height = i2731[2]
  i2730.mipmapCount = i2731[3]
  i2730.anisoLevel = i2731[4]
  i2730.filterMode = i2731[5]
  i2730.hdr = !!i2731[6]
  i2730.format = i2731[7]
  i2730.wrapMode = i2731[8]
  i2730.alphaIsTransparency = !!i2731[9]
  i2730.alphaSource = i2731[10]
  i2730.graphicsFormat = i2731[11]
  i2730.sRGBTexture = !!i2731[12]
  i2730.desiredColorSpace = i2731[13]
  i2730.wrapU = i2731[14]
  i2730.wrapV = i2731[15]
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2733 = data
  i2732.pivot = new pc.Vec2( i2733[0], i2733[1] )
  i2732.anchorMin = new pc.Vec2( i2733[2], i2733[3] )
  i2732.anchorMax = new pc.Vec2( i2733[4], i2733[5] )
  i2732.sizeDelta = new pc.Vec2( i2733[6], i2733[7] )
  i2732.anchoredPosition3D = new pc.Vec3( i2733[8], i2733[9], i2733[10] )
  i2732.rotation = new pc.Quat(i2733[11], i2733[12], i2733[13], i2733[14])
  i2732.scale = new pc.Vec3( i2733[15], i2733[16], i2733[17] )
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2735 = data
  i2734.cullTransparentMesh = !!i2735[0]
  return i2734
}

Deserializers["OutsideBird"] = function (request, data, root) {
  var i2736 = root || request.c( 'OutsideBird' )
  var i2737 = data
  request.r(i2737[0], i2737[1], 0, i2736, 'm_ImageIcon')
  request.r(i2737[2], i2737[3], 0, i2736, 'm_TxtCount')
  return i2736
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2738 = root || request.c( 'UnityEngine.UI.Image' )
  var i2739 = data
  request.r(i2739[0], i2739[1], 0, i2738, 'm_Sprite')
  i2738.m_Type = i2739[2]
  i2738.m_PreserveAspect = !!i2739[3]
  i2738.m_FillCenter = !!i2739[4]
  i2738.m_FillMethod = i2739[5]
  i2738.m_FillAmount = i2739[6]
  i2738.m_FillClockwise = !!i2739[7]
  i2738.m_FillOrigin = i2739[8]
  i2738.m_UseSpriteMesh = !!i2739[9]
  i2738.m_PixelsPerUnitMultiplier = i2739[10]
  request.r(i2739[11], i2739[12], 0, i2738, 'm_Material')
  i2738.m_Maskable = !!i2739[13]
  i2738.m_Color = new pc.Color(i2739[14], i2739[15], i2739[16], i2739[17])
  i2738.m_RaycastTarget = !!i2739[18]
  i2738.m_RaycastPadding = new pc.Vec4( i2739[19], i2739[20], i2739[21], i2739[22] )
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2741 = data
  i2740.name = i2741[0]
  i2740.tagId = i2741[1]
  i2740.enabled = !!i2741[2]
  i2740.isStatic = !!i2741[3]
  i2740.layer = i2741[4]
  return i2740
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2742 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2743 = data
  i2742.m_hasFontAssetChanged = !!i2743[0]
  request.r(i2743[1], i2743[2], 0, i2742, 'm_baseMaterial')
  i2742.m_maskOffset = new pc.Vec4( i2743[3], i2743[4], i2743[5], i2743[6] )
  i2742.m_text = i2743[7]
  i2742.m_isRightToLeft = !!i2743[8]
  request.r(i2743[9], i2743[10], 0, i2742, 'm_fontAsset')
  request.r(i2743[11], i2743[12], 0, i2742, 'm_sharedMaterial')
  var i2745 = i2743[13]
  var i2744 = []
  for(var i = 0; i < i2745.length; i += 2) {
  request.r(i2745[i + 0], i2745[i + 1], 2, i2744, '')
  }
  i2742.m_fontSharedMaterials = i2744
  request.r(i2743[14], i2743[15], 0, i2742, 'm_fontMaterial')
  var i2747 = i2743[16]
  var i2746 = []
  for(var i = 0; i < i2747.length; i += 2) {
  request.r(i2747[i + 0], i2747[i + 1], 2, i2746, '')
  }
  i2742.m_fontMaterials = i2746
  i2742.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2743[17], i2743[18], i2743[19], i2743[20])
  i2742.m_fontColor = new pc.Color(i2743[21], i2743[22], i2743[23], i2743[24])
  i2742.m_enableVertexGradient = !!i2743[25]
  i2742.m_colorMode = i2743[26]
  i2742.m_fontColorGradient = request.d('TMPro.VertexGradient', i2743[27], i2742.m_fontColorGradient)
  request.r(i2743[28], i2743[29], 0, i2742, 'm_fontColorGradientPreset')
  request.r(i2743[30], i2743[31], 0, i2742, 'm_spriteAsset')
  i2742.m_tintAllSprites = !!i2743[32]
  request.r(i2743[33], i2743[34], 0, i2742, 'm_StyleSheet')
  i2742.m_TextStyleHashCode = i2743[35]
  i2742.m_overrideHtmlColors = !!i2743[36]
  i2742.m_faceColor = UnityEngine.Color32.ConstructColor(i2743[37], i2743[38], i2743[39], i2743[40])
  i2742.m_fontSize = i2743[41]
  i2742.m_fontSizeBase = i2743[42]
  i2742.m_fontWeight = i2743[43]
  i2742.m_enableAutoSizing = !!i2743[44]
  i2742.m_fontSizeMin = i2743[45]
  i2742.m_fontSizeMax = i2743[46]
  i2742.m_fontStyle = i2743[47]
  i2742.m_HorizontalAlignment = i2743[48]
  i2742.m_VerticalAlignment = i2743[49]
  i2742.m_textAlignment = i2743[50]
  i2742.m_characterSpacing = i2743[51]
  i2742.m_wordSpacing = i2743[52]
  i2742.m_lineSpacing = i2743[53]
  i2742.m_lineSpacingMax = i2743[54]
  i2742.m_paragraphSpacing = i2743[55]
  i2742.m_charWidthMaxAdj = i2743[56]
  i2742.m_enableWordWrapping = !!i2743[57]
  i2742.m_wordWrappingRatios = i2743[58]
  i2742.m_overflowMode = i2743[59]
  request.r(i2743[60], i2743[61], 0, i2742, 'm_linkedTextComponent')
  request.r(i2743[62], i2743[63], 0, i2742, 'parentLinkedComponent')
  i2742.m_enableKerning = !!i2743[64]
  i2742.m_enableExtraPadding = !!i2743[65]
  i2742.checkPaddingRequired = !!i2743[66]
  i2742.m_isRichText = !!i2743[67]
  i2742.m_parseCtrlCharacters = !!i2743[68]
  i2742.m_isOrthographic = !!i2743[69]
  i2742.m_isCullingEnabled = !!i2743[70]
  i2742.m_horizontalMapping = i2743[71]
  i2742.m_verticalMapping = i2743[72]
  i2742.m_uvLineOffset = i2743[73]
  i2742.m_geometrySortingOrder = i2743[74]
  i2742.m_IsTextObjectScaleStatic = !!i2743[75]
  i2742.m_VertexBufferAutoSizeReduction = !!i2743[76]
  i2742.m_useMaxVisibleDescender = !!i2743[77]
  i2742.m_pageToDisplay = i2743[78]
  i2742.m_margin = new pc.Vec4( i2743[79], i2743[80], i2743[81], i2743[82] )
  i2742.m_isUsingLegacyAnimationComponent = !!i2743[83]
  i2742.m_isVolumetricText = !!i2743[84]
  request.r(i2743[85], i2743[86], 0, i2742, 'm_Material')
  i2742.m_Maskable = !!i2743[87]
  i2742.m_Color = new pc.Color(i2743[88], i2743[89], i2743[90], i2743[91])
  i2742.m_RaycastTarget = !!i2743[92]
  i2742.m_RaycastPadding = new pc.Vec4( i2743[93], i2743[94], i2743[95], i2743[96] )
  return i2742
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2750 = root || request.c( 'TMPro.VertexGradient' )
  var i2751 = data
  i2750.topLeft = new pc.Color(i2751[0], i2751[1], i2751[2], i2751[3])
  i2750.topRight = new pc.Color(i2751[4], i2751[5], i2751[6], i2751[7])
  i2750.bottomLeft = new pc.Color(i2751[8], i2751[9], i2751[10], i2751[11])
  i2750.bottomRight = new pc.Color(i2751[12], i2751[13], i2751[14], i2751[15])
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2753 = data
  i2752.position = new pc.Vec3( i2753[0], i2753[1], i2753[2] )
  i2752.scale = new pc.Vec3( i2753[3], i2753[4], i2753[5] )
  i2752.rotation = new pc.Quat(i2753[6], i2753[7], i2753[8], i2753[9])
  return i2752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2755 = data
  i2754.bodyType = i2755[0]
  request.r(i2755[1], i2755[2], 0, i2754, 'material')
  i2754.simulated = !!i2755[3]
  i2754.useAutoMass = !!i2755[4]
  i2754.mass = i2755[5]
  i2754.drag = i2755[6]
  i2754.angularDrag = i2755[7]
  i2754.gravityScale = i2755[8]
  i2754.collisionDetectionMode = i2755[9]
  i2754.sleepMode = i2755[10]
  i2754.constraints = i2755[11]
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2757 = data
  i2756.radius = i2757[0]
  i2756.enabled = !!i2757[1]
  i2756.isTrigger = !!i2757[2]
  i2756.usedByEffector = !!i2757[3]
  i2756.density = i2757[4]
  i2756.offset = new pc.Vec2( i2757[5], i2757[6] )
  request.r(i2757[7], i2757[8], 0, i2756, 'material')
  return i2756
}

Deserializers["BubbleParts"] = function (request, data, root) {
  var i2758 = root || request.c( 'BubbleParts' )
  var i2759 = data
  var i2761 = i2759[0]
  var i2760 = []
  for(var i = 0; i < i2761.length; i += 1) {
    i2760.push( request.d('BubbleParts+Entry', i2761[i + 0]) );
  }
  i2758.parts = i2760
  return i2758
}

Deserializers["BubbleParts+Entry"] = function (request, data, root) {
  var i2764 = root || request.c( 'BubbleParts+Entry' )
  var i2765 = data
  i2764.key = i2765[0]
  request.r(i2765[1], i2765[2], 0, i2764, 'target')
  return i2764
}

Deserializers["BubbleOneSlot"] = function (request, data, root) {
  var i2766 = root || request.c( 'BubbleOneSlot' )
  var i2767 = data
  i2766.currentConfig = request.d('BubbleConfig', i2767[0], i2766.currentConfig)
  var i2769 = i2767[1]
  var i2768 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i2769.length; i += 2) {
  request.r(i2769[i + 0], i2769[i + 1], 1, i2768, '')
  }
  i2766.birds = i2768
  request.r(i2767[2], i2767[3], 0, i2766, 'birdParent')
  i2766.refillPopDuration = i2767[4]
  i2766.refillMoveDuration = i2767[5]
  i2766.clipBirdsToCircle = !!i2767[6]
  return i2766
}

Deserializers["BubbleConfig"] = function (request, data, root) {
  var i2770 = root || request.c( 'BubbleConfig' )
  var i2771 = data
  i2770.BubbleID = i2771[0]
  i2770.BubbleType = i2771[1]
  i2770.FishStr = i2771[2]
  i2770.IsFrozen = !!i2771[3]
  i2770.IsUnknown = !!i2771[4]
  i2770.IsKey = !!i2771[5]
  i2770.LockCount = i2771[6]
  i2770.Lock2Count = i2771[7]
  i2770.IsObstacle = !!i2771[8]
  i2770.Obstacle2Count = i2771[9]
  i2770.IsMore = !!i2771[10]
  i2770.IsConveyor = !!i2771[11]
  i2770.MaskTargetFish = i2771[12]
  i2770.BindFishStr = i2771[13]
  i2770.IceFishStr = i2771[14]
  i2770.UnKnowFishStr = i2771[15]
  i2770.KeyFishStr = i2771[16]
  i2770.LockFishStr = i2771[17]
  return i2770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2775 = data
  i2774.color = new pc.Color(i2775[0], i2775[1], i2775[2], i2775[3])
  request.r(i2775[4], i2775[5], 0, i2774, 'sprite')
  i2774.flipX = !!i2775[6]
  i2774.flipY = !!i2775[7]
  i2774.drawMode = i2775[8]
  i2774.size = new pc.Vec2( i2775[9], i2775[10] )
  i2774.tileMode = i2775[11]
  i2774.adaptiveModeThreshold = i2775[12]
  i2774.maskInteraction = i2775[13]
  i2774.spriteSortPoint = i2775[14]
  i2774.enabled = !!i2775[15]
  request.r(i2775[16], i2775[17], 0, i2774, 'sharedMaterial')
  var i2777 = i2775[18]
  var i2776 = []
  for(var i = 0; i < i2777.length; i += 2) {
  request.r(i2777[i + 0], i2777[i + 1], 2, i2776, '')
  }
  i2774.sharedMaterials = i2776
  i2774.receiveShadows = !!i2775[19]
  i2774.shadowCastingMode = i2775[20]
  i2774.sortingLayerID = i2775[21]
  i2774.sortingOrder = i2775[22]
  i2774.lightmapIndex = i2775[23]
  i2774.lightmapSceneIndex = i2775[24]
  i2774.lightmapScaleOffset = new pc.Vec4( i2775[25], i2775[26], i2775[27], i2775[28] )
  i2774.lightProbeUsage = i2775[29]
  i2774.reflectionProbeUsage = i2775[30]
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2779 = data
  request.r(i2779[0], i2779[1], 0, i2778, 'additionalVertexStreams')
  i2778.enabled = !!i2779[2]
  request.r(i2779[3], i2779[4], 0, i2778, 'sharedMaterial')
  var i2781 = i2779[5]
  var i2780 = []
  for(var i = 0; i < i2781.length; i += 2) {
  request.r(i2781[i + 0], i2781[i + 1], 2, i2780, '')
  }
  i2778.sharedMaterials = i2780
  i2778.receiveShadows = !!i2779[6]
  i2778.shadowCastingMode = i2779[7]
  i2778.sortingLayerID = i2779[8]
  i2778.sortingOrder = i2779[9]
  i2778.lightmapIndex = i2779[10]
  i2778.lightmapSceneIndex = i2779[11]
  i2778.lightmapScaleOffset = new pc.Vec4( i2779[12], i2779[13], i2779[14], i2779[15] )
  i2778.lightProbeUsage = i2779[16]
  i2778.reflectionProbeUsage = i2779[17]
  return i2778
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2782 = root || request.c( 'TMPro.TextMeshPro' )
  var i2783 = data
  i2782._SortingLayer = i2783[0]
  i2782._SortingLayerID = i2783[1]
  i2782._SortingOrder = i2783[2]
  i2782.m_hasFontAssetChanged = !!i2783[3]
  request.r(i2783[4], i2783[5], 0, i2782, 'm_renderer')
  i2782.m_maskType = i2783[6]
  i2782.m_text = i2783[7]
  i2782.m_isRightToLeft = !!i2783[8]
  request.r(i2783[9], i2783[10], 0, i2782, 'm_fontAsset')
  request.r(i2783[11], i2783[12], 0, i2782, 'm_sharedMaterial')
  var i2785 = i2783[13]
  var i2784 = []
  for(var i = 0; i < i2785.length; i += 2) {
  request.r(i2785[i + 0], i2785[i + 1], 2, i2784, '')
  }
  i2782.m_fontSharedMaterials = i2784
  request.r(i2783[14], i2783[15], 0, i2782, 'm_fontMaterial')
  var i2787 = i2783[16]
  var i2786 = []
  for(var i = 0; i < i2787.length; i += 2) {
  request.r(i2787[i + 0], i2787[i + 1], 2, i2786, '')
  }
  i2782.m_fontMaterials = i2786
  i2782.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2783[17], i2783[18], i2783[19], i2783[20])
  i2782.m_fontColor = new pc.Color(i2783[21], i2783[22], i2783[23], i2783[24])
  i2782.m_enableVertexGradient = !!i2783[25]
  i2782.m_colorMode = i2783[26]
  i2782.m_fontColorGradient = request.d('TMPro.VertexGradient', i2783[27], i2782.m_fontColorGradient)
  request.r(i2783[28], i2783[29], 0, i2782, 'm_fontColorGradientPreset')
  request.r(i2783[30], i2783[31], 0, i2782, 'm_spriteAsset')
  i2782.m_tintAllSprites = !!i2783[32]
  request.r(i2783[33], i2783[34], 0, i2782, 'm_StyleSheet')
  i2782.m_TextStyleHashCode = i2783[35]
  i2782.m_overrideHtmlColors = !!i2783[36]
  i2782.m_faceColor = UnityEngine.Color32.ConstructColor(i2783[37], i2783[38], i2783[39], i2783[40])
  i2782.m_fontSize = i2783[41]
  i2782.m_fontSizeBase = i2783[42]
  i2782.m_fontWeight = i2783[43]
  i2782.m_enableAutoSizing = !!i2783[44]
  i2782.m_fontSizeMin = i2783[45]
  i2782.m_fontSizeMax = i2783[46]
  i2782.m_fontStyle = i2783[47]
  i2782.m_HorizontalAlignment = i2783[48]
  i2782.m_VerticalAlignment = i2783[49]
  i2782.m_textAlignment = i2783[50]
  i2782.m_characterSpacing = i2783[51]
  i2782.m_wordSpacing = i2783[52]
  i2782.m_lineSpacing = i2783[53]
  i2782.m_lineSpacingMax = i2783[54]
  i2782.m_paragraphSpacing = i2783[55]
  i2782.m_charWidthMaxAdj = i2783[56]
  i2782.m_enableWordWrapping = !!i2783[57]
  i2782.m_wordWrappingRatios = i2783[58]
  i2782.m_overflowMode = i2783[59]
  request.r(i2783[60], i2783[61], 0, i2782, 'm_linkedTextComponent')
  request.r(i2783[62], i2783[63], 0, i2782, 'parentLinkedComponent')
  i2782.m_enableKerning = !!i2783[64]
  i2782.m_enableExtraPadding = !!i2783[65]
  i2782.checkPaddingRequired = !!i2783[66]
  i2782.m_isRichText = !!i2783[67]
  i2782.m_parseCtrlCharacters = !!i2783[68]
  i2782.m_isOrthographic = !!i2783[69]
  i2782.m_isCullingEnabled = !!i2783[70]
  i2782.m_horizontalMapping = i2783[71]
  i2782.m_verticalMapping = i2783[72]
  i2782.m_uvLineOffset = i2783[73]
  i2782.m_geometrySortingOrder = i2783[74]
  i2782.m_IsTextObjectScaleStatic = !!i2783[75]
  i2782.m_VertexBufferAutoSizeReduction = !!i2783[76]
  i2782.m_useMaxVisibleDescender = !!i2783[77]
  i2782.m_pageToDisplay = i2783[78]
  i2782.m_margin = new pc.Vec4( i2783[79], i2783[80], i2783[81], i2783[82] )
  i2782.m_isUsingLegacyAnimationComponent = !!i2783[83]
  i2782.m_isVolumetricText = !!i2783[84]
  request.r(i2783[85], i2783[86], 0, i2782, 'm_Material')
  i2782.m_Maskable = !!i2783[87]
  i2782.m_Color = new pc.Color(i2783[88], i2783[89], i2783[90], i2783[91])
  i2782.m_RaycastTarget = !!i2783[92]
  i2782.m_RaycastPadding = new pc.Vec4( i2783[93], i2783[94], i2783[95], i2783[96] )
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2789 = data
  i2788.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2789[0], i2788.main)
  i2788.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2789[1], i2788.colorBySpeed)
  i2788.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2789[2], i2788.colorOverLifetime)
  i2788.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2789[3], i2788.emission)
  i2788.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2789[4], i2788.rotationBySpeed)
  i2788.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2789[5], i2788.rotationOverLifetime)
  i2788.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2789[6], i2788.shape)
  i2788.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2789[7], i2788.sizeBySpeed)
  i2788.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2789[8], i2788.sizeOverLifetime)
  i2788.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2789[9], i2788.textureSheetAnimation)
  i2788.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2789[10], i2788.velocityOverLifetime)
  i2788.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2789[11], i2788.noise)
  i2788.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2789[12], i2788.inheritVelocity)
  i2788.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2789[13], i2788.forceOverLifetime)
  i2788.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2789[14], i2788.limitVelocityOverLifetime)
  i2788.useAutoRandomSeed = !!i2789[15]
  i2788.randomSeed = i2789[16]
  return i2788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2790 = root || new pc.ParticleSystemMain()
  var i2791 = data
  i2790.duration = i2791[0]
  i2790.loop = !!i2791[1]
  i2790.prewarm = !!i2791[2]
  i2790.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2791[3], i2790.startDelay)
  i2790.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2791[4], i2790.startLifetime)
  i2790.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2791[5], i2790.startSpeed)
  i2790.startSize3D = !!i2791[6]
  i2790.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2791[7], i2790.startSizeX)
  i2790.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2791[8], i2790.startSizeY)
  i2790.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2791[9], i2790.startSizeZ)
  i2790.startRotation3D = !!i2791[10]
  i2790.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2791[11], i2790.startRotationX)
  i2790.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2791[12], i2790.startRotationY)
  i2790.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2791[13], i2790.startRotationZ)
  i2790.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2791[14], i2790.startColor)
  i2790.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2791[15], i2790.gravityModifier)
  i2790.simulationSpace = i2791[16]
  request.r(i2791[17], i2791[18], 0, i2790, 'customSimulationSpace')
  i2790.simulationSpeed = i2791[19]
  i2790.useUnscaledTime = !!i2791[20]
  i2790.scalingMode = i2791[21]
  i2790.playOnAwake = !!i2791[22]
  i2790.maxParticles = i2791[23]
  i2790.emitterVelocityMode = i2791[24]
  i2790.stopAction = i2791[25]
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2792 = root || new pc.MinMaxCurve()
  var i2793 = data
  i2792.mode = i2793[0]
  i2792.curveMin = new pc.AnimationCurve( { keys_flow: i2793[1] } )
  i2792.curveMax = new pc.AnimationCurve( { keys_flow: i2793[2] } )
  i2792.curveMultiplier = i2793[3]
  i2792.constantMin = i2793[4]
  i2792.constantMax = i2793[5]
  return i2792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2794 = root || new pc.MinMaxGradient()
  var i2795 = data
  i2794.mode = i2795[0]
  i2794.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2795[1], i2794.gradientMin)
  i2794.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2795[2], i2794.gradientMax)
  i2794.colorMin = new pc.Color(i2795[3], i2795[4], i2795[5], i2795[6])
  i2794.colorMax = new pc.Color(i2795[7], i2795[8], i2795[9], i2795[10])
  return i2794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2797 = data
  i2796.mode = i2797[0]
  var i2799 = i2797[1]
  var i2798 = []
  for(var i = 0; i < i2799.length; i += 1) {
    i2798.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2799[i + 0]) );
  }
  i2796.colorKeys = i2798
  var i2801 = i2797[2]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2801[i + 0]) );
  }
  i2796.alphaKeys = i2800
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2802 = root || new pc.ParticleSystemColorBySpeed()
  var i2803 = data
  i2802.enabled = !!i2803[0]
  i2802.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2803[1], i2802.color)
  i2802.range = new pc.Vec2( i2803[2], i2803[3] )
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2807 = data
  i2806.color = new pc.Color(i2807[0], i2807[1], i2807[2], i2807[3])
  i2806.time = i2807[4]
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2811 = data
  i2810.alpha = i2811[0]
  i2810.time = i2811[1]
  return i2810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2812 = root || new pc.ParticleSystemColorOverLifetime()
  var i2813 = data
  i2812.enabled = !!i2813[0]
  i2812.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2813[1], i2812.color)
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2814 = root || new pc.ParticleSystemEmitter()
  var i2815 = data
  i2814.enabled = !!i2815[0]
  i2814.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2815[1], i2814.rateOverTime)
  i2814.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2815[2], i2814.rateOverDistance)
  var i2817 = i2815[3]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2817[i + 0]) );
  }
  i2814.bursts = i2816
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2820 = root || new pc.ParticleSystemBurst()
  var i2821 = data
  i2820.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2821[0], i2820.count)
  i2820.cycleCount = i2821[1]
  i2820.minCount = i2821[2]
  i2820.maxCount = i2821[3]
  i2820.repeatInterval = i2821[4]
  i2820.time = i2821[5]
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2822 = root || new pc.ParticleSystemRotationBySpeed()
  var i2823 = data
  i2822.enabled = !!i2823[0]
  i2822.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2823[1], i2822.x)
  i2822.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2823[2], i2822.y)
  i2822.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2823[3], i2822.z)
  i2822.separateAxes = !!i2823[4]
  i2822.range = new pc.Vec2( i2823[5], i2823[6] )
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2824 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2825 = data
  i2824.enabled = !!i2825[0]
  i2824.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2825[1], i2824.x)
  i2824.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2825[2], i2824.y)
  i2824.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2825[3], i2824.z)
  i2824.separateAxes = !!i2825[4]
  return i2824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2826 = root || new pc.ParticleSystemShape()
  var i2827 = data
  i2826.enabled = !!i2827[0]
  i2826.shapeType = i2827[1]
  i2826.randomDirectionAmount = i2827[2]
  i2826.sphericalDirectionAmount = i2827[3]
  i2826.randomPositionAmount = i2827[4]
  i2826.alignToDirection = !!i2827[5]
  i2826.radius = i2827[6]
  i2826.radiusMode = i2827[7]
  i2826.radiusSpread = i2827[8]
  i2826.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2827[9], i2826.radiusSpeed)
  i2826.radiusThickness = i2827[10]
  i2826.angle = i2827[11]
  i2826.length = i2827[12]
  i2826.boxThickness = new pc.Vec3( i2827[13], i2827[14], i2827[15] )
  i2826.meshShapeType = i2827[16]
  request.r(i2827[17], i2827[18], 0, i2826, 'mesh')
  request.r(i2827[19], i2827[20], 0, i2826, 'meshRenderer')
  request.r(i2827[21], i2827[22], 0, i2826, 'skinnedMeshRenderer')
  i2826.useMeshMaterialIndex = !!i2827[23]
  i2826.meshMaterialIndex = i2827[24]
  i2826.useMeshColors = !!i2827[25]
  i2826.normalOffset = i2827[26]
  i2826.arc = i2827[27]
  i2826.arcMode = i2827[28]
  i2826.arcSpread = i2827[29]
  i2826.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2827[30], i2826.arcSpeed)
  i2826.donutRadius = i2827[31]
  i2826.position = new pc.Vec3( i2827[32], i2827[33], i2827[34] )
  i2826.rotation = new pc.Vec3( i2827[35], i2827[36], i2827[37] )
  i2826.scale = new pc.Vec3( i2827[38], i2827[39], i2827[40] )
  return i2826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2828 = root || new pc.ParticleSystemSizeBySpeed()
  var i2829 = data
  i2828.enabled = !!i2829[0]
  i2828.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2829[1], i2828.x)
  i2828.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2829[2], i2828.y)
  i2828.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2829[3], i2828.z)
  i2828.separateAxes = !!i2829[4]
  i2828.range = new pc.Vec2( i2829[5], i2829[6] )
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2830 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2831 = data
  i2830.enabled = !!i2831[0]
  i2830.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2831[1], i2830.x)
  i2830.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2831[2], i2830.y)
  i2830.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2831[3], i2830.z)
  i2830.separateAxes = !!i2831[4]
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2832 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2833 = data
  i2832.enabled = !!i2833[0]
  i2832.mode = i2833[1]
  i2832.animation = i2833[2]
  i2832.numTilesX = i2833[3]
  i2832.numTilesY = i2833[4]
  i2832.useRandomRow = !!i2833[5]
  i2832.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2833[6], i2832.frameOverTime)
  i2832.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2833[7], i2832.startFrame)
  i2832.cycleCount = i2833[8]
  i2832.rowIndex = i2833[9]
  i2832.flipU = i2833[10]
  i2832.flipV = i2833[11]
  i2832.spriteCount = i2833[12]
  var i2835 = i2833[13]
  var i2834 = []
  for(var i = 0; i < i2835.length; i += 2) {
  request.r(i2835[i + 0], i2835[i + 1], 2, i2834, '')
  }
  i2832.sprites = i2834
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2838 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2839 = data
  i2838.enabled = !!i2839[0]
  i2838.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[1], i2838.x)
  i2838.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[2], i2838.y)
  i2838.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[3], i2838.z)
  i2838.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[4], i2838.radial)
  i2838.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[5], i2838.speedModifier)
  i2838.space = i2839[6]
  i2838.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[7], i2838.orbitalX)
  i2838.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[8], i2838.orbitalY)
  i2838.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[9], i2838.orbitalZ)
  i2838.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[10], i2838.orbitalOffsetX)
  i2838.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[11], i2838.orbitalOffsetY)
  i2838.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[12], i2838.orbitalOffsetZ)
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2840 = root || new pc.ParticleSystemNoise()
  var i2841 = data
  i2840.enabled = !!i2841[0]
  i2840.separateAxes = !!i2841[1]
  i2840.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2841[2], i2840.strengthX)
  i2840.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2841[3], i2840.strengthY)
  i2840.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2841[4], i2840.strengthZ)
  i2840.frequency = i2841[5]
  i2840.damping = !!i2841[6]
  i2840.octaveCount = i2841[7]
  i2840.octaveMultiplier = i2841[8]
  i2840.octaveScale = i2841[9]
  i2840.quality = i2841[10]
  i2840.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2841[11], i2840.scrollSpeed)
  i2840.scrollSpeedMultiplier = i2841[12]
  i2840.remapEnabled = !!i2841[13]
  i2840.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2841[14], i2840.remapX)
  i2840.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2841[15], i2840.remapY)
  i2840.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2841[16], i2840.remapZ)
  i2840.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2841[17], i2840.positionAmount)
  i2840.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2841[18], i2840.rotationAmount)
  i2840.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2841[19], i2840.sizeAmount)
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2842 = root || new pc.ParticleSystemInheritVelocity()
  var i2843 = data
  i2842.enabled = !!i2843[0]
  i2842.mode = i2843[1]
  i2842.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2843[2], i2842.curve)
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2844 = root || new pc.ParticleSystemForceOverLifetime()
  var i2845 = data
  i2844.enabled = !!i2845[0]
  i2844.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2845[1], i2844.x)
  i2844.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2845[2], i2844.y)
  i2844.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2845[3], i2844.z)
  i2844.space = i2845[4]
  i2844.randomized = !!i2845[5]
  return i2844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2846 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2847 = data
  i2846.enabled = !!i2847[0]
  i2846.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2847[1], i2846.limit)
  i2846.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2847[2], i2846.limitX)
  i2846.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2847[3], i2846.limitY)
  i2846.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2847[4], i2846.limitZ)
  i2846.dampen = i2847[5]
  i2846.separateAxes = !!i2847[6]
  i2846.space = i2847[7]
  i2846.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2847[8], i2846.drag)
  i2846.multiplyDragByParticleSize = !!i2847[9]
  i2846.multiplyDragByParticleVelocity = !!i2847[10]
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2849 = data
  request.r(i2849[0], i2849[1], 0, i2848, 'mesh')
  i2848.meshCount = i2849[2]
  i2848.activeVertexStreamsCount = i2849[3]
  i2848.alignment = i2849[4]
  i2848.renderMode = i2849[5]
  i2848.sortMode = i2849[6]
  i2848.lengthScale = i2849[7]
  i2848.velocityScale = i2849[8]
  i2848.cameraVelocityScale = i2849[9]
  i2848.normalDirection = i2849[10]
  i2848.sortingFudge = i2849[11]
  i2848.minParticleSize = i2849[12]
  i2848.maxParticleSize = i2849[13]
  i2848.pivot = new pc.Vec3( i2849[14], i2849[15], i2849[16] )
  request.r(i2849[17], i2849[18], 0, i2848, 'trailMaterial')
  i2848.applyActiveColorSpace = !!i2849[19]
  i2848.enabled = !!i2849[20]
  request.r(i2849[21], i2849[22], 0, i2848, 'sharedMaterial')
  var i2851 = i2849[23]
  var i2850 = []
  for(var i = 0; i < i2851.length; i += 2) {
  request.r(i2851[i + 0], i2851[i + 1], 2, i2850, '')
  }
  i2848.sharedMaterials = i2850
  i2848.receiveShadows = !!i2849[24]
  i2848.shadowCastingMode = i2849[25]
  i2848.sortingLayerID = i2849[26]
  i2848.sortingOrder = i2849[27]
  i2848.lightmapIndex = i2849[28]
  i2848.lightmapSceneIndex = i2849[29]
  i2848.lightmapScaleOffset = new pc.Vec4( i2849[30], i2849[31], i2849[32], i2849[33] )
  i2848.lightProbeUsage = i2849[34]
  i2848.reflectionProbeUsage = i2849[35]
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2853 = data
  i2852.type = i2853[0]
  i2852.color = new pc.Color(i2853[1], i2853[2], i2853[3], i2853[4])
  i2852.cullingMask = i2853[5]
  i2852.intensity = i2853[6]
  i2852.range = i2853[7]
  i2852.spotAngle = i2853[8]
  i2852.shadows = i2853[9]
  i2852.shadowNormalBias = i2853[10]
  i2852.shadowBias = i2853[11]
  i2852.shadowStrength = i2853[12]
  i2852.shadowResolution = i2853[13]
  i2852.lightmapBakeType = i2853[14]
  i2852.renderMode = i2853[15]
  request.r(i2853[16], i2853[17], 0, i2852, 'cookie')
  i2852.cookieSize = i2853[18]
  i2852.shadowNearPlane = i2853[19]
  i2852.occlusionMaskChannel = i2853[20]
  i2852.isBaked = !!i2853[21]
  i2852.mixedLightingMode = i2853[22]
  i2852.enabled = !!i2853[23]
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2855 = data
  i2854.name = i2855[0]
  i2854.halfPrecision = !!i2855[1]
  i2854.useSimplification = !!i2855[2]
  i2854.useUInt32IndexFormat = !!i2855[3]
  i2854.vertexCount = i2855[4]
  i2854.aabb = i2855[5]
  var i2857 = i2855[6]
  var i2856 = []
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.push( !!i2857[i + 0] );
  }
  i2854.streams = i2856
  i2854.vertices = i2855[7]
  var i2859 = i2855[8]
  var i2858 = []
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2859[i + 0]) );
  }
  i2854.subMeshes = i2858
  var i2861 = i2855[9]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 16) {
    i2860.push( new pc.Mat4().setData(i2861[i + 0], i2861[i + 1], i2861[i + 2], i2861[i + 3],  i2861[i + 4], i2861[i + 5], i2861[i + 6], i2861[i + 7],  i2861[i + 8], i2861[i + 9], i2861[i + 10], i2861[i + 11],  i2861[i + 12], i2861[i + 13], i2861[i + 14], i2861[i + 15]) );
  }
  i2854.bindposes = i2860
  var i2863 = i2855[10]
  var i2862 = []
  for(var i = 0; i < i2863.length; i += 1) {
    i2862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2863[i + 0]) );
  }
  i2854.blendShapes = i2862
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2869 = data
  i2868.triangles = i2869[0]
  return i2868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2875 = data
  i2874.name = i2875[0]
  var i2877 = i2875[1]
  var i2876 = []
  for(var i = 0; i < i2877.length; i += 1) {
    i2876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2877[i + 0]) );
  }
  i2874.frames = i2876
  return i2874
}

Deserializers["BubbleTwoSlot"] = function (request, data, root) {
  var i2878 = root || request.c( 'BubbleTwoSlot' )
  var i2879 = data
  i2878.layoutCenter = new pc.Vec2( i2879[0], i2879[1] )
  i2878.horizontalOffset = i2879[2]
  i2878.currentConfig = request.d('BubbleConfig', i2879[3], i2878.currentConfig)
  var i2881 = i2879[4]
  var i2880 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i2881.length; i += 2) {
  request.r(i2881[i + 0], i2881[i + 1], 1, i2880, '')
  }
  i2878.birds = i2880
  request.r(i2879[5], i2879[6], 0, i2878, 'birdParent')
  i2878.refillPopDuration = i2879[7]
  i2878.refillMoveDuration = i2879[8]
  i2878.clipBirdsToCircle = !!i2879[9]
  return i2878
}

Deserializers["BubbleThreeSlot"] = function (request, data, root) {
  var i2882 = root || request.c( 'BubbleThreeSlot' )
  var i2883 = data
  i2882.layoutCenter = new pc.Vec2( i2883[0], i2883[1] )
  i2882.horizontalOffset = i2883[2]
  i2882.verticalOffset = i2883[3]
  i2882.currentConfig = request.d('BubbleConfig', i2883[4], i2882.currentConfig)
  var i2885 = i2883[5]
  var i2884 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i2885.length; i += 2) {
  request.r(i2885[i + 0], i2885[i + 1], 1, i2884, '')
  }
  i2882.birds = i2884
  request.r(i2883[6], i2883[7], 0, i2882, 'birdParent')
  i2882.refillPopDuration = i2883[8]
  i2882.refillMoveDuration = i2883[9]
  i2882.clipBirdsToCircle = !!i2883[10]
  return i2882
}

Deserializers["BubbleFourSlot"] = function (request, data, root) {
  var i2886 = root || request.c( 'BubbleFourSlot' )
  var i2887 = data
  i2886.layoutCenter = new pc.Vec2( i2887[0], i2887[1] )
  i2886.horizontalOffset = i2887[2]
  i2886.verticalOffset = i2887[3]
  i2886.currentConfig = request.d('BubbleConfig', i2887[4], i2886.currentConfig)
  var i2889 = i2887[5]
  var i2888 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i2889.length; i += 2) {
  request.r(i2889[i + 0], i2889[i + 1], 1, i2888, '')
  }
  i2886.birds = i2888
  request.r(i2887[6], i2887[7], 0, i2886, 'birdParent')
  i2886.refillPopDuration = i2887[8]
  i2886.refillMoveDuration = i2887[9]
  i2886.clipBirdsToCircle = !!i2887[10]
  return i2886
}

Deserializers["BubbleFiveSlot"] = function (request, data, root) {
  var i2890 = root || request.c( 'BubbleFiveSlot' )
  var i2891 = data
  i2890.layoutCenter = new pc.Vec2( i2891[0], i2891[1] )
  i2890.horizontalOffset = i2891[2]
  i2890.verticalOffset = i2891[3]
  i2890.currentConfig = request.d('BubbleConfig', i2891[4], i2890.currentConfig)
  var i2893 = i2891[5]
  var i2892 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i2893.length; i += 2) {
  request.r(i2893[i + 0], i2893[i + 1], 1, i2892, '')
  }
  i2890.birds = i2892
  request.r(i2891[6], i2891[7], 0, i2890, 'birdParent')
  i2890.refillPopDuration = i2891[8]
  i2890.refillMoveDuration = i2891[9]
  i2890.clipBirdsToCircle = !!i2891[10]
  return i2890
}

Deserializers["FrozenNestObstacle"] = function (request, data, root) {
  var i2894 = root || request.c( 'FrozenNestObstacle' )
  var i2895 = data
  i2894.layers = i2895[0]
  i2894.touchTolerance = i2895[1]
  i2894.blockedMessage = i2895[2]
  i2894.overlayPart = i2895[3]
  i2894.layerTextPart = i2895[4]
  i2894.minAlpha = i2895[5]
  return i2894
}

Deserializers["LockedNestObstacle"] = function (request, data, root) {
  var i2896 = root || request.c( 'LockedNestObstacle' )
  var i2897 = data
  i2896.blockedMessage = i2897[0]
  request.r(i2897[1], i2897[2], 0, i2896, 'flyingKeyPrefab')
  i2896.keyFlyDuration = i2897[3]
  i2896.keyArcHeight = i2897[4]
  i2896.keySortingOffset = i2897[5]
  i2896.chainPart = i2897[6]
  i2896.lockPart = i2897[7]
  i2896.countTextPart = i2897[8]
  return i2896
}

Deserializers["KeyNestObstacle"] = function (request, data, root) {
  var i2898 = root || request.c( 'KeyNestObstacle' )
  var i2899 = data
  i2898.keyPart = i2899[0]
  return i2898
}

Deserializers["HiddenNestObstacle"] = function (request, data, root) {
  var i2900 = root || request.c( 'HiddenNestObstacle' )
  var i2901 = data
  i2900.blockedMessage = i2901[0]
  i2900.bottomTolerance = i2901[1]
  i2900.settleTime = i2901[2]
  i2900.revealDuration = i2901[3]
  i2900.coverPart = i2901[4]
  return i2900
}

Deserializers["StoneNestObstacle"] = function (request, data, root) {
  var i2902 = root || request.c( 'StoneNestObstacle' )
  var i2903 = data
  i2902.stonePart = i2903[0]
  var i2905 = i2903[1]
  var i2904 = []
  for(var i = 0; i < i2905.length; i += 1) {
    i2904.push( i2905[i + 0] );
  }
  i2902.hiddenParts = i2904
  i2902.keepUpright = !!i2903[2]
  i2902.stoneMass = i2903[3]
  return i2902
}

Deserializers["BigNestObstacle"] = function (request, data, root) {
  var i2908 = root || request.c( 'BigNestObstacle' )
  var i2909 = data
  i2908.countTextPart = i2909[0]
  return i2908
}

Deserializers["HiddenBirdObstacle"] = function (request, data, root) {
  var i2910 = root || request.c( 'HiddenBirdObstacle' )
  var i2911 = data
  i2910.overlayPart = i2911[0]
  i2910.revealDuration = i2911[1]
  return i2910
}

Deserializers["BindBirdObstacle"] = function (request, data, root) {
  var i2912 = root || request.c( 'BindBirdObstacle' )
  var i2913 = data
  i2912.overlayPart = i2913[0]
  i2912.sortingOffset = i2913[1]
  i2912.clearDuration = i2913[2]
  return i2912
}

Deserializers["IceBirdObstacle"] = function (request, data, root) {
  var i2914 = root || request.c( 'IceBirdObstacle' )
  var i2915 = data
  i2914.blockedMessage = i2915[0]
  i2914.overlayPart = i2915[1]
  i2914.textPart = i2915[2]
  return i2914
}

Deserializers["TargetNestObstacle"] = function (request, data, root) {
  var i2916 = root || request.c( 'TargetNestObstacle' )
  var i2917 = data
  i2916.blockedMessage = i2917[0]
  i2916.revealDuration = i2917[1]
  i2916.overlayPart = i2917[2]
  i2916.iconPart = i2917[3]
  return i2916
}

Deserializers["Bird"] = function (request, data, root) {
  var i2918 = root || request.c( 'Bird' )
  var i2919 = data
  request.r(i2919[0], i2919[1], 0, i2918, 'Content')
  var i2921 = i2919[2]
  var i2920 = []
  for(var i = 0; i < i2921.length; i += 2) {
  request.r(i2921[i + 0], i2921[i + 1], 2, i2920, '')
  }
  i2918.trailParticles = i2920
  request.r(i2919[3], i2919[4], 0, i2918, '_skeletalAnimation')
  i2918._birdData = request.d('BirdData', i2919[5], i2918._birdData)
  i2918._moveDuration = i2919[6]
  i2918._slotScale = i2919[7]
  i2918._flightSpeed = i2919[8]
  i2918._flightJumpPower = i2919[9]
  i2918._flightJumpPowerPerUnit = i2919[10]
  i2918._sourceFacesRight = !!i2919[11]
  i2918._flightFacingDeadZone = i2919[12]
  i2918._landContactFallbackDelay = i2919[13]
  request.r(i2919[14], i2919[15], 0, i2918, '_collider')
  request.r(i2919[16], i2919[17], 0, i2918, '_skeletalRenderer')
  i2918._idleUpdateFps = i2919[18]
  i2918._freezeSpineInBubble = !!i2919[19]
  i2918._freezeSpineWhenSleeping = !!i2919[20]
  return i2918
}

Deserializers["BirdData"] = function (request, data, root) {
  var i2924 = root || request.c( 'BirdData' )
  var i2925 = data
  i2924.birdType = i2925[0]
  i2924.birdId = i2925[1]
  request.r(i2925[2], i2925[3], 0, i2924, 'spriteIcon')
  request.r(i2925[4], i2925[5], 0, i2924, 'skeletonDataAsset')
  return i2924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2927 = data
  i2926.usedByComposite = !!i2927[0]
  i2926.autoTiling = !!i2927[1]
  i2926.size = new pc.Vec2( i2927[2], i2927[3] )
  i2926.edgeRadius = i2927[4]
  i2926.enabled = !!i2927[5]
  i2926.isTrigger = !!i2927[6]
  i2926.usedByEffector = !!i2927[7]
  i2926.density = i2927[8]
  i2926.offset = new pc.Vec2( i2927[9], i2927[10] )
  request.r(i2927[11], i2927[12], 0, i2926, 'material')
  return i2926
}

Deserializers["BirdParts"] = function (request, data, root) {
  var i2928 = root || request.c( 'BirdParts' )
  var i2929 = data
  var i2931 = i2929[0]
  var i2930 = []
  for(var i = 0; i < i2931.length; i += 1) {
    i2930.push( request.d('BirdParts+Entry', i2931[i + 0]) );
  }
  i2928.parts = i2930
  return i2928
}

Deserializers["BirdParts+Entry"] = function (request, data, root) {
  var i2934 = root || request.c( 'BirdParts+Entry' )
  var i2935 = data
  i2934.key = i2935[0]
  request.r(i2935[1], i2935[2], 0, i2934, 'target')
  return i2934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2937 = data
  request.r(i2937[0], i2937[1], 0, i2936, 'sharedMesh')
  return i2936
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i2938 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i2939 = data
  i2938.loop = !!i2939[0]
  i2938.timeScale = i2939[1]
  request.r(i2939[2], i2939[3], 0, i2938, 'skeletonDataAsset')
  i2938.initialSkinName = i2939[4]
  i2938.fixPrefabOverrideViaMeshFilter = i2939[5]
  i2938.initialFlipX = !!i2939[6]
  i2938.initialFlipY = !!i2939[7]
  i2938.updateWhenInvisible = i2939[8]
  i2938.zSpacing = i2939[9]
  i2938.useClipping = !!i2939[10]
  i2938.immutableTriangles = !!i2939[11]
  i2938.pmaVertexColors = !!i2939[12]
  i2938.clearStateOnDisable = !!i2939[13]
  i2938.tintBlack = !!i2939[14]
  i2938.singleSubmesh = !!i2939[15]
  i2938.fixDrawOrder = !!i2939[16]
  i2938.addNormals = !!i2939[17]
  i2938.calculateTangents = !!i2939[18]
  i2938.maskInteraction = i2939[19]
  i2938.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i2939[20], i2938.maskMaterials)
  i2938.disableRenderingOnOverride = !!i2939[21]
  i2938.updateTiming = i2939[22]
  i2938.unscaledTime = !!i2939[23]
  i2938._animationName = i2939[24]
  var i2941 = i2939[25]
  var i2940 = []
  for(var i = 0; i < i2941.length; i += 1) {
    i2940.push( i2941[i + 0] );
  }
  i2938.separatorSlotNames = i2940
  i2938.physicsPositionInheritanceFactor = new pc.Vec2( i2939[26], i2939[27] )
  i2938.physicsRotationInheritanceFactor = i2939[28]
  request.r(i2939[29], i2939[30], 0, i2938, 'physicsMovementRelativeTo')
  return i2938
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i2942 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i2943 = data
  var i2945 = i2943[0]
  var i2944 = []
  for(var i = 0; i < i2945.length; i += 2) {
  request.r(i2945[i + 0], i2945[i + 1], 2, i2944, '')
  }
  i2942.materialsMaskDisabled = i2944
  var i2947 = i2943[1]
  var i2946 = []
  for(var i = 0; i < i2947.length; i += 2) {
  request.r(i2947[i + 0], i2947[i + 1], 2, i2946, '')
  }
  i2942.materialsInsideMask = i2946
  var i2949 = i2943[2]
  var i2948 = []
  for(var i = 0; i < i2949.length; i += 2) {
  request.r(i2949[i + 0], i2949[i + 1], 2, i2948, '')
  }
  i2942.materialsOutsideMask = i2948
  return i2942
}

Deserializers["MagnetNestFx"] = function (request, data, root) {
  var i2952 = root || request.c( 'MagnetNestFx' )
  var i2953 = data
  i2952.appearDuration = i2953[0]
  i2952.startScaleMultiplier = i2953[1]
  i2952.endScaleMultiplier = i2953[2]
  i2952.vanishDuration = i2953[3]
  return i2952
}

Deserializers["ShuffleFX"] = function (request, data, root) {
  var i2954 = root || request.c( 'ShuffleFX' )
  var i2955 = data
  request.r(i2955[0], i2955[1], 0, i2954, 'fan')
  request.r(i2955[2], i2955[3], 0, i2954, 'fan_spin')
  i2954.appearDuration = i2955[4]
  i2954.spinDuration = i2955[5]
  i2954.disappearDuration = i2955[6]
  i2954.totalSpinAngle = i2955[7]
  i2954.blurThreshold = i2955[8]
  i2954.wobbleAngle = i2955[9]
  i2954.wobbleOffset = i2955[10]
  i2954.wobbleSpeed = i2955[11]
  i2954.sortingOrderOffset = i2955[12]
  return i2954
}

Deserializers["ParticlesBase"] = function (request, data, root) {
  var i2956 = root || request.c( 'ParticlesBase' )
  var i2957 = data
  i2956.effectType = i2957[0]
  request.r(i2957[1], i2957[2], 0, i2956, 'particles')
  var i2959 = i2957[3]
  var i2958 = []
  for(var i = 0; i < i2959.length; i += 2) {
  request.r(i2959[i + 0], i2959[i + 1], 2, i2958, '')
  }
  i2956.allParticles = i2958
  return i2956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2961 = data
  i2960.name = i2961[0]
  i2960.atlasId = i2961[1]
  i2960.mipmapCount = i2961[2]
  i2960.hdr = !!i2961[3]
  i2960.size = i2961[4]
  i2960.anisoLevel = i2961[5]
  i2960.filterMode = i2961[6]
  var i2963 = i2961[7]
  var i2962 = []
  for(var i = 0; i < i2963.length; i += 4) {
    i2962.push( UnityEngine.Rect.MinMaxRect(i2963[i + 0], i2963[i + 1], i2963[i + 2], i2963[i + 3]) );
  }
  i2960.rects = i2962
  i2960.wrapU = i2961[8]
  i2960.wrapV = i2961[9]
  return i2960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2967 = data
  i2966.name = i2967[0]
  i2966.index = i2967[1]
  i2966.startup = !!i2967[2]
  return i2966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2969 = data
  i2968.aspect = i2969[0]
  i2968.orthographic = !!i2969[1]
  i2968.orthographicSize = i2969[2]
  i2968.backgroundColor = new pc.Color(i2969[3], i2969[4], i2969[5], i2969[6])
  i2968.nearClipPlane = i2969[7]
  i2968.farClipPlane = i2969[8]
  i2968.fieldOfView = i2969[9]
  i2968.depth = i2969[10]
  i2968.clearFlags = i2969[11]
  i2968.cullingMask = i2969[12]
  i2968.rect = i2969[13]
  request.r(i2969[14], i2969[15], 0, i2968, 'targetTexture')
  i2968.usePhysicalProperties = !!i2969[16]
  i2968.focalLength = i2969[17]
  i2968.sensorSize = new pc.Vec2( i2969[18], i2969[19] )
  i2968.lensShift = new pc.Vec2( i2969[20], i2969[21] )
  i2968.gateFit = i2969[22]
  i2968.commandBufferCount = i2969[23]
  i2968.cameraType = i2969[24]
  i2968.enabled = !!i2969[25]
  return i2968
}

Deserializers["BoardManager"] = function (request, data, root) {
  var i2970 = root || request.c( 'BoardManager' )
  var i2971 = data
  var i2973 = i2971[0]
  var i2972 = new (System.Collections.Generic.List$1(Bridge.ns('BubbleBase')))
  for(var i = 0; i < i2973.length; i += 2) {
  request.r(i2973[i + 0], i2973[i + 1], 1, i2972, '')
  }
  i2970.bubbleActive = i2972
  var i2975 = i2971[1]
  var i2974 = []
  for(var i = 0; i < i2975.length; i += 2) {
  request.r(i2975[i + 0], i2975[i + 1], 2, i2974, '')
  }
  i2970._bubblePrefabs = i2974
  var i2977 = i2971[2]
  var i2976 = []
  for(var i = 0; i < i2977.length; i += 2) {
  request.r(i2977[i + 0], i2977[i + 1], 2, i2976, '')
  }
  i2970._spawnPoints = i2976
  request.r(i2971[3], i2971[4], 0, i2970, '_waterSurface')
  request.r(i2971[5], i2971[6], 0, i2970, '_bubbleParent')
  request.r(i2971[7], i2971[8], 0, i2970, '_magnetGatherPoint')
  i2970._surfaceTolerance = i2971[9]
  request.r(i2971[10], i2971[11], 0, i2970, '_wallsParent')
  request.r(i2971[12], i2971[13], 0, i2970, '_cloude')
  request.r(i2971[14], i2971[15], 0, i2970, '_bottomCollider')
  request.r(i2971[16], i2971[17], 0, i2970, '_alignmentCamera')
  i2970._horizontalSpawnJitter = i2971[18]
  i2970._inwardImpulseMin = i2971[19]
  i2970._inwardImpulseMax = i2971[20]
  i2970._initialSpawnCount = i2971[21]
  i2970._initialSpawnInterval = i2971[22]
  i2970._checkInterval = i2971[23]
  i2970._spawnInterval = i2971[24]
  i2970._deadlockCheckDelay = i2971[25]
  i2970._settleSpeed = i2971[26]
  i2970._settleTime = i2971[27]
  i2970._settleTimeout = i2971[28]
  request.r(i2971[29], i2971[30], 0, i2970, '_boxBird')
  var i2979 = i2971[31]
  var i2978 = []
  for(var i = 0; i < i2979.length; i += 2) {
  request.r(i2979[i + 0], i2979[i + 1], 2, i2978, '')
  }
  i2970._SpriteBoxBirds = i2978
  return i2970
}

Deserializers["TopContainer"] = function (request, data, root) {
  var i2986 = root || request.c( 'TopContainer' )
  var i2987 = data
  i2986.animatingCount = i2987[0]
  request.r(i2987[1], i2987[2], 0, i2986, 'top')
  request.r(i2987[3], i2987[4], 0, i2986, 'dockContainer')
  request.r(i2987[5], i2987[6], 0, i2986, 'slotContainer')
  request.r(i2987[7], i2987[8], 0, i2986, '_countComplateText')
  request.r(i2987[9], i2987[10], 0, i2986, 'outsideBirdHolder')
  request.r(i2987[11], i2987[12], 0, i2986, 'fitCamera')
  i2986.referenceResolution = new pc.Vec2( i2987[13], i2987[14] )
  i2986.referenceOrthographicSize = i2987[15]
  i2986.cameraFitPadding = i2987[16]
  i2986.allowCameraFitUpscale = !!i2987[17]
  return i2986
}

Deserializers["DockContainer"] = function (request, data, root) {
  var i2988 = root || request.c( 'DockContainer' )
  var i2989 = data
  i2988.dockCount = i2989[0]
  i2988.activeOrderCount = i2989[1]
  var i2991 = i2989[2]
  var i2990 = new (System.Collections.Generic.List$1(Bridge.ns('BirdDock')))
  for(var i = 0; i < i2991.length; i += 2) {
  request.r(i2991[i + 0], i2991[i + 1], 1, i2990, '')
  }
  i2988.dockSlot = i2990
  request.r(i2989[3], i2989[4], 0, i2988, 'tileDockPrefab')
  return i2988
}

Deserializers["TimeNestController"] = function (request, data, root) {
  var i2994 = root || request.c( 'TimeNestController' )
  var i2995 = data
  return i2994
}

Deserializers["BirdDock"] = function (request, data, root) {
  var i2996 = root || request.c( 'BirdDock' )
  var i2997 = data
  i2996.tileType = i2997[0]
  i2996.birdId = i2997[1]
  i2996.isLock = !!i2997[2]
  i2996.isAnim = !!i2997[3]
  request.r(i2997[4], i2997[5], 0, i2996, 'visual')
  var i2999 = i2997[6]
  var i2998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2999.length; i += 2) {
  request.r(i2999[i + 0], i2999[i + 1], 1, i2998, '')
  }
  i2996.points = i2998
  request.r(i2997[7], i2997[8], 0, i2996, '_targetSprite')
  request.r(i2997[9], i2997[10], 0, i2996, '_amountText')
  request.r(i2997[11], i2997[12], 0, i2996, 'addUI')
  request.r(i2997[13], i2997[14], 0, i2996, 'orderUI')
  i2996.Max = i2997[15]
  return i2996
}

Deserializers["DockCountdown"] = function (request, data, root) {
  var i3002 = root || request.c( 'DockCountdown' )
  var i3003 = data
  request.r(i3003[0], i3003[1], 0, i3002, 'countdownRoot')
  request.r(i3003[2], i3003[3], 0, i3002, 'timeText')
  i3002.warningThreshold = i3003[4]
  i3002.warningColor = new pc.Color(i3003[5], i3003[6], i3003[7], i3003[8])
  var i3005 = i3003[9]
  var i3004 = []
  for(var i = 0; i < i3005.length; i += 2) {
  request.r(i3005[i + 0], i3005[i + 1], 2, i3004, '')
  }
  i3002.warningObjects = i3004
  return i3002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i3008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i3009 = data
  i3008.frontSortingLayerID = i3009[0]
  i3008.frontSortingOrder = i3009[1]
  i3008.backSortingLayerID = i3009[2]
  i3008.backSortingOrder = i3009[3]
  i3008.alphaCutoff = i3009[4]
  request.r(i3009[5], i3009[6], 0, i3008, 'sprite')
  i3008.tileMode = i3009[7]
  i3008.isCustomRangeActive = !!i3009[8]
  i3008.spriteSortPoint = i3009[9]
  i3008.enabled = !!i3009[10]
  request.r(i3009[11], i3009[12], 0, i3008, 'sharedMaterial')
  var i3011 = i3009[13]
  var i3010 = []
  for(var i = 0; i < i3011.length; i += 2) {
  request.r(i3011[i + 0], i3011[i + 1], 2, i3010, '')
  }
  i3008.sharedMaterials = i3010
  i3008.receiveShadows = !!i3009[14]
  i3008.shadowCastingMode = i3009[15]
  i3008.sortingLayerID = i3009[16]
  i3008.sortingOrder = i3009[17]
  i3008.lightmapIndex = i3009[18]
  i3008.lightmapSceneIndex = i3009[19]
  i3008.lightmapScaleOffset = new pc.Vec4( i3009[20], i3009[21], i3009[22], i3009[23] )
  i3008.lightProbeUsage = i3009[24]
  i3008.reflectionProbeUsage = i3009[25]
  return i3008
}

Deserializers["SlotContainer"] = function (request, data, root) {
  var i3012 = root || request.c( 'SlotContainer' )
  var i3013 = data
  var i3015 = i3013[0]
  var i3014 = new (System.Collections.Generic.List$1(Bridge.ns('BirdSlot')))
  for(var i = 0; i < i3015.length; i += 2) {
  request.r(i3015[i + 0], i3015[i + 1], 1, i3014, '')
  }
  i3012.tileSlots = i3014
  request.r(i3013[1], i3013[2], 0, i3012, 'ExtraSlotPos')
  request.r(i3013[3], i3013[4], 0, i3012, 'tile')
  request.r(i3013[5], i3013[6], 0, i3012, 'branchWave')
  return i3012
}

Deserializers["BranchWave"] = function (request, data, root) {
  var i3018 = root || request.c( 'BranchWave' )
  var i3019 = data
  i3018.amplitude = i3019[0]
  i3018.speed = i3019[1]
  i3018.frequency = i3019[2]
  i3018.damping = i3019[3]
  i3018.falloff = i3019[4]
  i3018.riderTiltScale = i3019[5]
  return i3018
}

Deserializers["BirdSlot"] = function (request, data, root) {
  var i3020 = root || request.c( 'BirdSlot' )
  var i3021 = data
  i3020.isAnim = !!i3021[0]
  request.r(i3021[1], i3021[2], 0, i3020, 'warningSprite')
  return i3020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i3022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i3023 = data
  i3022.sortingLayerIndex = i3023[0]
  i3022.sortingOrder = i3023[1]
  i3022.sortingLayerName = i3023[2]
  i3022.enabled = !!i3023[3]
  return i3022
}

Deserializers["OutsideBirdHolder"] = function (request, data, root) {
  var i3024 = root || request.c( 'OutsideBirdHolder' )
  var i3025 = data
  request.r(i3025[0], i3025[1], 0, i3024, 'm_TxtCount')
  request.r(i3025[2], i3025[3], 0, i3024, 'm_Canvas')
  request.r(i3025[4], i3025[5], 0, i3024, 'm_ObjContent')
  request.r(i3025[6], i3025[7], 0, i3024, 'm_OutsideBirdPrefab')
  request.r(i3025[8], i3025[9], 0, i3024, 'm_NestVisual')
  i3024.m_ShakeDuration = i3025[10]
  i3024.m_ShakeScale = i3025[11]
  i3024.m_ShakeRotation = i3025[12]
  return i3024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3027 = data
  i3026.planeDistance = i3027[0]
  i3026.referencePixelsPerUnit = i3027[1]
  i3026.isFallbackOverlay = !!i3027[2]
  i3026.renderMode = i3027[3]
  i3026.renderOrder = i3027[4]
  i3026.sortingLayerName = i3027[5]
  i3026.sortingOrder = i3027[6]
  i3026.scaleFactor = i3027[7]
  request.r(i3027[8], i3027[9], 0, i3026, 'worldCamera')
  i3026.overrideSorting = !!i3027[10]
  i3026.pixelPerfect = !!i3027[11]
  i3026.targetDisplay = i3027[12]
  i3026.overridePixelPerfect = !!i3027[13]
  i3026.enabled = !!i3027[14]
  return i3026
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i3028 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i3029 = data
  i3028.m_StartCorner = i3029[0]
  i3028.m_StartAxis = i3029[1]
  i3028.m_CellSize = new pc.Vec2( i3029[2], i3029[3] )
  i3028.m_Spacing = new pc.Vec2( i3029[4], i3029[5] )
  i3028.m_Constraint = i3029[6]
  i3028.m_ConstraintCount = i3029[7]
  i3028.m_Padding = UnityEngine.RectOffset.FromPaddings(i3029[8], i3029[9], i3029[10], i3029[11])
  i3028.m_ChildAlignment = i3029[12]
  return i3028
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i3030 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i3031 = data
  i3030.m_HorizontalFit = i3031[0]
  i3030.m_VerticalFit = i3031[1]
  return i3030
}

Deserializers["SpriteFitScreenHeight"] = function (request, data, root) {
  var i3032 = root || request.c( 'SpriteFitScreenHeight' )
  var i3033 = data
  request.r(i3033[0], i3033[1], 0, i3032, 'm_Camera')
  i3032.m_Overscan = i3033[2]
  return i3032
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i3034 = root || request.c( 'LevelManager' )
  var i3035 = data
  request.r(i3035[0], i3035[1], 0, i3034, 'birdPrefab')
  request.r(i3035[2], i3035[3], 0, i3034, 'birdDataSO')
  request.r(i3035[4], i3035[5], 0, i3034, 'obstacleConfigSO')
  request.r(i3035[6], i3035[7], 0, i3034, 'boardManager')
  request.r(i3035[8], i3035[9], 0, i3034, 'levelDifficultyFile')
  i3034.totalLevelCount = i3035[10]
  i3034.playableLevel = i3035[11]
  var i3037 = i3035[12]
  var i3036 = []
  for(var i = 0; i < i3037.length; i += 1) {
    i3036.push( request.d('LevelManager+LevelSet', i3037[i + 0]) );
  }
  i3034.levelSets = i3036
  return i3034
}

Deserializers["LevelManager+LevelSet"] = function (request, data, root) {
  var i3040 = root || request.c( 'LevelManager+LevelSet' )
  var i3041 = data
  i3040.name = i3041[0]
  request.r(i3041[1], i3041[2], 0, i3040, 'levelTableFile')
  var i3043 = i3041[3]
  var i3042 = []
  for(var i = 0; i < i3043.length; i += 2) {
  request.r(i3043[i + 0], i3043[i + 1], 2, i3042, '')
  }
  i3040.bubbleFiles = i3042
  return i3040
}

Deserializers["ControllerManager"] = function (request, data, root) {
  var i3046 = root || request.c( 'ControllerManager' )
  var i3047 = data
  i3046.layerMask = UnityEngine.LayerMask.FromIntegerValue( i3047[0] )
  i3046.layerMaskBlocker = UnityEngine.LayerMask.FromIntegerValue( i3047[1] )
  i3046.layerDockMask = UnityEngine.LayerMask.FromIntegerValue( i3047[2] )
  return i3046
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3048 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3049 = data
  request.r(i3049[0], i3049[1], 0, i3048, 'm_FirstSelected')
  i3048.m_sendNavigationEvents = !!i3049[2]
  i3048.m_DragThreshold = i3049[3]
  return i3048
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3050 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3051 = data
  i3050.m_HorizontalAxis = i3051[0]
  i3050.m_VerticalAxis = i3051[1]
  i3050.m_SubmitButton = i3051[2]
  i3050.m_CancelButton = i3051[3]
  i3050.m_InputActionsPerSecond = i3051[4]
  i3050.m_RepeatDelay = i3051[5]
  i3050.m_ForceModuleActive = !!i3051[6]
  i3050.m_SendPointerHoverToParent = !!i3051[7]
  return i3050
}

Deserializers["BoosterManager"] = function (request, data, root) {
  var i3052 = root || request.c( 'BoosterManager' )
  var i3053 = data
  i3052.OnGlobalStateChanged = request.d('System.Action', i3053[0], i3052.OnGlobalStateChanged)
  request.r(i3053[1], i3053[2], 0, i3052, 'MagnetNestFxPrefab')
  request.r(i3053[3], i3053[4], 0, i3052, '_shuffleFXPrefab')
  request.r(i3053[5], i3053[6], 0, i3052, 'ClearHitFxPrefab')
  i3052.clearHitFxLifetime = i3053[7]
  i3052.shuffleSuckDuration = i3053[8]
  i3052.shuffleSpreadDuration = i3053[9]
  i3052.shuffleStagger = i3053[10]
  i3052.shuffleBirdSortingOrder = i3053[11]
  request.r(i3053[12], i3053[13], 0, i3052, 'boosterConfig')
  return i3052
}

Deserializers["System.Action"] = function (request, data, root) {
  var i3054 = root || request.c( 'System.Action' )
  var i3055 = data
  return i3054
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3056 = root || request.c( 'GameManager' )
  var i3057 = data
  i3056.currentGameState = i3057[0]
  i3056.isTestMode = !!i3057[1]
  return i3056
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i3058 = root || request.c( 'SoundManager' )
  var i3059 = data
  request.r(i3059[0], i3059[1], 0, i3058, 'musicSource')
  i3058.resultMusicVolumeMultiplier = i3059[2]
  i3058.ingameMusicVolume = i3059[3]
  request.r(i3059[4], i3059[5], 0, i3058, 'parentSFX')
  i3058.poolSize = i3059[6]
  i3058.maxLoopingPerClip = i3059[7]
  var i3061 = i3059[8]
  var i3060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i3061.length; i += 2) {
  request.r(i3061[i + 0], i3061[i + 1], 1, i3060, '')
  }
  i3058.musicClips = i3060
  var i3063 = i3059[9]
  var i3062 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i3063.length; i += 2) {
  request.r(i3063[i + 0], i3063[i + 1], 1, i3062, '')
  }
  i3058.sfxClips = i3062
  i3058.importantVolume = i3059[10]
  i3058.normalVolume = i3059[11]
  i3058.minorVolume = i3059[12]
  i3058.smallVolume = i3059[13]
  return i3058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3067 = data
  request.r(i3067[0], i3067[1], 0, i3066, 'clip')
  request.r(i3067[2], i3067[3], 0, i3066, 'outputAudioMixerGroup')
  i3066.playOnAwake = !!i3067[4]
  i3066.loop = !!i3067[5]
  i3066.time = i3067[6]
  i3066.volume = i3067[7]
  i3066.pitch = i3067[8]
  i3066.enabled = !!i3067[9]
  return i3066
}

Deserializers["ParticlesManager"] = function (request, data, root) {
  var i3068 = root || request.c( 'ParticlesManager' )
  var i3069 = data
  request.r(i3069[0], i3069[1], 0, i3068, 'set')
  request.r(i3069[2], i3069[3], 0, i3068, 'target')
  request.r(i3069[4], i3069[5], 0, i3068, 'startTarget')
  var i3071 = i3069[6]
  var i3070 = []
  for(var i = 0; i < i3071.length; i += 2) {
  request.r(i3071[i + 0], i3071[i + 1], 2, i3070, '')
  }
  i3068.particleEffectData = i3070
  request.r(i3069[7], i3069[8], 0, i3068, 'coinPrefab')
  i3068.spreadRange = i3069[9]
  i3068.spreadRangeOnSum = i3069[10]
  i3068.moveDuration = i3069[11]
  i3068.magMut = i3069[12]
  i3068.toptopOGScale = i3069[13]
  i3068.sum = i3069[14]
  return i3068
}

Deserializers["GameData"] = function (request, data, root) {
  var i3074 = root || request.c( 'GameData' )
  var i3075 = data
  var i3077 = i3075[0]
  var i3076 = []
  for(var i = 0; i < i3077.length; i += 4) {
    i3076.push( new pc.Color(i3077[i + 0], i3077[i + 1], i3077[i + 2], i3077[i + 3]) );
  }
  i3074.birdColors = i3076
  return i3074
}

Deserializers["ComboManager"] = function (request, data, root) {
  var i3080 = root || request.c( 'ComboManager' )
  var i3081 = data
  i3080.OnTimerComplete = request.d('System.Action', i3081[0], i3080.OnTimerComplete)
  i3080.comboTime = i3081[1]
  return i3080
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3082 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3083 = data
  i3082.m_UiScaleMode = i3083[0]
  i3082.m_ReferencePixelsPerUnit = i3083[1]
  i3082.m_ScaleFactor = i3083[2]
  i3082.m_ReferenceResolution = new pc.Vec2( i3083[3], i3083[4] )
  i3082.m_ScreenMatchMode = i3083[5]
  i3082.m_MatchWidthOrHeight = i3083[6]
  i3082.m_PhysicalUnit = i3083[7]
  i3082.m_FallbackScreenDPI = i3083[8]
  i3082.m_DefaultSpriteDPI = i3083[9]
  i3082.m_DynamicPixelsPerUnit = i3083[10]
  i3082.m_PresetInfoIsWorld = !!i3083[11]
  return i3082
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3084 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3085 = data
  i3084.m_IgnoreReversedGraphics = !!i3085[0]
  i3084.m_BlockingObjects = i3085[1]
  i3084.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3085[2] )
  return i3084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3087 = data
  i3086.m_Alpha = i3087[0]
  i3086.m_Interactable = !!i3087[1]
  i3086.m_BlocksRaycasts = !!i3087[2]
  i3086.m_IgnoreParentGroups = !!i3087[3]
  i3086.enabled = !!i3087[4]
  return i3086
}

Deserializers["GameplayUI"] = function (request, data, root) {
  var i3088 = root || request.c( 'GameplayUI' )
  var i3089 = data
  request.r(i3089[0], i3089[1], 0, i3088, 'warningHard')
  request.r(i3089[2], i3089[3], 0, i3088, 'warningExtreme')
  request.r(i3089[4], i3089[5], 0, i3088, 'canvaG')
  request.r(i3089[6], i3089[7], 0, i3088, 'imgPanel')
  i3088.IsDestroyOnClose = !!i3089[8]
  i3088.isFadeIn = !!i3089[9]
  i3088.isFadeOut = !!i3089[10]
  i3088.isSoundOpen = !!i3089[11]
  i3088.OnOpen = request.d('System.Action', i3089[12], i3088.OnOpen)
  i3088.OnClose = request.d('System.Action', i3089[13], i3088.OnClose)
  i3088.OnFadeIn_Complete = request.d('System.Action', i3089[14], i3088.OnFadeIn_Complete)
  i3088.OnFadeOut_Complete = request.d('System.Action', i3089[15], i3088.OnFadeOut_Complete)
  request.r(i3089[16], i3089[17], 0, i3088, 'contentFadeIO')
  request.r(i3089[18], i3089[19], 0, i3088, 'levelText')
  request.r(i3089[20], i3089[21], 0, i3088, 'settingButton')
  request.r(i3089[22], i3089[23], 0, i3088, 'outButton')
  request.r(i3089[24], i3089[25], 0, i3088, 'musicButton')
  request.r(i3089[26], i3089[27], 0, i3088, 'soundButton')
  request.r(i3089[28], i3089[29], 0, i3088, 'happticButton')
  request.r(i3089[30], i3089[31], 0, i3088, 'replayButton')
  request.r(i3089[32], i3089[33], 0, i3088, 'canlelSettingButton')
  var i3091 = i3089[34]
  var i3090 = []
  for(var i = 0; i < i3091.length; i += 2) {
  request.r(i3091[i + 0], i3091[i + 1], 2, i3090, '')
  }
  i3088.boosterItemUIs = i3090
  request.r(i3089[35], i3089[36], 0, i3088, 'musicCrossGameObject')
  request.r(i3089[37], i3089[38], 0, i3088, 'soundCrossGameObject')
  request.r(i3089[39], i3089[40], 0, i3088, 'happticCrossGameObject')
  request.r(i3089[41], i3089[42], 0, i3088, 'ContentBottomTransform')
  request.r(i3089[43], i3089[44], 0, i3088, 'pointBottom')
  request.r(i3089[45], i3089[46], 0, i3088, 'tagLevelImage')
  request.r(i3089[47], i3089[48], 0, i3088, 'tagSettingImage')
  request.r(i3089[49], i3089[50], 0, i3088, 'tagSetting1Image')
  request.r(i3089[51], i3089[52], 0, i3088, 'tagSetting2Image')
  var i3093 = i3089[53]
  var i3092 = []
  for(var i = 0; i < i3093.length; i += 2) {
  request.r(i3093[i + 0], i3093[i + 1], 2, i3092, '')
  }
  i3088.tagLevelSprites = i3092
  var i3095 = i3089[54]
  var i3094 = []
  for(var i = 0; i < i3095.length; i += 2) {
  request.r(i3095[i + 0], i3095[i + 1], 2, i3094, '')
  }
  i3088.tagSettingSprites = i3094
  var i3097 = i3089[55]
  var i3096 = []
  for(var i = 0; i < i3097.length; i += 2) {
  request.r(i3097[i + 0], i3097[i + 1], 2, i3096, '')
  }
  i3088.tagSetting1Sprites = i3096
  var i3099 = i3089[56]
  var i3098 = []
  for(var i = 0; i < i3099.length; i += 2) {
  request.r(i3099[i + 0], i3099[i + 1], 2, i3098, '')
  }
  i3088.tagSetting2Sprites = i3098
  request.r(i3089[57], i3089[58], 0, i3088, 'PanelPreWin')
  request.r(i3089[59], i3089[60], 0, i3088, 'textPanelWinTransform')
  request.r(i3089[61], i3089[62], 0, i3088, 'preWinLogo')
  request.r(i3089[63], i3089[64], 0, i3088, 'btnPreWinContinue')
  i3088.preWinTapDelay = i3089[65]
  request.r(i3089[66], i3089[67], 0, i3088, 'clearSlingshot')
  i3088.slingshotPopDuration = i3089[68]
  request.r(i3089[69], i3089[70], 0, i3088, 'settingAnimator')
  return i3088
}

Deserializers["Crystal.SafeArea"] = function (request, data, root) {
  var i3102 = root || request.c( 'Crystal.SafeArea' )
  var i3103 = data
  i3102.ConformX = !!i3103[0]
  i3102.ConformY = !!i3103[1]
  i3102.Logging = !!i3103[2]
  return i3102
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i3104 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i3105 = data
  i3104.m_Spacing = i3105[0]
  i3104.m_ChildForceExpandWidth = !!i3105[1]
  i3104.m_ChildForceExpandHeight = !!i3105[2]
  i3104.m_ChildControlWidth = !!i3105[3]
  i3104.m_ChildControlHeight = !!i3105[4]
  i3104.m_ChildScaleWidth = !!i3105[5]
  i3104.m_ChildScaleHeight = !!i3105[6]
  i3104.m_ReverseArrangement = !!i3105[7]
  i3104.m_Padding = UnityEngine.RectOffset.FromPaddings(i3105[8], i3105[9], i3105[10], i3105[11])
  i3104.m_ChildAlignment = i3105[12]
  return i3104
}

Deserializers["BoosterItemUI"] = function (request, data, root) {
  var i3106 = root || request.c( 'BoosterItemUI' )
  var i3107 = data
  i3106.type = i3107[0]
  request.r(i3107[1], i3107[2], 0, i3106, 'icon')
  request.r(i3107[3], i3107[4], 0, i3106, 'button')
  request.r(i3107[5], i3107[6], 0, i3106, 'amountObject')
  request.r(i3107[7], i3107[8], 0, i3106, 'addObject')
  request.r(i3107[9], i3107[10], 0, i3106, 'freeObject')
  request.r(i3107[11], i3107[12], 0, i3106, 'amountText')
  request.r(i3107[13], i3107[14], 0, i3106, 'lockObj')
  request.r(i3107[15], i3107[16], 0, i3106, 'levelText')
  request.r(i3107[17], i3107[18], 0, i3106, 'priceText')
  return i3106
}

Deserializers["ButtonScaleUI"] = function (request, data, root) {
  var i3108 = root || request.c( 'ButtonScaleUI' )
  var i3109 = data
  i3108.scaleDuration = i3109[0]
  i3108.action = request.d('UnityEngine.Events.UnityEvent', i3109[1], i3108.action)
  request.r(i3109[2], i3109[3], 0, i3108, 'transformToScale')
  i3108.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3109[4], i3108.m_OnClick)
  i3108.m_Navigation = request.d('UnityEngine.UI.Navigation', i3109[5], i3108.m_Navigation)
  i3108.m_Transition = i3109[6]
  i3108.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3109[7], i3108.m_Colors)
  i3108.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3109[8], i3108.m_SpriteState)
  i3108.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3109[9], i3108.m_AnimationTriggers)
  i3108.m_Interactable = !!i3109[10]
  request.r(i3109[11], i3109[12], 0, i3108, 'm_TargetGraphic')
  return i3108
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3110 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3111 = data
  i3110.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3111[0], i3110.m_PersistentCalls)
  return i3110
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3112 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3113 = data
  var i3115 = i3113[0]
  var i3114 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3115.length; i += 1) {
    i3114.add(request.d('UnityEngine.Events.PersistentCall', i3115[i + 0]));
  }
  i3112.m_Calls = i3114
  return i3112
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3118 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3119 = data
  request.r(i3119[0], i3119[1], 0, i3118, 'm_Target')
  i3118.m_TargetAssemblyTypeName = i3119[2]
  i3118.m_MethodName = i3119[3]
  i3118.m_Mode = i3119[4]
  i3118.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3119[5], i3118.m_Arguments)
  i3118.m_CallState = i3119[6]
  return i3118
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3120 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3121 = data
  i3120.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3121[0], i3120.m_PersistentCalls)
  return i3120
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3122 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3123 = data
  i3122.m_Mode = i3123[0]
  i3122.m_WrapAround = !!i3123[1]
  request.r(i3123[2], i3123[3], 0, i3122, 'm_SelectOnUp')
  request.r(i3123[4], i3123[5], 0, i3122, 'm_SelectOnDown')
  request.r(i3123[6], i3123[7], 0, i3122, 'm_SelectOnLeft')
  request.r(i3123[8], i3123[9], 0, i3122, 'm_SelectOnRight')
  return i3122
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3124 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3125 = data
  i3124.m_NormalColor = new pc.Color(i3125[0], i3125[1], i3125[2], i3125[3])
  i3124.m_HighlightedColor = new pc.Color(i3125[4], i3125[5], i3125[6], i3125[7])
  i3124.m_PressedColor = new pc.Color(i3125[8], i3125[9], i3125[10], i3125[11])
  i3124.m_SelectedColor = new pc.Color(i3125[12], i3125[13], i3125[14], i3125[15])
  i3124.m_DisabledColor = new pc.Color(i3125[16], i3125[17], i3125[18], i3125[19])
  i3124.m_ColorMultiplier = i3125[20]
  i3124.m_FadeDuration = i3125[21]
  return i3124
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3126 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3127 = data
  request.r(i3127[0], i3127[1], 0, i3126, 'm_HighlightedSprite')
  request.r(i3127[2], i3127[3], 0, i3126, 'm_PressedSprite')
  request.r(i3127[4], i3127[5], 0, i3126, 'm_SelectedSprite')
  request.r(i3127[6], i3127[7], 0, i3126, 'm_DisabledSprite')
  return i3126
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3128 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3129 = data
  i3128.m_NormalTrigger = i3129[0]
  i3128.m_HighlightedTrigger = i3129[1]
  i3128.m_PressedTrigger = i3129[2]
  i3128.m_SelectedTrigger = i3129[3]
  i3128.m_DisabledTrigger = i3129[4]
  return i3128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3131 = data
  request.r(i3131[0], i3131[1], 0, i3130, 'animatorController')
  request.r(i3131[2], i3131[3], 0, i3130, 'avatar')
  i3130.updateMode = i3131[4]
  i3130.hasTransformHierarchy = !!i3131[5]
  i3130.applyRootMotion = !!i3131[6]
  var i3133 = i3131[7]
  var i3132 = []
  for(var i = 0; i < i3133.length; i += 2) {
  request.r(i3133[i + 0], i3133[i + 1], 2, i3132, '')
  }
  i3130.humanBones = i3132
  i3130.enabled = !!i3131[8]
  return i3130
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3134 = root || request.c( 'UnityEngine.UI.Button' )
  var i3135 = data
  i3134.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3135[0], i3134.m_OnClick)
  i3134.m_Navigation = request.d('UnityEngine.UI.Navigation', i3135[1], i3134.m_Navigation)
  i3134.m_Transition = i3135[2]
  i3134.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3135[3], i3134.m_Colors)
  i3134.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3135[4], i3134.m_SpriteState)
  i3134.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3135[5], i3134.m_AnimationTriggers)
  i3134.m_Interactable = !!i3135[6]
  request.r(i3135[7], i3135[8], 0, i3134, 'm_TargetGraphic')
  return i3134
}

Deserializers["SlingshotAnimator"] = function (request, data, root) {
  var i3136 = root || request.c( 'SlingshotAnimator' )
  var i3137 = data
  i3136.useUnscaledTime = !!i3137[0]
  i3136.speed = i3137[1]
  i3136.flightTime = i3137[2]
  i3136.reloadDelay = i3137[3]
  request.r(i3137[4], i3137[5], 0, i3136, 'animJson')
  var i3139 = i3137[6]
  var i3138 = []
  for(var i = 0; i < i3139.length; i += 2) {
  request.r(i3139[i + 0], i3139[i + 1], 2, i3138, '')
  }
  i3136.sprites = i3138
  return i3136
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3140 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3141 = data
  i3140.m_ShowMaskGraphic = !!i3141[0]
  return i3140
}

Deserializers["Coffee.UIExtensions.UIParticle"] = function (request, data, root) {
  var i3142 = root || request.c( 'Coffee.UIExtensions.UIParticle' )
  var i3143 = data
  i3142.m_IsTrail = !!i3143[0]
  i3142.m_IgnoreCanvasScaler = !!i3143[1]
  i3142.m_AbsoluteMode = !!i3143[2]
  i3142.m_Scale3D = new pc.Vec3( i3143[3], i3143[4], i3143[5] )
  var i3145 = i3143[6]
  var i3144 = []
  for(var i = 0; i < i3145.length; i += 1) {
    i3144.push( request.d('Coffee.UIExtensions.AnimatableProperty', i3145[i + 0]) );
  }
  i3142.m_AnimatableProperties = i3144
  var i3147 = i3143[7]
  var i3146 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i3147.length; i += 2) {
  request.r(i3147[i + 0], i3147[i + 1], 1, i3146, '')
  }
  i3142.m_Particles = i3146
  i3142.m_MeshSharing = i3143[8]
  i3142.m_GroupId = i3143[9]
  i3142.m_GroupMaxId = i3143[10]
  i3142.m_PositionMode = i3143[11]
  i3142.m_AutoScaling = !!i3143[12]
  i3142.m_AutoScalingMode = i3143[13]
  i3142.m_UseCustomView = !!i3143[14]
  i3142.m_CustomViewSize = i3143[15]
  i3142.m_TimeScaleMultiplier = i3143[16]
  request.r(i3143[17], i3143[18], 0, i3142, 'm_Material')
  i3142.m_Maskable = !!i3143[19]
  i3142.m_Color = new pc.Color(i3143[20], i3143[21], i3143[22], i3143[23])
  i3142.m_RaycastTarget = !!i3143[24]
  i3142.m_RaycastPadding = new pc.Vec4( i3143[25], i3143[26], i3143[27], i3143[28] )
  return i3142
}

Deserializers["Coffee.UIExtensions.AnimatableProperty"] = function (request, data, root) {
  var i3150 = root || request.c( 'Coffee.UIExtensions.AnimatableProperty' )
  var i3151 = data
  i3150.m_Name = i3151[0]
  i3150.m_Type = i3151[1]
  return i3150
}

Deserializers["ColorBirdLogoAnimator"] = function (request, data, root) {
  var i3154 = root || request.c( 'ColorBirdLogoAnimator' )
  var i3155 = data
  i3154.playOnEnable = !!i3155[0]
  i3154.useUnscaledTime = !!i3155[1]
  i3154.playIdle = !!i3155[2]
  i3154.skipIntro = !!i3155[3]
  i3154.loopIntroOutro = !!i3155[4]
  i3154.loopHoldTime = i3155[5]
  i3154.speed = i3155[6]
  request.r(i3155[7], i3155[8], 0, i3154, 'animJson')
  var i3157 = i3155[9]
  var i3156 = []
  for(var i = 0; i < i3157.length; i += 2) {
  request.r(i3157[i + 0], i3157[i + 1], 2, i3156, '')
  }
  i3154.layerSprites = i3156
  return i3154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3159 = data
  i3158.ambientIntensity = i3159[0]
  i3158.reflectionIntensity = i3159[1]
  i3158.ambientMode = i3159[2]
  i3158.ambientLight = new pc.Color(i3159[3], i3159[4], i3159[5], i3159[6])
  i3158.ambientSkyColor = new pc.Color(i3159[7], i3159[8], i3159[9], i3159[10])
  i3158.ambientGroundColor = new pc.Color(i3159[11], i3159[12], i3159[13], i3159[14])
  i3158.ambientEquatorColor = new pc.Color(i3159[15], i3159[16], i3159[17], i3159[18])
  i3158.fogColor = new pc.Color(i3159[19], i3159[20], i3159[21], i3159[22])
  i3158.fogEndDistance = i3159[23]
  i3158.fogStartDistance = i3159[24]
  i3158.fogDensity = i3159[25]
  i3158.fog = !!i3159[26]
  request.r(i3159[27], i3159[28], 0, i3158, 'skybox')
  i3158.fogMode = i3159[29]
  var i3161 = i3159[30]
  var i3160 = []
  for(var i = 0; i < i3161.length; i += 1) {
    i3160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3161[i + 0]) );
  }
  i3158.lightmaps = i3160
  i3158.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3159[31], i3158.lightProbes)
  i3158.lightmapsMode = i3159[32]
  i3158.mixedBakeMode = i3159[33]
  i3158.environmentLightingMode = i3159[34]
  i3158.ambientProbe = new pc.SphericalHarmonicsL2(i3159[35])
  request.r(i3159[36], i3159[37], 0, i3158, 'customReflection')
  request.r(i3159[38], i3159[39], 0, i3158, 'defaultReflection')
  i3158.defaultReflectionMode = i3159[40]
  i3158.defaultReflectionResolution = i3159[41]
  i3158.sunLightObjectId = i3159[42]
  i3158.pixelLightCount = i3159[43]
  i3158.defaultReflectionHDR = !!i3159[44]
  i3158.hasLightDataAsset = !!i3159[45]
  i3158.hasManualGenerate = !!i3159[46]
  return i3158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3165 = data
  request.r(i3165[0], i3165[1], 0, i3164, 'lightmapColor')
  request.r(i3165[2], i3165[3], 0, i3164, 'lightmapDirection')
  request.r(i3165[4], i3165[5], 0, i3164, 'shadowMask')
  return i3164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3166 = root || new UnityEngine.LightProbes()
  var i3167 = data
  return i3166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i3174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i3175 = data
  i3174.name = i3175[0]
  i3174.bounciness = i3175[1]
  i3174.friction = i3175[2]
  return i3174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3177 = data
  var i3179 = i3177[0]
  var i3178 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3179.length; i += 1) {
    i3178.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3179[i + 0]));
  }
  i3176.ShaderCompilationErrors = i3178
  i3176.name = i3177[1]
  i3176.guid = i3177[2]
  var i3181 = i3177[3]
  var i3180 = []
  for(var i = 0; i < i3181.length; i += 1) {
    i3180.push( i3181[i + 0] );
  }
  i3176.shaderDefinedKeywords = i3180
  var i3183 = i3177[4]
  var i3182 = []
  for(var i = 0; i < i3183.length; i += 1) {
    i3182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3183[i + 0]) );
  }
  i3176.passes = i3182
  var i3185 = i3177[5]
  var i3184 = []
  for(var i = 0; i < i3185.length; i += 1) {
    i3184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3185[i + 0]) );
  }
  i3176.usePasses = i3184
  var i3187 = i3177[6]
  var i3186 = []
  for(var i = 0; i < i3187.length; i += 1) {
    i3186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3187[i + 0]) );
  }
  i3176.defaultParameterValues = i3186
  request.r(i3177[7], i3177[8], 0, i3176, 'unityFallbackShader')
  i3176.readDepth = !!i3177[9]
  i3176.hasDepthOnlyPass = !!i3177[10]
  i3176.isCreatedByShaderGraph = !!i3177[11]
  i3176.disableBatching = !!i3177[12]
  i3176.compiled = !!i3177[13]
  return i3176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3191 = data
  i3190.shaderName = i3191[0]
  i3190.errorMessage = i3191[1]
  return i3190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3194 = root || new pc.UnityShaderPass()
  var i3195 = data
  i3194.id = i3195[0]
  i3194.subShaderIndex = i3195[1]
  i3194.name = i3195[2]
  i3194.passType = i3195[3]
  i3194.grabPassTextureName = i3195[4]
  i3194.usePass = !!i3195[5]
  i3194.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3195[6], i3194.zTest)
  i3194.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3195[7], i3194.zWrite)
  i3194.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3195[8], i3194.culling)
  i3194.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3195[9], i3194.blending)
  i3194.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3195[10], i3194.alphaBlending)
  i3194.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3195[11], i3194.colorWriteMask)
  i3194.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3195[12], i3194.offsetUnits)
  i3194.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3195[13], i3194.offsetFactor)
  i3194.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3195[14], i3194.stencilRef)
  i3194.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3195[15], i3194.stencilReadMask)
  i3194.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3195[16], i3194.stencilWriteMask)
  i3194.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3195[17], i3194.stencilOp)
  i3194.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3195[18], i3194.stencilOpFront)
  i3194.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3195[19], i3194.stencilOpBack)
  var i3197 = i3195[20]
  var i3196 = []
  for(var i = 0; i < i3197.length; i += 1) {
    i3196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3197[i + 0]) );
  }
  i3194.tags = i3196
  var i3199 = i3195[21]
  var i3198 = []
  for(var i = 0; i < i3199.length; i += 1) {
    i3198.push( i3199[i + 0] );
  }
  i3194.passDefinedKeywords = i3198
  var i3201 = i3195[22]
  var i3200 = []
  for(var i = 0; i < i3201.length; i += 1) {
    i3200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3201[i + 0]) );
  }
  i3194.passDefinedKeywordGroups = i3200
  var i3203 = i3195[23]
  var i3202 = []
  for(var i = 0; i < i3203.length; i += 1) {
    i3202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3203[i + 0]) );
  }
  i3194.variants = i3202
  var i3205 = i3195[24]
  var i3204 = []
  for(var i = 0; i < i3205.length; i += 1) {
    i3204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3205[i + 0]) );
  }
  i3194.excludedVariants = i3204
  i3194.hasDepthReader = !!i3195[25]
  return i3194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3207 = data
  i3206.val = i3207[0]
  i3206.name = i3207[1]
  return i3206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3209 = data
  i3208.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3209[0], i3208.src)
  i3208.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3209[1], i3208.dst)
  i3208.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3209[2], i3208.op)
  return i3208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3211 = data
  i3210.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3211[0], i3210.pass)
  i3210.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3211[1], i3210.fail)
  i3210.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3211[2], i3210.zFail)
  i3210.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3211[3], i3210.comp)
  return i3210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3215 = data
  i3214.name = i3215[0]
  i3214.value = i3215[1]
  return i3214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3219 = data
  var i3221 = i3219[0]
  var i3220 = []
  for(var i = 0; i < i3221.length; i += 1) {
    i3220.push( i3221[i + 0] );
  }
  i3218.keywords = i3220
  i3218.hasDiscard = !!i3219[1]
  return i3218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3225 = data
  i3224.passId = i3225[0]
  i3224.subShaderIndex = i3225[1]
  var i3227 = i3225[2]
  var i3226 = []
  for(var i = 0; i < i3227.length; i += 1) {
    i3226.push( i3227[i + 0] );
  }
  i3224.keywords = i3226
  i3224.vertexProgram = i3225[3]
  i3224.fragmentProgram = i3225[4]
  i3224.exportedForWebGl2 = !!i3225[5]
  i3224.readDepth = !!i3225[6]
  return i3224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3231 = data
  request.r(i3231[0], i3231[1], 0, i3230, 'shader')
  i3230.pass = i3231[2]
  return i3230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3235 = data
  i3234.name = i3235[0]
  i3234.type = i3235[1]
  i3234.value = new pc.Vec4( i3235[2], i3235[3], i3235[4], i3235[5] )
  i3234.textureValue = i3235[6]
  i3234.shaderPropertyFlag = i3235[7]
  return i3234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3237 = data
  i3236.name = i3237[0]
  request.r(i3237[1], i3237[2], 0, i3236, 'texture')
  i3236.aabb = i3237[3]
  i3236.vertices = i3237[4]
  i3236.triangles = i3237[5]
  i3236.textureRect = UnityEngine.Rect.MinMaxRect(i3237[6], i3237[7], i3237[8], i3237[9])
  i3236.packedRect = UnityEngine.Rect.MinMaxRect(i3237[10], i3237[11], i3237[12], i3237[13])
  i3236.border = new pc.Vec4( i3237[14], i3237[15], i3237[16], i3237[17] )
  i3236.transparency = i3237[18]
  i3236.bounds = i3237[19]
  i3236.pixelsPerUnit = i3237[20]
  i3236.textureWidth = i3237[21]
  i3236.textureHeight = i3237[22]
  i3236.nativeSize = new pc.Vec2( i3237[23], i3237[24] )
  i3236.pivot = new pc.Vec2( i3237[25], i3237[26] )
  i3236.textureRectOffset = new pc.Vec2( i3237[27], i3237[28] )
  return i3236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3239 = data
  i3238.name = i3239[0]
  return i3238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3241 = data
  i3240.name = i3241[0]
  i3240.wrapMode = i3241[1]
  i3240.isLooping = !!i3241[2]
  i3240.length = i3241[3]
  var i3243 = i3241[4]
  var i3242 = []
  for(var i = 0; i < i3243.length; i += 1) {
    i3242.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3243[i + 0]) );
  }
  i3240.curves = i3242
  var i3245 = i3241[5]
  var i3244 = []
  for(var i = 0; i < i3245.length; i += 1) {
    i3244.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3245[i + 0]) );
  }
  i3240.events = i3244
  i3240.halfPrecision = !!i3241[6]
  i3240._frameRate = i3241[7]
  i3240.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3241[8], i3240.localBounds)
  i3240.hasMuscleCurves = !!i3241[9]
  var i3247 = i3241[10]
  var i3246 = []
  for(var i = 0; i < i3247.length; i += 1) {
    i3246.push( i3247[i + 0] );
  }
  i3240.clipMuscleConstant = i3246
  i3240.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3241[11], i3240.clipBindingConstant)
  return i3240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3251 = data
  i3250.path = i3251[0]
  i3250.hash = i3251[1]
  i3250.componentType = i3251[2]
  i3250.property = i3251[3]
  i3250.keys = i3251[4]
  var i3253 = i3251[5]
  var i3252 = []
  for(var i = 0; i < i3253.length; i += 1) {
    i3252.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3253[i + 0]) );
  }
  i3250.objectReferenceKeys = i3252
  return i3250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3257 = data
  i3256.time = i3257[0]
  request.r(i3257[1], i3257[2], 0, i3256, 'value')
  return i3256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3261 = data
  i3260.functionName = i3261[0]
  i3260.floatParameter = i3261[1]
  i3260.intParameter = i3261[2]
  i3260.stringParameter = i3261[3]
  request.r(i3261[4], i3261[5], 0, i3260, 'objectReferenceParameter')
  i3260.time = i3261[6]
  return i3260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3263 = data
  i3262.center = new pc.Vec3( i3263[0], i3263[1], i3263[2] )
  i3262.extends = new pc.Vec3( i3263[3], i3263[4], i3263[5] )
  return i3262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3267 = data
  var i3269 = i3267[0]
  var i3268 = []
  for(var i = 0; i < i3269.length; i += 1) {
    i3268.push( i3269[i + 0] );
  }
  i3266.genericBindings = i3268
  var i3271 = i3267[1]
  var i3270 = []
  for(var i = 0; i < i3271.length; i += 1) {
    i3270.push( i3271[i + 0] );
  }
  i3266.pptrCurveMapping = i3270
  return i3266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3273 = data
  i3272.name = i3273[0]
  i3272.ascent = i3273[1]
  i3272.originalLineHeight = i3273[2]
  i3272.fontSize = i3273[3]
  var i3275 = i3273[4]
  var i3274 = []
  for(var i = 0; i < i3275.length; i += 1) {
    i3274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3275[i + 0]) );
  }
  i3272.characterInfo = i3274
  request.r(i3273[5], i3273[6], 0, i3272, 'texture')
  i3272.originalFontSize = i3273[7]
  return i3272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3279 = data
  i3278.index = i3279[0]
  i3278.advance = i3279[1]
  i3278.bearing = i3279[2]
  i3278.glyphWidth = i3279[3]
  i3278.glyphHeight = i3279[4]
  i3278.minX = i3279[5]
  i3278.maxX = i3279[6]
  i3278.minY = i3279[7]
  i3278.maxY = i3279[8]
  i3278.uvBottomLeftX = i3279[9]
  i3278.uvBottomLeftY = i3279[10]
  i3278.uvBottomRightX = i3279[11]
  i3278.uvBottomRightY = i3279[12]
  i3278.uvTopLeftX = i3279[13]
  i3278.uvTopLeftY = i3279[14]
  i3278.uvTopRightX = i3279[15]
  i3278.uvTopRightY = i3279[16]
  return i3278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3281 = data
  i3280.name = i3281[0]
  var i3283 = i3281[1]
  var i3282 = []
  for(var i = 0; i < i3283.length; i += 1) {
    i3282.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3283[i + 0]) );
  }
  i3280.layers = i3282
  var i3285 = i3281[2]
  var i3284 = []
  for(var i = 0; i < i3285.length; i += 1) {
    i3284.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3285[i + 0]) );
  }
  i3280.parameters = i3284
  i3280.animationClips = i3281[3]
  i3280.avatarUnsupported = i3281[4]
  return i3280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3289 = data
  i3288.name = i3289[0]
  i3288.defaultWeight = i3289[1]
  i3288.blendingMode = i3289[2]
  i3288.avatarMask = i3289[3]
  i3288.syncedLayerIndex = i3289[4]
  i3288.syncedLayerAffectsTiming = !!i3289[5]
  i3288.syncedLayers = i3289[6]
  i3288.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3289[7], i3288.stateMachine)
  return i3288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3291 = data
  i3290.id = i3291[0]
  i3290.name = i3291[1]
  i3290.path = i3291[2]
  var i3293 = i3291[3]
  var i3292 = []
  for(var i = 0; i < i3293.length; i += 1) {
    i3292.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3293[i + 0]) );
  }
  i3290.states = i3292
  var i3295 = i3291[4]
  var i3294 = []
  for(var i = 0; i < i3295.length; i += 1) {
    i3294.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3295[i + 0]) );
  }
  i3290.machines = i3294
  var i3297 = i3291[5]
  var i3296 = []
  for(var i = 0; i < i3297.length; i += 1) {
    i3296.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3297[i + 0]) );
  }
  i3290.entryStateTransitions = i3296
  var i3299 = i3291[6]
  var i3298 = []
  for(var i = 0; i < i3299.length; i += 1) {
    i3298.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3299[i + 0]) );
  }
  i3290.exitStateTransitions = i3298
  var i3301 = i3291[7]
  var i3300 = []
  for(var i = 0; i < i3301.length; i += 1) {
    i3300.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3301[i + 0]) );
  }
  i3290.anyStateTransitions = i3300
  i3290.defaultStateId = i3291[8]
  return i3290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3305 = data
  i3304.id = i3305[0]
  i3304.name = i3305[1]
  i3304.cycleOffset = i3305[2]
  i3304.cycleOffsetParameter = i3305[3]
  i3304.cycleOffsetParameterActive = !!i3305[4]
  i3304.mirror = !!i3305[5]
  i3304.mirrorParameter = i3305[6]
  i3304.mirrorParameterActive = !!i3305[7]
  i3304.motionId = i3305[8]
  i3304.nameHash = i3305[9]
  i3304.fullPathHash = i3305[10]
  i3304.speed = i3305[11]
  i3304.speedParameter = i3305[12]
  i3304.speedParameterActive = !!i3305[13]
  i3304.tag = i3305[14]
  i3304.tagHash = i3305[15]
  i3304.writeDefaultValues = !!i3305[16]
  var i3307 = i3305[17]
  var i3306 = []
  for(var i = 0; i < i3307.length; i += 2) {
  request.r(i3307[i + 0], i3307[i + 1], 2, i3306, '')
  }
  i3304.behaviours = i3306
  var i3309 = i3305[18]
  var i3308 = []
  for(var i = 0; i < i3309.length; i += 1) {
    i3308.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3309[i + 0]) );
  }
  i3304.transitions = i3308
  return i3304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3315 = data
  i3314.fullPath = i3315[0]
  i3314.canTransitionToSelf = !!i3315[1]
  i3314.duration = i3315[2]
  i3314.exitTime = i3315[3]
  i3314.hasExitTime = !!i3315[4]
  i3314.hasFixedDuration = !!i3315[5]
  i3314.interruptionSource = i3315[6]
  i3314.offset = i3315[7]
  i3314.orderedInterruption = !!i3315[8]
  i3314.destinationStateId = i3315[9]
  i3314.isExit = !!i3315[10]
  i3314.mute = !!i3315[11]
  i3314.solo = !!i3315[12]
  var i3317 = i3315[13]
  var i3316 = []
  for(var i = 0; i < i3317.length; i += 1) {
    i3316.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3317[i + 0]) );
  }
  i3314.conditions = i3316
  return i3314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3321 = data
  i3320.mode = i3321[0]
  i3320.parameter = i3321[1]
  i3320.threshold = i3321[2]
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3327 = data
  i3326.destinationStateId = i3327[0]
  i3326.isExit = !!i3327[1]
  i3326.mute = !!i3327[2]
  i3326.solo = !!i3327[3]
  var i3329 = i3327[4]
  var i3328 = []
  for(var i = 0; i < i3329.length; i += 1) {
    i3328.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3329[i + 0]) );
  }
  i3326.conditions = i3328
  return i3326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3333 = data
  i3332.defaultBool = !!i3333[0]
  i3332.defaultFloat = i3333[1]
  i3332.defaultInt = i3333[2]
  i3332.name = i3333[3]
  i3332.nameHash = i3333[4]
  i3332.type = i3333[5]
  return i3332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3335 = data
  i3334.name = i3335[0]
  i3334.bytes64 = i3335[1]
  i3334.data = i3335[2]
  return i3334
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3336 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3337 = data
  request.r(i3337[0], i3337[1], 0, i3336, 'atlas')
  i3336.normalStyle = i3337[2]
  i3336.normalSpacingOffset = i3337[3]
  i3336.boldStyle = i3337[4]
  i3336.boldSpacing = i3337[5]
  i3336.italicStyle = i3337[6]
  i3336.tabSize = i3337[7]
  i3336.hashCode = i3337[8]
  request.r(i3337[9], i3337[10], 0, i3336, 'material')
  i3336.materialHashCode = i3337[11]
  i3336.m_Version = i3337[12]
  i3336.m_SourceFontFileGUID = i3337[13]
  request.r(i3337[14], i3337[15], 0, i3336, 'm_SourceFontFile_EditorRef')
  request.r(i3337[16], i3337[17], 0, i3336, 'm_SourceFontFile')
  i3336.m_AtlasPopulationMode = i3337[18]
  i3336.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3337[19], i3336.m_FaceInfo)
  var i3339 = i3337[20]
  var i3338 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3339.length; i += 1) {
    i3338.add(request.d('UnityEngine.TextCore.Glyph', i3339[i + 0]));
  }
  i3336.m_GlyphTable = i3338
  var i3341 = i3337[21]
  var i3340 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3341.length; i += 1) {
    i3340.add(request.d('TMPro.TMP_Character', i3341[i + 0]));
  }
  i3336.m_CharacterTable = i3340
  var i3343 = i3337[22]
  var i3342 = []
  for(var i = 0; i < i3343.length; i += 2) {
  request.r(i3343[i + 0], i3343[i + 1], 2, i3342, '')
  }
  i3336.m_AtlasTextures = i3342
  i3336.m_AtlasTextureIndex = i3337[23]
  i3336.m_IsMultiAtlasTexturesEnabled = !!i3337[24]
  i3336.m_ClearDynamicDataOnBuild = !!i3337[25]
  var i3345 = i3337[26]
  var i3344 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3345.length; i += 1) {
    i3344.add(request.d('UnityEngine.TextCore.GlyphRect', i3345[i + 0]));
  }
  i3336.m_UsedGlyphRects = i3344
  var i3347 = i3337[27]
  var i3346 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3347.length; i += 1) {
    i3346.add(request.d('UnityEngine.TextCore.GlyphRect', i3347[i + 0]));
  }
  i3336.m_FreeGlyphRects = i3346
  i3336.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3337[28], i3336.m_fontInfo)
  i3336.m_AtlasWidth = i3337[29]
  i3336.m_AtlasHeight = i3337[30]
  i3336.m_AtlasPadding = i3337[31]
  i3336.m_AtlasRenderMode = i3337[32]
  var i3349 = i3337[33]
  var i3348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3349.length; i += 1) {
    i3348.add(request.d('TMPro.TMP_Glyph', i3349[i + 0]));
  }
  i3336.m_glyphInfoList = i3348
  i3336.m_KerningTable = request.d('TMPro.KerningTable', i3337[34], i3336.m_KerningTable)
  i3336.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3337[35], i3336.m_FontFeatureTable)
  var i3351 = i3337[36]
  var i3350 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3351.length; i += 2) {
  request.r(i3351[i + 0], i3351[i + 1], 1, i3350, '')
  }
  i3336.fallbackFontAssets = i3350
  var i3353 = i3337[37]
  var i3352 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3353.length; i += 2) {
  request.r(i3353[i + 0], i3353[i + 1], 1, i3352, '')
  }
  i3336.m_FallbackFontAssetTable = i3352
  i3336.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3337[38], i3336.m_CreationSettings)
  var i3355 = i3337[39]
  var i3354 = []
  for(var i = 0; i < i3355.length; i += 1) {
    i3354.push( request.d('TMPro.TMP_FontWeightPair', i3355[i + 0]) );
  }
  i3336.m_FontWeightTable = i3354
  var i3357 = i3337[40]
  var i3356 = []
  for(var i = 0; i < i3357.length; i += 1) {
    i3356.push( request.d('TMPro.TMP_FontWeightPair', i3357[i + 0]) );
  }
  i3336.fontWeights = i3356
  return i3336
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3358 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3359 = data
  i3358.m_FaceIndex = i3359[0]
  i3358.m_FamilyName = i3359[1]
  i3358.m_StyleName = i3359[2]
  i3358.m_PointSize = i3359[3]
  i3358.m_Scale = i3359[4]
  i3358.m_UnitsPerEM = i3359[5]
  i3358.m_LineHeight = i3359[6]
  i3358.m_AscentLine = i3359[7]
  i3358.m_CapLine = i3359[8]
  i3358.m_MeanLine = i3359[9]
  i3358.m_Baseline = i3359[10]
  i3358.m_DescentLine = i3359[11]
  i3358.m_SuperscriptOffset = i3359[12]
  i3358.m_SuperscriptSize = i3359[13]
  i3358.m_SubscriptOffset = i3359[14]
  i3358.m_SubscriptSize = i3359[15]
  i3358.m_UnderlineOffset = i3359[16]
  i3358.m_UnderlineThickness = i3359[17]
  i3358.m_StrikethroughOffset = i3359[18]
  i3358.m_StrikethroughThickness = i3359[19]
  i3358.m_TabWidth = i3359[20]
  return i3358
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3362 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3363 = data
  i3362.m_Index = i3363[0]
  i3362.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3363[1], i3362.m_Metrics)
  i3362.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3363[2], i3362.m_GlyphRect)
  i3362.m_Scale = i3363[3]
  i3362.m_AtlasIndex = i3363[4]
  i3362.m_ClassDefinitionType = i3363[5]
  return i3362
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3364 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3365 = data
  i3364.m_Width = i3365[0]
  i3364.m_Height = i3365[1]
  i3364.m_HorizontalBearingX = i3365[2]
  i3364.m_HorizontalBearingY = i3365[3]
  i3364.m_HorizontalAdvance = i3365[4]
  return i3364
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3366 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3367 = data
  i3366.m_X = i3367[0]
  i3366.m_Y = i3367[1]
  i3366.m_Width = i3367[2]
  i3366.m_Height = i3367[3]
  return i3366
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3370 = root || request.c( 'TMPro.TMP_Character' )
  var i3371 = data
  i3370.m_ElementType = i3371[0]
  i3370.m_Unicode = i3371[1]
  i3370.m_GlyphIndex = i3371[2]
  i3370.m_Scale = i3371[3]
  return i3370
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3376 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3377 = data
  i3376.Name = i3377[0]
  i3376.PointSize = i3377[1]
  i3376.Scale = i3377[2]
  i3376.CharacterCount = i3377[3]
  i3376.LineHeight = i3377[4]
  i3376.Baseline = i3377[5]
  i3376.Ascender = i3377[6]
  i3376.CapHeight = i3377[7]
  i3376.Descender = i3377[8]
  i3376.CenterLine = i3377[9]
  i3376.SuperscriptOffset = i3377[10]
  i3376.SubscriptOffset = i3377[11]
  i3376.SubSize = i3377[12]
  i3376.Underline = i3377[13]
  i3376.UnderlineThickness = i3377[14]
  i3376.strikethrough = i3377[15]
  i3376.strikethroughThickness = i3377[16]
  i3376.TabWidth = i3377[17]
  i3376.Padding = i3377[18]
  i3376.AtlasWidth = i3377[19]
  i3376.AtlasHeight = i3377[20]
  return i3376
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3380 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3381 = data
  i3380.id = i3381[0]
  i3380.x = i3381[1]
  i3380.y = i3381[2]
  i3380.width = i3381[3]
  i3380.height = i3381[4]
  i3380.xOffset = i3381[5]
  i3380.yOffset = i3381[6]
  i3380.xAdvance = i3381[7]
  i3380.scale = i3381[8]
  return i3380
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3382 = root || request.c( 'TMPro.KerningTable' )
  var i3383 = data
  var i3385 = i3383[0]
  var i3384 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3385.length; i += 1) {
    i3384.add(request.d('TMPro.KerningPair', i3385[i + 0]));
  }
  i3382.kerningPairs = i3384
  return i3382
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3388 = root || request.c( 'TMPro.KerningPair' )
  var i3389 = data
  i3388.xOffset = i3389[0]
  i3388.m_FirstGlyph = i3389[1]
  i3388.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3389[2], i3388.m_FirstGlyphAdjustments)
  i3388.m_SecondGlyph = i3389[3]
  i3388.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3389[4], i3388.m_SecondGlyphAdjustments)
  i3388.m_IgnoreSpacingAdjustments = !!i3389[5]
  return i3388
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3390 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3391 = data
  var i3393 = i3391[0]
  var i3392 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3393.length; i += 1) {
    i3392.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3393[i + 0]));
  }
  i3390.m_GlyphPairAdjustmentRecords = i3392
  return i3390
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3396 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3397 = data
  i3396.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3397[0], i3396.m_FirstAdjustmentRecord)
  i3396.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3397[1], i3396.m_SecondAdjustmentRecord)
  i3396.m_FeatureLookupFlags = i3397[2]
  return i3396
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3398 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3399 = data
  i3398.m_GlyphIndex = i3399[0]
  i3398.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3399[1], i3398.m_GlyphValueRecord)
  return i3398
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3400 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3401 = data
  i3400.m_XPlacement = i3401[0]
  i3400.m_YPlacement = i3401[1]
  i3400.m_XAdvance = i3401[2]
  i3400.m_YAdvance = i3401[3]
  return i3400
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3404 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3405 = data
  i3404.sourceFontFileName = i3405[0]
  i3404.sourceFontFileGUID = i3405[1]
  i3404.pointSizeSamplingMode = i3405[2]
  i3404.pointSize = i3405[3]
  i3404.padding = i3405[4]
  i3404.packingMode = i3405[5]
  i3404.atlasWidth = i3405[6]
  i3404.atlasHeight = i3405[7]
  i3404.characterSetSelectionMode = i3405[8]
  i3404.characterSequence = i3405[9]
  i3404.referencedFontAssetGUID = i3405[10]
  i3404.referencedTextAssetGUID = i3405[11]
  i3404.fontStyle = i3405[12]
  i3404.fontStyleModifier = i3405[13]
  i3404.renderMode = i3405[14]
  i3404.includeFontFeatures = !!i3405[15]
  return i3404
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3408 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3409 = data
  request.r(i3409[0], i3409[1], 0, i3408, 'regularTypeface')
  request.r(i3409[2], i3409[3], 0, i3408, 'italicTypeface')
  return i3408
}

Deserializers["BirdDataSO"] = function (request, data, root) {
  var i3410 = root || request.c( 'BirdDataSO' )
  var i3411 = data
  var i3413 = i3411[0]
  var i3412 = []
  for(var i = 0; i < i3413.length; i += 1) {
    i3412.push( request.d('BirdData', i3413[i + 0]) );
  }
  i3410.birds = i3412
  return i3410
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i3416 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i3417 = data
  var i3419 = i3417[0]
  var i3418 = []
  for(var i = 0; i < i3419.length; i += 2) {
  request.r(i3419[i + 0], i3419[i + 1], 2, i3418, '')
  }
  i3416.atlasAssets = i3418
  i3416.scale = i3417[1]
  request.r(i3417[2], i3417[3], 0, i3416, 'skeletonJSON')
  i3416.isUpgradingBlendModeMaterials = !!i3417[4]
  i3416.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i3417[5], i3416.blendModeMaterials)
  var i3421 = i3417[6]
  var i3420 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i3421.length; i += 2) {
  request.r(i3421[i + 0], i3421[i + 1], 1, i3420, '')
  }
  i3416.skeletonDataModifiers = i3420
  var i3423 = i3417[7]
  var i3422 = []
  for(var i = 0; i < i3423.length; i += 1) {
    i3422.push( i3423[i + 0] );
  }
  i3416.fromAnimation = i3422
  var i3425 = i3417[8]
  var i3424 = []
  for(var i = 0; i < i3425.length; i += 1) {
    i3424.push( i3425[i + 0] );
  }
  i3416.toAnimation = i3424
  i3416.duration = i3417[9]
  i3416.defaultMix = i3417[10]
  request.r(i3417[11], i3417[12], 0, i3416, 'controller')
  return i3416
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i3428 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i3429 = data
  i3428.applyAdditiveMaterial = !!i3429[0]
  var i3431 = i3429[1]
  var i3430 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3431.length; i += 1) {
    i3430.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3431[i + 0]));
  }
  i3428.additiveMaterials = i3430
  var i3433 = i3429[2]
  var i3432 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3433.length; i += 1) {
    i3432.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3433[i + 0]));
  }
  i3428.multiplyMaterials = i3432
  var i3435 = i3429[3]
  var i3434 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3435.length; i += 1) {
    i3434.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3435[i + 0]));
  }
  i3428.screenMaterials = i3434
  i3428.requiresBlendModeMaterials = !!i3429[4]
  return i3428
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i3438 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i3439 = data
  i3438.pageName = i3439[0]
  request.r(i3439[1], i3439[2], 0, i3438, 'material')
  return i3438
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i3442 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i3443 = data
  request.r(i3443[0], i3443[1], 0, i3442, 'atlasFile')
  var i3445 = i3443[2]
  var i3444 = []
  for(var i = 0; i < i3445.length; i += 2) {
  request.r(i3445[i + 0], i3445[i + 1], 2, i3444, '')
  }
  i3442.materials = i3444
  i3442.textureLoadingMode = i3443[3]
  request.r(i3443[4], i3443[5], 0, i3442, 'onDemandTextureLoader')
  return i3442
}

Deserializers["ObstacleConfigSO"] = function (request, data, root) {
  var i3446 = root || request.c( 'ObstacleConfigSO' )
  var i3447 = data
  var i3449 = i3447[0]
  var i3448 = []
  for(var i = 0; i < i3449.length; i += 1) {
    i3448.push( request.d('ObstacleConfigSO+ObstacleEntry', i3449[i + 0]) );
  }
  i3446.obstacles = i3448
  var i3451 = i3447[1]
  var i3450 = []
  for(var i = 0; i < i3451.length; i += 1) {
    i3450.push( request.d('ObstacleData', i3451[i + 0]) );
  }
  i3446.obstacleDatas = i3450
  return i3446
}

Deserializers["ObstacleConfigSO+ObstacleEntry"] = function (request, data, root) {
  var i3454 = root || request.c( 'ObstacleConfigSO+ObstacleEntry' )
  var i3455 = data
  i3454.type = i3455[0]
  request.r(i3455[1], i3455[2], 0, i3454, 'prefab')
  return i3454
}

Deserializers["ObstacleData"] = function (request, data, root) {
  var i3458 = root || request.c( 'ObstacleData' )
  var i3459 = data
  i3458.name = i3459[0]
  i3458.description = i3459[1]
  request.r(i3459[2], i3459[3], 0, i3458, 'icon')
  request.r(i3459[4], i3459[5], 0, i3458, 'titleIcon')
  i3458.unlockLevel = i3459[6]
  return i3458
}

Deserializers["BoosterConfig"] = function (request, data, root) {
  var i3460 = root || request.c( 'BoosterConfig' )
  var i3461 = data
  var i3463 = i3461[0]
  var i3462 = new (System.Collections.Generic.List$1(Bridge.ns('BoosterInfo')))
  for(var i = 0; i < i3463.length; i += 1) {
    i3462.add(request.d('BoosterInfo', i3463[i + 0]));
  }
  i3460.boosterInfos = i3462
  return i3460
}

Deserializers["BoosterInfo"] = function (request, data, root) {
  var i3466 = root || request.c( 'BoosterInfo' )
  var i3467 = data
  i3466.type = i3467[0]
  i3466.name = i3467[1]
  i3466.description = i3467[2]
  i3466.levelUnlock = i3467[3]
  request.r(i3467[4], i3467[5], 0, i3466, 'icon')
  request.r(i3467[6], i3467[7], 0, i3466, 'titleIcon')
  i3466.amountFirst = i3467[8]
  i3466.price = i3467[9]
  i3466.amountBuy = i3467[10]
  return i3466
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3468 = root || request.c( 'TMPro.TMP_Settings' )
  var i3469 = data
  i3468.m_enableWordWrapping = !!i3469[0]
  i3468.m_enableKerning = !!i3469[1]
  i3468.m_enableExtraPadding = !!i3469[2]
  i3468.m_enableTintAllSprites = !!i3469[3]
  i3468.m_enableParseEscapeCharacters = !!i3469[4]
  i3468.m_EnableRaycastTarget = !!i3469[5]
  i3468.m_GetFontFeaturesAtRuntime = !!i3469[6]
  i3468.m_missingGlyphCharacter = i3469[7]
  i3468.m_warningsDisabled = !!i3469[8]
  request.r(i3469[9], i3469[10], 0, i3468, 'm_defaultFontAsset')
  i3468.m_defaultFontAssetPath = i3469[11]
  i3468.m_defaultFontSize = i3469[12]
  i3468.m_defaultAutoSizeMinRatio = i3469[13]
  i3468.m_defaultAutoSizeMaxRatio = i3469[14]
  i3468.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3469[15], i3469[16] )
  i3468.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3469[17], i3469[18] )
  i3468.m_autoSizeTextContainer = !!i3469[19]
  i3468.m_IsTextObjectScaleStatic = !!i3469[20]
  var i3471 = i3469[21]
  var i3470 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3471.length; i += 2) {
  request.r(i3471[i + 0], i3471[i + 1], 1, i3470, '')
  }
  i3468.m_fallbackFontAssets = i3470
  i3468.m_matchMaterialPreset = !!i3469[22]
  request.r(i3469[23], i3469[24], 0, i3468, 'm_defaultSpriteAsset')
  i3468.m_defaultSpriteAssetPath = i3469[25]
  i3468.m_enableEmojiSupport = !!i3469[26]
  i3468.m_MissingCharacterSpriteUnicode = i3469[27]
  i3468.m_defaultColorGradientPresetsPath = i3469[28]
  request.r(i3469[29], i3469[30], 0, i3468, 'm_defaultStyleSheet')
  i3468.m_StyleSheetsResourcePath = i3469[31]
  request.r(i3469[32], i3469[33], 0, i3468, 'm_leadingCharacters')
  request.r(i3469[34], i3469[35], 0, i3468, 'm_followingCharacters')
  i3468.m_UseModernHangulLineBreakingRules = !!i3469[36]
  return i3468
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3472 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3473 = data
  request.r(i3473[0], i3473[1], 0, i3472, 'spriteSheet')
  var i3475 = i3473[2]
  var i3474 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3475.length; i += 1) {
    i3474.add(request.d('TMPro.TMP_Sprite', i3475[i + 0]));
  }
  i3472.spriteInfoList = i3474
  var i3477 = i3473[3]
  var i3476 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3477.length; i += 2) {
  request.r(i3477[i + 0], i3477[i + 1], 1, i3476, '')
  }
  i3472.fallbackSpriteAssets = i3476
  i3472.hashCode = i3473[4]
  request.r(i3473[5], i3473[6], 0, i3472, 'material')
  i3472.materialHashCode = i3473[7]
  i3472.m_Version = i3473[8]
  i3472.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3473[9], i3472.m_FaceInfo)
  var i3479 = i3473[10]
  var i3478 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3479.length; i += 1) {
    i3478.add(request.d('TMPro.TMP_SpriteCharacter', i3479[i + 0]));
  }
  i3472.m_SpriteCharacterTable = i3478
  var i3481 = i3473[11]
  var i3480 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3481.length; i += 1) {
    i3480.add(request.d('TMPro.TMP_SpriteGlyph', i3481[i + 0]));
  }
  i3472.m_SpriteGlyphTable = i3480
  return i3472
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3484 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3485 = data
  i3484.name = i3485[0]
  i3484.hashCode = i3485[1]
  i3484.unicode = i3485[2]
  i3484.pivot = new pc.Vec2( i3485[3], i3485[4] )
  request.r(i3485[5], i3485[6], 0, i3484, 'sprite')
  i3484.id = i3485[7]
  i3484.x = i3485[8]
  i3484.y = i3485[9]
  i3484.width = i3485[10]
  i3484.height = i3485[11]
  i3484.xOffset = i3485[12]
  i3484.yOffset = i3485[13]
  i3484.xAdvance = i3485[14]
  i3484.scale = i3485[15]
  return i3484
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3490 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3491 = data
  i3490.m_Name = i3491[0]
  i3490.m_HashCode = i3491[1]
  i3490.m_ElementType = i3491[2]
  i3490.m_Unicode = i3491[3]
  i3490.m_GlyphIndex = i3491[4]
  i3490.m_Scale = i3491[5]
  return i3490
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3494 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3495 = data
  request.r(i3495[0], i3495[1], 0, i3494, 'sprite')
  i3494.m_Index = i3495[2]
  i3494.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3495[3], i3494.m_Metrics)
  i3494.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3495[4], i3494.m_GlyphRect)
  i3494.m_Scale = i3495[5]
  i3494.m_AtlasIndex = i3495[6]
  i3494.m_ClassDefinitionType = i3495[7]
  return i3494
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3496 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3497 = data
  var i3499 = i3497[0]
  var i3498 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3499.length; i += 1) {
    i3498.add(request.d('TMPro.TMP_Style', i3499[i + 0]));
  }
  i3496.m_StyleList = i3498
  return i3496
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3502 = root || request.c( 'TMPro.TMP_Style' )
  var i3503 = data
  i3502.m_Name = i3503[0]
  i3502.m_HashCode = i3503[1]
  i3502.m_OpeningDefinition = i3503[2]
  i3502.m_ClosingDefinition = i3503[3]
  i3502.m_OpeningTagArray = i3503[4]
  i3502.m_ClosingTagArray = i3503[5]
  i3502.m_OpeningTagUnicodeArray = i3503[6]
  i3502.m_ClosingTagUnicodeArray = i3503[7]
  return i3502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3505 = data
  var i3507 = i3505[0]
  var i3506 = []
  for(var i = 0; i < i3507.length; i += 1) {
    i3506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3507[i + 0]) );
  }
  i3504.files = i3506
  i3504.componentToPrefabIds = i3505[1]
  return i3504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3511 = data
  i3510.path = i3511[0]
  request.r(i3511[1], i3511[2], 0, i3510, 'unityObject')
  return i3510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3513 = data
  var i3515 = i3513[0]
  var i3514 = []
  for(var i = 0; i < i3515.length; i += 1) {
    i3514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3515[i + 0]) );
  }
  i3512.scriptsExecutionOrder = i3514
  var i3517 = i3513[1]
  var i3516 = []
  for(var i = 0; i < i3517.length; i += 1) {
    i3516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3517[i + 0]) );
  }
  i3512.sortingLayers = i3516
  var i3519 = i3513[2]
  var i3518 = []
  for(var i = 0; i < i3519.length; i += 1) {
    i3518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3519[i + 0]) );
  }
  i3512.cullingLayers = i3518
  i3512.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3513[3], i3512.timeSettings)
  i3512.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3513[4], i3512.physicsSettings)
  i3512.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3513[5], i3512.physics2DSettings)
  i3512.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3513[6], i3512.qualitySettings)
  i3512.enableRealtimeShadows = !!i3513[7]
  i3512.enableAutoInstancing = !!i3513[8]
  i3512.enableStaticBatching = !!i3513[9]
  i3512.enableDynamicBatching = !!i3513[10]
  i3512.usePreservativeDynamicBatching = !!i3513[11]
  i3512.lightmapEncodingQuality = i3513[12]
  i3512.desiredColorSpace = i3513[13]
  var i3521 = i3513[14]
  var i3520 = []
  for(var i = 0; i < i3521.length; i += 1) {
    i3520.push( i3521[i + 0] );
  }
  i3512.allTags = i3520
  return i3512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3525 = data
  i3524.name = i3525[0]
  i3524.value = i3525[1]
  return i3524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3529 = data
  i3528.id = i3529[0]
  i3528.name = i3529[1]
  i3528.value = i3529[2]
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3533 = data
  i3532.id = i3533[0]
  i3532.name = i3533[1]
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3535 = data
  i3534.fixedDeltaTime = i3535[0]
  i3534.maximumDeltaTime = i3535[1]
  i3534.timeScale = i3535[2]
  i3534.maximumParticleTimestep = i3535[3]
  return i3534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3537 = data
  i3536.gravity = new pc.Vec3( i3537[0], i3537[1], i3537[2] )
  i3536.defaultSolverIterations = i3537[3]
  i3536.bounceThreshold = i3537[4]
  i3536.autoSyncTransforms = !!i3537[5]
  i3536.autoSimulation = !!i3537[6]
  var i3539 = i3537[7]
  var i3538 = []
  for(var i = 0; i < i3539.length; i += 1) {
    i3538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3539[i + 0]) );
  }
  i3536.collisionMatrix = i3538
  return i3536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3543 = data
  i3542.enabled = !!i3543[0]
  i3542.layerId = i3543[1]
  i3542.otherLayerId = i3543[2]
  return i3542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3545 = data
  request.r(i3545[0], i3545[1], 0, i3544, 'material')
  i3544.gravity = new pc.Vec2( i3545[2], i3545[3] )
  i3544.positionIterations = i3545[4]
  i3544.velocityIterations = i3545[5]
  i3544.velocityThreshold = i3545[6]
  i3544.maxLinearCorrection = i3545[7]
  i3544.maxAngularCorrection = i3545[8]
  i3544.maxTranslationSpeed = i3545[9]
  i3544.maxRotationSpeed = i3545[10]
  i3544.baumgarteScale = i3545[11]
  i3544.baumgarteTOIScale = i3545[12]
  i3544.timeToSleep = i3545[13]
  i3544.linearSleepTolerance = i3545[14]
  i3544.angularSleepTolerance = i3545[15]
  i3544.defaultContactOffset = i3545[16]
  i3544.autoSimulation = !!i3545[17]
  i3544.queriesHitTriggers = !!i3545[18]
  i3544.queriesStartInColliders = !!i3545[19]
  i3544.callbacksOnDisable = !!i3545[20]
  i3544.reuseCollisionCallbacks = !!i3545[21]
  i3544.autoSyncTransforms = !!i3545[22]
  var i3547 = i3545[23]
  var i3546 = []
  for(var i = 0; i < i3547.length; i += 1) {
    i3546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3547[i + 0]) );
  }
  i3544.collisionMatrix = i3546
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3551 = data
  i3550.enabled = !!i3551[0]
  i3550.layerId = i3551[1]
  i3550.otherLayerId = i3551[2]
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3553 = data
  var i3555 = i3553[0]
  var i3554 = []
  for(var i = 0; i < i3555.length; i += 1) {
    i3554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3555[i + 0]) );
  }
  i3552.qualityLevels = i3554
  var i3557 = i3553[1]
  var i3556 = []
  for(var i = 0; i < i3557.length; i += 1) {
    i3556.push( i3557[i + 0] );
  }
  i3552.names = i3556
  i3552.shadows = i3553[2]
  i3552.anisotropicFiltering = i3553[3]
  i3552.antiAliasing = i3553[4]
  i3552.lodBias = i3553[5]
  i3552.shadowCascades = i3553[6]
  i3552.shadowDistance = i3553[7]
  i3552.shadowmaskMode = i3553[8]
  i3552.shadowProjection = i3553[9]
  i3552.shadowResolution = i3553[10]
  i3552.softParticles = !!i3553[11]
  i3552.softVegetation = !!i3553[12]
  i3552.activeColorSpace = i3553[13]
  i3552.desiredColorSpace = i3553[14]
  i3552.masterTextureLimit = i3553[15]
  i3552.maxQueuedFrames = i3553[16]
  i3552.particleRaycastBudget = i3553[17]
  i3552.pixelLightCount = i3553[18]
  i3552.realtimeReflectionProbes = !!i3553[19]
  i3552.shadowCascade2Split = i3553[20]
  i3552.shadowCascade4Split = new pc.Vec3( i3553[21], i3553[22], i3553[23] )
  i3552.streamingMipmapsActive = !!i3553[24]
  i3552.vSyncCount = i3553[25]
  i3552.asyncUploadBufferSize = i3553[26]
  i3552.asyncUploadTimeSlice = i3553[27]
  i3552.billboardsFaceCameraPosition = !!i3553[28]
  i3552.shadowNearPlaneOffset = i3553[29]
  i3552.streamingMipmapsMemoryBudget = i3553[30]
  i3552.maximumLODLevel = i3553[31]
  i3552.streamingMipmapsAddAllCameras = !!i3553[32]
  i3552.streamingMipmapsMaxLevelReduction = i3553[33]
  i3552.streamingMipmapsRenderersPerFrame = i3553[34]
  i3552.resolutionScalingFixedDPIFactor = i3553[35]
  i3552.streamingMipmapsMaxFileIORequests = i3553[36]
  i3552.currentQualityLevel = i3553[37]
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3563 = data
  i3562.weight = i3563[0]
  i3562.vertices = i3563[1]
  i3562.normals = i3563[2]
  i3562.tangents = i3563[3]
  return i3562
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3564 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3565 = data
  request.r(i3565[0], i3565[1], 0, i3564, 'm_ObjectArgument')
  i3564.m_ObjectArgumentAssemblyTypeName = i3565[2]
  i3564.m_IntArgument = i3565[3]
  i3564.m_FloatArgument = i3565[4]
  i3564.m_StringArgument = i3565[5]
  i3564.m_BoolArgument = !!i3565[6]
  return i3564
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3566 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3567 = data
  i3566.xPlacement = i3567[0]
  i3566.yPlacement = i3567[1]
  i3566.xAdvance = i3567[2]
  i3566.yAdvance = i3567[3]
  return i3566
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"104":[105],"106":[105],"107":[105],"108":[105],"109":[105],"110":[105],"111":[112],"113":[48],"114":[115],"116":[115],"117":[115],"118":[115],"119":[115],"120":[115],"121":[115],"122":[13],"123":[13],"124":[13],"125":[13],"126":[13],"127":[13],"128":[13],"129":[13],"130":[13],"131":[13],"132":[13],"133":[13],"134":[13],"135":[48],"136":[19],"137":[138],"139":[138],"63":[2],"90":[2],"91":[2],"66":[18],"61":[18],"58":[55],"140":[2],"141":[142],"143":[2],"144":[2],"84":[63],"6":[3,2],"145":[2],"83":[63],"65":[2],"64":[2],"94":[2],"146":[2],"147":[2],"148":[2],"149":[2],"96":[2],"150":[2],"151":[3,2],"152":[2],"153":[2],"154":[2],"155":[2],"156":[3,2],"157":[2],"158":[72],"159":[72],"73":[72],"160":[72],"161":[48],"162":[48],"163":[144],"164":[165],"166":[18],"167":[142],"168":[72],"169":[63],"170":[48],"171":[24],"172":[173],"174":[2],"175":[3,2],"40":[19],"176":[3,2],"177":[92,19],"178":[19],"179":[19,43],"180":[115],"181":[13],"182":[173],"183":[184],"97":[2,3],"185":[2],"20":[19,2],"7":[2,3],"186":[2],"187":[3,2],"188":[19],"189":[3,2],"190":[2],"191":[142],"192":[115],"193":[13]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","OutsideBird","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Rigidbody2D","UnityEngine.CircleCollider2D","UnityEngine.PhysicsMaterial2D","BubbleParts","BubbleOneSlot","UnityEngine.SpriteRenderer","UnityEngine.MeshRenderer","TMPro.TextMeshPro","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Light","BubbleTwoSlot","BubbleThreeSlot","BubbleFourSlot","BubbleFiveSlot","FrozenNestObstacle","LockedNestObstacle","KeyNestObstacle","HiddenNestObstacle","StoneNestObstacle","BigNestObstacle","HiddenBirdObstacle","BindBirdObstacle","IceBirdObstacle","TargetNestObstacle","Bird","Spine.Unity.SkeletonAnimation","UnityEngine.BoxCollider2D","BirdParts","UnityEngine.MeshFilter","Spine.Unity.SkeletonDataAsset","MagnetNestFx","ShuffleFX","ParticlesBase","UnityEngine.Camera","UnityEngine.AudioListener","BoardManager","TopContainer","DockContainer","SlotContainer","OutsideBirdHolder","BirdDock","TimeNestController","UnityEngine.GameObject","DockCountdown","UnityEngine.SpriteMask","BirdSlot","BranchWave","UnityEngine.Rendering.SortingGroup","UnityEngine.Canvas","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.ContentSizeFitter","SpriteFitScreenHeight","LevelManager","BirdDataSO","ObstacleConfigSO","UnityEngine.TextAsset","ControllerManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BoosterManager","BoosterConfig","GameManager","SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","ParticlesManager","GameData","ComboManager","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasGroup","GameplayUI","ButtonScaleUI","UnityEngine.UI.Button","BoosterItemUI","ColorBirdLogoAnimator","SlingshotAnimator","UnityEngine.Animator","Crystal.SafeArea","UnityEngine.UI.HorizontalLayoutGroup","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Mask","Coffee.UIExtensions.UIParticle","UnityEngine.Cubemap","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UIImageFitScreenHeight","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Lean.Common.LeanSelectableGraphicColor","Lean.Common.LeanSelectableRendererColor","UnityEngine.Renderer","Lean.Common.LeanSelectableSpriteRendererColor","Unity.VisualScripting.ScriptMachine","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","CW.Common.CwDepthTextureMode","CW.Common.CwLightIntensity","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine","Lean.Pool.LeanPooledRigidbody","Lean.Pool.LeanPooledRigidbody2D"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "10/23/2026 07:57:06";

Deserializers.lunaDaysRunning = "3.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "40462";

Deserializers.projectId = "3d987a175be354642872f51e7e01f1fb";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.18.0\ncom.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.8.10\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1821";

Deserializers.runtimeAnalysisExcludedMethodsCount = "6183";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.3D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "8e387e4c-54e2-4f94-8920-de6782f7dddc";

Deserializers.runtimeInitializeOnLoadInfos = [[["CW","Common","CwInput","Enable"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Sirenix","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","UnitySerializationInitializer","InitializeRuntime"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[["Coffee","UIExtensions","ParticleSystemPreviewSystem","Initialize"],["Coffee","UIParticleInternal","FrameCache","Clear"],["Coffee","UIExtensions","UIParticleUpdater","OnDomainReload"],["Coffee","UIParticleInternal","MaterialRepository","Clear"],["Coffee","UIParticleInternal","UIExtraCallbacks","InitializeOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["LockedNestObstacle","ResetStatics"],["EventManager","ClearAll"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

