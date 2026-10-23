var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointSpring' )
  var i729 = data
  i728.spring = i729[0]
  i728.damper = i729[1]
  i728.targetPosition = i729[2]
  return i728
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointMotor' )
  var i731 = data
  i730.m_TargetVelocity = i731[0]
  i730.m_Force = i731[1]
  i730.m_FreeSpin = i731[2]
  return i730
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.JointLimits' )
  var i733 = data
  i732.m_Min = i733[0]
  i732.m_Max = i733[1]
  i732.m_Bounciness = i733[2]
  i732.m_BounceMinVelocity = i733[3]
  i732.m_ContactDistance = i733[4]
  i732.minBounce = i733[5]
  i732.maxBounce = i733[6]
  return i732
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.JointDrive' )
  var i735 = data
  i734.m_PositionSpring = i735[0]
  i734.m_PositionDamper = i735[1]
  i734.m_MaximumForce = i735[2]
  i734.m_UseAcceleration = i735[3]
  return i734
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i737 = data
  i736.m_Spring = i737[0]
  i736.m_Damper = i737[1]
  return i736
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i739 = data
  i738.m_Limit = i739[0]
  i738.m_Bounciness = i739[1]
  i738.m_ContactDistance = i739[2]
  return i738
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i741 = data
  i740.m_ExtremumSlip = i741[0]
  i740.m_ExtremumValue = i741[1]
  i740.m_AsymptoteSlip = i741[2]
  i740.m_AsymptoteValue = i741[3]
  i740.m_Stiffness = i741[4]
  return i740
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i743 = data
  i742.m_LowerAngle = i743[0]
  i742.m_UpperAngle = i743[1]
  return i742
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i745 = data
  i744.m_MotorSpeed = i745[0]
  i744.m_MaximumMotorTorque = i745[1]
  return i744
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i747 = data
  i746.m_DampingRatio = i747[0]
  i746.m_Frequency = i747[1]
  i746.m_Angle = i747[2]
  return i746
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i749 = data
  i748.m_LowerTranslation = i749[0]
  i748.m_UpperTranslation = i749[1]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i750 = root || new pc.UnityMaterial()
  var i751 = data
  i750.name = i751[0]
  request.r(i751[1], i751[2], 0, i750, 'shader')
  i750.renderQueue = i751[3]
  i750.enableInstancing = !!i751[4]
  var i753 = i751[5]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i753[i + 0]) );
  }
  i750.floatParameters = i752
  var i755 = i751[6]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i755[i + 0]) );
  }
  i750.colorParameters = i754
  var i757 = i751[7]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i757[i + 0]) );
  }
  i750.vectorParameters = i756
  var i759 = i751[8]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i759[i + 0]) );
  }
  i750.textureParameters = i758
  var i761 = i751[9]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i761[i + 0]) );
  }
  i750.materialFlags = i760
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i765 = data
  i764.name = i765[0]
  i764.value = i765[1]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i769 = data
  i768.name = i769[0]
  i768.value = new pc.Color(i769[1], i769[2], i769[3], i769[4])
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i773 = data
  i772.name = i773[0]
  i772.value = new pc.Vec4( i773[1], i773[2], i773[3], i773[4] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i777 = data
  i776.name = i777[0]
  request.r(i777[1], i777[2], 0, i776, 'value')
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i781 = data
  i780.name = i781[0]
  i780.enabled = !!i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i783 = data
  i782.name = i783[0]
  i782.width = i783[1]
  i782.height = i783[2]
  i782.mipmapCount = i783[3]
  i782.anisoLevel = i783[4]
  i782.filterMode = i783[5]
  i782.hdr = !!i783[6]
  i782.format = i783[7]
  i782.wrapMode = i783[8]
  i782.alphaIsTransparency = !!i783[9]
  i782.alphaSource = i783[10]
  i782.graphicsFormat = i783[11]
  i782.sRGBTexture = !!i783[12]
  i782.desiredColorSpace = i783[13]
  i782.wrapU = i783[14]
  i782.wrapV = i783[15]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i785 = data
  i784.pivot = new pc.Vec2( i785[0], i785[1] )
  i784.anchorMin = new pc.Vec2( i785[2], i785[3] )
  i784.anchorMax = new pc.Vec2( i785[4], i785[5] )
  i784.sizeDelta = new pc.Vec2( i785[6], i785[7] )
  i784.anchoredPosition3D = new pc.Vec3( i785[8], i785[9], i785[10] )
  i784.rotation = new pc.Quat(i785[11], i785[12], i785[13], i785[14])
  i784.scale = new pc.Vec3( i785[15], i785[16], i785[17] )
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i787 = data
  i786.cullTransparentMesh = !!i787[0]
  return i786
}

Deserializers["OutsideBird"] = function (request, data, root) {
  var i788 = root || request.c( 'OutsideBird' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'm_ImageIcon')
  request.r(i789[2], i789[3], 0, i788, 'm_TxtCount')
  return i788
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.UI.Image' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'm_Sprite')
  i790.m_Type = i791[2]
  i790.m_PreserveAspect = !!i791[3]
  i790.m_FillCenter = !!i791[4]
  i790.m_FillMethod = i791[5]
  i790.m_FillAmount = i791[6]
  i790.m_FillClockwise = !!i791[7]
  i790.m_FillOrigin = i791[8]
  i790.m_UseSpriteMesh = !!i791[9]
  i790.m_PixelsPerUnitMultiplier = i791[10]
  request.r(i791[11], i791[12], 0, i790, 'm_Material')
  i790.m_Maskable = !!i791[13]
  i790.m_Color = new pc.Color(i791[14], i791[15], i791[16], i791[17])
  i790.m_RaycastTarget = !!i791[18]
  i790.m_RaycastPadding = new pc.Vec4( i791[19], i791[20], i791[21], i791[22] )
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i793 = data
  i792.name = i793[0]
  i792.tagId = i793[1]
  i792.enabled = !!i793[2]
  i792.isStatic = !!i793[3]
  i792.layer = i793[4]
  return i792
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i794 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i795 = data
  i794.m_hasFontAssetChanged = !!i795[0]
  request.r(i795[1], i795[2], 0, i794, 'm_baseMaterial')
  i794.m_maskOffset = new pc.Vec4( i795[3], i795[4], i795[5], i795[6] )
  i794.m_text = i795[7]
  i794.m_isRightToLeft = !!i795[8]
  request.r(i795[9], i795[10], 0, i794, 'm_fontAsset')
  request.r(i795[11], i795[12], 0, i794, 'm_sharedMaterial')
  var i797 = i795[13]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i794.m_fontSharedMaterials = i796
  request.r(i795[14], i795[15], 0, i794, 'm_fontMaterial')
  var i799 = i795[16]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i794.m_fontMaterials = i798
  i794.m_fontColor32 = UnityEngine.Color32.ConstructColor(i795[17], i795[18], i795[19], i795[20])
  i794.m_fontColor = new pc.Color(i795[21], i795[22], i795[23], i795[24])
  i794.m_enableVertexGradient = !!i795[25]
  i794.m_colorMode = i795[26]
  i794.m_fontColorGradient = request.d('TMPro.VertexGradient', i795[27], i794.m_fontColorGradient)
  request.r(i795[28], i795[29], 0, i794, 'm_fontColorGradientPreset')
  request.r(i795[30], i795[31], 0, i794, 'm_spriteAsset')
  i794.m_tintAllSprites = !!i795[32]
  request.r(i795[33], i795[34], 0, i794, 'm_StyleSheet')
  i794.m_TextStyleHashCode = i795[35]
  i794.m_overrideHtmlColors = !!i795[36]
  i794.m_faceColor = UnityEngine.Color32.ConstructColor(i795[37], i795[38], i795[39], i795[40])
  i794.m_fontSize = i795[41]
  i794.m_fontSizeBase = i795[42]
  i794.m_fontWeight = i795[43]
  i794.m_enableAutoSizing = !!i795[44]
  i794.m_fontSizeMin = i795[45]
  i794.m_fontSizeMax = i795[46]
  i794.m_fontStyle = i795[47]
  i794.m_HorizontalAlignment = i795[48]
  i794.m_VerticalAlignment = i795[49]
  i794.m_textAlignment = i795[50]
  i794.m_characterSpacing = i795[51]
  i794.m_wordSpacing = i795[52]
  i794.m_lineSpacing = i795[53]
  i794.m_lineSpacingMax = i795[54]
  i794.m_paragraphSpacing = i795[55]
  i794.m_charWidthMaxAdj = i795[56]
  i794.m_enableWordWrapping = !!i795[57]
  i794.m_wordWrappingRatios = i795[58]
  i794.m_overflowMode = i795[59]
  request.r(i795[60], i795[61], 0, i794, 'm_linkedTextComponent')
  request.r(i795[62], i795[63], 0, i794, 'parentLinkedComponent')
  i794.m_enableKerning = !!i795[64]
  i794.m_enableExtraPadding = !!i795[65]
  i794.checkPaddingRequired = !!i795[66]
  i794.m_isRichText = !!i795[67]
  i794.m_parseCtrlCharacters = !!i795[68]
  i794.m_isOrthographic = !!i795[69]
  i794.m_isCullingEnabled = !!i795[70]
  i794.m_horizontalMapping = i795[71]
  i794.m_verticalMapping = i795[72]
  i794.m_uvLineOffset = i795[73]
  i794.m_geometrySortingOrder = i795[74]
  i794.m_IsTextObjectScaleStatic = !!i795[75]
  i794.m_VertexBufferAutoSizeReduction = !!i795[76]
  i794.m_useMaxVisibleDescender = !!i795[77]
  i794.m_pageToDisplay = i795[78]
  i794.m_margin = new pc.Vec4( i795[79], i795[80], i795[81], i795[82] )
  i794.m_isUsingLegacyAnimationComponent = !!i795[83]
  i794.m_isVolumetricText = !!i795[84]
  request.r(i795[85], i795[86], 0, i794, 'm_Material')
  i794.m_Maskable = !!i795[87]
  i794.m_Color = new pc.Color(i795[88], i795[89], i795[90], i795[91])
  i794.m_RaycastTarget = !!i795[92]
  i794.m_RaycastPadding = new pc.Vec4( i795[93], i795[94], i795[95], i795[96] )
  return i794
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i802 = root || request.c( 'TMPro.VertexGradient' )
  var i803 = data
  i802.topLeft = new pc.Color(i803[0], i803[1], i803[2], i803[3])
  i802.topRight = new pc.Color(i803[4], i803[5], i803[6], i803[7])
  i802.bottomLeft = new pc.Color(i803[8], i803[9], i803[10], i803[11])
  i802.bottomRight = new pc.Color(i803[12], i803[13], i803[14], i803[15])
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i805 = data
  i804.position = new pc.Vec3( i805[0], i805[1], i805[2] )
  i804.scale = new pc.Vec3( i805[3], i805[4], i805[5] )
  i804.rotation = new pc.Quat(i805[6], i805[7], i805[8], i805[9])
  return i804
}

Deserializers["BubbleTwoSlot"] = function (request, data, root) {
  var i806 = root || request.c( 'BubbleTwoSlot' )
  var i807 = data
  i806.layoutCenter = new pc.Vec2( i807[0], i807[1] )
  i806.horizontalOffset = i807[2]
  i806.currentConfig = request.d('BubbleConfig', i807[3], i806.currentConfig)
  var i809 = i807[4]
  var i808 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 1, i808, '')
  }
  i806.birds = i808
  request.r(i807[5], i807[6], 0, i806, 'birdParent')
  i806.refillPopDuration = i807[7]
  i806.refillMoveDuration = i807[8]
  i806.clipBirdsToCircle = !!i807[9]
  return i806
}

Deserializers["BubbleConfig"] = function (request, data, root) {
  var i810 = root || request.c( 'BubbleConfig' )
  var i811 = data
  i810.BubbleID = i811[0]
  i810.BubbleType = i811[1]
  i810.FishStr = i811[2]
  i810.IsFrozen = !!i811[3]
  i810.IsUnknown = !!i811[4]
  i810.IsKey = !!i811[5]
  i810.LockCount = i811[6]
  i810.Lock2Count = i811[7]
  i810.IsObstacle = !!i811[8]
  i810.Obstacle2Count = i811[9]
  i810.IsMore = !!i811[10]
  i810.IsConveyor = !!i811[11]
  i810.MaskTargetFish = i811[12]
  i810.BindFishStr = i811[13]
  i810.IceFishStr = i811[14]
  i810.UnKnowFishStr = i811[15]
  i810.KeyFishStr = i811[16]
  i810.LockFishStr = i811[17]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i815 = data
  i814.bodyType = i815[0]
  request.r(i815[1], i815[2], 0, i814, 'material')
  i814.simulated = !!i815[3]
  i814.useAutoMass = !!i815[4]
  i814.mass = i815[5]
  i814.drag = i815[6]
  i814.angularDrag = i815[7]
  i814.gravityScale = i815[8]
  i814.collisionDetectionMode = i815[9]
  i814.sleepMode = i815[10]
  i814.constraints = i815[11]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i817 = data
  i816.radius = i817[0]
  i816.enabled = !!i817[1]
  i816.isTrigger = !!i817[2]
  i816.usedByEffector = !!i817[3]
  i816.density = i817[4]
  i816.offset = new pc.Vec2( i817[5], i817[6] )
  request.r(i817[7], i817[8], 0, i816, 'material')
  return i816
}

Deserializers["BubbleParts"] = function (request, data, root) {
  var i818 = root || request.c( 'BubbleParts' )
  var i819 = data
  var i821 = i819[0]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('BubbleParts+Entry', i821[i + 0]) );
  }
  i818.parts = i820
  return i818
}

Deserializers["BubbleParts+Entry"] = function (request, data, root) {
  var i824 = root || request.c( 'BubbleParts+Entry' )
  var i825 = data
  i824.key = i825[0]
  request.r(i825[1], i825[2], 0, i824, 'target')
  return i824
}

Deserializers["BubbleOneSlot"] = function (request, data, root) {
  var i826 = root || request.c( 'BubbleOneSlot' )
  var i827 = data
  i826.currentConfig = request.d('BubbleConfig', i827[0], i826.currentConfig)
  var i829 = i827[1]
  var i828 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 1, i828, '')
  }
  i826.birds = i828
  request.r(i827[2], i827[3], 0, i826, 'birdParent')
  i826.refillPopDuration = i827[4]
  i826.refillMoveDuration = i827[5]
  i826.clipBirdsToCircle = !!i827[6]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i831 = data
  i830.color = new pc.Color(i831[0], i831[1], i831[2], i831[3])
  request.r(i831[4], i831[5], 0, i830, 'sprite')
  i830.flipX = !!i831[6]
  i830.flipY = !!i831[7]
  i830.drawMode = i831[8]
  i830.size = new pc.Vec2( i831[9], i831[10] )
  i830.tileMode = i831[11]
  i830.adaptiveModeThreshold = i831[12]
  i830.maskInteraction = i831[13]
  i830.spriteSortPoint = i831[14]
  i830.enabled = !!i831[15]
  request.r(i831[16], i831[17], 0, i830, 'sharedMaterial')
  var i833 = i831[18]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.sharedMaterials = i832
  i830.receiveShadows = !!i831[19]
  i830.shadowCastingMode = i831[20]
  i830.sortingLayerID = i831[21]
  i830.sortingOrder = i831[22]
  i830.lightmapIndex = i831[23]
  i830.lightmapSceneIndex = i831[24]
  i830.lightmapScaleOffset = new pc.Vec4( i831[25], i831[26], i831[27], i831[28] )
  i830.lightProbeUsage = i831[29]
  i830.reflectionProbeUsage = i831[30]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'additionalVertexStreams')
  i834.enabled = !!i835[2]
  request.r(i835[3], i835[4], 0, i834, 'sharedMaterial')
  var i837 = i835[5]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.sharedMaterials = i836
  i834.receiveShadows = !!i835[6]
  i834.shadowCastingMode = i835[7]
  i834.sortingLayerID = i835[8]
  i834.sortingOrder = i835[9]
  i834.lightmapIndex = i835[10]
  i834.lightmapSceneIndex = i835[11]
  i834.lightmapScaleOffset = new pc.Vec4( i835[12], i835[13], i835[14], i835[15] )
  i834.lightProbeUsage = i835[16]
  i834.reflectionProbeUsage = i835[17]
  return i834
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i838 = root || request.c( 'TMPro.TextMeshPro' )
  var i839 = data
  i838._SortingLayer = i839[0]
  i838._SortingLayerID = i839[1]
  i838._SortingOrder = i839[2]
  i838.m_hasFontAssetChanged = !!i839[3]
  request.r(i839[4], i839[5], 0, i838, 'm_renderer')
  i838.m_maskType = i839[6]
  i838.m_text = i839[7]
  i838.m_isRightToLeft = !!i839[8]
  request.r(i839[9], i839[10], 0, i838, 'm_fontAsset')
  request.r(i839[11], i839[12], 0, i838, 'm_sharedMaterial')
  var i841 = i839[13]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i838.m_fontSharedMaterials = i840
  request.r(i839[14], i839[15], 0, i838, 'm_fontMaterial')
  var i843 = i839[16]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i838.m_fontMaterials = i842
  i838.m_fontColor32 = UnityEngine.Color32.ConstructColor(i839[17], i839[18], i839[19], i839[20])
  i838.m_fontColor = new pc.Color(i839[21], i839[22], i839[23], i839[24])
  i838.m_enableVertexGradient = !!i839[25]
  i838.m_colorMode = i839[26]
  i838.m_fontColorGradient = request.d('TMPro.VertexGradient', i839[27], i838.m_fontColorGradient)
  request.r(i839[28], i839[29], 0, i838, 'm_fontColorGradientPreset')
  request.r(i839[30], i839[31], 0, i838, 'm_spriteAsset')
  i838.m_tintAllSprites = !!i839[32]
  request.r(i839[33], i839[34], 0, i838, 'm_StyleSheet')
  i838.m_TextStyleHashCode = i839[35]
  i838.m_overrideHtmlColors = !!i839[36]
  i838.m_faceColor = UnityEngine.Color32.ConstructColor(i839[37], i839[38], i839[39], i839[40])
  i838.m_fontSize = i839[41]
  i838.m_fontSizeBase = i839[42]
  i838.m_fontWeight = i839[43]
  i838.m_enableAutoSizing = !!i839[44]
  i838.m_fontSizeMin = i839[45]
  i838.m_fontSizeMax = i839[46]
  i838.m_fontStyle = i839[47]
  i838.m_HorizontalAlignment = i839[48]
  i838.m_VerticalAlignment = i839[49]
  i838.m_textAlignment = i839[50]
  i838.m_characterSpacing = i839[51]
  i838.m_wordSpacing = i839[52]
  i838.m_lineSpacing = i839[53]
  i838.m_lineSpacingMax = i839[54]
  i838.m_paragraphSpacing = i839[55]
  i838.m_charWidthMaxAdj = i839[56]
  i838.m_enableWordWrapping = !!i839[57]
  i838.m_wordWrappingRatios = i839[58]
  i838.m_overflowMode = i839[59]
  request.r(i839[60], i839[61], 0, i838, 'm_linkedTextComponent')
  request.r(i839[62], i839[63], 0, i838, 'parentLinkedComponent')
  i838.m_enableKerning = !!i839[64]
  i838.m_enableExtraPadding = !!i839[65]
  i838.checkPaddingRequired = !!i839[66]
  i838.m_isRichText = !!i839[67]
  i838.m_parseCtrlCharacters = !!i839[68]
  i838.m_isOrthographic = !!i839[69]
  i838.m_isCullingEnabled = !!i839[70]
  i838.m_horizontalMapping = i839[71]
  i838.m_verticalMapping = i839[72]
  i838.m_uvLineOffset = i839[73]
  i838.m_geometrySortingOrder = i839[74]
  i838.m_IsTextObjectScaleStatic = !!i839[75]
  i838.m_VertexBufferAutoSizeReduction = !!i839[76]
  i838.m_useMaxVisibleDescender = !!i839[77]
  i838.m_pageToDisplay = i839[78]
  i838.m_margin = new pc.Vec4( i839[79], i839[80], i839[81], i839[82] )
  i838.m_isUsingLegacyAnimationComponent = !!i839[83]
  i838.m_isVolumetricText = !!i839[84]
  request.r(i839[85], i839[86], 0, i838, 'm_Material')
  i838.m_Maskable = !!i839[87]
  i838.m_Color = new pc.Color(i839[88], i839[89], i839[90], i839[91])
  i838.m_RaycastTarget = !!i839[92]
  i838.m_RaycastPadding = new pc.Vec4( i839[93], i839[94], i839[95], i839[96] )
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i845 = data
  i844.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i845[0], i844.main)
  i844.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i845[1], i844.colorBySpeed)
  i844.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i845[2], i844.colorOverLifetime)
  i844.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i845[3], i844.emission)
  i844.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i845[4], i844.rotationBySpeed)
  i844.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i845[5], i844.rotationOverLifetime)
  i844.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i845[6], i844.shape)
  i844.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i845[7], i844.sizeBySpeed)
  i844.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i845[8], i844.sizeOverLifetime)
  i844.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i845[9], i844.textureSheetAnimation)
  i844.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i845[10], i844.velocityOverLifetime)
  i844.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i845[11], i844.noise)
  i844.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i845[12], i844.inheritVelocity)
  i844.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i845[13], i844.forceOverLifetime)
  i844.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i845[14], i844.limitVelocityOverLifetime)
  i844.useAutoRandomSeed = !!i845[15]
  i844.randomSeed = i845[16]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i846 = root || new pc.ParticleSystemMain()
  var i847 = data
  i846.duration = i847[0]
  i846.loop = !!i847[1]
  i846.prewarm = !!i847[2]
  i846.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[3], i846.startDelay)
  i846.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[4], i846.startLifetime)
  i846.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[5], i846.startSpeed)
  i846.startSize3D = !!i847[6]
  i846.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[7], i846.startSizeX)
  i846.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[8], i846.startSizeY)
  i846.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[9], i846.startSizeZ)
  i846.startRotation3D = !!i847[10]
  i846.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[11], i846.startRotationX)
  i846.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[12], i846.startRotationY)
  i846.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[13], i846.startRotationZ)
  i846.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i847[14], i846.startColor)
  i846.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[15], i846.gravityModifier)
  i846.simulationSpace = i847[16]
  request.r(i847[17], i847[18], 0, i846, 'customSimulationSpace')
  i846.simulationSpeed = i847[19]
  i846.useUnscaledTime = !!i847[20]
  i846.scalingMode = i847[21]
  i846.playOnAwake = !!i847[22]
  i846.maxParticles = i847[23]
  i846.emitterVelocityMode = i847[24]
  i846.stopAction = i847[25]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i848 = root || new pc.MinMaxCurve()
  var i849 = data
  i848.mode = i849[0]
  i848.curveMin = new pc.AnimationCurve( { keys_flow: i849[1] } )
  i848.curveMax = new pc.AnimationCurve( { keys_flow: i849[2] } )
  i848.curveMultiplier = i849[3]
  i848.constantMin = i849[4]
  i848.constantMax = i849[5]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i850 = root || new pc.MinMaxGradient()
  var i851 = data
  i850.mode = i851[0]
  i850.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i851[1], i850.gradientMin)
  i850.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i851[2], i850.gradientMax)
  i850.colorMin = new pc.Color(i851[3], i851[4], i851[5], i851[6])
  i850.colorMax = new pc.Color(i851[7], i851[8], i851[9], i851[10])
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i853 = data
  i852.mode = i853[0]
  var i855 = i853[1]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i855[i + 0]) );
  }
  i852.colorKeys = i854
  var i857 = i853[2]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i857[i + 0]) );
  }
  i852.alphaKeys = i856
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i858 = root || new pc.ParticleSystemColorBySpeed()
  var i859 = data
  i858.enabled = !!i859[0]
  i858.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i859[1], i858.color)
  i858.range = new pc.Vec2( i859[2], i859[3] )
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i863 = data
  i862.color = new pc.Color(i863[0], i863[1], i863[2], i863[3])
  i862.time = i863[4]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i867 = data
  i866.alpha = i867[0]
  i866.time = i867[1]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i868 = root || new pc.ParticleSystemColorOverLifetime()
  var i869 = data
  i868.enabled = !!i869[0]
  i868.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i869[1], i868.color)
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i870 = root || new pc.ParticleSystemEmitter()
  var i871 = data
  i870.enabled = !!i871[0]
  i870.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[1], i870.rateOverTime)
  i870.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[2], i870.rateOverDistance)
  var i873 = i871[3]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i873[i + 0]) );
  }
  i870.bursts = i872
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i876 = root || new pc.ParticleSystemBurst()
  var i877 = data
  i876.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[0], i876.count)
  i876.cycleCount = i877[1]
  i876.minCount = i877[2]
  i876.maxCount = i877[3]
  i876.repeatInterval = i877[4]
  i876.time = i877[5]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i878 = root || new pc.ParticleSystemRotationBySpeed()
  var i879 = data
  i878.enabled = !!i879[0]
  i878.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[1], i878.x)
  i878.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[2], i878.y)
  i878.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[3], i878.z)
  i878.separateAxes = !!i879[4]
  i878.range = new pc.Vec2( i879[5], i879[6] )
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i880 = root || new pc.ParticleSystemRotationOverLifetime()
  var i881 = data
  i880.enabled = !!i881[0]
  i880.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[1], i880.x)
  i880.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[2], i880.y)
  i880.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[3], i880.z)
  i880.separateAxes = !!i881[4]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i882 = root || new pc.ParticleSystemShape()
  var i883 = data
  i882.enabled = !!i883[0]
  i882.shapeType = i883[1]
  i882.randomDirectionAmount = i883[2]
  i882.sphericalDirectionAmount = i883[3]
  i882.randomPositionAmount = i883[4]
  i882.alignToDirection = !!i883[5]
  i882.radius = i883[6]
  i882.radiusMode = i883[7]
  i882.radiusSpread = i883[8]
  i882.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[9], i882.radiusSpeed)
  i882.radiusThickness = i883[10]
  i882.angle = i883[11]
  i882.length = i883[12]
  i882.boxThickness = new pc.Vec3( i883[13], i883[14], i883[15] )
  i882.meshShapeType = i883[16]
  request.r(i883[17], i883[18], 0, i882, 'mesh')
  request.r(i883[19], i883[20], 0, i882, 'meshRenderer')
  request.r(i883[21], i883[22], 0, i882, 'skinnedMeshRenderer')
  i882.useMeshMaterialIndex = !!i883[23]
  i882.meshMaterialIndex = i883[24]
  i882.useMeshColors = !!i883[25]
  i882.normalOffset = i883[26]
  i882.arc = i883[27]
  i882.arcMode = i883[28]
  i882.arcSpread = i883[29]
  i882.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[30], i882.arcSpeed)
  i882.donutRadius = i883[31]
  i882.position = new pc.Vec3( i883[32], i883[33], i883[34] )
  i882.rotation = new pc.Vec3( i883[35], i883[36], i883[37] )
  i882.scale = new pc.Vec3( i883[38], i883[39], i883[40] )
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i884 = root || new pc.ParticleSystemSizeBySpeed()
  var i885 = data
  i884.enabled = !!i885[0]
  i884.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[1], i884.x)
  i884.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[2], i884.y)
  i884.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[3], i884.z)
  i884.separateAxes = !!i885[4]
  i884.range = new pc.Vec2( i885[5], i885[6] )
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i886 = root || new pc.ParticleSystemSizeOverLifetime()
  var i887 = data
  i886.enabled = !!i887[0]
  i886.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[1], i886.x)
  i886.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[2], i886.y)
  i886.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[3], i886.z)
  i886.separateAxes = !!i887[4]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i889 = data
  i888.enabled = !!i889[0]
  i888.mode = i889[1]
  i888.animation = i889[2]
  i888.numTilesX = i889[3]
  i888.numTilesY = i889[4]
  i888.useRandomRow = !!i889[5]
  i888.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[6], i888.frameOverTime)
  i888.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[7], i888.startFrame)
  i888.cycleCount = i889[8]
  i888.rowIndex = i889[9]
  i888.flipU = i889[10]
  i888.flipV = i889[11]
  i888.spriteCount = i889[12]
  var i891 = i889[13]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i888.sprites = i890
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i894 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i895 = data
  i894.enabled = !!i895[0]
  i894.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[1], i894.x)
  i894.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[2], i894.y)
  i894.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[3], i894.z)
  i894.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[4], i894.radial)
  i894.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[5], i894.speedModifier)
  i894.space = i895[6]
  i894.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[7], i894.orbitalX)
  i894.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[8], i894.orbitalY)
  i894.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[9], i894.orbitalZ)
  i894.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[10], i894.orbitalOffsetX)
  i894.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[11], i894.orbitalOffsetY)
  i894.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[12], i894.orbitalOffsetZ)
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i896 = root || new pc.ParticleSystemNoise()
  var i897 = data
  i896.enabled = !!i897[0]
  i896.separateAxes = !!i897[1]
  i896.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[2], i896.strengthX)
  i896.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[3], i896.strengthY)
  i896.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[4], i896.strengthZ)
  i896.frequency = i897[5]
  i896.damping = !!i897[6]
  i896.octaveCount = i897[7]
  i896.octaveMultiplier = i897[8]
  i896.octaveScale = i897[9]
  i896.quality = i897[10]
  i896.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[11], i896.scrollSpeed)
  i896.scrollSpeedMultiplier = i897[12]
  i896.remapEnabled = !!i897[13]
  i896.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[14], i896.remapX)
  i896.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[15], i896.remapY)
  i896.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[16], i896.remapZ)
  i896.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[17], i896.positionAmount)
  i896.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[18], i896.rotationAmount)
  i896.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[19], i896.sizeAmount)
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i898 = root || new pc.ParticleSystemInheritVelocity()
  var i899 = data
  i898.enabled = !!i899[0]
  i898.mode = i899[1]
  i898.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[2], i898.curve)
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i900 = root || new pc.ParticleSystemForceOverLifetime()
  var i901 = data
  i900.enabled = !!i901[0]
  i900.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[1], i900.x)
  i900.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[2], i900.y)
  i900.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[3], i900.z)
  i900.space = i901[4]
  i900.randomized = !!i901[5]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i902 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i903 = data
  i902.enabled = !!i903[0]
  i902.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[1], i902.limit)
  i902.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[2], i902.limitX)
  i902.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[3], i902.limitY)
  i902.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[4], i902.limitZ)
  i902.dampen = i903[5]
  i902.separateAxes = !!i903[6]
  i902.space = i903[7]
  i902.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[8], i902.drag)
  i902.multiplyDragByParticleSize = !!i903[9]
  i902.multiplyDragByParticleVelocity = !!i903[10]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'mesh')
  i904.meshCount = i905[2]
  i904.activeVertexStreamsCount = i905[3]
  i904.alignment = i905[4]
  i904.renderMode = i905[5]
  i904.sortMode = i905[6]
  i904.lengthScale = i905[7]
  i904.velocityScale = i905[8]
  i904.cameraVelocityScale = i905[9]
  i904.normalDirection = i905[10]
  i904.sortingFudge = i905[11]
  i904.minParticleSize = i905[12]
  i904.maxParticleSize = i905[13]
  i904.pivot = new pc.Vec3( i905[14], i905[15], i905[16] )
  request.r(i905[17], i905[18], 0, i904, 'trailMaterial')
  i904.applyActiveColorSpace = !!i905[19]
  i904.enabled = !!i905[20]
  request.r(i905[21], i905[22], 0, i904, 'sharedMaterial')
  var i907 = i905[23]
  var i906 = []
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 2, i906, '')
  }
  i904.sharedMaterials = i906
  i904.receiveShadows = !!i905[24]
  i904.shadowCastingMode = i905[25]
  i904.sortingLayerID = i905[26]
  i904.sortingOrder = i905[27]
  i904.lightmapIndex = i905[28]
  i904.lightmapSceneIndex = i905[29]
  i904.lightmapScaleOffset = new pc.Vec4( i905[30], i905[31], i905[32], i905[33] )
  i904.lightProbeUsage = i905[34]
  i904.reflectionProbeUsage = i905[35]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i909 = data
  i908.type = i909[0]
  i908.color = new pc.Color(i909[1], i909[2], i909[3], i909[4])
  i908.cullingMask = i909[5]
  i908.intensity = i909[6]
  i908.range = i909[7]
  i908.spotAngle = i909[8]
  i908.shadows = i909[9]
  i908.shadowNormalBias = i909[10]
  i908.shadowBias = i909[11]
  i908.shadowStrength = i909[12]
  i908.shadowResolution = i909[13]
  i908.lightmapBakeType = i909[14]
  i908.renderMode = i909[15]
  request.r(i909[16], i909[17], 0, i908, 'cookie')
  i908.cookieSize = i909[18]
  i908.shadowNearPlane = i909[19]
  i908.occlusionMaskChannel = i909[20]
  i908.isBaked = !!i909[21]
  i908.mixedLightingMode = i909[22]
  i908.enabled = !!i909[23]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i911 = data
  i910.name = i911[0]
  i910.halfPrecision = !!i911[1]
  i910.useSimplification = !!i911[2]
  i910.useUInt32IndexFormat = !!i911[3]
  i910.vertexCount = i911[4]
  i910.aabb = i911[5]
  var i913 = i911[6]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( !!i913[i + 0] );
  }
  i910.streams = i912
  i910.vertices = i911[7]
  var i915 = i911[8]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i915[i + 0]) );
  }
  i910.subMeshes = i914
  var i917 = i911[9]
  var i916 = []
  for(var i = 0; i < i917.length; i += 16) {
    i916.push( new pc.Mat4().setData(i917[i + 0], i917[i + 1], i917[i + 2], i917[i + 3],  i917[i + 4], i917[i + 5], i917[i + 6], i917[i + 7],  i917[i + 8], i917[i + 9], i917[i + 10], i917[i + 11],  i917[i + 12], i917[i + 13], i917[i + 14], i917[i + 15]) );
  }
  i910.bindposes = i916
  var i919 = i911[10]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i919[i + 0]) );
  }
  i910.blendShapes = i918
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i925 = data
  i924.triangles = i925[0]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i931 = data
  i930.name = i931[0]
  var i933 = i931[1]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i933[i + 0]) );
  }
  i930.frames = i932
  return i930
}

Deserializers["BubbleThreeSlot"] = function (request, data, root) {
  var i934 = root || request.c( 'BubbleThreeSlot' )
  var i935 = data
  i934.layoutCenter = new pc.Vec2( i935[0], i935[1] )
  i934.horizontalOffset = i935[2]
  i934.verticalOffset = i935[3]
  i934.currentConfig = request.d('BubbleConfig', i935[4], i934.currentConfig)
  var i937 = i935[5]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 1, i936, '')
  }
  i934.birds = i936
  request.r(i935[6], i935[7], 0, i934, 'birdParent')
  i934.refillPopDuration = i935[8]
  i934.refillMoveDuration = i935[9]
  i934.clipBirdsToCircle = !!i935[10]
  return i934
}

Deserializers["BubbleFourSlot"] = function (request, data, root) {
  var i938 = root || request.c( 'BubbleFourSlot' )
  var i939 = data
  i938.layoutCenter = new pc.Vec2( i939[0], i939[1] )
  i938.horizontalOffset = i939[2]
  i938.verticalOffset = i939[3]
  i938.currentConfig = request.d('BubbleConfig', i939[4], i938.currentConfig)
  var i941 = i939[5]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 1, i940, '')
  }
  i938.birds = i940
  request.r(i939[6], i939[7], 0, i938, 'birdParent')
  i938.refillPopDuration = i939[8]
  i938.refillMoveDuration = i939[9]
  i938.clipBirdsToCircle = !!i939[10]
  return i938
}

Deserializers["BubbleFiveSlot"] = function (request, data, root) {
  var i942 = root || request.c( 'BubbleFiveSlot' )
  var i943 = data
  i942.layoutCenter = new pc.Vec2( i943[0], i943[1] )
  i942.horizontalOffset = i943[2]
  i942.verticalOffset = i943[3]
  i942.currentConfig = request.d('BubbleConfig', i943[4], i942.currentConfig)
  var i945 = i943[5]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 1, i944, '')
  }
  i942.birds = i944
  request.r(i943[6], i943[7], 0, i942, 'birdParent')
  i942.refillPopDuration = i943[8]
  i942.refillMoveDuration = i943[9]
  i942.clipBirdsToCircle = !!i943[10]
  return i942
}

Deserializers["FrozenNestObstacle"] = function (request, data, root) {
  var i946 = root || request.c( 'FrozenNestObstacle' )
  var i947 = data
  i946.layers = i947[0]
  i946.touchTolerance = i947[1]
  i946.blockedMessage = i947[2]
  i946.overlayPart = i947[3]
  i946.layerTextPart = i947[4]
  i946.minAlpha = i947[5]
  return i946
}

Deserializers["LockedNestObstacle"] = function (request, data, root) {
  var i948 = root || request.c( 'LockedNestObstacle' )
  var i949 = data
  i948.blockedMessage = i949[0]
  request.r(i949[1], i949[2], 0, i948, 'flyingKeyPrefab')
  i948.keyFlyDuration = i949[3]
  i948.keyArcHeight = i949[4]
  i948.keySortingOffset = i949[5]
  i948.chainPart = i949[6]
  i948.lockPart = i949[7]
  i948.countTextPart = i949[8]
  return i948
}

Deserializers["KeyNestObstacle"] = function (request, data, root) {
  var i950 = root || request.c( 'KeyNestObstacle' )
  var i951 = data
  i950.keyPart = i951[0]
  return i950
}

Deserializers["HiddenNestObstacle"] = function (request, data, root) {
  var i952 = root || request.c( 'HiddenNestObstacle' )
  var i953 = data
  i952.blockedMessage = i953[0]
  i952.bottomTolerance = i953[1]
  i952.settleTime = i953[2]
  i952.revealDuration = i953[3]
  i952.coverPart = i953[4]
  return i952
}

Deserializers["StoneNestObstacle"] = function (request, data, root) {
  var i954 = root || request.c( 'StoneNestObstacle' )
  var i955 = data
  i954.stonePart = i955[0]
  var i957 = i955[1]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( i957[i + 0] );
  }
  i954.hiddenParts = i956
  i954.keepUpright = !!i955[2]
  i954.stoneMass = i955[3]
  return i954
}

Deserializers["BigNestObstacle"] = function (request, data, root) {
  var i960 = root || request.c( 'BigNestObstacle' )
  var i961 = data
  i960.countTextPart = i961[0]
  return i960
}

Deserializers["HiddenBirdObstacle"] = function (request, data, root) {
  var i962 = root || request.c( 'HiddenBirdObstacle' )
  var i963 = data
  i962.overlayPart = i963[0]
  i962.revealDuration = i963[1]
  return i962
}

Deserializers["BindBirdObstacle"] = function (request, data, root) {
  var i964 = root || request.c( 'BindBirdObstacle' )
  var i965 = data
  i964.overlayPart = i965[0]
  i964.sortingOffset = i965[1]
  i964.clearDuration = i965[2]
  return i964
}

Deserializers["IceBirdObstacle"] = function (request, data, root) {
  var i966 = root || request.c( 'IceBirdObstacle' )
  var i967 = data
  i966.blockedMessage = i967[0]
  i966.overlayPart = i967[1]
  i966.textPart = i967[2]
  return i966
}

Deserializers["TargetNestObstacle"] = function (request, data, root) {
  var i968 = root || request.c( 'TargetNestObstacle' )
  var i969 = data
  i968.blockedMessage = i969[0]
  i968.revealDuration = i969[1]
  i968.overlayPart = i969[2]
  i968.iconPart = i969[3]
  return i968
}

Deserializers["Bird"] = function (request, data, root) {
  var i970 = root || request.c( 'Bird' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'Content')
  var i973 = i971[2]
  var i972 = []
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 2, i972, '')
  }
  i970.trailParticles = i972
  request.r(i971[3], i971[4], 0, i970, '_skeletalAnimation')
  i970._birdData = request.d('BirdData', i971[5], i970._birdData)
  i970._moveDuration = i971[6]
  i970._slotScale = i971[7]
  i970._flightSpeed = i971[8]
  i970._flightJumpPower = i971[9]
  i970._flightJumpPowerPerUnit = i971[10]
  i970._sourceFacesRight = !!i971[11]
  i970._flightFacingDeadZone = i971[12]
  i970._landContactFallbackDelay = i971[13]
  request.r(i971[14], i971[15], 0, i970, '_collider')
  request.r(i971[16], i971[17], 0, i970, '_skeletalRenderer')
  i970._idleUpdateFps = i971[18]
  i970._freezeSpineInBubble = !!i971[19]
  return i970
}

Deserializers["BirdData"] = function (request, data, root) {
  var i976 = root || request.c( 'BirdData' )
  var i977 = data
  i976.birdType = i977[0]
  i976.birdId = i977[1]
  request.r(i977[2], i977[3], 0, i976, 'spriteIcon')
  request.r(i977[4], i977[5], 0, i976, 'skeletonDataAsset')
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i979 = data
  i978.usedByComposite = !!i979[0]
  i978.autoTiling = !!i979[1]
  i978.size = new pc.Vec2( i979[2], i979[3] )
  i978.edgeRadius = i979[4]
  i978.enabled = !!i979[5]
  i978.isTrigger = !!i979[6]
  i978.usedByEffector = !!i979[7]
  i978.density = i979[8]
  i978.offset = new pc.Vec2( i979[9], i979[10] )
  request.r(i979[11], i979[12], 0, i978, 'material')
  return i978
}

Deserializers["BirdParts"] = function (request, data, root) {
  var i980 = root || request.c( 'BirdParts' )
  var i981 = data
  var i983 = i981[0]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('BirdParts+Entry', i983[i + 0]) );
  }
  i980.parts = i982
  return i980
}

Deserializers["BirdParts+Entry"] = function (request, data, root) {
  var i986 = root || request.c( 'BirdParts+Entry' )
  var i987 = data
  i986.key = i987[0]
  request.r(i987[1], i987[2], 0, i986, 'target')
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'sharedMesh')
  return i988
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i990 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i991 = data
  i990.loop = !!i991[0]
  i990.timeScale = i991[1]
  request.r(i991[2], i991[3], 0, i990, 'skeletonDataAsset')
  i990.initialSkinName = i991[4]
  i990.fixPrefabOverrideViaMeshFilter = i991[5]
  i990.initialFlipX = !!i991[6]
  i990.initialFlipY = !!i991[7]
  i990.updateWhenInvisible = i991[8]
  i990.zSpacing = i991[9]
  i990.useClipping = !!i991[10]
  i990.immutableTriangles = !!i991[11]
  i990.pmaVertexColors = !!i991[12]
  i990.clearStateOnDisable = !!i991[13]
  i990.tintBlack = !!i991[14]
  i990.singleSubmesh = !!i991[15]
  i990.fixDrawOrder = !!i991[16]
  i990.addNormals = !!i991[17]
  i990.calculateTangents = !!i991[18]
  i990.maskInteraction = i991[19]
  i990.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i991[20], i990.maskMaterials)
  i990.disableRenderingOnOverride = !!i991[21]
  i990.updateTiming = i991[22]
  i990.unscaledTime = !!i991[23]
  i990._animationName = i991[24]
  var i993 = i991[25]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( i993[i + 0] );
  }
  i990.separatorSlotNames = i992
  i990.physicsPositionInheritanceFactor = new pc.Vec2( i991[26], i991[27] )
  i990.physicsRotationInheritanceFactor = i991[28]
  request.r(i991[29], i991[30], 0, i990, 'physicsMovementRelativeTo')
  return i990
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i994 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i995 = data
  var i997 = i995[0]
  var i996 = []
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 2, i996, '')
  }
  i994.materialsMaskDisabled = i996
  var i999 = i995[1]
  var i998 = []
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 2, i998, '')
  }
  i994.materialsInsideMask = i998
  var i1001 = i995[2]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 2, i1000, '')
  }
  i994.materialsOutsideMask = i1000
  return i994
}

Deserializers["MagnetNestFx"] = function (request, data, root) {
  var i1004 = root || request.c( 'MagnetNestFx' )
  var i1005 = data
  i1004.appearDuration = i1005[0]
  i1004.startScaleMultiplier = i1005[1]
  i1004.endScaleMultiplier = i1005[2]
  i1004.vanishDuration = i1005[3]
  return i1004
}

Deserializers["ShuffleFX"] = function (request, data, root) {
  var i1006 = root || request.c( 'ShuffleFX' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'fan')
  request.r(i1007[2], i1007[3], 0, i1006, 'fan_spin')
  i1006.appearDuration = i1007[4]
  i1006.spinDuration = i1007[5]
  i1006.disappearDuration = i1007[6]
  i1006.totalSpinAngle = i1007[7]
  i1006.blurThreshold = i1007[8]
  i1006.wobbleAngle = i1007[9]
  i1006.wobbleOffset = i1007[10]
  i1006.wobbleSpeed = i1007[11]
  i1006.sortingOrderOffset = i1007[12]
  return i1006
}

Deserializers["ParticlesBase"] = function (request, data, root) {
  var i1008 = root || request.c( 'ParticlesBase' )
  var i1009 = data
  i1008.effectType = i1009[0]
  request.r(i1009[1], i1009[2], 0, i1008, 'particles')
  var i1011 = i1009[3]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i1008.allParticles = i1010
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1013 = data
  i1012.name = i1013[0]
  i1012.atlasId = i1013[1]
  i1012.mipmapCount = i1013[2]
  i1012.hdr = !!i1013[3]
  i1012.size = i1013[4]
  i1012.anisoLevel = i1013[5]
  i1012.filterMode = i1013[6]
  var i1015 = i1013[7]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 4) {
    i1014.push( UnityEngine.Rect.MinMaxRect(i1015[i + 0], i1015[i + 1], i1015[i + 2], i1015[i + 3]) );
  }
  i1012.rects = i1014
  i1012.wrapU = i1013[8]
  i1012.wrapV = i1013[9]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1019 = data
  i1018.name = i1019[0]
  i1018.index = i1019[1]
  i1018.startup = !!i1019[2]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1021 = data
  i1020.aspect = i1021[0]
  i1020.orthographic = !!i1021[1]
  i1020.orthographicSize = i1021[2]
  i1020.backgroundColor = new pc.Color(i1021[3], i1021[4], i1021[5], i1021[6])
  i1020.nearClipPlane = i1021[7]
  i1020.farClipPlane = i1021[8]
  i1020.fieldOfView = i1021[9]
  i1020.depth = i1021[10]
  i1020.clearFlags = i1021[11]
  i1020.cullingMask = i1021[12]
  i1020.rect = i1021[13]
  request.r(i1021[14], i1021[15], 0, i1020, 'targetTexture')
  i1020.usePhysicalProperties = !!i1021[16]
  i1020.focalLength = i1021[17]
  i1020.sensorSize = new pc.Vec2( i1021[18], i1021[19] )
  i1020.lensShift = new pc.Vec2( i1021[20], i1021[21] )
  i1020.gateFit = i1021[22]
  i1020.commandBufferCount = i1021[23]
  i1020.cameraType = i1021[24]
  i1020.enabled = !!i1021[25]
  return i1020
}

Deserializers["BoardManager"] = function (request, data, root) {
  var i1022 = root || request.c( 'BoardManager' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('BubbleBase')))
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 1, i1024, '')
  }
  i1022.bubbleActive = i1024
  var i1027 = i1023[1]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 2) {
  request.r(i1027[i + 0], i1027[i + 1], 2, i1026, '')
  }
  i1022._bubblePrefabs = i1026
  var i1029 = i1023[2]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 2) {
  request.r(i1029[i + 0], i1029[i + 1], 2, i1028, '')
  }
  i1022._spawnPoints = i1028
  request.r(i1023[3], i1023[4], 0, i1022, '_waterSurface')
  request.r(i1023[5], i1023[6], 0, i1022, '_bubbleParent')
  request.r(i1023[7], i1023[8], 0, i1022, '_magnetGatherPoint')
  i1022._surfaceTolerance = i1023[9]
  request.r(i1023[10], i1023[11], 0, i1022, '_wallsParent')
  request.r(i1023[12], i1023[13], 0, i1022, '_cloude')
  request.r(i1023[14], i1023[15], 0, i1022, '_bottomCollider')
  request.r(i1023[16], i1023[17], 0, i1022, '_alignmentCamera')
  i1022._horizontalSpawnJitter = i1023[18]
  i1022._inwardImpulseMin = i1023[19]
  i1022._inwardImpulseMax = i1023[20]
  i1022._initialSpawnCount = i1023[21]
  i1022._initialSpawnInterval = i1023[22]
  i1022._checkInterval = i1023[23]
  i1022._spawnInterval = i1023[24]
  i1022._deadlockCheckDelay = i1023[25]
  i1022._settleSpeed = i1023[26]
  i1022._settleTime = i1023[27]
  i1022._settleTimeout = i1023[28]
  request.r(i1023[29], i1023[30], 0, i1022, '_boxBird')
  var i1031 = i1023[31]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 2) {
  request.r(i1031[i + 0], i1031[i + 1], 2, i1030, '')
  }
  i1022._SpriteBoxBirds = i1030
  return i1022
}

Deserializers["TopContainer"] = function (request, data, root) {
  var i1038 = root || request.c( 'TopContainer' )
  var i1039 = data
  i1038.animatingCount = i1039[0]
  request.r(i1039[1], i1039[2], 0, i1038, 'top')
  request.r(i1039[3], i1039[4], 0, i1038, 'dockContainer')
  request.r(i1039[5], i1039[6], 0, i1038, 'slotContainer')
  request.r(i1039[7], i1039[8], 0, i1038, '_countComplateText')
  request.r(i1039[9], i1039[10], 0, i1038, 'outsideBirdHolder')
  request.r(i1039[11], i1039[12], 0, i1038, 'fitCamera')
  i1038.referenceResolution = new pc.Vec2( i1039[13], i1039[14] )
  i1038.referenceOrthographicSize = i1039[15]
  i1038.cameraFitPadding = i1039[16]
  i1038.allowCameraFitUpscale = !!i1039[17]
  return i1038
}

Deserializers["DockContainer"] = function (request, data, root) {
  var i1040 = root || request.c( 'DockContainer' )
  var i1041 = data
  i1040.dockCount = i1041[0]
  i1040.activeOrderCount = i1041[1]
  var i1043 = i1041[2]
  var i1042 = new (System.Collections.Generic.List$1(Bridge.ns('BirdDock')))
  for(var i = 0; i < i1043.length; i += 2) {
  request.r(i1043[i + 0], i1043[i + 1], 1, i1042, '')
  }
  i1040.dockSlot = i1042
  request.r(i1041[3], i1041[4], 0, i1040, 'tileDockPrefab')
  return i1040
}

Deserializers["TimeNestController"] = function (request, data, root) {
  var i1046 = root || request.c( 'TimeNestController' )
  var i1047 = data
  return i1046
}

Deserializers["BirdDock"] = function (request, data, root) {
  var i1048 = root || request.c( 'BirdDock' )
  var i1049 = data
  i1048.tileType = i1049[0]
  i1048.birdId = i1049[1]
  i1048.isLock = !!i1049[2]
  i1048.isAnim = !!i1049[3]
  request.r(i1049[4], i1049[5], 0, i1048, 'visual')
  var i1051 = i1049[6]
  var i1050 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1051.length; i += 2) {
  request.r(i1051[i + 0], i1051[i + 1], 1, i1050, '')
  }
  i1048.points = i1050
  request.r(i1049[7], i1049[8], 0, i1048, '_targetSprite')
  request.r(i1049[9], i1049[10], 0, i1048, '_amountText')
  request.r(i1049[11], i1049[12], 0, i1048, 'addUI')
  request.r(i1049[13], i1049[14], 0, i1048, 'orderUI')
  i1048.Max = i1049[15]
  return i1048
}

Deserializers["DockCountdown"] = function (request, data, root) {
  var i1054 = root || request.c( 'DockCountdown' )
  var i1055 = data
  request.r(i1055[0], i1055[1], 0, i1054, 'countdownRoot')
  request.r(i1055[2], i1055[3], 0, i1054, 'timeText')
  i1054.warningThreshold = i1055[4]
  i1054.warningColor = new pc.Color(i1055[5], i1055[6], i1055[7], i1055[8])
  var i1057 = i1055[9]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 2, i1056, '')
  }
  i1054.warningObjects = i1056
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i1061 = data
  i1060.frontSortingLayerID = i1061[0]
  i1060.frontSortingOrder = i1061[1]
  i1060.backSortingLayerID = i1061[2]
  i1060.backSortingOrder = i1061[3]
  i1060.alphaCutoff = i1061[4]
  request.r(i1061[5], i1061[6], 0, i1060, 'sprite')
  i1060.tileMode = i1061[7]
  i1060.isCustomRangeActive = !!i1061[8]
  i1060.spriteSortPoint = i1061[9]
  i1060.enabled = !!i1061[10]
  request.r(i1061[11], i1061[12], 0, i1060, 'sharedMaterial')
  var i1063 = i1061[13]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 2) {
  request.r(i1063[i + 0], i1063[i + 1], 2, i1062, '')
  }
  i1060.sharedMaterials = i1062
  i1060.receiveShadows = !!i1061[14]
  i1060.shadowCastingMode = i1061[15]
  i1060.sortingLayerID = i1061[16]
  i1060.sortingOrder = i1061[17]
  i1060.lightmapIndex = i1061[18]
  i1060.lightmapSceneIndex = i1061[19]
  i1060.lightmapScaleOffset = new pc.Vec4( i1061[20], i1061[21], i1061[22], i1061[23] )
  i1060.lightProbeUsage = i1061[24]
  i1060.reflectionProbeUsage = i1061[25]
  return i1060
}

Deserializers["SlotContainer"] = function (request, data, root) {
  var i1064 = root || request.c( 'SlotContainer' )
  var i1065 = data
  var i1067 = i1065[0]
  var i1066 = new (System.Collections.Generic.List$1(Bridge.ns('BirdSlot')))
  for(var i = 0; i < i1067.length; i += 2) {
  request.r(i1067[i + 0], i1067[i + 1], 1, i1066, '')
  }
  i1064.tileSlots = i1066
  request.r(i1065[1], i1065[2], 0, i1064, 'ExtraSlotPos')
  request.r(i1065[3], i1065[4], 0, i1064, 'tile')
  request.r(i1065[5], i1065[6], 0, i1064, 'branchWave')
  return i1064
}

Deserializers["BranchWave"] = function (request, data, root) {
  var i1070 = root || request.c( 'BranchWave' )
  var i1071 = data
  i1070.amplitude = i1071[0]
  i1070.speed = i1071[1]
  i1070.frequency = i1071[2]
  i1070.damping = i1071[3]
  i1070.falloff = i1071[4]
  i1070.riderTiltScale = i1071[5]
  return i1070
}

Deserializers["BirdSlot"] = function (request, data, root) {
  var i1072 = root || request.c( 'BirdSlot' )
  var i1073 = data
  i1072.isAnim = !!i1073[0]
  request.r(i1073[1], i1073[2], 0, i1072, 'warningSprite')
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1075 = data
  i1074.sortingLayerIndex = i1075[0]
  i1074.sortingOrder = i1075[1]
  i1074.sortingLayerName = i1075[2]
  i1074.enabled = !!i1075[3]
  return i1074
}

Deserializers["OutsideBirdHolder"] = function (request, data, root) {
  var i1076 = root || request.c( 'OutsideBirdHolder' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'm_TxtCount')
  request.r(i1077[2], i1077[3], 0, i1076, 'm_Canvas')
  request.r(i1077[4], i1077[5], 0, i1076, 'm_ObjContent')
  request.r(i1077[6], i1077[7], 0, i1076, 'm_OutsideBirdPrefab')
  request.r(i1077[8], i1077[9], 0, i1076, 'm_NestVisual')
  i1076.m_ShakeDuration = i1077[10]
  i1076.m_ShakeScale = i1077[11]
  i1076.m_ShakeRotation = i1077[12]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1079 = data
  i1078.planeDistance = i1079[0]
  i1078.referencePixelsPerUnit = i1079[1]
  i1078.isFallbackOverlay = !!i1079[2]
  i1078.renderMode = i1079[3]
  i1078.renderOrder = i1079[4]
  i1078.sortingLayerName = i1079[5]
  i1078.sortingOrder = i1079[6]
  i1078.scaleFactor = i1079[7]
  request.r(i1079[8], i1079[9], 0, i1078, 'worldCamera')
  i1078.overrideSorting = !!i1079[10]
  i1078.pixelPerfect = !!i1079[11]
  i1078.targetDisplay = i1079[12]
  i1078.overridePixelPerfect = !!i1079[13]
  i1078.enabled = !!i1079[14]
  return i1078
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i1080 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i1081 = data
  i1080.m_StartCorner = i1081[0]
  i1080.m_StartAxis = i1081[1]
  i1080.m_CellSize = new pc.Vec2( i1081[2], i1081[3] )
  i1080.m_Spacing = new pc.Vec2( i1081[4], i1081[5] )
  i1080.m_Constraint = i1081[6]
  i1080.m_ConstraintCount = i1081[7]
  i1080.m_Padding = UnityEngine.RectOffset.FromPaddings(i1081[8], i1081[9], i1081[10], i1081[11])
  i1080.m_ChildAlignment = i1081[12]
  return i1080
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1082 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1083 = data
  i1082.m_HorizontalFit = i1083[0]
  i1082.m_VerticalFit = i1083[1]
  return i1082
}

Deserializers["SpriteFitScreenHeight"] = function (request, data, root) {
  var i1084 = root || request.c( 'SpriteFitScreenHeight' )
  var i1085 = data
  request.r(i1085[0], i1085[1], 0, i1084, 'm_Camera')
  i1084.m_Overscan = i1085[2]
  return i1084
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i1086 = root || request.c( 'LevelManager' )
  var i1087 = data
  request.r(i1087[0], i1087[1], 0, i1086, 'birdPrefab')
  request.r(i1087[2], i1087[3], 0, i1086, 'birdDataSO')
  request.r(i1087[4], i1087[5], 0, i1086, 'obstacleConfigSO')
  request.r(i1087[6], i1087[7], 0, i1086, 'boardManager')
  request.r(i1087[8], i1087[9], 0, i1086, 'levelDifficultyFile')
  i1086.totalLevelCount = i1087[10]
  var i1089 = i1087[11]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('LevelManager+LevelSet', i1089[i + 0]) );
  }
  i1086.levelSets = i1088
  return i1086
}

Deserializers["LevelManager+LevelSet"] = function (request, data, root) {
  var i1092 = root || request.c( 'LevelManager+LevelSet' )
  var i1093 = data
  i1092.name = i1093[0]
  request.r(i1093[1], i1093[2], 0, i1092, 'levelTableFile')
  var i1095 = i1093[3]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 2) {
  request.r(i1095[i + 0], i1095[i + 1], 2, i1094, '')
  }
  i1092.bubbleFiles = i1094
  return i1092
}

Deserializers["ControllerManager"] = function (request, data, root) {
  var i1098 = root || request.c( 'ControllerManager' )
  var i1099 = data
  i1098.layerMask = UnityEngine.LayerMask.FromIntegerValue( i1099[0] )
  i1098.layerMaskBlocker = UnityEngine.LayerMask.FromIntegerValue( i1099[1] )
  i1098.layerDockMask = UnityEngine.LayerMask.FromIntegerValue( i1099[2] )
  return i1098
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'm_FirstSelected')
  i1100.m_sendNavigationEvents = !!i1101[2]
  i1100.m_DragThreshold = i1101[3]
  return i1100
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1102 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1103 = data
  i1102.m_HorizontalAxis = i1103[0]
  i1102.m_VerticalAxis = i1103[1]
  i1102.m_SubmitButton = i1103[2]
  i1102.m_CancelButton = i1103[3]
  i1102.m_InputActionsPerSecond = i1103[4]
  i1102.m_RepeatDelay = i1103[5]
  i1102.m_ForceModuleActive = !!i1103[6]
  i1102.m_SendPointerHoverToParent = !!i1103[7]
  return i1102
}

Deserializers["BoosterManager"] = function (request, data, root) {
  var i1104 = root || request.c( 'BoosterManager' )
  var i1105 = data
  i1104.OnGlobalStateChanged = request.d('System.Action', i1105[0], i1104.OnGlobalStateChanged)
  request.r(i1105[1], i1105[2], 0, i1104, 'MagnetNestFxPrefab')
  request.r(i1105[3], i1105[4], 0, i1104, '_shuffleFXPrefab')
  request.r(i1105[5], i1105[6], 0, i1104, 'ClearHitFxPrefab')
  i1104.clearHitFxLifetime = i1105[7]
  i1104.shuffleSuckDuration = i1105[8]
  i1104.shuffleSpreadDuration = i1105[9]
  i1104.shuffleStagger = i1105[10]
  i1104.shuffleBirdSortingOrder = i1105[11]
  request.r(i1105[12], i1105[13], 0, i1104, 'boosterConfig')
  return i1104
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1106 = root || request.c( 'System.Action' )
  var i1107 = data
  return i1106
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1108 = root || request.c( 'GameManager' )
  var i1109 = data
  i1108.currentGameState = i1109[0]
  i1108.isTestMode = !!i1109[1]
  return i1108
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i1110 = root || request.c( 'SoundManager' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'musicSource')
  i1110.resultMusicVolumeMultiplier = i1111[2]
  i1110.ingameMusicVolume = i1111[3]
  request.r(i1111[4], i1111[5], 0, i1110, 'parentSFX')
  i1110.poolSize = i1111[6]
  i1110.maxLoopingPerClip = i1111[7]
  var i1113 = i1111[8]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i1113.length; i += 2) {
  request.r(i1113[i + 0], i1113[i + 1], 1, i1112, '')
  }
  i1110.musicClips = i1112
  var i1115 = i1111[9]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i1115.length; i += 2) {
  request.r(i1115[i + 0], i1115[i + 1], 1, i1114, '')
  }
  i1110.sfxClips = i1114
  i1110.importantVolume = i1111[10]
  i1110.normalVolume = i1111[11]
  i1110.minorVolume = i1111[12]
  i1110.smallVolume = i1111[13]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'clip')
  request.r(i1119[2], i1119[3], 0, i1118, 'outputAudioMixerGroup')
  i1118.playOnAwake = !!i1119[4]
  i1118.loop = !!i1119[5]
  i1118.time = i1119[6]
  i1118.volume = i1119[7]
  i1118.pitch = i1119[8]
  i1118.enabled = !!i1119[9]
  return i1118
}

Deserializers["ParticlesManager"] = function (request, data, root) {
  var i1120 = root || request.c( 'ParticlesManager' )
  var i1121 = data
  request.r(i1121[0], i1121[1], 0, i1120, 'set')
  request.r(i1121[2], i1121[3], 0, i1120, 'target')
  request.r(i1121[4], i1121[5], 0, i1120, 'startTarget')
  var i1123 = i1121[6]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 2) {
  request.r(i1123[i + 0], i1123[i + 1], 2, i1122, '')
  }
  i1120.particleEffectData = i1122
  request.r(i1121[7], i1121[8], 0, i1120, 'coinPrefab')
  i1120.spreadRange = i1121[9]
  i1120.spreadRangeOnSum = i1121[10]
  i1120.moveDuration = i1121[11]
  i1120.magMut = i1121[12]
  i1120.toptopOGScale = i1121[13]
  i1120.sum = i1121[14]
  return i1120
}

Deserializers["GameData"] = function (request, data, root) {
  var i1126 = root || request.c( 'GameData' )
  var i1127 = data
  var i1129 = i1127[0]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 4) {
    i1128.push( new pc.Color(i1129[i + 0], i1129[i + 1], i1129[i + 2], i1129[i + 3]) );
  }
  i1126.birdColors = i1128
  return i1126
}

Deserializers["ComboManager"] = function (request, data, root) {
  var i1132 = root || request.c( 'ComboManager' )
  var i1133 = data
  i1132.OnTimerComplete = request.d('System.Action', i1133[0], i1132.OnTimerComplete)
  i1132.comboTime = i1133[1]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1135 = data
  i1134.ambientIntensity = i1135[0]
  i1134.reflectionIntensity = i1135[1]
  i1134.ambientMode = i1135[2]
  i1134.ambientLight = new pc.Color(i1135[3], i1135[4], i1135[5], i1135[6])
  i1134.ambientSkyColor = new pc.Color(i1135[7], i1135[8], i1135[9], i1135[10])
  i1134.ambientGroundColor = new pc.Color(i1135[11], i1135[12], i1135[13], i1135[14])
  i1134.ambientEquatorColor = new pc.Color(i1135[15], i1135[16], i1135[17], i1135[18])
  i1134.fogColor = new pc.Color(i1135[19], i1135[20], i1135[21], i1135[22])
  i1134.fogEndDistance = i1135[23]
  i1134.fogStartDistance = i1135[24]
  i1134.fogDensity = i1135[25]
  i1134.fog = !!i1135[26]
  request.r(i1135[27], i1135[28], 0, i1134, 'skybox')
  i1134.fogMode = i1135[29]
  var i1137 = i1135[30]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1137[i + 0]) );
  }
  i1134.lightmaps = i1136
  i1134.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1135[31], i1134.lightProbes)
  i1134.lightmapsMode = i1135[32]
  i1134.mixedBakeMode = i1135[33]
  i1134.environmentLightingMode = i1135[34]
  i1134.ambientProbe = new pc.SphericalHarmonicsL2(i1135[35])
  request.r(i1135[36], i1135[37], 0, i1134, 'customReflection')
  request.r(i1135[38], i1135[39], 0, i1134, 'defaultReflection')
  i1134.defaultReflectionMode = i1135[40]
  i1134.defaultReflectionResolution = i1135[41]
  i1134.sunLightObjectId = i1135[42]
  i1134.pixelLightCount = i1135[43]
  i1134.defaultReflectionHDR = !!i1135[44]
  i1134.hasLightDataAsset = !!i1135[45]
  i1134.hasManualGenerate = !!i1135[46]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1141 = data
  request.r(i1141[0], i1141[1], 0, i1140, 'lightmapColor')
  request.r(i1141[2], i1141[3], 0, i1140, 'lightmapDirection')
  request.r(i1141[4], i1141[5], 0, i1140, 'shadowMask')
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1142 = root || new UnityEngine.LightProbes()
  var i1143 = data
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i1151 = data
  i1150.name = i1151[0]
  i1150.bounciness = i1151[1]
  i1150.friction = i1151[2]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1153 = data
  var i1155 = i1153[0]
  var i1154 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1155[i + 0]));
  }
  i1152.ShaderCompilationErrors = i1154
  i1152.name = i1153[1]
  i1152.guid = i1153[2]
  var i1157 = i1153[3]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( i1157[i + 0] );
  }
  i1152.shaderDefinedKeywords = i1156
  var i1159 = i1153[4]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1159[i + 0]) );
  }
  i1152.passes = i1158
  var i1161 = i1153[5]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1161[i + 0]) );
  }
  i1152.usePasses = i1160
  var i1163 = i1153[6]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1163[i + 0]) );
  }
  i1152.defaultParameterValues = i1162
  request.r(i1153[7], i1153[8], 0, i1152, 'unityFallbackShader')
  i1152.readDepth = !!i1153[9]
  i1152.hasDepthOnlyPass = !!i1153[10]
  i1152.isCreatedByShaderGraph = !!i1153[11]
  i1152.disableBatching = !!i1153[12]
  i1152.compiled = !!i1153[13]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1167 = data
  i1166.shaderName = i1167[0]
  i1166.errorMessage = i1167[1]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1170 = root || new pc.UnityShaderPass()
  var i1171 = data
  i1170.id = i1171[0]
  i1170.subShaderIndex = i1171[1]
  i1170.name = i1171[2]
  i1170.passType = i1171[3]
  i1170.grabPassTextureName = i1171[4]
  i1170.usePass = !!i1171[5]
  i1170.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1171[6], i1170.zTest)
  i1170.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1171[7], i1170.zWrite)
  i1170.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1171[8], i1170.culling)
  i1170.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1171[9], i1170.blending)
  i1170.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1171[10], i1170.alphaBlending)
  i1170.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1171[11], i1170.colorWriteMask)
  i1170.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1171[12], i1170.offsetUnits)
  i1170.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1171[13], i1170.offsetFactor)
  i1170.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1171[14], i1170.stencilRef)
  i1170.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1171[15], i1170.stencilReadMask)
  i1170.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1171[16], i1170.stencilWriteMask)
  i1170.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1171[17], i1170.stencilOp)
  i1170.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1171[18], i1170.stencilOpFront)
  i1170.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1171[19], i1170.stencilOpBack)
  var i1173 = i1171[20]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1173[i + 0]) );
  }
  i1170.tags = i1172
  var i1175 = i1171[21]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( i1175[i + 0] );
  }
  i1170.passDefinedKeywords = i1174
  var i1177 = i1171[22]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1177[i + 0]) );
  }
  i1170.passDefinedKeywordGroups = i1176
  var i1179 = i1171[23]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1179[i + 0]) );
  }
  i1170.variants = i1178
  var i1181 = i1171[24]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1181[i + 0]) );
  }
  i1170.excludedVariants = i1180
  i1170.hasDepthReader = !!i1171[25]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1183 = data
  i1182.val = i1183[0]
  i1182.name = i1183[1]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1185 = data
  i1184.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1185[0], i1184.src)
  i1184.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1185[1], i1184.dst)
  i1184.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1185[2], i1184.op)
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1187 = data
  i1186.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1187[0], i1186.pass)
  i1186.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1187[1], i1186.fail)
  i1186.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1187[2], i1186.zFail)
  i1186.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1187[3], i1186.comp)
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1191 = data
  i1190.name = i1191[0]
  i1190.value = i1191[1]
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1195 = data
  var i1197 = i1195[0]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( i1197[i + 0] );
  }
  i1194.keywords = i1196
  i1194.hasDiscard = !!i1195[1]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1201 = data
  i1200.passId = i1201[0]
  i1200.subShaderIndex = i1201[1]
  var i1203 = i1201[2]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( i1203[i + 0] );
  }
  i1200.keywords = i1202
  i1200.vertexProgram = i1201[3]
  i1200.fragmentProgram = i1201[4]
  i1200.exportedForWebGl2 = !!i1201[5]
  i1200.readDepth = !!i1201[6]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1207 = data
  request.r(i1207[0], i1207[1], 0, i1206, 'shader')
  i1206.pass = i1207[2]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1211 = data
  i1210.name = i1211[0]
  i1210.type = i1211[1]
  i1210.value = new pc.Vec4( i1211[2], i1211[3], i1211[4], i1211[5] )
  i1210.textureValue = i1211[6]
  i1210.shaderPropertyFlag = i1211[7]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1213 = data
  i1212.name = i1213[0]
  request.r(i1213[1], i1213[2], 0, i1212, 'texture')
  i1212.aabb = i1213[3]
  i1212.vertices = i1213[4]
  i1212.triangles = i1213[5]
  i1212.textureRect = UnityEngine.Rect.MinMaxRect(i1213[6], i1213[7], i1213[8], i1213[9])
  i1212.packedRect = UnityEngine.Rect.MinMaxRect(i1213[10], i1213[11], i1213[12], i1213[13])
  i1212.border = new pc.Vec4( i1213[14], i1213[15], i1213[16], i1213[17] )
  i1212.transparency = i1213[18]
  i1212.bounds = i1213[19]
  i1212.pixelsPerUnit = i1213[20]
  i1212.textureWidth = i1213[21]
  i1212.textureHeight = i1213[22]
  i1212.nativeSize = new pc.Vec2( i1213[23], i1213[24] )
  i1212.pivot = new pc.Vec2( i1213[25], i1213[26] )
  i1212.textureRectOffset = new pc.Vec2( i1213[27], i1213[28] )
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1215 = data
  i1214.name = i1215[0]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1217 = data
  i1216.name = i1217[0]
  i1216.ascent = i1217[1]
  i1216.originalLineHeight = i1217[2]
  i1216.fontSize = i1217[3]
  var i1219 = i1217[4]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1219[i + 0]) );
  }
  i1216.characterInfo = i1218
  request.r(i1217[5], i1217[6], 0, i1216, 'texture')
  i1216.originalFontSize = i1217[7]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1223 = data
  i1222.index = i1223[0]
  i1222.advance = i1223[1]
  i1222.bearing = i1223[2]
  i1222.glyphWidth = i1223[3]
  i1222.glyphHeight = i1223[4]
  i1222.minX = i1223[5]
  i1222.maxX = i1223[6]
  i1222.minY = i1223[7]
  i1222.maxY = i1223[8]
  i1222.uvBottomLeftX = i1223[9]
  i1222.uvBottomLeftY = i1223[10]
  i1222.uvBottomRightX = i1223[11]
  i1222.uvBottomRightY = i1223[12]
  i1222.uvTopLeftX = i1223[13]
  i1222.uvTopLeftY = i1223[14]
  i1222.uvTopRightX = i1223[15]
  i1222.uvTopRightY = i1223[16]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1225 = data
  i1224.name = i1225[0]
  i1224.bytes64 = i1225[1]
  i1224.data = i1225[2]
  return i1224
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1227 = data
  request.r(i1227[0], i1227[1], 0, i1226, 'atlas')
  i1226.normalStyle = i1227[2]
  i1226.normalSpacingOffset = i1227[3]
  i1226.boldStyle = i1227[4]
  i1226.boldSpacing = i1227[5]
  i1226.italicStyle = i1227[6]
  i1226.tabSize = i1227[7]
  i1226.hashCode = i1227[8]
  request.r(i1227[9], i1227[10], 0, i1226, 'material')
  i1226.materialHashCode = i1227[11]
  i1226.m_Version = i1227[12]
  i1226.m_SourceFontFileGUID = i1227[13]
  request.r(i1227[14], i1227[15], 0, i1226, 'm_SourceFontFile_EditorRef')
  request.r(i1227[16], i1227[17], 0, i1226, 'm_SourceFontFile')
  i1226.m_AtlasPopulationMode = i1227[18]
  i1226.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1227[19], i1226.m_FaceInfo)
  var i1229 = i1227[20]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.add(request.d('UnityEngine.TextCore.Glyph', i1229[i + 0]));
  }
  i1226.m_GlyphTable = i1228
  var i1231 = i1227[21]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.add(request.d('TMPro.TMP_Character', i1231[i + 0]));
  }
  i1226.m_CharacterTable = i1230
  var i1233 = i1227[22]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 2) {
  request.r(i1233[i + 0], i1233[i + 1], 2, i1232, '')
  }
  i1226.m_AtlasTextures = i1232
  i1226.m_AtlasTextureIndex = i1227[23]
  i1226.m_IsMultiAtlasTexturesEnabled = !!i1227[24]
  i1226.m_ClearDynamicDataOnBuild = !!i1227[25]
  var i1235 = i1227[26]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.add(request.d('UnityEngine.TextCore.GlyphRect', i1235[i + 0]));
  }
  i1226.m_UsedGlyphRects = i1234
  var i1237 = i1227[27]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('UnityEngine.TextCore.GlyphRect', i1237[i + 0]));
  }
  i1226.m_FreeGlyphRects = i1236
  i1226.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1227[28], i1226.m_fontInfo)
  i1226.m_AtlasWidth = i1227[29]
  i1226.m_AtlasHeight = i1227[30]
  i1226.m_AtlasPadding = i1227[31]
  i1226.m_AtlasRenderMode = i1227[32]
  var i1239 = i1227[33]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.add(request.d('TMPro.TMP_Glyph', i1239[i + 0]));
  }
  i1226.m_glyphInfoList = i1238
  i1226.m_KerningTable = request.d('TMPro.KerningTable', i1227[34], i1226.m_KerningTable)
  i1226.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1227[35], i1226.m_FontFeatureTable)
  var i1241 = i1227[36]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1241.length; i += 2) {
  request.r(i1241[i + 0], i1241[i + 1], 1, i1240, '')
  }
  i1226.fallbackFontAssets = i1240
  var i1243 = i1227[37]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1243.length; i += 2) {
  request.r(i1243[i + 0], i1243[i + 1], 1, i1242, '')
  }
  i1226.m_FallbackFontAssetTable = i1242
  i1226.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1227[38], i1226.m_CreationSettings)
  var i1245 = i1227[39]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('TMPro.TMP_FontWeightPair', i1245[i + 0]) );
  }
  i1226.m_FontWeightTable = i1244
  var i1247 = i1227[40]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('TMPro.TMP_FontWeightPair', i1247[i + 0]) );
  }
  i1226.fontWeights = i1246
  return i1226
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1248 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1249 = data
  i1248.m_FaceIndex = i1249[0]
  i1248.m_FamilyName = i1249[1]
  i1248.m_StyleName = i1249[2]
  i1248.m_PointSize = i1249[3]
  i1248.m_Scale = i1249[4]
  i1248.m_UnitsPerEM = i1249[5]
  i1248.m_LineHeight = i1249[6]
  i1248.m_AscentLine = i1249[7]
  i1248.m_CapLine = i1249[8]
  i1248.m_MeanLine = i1249[9]
  i1248.m_Baseline = i1249[10]
  i1248.m_DescentLine = i1249[11]
  i1248.m_SuperscriptOffset = i1249[12]
  i1248.m_SuperscriptSize = i1249[13]
  i1248.m_SubscriptOffset = i1249[14]
  i1248.m_SubscriptSize = i1249[15]
  i1248.m_UnderlineOffset = i1249[16]
  i1248.m_UnderlineThickness = i1249[17]
  i1248.m_StrikethroughOffset = i1249[18]
  i1248.m_StrikethroughThickness = i1249[19]
  i1248.m_TabWidth = i1249[20]
  return i1248
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1252 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1253 = data
  i1252.m_Index = i1253[0]
  i1252.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1253[1], i1252.m_Metrics)
  i1252.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1253[2], i1252.m_GlyphRect)
  i1252.m_Scale = i1253[3]
  i1252.m_AtlasIndex = i1253[4]
  i1252.m_ClassDefinitionType = i1253[5]
  return i1252
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1254 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1255 = data
  i1254.m_Width = i1255[0]
  i1254.m_Height = i1255[1]
  i1254.m_HorizontalBearingX = i1255[2]
  i1254.m_HorizontalBearingY = i1255[3]
  i1254.m_HorizontalAdvance = i1255[4]
  return i1254
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1256 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1257 = data
  i1256.m_X = i1257[0]
  i1256.m_Y = i1257[1]
  i1256.m_Width = i1257[2]
  i1256.m_Height = i1257[3]
  return i1256
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.TMP_Character' )
  var i1261 = data
  i1260.m_ElementType = i1261[0]
  i1260.m_Unicode = i1261[1]
  i1260.m_GlyphIndex = i1261[2]
  i1260.m_Scale = i1261[3]
  return i1260
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1267 = data
  i1266.Name = i1267[0]
  i1266.PointSize = i1267[1]
  i1266.Scale = i1267[2]
  i1266.CharacterCount = i1267[3]
  i1266.LineHeight = i1267[4]
  i1266.Baseline = i1267[5]
  i1266.Ascender = i1267[6]
  i1266.CapHeight = i1267[7]
  i1266.Descender = i1267[8]
  i1266.CenterLine = i1267[9]
  i1266.SuperscriptOffset = i1267[10]
  i1266.SubscriptOffset = i1267[11]
  i1266.SubSize = i1267[12]
  i1266.Underline = i1267[13]
  i1266.UnderlineThickness = i1267[14]
  i1266.strikethrough = i1267[15]
  i1266.strikethroughThickness = i1267[16]
  i1266.TabWidth = i1267[17]
  i1266.Padding = i1267[18]
  i1266.AtlasWidth = i1267[19]
  i1266.AtlasHeight = i1267[20]
  return i1266
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1270 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1271 = data
  i1270.id = i1271[0]
  i1270.x = i1271[1]
  i1270.y = i1271[2]
  i1270.width = i1271[3]
  i1270.height = i1271[4]
  i1270.xOffset = i1271[5]
  i1270.yOffset = i1271[6]
  i1270.xAdvance = i1271[7]
  i1270.scale = i1271[8]
  return i1270
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.KerningTable' )
  var i1273 = data
  var i1275 = i1273[0]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.add(request.d('TMPro.KerningPair', i1275[i + 0]));
  }
  i1272.kerningPairs = i1274
  return i1272
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1278 = root || request.c( 'TMPro.KerningPair' )
  var i1279 = data
  i1278.xOffset = i1279[0]
  i1278.m_FirstGlyph = i1279[1]
  i1278.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1279[2], i1278.m_FirstGlyphAdjustments)
  i1278.m_SecondGlyph = i1279[3]
  i1278.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1279[4], i1278.m_SecondGlyphAdjustments)
  i1278.m_IgnoreSpacingAdjustments = !!i1279[5]
  return i1278
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1281 = data
  var i1283 = i1281[0]
  var i1282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1283[i + 0]));
  }
  i1280.m_GlyphPairAdjustmentRecords = i1282
  return i1280
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1287 = data
  i1286.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1287[0], i1286.m_FirstAdjustmentRecord)
  i1286.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1287[1], i1286.m_SecondAdjustmentRecord)
  i1286.m_FeatureLookupFlags = i1287[2]
  return i1286
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1288 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1289 = data
  i1288.m_GlyphIndex = i1289[0]
  i1288.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1289[1], i1288.m_GlyphValueRecord)
  return i1288
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1291 = data
  i1290.m_XPlacement = i1291[0]
  i1290.m_YPlacement = i1291[1]
  i1290.m_XAdvance = i1291[2]
  i1290.m_YAdvance = i1291[3]
  return i1290
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1295 = data
  i1294.sourceFontFileName = i1295[0]
  i1294.sourceFontFileGUID = i1295[1]
  i1294.pointSizeSamplingMode = i1295[2]
  i1294.pointSize = i1295[3]
  i1294.padding = i1295[4]
  i1294.packingMode = i1295[5]
  i1294.atlasWidth = i1295[6]
  i1294.atlasHeight = i1295[7]
  i1294.characterSetSelectionMode = i1295[8]
  i1294.characterSequence = i1295[9]
  i1294.referencedFontAssetGUID = i1295[10]
  i1294.referencedTextAssetGUID = i1295[11]
  i1294.fontStyle = i1295[12]
  i1294.fontStyleModifier = i1295[13]
  i1294.renderMode = i1295[14]
  i1294.includeFontFeatures = !!i1295[15]
  return i1294
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1299 = data
  request.r(i1299[0], i1299[1], 0, i1298, 'regularTypeface')
  request.r(i1299[2], i1299[3], 0, i1298, 'italicTypeface')
  return i1298
}

Deserializers["BirdDataSO"] = function (request, data, root) {
  var i1300 = root || request.c( 'BirdDataSO' )
  var i1301 = data
  var i1303 = i1301[0]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( request.d('BirdData', i1303[i + 0]) );
  }
  i1300.birds = i1302
  return i1300
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1306 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1307 = data
  var i1309 = i1307[0]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 2) {
  request.r(i1309[i + 0], i1309[i + 1], 2, i1308, '')
  }
  i1306.atlasAssets = i1308
  i1306.scale = i1307[1]
  request.r(i1307[2], i1307[3], 0, i1306, 'skeletonJSON')
  i1306.isUpgradingBlendModeMaterials = !!i1307[4]
  i1306.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1307[5], i1306.blendModeMaterials)
  var i1311 = i1307[6]
  var i1310 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1311.length; i += 2) {
  request.r(i1311[i + 0], i1311[i + 1], 1, i1310, '')
  }
  i1306.skeletonDataModifiers = i1310
  var i1313 = i1307[7]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( i1313[i + 0] );
  }
  i1306.fromAnimation = i1312
  var i1315 = i1307[8]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( i1315[i + 0] );
  }
  i1306.toAnimation = i1314
  i1306.duration = i1307[9]
  i1306.defaultMix = i1307[10]
  request.r(i1307[11], i1307[12], 0, i1306, 'controller')
  return i1306
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1318 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1319 = data
  i1318.applyAdditiveMaterial = !!i1319[0]
  var i1321 = i1319[1]
  var i1320 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1321[i + 0]));
  }
  i1318.additiveMaterials = i1320
  var i1323 = i1319[2]
  var i1322 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1323[i + 0]));
  }
  i1318.multiplyMaterials = i1322
  var i1325 = i1319[3]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1325[i + 0]));
  }
  i1318.screenMaterials = i1324
  i1318.requiresBlendModeMaterials = !!i1319[4]
  return i1318
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1328 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1329 = data
  i1328.pageName = i1329[0]
  request.r(i1329[1], i1329[2], 0, i1328, 'material')
  return i1328
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1332 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1333 = data
  request.r(i1333[0], i1333[1], 0, i1332, 'atlasFile')
  var i1335 = i1333[2]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 2) {
  request.r(i1335[i + 0], i1335[i + 1], 2, i1334, '')
  }
  i1332.materials = i1334
  i1332.textureLoadingMode = i1333[3]
  request.r(i1333[4], i1333[5], 0, i1332, 'onDemandTextureLoader')
  return i1332
}

Deserializers["ObstacleConfigSO"] = function (request, data, root) {
  var i1336 = root || request.c( 'ObstacleConfigSO' )
  var i1337 = data
  var i1339 = i1337[0]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( request.d('ObstacleConfigSO+ObstacleEntry', i1339[i + 0]) );
  }
  i1336.obstacles = i1338
  var i1341 = i1337[1]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.push( request.d('ObstacleData', i1341[i + 0]) );
  }
  i1336.obstacleDatas = i1340
  return i1336
}

Deserializers["ObstacleConfigSO+ObstacleEntry"] = function (request, data, root) {
  var i1344 = root || request.c( 'ObstacleConfigSO+ObstacleEntry' )
  var i1345 = data
  i1344.type = i1345[0]
  request.r(i1345[1], i1345[2], 0, i1344, 'prefab')
  return i1344
}

Deserializers["ObstacleData"] = function (request, data, root) {
  var i1348 = root || request.c( 'ObstacleData' )
  var i1349 = data
  i1348.name = i1349[0]
  i1348.description = i1349[1]
  request.r(i1349[2], i1349[3], 0, i1348, 'icon')
  request.r(i1349[4], i1349[5], 0, i1348, 'titleIcon')
  i1348.unlockLevel = i1349[6]
  return i1348
}

Deserializers["BoosterConfig"] = function (request, data, root) {
  var i1350 = root || request.c( 'BoosterConfig' )
  var i1351 = data
  var i1353 = i1351[0]
  var i1352 = new (System.Collections.Generic.List$1(Bridge.ns('BoosterInfo')))
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.add(request.d('BoosterInfo', i1353[i + 0]));
  }
  i1350.boosterInfos = i1352
  return i1350
}

Deserializers["BoosterInfo"] = function (request, data, root) {
  var i1356 = root || request.c( 'BoosterInfo' )
  var i1357 = data
  i1356.type = i1357[0]
  i1356.name = i1357[1]
  i1356.description = i1357[2]
  i1356.levelUnlock = i1357[3]
  request.r(i1357[4], i1357[5], 0, i1356, 'icon')
  request.r(i1357[6], i1357[7], 0, i1356, 'titleIcon')
  i1356.amountFirst = i1357[8]
  i1356.price = i1357[9]
  i1356.amountBuy = i1357[10]
  return i1356
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1358 = root || request.c( 'TMPro.TMP_Settings' )
  var i1359 = data
  i1358.m_enableWordWrapping = !!i1359[0]
  i1358.m_enableKerning = !!i1359[1]
  i1358.m_enableExtraPadding = !!i1359[2]
  i1358.m_enableTintAllSprites = !!i1359[3]
  i1358.m_enableParseEscapeCharacters = !!i1359[4]
  i1358.m_EnableRaycastTarget = !!i1359[5]
  i1358.m_GetFontFeaturesAtRuntime = !!i1359[6]
  i1358.m_missingGlyphCharacter = i1359[7]
  i1358.m_warningsDisabled = !!i1359[8]
  request.r(i1359[9], i1359[10], 0, i1358, 'm_defaultFontAsset')
  i1358.m_defaultFontAssetPath = i1359[11]
  i1358.m_defaultFontSize = i1359[12]
  i1358.m_defaultAutoSizeMinRatio = i1359[13]
  i1358.m_defaultAutoSizeMaxRatio = i1359[14]
  i1358.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1359[15], i1359[16] )
  i1358.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1359[17], i1359[18] )
  i1358.m_autoSizeTextContainer = !!i1359[19]
  i1358.m_IsTextObjectScaleStatic = !!i1359[20]
  var i1361 = i1359[21]
  var i1360 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1361.length; i += 2) {
  request.r(i1361[i + 0], i1361[i + 1], 1, i1360, '')
  }
  i1358.m_fallbackFontAssets = i1360
  i1358.m_matchMaterialPreset = !!i1359[22]
  request.r(i1359[23], i1359[24], 0, i1358, 'm_defaultSpriteAsset')
  i1358.m_defaultSpriteAssetPath = i1359[25]
  i1358.m_enableEmojiSupport = !!i1359[26]
  i1358.m_MissingCharacterSpriteUnicode = i1359[27]
  i1358.m_defaultColorGradientPresetsPath = i1359[28]
  request.r(i1359[29], i1359[30], 0, i1358, 'm_defaultStyleSheet')
  i1358.m_StyleSheetsResourcePath = i1359[31]
  request.r(i1359[32], i1359[33], 0, i1358, 'm_leadingCharacters')
  request.r(i1359[34], i1359[35], 0, i1358, 'm_followingCharacters')
  i1358.m_UseModernHangulLineBreakingRules = !!i1359[36]
  return i1358
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1362 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1363 = data
  request.r(i1363[0], i1363[1], 0, i1362, 'spriteSheet')
  var i1365 = i1363[2]
  var i1364 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.add(request.d('TMPro.TMP_Sprite', i1365[i + 0]));
  }
  i1362.spriteInfoList = i1364
  var i1367 = i1363[3]
  var i1366 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1367.length; i += 2) {
  request.r(i1367[i + 0], i1367[i + 1], 1, i1366, '')
  }
  i1362.fallbackSpriteAssets = i1366
  i1362.hashCode = i1363[4]
  request.r(i1363[5], i1363[6], 0, i1362, 'material')
  i1362.materialHashCode = i1363[7]
  i1362.m_Version = i1363[8]
  i1362.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1363[9], i1362.m_FaceInfo)
  var i1369 = i1363[10]
  var i1368 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.add(request.d('TMPro.TMP_SpriteCharacter', i1369[i + 0]));
  }
  i1362.m_SpriteCharacterTable = i1368
  var i1371 = i1363[11]
  var i1370 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.add(request.d('TMPro.TMP_SpriteGlyph', i1371[i + 0]));
  }
  i1362.m_SpriteGlyphTable = i1370
  return i1362
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1374 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1375 = data
  i1374.name = i1375[0]
  i1374.hashCode = i1375[1]
  i1374.unicode = i1375[2]
  i1374.pivot = new pc.Vec2( i1375[3], i1375[4] )
  request.r(i1375[5], i1375[6], 0, i1374, 'sprite')
  i1374.id = i1375[7]
  i1374.x = i1375[8]
  i1374.y = i1375[9]
  i1374.width = i1375[10]
  i1374.height = i1375[11]
  i1374.xOffset = i1375[12]
  i1374.yOffset = i1375[13]
  i1374.xAdvance = i1375[14]
  i1374.scale = i1375[15]
  return i1374
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1380 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1381 = data
  i1380.m_Name = i1381[0]
  i1380.m_HashCode = i1381[1]
  i1380.m_ElementType = i1381[2]
  i1380.m_Unicode = i1381[3]
  i1380.m_GlyphIndex = i1381[4]
  i1380.m_Scale = i1381[5]
  return i1380
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1384 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1385 = data
  request.r(i1385[0], i1385[1], 0, i1384, 'sprite')
  i1384.m_Index = i1385[2]
  i1384.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1385[3], i1384.m_Metrics)
  i1384.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1385[4], i1384.m_GlyphRect)
  i1384.m_Scale = i1385[5]
  i1384.m_AtlasIndex = i1385[6]
  i1384.m_ClassDefinitionType = i1385[7]
  return i1384
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1386 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1387 = data
  var i1389 = i1387[0]
  var i1388 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.add(request.d('TMPro.TMP_Style', i1389[i + 0]));
  }
  i1386.m_StyleList = i1388
  return i1386
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1392 = root || request.c( 'TMPro.TMP_Style' )
  var i1393 = data
  i1392.m_Name = i1393[0]
  i1392.m_HashCode = i1393[1]
  i1392.m_OpeningDefinition = i1393[2]
  i1392.m_ClosingDefinition = i1393[3]
  i1392.m_OpeningTagArray = i1393[4]
  i1392.m_ClosingTagArray = i1393[5]
  i1392.m_OpeningTagUnicodeArray = i1393[6]
  i1392.m_ClosingTagUnicodeArray = i1393[7]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1395 = data
  var i1397 = i1395[0]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1397[i + 0]) );
  }
  i1394.files = i1396
  i1394.componentToPrefabIds = i1395[1]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1401 = data
  i1400.path = i1401[0]
  request.r(i1401[1], i1401[2], 0, i1400, 'unityObject')
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1403 = data
  var i1405 = i1403[0]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1405[i + 0]) );
  }
  i1402.scriptsExecutionOrder = i1404
  var i1407 = i1403[1]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1407[i + 0]) );
  }
  i1402.sortingLayers = i1406
  var i1409 = i1403[2]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1409[i + 0]) );
  }
  i1402.cullingLayers = i1408
  i1402.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1403[3], i1402.timeSettings)
  i1402.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1403[4], i1402.physicsSettings)
  i1402.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1403[5], i1402.physics2DSettings)
  i1402.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1403[6], i1402.qualitySettings)
  i1402.enableRealtimeShadows = !!i1403[7]
  i1402.enableAutoInstancing = !!i1403[8]
  i1402.enableStaticBatching = !!i1403[9]
  i1402.enableDynamicBatching = !!i1403[10]
  i1402.usePreservativeDynamicBatching = !!i1403[11]
  i1402.lightmapEncodingQuality = i1403[12]
  i1402.desiredColorSpace = i1403[13]
  var i1411 = i1403[14]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.push( i1411[i + 0] );
  }
  i1402.allTags = i1410
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1415 = data
  i1414.name = i1415[0]
  i1414.value = i1415[1]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1419 = data
  i1418.id = i1419[0]
  i1418.name = i1419[1]
  i1418.value = i1419[2]
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1423 = data
  i1422.id = i1423[0]
  i1422.name = i1423[1]
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1425 = data
  i1424.fixedDeltaTime = i1425[0]
  i1424.maximumDeltaTime = i1425[1]
  i1424.timeScale = i1425[2]
  i1424.maximumParticleTimestep = i1425[3]
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1427 = data
  i1426.gravity = new pc.Vec3( i1427[0], i1427[1], i1427[2] )
  i1426.defaultSolverIterations = i1427[3]
  i1426.bounceThreshold = i1427[4]
  i1426.autoSyncTransforms = !!i1427[5]
  i1426.autoSimulation = !!i1427[6]
  var i1429 = i1427[7]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1429[i + 0]) );
  }
  i1426.collisionMatrix = i1428
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1433 = data
  i1432.enabled = !!i1433[0]
  i1432.layerId = i1433[1]
  i1432.otherLayerId = i1433[2]
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1435 = data
  request.r(i1435[0], i1435[1], 0, i1434, 'material')
  i1434.gravity = new pc.Vec2( i1435[2], i1435[3] )
  i1434.positionIterations = i1435[4]
  i1434.velocityIterations = i1435[5]
  i1434.velocityThreshold = i1435[6]
  i1434.maxLinearCorrection = i1435[7]
  i1434.maxAngularCorrection = i1435[8]
  i1434.maxTranslationSpeed = i1435[9]
  i1434.maxRotationSpeed = i1435[10]
  i1434.baumgarteScale = i1435[11]
  i1434.baumgarteTOIScale = i1435[12]
  i1434.timeToSleep = i1435[13]
  i1434.linearSleepTolerance = i1435[14]
  i1434.angularSleepTolerance = i1435[15]
  i1434.defaultContactOffset = i1435[16]
  i1434.autoSimulation = !!i1435[17]
  i1434.queriesHitTriggers = !!i1435[18]
  i1434.queriesStartInColliders = !!i1435[19]
  i1434.callbacksOnDisable = !!i1435[20]
  i1434.reuseCollisionCallbacks = !!i1435[21]
  i1434.autoSyncTransforms = !!i1435[22]
  var i1437 = i1435[23]
  var i1436 = []
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1437[i + 0]) );
  }
  i1434.collisionMatrix = i1436
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1441 = data
  i1440.enabled = !!i1441[0]
  i1440.layerId = i1441[1]
  i1440.otherLayerId = i1441[2]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1443 = data
  var i1445 = i1443[0]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1445[i + 0]) );
  }
  i1442.qualityLevels = i1444
  var i1447 = i1443[1]
  var i1446 = []
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.push( i1447[i + 0] );
  }
  i1442.names = i1446
  i1442.shadows = i1443[2]
  i1442.anisotropicFiltering = i1443[3]
  i1442.antiAliasing = i1443[4]
  i1442.lodBias = i1443[5]
  i1442.shadowCascades = i1443[6]
  i1442.shadowDistance = i1443[7]
  i1442.shadowmaskMode = i1443[8]
  i1442.shadowProjection = i1443[9]
  i1442.shadowResolution = i1443[10]
  i1442.softParticles = !!i1443[11]
  i1442.softVegetation = !!i1443[12]
  i1442.activeColorSpace = i1443[13]
  i1442.desiredColorSpace = i1443[14]
  i1442.masterTextureLimit = i1443[15]
  i1442.maxQueuedFrames = i1443[16]
  i1442.particleRaycastBudget = i1443[17]
  i1442.pixelLightCount = i1443[18]
  i1442.realtimeReflectionProbes = !!i1443[19]
  i1442.shadowCascade2Split = i1443[20]
  i1442.shadowCascade4Split = new pc.Vec3( i1443[21], i1443[22], i1443[23] )
  i1442.streamingMipmapsActive = !!i1443[24]
  i1442.vSyncCount = i1443[25]
  i1442.asyncUploadBufferSize = i1443[26]
  i1442.asyncUploadTimeSlice = i1443[27]
  i1442.billboardsFaceCameraPosition = !!i1443[28]
  i1442.shadowNearPlaneOffset = i1443[29]
  i1442.streamingMipmapsMemoryBudget = i1443[30]
  i1442.maximumLODLevel = i1443[31]
  i1442.streamingMipmapsAddAllCameras = !!i1443[32]
  i1442.streamingMipmapsMaxLevelReduction = i1443[33]
  i1442.streamingMipmapsRenderersPerFrame = i1443[34]
  i1442.resolutionScalingFixedDPIFactor = i1443[35]
  i1442.streamingMipmapsMaxFileIORequests = i1443[36]
  i1442.currentQualityLevel = i1443[37]
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1453 = data
  i1452.weight = i1453[0]
  i1452.vertices = i1453[1]
  i1452.normals = i1453[2]
  i1452.tangents = i1453[3]
  return i1452
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1454 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1455 = data
  i1454.xPlacement = i1455[0]
  i1454.yPlacement = i1455[1]
  i1454.xAdvance = i1455[2]
  i1454.yAdvance = i1455[3]
  return i1454
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[97],"98":[48],"99":[100],"101":[100],"102":[100],"103":[100],"104":[100],"105":[100],"106":[100],"107":[14],"108":[14],"109":[14],"110":[14],"111":[14],"112":[14],"113":[14],"114":[14],"115":[14],"116":[14],"117":[14],"118":[14],"119":[14],"120":[48],"121":[20],"122":[123],"124":[123],"63":[2],"66":[19],"61":[19],"58":[55],"125":[2],"126":[127],"128":[2],"129":[2],"130":[63],"6":[3,2],"131":[2],"132":[63],"65":[2],"64":[2],"133":[2],"134":[2],"135":[2],"136":[2],"137":[2],"138":[2],"139":[2],"140":[3,2],"141":[2],"142":[2],"143":[2],"144":[2],"145":[3,2],"146":[2],"147":[72],"148":[72],"73":[72],"149":[72],"150":[48],"151":[48],"152":[129],"153":[154],"155":[19],"156":[127],"157":[72],"158":[63],"159":[48],"160":[25],"161":[162],"163":[2],"164":[3,2],"40":[20],"165":[3,2],"166":[167,20],"168":[20],"169":[20,43],"170":[100],"171":[14],"172":[162],"173":[174],"175":[2],"21":[20,2],"7":[2,3],"176":[2],"177":[3,2],"178":[20],"179":[3,2],"180":[2],"181":[127],"182":[100],"183":[14]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","OutsideBird","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","BubbleTwoSlot","UnityEngine.Rigidbody2D","UnityEngine.CircleCollider2D","UnityEngine.PhysicsMaterial2D","BubbleParts","BubbleOneSlot","UnityEngine.SpriteRenderer","UnityEngine.MeshRenderer","TMPro.TextMeshPro","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Light","BubbleThreeSlot","BubbleFourSlot","BubbleFiveSlot","FrozenNestObstacle","LockedNestObstacle","KeyNestObstacle","HiddenNestObstacle","StoneNestObstacle","BigNestObstacle","HiddenBirdObstacle","BindBirdObstacle","IceBirdObstacle","TargetNestObstacle","Bird","Spine.Unity.SkeletonAnimation","UnityEngine.BoxCollider2D","BirdParts","UnityEngine.MeshFilter","Spine.Unity.SkeletonDataAsset","MagnetNestFx","ShuffleFX","ParticlesBase","UnityEngine.Camera","UnityEngine.AudioListener","BoardManager","TopContainer","DockContainer","SlotContainer","OutsideBirdHolder","BirdDock","TimeNestController","UnityEngine.GameObject","DockCountdown","UnityEngine.SpriteMask","BirdSlot","BranchWave","UnityEngine.Rendering.SortingGroup","UnityEngine.Canvas","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.ContentSizeFitter","SpriteFitScreenHeight","LevelManager","BirdDataSO","ObstacleConfigSO","UnityEngine.TextAsset","ControllerManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BoosterManager","BoosterConfig","GameManager","SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","ParticlesManager","GameData","ComboManager","UnityEngine.Cubemap","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UIImageFitScreenHeight","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Lean.Common.LeanSelectableGraphicColor","Lean.Common.LeanSelectableRendererColor","UnityEngine.Renderer","Lean.Common.LeanSelectableSpriteRendererColor","Unity.VisualScripting.ScriptMachine","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","CW.Common.CwDepthTextureMode","CW.Common.CwLightIntensity","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine","Lean.Pool.LeanPooledRigidbody","Lean.Pool.LeanPooledRigidbody2D"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "10/23/2026 07:57:06";

Deserializers.lunaDaysRunning = "0.1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1917";

Deserializers.runtimeAnalysisExcludedMethodsCount = "6374";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.3D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "a6939705-64af-41f2-9c25-83407e3a461b";

Deserializers.runtimeInitializeOnLoadInfos = [[["CW","Common","CwInput","Enable"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Sirenix","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","UnitySerializationInitializer","InitializeRuntime"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["EventManager","ClearAll"],["LockedNestObstacle","ResetStatics"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

