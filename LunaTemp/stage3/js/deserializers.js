var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2658 = root || request.c( 'UnityEngine.JointSpring' )
  var i2659 = data
  i2658.spring = i2659[0]
  i2658.damper = i2659[1]
  i2658.targetPosition = i2659[2]
  return i2658
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2660 = root || request.c( 'UnityEngine.JointMotor' )
  var i2661 = data
  i2660.m_TargetVelocity = i2661[0]
  i2660.m_Force = i2661[1]
  i2660.m_FreeSpin = i2661[2]
  return i2660
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2662 = root || request.c( 'UnityEngine.JointLimits' )
  var i2663 = data
  i2662.m_Min = i2663[0]
  i2662.m_Max = i2663[1]
  i2662.m_Bounciness = i2663[2]
  i2662.m_BounceMinVelocity = i2663[3]
  i2662.m_ContactDistance = i2663[4]
  i2662.minBounce = i2663[5]
  i2662.maxBounce = i2663[6]
  return i2662
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2664 = root || request.c( 'UnityEngine.JointDrive' )
  var i2665 = data
  i2664.m_PositionSpring = i2665[0]
  i2664.m_PositionDamper = i2665[1]
  i2664.m_MaximumForce = i2665[2]
  i2664.m_UseAcceleration = i2665[3]
  return i2664
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2666 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2667 = data
  i2666.m_Spring = i2667[0]
  i2666.m_Damper = i2667[1]
  return i2666
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2668 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2669 = data
  i2668.m_Limit = i2669[0]
  i2668.m_Bounciness = i2669[1]
  i2668.m_ContactDistance = i2669[2]
  return i2668
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2670 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2671 = data
  i2670.m_ExtremumSlip = i2671[0]
  i2670.m_ExtremumValue = i2671[1]
  i2670.m_AsymptoteSlip = i2671[2]
  i2670.m_AsymptoteValue = i2671[3]
  i2670.m_Stiffness = i2671[4]
  return i2670
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2672 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2673 = data
  i2672.m_LowerAngle = i2673[0]
  i2672.m_UpperAngle = i2673[1]
  return i2672
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2674 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2675 = data
  i2674.m_MotorSpeed = i2675[0]
  i2674.m_MaximumMotorTorque = i2675[1]
  return i2674
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2676 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2677 = data
  i2676.m_DampingRatio = i2677[0]
  i2676.m_Frequency = i2677[1]
  i2676.m_Angle = i2677[2]
  return i2676
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2678 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2679 = data
  i2678.m_LowerTranslation = i2679[0]
  i2678.m_UpperTranslation = i2679[1]
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2680 = root || new pc.UnityMaterial()
  var i2681 = data
  i2680.name = i2681[0]
  request.r(i2681[1], i2681[2], 0, i2680, 'shader')
  i2680.renderQueue = i2681[3]
  i2680.enableInstancing = !!i2681[4]
  var i2683 = i2681[5]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2683[i + 0]) );
  }
  i2680.floatParameters = i2682
  var i2685 = i2681[6]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2685[i + 0]) );
  }
  i2680.colorParameters = i2684
  var i2687 = i2681[7]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2687[i + 0]) );
  }
  i2680.vectorParameters = i2686
  var i2689 = i2681[8]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2689[i + 0]) );
  }
  i2680.textureParameters = i2688
  var i2691 = i2681[9]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2691[i + 0]) );
  }
  i2680.materialFlags = i2690
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2695 = data
  i2694.name = i2695[0]
  i2694.value = i2695[1]
  return i2694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2699 = data
  i2698.name = i2699[0]
  i2698.value = new pc.Color(i2699[1], i2699[2], i2699[3], i2699[4])
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2703 = data
  i2702.name = i2703[0]
  i2702.value = new pc.Vec4( i2703[1], i2703[2], i2703[3], i2703[4] )
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2707 = data
  i2706.name = i2707[0]
  request.r(i2707[1], i2707[2], 0, i2706, 'value')
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2711 = data
  i2710.name = i2711[0]
  i2710.enabled = !!i2711[1]
  return i2710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2713 = data
  i2712.name = i2713[0]
  i2712.width = i2713[1]
  i2712.height = i2713[2]
  i2712.mipmapCount = i2713[3]
  i2712.anisoLevel = i2713[4]
  i2712.filterMode = i2713[5]
  i2712.hdr = !!i2713[6]
  i2712.format = i2713[7]
  i2712.wrapMode = i2713[8]
  i2712.alphaIsTransparency = !!i2713[9]
  i2712.alphaSource = i2713[10]
  i2712.graphicsFormat = i2713[11]
  i2712.sRGBTexture = !!i2713[12]
  i2712.desiredColorSpace = i2713[13]
  i2712.wrapU = i2713[14]
  i2712.wrapV = i2713[15]
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2715 = data
  i2714.pivot = new pc.Vec2( i2715[0], i2715[1] )
  i2714.anchorMin = new pc.Vec2( i2715[2], i2715[3] )
  i2714.anchorMax = new pc.Vec2( i2715[4], i2715[5] )
  i2714.sizeDelta = new pc.Vec2( i2715[6], i2715[7] )
  i2714.anchoredPosition3D = new pc.Vec3( i2715[8], i2715[9], i2715[10] )
  i2714.rotation = new pc.Quat(i2715[11], i2715[12], i2715[13], i2715[14])
  i2714.scale = new pc.Vec3( i2715[15], i2715[16], i2715[17] )
  return i2714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2717 = data
  i2716.cullTransparentMesh = !!i2717[0]
  return i2716
}

Deserializers["OutsideBird"] = function (request, data, root) {
  var i2718 = root || request.c( 'OutsideBird' )
  var i2719 = data
  request.r(i2719[0], i2719[1], 0, i2718, 'm_ImageIcon')
  request.r(i2719[2], i2719[3], 0, i2718, 'm_TxtCount')
  return i2718
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2720 = root || request.c( 'UnityEngine.UI.Image' )
  var i2721 = data
  request.r(i2721[0], i2721[1], 0, i2720, 'm_Sprite')
  i2720.m_Type = i2721[2]
  i2720.m_PreserveAspect = !!i2721[3]
  i2720.m_FillCenter = !!i2721[4]
  i2720.m_FillMethod = i2721[5]
  i2720.m_FillAmount = i2721[6]
  i2720.m_FillClockwise = !!i2721[7]
  i2720.m_FillOrigin = i2721[8]
  i2720.m_UseSpriteMesh = !!i2721[9]
  i2720.m_PixelsPerUnitMultiplier = i2721[10]
  request.r(i2721[11], i2721[12], 0, i2720, 'm_Material')
  i2720.m_Maskable = !!i2721[13]
  i2720.m_Color = new pc.Color(i2721[14], i2721[15], i2721[16], i2721[17])
  i2720.m_RaycastTarget = !!i2721[18]
  i2720.m_RaycastPadding = new pc.Vec4( i2721[19], i2721[20], i2721[21], i2721[22] )
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2723 = data
  i2722.name = i2723[0]
  i2722.tagId = i2723[1]
  i2722.enabled = !!i2723[2]
  i2722.isStatic = !!i2723[3]
  i2722.layer = i2723[4]
  return i2722
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2724 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2725 = data
  i2724.m_hasFontAssetChanged = !!i2725[0]
  request.r(i2725[1], i2725[2], 0, i2724, 'm_baseMaterial')
  i2724.m_maskOffset = new pc.Vec4( i2725[3], i2725[4], i2725[5], i2725[6] )
  i2724.m_text = i2725[7]
  i2724.m_isRightToLeft = !!i2725[8]
  request.r(i2725[9], i2725[10], 0, i2724, 'm_fontAsset')
  request.r(i2725[11], i2725[12], 0, i2724, 'm_sharedMaterial')
  var i2727 = i2725[13]
  var i2726 = []
  for(var i = 0; i < i2727.length; i += 2) {
  request.r(i2727[i + 0], i2727[i + 1], 2, i2726, '')
  }
  i2724.m_fontSharedMaterials = i2726
  request.r(i2725[14], i2725[15], 0, i2724, 'm_fontMaterial')
  var i2729 = i2725[16]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 2) {
  request.r(i2729[i + 0], i2729[i + 1], 2, i2728, '')
  }
  i2724.m_fontMaterials = i2728
  i2724.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2725[17], i2725[18], i2725[19], i2725[20])
  i2724.m_fontColor = new pc.Color(i2725[21], i2725[22], i2725[23], i2725[24])
  i2724.m_enableVertexGradient = !!i2725[25]
  i2724.m_colorMode = i2725[26]
  i2724.m_fontColorGradient = request.d('TMPro.VertexGradient', i2725[27], i2724.m_fontColorGradient)
  request.r(i2725[28], i2725[29], 0, i2724, 'm_fontColorGradientPreset')
  request.r(i2725[30], i2725[31], 0, i2724, 'm_spriteAsset')
  i2724.m_tintAllSprites = !!i2725[32]
  request.r(i2725[33], i2725[34], 0, i2724, 'm_StyleSheet')
  i2724.m_TextStyleHashCode = i2725[35]
  i2724.m_overrideHtmlColors = !!i2725[36]
  i2724.m_faceColor = UnityEngine.Color32.ConstructColor(i2725[37], i2725[38], i2725[39], i2725[40])
  i2724.m_fontSize = i2725[41]
  i2724.m_fontSizeBase = i2725[42]
  i2724.m_fontWeight = i2725[43]
  i2724.m_enableAutoSizing = !!i2725[44]
  i2724.m_fontSizeMin = i2725[45]
  i2724.m_fontSizeMax = i2725[46]
  i2724.m_fontStyle = i2725[47]
  i2724.m_HorizontalAlignment = i2725[48]
  i2724.m_VerticalAlignment = i2725[49]
  i2724.m_textAlignment = i2725[50]
  i2724.m_characterSpacing = i2725[51]
  i2724.m_wordSpacing = i2725[52]
  i2724.m_lineSpacing = i2725[53]
  i2724.m_lineSpacingMax = i2725[54]
  i2724.m_paragraphSpacing = i2725[55]
  i2724.m_charWidthMaxAdj = i2725[56]
  i2724.m_enableWordWrapping = !!i2725[57]
  i2724.m_wordWrappingRatios = i2725[58]
  i2724.m_overflowMode = i2725[59]
  request.r(i2725[60], i2725[61], 0, i2724, 'm_linkedTextComponent')
  request.r(i2725[62], i2725[63], 0, i2724, 'parentLinkedComponent')
  i2724.m_enableKerning = !!i2725[64]
  i2724.m_enableExtraPadding = !!i2725[65]
  i2724.checkPaddingRequired = !!i2725[66]
  i2724.m_isRichText = !!i2725[67]
  i2724.m_parseCtrlCharacters = !!i2725[68]
  i2724.m_isOrthographic = !!i2725[69]
  i2724.m_isCullingEnabled = !!i2725[70]
  i2724.m_horizontalMapping = i2725[71]
  i2724.m_verticalMapping = i2725[72]
  i2724.m_uvLineOffset = i2725[73]
  i2724.m_geometrySortingOrder = i2725[74]
  i2724.m_IsTextObjectScaleStatic = !!i2725[75]
  i2724.m_VertexBufferAutoSizeReduction = !!i2725[76]
  i2724.m_useMaxVisibleDescender = !!i2725[77]
  i2724.m_pageToDisplay = i2725[78]
  i2724.m_margin = new pc.Vec4( i2725[79], i2725[80], i2725[81], i2725[82] )
  i2724.m_isUsingLegacyAnimationComponent = !!i2725[83]
  i2724.m_isVolumetricText = !!i2725[84]
  request.r(i2725[85], i2725[86], 0, i2724, 'm_Material')
  i2724.m_Maskable = !!i2725[87]
  i2724.m_Color = new pc.Color(i2725[88], i2725[89], i2725[90], i2725[91])
  i2724.m_RaycastTarget = !!i2725[92]
  i2724.m_RaycastPadding = new pc.Vec4( i2725[93], i2725[94], i2725[95], i2725[96] )
  return i2724
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2732 = root || request.c( 'TMPro.VertexGradient' )
  var i2733 = data
  i2732.topLeft = new pc.Color(i2733[0], i2733[1], i2733[2], i2733[3])
  i2732.topRight = new pc.Color(i2733[4], i2733[5], i2733[6], i2733[7])
  i2732.bottomLeft = new pc.Color(i2733[8], i2733[9], i2733[10], i2733[11])
  i2732.bottomRight = new pc.Color(i2733[12], i2733[13], i2733[14], i2733[15])
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2735 = data
  i2734.position = new pc.Vec3( i2735[0], i2735[1], i2735[2] )
  i2734.scale = new pc.Vec3( i2735[3], i2735[4], i2735[5] )
  i2734.rotation = new pc.Quat(i2735[6], i2735[7], i2735[8], i2735[9])
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2737 = data
  i2736.bodyType = i2737[0]
  request.r(i2737[1], i2737[2], 0, i2736, 'material')
  i2736.simulated = !!i2737[3]
  i2736.useAutoMass = !!i2737[4]
  i2736.mass = i2737[5]
  i2736.drag = i2737[6]
  i2736.angularDrag = i2737[7]
  i2736.gravityScale = i2737[8]
  i2736.collisionDetectionMode = i2737[9]
  i2736.sleepMode = i2737[10]
  i2736.constraints = i2737[11]
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2739 = data
  i2738.radius = i2739[0]
  i2738.enabled = !!i2739[1]
  i2738.isTrigger = !!i2739[2]
  i2738.usedByEffector = !!i2739[3]
  i2738.density = i2739[4]
  i2738.offset = new pc.Vec2( i2739[5], i2739[6] )
  request.r(i2739[7], i2739[8], 0, i2738, 'material')
  return i2738
}

Deserializers["BubbleParts"] = function (request, data, root) {
  var i2740 = root || request.c( 'BubbleParts' )
  var i2741 = data
  var i2743 = i2741[0]
  var i2742 = []
  for(var i = 0; i < i2743.length; i += 1) {
    i2742.push( request.d('BubbleParts+Entry', i2743[i + 0]) );
  }
  i2740.parts = i2742
  return i2740
}

Deserializers["BubbleParts+Entry"] = function (request, data, root) {
  var i2746 = root || request.c( 'BubbleParts+Entry' )
  var i2747 = data
  i2746.key = i2747[0]
  request.r(i2747[1], i2747[2], 0, i2746, 'target')
  return i2746
}

Deserializers["BubbleOneSlot"] = function (request, data, root) {
  var i2748 = root || request.c( 'BubbleOneSlot' )
  var i2749 = data
  i2748.currentConfig = request.d('BubbleConfig', i2749[0], i2748.currentConfig)
  var i2751 = i2749[1]
  var i2750 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i2751.length; i += 2) {
  request.r(i2751[i + 0], i2751[i + 1], 1, i2750, '')
  }
  i2748.birds = i2750
  request.r(i2749[2], i2749[3], 0, i2748, 'birdParent')
  i2748.refillPopDuration = i2749[4]
  i2748.refillMoveDuration = i2749[5]
  i2748.clipBirdsToCircle = !!i2749[6]
  return i2748
}

Deserializers["BubbleConfig"] = function (request, data, root) {
  var i2752 = root || request.c( 'BubbleConfig' )
  var i2753 = data
  i2752.BubbleID = i2753[0]
  i2752.BubbleType = i2753[1]
  i2752.FishStr = i2753[2]
  i2752.IsFrozen = !!i2753[3]
  i2752.IsUnknown = !!i2753[4]
  i2752.IsKey = !!i2753[5]
  i2752.LockCount = i2753[6]
  i2752.Lock2Count = i2753[7]
  i2752.IsObstacle = !!i2753[8]
  i2752.Obstacle2Count = i2753[9]
  i2752.IsMore = !!i2753[10]
  i2752.IsConveyor = !!i2753[11]
  i2752.MaskTargetFish = i2753[12]
  i2752.BindFishStr = i2753[13]
  i2752.IceFishStr = i2753[14]
  i2752.UnKnowFishStr = i2753[15]
  i2752.KeyFishStr = i2753[16]
  i2752.LockFishStr = i2753[17]
  return i2752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2757 = data
  i2756.color = new pc.Color(i2757[0], i2757[1], i2757[2], i2757[3])
  request.r(i2757[4], i2757[5], 0, i2756, 'sprite')
  i2756.flipX = !!i2757[6]
  i2756.flipY = !!i2757[7]
  i2756.drawMode = i2757[8]
  i2756.size = new pc.Vec2( i2757[9], i2757[10] )
  i2756.tileMode = i2757[11]
  i2756.adaptiveModeThreshold = i2757[12]
  i2756.maskInteraction = i2757[13]
  i2756.spriteSortPoint = i2757[14]
  i2756.enabled = !!i2757[15]
  request.r(i2757[16], i2757[17], 0, i2756, 'sharedMaterial')
  var i2759 = i2757[18]
  var i2758 = []
  for(var i = 0; i < i2759.length; i += 2) {
  request.r(i2759[i + 0], i2759[i + 1], 2, i2758, '')
  }
  i2756.sharedMaterials = i2758
  i2756.receiveShadows = !!i2757[19]
  i2756.shadowCastingMode = i2757[20]
  i2756.sortingLayerID = i2757[21]
  i2756.sortingOrder = i2757[22]
  i2756.lightmapIndex = i2757[23]
  i2756.lightmapSceneIndex = i2757[24]
  i2756.lightmapScaleOffset = new pc.Vec4( i2757[25], i2757[26], i2757[27], i2757[28] )
  i2756.lightProbeUsage = i2757[29]
  i2756.reflectionProbeUsage = i2757[30]
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2761 = data
  request.r(i2761[0], i2761[1], 0, i2760, 'additionalVertexStreams')
  i2760.enabled = !!i2761[2]
  request.r(i2761[3], i2761[4], 0, i2760, 'sharedMaterial')
  var i2763 = i2761[5]
  var i2762 = []
  for(var i = 0; i < i2763.length; i += 2) {
  request.r(i2763[i + 0], i2763[i + 1], 2, i2762, '')
  }
  i2760.sharedMaterials = i2762
  i2760.receiveShadows = !!i2761[6]
  i2760.shadowCastingMode = i2761[7]
  i2760.sortingLayerID = i2761[8]
  i2760.sortingOrder = i2761[9]
  i2760.lightmapIndex = i2761[10]
  i2760.lightmapSceneIndex = i2761[11]
  i2760.lightmapScaleOffset = new pc.Vec4( i2761[12], i2761[13], i2761[14], i2761[15] )
  i2760.lightProbeUsage = i2761[16]
  i2760.reflectionProbeUsage = i2761[17]
  return i2760
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2764 = root || request.c( 'TMPro.TextMeshPro' )
  var i2765 = data
  i2764._SortingLayer = i2765[0]
  i2764._SortingLayerID = i2765[1]
  i2764._SortingOrder = i2765[2]
  i2764.m_hasFontAssetChanged = !!i2765[3]
  request.r(i2765[4], i2765[5], 0, i2764, 'm_renderer')
  i2764.m_maskType = i2765[6]
  i2764.m_text = i2765[7]
  i2764.m_isRightToLeft = !!i2765[8]
  request.r(i2765[9], i2765[10], 0, i2764, 'm_fontAsset')
  request.r(i2765[11], i2765[12], 0, i2764, 'm_sharedMaterial')
  var i2767 = i2765[13]
  var i2766 = []
  for(var i = 0; i < i2767.length; i += 2) {
  request.r(i2767[i + 0], i2767[i + 1], 2, i2766, '')
  }
  i2764.m_fontSharedMaterials = i2766
  request.r(i2765[14], i2765[15], 0, i2764, 'm_fontMaterial')
  var i2769 = i2765[16]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 2) {
  request.r(i2769[i + 0], i2769[i + 1], 2, i2768, '')
  }
  i2764.m_fontMaterials = i2768
  i2764.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2765[17], i2765[18], i2765[19], i2765[20])
  i2764.m_fontColor = new pc.Color(i2765[21], i2765[22], i2765[23], i2765[24])
  i2764.m_enableVertexGradient = !!i2765[25]
  i2764.m_colorMode = i2765[26]
  i2764.m_fontColorGradient = request.d('TMPro.VertexGradient', i2765[27], i2764.m_fontColorGradient)
  request.r(i2765[28], i2765[29], 0, i2764, 'm_fontColorGradientPreset')
  request.r(i2765[30], i2765[31], 0, i2764, 'm_spriteAsset')
  i2764.m_tintAllSprites = !!i2765[32]
  request.r(i2765[33], i2765[34], 0, i2764, 'm_StyleSheet')
  i2764.m_TextStyleHashCode = i2765[35]
  i2764.m_overrideHtmlColors = !!i2765[36]
  i2764.m_faceColor = UnityEngine.Color32.ConstructColor(i2765[37], i2765[38], i2765[39], i2765[40])
  i2764.m_fontSize = i2765[41]
  i2764.m_fontSizeBase = i2765[42]
  i2764.m_fontWeight = i2765[43]
  i2764.m_enableAutoSizing = !!i2765[44]
  i2764.m_fontSizeMin = i2765[45]
  i2764.m_fontSizeMax = i2765[46]
  i2764.m_fontStyle = i2765[47]
  i2764.m_HorizontalAlignment = i2765[48]
  i2764.m_VerticalAlignment = i2765[49]
  i2764.m_textAlignment = i2765[50]
  i2764.m_characterSpacing = i2765[51]
  i2764.m_wordSpacing = i2765[52]
  i2764.m_lineSpacing = i2765[53]
  i2764.m_lineSpacingMax = i2765[54]
  i2764.m_paragraphSpacing = i2765[55]
  i2764.m_charWidthMaxAdj = i2765[56]
  i2764.m_enableWordWrapping = !!i2765[57]
  i2764.m_wordWrappingRatios = i2765[58]
  i2764.m_overflowMode = i2765[59]
  request.r(i2765[60], i2765[61], 0, i2764, 'm_linkedTextComponent')
  request.r(i2765[62], i2765[63], 0, i2764, 'parentLinkedComponent')
  i2764.m_enableKerning = !!i2765[64]
  i2764.m_enableExtraPadding = !!i2765[65]
  i2764.checkPaddingRequired = !!i2765[66]
  i2764.m_isRichText = !!i2765[67]
  i2764.m_parseCtrlCharacters = !!i2765[68]
  i2764.m_isOrthographic = !!i2765[69]
  i2764.m_isCullingEnabled = !!i2765[70]
  i2764.m_horizontalMapping = i2765[71]
  i2764.m_verticalMapping = i2765[72]
  i2764.m_uvLineOffset = i2765[73]
  i2764.m_geometrySortingOrder = i2765[74]
  i2764.m_IsTextObjectScaleStatic = !!i2765[75]
  i2764.m_VertexBufferAutoSizeReduction = !!i2765[76]
  i2764.m_useMaxVisibleDescender = !!i2765[77]
  i2764.m_pageToDisplay = i2765[78]
  i2764.m_margin = new pc.Vec4( i2765[79], i2765[80], i2765[81], i2765[82] )
  i2764.m_isUsingLegacyAnimationComponent = !!i2765[83]
  i2764.m_isVolumetricText = !!i2765[84]
  request.r(i2765[85], i2765[86], 0, i2764, 'm_Material')
  i2764.m_Maskable = !!i2765[87]
  i2764.m_Color = new pc.Color(i2765[88], i2765[89], i2765[90], i2765[91])
  i2764.m_RaycastTarget = !!i2765[92]
  i2764.m_RaycastPadding = new pc.Vec4( i2765[93], i2765[94], i2765[95], i2765[96] )
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2771 = data
  i2770.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2771[0], i2770.main)
  i2770.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2771[1], i2770.colorBySpeed)
  i2770.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2771[2], i2770.colorOverLifetime)
  i2770.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2771[3], i2770.emission)
  i2770.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2771[4], i2770.rotationBySpeed)
  i2770.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2771[5], i2770.rotationOverLifetime)
  i2770.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2771[6], i2770.shape)
  i2770.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2771[7], i2770.sizeBySpeed)
  i2770.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2771[8], i2770.sizeOverLifetime)
  i2770.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2771[9], i2770.textureSheetAnimation)
  i2770.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2771[10], i2770.velocityOverLifetime)
  i2770.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2771[11], i2770.noise)
  i2770.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2771[12], i2770.inheritVelocity)
  i2770.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2771[13], i2770.forceOverLifetime)
  i2770.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2771[14], i2770.limitVelocityOverLifetime)
  i2770.useAutoRandomSeed = !!i2771[15]
  i2770.randomSeed = i2771[16]
  return i2770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2772 = root || new pc.ParticleSystemMain()
  var i2773 = data
  i2772.duration = i2773[0]
  i2772.loop = !!i2773[1]
  i2772.prewarm = !!i2773[2]
  i2772.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2773[3], i2772.startDelay)
  i2772.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2773[4], i2772.startLifetime)
  i2772.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2773[5], i2772.startSpeed)
  i2772.startSize3D = !!i2773[6]
  i2772.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2773[7], i2772.startSizeX)
  i2772.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2773[8], i2772.startSizeY)
  i2772.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2773[9], i2772.startSizeZ)
  i2772.startRotation3D = !!i2773[10]
  i2772.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2773[11], i2772.startRotationX)
  i2772.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2773[12], i2772.startRotationY)
  i2772.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2773[13], i2772.startRotationZ)
  i2772.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2773[14], i2772.startColor)
  i2772.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2773[15], i2772.gravityModifier)
  i2772.simulationSpace = i2773[16]
  request.r(i2773[17], i2773[18], 0, i2772, 'customSimulationSpace')
  i2772.simulationSpeed = i2773[19]
  i2772.useUnscaledTime = !!i2773[20]
  i2772.scalingMode = i2773[21]
  i2772.playOnAwake = !!i2773[22]
  i2772.maxParticles = i2773[23]
  i2772.emitterVelocityMode = i2773[24]
  i2772.stopAction = i2773[25]
  return i2772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2774 = root || new pc.MinMaxCurve()
  var i2775 = data
  i2774.mode = i2775[0]
  i2774.curveMin = new pc.AnimationCurve( { keys_flow: i2775[1] } )
  i2774.curveMax = new pc.AnimationCurve( { keys_flow: i2775[2] } )
  i2774.curveMultiplier = i2775[3]
  i2774.constantMin = i2775[4]
  i2774.constantMax = i2775[5]
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2776 = root || new pc.MinMaxGradient()
  var i2777 = data
  i2776.mode = i2777[0]
  i2776.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2777[1], i2776.gradientMin)
  i2776.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2777[2], i2776.gradientMax)
  i2776.colorMin = new pc.Color(i2777[3], i2777[4], i2777[5], i2777[6])
  i2776.colorMax = new pc.Color(i2777[7], i2777[8], i2777[9], i2777[10])
  return i2776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2779 = data
  i2778.mode = i2779[0]
  var i2781 = i2779[1]
  var i2780 = []
  for(var i = 0; i < i2781.length; i += 1) {
    i2780.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2781[i + 0]) );
  }
  i2778.colorKeys = i2780
  var i2783 = i2779[2]
  var i2782 = []
  for(var i = 0; i < i2783.length; i += 1) {
    i2782.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2783[i + 0]) );
  }
  i2778.alphaKeys = i2782
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2784 = root || new pc.ParticleSystemColorBySpeed()
  var i2785 = data
  i2784.enabled = !!i2785[0]
  i2784.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2785[1], i2784.color)
  i2784.range = new pc.Vec2( i2785[2], i2785[3] )
  return i2784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2789 = data
  i2788.color = new pc.Color(i2789[0], i2789[1], i2789[2], i2789[3])
  i2788.time = i2789[4]
  return i2788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2793 = data
  i2792.alpha = i2793[0]
  i2792.time = i2793[1]
  return i2792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2794 = root || new pc.ParticleSystemColorOverLifetime()
  var i2795 = data
  i2794.enabled = !!i2795[0]
  i2794.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2795[1], i2794.color)
  return i2794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2796 = root || new pc.ParticleSystemEmitter()
  var i2797 = data
  i2796.enabled = !!i2797[0]
  i2796.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2797[1], i2796.rateOverTime)
  i2796.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2797[2], i2796.rateOverDistance)
  var i2799 = i2797[3]
  var i2798 = []
  for(var i = 0; i < i2799.length; i += 1) {
    i2798.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2799[i + 0]) );
  }
  i2796.bursts = i2798
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2802 = root || new pc.ParticleSystemBurst()
  var i2803 = data
  i2802.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2803[0], i2802.count)
  i2802.cycleCount = i2803[1]
  i2802.minCount = i2803[2]
  i2802.maxCount = i2803[3]
  i2802.repeatInterval = i2803[4]
  i2802.time = i2803[5]
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2804 = root || new pc.ParticleSystemRotationBySpeed()
  var i2805 = data
  i2804.enabled = !!i2805[0]
  i2804.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2805[1], i2804.x)
  i2804.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2805[2], i2804.y)
  i2804.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2805[3], i2804.z)
  i2804.separateAxes = !!i2805[4]
  i2804.range = new pc.Vec2( i2805[5], i2805[6] )
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2806 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2807 = data
  i2806.enabled = !!i2807[0]
  i2806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2807[1], i2806.x)
  i2806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2807[2], i2806.y)
  i2806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2807[3], i2806.z)
  i2806.separateAxes = !!i2807[4]
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2808 = root || new pc.ParticleSystemShape()
  var i2809 = data
  i2808.enabled = !!i2809[0]
  i2808.shapeType = i2809[1]
  i2808.randomDirectionAmount = i2809[2]
  i2808.sphericalDirectionAmount = i2809[3]
  i2808.randomPositionAmount = i2809[4]
  i2808.alignToDirection = !!i2809[5]
  i2808.radius = i2809[6]
  i2808.radiusMode = i2809[7]
  i2808.radiusSpread = i2809[8]
  i2808.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2809[9], i2808.radiusSpeed)
  i2808.radiusThickness = i2809[10]
  i2808.angle = i2809[11]
  i2808.length = i2809[12]
  i2808.boxThickness = new pc.Vec3( i2809[13], i2809[14], i2809[15] )
  i2808.meshShapeType = i2809[16]
  request.r(i2809[17], i2809[18], 0, i2808, 'mesh')
  request.r(i2809[19], i2809[20], 0, i2808, 'meshRenderer')
  request.r(i2809[21], i2809[22], 0, i2808, 'skinnedMeshRenderer')
  i2808.useMeshMaterialIndex = !!i2809[23]
  i2808.meshMaterialIndex = i2809[24]
  i2808.useMeshColors = !!i2809[25]
  i2808.normalOffset = i2809[26]
  i2808.arc = i2809[27]
  i2808.arcMode = i2809[28]
  i2808.arcSpread = i2809[29]
  i2808.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2809[30], i2808.arcSpeed)
  i2808.donutRadius = i2809[31]
  i2808.position = new pc.Vec3( i2809[32], i2809[33], i2809[34] )
  i2808.rotation = new pc.Vec3( i2809[35], i2809[36], i2809[37] )
  i2808.scale = new pc.Vec3( i2809[38], i2809[39], i2809[40] )
  return i2808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2810 = root || new pc.ParticleSystemSizeBySpeed()
  var i2811 = data
  i2810.enabled = !!i2811[0]
  i2810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2811[1], i2810.x)
  i2810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2811[2], i2810.y)
  i2810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2811[3], i2810.z)
  i2810.separateAxes = !!i2811[4]
  i2810.range = new pc.Vec2( i2811[5], i2811[6] )
  return i2810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2812 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2813 = data
  i2812.enabled = !!i2813[0]
  i2812.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2813[1], i2812.x)
  i2812.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2813[2], i2812.y)
  i2812.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2813[3], i2812.z)
  i2812.separateAxes = !!i2813[4]
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2814 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2815 = data
  i2814.enabled = !!i2815[0]
  i2814.mode = i2815[1]
  i2814.animation = i2815[2]
  i2814.numTilesX = i2815[3]
  i2814.numTilesY = i2815[4]
  i2814.useRandomRow = !!i2815[5]
  i2814.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2815[6], i2814.frameOverTime)
  i2814.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2815[7], i2814.startFrame)
  i2814.cycleCount = i2815[8]
  i2814.rowIndex = i2815[9]
  i2814.flipU = i2815[10]
  i2814.flipV = i2815[11]
  i2814.spriteCount = i2815[12]
  var i2817 = i2815[13]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 2) {
  request.r(i2817[i + 0], i2817[i + 1], 2, i2816, '')
  }
  i2814.sprites = i2816
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2820 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2821 = data
  i2820.enabled = !!i2821[0]
  i2820.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2821[1], i2820.x)
  i2820.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2821[2], i2820.y)
  i2820.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2821[3], i2820.z)
  i2820.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2821[4], i2820.radial)
  i2820.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2821[5], i2820.speedModifier)
  i2820.space = i2821[6]
  i2820.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2821[7], i2820.orbitalX)
  i2820.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2821[8], i2820.orbitalY)
  i2820.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2821[9], i2820.orbitalZ)
  i2820.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2821[10], i2820.orbitalOffsetX)
  i2820.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2821[11], i2820.orbitalOffsetY)
  i2820.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2821[12], i2820.orbitalOffsetZ)
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2822 = root || new pc.ParticleSystemNoise()
  var i2823 = data
  i2822.enabled = !!i2823[0]
  i2822.separateAxes = !!i2823[1]
  i2822.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2823[2], i2822.strengthX)
  i2822.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2823[3], i2822.strengthY)
  i2822.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2823[4], i2822.strengthZ)
  i2822.frequency = i2823[5]
  i2822.damping = !!i2823[6]
  i2822.octaveCount = i2823[7]
  i2822.octaveMultiplier = i2823[8]
  i2822.octaveScale = i2823[9]
  i2822.quality = i2823[10]
  i2822.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2823[11], i2822.scrollSpeed)
  i2822.scrollSpeedMultiplier = i2823[12]
  i2822.remapEnabled = !!i2823[13]
  i2822.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2823[14], i2822.remapX)
  i2822.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2823[15], i2822.remapY)
  i2822.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2823[16], i2822.remapZ)
  i2822.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2823[17], i2822.positionAmount)
  i2822.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2823[18], i2822.rotationAmount)
  i2822.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2823[19], i2822.sizeAmount)
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2824 = root || new pc.ParticleSystemInheritVelocity()
  var i2825 = data
  i2824.enabled = !!i2825[0]
  i2824.mode = i2825[1]
  i2824.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2825[2], i2824.curve)
  return i2824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2826 = root || new pc.ParticleSystemForceOverLifetime()
  var i2827 = data
  i2826.enabled = !!i2827[0]
  i2826.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2827[1], i2826.x)
  i2826.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2827[2], i2826.y)
  i2826.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2827[3], i2826.z)
  i2826.space = i2827[4]
  i2826.randomized = !!i2827[5]
  return i2826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2828 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2829 = data
  i2828.enabled = !!i2829[0]
  i2828.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2829[1], i2828.limit)
  i2828.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2829[2], i2828.limitX)
  i2828.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2829[3], i2828.limitY)
  i2828.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2829[4], i2828.limitZ)
  i2828.dampen = i2829[5]
  i2828.separateAxes = !!i2829[6]
  i2828.space = i2829[7]
  i2828.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2829[8], i2828.drag)
  i2828.multiplyDragByParticleSize = !!i2829[9]
  i2828.multiplyDragByParticleVelocity = !!i2829[10]
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2831 = data
  request.r(i2831[0], i2831[1], 0, i2830, 'mesh')
  i2830.meshCount = i2831[2]
  i2830.activeVertexStreamsCount = i2831[3]
  i2830.alignment = i2831[4]
  i2830.renderMode = i2831[5]
  i2830.sortMode = i2831[6]
  i2830.lengthScale = i2831[7]
  i2830.velocityScale = i2831[8]
  i2830.cameraVelocityScale = i2831[9]
  i2830.normalDirection = i2831[10]
  i2830.sortingFudge = i2831[11]
  i2830.minParticleSize = i2831[12]
  i2830.maxParticleSize = i2831[13]
  i2830.pivot = new pc.Vec3( i2831[14], i2831[15], i2831[16] )
  request.r(i2831[17], i2831[18], 0, i2830, 'trailMaterial')
  i2830.applyActiveColorSpace = !!i2831[19]
  i2830.enabled = !!i2831[20]
  request.r(i2831[21], i2831[22], 0, i2830, 'sharedMaterial')
  var i2833 = i2831[23]
  var i2832 = []
  for(var i = 0; i < i2833.length; i += 2) {
  request.r(i2833[i + 0], i2833[i + 1], 2, i2832, '')
  }
  i2830.sharedMaterials = i2832
  i2830.receiveShadows = !!i2831[24]
  i2830.shadowCastingMode = i2831[25]
  i2830.sortingLayerID = i2831[26]
  i2830.sortingOrder = i2831[27]
  i2830.lightmapIndex = i2831[28]
  i2830.lightmapSceneIndex = i2831[29]
  i2830.lightmapScaleOffset = new pc.Vec4( i2831[30], i2831[31], i2831[32], i2831[33] )
  i2830.lightProbeUsage = i2831[34]
  i2830.reflectionProbeUsage = i2831[35]
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2835 = data
  i2834.type = i2835[0]
  i2834.color = new pc.Color(i2835[1], i2835[2], i2835[3], i2835[4])
  i2834.cullingMask = i2835[5]
  i2834.intensity = i2835[6]
  i2834.range = i2835[7]
  i2834.spotAngle = i2835[8]
  i2834.shadows = i2835[9]
  i2834.shadowNormalBias = i2835[10]
  i2834.shadowBias = i2835[11]
  i2834.shadowStrength = i2835[12]
  i2834.shadowResolution = i2835[13]
  i2834.lightmapBakeType = i2835[14]
  i2834.renderMode = i2835[15]
  request.r(i2835[16], i2835[17], 0, i2834, 'cookie')
  i2834.cookieSize = i2835[18]
  i2834.shadowNearPlane = i2835[19]
  i2834.occlusionMaskChannel = i2835[20]
  i2834.isBaked = !!i2835[21]
  i2834.mixedLightingMode = i2835[22]
  i2834.enabled = !!i2835[23]
  return i2834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2837 = data
  i2836.name = i2837[0]
  i2836.halfPrecision = !!i2837[1]
  i2836.useSimplification = !!i2837[2]
  i2836.useUInt32IndexFormat = !!i2837[3]
  i2836.vertexCount = i2837[4]
  i2836.aabb = i2837[5]
  var i2839 = i2837[6]
  var i2838 = []
  for(var i = 0; i < i2839.length; i += 1) {
    i2838.push( !!i2839[i + 0] );
  }
  i2836.streams = i2838
  i2836.vertices = i2837[7]
  var i2841 = i2837[8]
  var i2840 = []
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2841[i + 0]) );
  }
  i2836.subMeshes = i2840
  var i2843 = i2837[9]
  var i2842 = []
  for(var i = 0; i < i2843.length; i += 16) {
    i2842.push( new pc.Mat4().setData(i2843[i + 0], i2843[i + 1], i2843[i + 2], i2843[i + 3],  i2843[i + 4], i2843[i + 5], i2843[i + 6], i2843[i + 7],  i2843[i + 8], i2843[i + 9], i2843[i + 10], i2843[i + 11],  i2843[i + 12], i2843[i + 13], i2843[i + 14], i2843[i + 15]) );
  }
  i2836.bindposes = i2842
  var i2845 = i2837[10]
  var i2844 = []
  for(var i = 0; i < i2845.length; i += 1) {
    i2844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2845[i + 0]) );
  }
  i2836.blendShapes = i2844
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2851 = data
  i2850.triangles = i2851[0]
  return i2850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2857 = data
  i2856.name = i2857[0]
  var i2859 = i2857[1]
  var i2858 = []
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2859[i + 0]) );
  }
  i2856.frames = i2858
  return i2856
}

Deserializers["BubbleTwoSlot"] = function (request, data, root) {
  var i2860 = root || request.c( 'BubbleTwoSlot' )
  var i2861 = data
  i2860.layoutCenter = new pc.Vec2( i2861[0], i2861[1] )
  i2860.horizontalOffset = i2861[2]
  i2860.currentConfig = request.d('BubbleConfig', i2861[3], i2860.currentConfig)
  var i2863 = i2861[4]
  var i2862 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i2863.length; i += 2) {
  request.r(i2863[i + 0], i2863[i + 1], 1, i2862, '')
  }
  i2860.birds = i2862
  request.r(i2861[5], i2861[6], 0, i2860, 'birdParent')
  i2860.refillPopDuration = i2861[7]
  i2860.refillMoveDuration = i2861[8]
  i2860.clipBirdsToCircle = !!i2861[9]
  return i2860
}

Deserializers["BubbleThreeSlot"] = function (request, data, root) {
  var i2864 = root || request.c( 'BubbleThreeSlot' )
  var i2865 = data
  i2864.layoutCenter = new pc.Vec2( i2865[0], i2865[1] )
  i2864.horizontalOffset = i2865[2]
  i2864.verticalOffset = i2865[3]
  i2864.currentConfig = request.d('BubbleConfig', i2865[4], i2864.currentConfig)
  var i2867 = i2865[5]
  var i2866 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i2867.length; i += 2) {
  request.r(i2867[i + 0], i2867[i + 1], 1, i2866, '')
  }
  i2864.birds = i2866
  request.r(i2865[6], i2865[7], 0, i2864, 'birdParent')
  i2864.refillPopDuration = i2865[8]
  i2864.refillMoveDuration = i2865[9]
  i2864.clipBirdsToCircle = !!i2865[10]
  return i2864
}

Deserializers["BubbleFourSlot"] = function (request, data, root) {
  var i2868 = root || request.c( 'BubbleFourSlot' )
  var i2869 = data
  i2868.layoutCenter = new pc.Vec2( i2869[0], i2869[1] )
  i2868.horizontalOffset = i2869[2]
  i2868.verticalOffset = i2869[3]
  i2868.currentConfig = request.d('BubbleConfig', i2869[4], i2868.currentConfig)
  var i2871 = i2869[5]
  var i2870 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i2871.length; i += 2) {
  request.r(i2871[i + 0], i2871[i + 1], 1, i2870, '')
  }
  i2868.birds = i2870
  request.r(i2869[6], i2869[7], 0, i2868, 'birdParent')
  i2868.refillPopDuration = i2869[8]
  i2868.refillMoveDuration = i2869[9]
  i2868.clipBirdsToCircle = !!i2869[10]
  return i2868
}

Deserializers["BubbleFiveSlot"] = function (request, data, root) {
  var i2872 = root || request.c( 'BubbleFiveSlot' )
  var i2873 = data
  i2872.layoutCenter = new pc.Vec2( i2873[0], i2873[1] )
  i2872.horizontalOffset = i2873[2]
  i2872.verticalOffset = i2873[3]
  i2872.currentConfig = request.d('BubbleConfig', i2873[4], i2872.currentConfig)
  var i2875 = i2873[5]
  var i2874 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i2875.length; i += 2) {
  request.r(i2875[i + 0], i2875[i + 1], 1, i2874, '')
  }
  i2872.birds = i2874
  request.r(i2873[6], i2873[7], 0, i2872, 'birdParent')
  i2872.refillPopDuration = i2873[8]
  i2872.refillMoveDuration = i2873[9]
  i2872.clipBirdsToCircle = !!i2873[10]
  return i2872
}

Deserializers["FrozenNestObstacle"] = function (request, data, root) {
  var i2876 = root || request.c( 'FrozenNestObstacle' )
  var i2877 = data
  i2876.layers = i2877[0]
  i2876.touchTolerance = i2877[1]
  i2876.blockedMessage = i2877[2]
  i2876.overlayPart = i2877[3]
  i2876.layerTextPart = i2877[4]
  i2876.minAlpha = i2877[5]
  return i2876
}

Deserializers["LockedNestObstacle"] = function (request, data, root) {
  var i2878 = root || request.c( 'LockedNestObstacle' )
  var i2879 = data
  i2878.blockedMessage = i2879[0]
  request.r(i2879[1], i2879[2], 0, i2878, 'flyingKeyPrefab')
  i2878.keyFlyDuration = i2879[3]
  i2878.keyArcHeight = i2879[4]
  i2878.keySortingOffset = i2879[5]
  i2878.chainPart = i2879[6]
  i2878.lockPart = i2879[7]
  i2878.countTextPart = i2879[8]
  return i2878
}

Deserializers["KeyNestObstacle"] = function (request, data, root) {
  var i2880 = root || request.c( 'KeyNestObstacle' )
  var i2881 = data
  i2880.keyPart = i2881[0]
  return i2880
}

Deserializers["HiddenNestObstacle"] = function (request, data, root) {
  var i2882 = root || request.c( 'HiddenNestObstacle' )
  var i2883 = data
  i2882.blockedMessage = i2883[0]
  i2882.bottomTolerance = i2883[1]
  i2882.settleTime = i2883[2]
  i2882.revealDuration = i2883[3]
  i2882.coverPart = i2883[4]
  return i2882
}

Deserializers["StoneNestObstacle"] = function (request, data, root) {
  var i2884 = root || request.c( 'StoneNestObstacle' )
  var i2885 = data
  i2884.stonePart = i2885[0]
  var i2887 = i2885[1]
  var i2886 = []
  for(var i = 0; i < i2887.length; i += 1) {
    i2886.push( i2887[i + 0] );
  }
  i2884.hiddenParts = i2886
  i2884.keepUpright = !!i2885[2]
  i2884.stoneMass = i2885[3]
  return i2884
}

Deserializers["BigNestObstacle"] = function (request, data, root) {
  var i2890 = root || request.c( 'BigNestObstacle' )
  var i2891 = data
  i2890.countTextPart = i2891[0]
  return i2890
}

Deserializers["HiddenBirdObstacle"] = function (request, data, root) {
  var i2892 = root || request.c( 'HiddenBirdObstacle' )
  var i2893 = data
  i2892.overlayPart = i2893[0]
  i2892.revealDuration = i2893[1]
  return i2892
}

Deserializers["BindBirdObstacle"] = function (request, data, root) {
  var i2894 = root || request.c( 'BindBirdObstacle' )
  var i2895 = data
  i2894.overlayPart = i2895[0]
  i2894.sortingOffset = i2895[1]
  i2894.clearDuration = i2895[2]
  return i2894
}

Deserializers["IceBirdObstacle"] = function (request, data, root) {
  var i2896 = root || request.c( 'IceBirdObstacle' )
  var i2897 = data
  i2896.blockedMessage = i2897[0]
  i2896.overlayPart = i2897[1]
  i2896.textPart = i2897[2]
  return i2896
}

Deserializers["TargetNestObstacle"] = function (request, data, root) {
  var i2898 = root || request.c( 'TargetNestObstacle' )
  var i2899 = data
  i2898.blockedMessage = i2899[0]
  i2898.revealDuration = i2899[1]
  i2898.overlayPart = i2899[2]
  i2898.iconPart = i2899[3]
  return i2898
}

Deserializers["Bird"] = function (request, data, root) {
  var i2900 = root || request.c( 'Bird' )
  var i2901 = data
  request.r(i2901[0], i2901[1], 0, i2900, 'Content')
  var i2903 = i2901[2]
  var i2902 = []
  for(var i = 0; i < i2903.length; i += 2) {
  request.r(i2903[i + 0], i2903[i + 1], 2, i2902, '')
  }
  i2900.trailParticles = i2902
  request.r(i2901[3], i2901[4], 0, i2900, '_skeletalAnimation')
  i2900._birdData = request.d('BirdData', i2901[5], i2900._birdData)
  i2900._moveDuration = i2901[6]
  i2900._slotScale = i2901[7]
  i2900._flightSpeed = i2901[8]
  i2900._flightJumpPower = i2901[9]
  i2900._flightJumpPowerPerUnit = i2901[10]
  i2900._sourceFacesRight = !!i2901[11]
  i2900._flightFacingDeadZone = i2901[12]
  i2900._landContactFallbackDelay = i2901[13]
  request.r(i2901[14], i2901[15], 0, i2900, '_collider')
  request.r(i2901[16], i2901[17], 0, i2900, '_skeletalRenderer')
  i2900._idleUpdateFps = i2901[18]
  i2900._freezeSpineInBubble = !!i2901[19]
  i2900._freezeSpineWhenSleeping = !!i2901[20]
  return i2900
}

Deserializers["BirdData"] = function (request, data, root) {
  var i2906 = root || request.c( 'BirdData' )
  var i2907 = data
  i2906.birdType = i2907[0]
  i2906.birdId = i2907[1]
  request.r(i2907[2], i2907[3], 0, i2906, 'spriteIcon')
  request.r(i2907[4], i2907[5], 0, i2906, 'skeletonDataAsset')
  i2906.skinName = i2907[6]
  request.r(i2907[7], i2907[8], 0, i2906, 'skeletonSprite')
  return i2906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2909 = data
  i2908.usedByComposite = !!i2909[0]
  i2908.autoTiling = !!i2909[1]
  i2908.size = new pc.Vec2( i2909[2], i2909[3] )
  i2908.edgeRadius = i2909[4]
  i2908.enabled = !!i2909[5]
  i2908.isTrigger = !!i2909[6]
  i2908.usedByEffector = !!i2909[7]
  i2908.density = i2909[8]
  i2908.offset = new pc.Vec2( i2909[9], i2909[10] )
  request.r(i2909[11], i2909[12], 0, i2908, 'material')
  return i2908
}

Deserializers["BirdParts"] = function (request, data, root) {
  var i2910 = root || request.c( 'BirdParts' )
  var i2911 = data
  var i2913 = i2911[0]
  var i2912 = []
  for(var i = 0; i < i2913.length; i += 1) {
    i2912.push( request.d('BirdParts+Entry', i2913[i + 0]) );
  }
  i2910.parts = i2912
  return i2910
}

Deserializers["BirdParts+Entry"] = function (request, data, root) {
  var i2916 = root || request.c( 'BirdParts+Entry' )
  var i2917 = data
  i2916.key = i2917[0]
  request.r(i2917[1], i2917[2], 0, i2916, 'target')
  return i2916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2919 = data
  request.r(i2919[0], i2919[1], 0, i2918, 'sharedMesh')
  return i2918
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i2920 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i2921 = data
  i2920.loop = !!i2921[0]
  i2920.timeScale = i2921[1]
  request.r(i2921[2], i2921[3], 0, i2920, 'skeletonDataAsset')
  i2920.initialSkinName = i2921[4]
  i2920.fixPrefabOverrideViaMeshFilter = i2921[5]
  i2920.initialFlipX = !!i2921[6]
  i2920.initialFlipY = !!i2921[7]
  i2920.updateWhenInvisible = i2921[8]
  i2920.zSpacing = i2921[9]
  i2920.useClipping = !!i2921[10]
  i2920.immutableTriangles = !!i2921[11]
  i2920.pmaVertexColors = !!i2921[12]
  i2920.clearStateOnDisable = !!i2921[13]
  i2920.tintBlack = !!i2921[14]
  i2920.singleSubmesh = !!i2921[15]
  i2920.fixDrawOrder = !!i2921[16]
  i2920.addNormals = !!i2921[17]
  i2920.calculateTangents = !!i2921[18]
  i2920.maskInteraction = i2921[19]
  i2920.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i2921[20], i2920.maskMaterials)
  i2920.disableRenderingOnOverride = !!i2921[21]
  i2920.updateTiming = i2921[22]
  i2920.unscaledTime = !!i2921[23]
  i2920._animationName = i2921[24]
  var i2923 = i2921[25]
  var i2922 = []
  for(var i = 0; i < i2923.length; i += 1) {
    i2922.push( i2923[i + 0] );
  }
  i2920.separatorSlotNames = i2922
  i2920.physicsPositionInheritanceFactor = new pc.Vec2( i2921[26], i2921[27] )
  i2920.physicsRotationInheritanceFactor = i2921[28]
  request.r(i2921[29], i2921[30], 0, i2920, 'physicsMovementRelativeTo')
  return i2920
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i2924 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i2925 = data
  var i2927 = i2925[0]
  var i2926 = []
  for(var i = 0; i < i2927.length; i += 2) {
  request.r(i2927[i + 0], i2927[i + 1], 2, i2926, '')
  }
  i2924.materialsMaskDisabled = i2926
  var i2929 = i2925[1]
  var i2928 = []
  for(var i = 0; i < i2929.length; i += 2) {
  request.r(i2929[i + 0], i2929[i + 1], 2, i2928, '')
  }
  i2924.materialsInsideMask = i2928
  var i2931 = i2925[2]
  var i2930 = []
  for(var i = 0; i < i2931.length; i += 2) {
  request.r(i2931[i + 0], i2931[i + 1], 2, i2930, '')
  }
  i2924.materialsOutsideMask = i2930
  return i2924
}

Deserializers["MagnetNestFx"] = function (request, data, root) {
  var i2934 = root || request.c( 'MagnetNestFx' )
  var i2935 = data
  i2934.appearDuration = i2935[0]
  i2934.startScaleMultiplier = i2935[1]
  i2934.endScaleMultiplier = i2935[2]
  i2934.vanishDuration = i2935[3]
  return i2934
}

Deserializers["ShuffleFX"] = function (request, data, root) {
  var i2936 = root || request.c( 'ShuffleFX' )
  var i2937 = data
  request.r(i2937[0], i2937[1], 0, i2936, 'fan')
  request.r(i2937[2], i2937[3], 0, i2936, 'fan_spin')
  i2936.appearDuration = i2937[4]
  i2936.spinDuration = i2937[5]
  i2936.disappearDuration = i2937[6]
  i2936.totalSpinAngle = i2937[7]
  i2936.blurThreshold = i2937[8]
  i2936.wobbleAngle = i2937[9]
  i2936.wobbleOffset = i2937[10]
  i2936.wobbleSpeed = i2937[11]
  i2936.sortingOrderOffset = i2937[12]
  return i2936
}

Deserializers["ParticlesBase"] = function (request, data, root) {
  var i2938 = root || request.c( 'ParticlesBase' )
  var i2939 = data
  i2938.effectType = i2939[0]
  request.r(i2939[1], i2939[2], 0, i2938, 'particles')
  var i2941 = i2939[3]
  var i2940 = []
  for(var i = 0; i < i2941.length; i += 2) {
  request.r(i2941[i + 0], i2941[i + 1], 2, i2940, '')
  }
  i2938.allParticles = i2940
  return i2938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2943 = data
  i2942.name = i2943[0]
  i2942.atlasId = i2943[1]
  i2942.mipmapCount = i2943[2]
  i2942.hdr = !!i2943[3]
  i2942.size = i2943[4]
  i2942.anisoLevel = i2943[5]
  i2942.filterMode = i2943[6]
  var i2945 = i2943[7]
  var i2944 = []
  for(var i = 0; i < i2945.length; i += 4) {
    i2944.push( UnityEngine.Rect.MinMaxRect(i2945[i + 0], i2945[i + 1], i2945[i + 2], i2945[i + 3]) );
  }
  i2942.rects = i2944
  i2942.wrapU = i2943[8]
  i2942.wrapV = i2943[9]
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2949 = data
  i2948.name = i2949[0]
  i2948.index = i2949[1]
  i2948.startup = !!i2949[2]
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2951 = data
  i2950.aspect = i2951[0]
  i2950.orthographic = !!i2951[1]
  i2950.orthographicSize = i2951[2]
  i2950.backgroundColor = new pc.Color(i2951[3], i2951[4], i2951[5], i2951[6])
  i2950.nearClipPlane = i2951[7]
  i2950.farClipPlane = i2951[8]
  i2950.fieldOfView = i2951[9]
  i2950.depth = i2951[10]
  i2950.clearFlags = i2951[11]
  i2950.cullingMask = i2951[12]
  i2950.rect = i2951[13]
  request.r(i2951[14], i2951[15], 0, i2950, 'targetTexture')
  i2950.usePhysicalProperties = !!i2951[16]
  i2950.focalLength = i2951[17]
  i2950.sensorSize = new pc.Vec2( i2951[18], i2951[19] )
  i2950.lensShift = new pc.Vec2( i2951[20], i2951[21] )
  i2950.gateFit = i2951[22]
  i2950.commandBufferCount = i2951[23]
  i2950.cameraType = i2951[24]
  i2950.enabled = !!i2951[25]
  return i2950
}

Deserializers["BoardManager"] = function (request, data, root) {
  var i2952 = root || request.c( 'BoardManager' )
  var i2953 = data
  var i2955 = i2953[0]
  var i2954 = new (System.Collections.Generic.List$1(Bridge.ns('BubbleBase')))
  for(var i = 0; i < i2955.length; i += 2) {
  request.r(i2955[i + 0], i2955[i + 1], 1, i2954, '')
  }
  i2952.bubbleActive = i2954
  var i2957 = i2953[1]
  var i2956 = []
  for(var i = 0; i < i2957.length; i += 2) {
  request.r(i2957[i + 0], i2957[i + 1], 2, i2956, '')
  }
  i2952._bubblePrefabs = i2956
  var i2959 = i2953[2]
  var i2958 = []
  for(var i = 0; i < i2959.length; i += 2) {
  request.r(i2959[i + 0], i2959[i + 1], 2, i2958, '')
  }
  i2952._spawnPoints = i2958
  request.r(i2953[3], i2953[4], 0, i2952, '_waterSurface')
  request.r(i2953[5], i2953[6], 0, i2952, '_bubbleParent')
  request.r(i2953[7], i2953[8], 0, i2952, '_magnetGatherPoint')
  i2952._surfaceTolerance = i2953[9]
  request.r(i2953[10], i2953[11], 0, i2952, '_wallsParent')
  request.r(i2953[12], i2953[13], 0, i2952, '_cloude')
  request.r(i2953[14], i2953[15], 0, i2952, '_bottomCollider')
  request.r(i2953[16], i2953[17], 0, i2952, '_alignmentCamera')
  i2952._horizontalSpawnJitter = i2953[18]
  i2952._inwardImpulseMin = i2953[19]
  i2952._inwardImpulseMax = i2953[20]
  i2952._initialSpawnCount = i2953[21]
  i2952._initialSpawnInterval = i2953[22]
  i2952._checkInterval = i2953[23]
  i2952._spawnInterval = i2953[24]
  i2952._deadlockCheckDelay = i2953[25]
  i2952._settleSpeed = i2953[26]
  i2952._settleTime = i2953[27]
  i2952._settleTimeout = i2953[28]
  request.r(i2953[29], i2953[30], 0, i2952, '_boxBird')
  var i2961 = i2953[31]
  var i2960 = []
  for(var i = 0; i < i2961.length; i += 2) {
  request.r(i2961[i + 0], i2961[i + 1], 2, i2960, '')
  }
  i2952._SpriteBoxBirds = i2960
  return i2952
}

Deserializers["TopContainer"] = function (request, data, root) {
  var i2968 = root || request.c( 'TopContainer' )
  var i2969 = data
  i2968.animatingCount = i2969[0]
  request.r(i2969[1], i2969[2], 0, i2968, 'top')
  request.r(i2969[3], i2969[4], 0, i2968, 'dockContainer')
  request.r(i2969[5], i2969[6], 0, i2968, 'slotContainer')
  request.r(i2969[7], i2969[8], 0, i2968, '_countComplateText')
  request.r(i2969[9], i2969[10], 0, i2968, 'outsideBirdHolder')
  request.r(i2969[11], i2969[12], 0, i2968, 'fitCamera')
  i2968.referenceResolution = new pc.Vec2( i2969[13], i2969[14] )
  i2968.referenceOrthographicSize = i2969[15]
  i2968.cameraFitPadding = i2969[16]
  i2968.allowCameraFitUpscale = !!i2969[17]
  return i2968
}

Deserializers["DockContainer"] = function (request, data, root) {
  var i2970 = root || request.c( 'DockContainer' )
  var i2971 = data
  i2970.dockCount = i2971[0]
  i2970.activeOrderCount = i2971[1]
  var i2973 = i2971[2]
  var i2972 = new (System.Collections.Generic.List$1(Bridge.ns('BirdDock')))
  for(var i = 0; i < i2973.length; i += 2) {
  request.r(i2973[i + 0], i2973[i + 1], 1, i2972, '')
  }
  i2970.dockSlot = i2972
  request.r(i2971[3], i2971[4], 0, i2970, 'tileDockPrefab')
  return i2970
}

Deserializers["TimeNestController"] = function (request, data, root) {
  var i2976 = root || request.c( 'TimeNestController' )
  var i2977 = data
  return i2976
}

Deserializers["BirdDock"] = function (request, data, root) {
  var i2978 = root || request.c( 'BirdDock' )
  var i2979 = data
  i2978.tileType = i2979[0]
  i2978.birdId = i2979[1]
  i2978.isLock = !!i2979[2]
  i2978.isAnim = !!i2979[3]
  request.r(i2979[4], i2979[5], 0, i2978, 'visual')
  var i2981 = i2979[6]
  var i2980 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2981.length; i += 2) {
  request.r(i2981[i + 0], i2981[i + 1], 1, i2980, '')
  }
  i2978.points = i2980
  request.r(i2979[7], i2979[8], 0, i2978, '_targetSprite')
  request.r(i2979[9], i2979[10], 0, i2978, '_amountText')
  request.r(i2979[11], i2979[12], 0, i2978, 'addUI')
  request.r(i2979[13], i2979[14], 0, i2978, 'orderUI')
  i2978.Max = i2979[15]
  return i2978
}

Deserializers["DockCountdown"] = function (request, data, root) {
  var i2984 = root || request.c( 'DockCountdown' )
  var i2985 = data
  request.r(i2985[0], i2985[1], 0, i2984, 'countdownRoot')
  request.r(i2985[2], i2985[3], 0, i2984, 'timeText')
  i2984.warningThreshold = i2985[4]
  i2984.warningColor = new pc.Color(i2985[5], i2985[6], i2985[7], i2985[8])
  var i2987 = i2985[9]
  var i2986 = []
  for(var i = 0; i < i2987.length; i += 2) {
  request.r(i2987[i + 0], i2987[i + 1], 2, i2986, '')
  }
  i2984.warningObjects = i2986
  return i2984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2991 = data
  i2990.frontSortingLayerID = i2991[0]
  i2990.frontSortingOrder = i2991[1]
  i2990.backSortingLayerID = i2991[2]
  i2990.backSortingOrder = i2991[3]
  i2990.alphaCutoff = i2991[4]
  request.r(i2991[5], i2991[6], 0, i2990, 'sprite')
  i2990.tileMode = i2991[7]
  i2990.isCustomRangeActive = !!i2991[8]
  i2990.spriteSortPoint = i2991[9]
  i2990.enabled = !!i2991[10]
  request.r(i2991[11], i2991[12], 0, i2990, 'sharedMaterial')
  var i2993 = i2991[13]
  var i2992 = []
  for(var i = 0; i < i2993.length; i += 2) {
  request.r(i2993[i + 0], i2993[i + 1], 2, i2992, '')
  }
  i2990.sharedMaterials = i2992
  i2990.receiveShadows = !!i2991[14]
  i2990.shadowCastingMode = i2991[15]
  i2990.sortingLayerID = i2991[16]
  i2990.sortingOrder = i2991[17]
  i2990.lightmapIndex = i2991[18]
  i2990.lightmapSceneIndex = i2991[19]
  i2990.lightmapScaleOffset = new pc.Vec4( i2991[20], i2991[21], i2991[22], i2991[23] )
  i2990.lightProbeUsage = i2991[24]
  i2990.reflectionProbeUsage = i2991[25]
  return i2990
}

Deserializers["SlotContainer"] = function (request, data, root) {
  var i2994 = root || request.c( 'SlotContainer' )
  var i2995 = data
  var i2997 = i2995[0]
  var i2996 = new (System.Collections.Generic.List$1(Bridge.ns('BirdSlot')))
  for(var i = 0; i < i2997.length; i += 2) {
  request.r(i2997[i + 0], i2997[i + 1], 1, i2996, '')
  }
  i2994.tileSlots = i2996
  request.r(i2995[1], i2995[2], 0, i2994, 'ExtraSlotPos')
  request.r(i2995[3], i2995[4], 0, i2994, 'tile')
  request.r(i2995[5], i2995[6], 0, i2994, 'branchWave')
  return i2994
}

Deserializers["BranchWave"] = function (request, data, root) {
  var i3000 = root || request.c( 'BranchWave' )
  var i3001 = data
  i3000.amplitude = i3001[0]
  i3000.speed = i3001[1]
  i3000.frequency = i3001[2]
  i3000.damping = i3001[3]
  i3000.falloff = i3001[4]
  i3000.riderTiltScale = i3001[5]
  return i3000
}

Deserializers["BirdSlot"] = function (request, data, root) {
  var i3002 = root || request.c( 'BirdSlot' )
  var i3003 = data
  i3002.isAnim = !!i3003[0]
  request.r(i3003[1], i3003[2], 0, i3002, 'warningSprite')
  return i3002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i3004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i3005 = data
  i3004.sortingLayerIndex = i3005[0]
  i3004.sortingOrder = i3005[1]
  i3004.sortingLayerName = i3005[2]
  i3004.enabled = !!i3005[3]
  return i3004
}

Deserializers["OutsideBirdHolder"] = function (request, data, root) {
  var i3006 = root || request.c( 'OutsideBirdHolder' )
  var i3007 = data
  request.r(i3007[0], i3007[1], 0, i3006, 'm_TxtCount')
  request.r(i3007[2], i3007[3], 0, i3006, 'm_Canvas')
  request.r(i3007[4], i3007[5], 0, i3006, 'm_ObjContent')
  request.r(i3007[6], i3007[7], 0, i3006, 'm_OutsideBirdPrefab')
  request.r(i3007[8], i3007[9], 0, i3006, 'm_NestVisual')
  i3006.m_ShakeDuration = i3007[10]
  i3006.m_ShakeScale = i3007[11]
  i3006.m_ShakeRotation = i3007[12]
  return i3006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3009 = data
  i3008.planeDistance = i3009[0]
  i3008.referencePixelsPerUnit = i3009[1]
  i3008.isFallbackOverlay = !!i3009[2]
  i3008.renderMode = i3009[3]
  i3008.renderOrder = i3009[4]
  i3008.sortingLayerName = i3009[5]
  i3008.sortingOrder = i3009[6]
  i3008.scaleFactor = i3009[7]
  request.r(i3009[8], i3009[9], 0, i3008, 'worldCamera')
  i3008.overrideSorting = !!i3009[10]
  i3008.pixelPerfect = !!i3009[11]
  i3008.targetDisplay = i3009[12]
  i3008.overridePixelPerfect = !!i3009[13]
  i3008.enabled = !!i3009[14]
  return i3008
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i3010 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i3011 = data
  i3010.m_StartCorner = i3011[0]
  i3010.m_StartAxis = i3011[1]
  i3010.m_CellSize = new pc.Vec2( i3011[2], i3011[3] )
  i3010.m_Spacing = new pc.Vec2( i3011[4], i3011[5] )
  i3010.m_Constraint = i3011[6]
  i3010.m_ConstraintCount = i3011[7]
  i3010.m_Padding = UnityEngine.RectOffset.FromPaddings(i3011[8], i3011[9], i3011[10], i3011[11])
  i3010.m_ChildAlignment = i3011[12]
  return i3010
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i3012 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i3013 = data
  i3012.m_HorizontalFit = i3013[0]
  i3012.m_VerticalFit = i3013[1]
  return i3012
}

Deserializers["SpriteFitScreenHeight"] = function (request, data, root) {
  var i3014 = root || request.c( 'SpriteFitScreenHeight' )
  var i3015 = data
  request.r(i3015[0], i3015[1], 0, i3014, 'm_Camera')
  i3014.m_Overscan = i3015[2]
  return i3014
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i3016 = root || request.c( 'LevelManager' )
  var i3017 = data
  request.r(i3017[0], i3017[1], 0, i3016, 'birdPrefab')
  request.r(i3017[2], i3017[3], 0, i3016, 'birdDataSO')
  request.r(i3017[4], i3017[5], 0, i3016, 'obstacleConfigSO')
  request.r(i3017[6], i3017[7], 0, i3016, 'boardManager')
  request.r(i3017[8], i3017[9], 0, i3016, 'levelDifficultyFile')
  i3016.totalLevelCount = i3017[10]
  i3016.playableLevel = i3017[11]
  var i3019 = i3017[12]
  var i3018 = []
  for(var i = 0; i < i3019.length; i += 1) {
    i3018.push( request.d('LevelManager+LevelSet', i3019[i + 0]) );
  }
  i3016.levelSets = i3018
  return i3016
}

Deserializers["LevelManager+LevelSet"] = function (request, data, root) {
  var i3022 = root || request.c( 'LevelManager+LevelSet' )
  var i3023 = data
  i3022.name = i3023[0]
  request.r(i3023[1], i3023[2], 0, i3022, 'levelTableFile')
  var i3025 = i3023[3]
  var i3024 = []
  for(var i = 0; i < i3025.length; i += 2) {
  request.r(i3025[i + 0], i3025[i + 1], 2, i3024, '')
  }
  i3022.bubbleFiles = i3024
  return i3022
}

Deserializers["ControllerManager"] = function (request, data, root) {
  var i3028 = root || request.c( 'ControllerManager' )
  var i3029 = data
  i3028.layerMask = UnityEngine.LayerMask.FromIntegerValue( i3029[0] )
  i3028.layerMaskBlocker = UnityEngine.LayerMask.FromIntegerValue( i3029[1] )
  i3028.layerDockMask = UnityEngine.LayerMask.FromIntegerValue( i3029[2] )
  return i3028
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3030 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3031 = data
  request.r(i3031[0], i3031[1], 0, i3030, 'm_FirstSelected')
  i3030.m_sendNavigationEvents = !!i3031[2]
  i3030.m_DragThreshold = i3031[3]
  return i3030
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3032 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3033 = data
  i3032.m_HorizontalAxis = i3033[0]
  i3032.m_VerticalAxis = i3033[1]
  i3032.m_SubmitButton = i3033[2]
  i3032.m_CancelButton = i3033[3]
  i3032.m_InputActionsPerSecond = i3033[4]
  i3032.m_RepeatDelay = i3033[5]
  i3032.m_ForceModuleActive = !!i3033[6]
  i3032.m_SendPointerHoverToParent = !!i3033[7]
  return i3032
}

Deserializers["BoosterManager"] = function (request, data, root) {
  var i3034 = root || request.c( 'BoosterManager' )
  var i3035 = data
  i3034.OnGlobalStateChanged = request.d('System.Action', i3035[0], i3034.OnGlobalStateChanged)
  request.r(i3035[1], i3035[2], 0, i3034, 'MagnetNestFxPrefab')
  request.r(i3035[3], i3035[4], 0, i3034, '_shuffleFXPrefab')
  request.r(i3035[5], i3035[6], 0, i3034, 'ClearHitFxPrefab')
  i3034.clearHitFxLifetime = i3035[7]
  i3034.shuffleSuckDuration = i3035[8]
  i3034.shuffleSpreadDuration = i3035[9]
  i3034.shuffleStagger = i3035[10]
  i3034.shuffleBirdSortingOrder = i3035[11]
  request.r(i3035[12], i3035[13], 0, i3034, 'boosterConfig')
  return i3034
}

Deserializers["System.Action"] = function (request, data, root) {
  var i3036 = root || request.c( 'System.Action' )
  var i3037 = data
  return i3036
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3038 = root || request.c( 'GameManager' )
  var i3039 = data
  i3038.currentGameState = i3039[0]
  i3038.isTestMode = !!i3039[1]
  return i3038
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i3040 = root || request.c( 'SoundManager' )
  var i3041 = data
  request.r(i3041[0], i3041[1], 0, i3040, 'musicSource')
  i3040.resultMusicVolumeMultiplier = i3041[2]
  i3040.ingameMusicVolume = i3041[3]
  request.r(i3041[4], i3041[5], 0, i3040, 'parentSFX')
  i3040.poolSize = i3041[6]
  i3040.maxLoopingPerClip = i3041[7]
  var i3043 = i3041[8]
  var i3042 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i3043.length; i += 2) {
  request.r(i3043[i + 0], i3043[i + 1], 1, i3042, '')
  }
  i3040.musicClips = i3042
  var i3045 = i3041[9]
  var i3044 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i3045.length; i += 2) {
  request.r(i3045[i + 0], i3045[i + 1], 1, i3044, '')
  }
  i3040.sfxClips = i3044
  i3040.importantVolume = i3041[10]
  i3040.normalVolume = i3041[11]
  i3040.minorVolume = i3041[12]
  i3040.smallVolume = i3041[13]
  return i3040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3049 = data
  request.r(i3049[0], i3049[1], 0, i3048, 'clip')
  request.r(i3049[2], i3049[3], 0, i3048, 'outputAudioMixerGroup')
  i3048.playOnAwake = !!i3049[4]
  i3048.loop = !!i3049[5]
  i3048.time = i3049[6]
  i3048.volume = i3049[7]
  i3048.pitch = i3049[8]
  i3048.enabled = !!i3049[9]
  return i3048
}

Deserializers["ParticlesManager"] = function (request, data, root) {
  var i3050 = root || request.c( 'ParticlesManager' )
  var i3051 = data
  request.r(i3051[0], i3051[1], 0, i3050, 'set')
  request.r(i3051[2], i3051[3], 0, i3050, 'target')
  request.r(i3051[4], i3051[5], 0, i3050, 'startTarget')
  var i3053 = i3051[6]
  var i3052 = []
  for(var i = 0; i < i3053.length; i += 2) {
  request.r(i3053[i + 0], i3053[i + 1], 2, i3052, '')
  }
  i3050.particleEffectData = i3052
  request.r(i3051[7], i3051[8], 0, i3050, 'coinPrefab')
  i3050.spreadRange = i3051[9]
  i3050.spreadRangeOnSum = i3051[10]
  i3050.moveDuration = i3051[11]
  i3050.magMut = i3051[12]
  i3050.toptopOGScale = i3051[13]
  i3050.sum = i3051[14]
  return i3050
}

Deserializers["GameData"] = function (request, data, root) {
  var i3056 = root || request.c( 'GameData' )
  var i3057 = data
  var i3059 = i3057[0]
  var i3058 = []
  for(var i = 0; i < i3059.length; i += 4) {
    i3058.push( new pc.Color(i3059[i + 0], i3059[i + 1], i3059[i + 2], i3059[i + 3]) );
  }
  i3056.birdColors = i3058
  return i3056
}

Deserializers["ComboManager"] = function (request, data, root) {
  var i3062 = root || request.c( 'ComboManager' )
  var i3063 = data
  i3062.OnTimerComplete = request.d('System.Action', i3063[0], i3062.OnTimerComplete)
  i3062.comboTime = i3063[1]
  return i3062
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3064 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3065 = data
  i3064.m_UiScaleMode = i3065[0]
  i3064.m_ReferencePixelsPerUnit = i3065[1]
  i3064.m_ScaleFactor = i3065[2]
  i3064.m_ReferenceResolution = new pc.Vec2( i3065[3], i3065[4] )
  i3064.m_ScreenMatchMode = i3065[5]
  i3064.m_MatchWidthOrHeight = i3065[6]
  i3064.m_PhysicalUnit = i3065[7]
  i3064.m_FallbackScreenDPI = i3065[8]
  i3064.m_DefaultSpriteDPI = i3065[9]
  i3064.m_DynamicPixelsPerUnit = i3065[10]
  i3064.m_PresetInfoIsWorld = !!i3065[11]
  return i3064
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3066 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3067 = data
  i3066.m_IgnoreReversedGraphics = !!i3067[0]
  i3066.m_BlockingObjects = i3067[1]
  i3066.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3067[2] )
  return i3066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3069 = data
  i3068.m_Alpha = i3069[0]
  i3068.m_Interactable = !!i3069[1]
  i3068.m_BlocksRaycasts = !!i3069[2]
  i3068.m_IgnoreParentGroups = !!i3069[3]
  i3068.enabled = !!i3069[4]
  return i3068
}

Deserializers["GameplayUI"] = function (request, data, root) {
  var i3070 = root || request.c( 'GameplayUI' )
  var i3071 = data
  request.r(i3071[0], i3071[1], 0, i3070, 'warningHard')
  request.r(i3071[2], i3071[3], 0, i3070, 'warningExtreme')
  request.r(i3071[4], i3071[5], 0, i3070, 'canvaG')
  request.r(i3071[6], i3071[7], 0, i3070, 'imgPanel')
  i3070.IsDestroyOnClose = !!i3071[8]
  i3070.isFadeIn = !!i3071[9]
  i3070.isFadeOut = !!i3071[10]
  i3070.isSoundOpen = !!i3071[11]
  i3070.OnOpen = request.d('System.Action', i3071[12], i3070.OnOpen)
  i3070.OnClose = request.d('System.Action', i3071[13], i3070.OnClose)
  i3070.OnFadeIn_Complete = request.d('System.Action', i3071[14], i3070.OnFadeIn_Complete)
  i3070.OnFadeOut_Complete = request.d('System.Action', i3071[15], i3070.OnFadeOut_Complete)
  request.r(i3071[16], i3071[17], 0, i3070, 'contentFadeIO')
  request.r(i3071[18], i3071[19], 0, i3070, 'levelText')
  request.r(i3071[20], i3071[21], 0, i3070, 'settingButton')
  request.r(i3071[22], i3071[23], 0, i3070, 'outButton')
  request.r(i3071[24], i3071[25], 0, i3070, 'musicButton')
  request.r(i3071[26], i3071[27], 0, i3070, 'soundButton')
  request.r(i3071[28], i3071[29], 0, i3070, 'happticButton')
  request.r(i3071[30], i3071[31], 0, i3070, 'replayButton')
  request.r(i3071[32], i3071[33], 0, i3070, 'canlelSettingButton')
  var i3073 = i3071[34]
  var i3072 = []
  for(var i = 0; i < i3073.length; i += 2) {
  request.r(i3073[i + 0], i3073[i + 1], 2, i3072, '')
  }
  i3070.boosterItemUIs = i3072
  request.r(i3071[35], i3071[36], 0, i3070, 'musicCrossGameObject')
  request.r(i3071[37], i3071[38], 0, i3070, 'soundCrossGameObject')
  request.r(i3071[39], i3071[40], 0, i3070, 'happticCrossGameObject')
  request.r(i3071[41], i3071[42], 0, i3070, 'ContentBottomTransform')
  request.r(i3071[43], i3071[44], 0, i3070, 'pointBottom')
  request.r(i3071[45], i3071[46], 0, i3070, 'tagLevelImage')
  request.r(i3071[47], i3071[48], 0, i3070, 'tagSettingImage')
  request.r(i3071[49], i3071[50], 0, i3070, 'tagSetting1Image')
  request.r(i3071[51], i3071[52], 0, i3070, 'tagSetting2Image')
  var i3075 = i3071[53]
  var i3074 = []
  for(var i = 0; i < i3075.length; i += 2) {
  request.r(i3075[i + 0], i3075[i + 1], 2, i3074, '')
  }
  i3070.tagLevelSprites = i3074
  var i3077 = i3071[54]
  var i3076 = []
  for(var i = 0; i < i3077.length; i += 2) {
  request.r(i3077[i + 0], i3077[i + 1], 2, i3076, '')
  }
  i3070.tagSettingSprites = i3076
  var i3079 = i3071[55]
  var i3078 = []
  for(var i = 0; i < i3079.length; i += 2) {
  request.r(i3079[i + 0], i3079[i + 1], 2, i3078, '')
  }
  i3070.tagSetting1Sprites = i3078
  var i3081 = i3071[56]
  var i3080 = []
  for(var i = 0; i < i3081.length; i += 2) {
  request.r(i3081[i + 0], i3081[i + 1], 2, i3080, '')
  }
  i3070.tagSetting2Sprites = i3080
  request.r(i3071[57], i3071[58], 0, i3070, 'PanelPreWin')
  request.r(i3071[59], i3071[60], 0, i3070, 'textPanelWinTransform')
  request.r(i3071[61], i3071[62], 0, i3070, 'winPulseImage')
  i3070.winPulseScale = i3071[63]
  i3070.winPulseDuration = i3071[64]
  request.r(i3071[65], i3071[66], 0, i3070, 'btnPreWinContinue')
  request.r(i3071[67], i3071[68], 0, i3070, 'btnPlayAgain')
  i3070.preWinTapDelay = i3071[69]
  request.r(i3071[70], i3071[71], 0, i3070, 'clearSlingshot')
  i3070.slingshotPopDuration = i3071[72]
  request.r(i3071[73], i3071[74], 0, i3070, 'settingAnimator')
  request.r(i3071[75], i3071[76], 0, i3070, 'loseUI')
  return i3070
}

Deserializers["Crystal.SafeArea"] = function (request, data, root) {
  var i3084 = root || request.c( 'Crystal.SafeArea' )
  var i3085 = data
  i3084.ConformX = !!i3085[0]
  i3084.ConformY = !!i3085[1]
  i3084.Logging = !!i3085[2]
  return i3084
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i3086 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i3087 = data
  i3086.m_Spacing = i3087[0]
  i3086.m_ChildForceExpandWidth = !!i3087[1]
  i3086.m_ChildForceExpandHeight = !!i3087[2]
  i3086.m_ChildControlWidth = !!i3087[3]
  i3086.m_ChildControlHeight = !!i3087[4]
  i3086.m_ChildScaleWidth = !!i3087[5]
  i3086.m_ChildScaleHeight = !!i3087[6]
  i3086.m_ReverseArrangement = !!i3087[7]
  i3086.m_Padding = UnityEngine.RectOffset.FromPaddings(i3087[8], i3087[9], i3087[10], i3087[11])
  i3086.m_ChildAlignment = i3087[12]
  return i3086
}

Deserializers["BoosterItemUI"] = function (request, data, root) {
  var i3088 = root || request.c( 'BoosterItemUI' )
  var i3089 = data
  i3088.type = i3089[0]
  request.r(i3089[1], i3089[2], 0, i3088, 'icon')
  request.r(i3089[3], i3089[4], 0, i3088, 'button')
  request.r(i3089[5], i3089[6], 0, i3088, 'amountObject')
  request.r(i3089[7], i3089[8], 0, i3088, 'addObject')
  request.r(i3089[9], i3089[10], 0, i3088, 'freeObject')
  request.r(i3089[11], i3089[12], 0, i3088, 'amountText')
  request.r(i3089[13], i3089[14], 0, i3088, 'lockObj')
  request.r(i3089[15], i3089[16], 0, i3088, 'levelText')
  request.r(i3089[17], i3089[18], 0, i3088, 'priceText')
  return i3088
}

Deserializers["ButtonScaleUI"] = function (request, data, root) {
  var i3090 = root || request.c( 'ButtonScaleUI' )
  var i3091 = data
  i3090.scaleDuration = i3091[0]
  i3090.action = request.d('UnityEngine.Events.UnityEvent', i3091[1], i3090.action)
  request.r(i3091[2], i3091[3], 0, i3090, 'transformToScale')
  i3090.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3091[4], i3090.m_OnClick)
  i3090.m_Navigation = request.d('UnityEngine.UI.Navigation', i3091[5], i3090.m_Navigation)
  i3090.m_Transition = i3091[6]
  i3090.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3091[7], i3090.m_Colors)
  i3090.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3091[8], i3090.m_SpriteState)
  i3090.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3091[9], i3090.m_AnimationTriggers)
  i3090.m_Interactable = !!i3091[10]
  request.r(i3091[11], i3091[12], 0, i3090, 'm_TargetGraphic')
  return i3090
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3092 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3093 = data
  i3092.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3093[0], i3092.m_PersistentCalls)
  return i3092
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3094 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3095 = data
  var i3097 = i3095[0]
  var i3096 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3097.length; i += 1) {
    i3096.add(request.d('UnityEngine.Events.PersistentCall', i3097[i + 0]));
  }
  i3094.m_Calls = i3096
  return i3094
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3100 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3101 = data
  request.r(i3101[0], i3101[1], 0, i3100, 'm_Target')
  i3100.m_TargetAssemblyTypeName = i3101[2]
  i3100.m_MethodName = i3101[3]
  i3100.m_Mode = i3101[4]
  i3100.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3101[5], i3100.m_Arguments)
  i3100.m_CallState = i3101[6]
  return i3100
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3102 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3103 = data
  i3102.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3103[0], i3102.m_PersistentCalls)
  return i3102
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3104 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3105 = data
  i3104.m_Mode = i3105[0]
  i3104.m_WrapAround = !!i3105[1]
  request.r(i3105[2], i3105[3], 0, i3104, 'm_SelectOnUp')
  request.r(i3105[4], i3105[5], 0, i3104, 'm_SelectOnDown')
  request.r(i3105[6], i3105[7], 0, i3104, 'm_SelectOnLeft')
  request.r(i3105[8], i3105[9], 0, i3104, 'm_SelectOnRight')
  return i3104
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3106 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3107 = data
  i3106.m_NormalColor = new pc.Color(i3107[0], i3107[1], i3107[2], i3107[3])
  i3106.m_HighlightedColor = new pc.Color(i3107[4], i3107[5], i3107[6], i3107[7])
  i3106.m_PressedColor = new pc.Color(i3107[8], i3107[9], i3107[10], i3107[11])
  i3106.m_SelectedColor = new pc.Color(i3107[12], i3107[13], i3107[14], i3107[15])
  i3106.m_DisabledColor = new pc.Color(i3107[16], i3107[17], i3107[18], i3107[19])
  i3106.m_ColorMultiplier = i3107[20]
  i3106.m_FadeDuration = i3107[21]
  return i3106
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3108 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3109 = data
  request.r(i3109[0], i3109[1], 0, i3108, 'm_HighlightedSprite')
  request.r(i3109[2], i3109[3], 0, i3108, 'm_PressedSprite')
  request.r(i3109[4], i3109[5], 0, i3108, 'm_SelectedSprite')
  request.r(i3109[6], i3109[7], 0, i3108, 'm_DisabledSprite')
  return i3108
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3110 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3111 = data
  i3110.m_NormalTrigger = i3111[0]
  i3110.m_HighlightedTrigger = i3111[1]
  i3110.m_PressedTrigger = i3111[2]
  i3110.m_SelectedTrigger = i3111[3]
  i3110.m_DisabledTrigger = i3111[4]
  return i3110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3113 = data
  request.r(i3113[0], i3113[1], 0, i3112, 'animatorController')
  request.r(i3113[2], i3113[3], 0, i3112, 'avatar')
  i3112.updateMode = i3113[4]
  i3112.hasTransformHierarchy = !!i3113[5]
  i3112.applyRootMotion = !!i3113[6]
  var i3115 = i3113[7]
  var i3114 = []
  for(var i = 0; i < i3115.length; i += 2) {
  request.r(i3115[i + 0], i3115[i + 1], 2, i3114, '')
  }
  i3112.humanBones = i3114
  i3112.enabled = !!i3113[8]
  return i3112
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3116 = root || request.c( 'UnityEngine.UI.Button' )
  var i3117 = data
  i3116.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3117[0], i3116.m_OnClick)
  i3116.m_Navigation = request.d('UnityEngine.UI.Navigation', i3117[1], i3116.m_Navigation)
  i3116.m_Transition = i3117[2]
  i3116.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3117[3], i3116.m_Colors)
  i3116.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3117[4], i3116.m_SpriteState)
  i3116.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3117[5], i3116.m_AnimationTriggers)
  i3116.m_Interactable = !!i3117[6]
  request.r(i3117[7], i3117[8], 0, i3116, 'm_TargetGraphic')
  return i3116
}

Deserializers["SlingshotAnimator"] = function (request, data, root) {
  var i3118 = root || request.c( 'SlingshotAnimator' )
  var i3119 = data
  i3118.useUnscaledTime = !!i3119[0]
  i3118.speed = i3119[1]
  i3118.flightTime = i3119[2]
  i3118.reloadDelay = i3119[3]
  request.r(i3119[4], i3119[5], 0, i3118, 'animJson')
  var i3121 = i3119[6]
  var i3120 = []
  for(var i = 0; i < i3121.length; i += 2) {
  request.r(i3121[i + 0], i3121[i + 1], 2, i3120, '')
  }
  i3118.sprites = i3120
  return i3118
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3122 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3123 = data
  i3122.m_ShowMaskGraphic = !!i3123[0]
  return i3122
}

Deserializers["ColorBirdLogoAnimator"] = function (request, data, root) {
  var i3124 = root || request.c( 'ColorBirdLogoAnimator' )
  var i3125 = data
  i3124.playOnEnable = !!i3125[0]
  i3124.useUnscaledTime = !!i3125[1]
  i3124.playIdle = !!i3125[2]
  i3124.skipIntro = !!i3125[3]
  i3124.loopIntroOutro = !!i3125[4]
  i3124.loopHoldTime = i3125[5]
  i3124.speed = i3125[6]
  request.r(i3125[7], i3125[8], 0, i3124, 'animJson')
  var i3127 = i3125[9]
  var i3126 = []
  for(var i = 0; i < i3127.length; i += 2) {
  request.r(i3127[i + 0], i3127[i + 1], 2, i3126, '')
  }
  i3124.layerSprites = i3126
  return i3124
}

Deserializers["LoseUI"] = function (request, data, root) {
  var i3128 = root || request.c( 'LoseUI' )
  var i3129 = data
  request.r(i3129[0], i3129[1], 0, i3128, 'canvaG')
  request.r(i3129[2], i3129[3], 0, i3128, 'imgPanel')
  i3128.IsDestroyOnClose = !!i3129[4]
  i3128.isFadeIn = !!i3129[5]
  i3128.isFadeOut = !!i3129[6]
  i3128.isSoundOpen = !!i3129[7]
  i3128.OnOpen = request.d('System.Action', i3129[8], i3128.OnOpen)
  i3128.OnClose = request.d('System.Action', i3129[9], i3128.OnClose)
  i3128.OnFadeIn_Complete = request.d('System.Action', i3129[10], i3128.OnFadeIn_Complete)
  i3128.OnFadeOut_Complete = request.d('System.Action', i3129[11], i3128.OnFadeOut_Complete)
  request.r(i3129[12], i3129[13], 0, i3128, 'contentFadeIO')
  request.r(i3129[14], i3129[15], 0, i3128, 'buttonFullScreen')
  request.r(i3129[16], i3129[17], 0, i3128, 'buttonRetry')
  request.r(i3129[18], i3129[19], 0, i3128, 'losePulseImage')
  i3128.losePulseScale = i3129[20]
  i3128.losePulseDuration = i3129[21]
  return i3128
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3130 = root || request.c( 'UnityEngine.UI.Text' )
  var i3131 = data
  i3130.m_FontData = request.d('UnityEngine.UI.FontData', i3131[0], i3130.m_FontData)
  i3130.m_Text = i3131[1]
  request.r(i3131[2], i3131[3], 0, i3130, 'm_Material')
  i3130.m_Maskable = !!i3131[4]
  i3130.m_Color = new pc.Color(i3131[5], i3131[6], i3131[7], i3131[8])
  i3130.m_RaycastTarget = !!i3131[9]
  i3130.m_RaycastPadding = new pc.Vec4( i3131[10], i3131[11], i3131[12], i3131[13] )
  return i3130
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3132 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3133 = data
  request.r(i3133[0], i3133[1], 0, i3132, 'm_Font')
  i3132.m_FontSize = i3133[2]
  i3132.m_FontStyle = i3133[3]
  i3132.m_BestFit = !!i3133[4]
  i3132.m_MinSize = i3133[5]
  i3132.m_MaxSize = i3133[6]
  i3132.m_Alignment = i3133[7]
  i3132.m_AlignByGeometry = !!i3133[8]
  i3132.m_RichText = !!i3133[9]
  i3132.m_HorizontalOverflow = i3133[10]
  i3132.m_VerticalOverflow = i3133[11]
  i3132.m_LineSpacing = i3133[12]
  return i3132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3135 = data
  i3134.ambientIntensity = i3135[0]
  i3134.reflectionIntensity = i3135[1]
  i3134.ambientMode = i3135[2]
  i3134.ambientLight = new pc.Color(i3135[3], i3135[4], i3135[5], i3135[6])
  i3134.ambientSkyColor = new pc.Color(i3135[7], i3135[8], i3135[9], i3135[10])
  i3134.ambientGroundColor = new pc.Color(i3135[11], i3135[12], i3135[13], i3135[14])
  i3134.ambientEquatorColor = new pc.Color(i3135[15], i3135[16], i3135[17], i3135[18])
  i3134.fogColor = new pc.Color(i3135[19], i3135[20], i3135[21], i3135[22])
  i3134.fogEndDistance = i3135[23]
  i3134.fogStartDistance = i3135[24]
  i3134.fogDensity = i3135[25]
  i3134.fog = !!i3135[26]
  request.r(i3135[27], i3135[28], 0, i3134, 'skybox')
  i3134.fogMode = i3135[29]
  var i3137 = i3135[30]
  var i3136 = []
  for(var i = 0; i < i3137.length; i += 1) {
    i3136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3137[i + 0]) );
  }
  i3134.lightmaps = i3136
  i3134.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3135[31], i3134.lightProbes)
  i3134.lightmapsMode = i3135[32]
  i3134.mixedBakeMode = i3135[33]
  i3134.environmentLightingMode = i3135[34]
  i3134.ambientProbe = new pc.SphericalHarmonicsL2(i3135[35])
  request.r(i3135[36], i3135[37], 0, i3134, 'customReflection')
  request.r(i3135[38], i3135[39], 0, i3134, 'defaultReflection')
  i3134.defaultReflectionMode = i3135[40]
  i3134.defaultReflectionResolution = i3135[41]
  i3134.sunLightObjectId = i3135[42]
  i3134.pixelLightCount = i3135[43]
  i3134.defaultReflectionHDR = !!i3135[44]
  i3134.hasLightDataAsset = !!i3135[45]
  i3134.hasManualGenerate = !!i3135[46]
  return i3134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3141 = data
  request.r(i3141[0], i3141[1], 0, i3140, 'lightmapColor')
  request.r(i3141[2], i3141[3], 0, i3140, 'lightmapDirection')
  request.r(i3141[4], i3141[5], 0, i3140, 'shadowMask')
  return i3140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3142 = root || new UnityEngine.LightProbes()
  var i3143 = data
  return i3142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i3150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i3151 = data
  i3150.name = i3151[0]
  i3150.bounciness = i3151[1]
  i3150.friction = i3151[2]
  return i3150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3153 = data
  var i3155 = i3153[0]
  var i3154 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3155.length; i += 1) {
    i3154.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3155[i + 0]));
  }
  i3152.ShaderCompilationErrors = i3154
  i3152.name = i3153[1]
  i3152.guid = i3153[2]
  var i3157 = i3153[3]
  var i3156 = []
  for(var i = 0; i < i3157.length; i += 1) {
    i3156.push( i3157[i + 0] );
  }
  i3152.shaderDefinedKeywords = i3156
  var i3159 = i3153[4]
  var i3158 = []
  for(var i = 0; i < i3159.length; i += 1) {
    i3158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3159[i + 0]) );
  }
  i3152.passes = i3158
  var i3161 = i3153[5]
  var i3160 = []
  for(var i = 0; i < i3161.length; i += 1) {
    i3160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3161[i + 0]) );
  }
  i3152.usePasses = i3160
  var i3163 = i3153[6]
  var i3162 = []
  for(var i = 0; i < i3163.length; i += 1) {
    i3162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3163[i + 0]) );
  }
  i3152.defaultParameterValues = i3162
  request.r(i3153[7], i3153[8], 0, i3152, 'unityFallbackShader')
  i3152.readDepth = !!i3153[9]
  i3152.hasDepthOnlyPass = !!i3153[10]
  i3152.isCreatedByShaderGraph = !!i3153[11]
  i3152.disableBatching = !!i3153[12]
  i3152.compiled = !!i3153[13]
  return i3152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3167 = data
  i3166.shaderName = i3167[0]
  i3166.errorMessage = i3167[1]
  return i3166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3170 = root || new pc.UnityShaderPass()
  var i3171 = data
  i3170.id = i3171[0]
  i3170.subShaderIndex = i3171[1]
  i3170.name = i3171[2]
  i3170.passType = i3171[3]
  i3170.grabPassTextureName = i3171[4]
  i3170.usePass = !!i3171[5]
  i3170.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3171[6], i3170.zTest)
  i3170.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3171[7], i3170.zWrite)
  i3170.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3171[8], i3170.culling)
  i3170.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3171[9], i3170.blending)
  i3170.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3171[10], i3170.alphaBlending)
  i3170.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3171[11], i3170.colorWriteMask)
  i3170.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3171[12], i3170.offsetUnits)
  i3170.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3171[13], i3170.offsetFactor)
  i3170.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3171[14], i3170.stencilRef)
  i3170.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3171[15], i3170.stencilReadMask)
  i3170.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3171[16], i3170.stencilWriteMask)
  i3170.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3171[17], i3170.stencilOp)
  i3170.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3171[18], i3170.stencilOpFront)
  i3170.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3171[19], i3170.stencilOpBack)
  var i3173 = i3171[20]
  var i3172 = []
  for(var i = 0; i < i3173.length; i += 1) {
    i3172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3173[i + 0]) );
  }
  i3170.tags = i3172
  var i3175 = i3171[21]
  var i3174 = []
  for(var i = 0; i < i3175.length; i += 1) {
    i3174.push( i3175[i + 0] );
  }
  i3170.passDefinedKeywords = i3174
  var i3177 = i3171[22]
  var i3176 = []
  for(var i = 0; i < i3177.length; i += 1) {
    i3176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3177[i + 0]) );
  }
  i3170.passDefinedKeywordGroups = i3176
  var i3179 = i3171[23]
  var i3178 = []
  for(var i = 0; i < i3179.length; i += 1) {
    i3178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3179[i + 0]) );
  }
  i3170.variants = i3178
  var i3181 = i3171[24]
  var i3180 = []
  for(var i = 0; i < i3181.length; i += 1) {
    i3180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3181[i + 0]) );
  }
  i3170.excludedVariants = i3180
  i3170.hasDepthReader = !!i3171[25]
  return i3170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3183 = data
  i3182.val = i3183[0]
  i3182.name = i3183[1]
  return i3182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3185 = data
  i3184.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3185[0], i3184.src)
  i3184.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3185[1], i3184.dst)
  i3184.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3185[2], i3184.op)
  return i3184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3187 = data
  i3186.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3187[0], i3186.pass)
  i3186.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3187[1], i3186.fail)
  i3186.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3187[2], i3186.zFail)
  i3186.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3187[3], i3186.comp)
  return i3186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3191 = data
  i3190.name = i3191[0]
  i3190.value = i3191[1]
  return i3190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3195 = data
  var i3197 = i3195[0]
  var i3196 = []
  for(var i = 0; i < i3197.length; i += 1) {
    i3196.push( i3197[i + 0] );
  }
  i3194.keywords = i3196
  i3194.hasDiscard = !!i3195[1]
  return i3194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3201 = data
  i3200.passId = i3201[0]
  i3200.subShaderIndex = i3201[1]
  var i3203 = i3201[2]
  var i3202 = []
  for(var i = 0; i < i3203.length; i += 1) {
    i3202.push( i3203[i + 0] );
  }
  i3200.keywords = i3202
  i3200.vertexProgram = i3201[3]
  i3200.fragmentProgram = i3201[4]
  i3200.exportedForWebGl2 = !!i3201[5]
  i3200.readDepth = !!i3201[6]
  return i3200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3207 = data
  request.r(i3207[0], i3207[1], 0, i3206, 'shader')
  i3206.pass = i3207[2]
  return i3206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3211 = data
  i3210.name = i3211[0]
  i3210.type = i3211[1]
  i3210.value = new pc.Vec4( i3211[2], i3211[3], i3211[4], i3211[5] )
  i3210.textureValue = i3211[6]
  i3210.shaderPropertyFlag = i3211[7]
  return i3210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3213 = data
  i3212.name = i3213[0]
  request.r(i3213[1], i3213[2], 0, i3212, 'texture')
  i3212.aabb = i3213[3]
  i3212.vertices = i3213[4]
  i3212.triangles = i3213[5]
  i3212.textureRect = UnityEngine.Rect.MinMaxRect(i3213[6], i3213[7], i3213[8], i3213[9])
  i3212.packedRect = UnityEngine.Rect.MinMaxRect(i3213[10], i3213[11], i3213[12], i3213[13])
  i3212.border = new pc.Vec4( i3213[14], i3213[15], i3213[16], i3213[17] )
  i3212.transparency = i3213[18]
  i3212.bounds = i3213[19]
  i3212.pixelsPerUnit = i3213[20]
  i3212.textureWidth = i3213[21]
  i3212.textureHeight = i3213[22]
  i3212.nativeSize = new pc.Vec2( i3213[23], i3213[24] )
  i3212.pivot = new pc.Vec2( i3213[25], i3213[26] )
  i3212.textureRectOffset = new pc.Vec2( i3213[27], i3213[28] )
  return i3212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3215 = data
  i3214.name = i3215[0]
  return i3214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3217 = data
  i3216.name = i3217[0]
  i3216.wrapMode = i3217[1]
  i3216.isLooping = !!i3217[2]
  i3216.length = i3217[3]
  var i3219 = i3217[4]
  var i3218 = []
  for(var i = 0; i < i3219.length; i += 1) {
    i3218.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3219[i + 0]) );
  }
  i3216.curves = i3218
  var i3221 = i3217[5]
  var i3220 = []
  for(var i = 0; i < i3221.length; i += 1) {
    i3220.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3221[i + 0]) );
  }
  i3216.events = i3220
  i3216.halfPrecision = !!i3217[6]
  i3216._frameRate = i3217[7]
  i3216.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3217[8], i3216.localBounds)
  i3216.hasMuscleCurves = !!i3217[9]
  var i3223 = i3217[10]
  var i3222 = []
  for(var i = 0; i < i3223.length; i += 1) {
    i3222.push( i3223[i + 0] );
  }
  i3216.clipMuscleConstant = i3222
  i3216.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3217[11], i3216.clipBindingConstant)
  return i3216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3227 = data
  i3226.path = i3227[0]
  i3226.hash = i3227[1]
  i3226.componentType = i3227[2]
  i3226.property = i3227[3]
  i3226.keys = i3227[4]
  var i3229 = i3227[5]
  var i3228 = []
  for(var i = 0; i < i3229.length; i += 1) {
    i3228.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3229[i + 0]) );
  }
  i3226.objectReferenceKeys = i3228
  return i3226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3233 = data
  i3232.time = i3233[0]
  request.r(i3233[1], i3233[2], 0, i3232, 'value')
  return i3232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3237 = data
  i3236.functionName = i3237[0]
  i3236.floatParameter = i3237[1]
  i3236.intParameter = i3237[2]
  i3236.stringParameter = i3237[3]
  request.r(i3237[4], i3237[5], 0, i3236, 'objectReferenceParameter')
  i3236.time = i3237[6]
  return i3236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3239 = data
  i3238.center = new pc.Vec3( i3239[0], i3239[1], i3239[2] )
  i3238.extends = new pc.Vec3( i3239[3], i3239[4], i3239[5] )
  return i3238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3243 = data
  var i3245 = i3243[0]
  var i3244 = []
  for(var i = 0; i < i3245.length; i += 1) {
    i3244.push( i3245[i + 0] );
  }
  i3242.genericBindings = i3244
  var i3247 = i3243[1]
  var i3246 = []
  for(var i = 0; i < i3247.length; i += 1) {
    i3246.push( i3247[i + 0] );
  }
  i3242.pptrCurveMapping = i3246
  return i3242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3249 = data
  i3248.name = i3249[0]
  i3248.ascent = i3249[1]
  i3248.originalLineHeight = i3249[2]
  i3248.fontSize = i3249[3]
  var i3251 = i3249[4]
  var i3250 = []
  for(var i = 0; i < i3251.length; i += 1) {
    i3250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3251[i + 0]) );
  }
  i3248.characterInfo = i3250
  request.r(i3249[5], i3249[6], 0, i3248, 'texture')
  i3248.originalFontSize = i3249[7]
  return i3248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3255 = data
  i3254.index = i3255[0]
  i3254.advance = i3255[1]
  i3254.bearing = i3255[2]
  i3254.glyphWidth = i3255[3]
  i3254.glyphHeight = i3255[4]
  i3254.minX = i3255[5]
  i3254.maxX = i3255[6]
  i3254.minY = i3255[7]
  i3254.maxY = i3255[8]
  i3254.uvBottomLeftX = i3255[9]
  i3254.uvBottomLeftY = i3255[10]
  i3254.uvBottomRightX = i3255[11]
  i3254.uvBottomRightY = i3255[12]
  i3254.uvTopLeftX = i3255[13]
  i3254.uvTopLeftY = i3255[14]
  i3254.uvTopRightX = i3255[15]
  i3254.uvTopRightY = i3255[16]
  return i3254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3257 = data
  i3256.name = i3257[0]
  var i3259 = i3257[1]
  var i3258 = []
  for(var i = 0; i < i3259.length; i += 1) {
    i3258.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3259[i + 0]) );
  }
  i3256.layers = i3258
  var i3261 = i3257[2]
  var i3260 = []
  for(var i = 0; i < i3261.length; i += 1) {
    i3260.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3261[i + 0]) );
  }
  i3256.parameters = i3260
  i3256.animationClips = i3257[3]
  i3256.avatarUnsupported = i3257[4]
  return i3256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3265 = data
  i3264.name = i3265[0]
  i3264.defaultWeight = i3265[1]
  i3264.blendingMode = i3265[2]
  i3264.avatarMask = i3265[3]
  i3264.syncedLayerIndex = i3265[4]
  i3264.syncedLayerAffectsTiming = !!i3265[5]
  i3264.syncedLayers = i3265[6]
  i3264.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3265[7], i3264.stateMachine)
  return i3264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3267 = data
  i3266.id = i3267[0]
  i3266.name = i3267[1]
  i3266.path = i3267[2]
  var i3269 = i3267[3]
  var i3268 = []
  for(var i = 0; i < i3269.length; i += 1) {
    i3268.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3269[i + 0]) );
  }
  i3266.states = i3268
  var i3271 = i3267[4]
  var i3270 = []
  for(var i = 0; i < i3271.length; i += 1) {
    i3270.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3271[i + 0]) );
  }
  i3266.machines = i3270
  var i3273 = i3267[5]
  var i3272 = []
  for(var i = 0; i < i3273.length; i += 1) {
    i3272.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3273[i + 0]) );
  }
  i3266.entryStateTransitions = i3272
  var i3275 = i3267[6]
  var i3274 = []
  for(var i = 0; i < i3275.length; i += 1) {
    i3274.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3275[i + 0]) );
  }
  i3266.exitStateTransitions = i3274
  var i3277 = i3267[7]
  var i3276 = []
  for(var i = 0; i < i3277.length; i += 1) {
    i3276.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3277[i + 0]) );
  }
  i3266.anyStateTransitions = i3276
  i3266.defaultStateId = i3267[8]
  return i3266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3281 = data
  i3280.id = i3281[0]
  i3280.name = i3281[1]
  i3280.cycleOffset = i3281[2]
  i3280.cycleOffsetParameter = i3281[3]
  i3280.cycleOffsetParameterActive = !!i3281[4]
  i3280.mirror = !!i3281[5]
  i3280.mirrorParameter = i3281[6]
  i3280.mirrorParameterActive = !!i3281[7]
  i3280.motionId = i3281[8]
  i3280.nameHash = i3281[9]
  i3280.fullPathHash = i3281[10]
  i3280.speed = i3281[11]
  i3280.speedParameter = i3281[12]
  i3280.speedParameterActive = !!i3281[13]
  i3280.tag = i3281[14]
  i3280.tagHash = i3281[15]
  i3280.writeDefaultValues = !!i3281[16]
  var i3283 = i3281[17]
  var i3282 = []
  for(var i = 0; i < i3283.length; i += 2) {
  request.r(i3283[i + 0], i3283[i + 1], 2, i3282, '')
  }
  i3280.behaviours = i3282
  var i3285 = i3281[18]
  var i3284 = []
  for(var i = 0; i < i3285.length; i += 1) {
    i3284.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3285[i + 0]) );
  }
  i3280.transitions = i3284
  return i3280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3291 = data
  i3290.fullPath = i3291[0]
  i3290.canTransitionToSelf = !!i3291[1]
  i3290.duration = i3291[2]
  i3290.exitTime = i3291[3]
  i3290.hasExitTime = !!i3291[4]
  i3290.hasFixedDuration = !!i3291[5]
  i3290.interruptionSource = i3291[6]
  i3290.offset = i3291[7]
  i3290.orderedInterruption = !!i3291[8]
  i3290.destinationStateId = i3291[9]
  i3290.isExit = !!i3291[10]
  i3290.mute = !!i3291[11]
  i3290.solo = !!i3291[12]
  var i3293 = i3291[13]
  var i3292 = []
  for(var i = 0; i < i3293.length; i += 1) {
    i3292.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3293[i + 0]) );
  }
  i3290.conditions = i3292
  return i3290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3297 = data
  i3296.mode = i3297[0]
  i3296.parameter = i3297[1]
  i3296.threshold = i3297[2]
  return i3296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3303 = data
  i3302.destinationStateId = i3303[0]
  i3302.isExit = !!i3303[1]
  i3302.mute = !!i3303[2]
  i3302.solo = !!i3303[3]
  var i3305 = i3303[4]
  var i3304 = []
  for(var i = 0; i < i3305.length; i += 1) {
    i3304.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3305[i + 0]) );
  }
  i3302.conditions = i3304
  return i3302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3309 = data
  i3308.defaultBool = !!i3309[0]
  i3308.defaultFloat = i3309[1]
  i3308.defaultInt = i3309[2]
  i3308.name = i3309[3]
  i3308.nameHash = i3309[4]
  i3308.type = i3309[5]
  return i3308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3311 = data
  i3310.name = i3311[0]
  i3310.bytes64 = i3311[1]
  i3310.data = i3311[2]
  return i3310
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3312 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3313 = data
  request.r(i3313[0], i3313[1], 0, i3312, 'atlas')
  i3312.normalStyle = i3313[2]
  i3312.normalSpacingOffset = i3313[3]
  i3312.boldStyle = i3313[4]
  i3312.boldSpacing = i3313[5]
  i3312.italicStyle = i3313[6]
  i3312.tabSize = i3313[7]
  i3312.hashCode = i3313[8]
  request.r(i3313[9], i3313[10], 0, i3312, 'material')
  i3312.materialHashCode = i3313[11]
  i3312.m_Version = i3313[12]
  i3312.m_SourceFontFileGUID = i3313[13]
  request.r(i3313[14], i3313[15], 0, i3312, 'm_SourceFontFile_EditorRef')
  request.r(i3313[16], i3313[17], 0, i3312, 'm_SourceFontFile')
  i3312.m_AtlasPopulationMode = i3313[18]
  i3312.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3313[19], i3312.m_FaceInfo)
  var i3315 = i3313[20]
  var i3314 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3315.length; i += 1) {
    i3314.add(request.d('UnityEngine.TextCore.Glyph', i3315[i + 0]));
  }
  i3312.m_GlyphTable = i3314
  var i3317 = i3313[21]
  var i3316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3317.length; i += 1) {
    i3316.add(request.d('TMPro.TMP_Character', i3317[i + 0]));
  }
  i3312.m_CharacterTable = i3316
  var i3319 = i3313[22]
  var i3318 = []
  for(var i = 0; i < i3319.length; i += 2) {
  request.r(i3319[i + 0], i3319[i + 1], 2, i3318, '')
  }
  i3312.m_AtlasTextures = i3318
  i3312.m_AtlasTextureIndex = i3313[23]
  i3312.m_IsMultiAtlasTexturesEnabled = !!i3313[24]
  i3312.m_ClearDynamicDataOnBuild = !!i3313[25]
  var i3321 = i3313[26]
  var i3320 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3321.length; i += 1) {
    i3320.add(request.d('UnityEngine.TextCore.GlyphRect', i3321[i + 0]));
  }
  i3312.m_UsedGlyphRects = i3320
  var i3323 = i3313[27]
  var i3322 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3323.length; i += 1) {
    i3322.add(request.d('UnityEngine.TextCore.GlyphRect', i3323[i + 0]));
  }
  i3312.m_FreeGlyphRects = i3322
  i3312.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3313[28], i3312.m_fontInfo)
  i3312.m_AtlasWidth = i3313[29]
  i3312.m_AtlasHeight = i3313[30]
  i3312.m_AtlasPadding = i3313[31]
  i3312.m_AtlasRenderMode = i3313[32]
  var i3325 = i3313[33]
  var i3324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3325.length; i += 1) {
    i3324.add(request.d('TMPro.TMP_Glyph', i3325[i + 0]));
  }
  i3312.m_glyphInfoList = i3324
  i3312.m_KerningTable = request.d('TMPro.KerningTable', i3313[34], i3312.m_KerningTable)
  i3312.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3313[35], i3312.m_FontFeatureTable)
  var i3327 = i3313[36]
  var i3326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3327.length; i += 2) {
  request.r(i3327[i + 0], i3327[i + 1], 1, i3326, '')
  }
  i3312.fallbackFontAssets = i3326
  var i3329 = i3313[37]
  var i3328 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3329.length; i += 2) {
  request.r(i3329[i + 0], i3329[i + 1], 1, i3328, '')
  }
  i3312.m_FallbackFontAssetTable = i3328
  i3312.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3313[38], i3312.m_CreationSettings)
  var i3331 = i3313[39]
  var i3330 = []
  for(var i = 0; i < i3331.length; i += 1) {
    i3330.push( request.d('TMPro.TMP_FontWeightPair', i3331[i + 0]) );
  }
  i3312.m_FontWeightTable = i3330
  var i3333 = i3313[40]
  var i3332 = []
  for(var i = 0; i < i3333.length; i += 1) {
    i3332.push( request.d('TMPro.TMP_FontWeightPair', i3333[i + 0]) );
  }
  i3312.fontWeights = i3332
  return i3312
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3334 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3335 = data
  i3334.m_FaceIndex = i3335[0]
  i3334.m_FamilyName = i3335[1]
  i3334.m_StyleName = i3335[2]
  i3334.m_PointSize = i3335[3]
  i3334.m_Scale = i3335[4]
  i3334.m_UnitsPerEM = i3335[5]
  i3334.m_LineHeight = i3335[6]
  i3334.m_AscentLine = i3335[7]
  i3334.m_CapLine = i3335[8]
  i3334.m_MeanLine = i3335[9]
  i3334.m_Baseline = i3335[10]
  i3334.m_DescentLine = i3335[11]
  i3334.m_SuperscriptOffset = i3335[12]
  i3334.m_SuperscriptSize = i3335[13]
  i3334.m_SubscriptOffset = i3335[14]
  i3334.m_SubscriptSize = i3335[15]
  i3334.m_UnderlineOffset = i3335[16]
  i3334.m_UnderlineThickness = i3335[17]
  i3334.m_StrikethroughOffset = i3335[18]
  i3334.m_StrikethroughThickness = i3335[19]
  i3334.m_TabWidth = i3335[20]
  return i3334
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3338 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3339 = data
  i3338.m_Index = i3339[0]
  i3338.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3339[1], i3338.m_Metrics)
  i3338.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3339[2], i3338.m_GlyphRect)
  i3338.m_Scale = i3339[3]
  i3338.m_AtlasIndex = i3339[4]
  i3338.m_ClassDefinitionType = i3339[5]
  return i3338
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3340 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3341 = data
  i3340.m_Width = i3341[0]
  i3340.m_Height = i3341[1]
  i3340.m_HorizontalBearingX = i3341[2]
  i3340.m_HorizontalBearingY = i3341[3]
  i3340.m_HorizontalAdvance = i3341[4]
  return i3340
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3342 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3343 = data
  i3342.m_X = i3343[0]
  i3342.m_Y = i3343[1]
  i3342.m_Width = i3343[2]
  i3342.m_Height = i3343[3]
  return i3342
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3346 = root || request.c( 'TMPro.TMP_Character' )
  var i3347 = data
  i3346.m_ElementType = i3347[0]
  i3346.m_Unicode = i3347[1]
  i3346.m_GlyphIndex = i3347[2]
  i3346.m_Scale = i3347[3]
  return i3346
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3352 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3353 = data
  i3352.Name = i3353[0]
  i3352.PointSize = i3353[1]
  i3352.Scale = i3353[2]
  i3352.CharacterCount = i3353[3]
  i3352.LineHeight = i3353[4]
  i3352.Baseline = i3353[5]
  i3352.Ascender = i3353[6]
  i3352.CapHeight = i3353[7]
  i3352.Descender = i3353[8]
  i3352.CenterLine = i3353[9]
  i3352.SuperscriptOffset = i3353[10]
  i3352.SubscriptOffset = i3353[11]
  i3352.SubSize = i3353[12]
  i3352.Underline = i3353[13]
  i3352.UnderlineThickness = i3353[14]
  i3352.strikethrough = i3353[15]
  i3352.strikethroughThickness = i3353[16]
  i3352.TabWidth = i3353[17]
  i3352.Padding = i3353[18]
  i3352.AtlasWidth = i3353[19]
  i3352.AtlasHeight = i3353[20]
  return i3352
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3356 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3357 = data
  i3356.id = i3357[0]
  i3356.x = i3357[1]
  i3356.y = i3357[2]
  i3356.width = i3357[3]
  i3356.height = i3357[4]
  i3356.xOffset = i3357[5]
  i3356.yOffset = i3357[6]
  i3356.xAdvance = i3357[7]
  i3356.scale = i3357[8]
  return i3356
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3358 = root || request.c( 'TMPro.KerningTable' )
  var i3359 = data
  var i3361 = i3359[0]
  var i3360 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3361.length; i += 1) {
    i3360.add(request.d('TMPro.KerningPair', i3361[i + 0]));
  }
  i3358.kerningPairs = i3360
  return i3358
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3364 = root || request.c( 'TMPro.KerningPair' )
  var i3365 = data
  i3364.xOffset = i3365[0]
  i3364.m_FirstGlyph = i3365[1]
  i3364.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3365[2], i3364.m_FirstGlyphAdjustments)
  i3364.m_SecondGlyph = i3365[3]
  i3364.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3365[4], i3364.m_SecondGlyphAdjustments)
  i3364.m_IgnoreSpacingAdjustments = !!i3365[5]
  return i3364
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3366 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3367 = data
  var i3369 = i3367[0]
  var i3368 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3369.length; i += 1) {
    i3368.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3369[i + 0]));
  }
  i3366.m_GlyphPairAdjustmentRecords = i3368
  return i3366
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3372 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3373 = data
  i3372.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3373[0], i3372.m_FirstAdjustmentRecord)
  i3372.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3373[1], i3372.m_SecondAdjustmentRecord)
  i3372.m_FeatureLookupFlags = i3373[2]
  return i3372
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3374 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3375 = data
  i3374.m_GlyphIndex = i3375[0]
  i3374.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3375[1], i3374.m_GlyphValueRecord)
  return i3374
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3376 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3377 = data
  i3376.m_XPlacement = i3377[0]
  i3376.m_YPlacement = i3377[1]
  i3376.m_XAdvance = i3377[2]
  i3376.m_YAdvance = i3377[3]
  return i3376
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3380 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3381 = data
  i3380.sourceFontFileName = i3381[0]
  i3380.sourceFontFileGUID = i3381[1]
  i3380.pointSizeSamplingMode = i3381[2]
  i3380.pointSize = i3381[3]
  i3380.padding = i3381[4]
  i3380.packingMode = i3381[5]
  i3380.atlasWidth = i3381[6]
  i3380.atlasHeight = i3381[7]
  i3380.characterSetSelectionMode = i3381[8]
  i3380.characterSequence = i3381[9]
  i3380.referencedFontAssetGUID = i3381[10]
  i3380.referencedTextAssetGUID = i3381[11]
  i3380.fontStyle = i3381[12]
  i3380.fontStyleModifier = i3381[13]
  i3380.renderMode = i3381[14]
  i3380.includeFontFeatures = !!i3381[15]
  return i3380
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3384 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3385 = data
  request.r(i3385[0], i3385[1], 0, i3384, 'regularTypeface')
  request.r(i3385[2], i3385[3], 0, i3384, 'italicTypeface')
  return i3384
}

Deserializers["BirdDataSO"] = function (request, data, root) {
  var i3386 = root || request.c( 'BirdDataSO' )
  var i3387 = data
  var i3389 = i3387[0]
  var i3388 = []
  for(var i = 0; i < i3389.length; i += 1) {
    i3388.push( request.d('BirdData', i3389[i + 0]) );
  }
  i3386.birds = i3388
  return i3386
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i3392 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i3393 = data
  var i3395 = i3393[0]
  var i3394 = []
  for(var i = 0; i < i3395.length; i += 2) {
  request.r(i3395[i + 0], i3395[i + 1], 2, i3394, '')
  }
  i3392.atlasAssets = i3394
  i3392.scale = i3393[1]
  request.r(i3393[2], i3393[3], 0, i3392, 'skeletonJSON')
  i3392.isUpgradingBlendModeMaterials = !!i3393[4]
  i3392.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i3393[5], i3392.blendModeMaterials)
  var i3397 = i3393[6]
  var i3396 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i3397.length; i += 2) {
  request.r(i3397[i + 0], i3397[i + 1], 1, i3396, '')
  }
  i3392.skeletonDataModifiers = i3396
  var i3399 = i3393[7]
  var i3398 = []
  for(var i = 0; i < i3399.length; i += 1) {
    i3398.push( i3399[i + 0] );
  }
  i3392.fromAnimation = i3398
  var i3401 = i3393[8]
  var i3400 = []
  for(var i = 0; i < i3401.length; i += 1) {
    i3400.push( i3401[i + 0] );
  }
  i3392.toAnimation = i3400
  i3392.duration = i3393[9]
  i3392.defaultMix = i3393[10]
  request.r(i3393[11], i3393[12], 0, i3392, 'controller')
  return i3392
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i3404 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i3405 = data
  i3404.applyAdditiveMaterial = !!i3405[0]
  var i3407 = i3405[1]
  var i3406 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3407.length; i += 1) {
    i3406.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3407[i + 0]));
  }
  i3404.additiveMaterials = i3406
  var i3409 = i3405[2]
  var i3408 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3409.length; i += 1) {
    i3408.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3409[i + 0]));
  }
  i3404.multiplyMaterials = i3408
  var i3411 = i3405[3]
  var i3410 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3411.length; i += 1) {
    i3410.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3411[i + 0]));
  }
  i3404.screenMaterials = i3410
  i3404.requiresBlendModeMaterials = !!i3405[4]
  return i3404
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i3414 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i3415 = data
  i3414.pageName = i3415[0]
  request.r(i3415[1], i3415[2], 0, i3414, 'material')
  return i3414
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i3418 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i3419 = data
  request.r(i3419[0], i3419[1], 0, i3418, 'atlasFile')
  var i3421 = i3419[2]
  var i3420 = []
  for(var i = 0; i < i3421.length; i += 2) {
  request.r(i3421[i + 0], i3421[i + 1], 2, i3420, '')
  }
  i3418.materials = i3420
  i3418.textureLoadingMode = i3419[3]
  request.r(i3419[4], i3419[5], 0, i3418, 'onDemandTextureLoader')
  return i3418
}

Deserializers["ObstacleConfigSO"] = function (request, data, root) {
  var i3422 = root || request.c( 'ObstacleConfigSO' )
  var i3423 = data
  var i3425 = i3423[0]
  var i3424 = []
  for(var i = 0; i < i3425.length; i += 1) {
    i3424.push( request.d('ObstacleConfigSO+ObstacleEntry', i3425[i + 0]) );
  }
  i3422.obstacles = i3424
  var i3427 = i3423[1]
  var i3426 = []
  for(var i = 0; i < i3427.length; i += 1) {
    i3426.push( request.d('ObstacleData', i3427[i + 0]) );
  }
  i3422.obstacleDatas = i3426
  return i3422
}

Deserializers["ObstacleConfigSO+ObstacleEntry"] = function (request, data, root) {
  var i3430 = root || request.c( 'ObstacleConfigSO+ObstacleEntry' )
  var i3431 = data
  i3430.type = i3431[0]
  request.r(i3431[1], i3431[2], 0, i3430, 'prefab')
  return i3430
}

Deserializers["ObstacleData"] = function (request, data, root) {
  var i3434 = root || request.c( 'ObstacleData' )
  var i3435 = data
  i3434.name = i3435[0]
  i3434.description = i3435[1]
  request.r(i3435[2], i3435[3], 0, i3434, 'icon')
  request.r(i3435[4], i3435[5], 0, i3434, 'titleIcon')
  i3434.unlockLevel = i3435[6]
  return i3434
}

Deserializers["BoosterConfig"] = function (request, data, root) {
  var i3436 = root || request.c( 'BoosterConfig' )
  var i3437 = data
  var i3439 = i3437[0]
  var i3438 = new (System.Collections.Generic.List$1(Bridge.ns('BoosterInfo')))
  for(var i = 0; i < i3439.length; i += 1) {
    i3438.add(request.d('BoosterInfo', i3439[i + 0]));
  }
  i3436.boosterInfos = i3438
  return i3436
}

Deserializers["BoosterInfo"] = function (request, data, root) {
  var i3442 = root || request.c( 'BoosterInfo' )
  var i3443 = data
  i3442.type = i3443[0]
  i3442.name = i3443[1]
  i3442.description = i3443[2]
  i3442.levelUnlock = i3443[3]
  request.r(i3443[4], i3443[5], 0, i3442, 'icon')
  request.r(i3443[6], i3443[7], 0, i3442, 'titleIcon')
  i3442.amountFirst = i3443[8]
  i3442.price = i3443[9]
  i3442.amountBuy = i3443[10]
  return i3442
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3444 = root || request.c( 'TMPro.TMP_Settings' )
  var i3445 = data
  i3444.m_enableWordWrapping = !!i3445[0]
  i3444.m_enableKerning = !!i3445[1]
  i3444.m_enableExtraPadding = !!i3445[2]
  i3444.m_enableTintAllSprites = !!i3445[3]
  i3444.m_enableParseEscapeCharacters = !!i3445[4]
  i3444.m_EnableRaycastTarget = !!i3445[5]
  i3444.m_GetFontFeaturesAtRuntime = !!i3445[6]
  i3444.m_missingGlyphCharacter = i3445[7]
  i3444.m_warningsDisabled = !!i3445[8]
  request.r(i3445[9], i3445[10], 0, i3444, 'm_defaultFontAsset')
  i3444.m_defaultFontAssetPath = i3445[11]
  i3444.m_defaultFontSize = i3445[12]
  i3444.m_defaultAutoSizeMinRatio = i3445[13]
  i3444.m_defaultAutoSizeMaxRatio = i3445[14]
  i3444.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3445[15], i3445[16] )
  i3444.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3445[17], i3445[18] )
  i3444.m_autoSizeTextContainer = !!i3445[19]
  i3444.m_IsTextObjectScaleStatic = !!i3445[20]
  var i3447 = i3445[21]
  var i3446 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3447.length; i += 2) {
  request.r(i3447[i + 0], i3447[i + 1], 1, i3446, '')
  }
  i3444.m_fallbackFontAssets = i3446
  i3444.m_matchMaterialPreset = !!i3445[22]
  request.r(i3445[23], i3445[24], 0, i3444, 'm_defaultSpriteAsset')
  i3444.m_defaultSpriteAssetPath = i3445[25]
  i3444.m_enableEmojiSupport = !!i3445[26]
  i3444.m_MissingCharacterSpriteUnicode = i3445[27]
  i3444.m_defaultColorGradientPresetsPath = i3445[28]
  request.r(i3445[29], i3445[30], 0, i3444, 'm_defaultStyleSheet')
  i3444.m_StyleSheetsResourcePath = i3445[31]
  request.r(i3445[32], i3445[33], 0, i3444, 'm_leadingCharacters')
  request.r(i3445[34], i3445[35], 0, i3444, 'm_followingCharacters')
  i3444.m_UseModernHangulLineBreakingRules = !!i3445[36]
  return i3444
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3448 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3449 = data
  request.r(i3449[0], i3449[1], 0, i3448, 'spriteSheet')
  var i3451 = i3449[2]
  var i3450 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3451.length; i += 1) {
    i3450.add(request.d('TMPro.TMP_Sprite', i3451[i + 0]));
  }
  i3448.spriteInfoList = i3450
  var i3453 = i3449[3]
  var i3452 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3453.length; i += 2) {
  request.r(i3453[i + 0], i3453[i + 1], 1, i3452, '')
  }
  i3448.fallbackSpriteAssets = i3452
  i3448.hashCode = i3449[4]
  request.r(i3449[5], i3449[6], 0, i3448, 'material')
  i3448.materialHashCode = i3449[7]
  i3448.m_Version = i3449[8]
  i3448.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3449[9], i3448.m_FaceInfo)
  var i3455 = i3449[10]
  var i3454 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3455.length; i += 1) {
    i3454.add(request.d('TMPro.TMP_SpriteCharacter', i3455[i + 0]));
  }
  i3448.m_SpriteCharacterTable = i3454
  var i3457 = i3449[11]
  var i3456 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3457.length; i += 1) {
    i3456.add(request.d('TMPro.TMP_SpriteGlyph', i3457[i + 0]));
  }
  i3448.m_SpriteGlyphTable = i3456
  return i3448
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3460 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3461 = data
  i3460.name = i3461[0]
  i3460.hashCode = i3461[1]
  i3460.unicode = i3461[2]
  i3460.pivot = new pc.Vec2( i3461[3], i3461[4] )
  request.r(i3461[5], i3461[6], 0, i3460, 'sprite')
  i3460.id = i3461[7]
  i3460.x = i3461[8]
  i3460.y = i3461[9]
  i3460.width = i3461[10]
  i3460.height = i3461[11]
  i3460.xOffset = i3461[12]
  i3460.yOffset = i3461[13]
  i3460.xAdvance = i3461[14]
  i3460.scale = i3461[15]
  return i3460
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3466 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3467 = data
  i3466.m_Name = i3467[0]
  i3466.m_HashCode = i3467[1]
  i3466.m_ElementType = i3467[2]
  i3466.m_Unicode = i3467[3]
  i3466.m_GlyphIndex = i3467[4]
  i3466.m_Scale = i3467[5]
  return i3466
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3470 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3471 = data
  request.r(i3471[0], i3471[1], 0, i3470, 'sprite')
  i3470.m_Index = i3471[2]
  i3470.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3471[3], i3470.m_Metrics)
  i3470.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3471[4], i3470.m_GlyphRect)
  i3470.m_Scale = i3471[5]
  i3470.m_AtlasIndex = i3471[6]
  i3470.m_ClassDefinitionType = i3471[7]
  return i3470
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3472 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3473 = data
  var i3475 = i3473[0]
  var i3474 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3475.length; i += 1) {
    i3474.add(request.d('TMPro.TMP_Style', i3475[i + 0]));
  }
  i3472.m_StyleList = i3474
  return i3472
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3478 = root || request.c( 'TMPro.TMP_Style' )
  var i3479 = data
  i3478.m_Name = i3479[0]
  i3478.m_HashCode = i3479[1]
  i3478.m_OpeningDefinition = i3479[2]
  i3478.m_ClosingDefinition = i3479[3]
  i3478.m_OpeningTagArray = i3479[4]
  i3478.m_ClosingTagArray = i3479[5]
  i3478.m_OpeningTagUnicodeArray = i3479[6]
  i3478.m_ClosingTagUnicodeArray = i3479[7]
  return i3478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3481 = data
  var i3483 = i3481[0]
  var i3482 = []
  for(var i = 0; i < i3483.length; i += 1) {
    i3482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3483[i + 0]) );
  }
  i3480.files = i3482
  i3480.componentToPrefabIds = i3481[1]
  return i3480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3487 = data
  i3486.path = i3487[0]
  request.r(i3487[1], i3487[2], 0, i3486, 'unityObject')
  return i3486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3489 = data
  var i3491 = i3489[0]
  var i3490 = []
  for(var i = 0; i < i3491.length; i += 1) {
    i3490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3491[i + 0]) );
  }
  i3488.scriptsExecutionOrder = i3490
  var i3493 = i3489[1]
  var i3492 = []
  for(var i = 0; i < i3493.length; i += 1) {
    i3492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3493[i + 0]) );
  }
  i3488.sortingLayers = i3492
  var i3495 = i3489[2]
  var i3494 = []
  for(var i = 0; i < i3495.length; i += 1) {
    i3494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3495[i + 0]) );
  }
  i3488.cullingLayers = i3494
  i3488.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3489[3], i3488.timeSettings)
  i3488.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3489[4], i3488.physicsSettings)
  i3488.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3489[5], i3488.physics2DSettings)
  i3488.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3489[6], i3488.qualitySettings)
  i3488.enableRealtimeShadows = !!i3489[7]
  i3488.enableAutoInstancing = !!i3489[8]
  i3488.enableStaticBatching = !!i3489[9]
  i3488.enableDynamicBatching = !!i3489[10]
  i3488.usePreservativeDynamicBatching = !!i3489[11]
  i3488.lightmapEncodingQuality = i3489[12]
  i3488.desiredColorSpace = i3489[13]
  var i3497 = i3489[14]
  var i3496 = []
  for(var i = 0; i < i3497.length; i += 1) {
    i3496.push( i3497[i + 0] );
  }
  i3488.allTags = i3496
  return i3488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3501 = data
  i3500.name = i3501[0]
  i3500.value = i3501[1]
  return i3500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3505 = data
  i3504.id = i3505[0]
  i3504.name = i3505[1]
  i3504.value = i3505[2]
  return i3504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3509 = data
  i3508.id = i3509[0]
  i3508.name = i3509[1]
  return i3508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3511 = data
  i3510.fixedDeltaTime = i3511[0]
  i3510.maximumDeltaTime = i3511[1]
  i3510.timeScale = i3511[2]
  i3510.maximumParticleTimestep = i3511[3]
  return i3510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3513 = data
  i3512.gravity = new pc.Vec3( i3513[0], i3513[1], i3513[2] )
  i3512.defaultSolverIterations = i3513[3]
  i3512.bounceThreshold = i3513[4]
  i3512.autoSyncTransforms = !!i3513[5]
  i3512.autoSimulation = !!i3513[6]
  var i3515 = i3513[7]
  var i3514 = []
  for(var i = 0; i < i3515.length; i += 1) {
    i3514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3515[i + 0]) );
  }
  i3512.collisionMatrix = i3514
  return i3512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3519 = data
  i3518.enabled = !!i3519[0]
  i3518.layerId = i3519[1]
  i3518.otherLayerId = i3519[2]
  return i3518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3521 = data
  request.r(i3521[0], i3521[1], 0, i3520, 'material')
  i3520.gravity = new pc.Vec2( i3521[2], i3521[3] )
  i3520.positionIterations = i3521[4]
  i3520.velocityIterations = i3521[5]
  i3520.velocityThreshold = i3521[6]
  i3520.maxLinearCorrection = i3521[7]
  i3520.maxAngularCorrection = i3521[8]
  i3520.maxTranslationSpeed = i3521[9]
  i3520.maxRotationSpeed = i3521[10]
  i3520.baumgarteScale = i3521[11]
  i3520.baumgarteTOIScale = i3521[12]
  i3520.timeToSleep = i3521[13]
  i3520.linearSleepTolerance = i3521[14]
  i3520.angularSleepTolerance = i3521[15]
  i3520.defaultContactOffset = i3521[16]
  i3520.autoSimulation = !!i3521[17]
  i3520.queriesHitTriggers = !!i3521[18]
  i3520.queriesStartInColliders = !!i3521[19]
  i3520.callbacksOnDisable = !!i3521[20]
  i3520.reuseCollisionCallbacks = !!i3521[21]
  i3520.autoSyncTransforms = !!i3521[22]
  var i3523 = i3521[23]
  var i3522 = []
  for(var i = 0; i < i3523.length; i += 1) {
    i3522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3523[i + 0]) );
  }
  i3520.collisionMatrix = i3522
  return i3520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3527 = data
  i3526.enabled = !!i3527[0]
  i3526.layerId = i3527[1]
  i3526.otherLayerId = i3527[2]
  return i3526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3529 = data
  var i3531 = i3529[0]
  var i3530 = []
  for(var i = 0; i < i3531.length; i += 1) {
    i3530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3531[i + 0]) );
  }
  i3528.qualityLevels = i3530
  var i3533 = i3529[1]
  var i3532 = []
  for(var i = 0; i < i3533.length; i += 1) {
    i3532.push( i3533[i + 0] );
  }
  i3528.names = i3532
  i3528.shadows = i3529[2]
  i3528.anisotropicFiltering = i3529[3]
  i3528.antiAliasing = i3529[4]
  i3528.lodBias = i3529[5]
  i3528.shadowCascades = i3529[6]
  i3528.shadowDistance = i3529[7]
  i3528.shadowmaskMode = i3529[8]
  i3528.shadowProjection = i3529[9]
  i3528.shadowResolution = i3529[10]
  i3528.softParticles = !!i3529[11]
  i3528.softVegetation = !!i3529[12]
  i3528.activeColorSpace = i3529[13]
  i3528.desiredColorSpace = i3529[14]
  i3528.masterTextureLimit = i3529[15]
  i3528.maxQueuedFrames = i3529[16]
  i3528.particleRaycastBudget = i3529[17]
  i3528.pixelLightCount = i3529[18]
  i3528.realtimeReflectionProbes = !!i3529[19]
  i3528.shadowCascade2Split = i3529[20]
  i3528.shadowCascade4Split = new pc.Vec3( i3529[21], i3529[22], i3529[23] )
  i3528.streamingMipmapsActive = !!i3529[24]
  i3528.vSyncCount = i3529[25]
  i3528.asyncUploadBufferSize = i3529[26]
  i3528.asyncUploadTimeSlice = i3529[27]
  i3528.billboardsFaceCameraPosition = !!i3529[28]
  i3528.shadowNearPlaneOffset = i3529[29]
  i3528.streamingMipmapsMemoryBudget = i3529[30]
  i3528.maximumLODLevel = i3529[31]
  i3528.streamingMipmapsAddAllCameras = !!i3529[32]
  i3528.streamingMipmapsMaxLevelReduction = i3529[33]
  i3528.streamingMipmapsRenderersPerFrame = i3529[34]
  i3528.resolutionScalingFixedDPIFactor = i3529[35]
  i3528.streamingMipmapsMaxFileIORequests = i3529[36]
  i3528.currentQualityLevel = i3529[37]
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3539 = data
  i3538.weight = i3539[0]
  i3538.vertices = i3539[1]
  i3538.normals = i3539[2]
  i3538.tangents = i3539[3]
  return i3538
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3540 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3541 = data
  request.r(i3541[0], i3541[1], 0, i3540, 'm_ObjectArgument')
  i3540.m_ObjectArgumentAssemblyTypeName = i3541[2]
  i3540.m_IntArgument = i3541[3]
  i3540.m_FloatArgument = i3541[4]
  i3540.m_StringArgument = i3541[5]
  i3540.m_BoolArgument = !!i3541[6]
  return i3540
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3542 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3543 = data
  i3542.xPlacement = i3543[0]
  i3542.yPlacement = i3543[1]
  i3542.xAdvance = i3543[2]
  i3542.yAdvance = i3543[3]
  return i3542
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"105":[106],"107":[106],"108":[106],"109":[106],"110":[106],"111":[106],"112":[113],"114":[48],"115":[116],"117":[116],"118":[116],"119":[116],"120":[116],"121":[116],"122":[116],"123":[13],"124":[13],"125":[13],"126":[13],"127":[13],"128":[13],"129":[13],"130":[13],"131":[13],"132":[13],"133":[13],"134":[13],"135":[13],"136":[48],"137":[19],"138":[139],"140":[139],"63":[2],"97":[2],"90":[2],"66":[18],"61":[18],"58":[55],"141":[2],"142":[143],"144":[145],"146":[147],"148":[18],"149":[2],"145":[2],"84":[63],"6":[3,2],"150":[2],"83":[63],"65":[2],"64":[2],"94":[2],"151":[2],"152":[2],"153":[2],"154":[2],"96":[2],"155":[2],"156":[3,2],"157":[2],"158":[2],"159":[2],"160":[2],"98":[3,2],"161":[2],"162":[72],"163":[72],"73":[72],"164":[72],"165":[48],"166":[48],"167":[143],"168":[72],"169":[63],"170":[48],"171":[24],"172":[173],"174":[2],"175":[3,2],"40":[19],"176":[3,2],"177":[91,19],"178":[19],"179":[19,43],"180":[116],"181":[13],"182":[173],"183":[184],"185":[2,3],"186":[2],"20":[19,2],"7":[2,3],"187":[2],"188":[3,2],"189":[19],"190":[3,2],"191":[2],"192":[143],"193":[116],"194":[13]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","OutsideBird","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Rigidbody2D","UnityEngine.CircleCollider2D","UnityEngine.PhysicsMaterial2D","BubbleParts","BubbleOneSlot","UnityEngine.SpriteRenderer","UnityEngine.MeshRenderer","TMPro.TextMeshPro","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Light","BubbleTwoSlot","BubbleThreeSlot","BubbleFourSlot","BubbleFiveSlot","FrozenNestObstacle","LockedNestObstacle","KeyNestObstacle","HiddenNestObstacle","StoneNestObstacle","BigNestObstacle","HiddenBirdObstacle","BindBirdObstacle","IceBirdObstacle","TargetNestObstacle","Bird","Spine.Unity.SkeletonAnimation","UnityEngine.BoxCollider2D","BirdParts","UnityEngine.MeshFilter","Spine.Unity.SkeletonDataAsset","MagnetNestFx","ShuffleFX","ParticlesBase","UnityEngine.Camera","UnityEngine.AudioListener","BoardManager","TopContainer","DockContainer","SlotContainer","OutsideBirdHolder","BirdDock","TimeNestController","UnityEngine.GameObject","DockCountdown","UnityEngine.SpriteMask","BirdSlot","BranchWave","UnityEngine.Rendering.SortingGroup","UnityEngine.Canvas","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.ContentSizeFitter","SpriteFitScreenHeight","LevelManager","BirdDataSO","ObstacleConfigSO","UnityEngine.TextAsset","ControllerManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BoosterManager","BoosterConfig","GameManager","SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","ParticlesManager","GameData","ComboManager","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasGroup","GameplayUI","ButtonScaleUI","UnityEngine.UI.Button","BoosterItemUI","SlingshotAnimator","UnityEngine.Animator","LoseUI","Crystal.SafeArea","UnityEngine.UI.HorizontalLayoutGroup","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Mask","ColorBirdLogoAnimator","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Cubemap","Spine.Unity.SpineAtlasAsset","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UIImageFitScreenHeight","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Lean.Common.LeanSelectableGraphicColor","UnityEngine.UI.Graphic","Lean.Common.LeanSelectableRendererColor","UnityEngine.Renderer","Lean.Common.LeanSelectableSpriteRendererColor","UnityEngine.UI.Dropdown","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","CW.Common.CwDepthTextureMode","CW.Common.CwLightIntensity","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","Coffee.UIExtensions.UIParticle","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine","Lean.Pool.LeanPooledRigidbody","Lean.Pool.LeanPooledRigidbody2D"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "10/23/2026 07:57:06";

Deserializers.lunaDaysRunning = "4.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "PA_Lv1";

Deserializers.lunaAppID = "43850";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1835";

Deserializers.runtimeAnalysisExcludedMethodsCount = "6544";

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

Deserializers.buildID = "98165a55-051f-4bb6-8d86-c4951923ca71";

Deserializers.runtimeInitializeOnLoadInfos = [[["CW","Common","CwInput","Enable"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Sirenix","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","UnitySerializationInitializer","InitializeRuntime"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[["Coffee","UIExtensions","ParticleSystemPreviewSystem","Initialize"],["Coffee","UIParticleInternal","FrameCache","Clear"],["Coffee","UIExtensions","UIParticleUpdater","OnDomainReload"],["Coffee","UIParticleInternal","MaterialRepository","Clear"],["Coffee","UIParticleInternal","UIExtraCallbacks","InitializeOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["LockedNestObstacle","ResetStatics"],["EventManager","ClearAll"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

