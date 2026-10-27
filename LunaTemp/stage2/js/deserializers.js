var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.JointSpring' )
  var i887 = data
  i886.spring = i887[0]
  i886.damper = i887[1]
  i886.targetPosition = i887[2]
  return i886
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.JointMotor' )
  var i889 = data
  i888.m_TargetVelocity = i889[0]
  i888.m_Force = i889[1]
  i888.m_FreeSpin = i889[2]
  return i888
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.JointLimits' )
  var i891 = data
  i890.m_Min = i891[0]
  i890.m_Max = i891[1]
  i890.m_Bounciness = i891[2]
  i890.m_BounceMinVelocity = i891[3]
  i890.m_ContactDistance = i891[4]
  i890.minBounce = i891[5]
  i890.maxBounce = i891[6]
  return i890
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.JointDrive' )
  var i893 = data
  i892.m_PositionSpring = i893[0]
  i892.m_PositionDamper = i893[1]
  i892.m_MaximumForce = i893[2]
  i892.m_UseAcceleration = i893[3]
  return i892
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i895 = data
  i894.m_Spring = i895[0]
  i894.m_Damper = i895[1]
  return i894
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i897 = data
  i896.m_Limit = i897[0]
  i896.m_Bounciness = i897[1]
  i896.m_ContactDistance = i897[2]
  return i896
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i899 = data
  i898.m_ExtremumSlip = i899[0]
  i898.m_ExtremumValue = i899[1]
  i898.m_AsymptoteSlip = i899[2]
  i898.m_AsymptoteValue = i899[3]
  i898.m_Stiffness = i899[4]
  return i898
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i901 = data
  i900.m_LowerAngle = i901[0]
  i900.m_UpperAngle = i901[1]
  return i900
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i903 = data
  i902.m_MotorSpeed = i903[0]
  i902.m_MaximumMotorTorque = i903[1]
  return i902
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i905 = data
  i904.m_DampingRatio = i905[0]
  i904.m_Frequency = i905[1]
  i904.m_Angle = i905[2]
  return i904
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i907 = data
  i906.m_LowerTranslation = i907[0]
  i906.m_UpperTranslation = i907[1]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i908 = root || new pc.UnityMaterial()
  var i909 = data
  i908.name = i909[0]
  request.r(i909[1], i909[2], 0, i908, 'shader')
  i908.renderQueue = i909[3]
  i908.enableInstancing = !!i909[4]
  var i911 = i909[5]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i911[i + 0]) );
  }
  i908.floatParameters = i910
  var i913 = i909[6]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i913[i + 0]) );
  }
  i908.colorParameters = i912
  var i915 = i909[7]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i915[i + 0]) );
  }
  i908.vectorParameters = i914
  var i917 = i909[8]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i917[i + 0]) );
  }
  i908.textureParameters = i916
  var i919 = i909[9]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i919[i + 0]) );
  }
  i908.materialFlags = i918
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i923 = data
  i922.name = i923[0]
  i922.value = i923[1]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i927 = data
  i926.name = i927[0]
  i926.value = new pc.Color(i927[1], i927[2], i927[3], i927[4])
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i931 = data
  i930.name = i931[0]
  i930.value = new pc.Vec4( i931[1], i931[2], i931[3], i931[4] )
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i935 = data
  i934.name = i935[0]
  request.r(i935[1], i935[2], 0, i934, 'value')
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i939 = data
  i938.name = i939[0]
  i938.enabled = !!i939[1]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i941 = data
  i940.name = i941[0]
  i940.width = i941[1]
  i940.height = i941[2]
  i940.mipmapCount = i941[3]
  i940.anisoLevel = i941[4]
  i940.filterMode = i941[5]
  i940.hdr = !!i941[6]
  i940.format = i941[7]
  i940.wrapMode = i941[8]
  i940.alphaIsTransparency = !!i941[9]
  i940.alphaSource = i941[10]
  i940.graphicsFormat = i941[11]
  i940.sRGBTexture = !!i941[12]
  i940.desiredColorSpace = i941[13]
  i940.wrapU = i941[14]
  i940.wrapV = i941[15]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i943 = data
  i942.pivot = new pc.Vec2( i943[0], i943[1] )
  i942.anchorMin = new pc.Vec2( i943[2], i943[3] )
  i942.anchorMax = new pc.Vec2( i943[4], i943[5] )
  i942.sizeDelta = new pc.Vec2( i943[6], i943[7] )
  i942.anchoredPosition3D = new pc.Vec3( i943[8], i943[9], i943[10] )
  i942.rotation = new pc.Quat(i943[11], i943[12], i943[13], i943[14])
  i942.scale = new pc.Vec3( i943[15], i943[16], i943[17] )
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i945 = data
  i944.cullTransparentMesh = !!i945[0]
  return i944
}

Deserializers["OutsideBird"] = function (request, data, root) {
  var i946 = root || request.c( 'OutsideBird' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'm_ImageIcon')
  request.r(i947[2], i947[3], 0, i946, 'm_TxtCount')
  return i946
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.Image' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'm_Sprite')
  i948.m_Type = i949[2]
  i948.m_PreserveAspect = !!i949[3]
  i948.m_FillCenter = !!i949[4]
  i948.m_FillMethod = i949[5]
  i948.m_FillAmount = i949[6]
  i948.m_FillClockwise = !!i949[7]
  i948.m_FillOrigin = i949[8]
  i948.m_UseSpriteMesh = !!i949[9]
  i948.m_PixelsPerUnitMultiplier = i949[10]
  request.r(i949[11], i949[12], 0, i948, 'm_Material')
  i948.m_Maskable = !!i949[13]
  i948.m_Color = new pc.Color(i949[14], i949[15], i949[16], i949[17])
  i948.m_RaycastTarget = !!i949[18]
  i948.m_RaycastPadding = new pc.Vec4( i949[19], i949[20], i949[21], i949[22] )
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i951 = data
  i950.name = i951[0]
  i950.tagId = i951[1]
  i950.enabled = !!i951[2]
  i950.isStatic = !!i951[3]
  i950.layer = i951[4]
  return i950
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i953 = data
  i952.m_hasFontAssetChanged = !!i953[0]
  request.r(i953[1], i953[2], 0, i952, 'm_baseMaterial')
  i952.m_maskOffset = new pc.Vec4( i953[3], i953[4], i953[5], i953[6] )
  i952.m_text = i953[7]
  i952.m_isRightToLeft = !!i953[8]
  request.r(i953[9], i953[10], 0, i952, 'm_fontAsset')
  request.r(i953[11], i953[12], 0, i952, 'm_sharedMaterial')
  var i955 = i953[13]
  var i954 = []
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 2, i954, '')
  }
  i952.m_fontSharedMaterials = i954
  request.r(i953[14], i953[15], 0, i952, 'm_fontMaterial')
  var i957 = i953[16]
  var i956 = []
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 2, i956, '')
  }
  i952.m_fontMaterials = i956
  i952.m_fontColor32 = UnityEngine.Color32.ConstructColor(i953[17], i953[18], i953[19], i953[20])
  i952.m_fontColor = new pc.Color(i953[21], i953[22], i953[23], i953[24])
  i952.m_enableVertexGradient = !!i953[25]
  i952.m_colorMode = i953[26]
  i952.m_fontColorGradient = request.d('TMPro.VertexGradient', i953[27], i952.m_fontColorGradient)
  request.r(i953[28], i953[29], 0, i952, 'm_fontColorGradientPreset')
  request.r(i953[30], i953[31], 0, i952, 'm_spriteAsset')
  i952.m_tintAllSprites = !!i953[32]
  request.r(i953[33], i953[34], 0, i952, 'm_StyleSheet')
  i952.m_TextStyleHashCode = i953[35]
  i952.m_overrideHtmlColors = !!i953[36]
  i952.m_faceColor = UnityEngine.Color32.ConstructColor(i953[37], i953[38], i953[39], i953[40])
  i952.m_fontSize = i953[41]
  i952.m_fontSizeBase = i953[42]
  i952.m_fontWeight = i953[43]
  i952.m_enableAutoSizing = !!i953[44]
  i952.m_fontSizeMin = i953[45]
  i952.m_fontSizeMax = i953[46]
  i952.m_fontStyle = i953[47]
  i952.m_HorizontalAlignment = i953[48]
  i952.m_VerticalAlignment = i953[49]
  i952.m_textAlignment = i953[50]
  i952.m_characterSpacing = i953[51]
  i952.m_wordSpacing = i953[52]
  i952.m_lineSpacing = i953[53]
  i952.m_lineSpacingMax = i953[54]
  i952.m_paragraphSpacing = i953[55]
  i952.m_charWidthMaxAdj = i953[56]
  i952.m_enableWordWrapping = !!i953[57]
  i952.m_wordWrappingRatios = i953[58]
  i952.m_overflowMode = i953[59]
  request.r(i953[60], i953[61], 0, i952, 'm_linkedTextComponent')
  request.r(i953[62], i953[63], 0, i952, 'parentLinkedComponent')
  i952.m_enableKerning = !!i953[64]
  i952.m_enableExtraPadding = !!i953[65]
  i952.checkPaddingRequired = !!i953[66]
  i952.m_isRichText = !!i953[67]
  i952.m_parseCtrlCharacters = !!i953[68]
  i952.m_isOrthographic = !!i953[69]
  i952.m_isCullingEnabled = !!i953[70]
  i952.m_horizontalMapping = i953[71]
  i952.m_verticalMapping = i953[72]
  i952.m_uvLineOffset = i953[73]
  i952.m_geometrySortingOrder = i953[74]
  i952.m_IsTextObjectScaleStatic = !!i953[75]
  i952.m_VertexBufferAutoSizeReduction = !!i953[76]
  i952.m_useMaxVisibleDescender = !!i953[77]
  i952.m_pageToDisplay = i953[78]
  i952.m_margin = new pc.Vec4( i953[79], i953[80], i953[81], i953[82] )
  i952.m_isUsingLegacyAnimationComponent = !!i953[83]
  i952.m_isVolumetricText = !!i953[84]
  request.r(i953[85], i953[86], 0, i952, 'm_Material')
  i952.m_Maskable = !!i953[87]
  i952.m_Color = new pc.Color(i953[88], i953[89], i953[90], i953[91])
  i952.m_RaycastTarget = !!i953[92]
  i952.m_RaycastPadding = new pc.Vec4( i953[93], i953[94], i953[95], i953[96] )
  return i952
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i960 = root || request.c( 'TMPro.VertexGradient' )
  var i961 = data
  i960.topLeft = new pc.Color(i961[0], i961[1], i961[2], i961[3])
  i960.topRight = new pc.Color(i961[4], i961[5], i961[6], i961[7])
  i960.bottomLeft = new pc.Color(i961[8], i961[9], i961[10], i961[11])
  i960.bottomRight = new pc.Color(i961[12], i961[13], i961[14], i961[15])
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i963 = data
  i962.position = new pc.Vec3( i963[0], i963[1], i963[2] )
  i962.scale = new pc.Vec3( i963[3], i963[4], i963[5] )
  i962.rotation = new pc.Quat(i963[6], i963[7], i963[8], i963[9])
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i965 = data
  i964.bodyType = i965[0]
  request.r(i965[1], i965[2], 0, i964, 'material')
  i964.simulated = !!i965[3]
  i964.useAutoMass = !!i965[4]
  i964.mass = i965[5]
  i964.drag = i965[6]
  i964.angularDrag = i965[7]
  i964.gravityScale = i965[8]
  i964.collisionDetectionMode = i965[9]
  i964.sleepMode = i965[10]
  i964.constraints = i965[11]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i967 = data
  i966.radius = i967[0]
  i966.enabled = !!i967[1]
  i966.isTrigger = !!i967[2]
  i966.usedByEffector = !!i967[3]
  i966.density = i967[4]
  i966.offset = new pc.Vec2( i967[5], i967[6] )
  request.r(i967[7], i967[8], 0, i966, 'material')
  return i966
}

Deserializers["BubbleParts"] = function (request, data, root) {
  var i968 = root || request.c( 'BubbleParts' )
  var i969 = data
  var i971 = i969[0]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('BubbleParts+Entry', i971[i + 0]) );
  }
  i968.parts = i970
  return i968
}

Deserializers["BubbleParts+Entry"] = function (request, data, root) {
  var i974 = root || request.c( 'BubbleParts+Entry' )
  var i975 = data
  i974.key = i975[0]
  request.r(i975[1], i975[2], 0, i974, 'target')
  return i974
}

Deserializers["BubbleOneSlot"] = function (request, data, root) {
  var i976 = root || request.c( 'BubbleOneSlot' )
  var i977 = data
  i976.currentConfig = request.d('BubbleConfig', i977[0], i976.currentConfig)
  var i979 = i977[1]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 1, i978, '')
  }
  i976.birds = i978
  request.r(i977[2], i977[3], 0, i976, 'birdParent')
  i976.refillPopDuration = i977[4]
  i976.refillMoveDuration = i977[5]
  i976.clipBirdsToCircle = !!i977[6]
  return i976
}

Deserializers["BubbleConfig"] = function (request, data, root) {
  var i980 = root || request.c( 'BubbleConfig' )
  var i981 = data
  i980.BubbleID = i981[0]
  i980.BubbleType = i981[1]
  i980.FishStr = i981[2]
  i980.IsFrozen = !!i981[3]
  i980.IsUnknown = !!i981[4]
  i980.IsKey = !!i981[5]
  i980.LockCount = i981[6]
  i980.Lock2Count = i981[7]
  i980.IsObstacle = !!i981[8]
  i980.Obstacle2Count = i981[9]
  i980.IsMore = !!i981[10]
  i980.IsConveyor = !!i981[11]
  i980.MaskTargetFish = i981[12]
  i980.BindFishStr = i981[13]
  i980.IceFishStr = i981[14]
  i980.UnKnowFishStr = i981[15]
  i980.KeyFishStr = i981[16]
  i980.LockFishStr = i981[17]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i985 = data
  i984.color = new pc.Color(i985[0], i985[1], i985[2], i985[3])
  request.r(i985[4], i985[5], 0, i984, 'sprite')
  i984.flipX = !!i985[6]
  i984.flipY = !!i985[7]
  i984.drawMode = i985[8]
  i984.size = new pc.Vec2( i985[9], i985[10] )
  i984.tileMode = i985[11]
  i984.adaptiveModeThreshold = i985[12]
  i984.maskInteraction = i985[13]
  i984.spriteSortPoint = i985[14]
  i984.enabled = !!i985[15]
  request.r(i985[16], i985[17], 0, i984, 'sharedMaterial')
  var i987 = i985[18]
  var i986 = []
  for(var i = 0; i < i987.length; i += 2) {
  request.r(i987[i + 0], i987[i + 1], 2, i986, '')
  }
  i984.sharedMaterials = i986
  i984.receiveShadows = !!i985[19]
  i984.shadowCastingMode = i985[20]
  i984.sortingLayerID = i985[21]
  i984.sortingOrder = i985[22]
  i984.lightmapIndex = i985[23]
  i984.lightmapSceneIndex = i985[24]
  i984.lightmapScaleOffset = new pc.Vec4( i985[25], i985[26], i985[27], i985[28] )
  i984.lightProbeUsage = i985[29]
  i984.reflectionProbeUsage = i985[30]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'additionalVertexStreams')
  i988.enabled = !!i989[2]
  request.r(i989[3], i989[4], 0, i988, 'sharedMaterial')
  var i991 = i989[5]
  var i990 = []
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 2, i990, '')
  }
  i988.sharedMaterials = i990
  i988.receiveShadows = !!i989[6]
  i988.shadowCastingMode = i989[7]
  i988.sortingLayerID = i989[8]
  i988.sortingOrder = i989[9]
  i988.lightmapIndex = i989[10]
  i988.lightmapSceneIndex = i989[11]
  i988.lightmapScaleOffset = new pc.Vec4( i989[12], i989[13], i989[14], i989[15] )
  i988.lightProbeUsage = i989[16]
  i988.reflectionProbeUsage = i989[17]
  return i988
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i992 = root || request.c( 'TMPro.TextMeshPro' )
  var i993 = data
  i992._SortingLayer = i993[0]
  i992._SortingLayerID = i993[1]
  i992._SortingOrder = i993[2]
  i992.m_hasFontAssetChanged = !!i993[3]
  request.r(i993[4], i993[5], 0, i992, 'm_renderer')
  i992.m_maskType = i993[6]
  i992.m_text = i993[7]
  i992.m_isRightToLeft = !!i993[8]
  request.r(i993[9], i993[10], 0, i992, 'm_fontAsset')
  request.r(i993[11], i993[12], 0, i992, 'm_sharedMaterial')
  var i995 = i993[13]
  var i994 = []
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 2, i994, '')
  }
  i992.m_fontSharedMaterials = i994
  request.r(i993[14], i993[15], 0, i992, 'm_fontMaterial')
  var i997 = i993[16]
  var i996 = []
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 2, i996, '')
  }
  i992.m_fontMaterials = i996
  i992.m_fontColor32 = UnityEngine.Color32.ConstructColor(i993[17], i993[18], i993[19], i993[20])
  i992.m_fontColor = new pc.Color(i993[21], i993[22], i993[23], i993[24])
  i992.m_enableVertexGradient = !!i993[25]
  i992.m_colorMode = i993[26]
  i992.m_fontColorGradient = request.d('TMPro.VertexGradient', i993[27], i992.m_fontColorGradient)
  request.r(i993[28], i993[29], 0, i992, 'm_fontColorGradientPreset')
  request.r(i993[30], i993[31], 0, i992, 'm_spriteAsset')
  i992.m_tintAllSprites = !!i993[32]
  request.r(i993[33], i993[34], 0, i992, 'm_StyleSheet')
  i992.m_TextStyleHashCode = i993[35]
  i992.m_overrideHtmlColors = !!i993[36]
  i992.m_faceColor = UnityEngine.Color32.ConstructColor(i993[37], i993[38], i993[39], i993[40])
  i992.m_fontSize = i993[41]
  i992.m_fontSizeBase = i993[42]
  i992.m_fontWeight = i993[43]
  i992.m_enableAutoSizing = !!i993[44]
  i992.m_fontSizeMin = i993[45]
  i992.m_fontSizeMax = i993[46]
  i992.m_fontStyle = i993[47]
  i992.m_HorizontalAlignment = i993[48]
  i992.m_VerticalAlignment = i993[49]
  i992.m_textAlignment = i993[50]
  i992.m_characterSpacing = i993[51]
  i992.m_wordSpacing = i993[52]
  i992.m_lineSpacing = i993[53]
  i992.m_lineSpacingMax = i993[54]
  i992.m_paragraphSpacing = i993[55]
  i992.m_charWidthMaxAdj = i993[56]
  i992.m_enableWordWrapping = !!i993[57]
  i992.m_wordWrappingRatios = i993[58]
  i992.m_overflowMode = i993[59]
  request.r(i993[60], i993[61], 0, i992, 'm_linkedTextComponent')
  request.r(i993[62], i993[63], 0, i992, 'parentLinkedComponent')
  i992.m_enableKerning = !!i993[64]
  i992.m_enableExtraPadding = !!i993[65]
  i992.checkPaddingRequired = !!i993[66]
  i992.m_isRichText = !!i993[67]
  i992.m_parseCtrlCharacters = !!i993[68]
  i992.m_isOrthographic = !!i993[69]
  i992.m_isCullingEnabled = !!i993[70]
  i992.m_horizontalMapping = i993[71]
  i992.m_verticalMapping = i993[72]
  i992.m_uvLineOffset = i993[73]
  i992.m_geometrySortingOrder = i993[74]
  i992.m_IsTextObjectScaleStatic = !!i993[75]
  i992.m_VertexBufferAutoSizeReduction = !!i993[76]
  i992.m_useMaxVisibleDescender = !!i993[77]
  i992.m_pageToDisplay = i993[78]
  i992.m_margin = new pc.Vec4( i993[79], i993[80], i993[81], i993[82] )
  i992.m_isUsingLegacyAnimationComponent = !!i993[83]
  i992.m_isVolumetricText = !!i993[84]
  request.r(i993[85], i993[86], 0, i992, 'm_Material')
  i992.m_Maskable = !!i993[87]
  i992.m_Color = new pc.Color(i993[88], i993[89], i993[90], i993[91])
  i992.m_RaycastTarget = !!i993[92]
  i992.m_RaycastPadding = new pc.Vec4( i993[93], i993[94], i993[95], i993[96] )
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i999 = data
  i998.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i999[0], i998.main)
  i998.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i999[1], i998.colorBySpeed)
  i998.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i999[2], i998.colorOverLifetime)
  i998.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i999[3], i998.emission)
  i998.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i999[4], i998.rotationBySpeed)
  i998.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i999[5], i998.rotationOverLifetime)
  i998.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i999[6], i998.shape)
  i998.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i999[7], i998.sizeBySpeed)
  i998.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i999[8], i998.sizeOverLifetime)
  i998.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i999[9], i998.textureSheetAnimation)
  i998.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i999[10], i998.velocityOverLifetime)
  i998.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i999[11], i998.noise)
  i998.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i999[12], i998.inheritVelocity)
  i998.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i999[13], i998.forceOverLifetime)
  i998.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i999[14], i998.limitVelocityOverLifetime)
  i998.useAutoRandomSeed = !!i999[15]
  i998.randomSeed = i999[16]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1000 = root || new pc.ParticleSystemMain()
  var i1001 = data
  i1000.duration = i1001[0]
  i1000.loop = !!i1001[1]
  i1000.prewarm = !!i1001[2]
  i1000.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[3], i1000.startDelay)
  i1000.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[4], i1000.startLifetime)
  i1000.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[5], i1000.startSpeed)
  i1000.startSize3D = !!i1001[6]
  i1000.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[7], i1000.startSizeX)
  i1000.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[8], i1000.startSizeY)
  i1000.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[9], i1000.startSizeZ)
  i1000.startRotation3D = !!i1001[10]
  i1000.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[11], i1000.startRotationX)
  i1000.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[12], i1000.startRotationY)
  i1000.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[13], i1000.startRotationZ)
  i1000.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1001[14], i1000.startColor)
  i1000.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[15], i1000.gravityModifier)
  i1000.simulationSpace = i1001[16]
  request.r(i1001[17], i1001[18], 0, i1000, 'customSimulationSpace')
  i1000.simulationSpeed = i1001[19]
  i1000.useUnscaledTime = !!i1001[20]
  i1000.scalingMode = i1001[21]
  i1000.playOnAwake = !!i1001[22]
  i1000.maxParticles = i1001[23]
  i1000.emitterVelocityMode = i1001[24]
  i1000.stopAction = i1001[25]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1002 = root || new pc.MinMaxCurve()
  var i1003 = data
  i1002.mode = i1003[0]
  i1002.curveMin = new pc.AnimationCurve( { keys_flow: i1003[1] } )
  i1002.curveMax = new pc.AnimationCurve( { keys_flow: i1003[2] } )
  i1002.curveMultiplier = i1003[3]
  i1002.constantMin = i1003[4]
  i1002.constantMax = i1003[5]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1004 = root || new pc.MinMaxGradient()
  var i1005 = data
  i1004.mode = i1005[0]
  i1004.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1005[1], i1004.gradientMin)
  i1004.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1005[2], i1004.gradientMax)
  i1004.colorMin = new pc.Color(i1005[3], i1005[4], i1005[5], i1005[6])
  i1004.colorMax = new pc.Color(i1005[7], i1005[8], i1005[9], i1005[10])
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1007 = data
  i1006.mode = i1007[0]
  var i1009 = i1007[1]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1009[i + 0]) );
  }
  i1006.colorKeys = i1008
  var i1011 = i1007[2]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1011[i + 0]) );
  }
  i1006.alphaKeys = i1010
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1012 = root || new pc.ParticleSystemColorBySpeed()
  var i1013 = data
  i1012.enabled = !!i1013[0]
  i1012.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1013[1], i1012.color)
  i1012.range = new pc.Vec2( i1013[2], i1013[3] )
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1017 = data
  i1016.color = new pc.Color(i1017[0], i1017[1], i1017[2], i1017[3])
  i1016.time = i1017[4]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1021 = data
  i1020.alpha = i1021[0]
  i1020.time = i1021[1]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1022 = root || new pc.ParticleSystemColorOverLifetime()
  var i1023 = data
  i1022.enabled = !!i1023[0]
  i1022.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1023[1], i1022.color)
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1024 = root || new pc.ParticleSystemEmitter()
  var i1025 = data
  i1024.enabled = !!i1025[0]
  i1024.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1025[1], i1024.rateOverTime)
  i1024.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1025[2], i1024.rateOverDistance)
  var i1027 = i1025[3]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1027[i + 0]) );
  }
  i1024.bursts = i1026
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1030 = root || new pc.ParticleSystemBurst()
  var i1031 = data
  i1030.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1031[0], i1030.count)
  i1030.cycleCount = i1031[1]
  i1030.minCount = i1031[2]
  i1030.maxCount = i1031[3]
  i1030.repeatInterval = i1031[4]
  i1030.time = i1031[5]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1032 = root || new pc.ParticleSystemRotationBySpeed()
  var i1033 = data
  i1032.enabled = !!i1033[0]
  i1032.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1033[1], i1032.x)
  i1032.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1033[2], i1032.y)
  i1032.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1033[3], i1032.z)
  i1032.separateAxes = !!i1033[4]
  i1032.range = new pc.Vec2( i1033[5], i1033[6] )
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1034 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1035 = data
  i1034.enabled = !!i1035[0]
  i1034.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1035[1], i1034.x)
  i1034.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1035[2], i1034.y)
  i1034.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1035[3], i1034.z)
  i1034.separateAxes = !!i1035[4]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1036 = root || new pc.ParticleSystemShape()
  var i1037 = data
  i1036.enabled = !!i1037[0]
  i1036.shapeType = i1037[1]
  i1036.randomDirectionAmount = i1037[2]
  i1036.sphericalDirectionAmount = i1037[3]
  i1036.randomPositionAmount = i1037[4]
  i1036.alignToDirection = !!i1037[5]
  i1036.radius = i1037[6]
  i1036.radiusMode = i1037[7]
  i1036.radiusSpread = i1037[8]
  i1036.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1037[9], i1036.radiusSpeed)
  i1036.radiusThickness = i1037[10]
  i1036.angle = i1037[11]
  i1036.length = i1037[12]
  i1036.boxThickness = new pc.Vec3( i1037[13], i1037[14], i1037[15] )
  i1036.meshShapeType = i1037[16]
  request.r(i1037[17], i1037[18], 0, i1036, 'mesh')
  request.r(i1037[19], i1037[20], 0, i1036, 'meshRenderer')
  request.r(i1037[21], i1037[22], 0, i1036, 'skinnedMeshRenderer')
  i1036.useMeshMaterialIndex = !!i1037[23]
  i1036.meshMaterialIndex = i1037[24]
  i1036.useMeshColors = !!i1037[25]
  i1036.normalOffset = i1037[26]
  i1036.arc = i1037[27]
  i1036.arcMode = i1037[28]
  i1036.arcSpread = i1037[29]
  i1036.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1037[30], i1036.arcSpeed)
  i1036.donutRadius = i1037[31]
  i1036.position = new pc.Vec3( i1037[32], i1037[33], i1037[34] )
  i1036.rotation = new pc.Vec3( i1037[35], i1037[36], i1037[37] )
  i1036.scale = new pc.Vec3( i1037[38], i1037[39], i1037[40] )
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1038 = root || new pc.ParticleSystemSizeBySpeed()
  var i1039 = data
  i1038.enabled = !!i1039[0]
  i1038.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1039[1], i1038.x)
  i1038.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1039[2], i1038.y)
  i1038.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1039[3], i1038.z)
  i1038.separateAxes = !!i1039[4]
  i1038.range = new pc.Vec2( i1039[5], i1039[6] )
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1040 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1041 = data
  i1040.enabled = !!i1041[0]
  i1040.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1041[1], i1040.x)
  i1040.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1041[2], i1040.y)
  i1040.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1041[3], i1040.z)
  i1040.separateAxes = !!i1041[4]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1042 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1043 = data
  i1042.enabled = !!i1043[0]
  i1042.mode = i1043[1]
  i1042.animation = i1043[2]
  i1042.numTilesX = i1043[3]
  i1042.numTilesY = i1043[4]
  i1042.useRandomRow = !!i1043[5]
  i1042.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1043[6], i1042.frameOverTime)
  i1042.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1043[7], i1042.startFrame)
  i1042.cycleCount = i1043[8]
  i1042.rowIndex = i1043[9]
  i1042.flipU = i1043[10]
  i1042.flipV = i1043[11]
  i1042.spriteCount = i1043[12]
  var i1045 = i1043[13]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 2) {
  request.r(i1045[i + 0], i1045[i + 1], 2, i1044, '')
  }
  i1042.sprites = i1044
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1048 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1049 = data
  i1048.enabled = !!i1049[0]
  i1048.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1049[1], i1048.x)
  i1048.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1049[2], i1048.y)
  i1048.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1049[3], i1048.z)
  i1048.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1049[4], i1048.radial)
  i1048.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1049[5], i1048.speedModifier)
  i1048.space = i1049[6]
  i1048.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1049[7], i1048.orbitalX)
  i1048.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1049[8], i1048.orbitalY)
  i1048.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1049[9], i1048.orbitalZ)
  i1048.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1049[10], i1048.orbitalOffsetX)
  i1048.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1049[11], i1048.orbitalOffsetY)
  i1048.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1049[12], i1048.orbitalOffsetZ)
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1050 = root || new pc.ParticleSystemNoise()
  var i1051 = data
  i1050.enabled = !!i1051[0]
  i1050.separateAxes = !!i1051[1]
  i1050.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1051[2], i1050.strengthX)
  i1050.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1051[3], i1050.strengthY)
  i1050.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1051[4], i1050.strengthZ)
  i1050.frequency = i1051[5]
  i1050.damping = !!i1051[6]
  i1050.octaveCount = i1051[7]
  i1050.octaveMultiplier = i1051[8]
  i1050.octaveScale = i1051[9]
  i1050.quality = i1051[10]
  i1050.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1051[11], i1050.scrollSpeed)
  i1050.scrollSpeedMultiplier = i1051[12]
  i1050.remapEnabled = !!i1051[13]
  i1050.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1051[14], i1050.remapX)
  i1050.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1051[15], i1050.remapY)
  i1050.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1051[16], i1050.remapZ)
  i1050.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1051[17], i1050.positionAmount)
  i1050.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1051[18], i1050.rotationAmount)
  i1050.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1051[19], i1050.sizeAmount)
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1052 = root || new pc.ParticleSystemInheritVelocity()
  var i1053 = data
  i1052.enabled = !!i1053[0]
  i1052.mode = i1053[1]
  i1052.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1053[2], i1052.curve)
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1054 = root || new pc.ParticleSystemForceOverLifetime()
  var i1055 = data
  i1054.enabled = !!i1055[0]
  i1054.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1055[1], i1054.x)
  i1054.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1055[2], i1054.y)
  i1054.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1055[3], i1054.z)
  i1054.space = i1055[4]
  i1054.randomized = !!i1055[5]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1056 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1057 = data
  i1056.enabled = !!i1057[0]
  i1056.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1057[1], i1056.limit)
  i1056.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1057[2], i1056.limitX)
  i1056.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1057[3], i1056.limitY)
  i1056.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1057[4], i1056.limitZ)
  i1056.dampen = i1057[5]
  i1056.separateAxes = !!i1057[6]
  i1056.space = i1057[7]
  i1056.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1057[8], i1056.drag)
  i1056.multiplyDragByParticleSize = !!i1057[9]
  i1056.multiplyDragByParticleVelocity = !!i1057[10]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'mesh')
  i1058.meshCount = i1059[2]
  i1058.activeVertexStreamsCount = i1059[3]
  i1058.alignment = i1059[4]
  i1058.renderMode = i1059[5]
  i1058.sortMode = i1059[6]
  i1058.lengthScale = i1059[7]
  i1058.velocityScale = i1059[8]
  i1058.cameraVelocityScale = i1059[9]
  i1058.normalDirection = i1059[10]
  i1058.sortingFudge = i1059[11]
  i1058.minParticleSize = i1059[12]
  i1058.maxParticleSize = i1059[13]
  i1058.pivot = new pc.Vec3( i1059[14], i1059[15], i1059[16] )
  request.r(i1059[17], i1059[18], 0, i1058, 'trailMaterial')
  i1058.applyActiveColorSpace = !!i1059[19]
  i1058.enabled = !!i1059[20]
  request.r(i1059[21], i1059[22], 0, i1058, 'sharedMaterial')
  var i1061 = i1059[23]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 2) {
  request.r(i1061[i + 0], i1061[i + 1], 2, i1060, '')
  }
  i1058.sharedMaterials = i1060
  i1058.receiveShadows = !!i1059[24]
  i1058.shadowCastingMode = i1059[25]
  i1058.sortingLayerID = i1059[26]
  i1058.sortingOrder = i1059[27]
  i1058.lightmapIndex = i1059[28]
  i1058.lightmapSceneIndex = i1059[29]
  i1058.lightmapScaleOffset = new pc.Vec4( i1059[30], i1059[31], i1059[32], i1059[33] )
  i1058.lightProbeUsage = i1059[34]
  i1058.reflectionProbeUsage = i1059[35]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1063 = data
  i1062.type = i1063[0]
  i1062.color = new pc.Color(i1063[1], i1063[2], i1063[3], i1063[4])
  i1062.cullingMask = i1063[5]
  i1062.intensity = i1063[6]
  i1062.range = i1063[7]
  i1062.spotAngle = i1063[8]
  i1062.shadows = i1063[9]
  i1062.shadowNormalBias = i1063[10]
  i1062.shadowBias = i1063[11]
  i1062.shadowStrength = i1063[12]
  i1062.shadowResolution = i1063[13]
  i1062.lightmapBakeType = i1063[14]
  i1062.renderMode = i1063[15]
  request.r(i1063[16], i1063[17], 0, i1062, 'cookie')
  i1062.cookieSize = i1063[18]
  i1062.shadowNearPlane = i1063[19]
  i1062.occlusionMaskChannel = i1063[20]
  i1062.isBaked = !!i1063[21]
  i1062.mixedLightingMode = i1063[22]
  i1062.enabled = !!i1063[23]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1065 = data
  i1064.name = i1065[0]
  i1064.halfPrecision = !!i1065[1]
  i1064.useSimplification = !!i1065[2]
  i1064.useUInt32IndexFormat = !!i1065[3]
  i1064.vertexCount = i1065[4]
  i1064.aabb = i1065[5]
  var i1067 = i1065[6]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( !!i1067[i + 0] );
  }
  i1064.streams = i1066
  i1064.vertices = i1065[7]
  var i1069 = i1065[8]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1069[i + 0]) );
  }
  i1064.subMeshes = i1068
  var i1071 = i1065[9]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 16) {
    i1070.push( new pc.Mat4().setData(i1071[i + 0], i1071[i + 1], i1071[i + 2], i1071[i + 3],  i1071[i + 4], i1071[i + 5], i1071[i + 6], i1071[i + 7],  i1071[i + 8], i1071[i + 9], i1071[i + 10], i1071[i + 11],  i1071[i + 12], i1071[i + 13], i1071[i + 14], i1071[i + 15]) );
  }
  i1064.bindposes = i1070
  var i1073 = i1065[10]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1073[i + 0]) );
  }
  i1064.blendShapes = i1072
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1079 = data
  i1078.triangles = i1079[0]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1085 = data
  i1084.name = i1085[0]
  var i1087 = i1085[1]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1087[i + 0]) );
  }
  i1084.frames = i1086
  return i1084
}

Deserializers["BubbleTwoSlot"] = function (request, data, root) {
  var i1088 = root || request.c( 'BubbleTwoSlot' )
  var i1089 = data
  i1088.layoutCenter = new pc.Vec2( i1089[0], i1089[1] )
  i1088.horizontalOffset = i1089[2]
  i1088.currentConfig = request.d('BubbleConfig', i1089[3], i1088.currentConfig)
  var i1091 = i1089[4]
  var i1090 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i1091.length; i += 2) {
  request.r(i1091[i + 0], i1091[i + 1], 1, i1090, '')
  }
  i1088.birds = i1090
  request.r(i1089[5], i1089[6], 0, i1088, 'birdParent')
  i1088.refillPopDuration = i1089[7]
  i1088.refillMoveDuration = i1089[8]
  i1088.clipBirdsToCircle = !!i1089[9]
  return i1088
}

Deserializers["BubbleThreeSlot"] = function (request, data, root) {
  var i1092 = root || request.c( 'BubbleThreeSlot' )
  var i1093 = data
  i1092.layoutCenter = new pc.Vec2( i1093[0], i1093[1] )
  i1092.horizontalOffset = i1093[2]
  i1092.verticalOffset = i1093[3]
  i1092.currentConfig = request.d('BubbleConfig', i1093[4], i1092.currentConfig)
  var i1095 = i1093[5]
  var i1094 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i1095.length; i += 2) {
  request.r(i1095[i + 0], i1095[i + 1], 1, i1094, '')
  }
  i1092.birds = i1094
  request.r(i1093[6], i1093[7], 0, i1092, 'birdParent')
  i1092.refillPopDuration = i1093[8]
  i1092.refillMoveDuration = i1093[9]
  i1092.clipBirdsToCircle = !!i1093[10]
  return i1092
}

Deserializers["BubbleFourSlot"] = function (request, data, root) {
  var i1096 = root || request.c( 'BubbleFourSlot' )
  var i1097 = data
  i1096.layoutCenter = new pc.Vec2( i1097[0], i1097[1] )
  i1096.horizontalOffset = i1097[2]
  i1096.verticalOffset = i1097[3]
  i1096.currentConfig = request.d('BubbleConfig', i1097[4], i1096.currentConfig)
  var i1099 = i1097[5]
  var i1098 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i1099.length; i += 2) {
  request.r(i1099[i + 0], i1099[i + 1], 1, i1098, '')
  }
  i1096.birds = i1098
  request.r(i1097[6], i1097[7], 0, i1096, 'birdParent')
  i1096.refillPopDuration = i1097[8]
  i1096.refillMoveDuration = i1097[9]
  i1096.clipBirdsToCircle = !!i1097[10]
  return i1096
}

Deserializers["BubbleFiveSlot"] = function (request, data, root) {
  var i1100 = root || request.c( 'BubbleFiveSlot' )
  var i1101 = data
  i1100.layoutCenter = new pc.Vec2( i1101[0], i1101[1] )
  i1100.horizontalOffset = i1101[2]
  i1100.verticalOffset = i1101[3]
  i1100.currentConfig = request.d('BubbleConfig', i1101[4], i1100.currentConfig)
  var i1103 = i1101[5]
  var i1102 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i1103.length; i += 2) {
  request.r(i1103[i + 0], i1103[i + 1], 1, i1102, '')
  }
  i1100.birds = i1102
  request.r(i1101[6], i1101[7], 0, i1100, 'birdParent')
  i1100.refillPopDuration = i1101[8]
  i1100.refillMoveDuration = i1101[9]
  i1100.clipBirdsToCircle = !!i1101[10]
  return i1100
}

Deserializers["FrozenNestObstacle"] = function (request, data, root) {
  var i1104 = root || request.c( 'FrozenNestObstacle' )
  var i1105 = data
  i1104.layers = i1105[0]
  i1104.touchTolerance = i1105[1]
  i1104.blockedMessage = i1105[2]
  i1104.overlayPart = i1105[3]
  i1104.layerTextPart = i1105[4]
  i1104.minAlpha = i1105[5]
  return i1104
}

Deserializers["LockedNestObstacle"] = function (request, data, root) {
  var i1106 = root || request.c( 'LockedNestObstacle' )
  var i1107 = data
  i1106.blockedMessage = i1107[0]
  request.r(i1107[1], i1107[2], 0, i1106, 'flyingKeyPrefab')
  i1106.keyFlyDuration = i1107[3]
  i1106.keyArcHeight = i1107[4]
  i1106.keySortingOffset = i1107[5]
  i1106.chainPart = i1107[6]
  i1106.lockPart = i1107[7]
  i1106.countTextPart = i1107[8]
  return i1106
}

Deserializers["KeyNestObstacle"] = function (request, data, root) {
  var i1108 = root || request.c( 'KeyNestObstacle' )
  var i1109 = data
  i1108.keyPart = i1109[0]
  return i1108
}

Deserializers["HiddenNestObstacle"] = function (request, data, root) {
  var i1110 = root || request.c( 'HiddenNestObstacle' )
  var i1111 = data
  i1110.blockedMessage = i1111[0]
  i1110.bottomTolerance = i1111[1]
  i1110.settleTime = i1111[2]
  i1110.revealDuration = i1111[3]
  i1110.coverPart = i1111[4]
  return i1110
}

Deserializers["StoneNestObstacle"] = function (request, data, root) {
  var i1112 = root || request.c( 'StoneNestObstacle' )
  var i1113 = data
  i1112.stonePart = i1113[0]
  var i1115 = i1113[1]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( i1115[i + 0] );
  }
  i1112.hiddenParts = i1114
  i1112.keepUpright = !!i1113[2]
  i1112.stoneMass = i1113[3]
  return i1112
}

Deserializers["BigNestObstacle"] = function (request, data, root) {
  var i1118 = root || request.c( 'BigNestObstacle' )
  var i1119 = data
  i1118.countTextPart = i1119[0]
  return i1118
}

Deserializers["HiddenBirdObstacle"] = function (request, data, root) {
  var i1120 = root || request.c( 'HiddenBirdObstacle' )
  var i1121 = data
  i1120.overlayPart = i1121[0]
  i1120.revealDuration = i1121[1]
  return i1120
}

Deserializers["BindBirdObstacle"] = function (request, data, root) {
  var i1122 = root || request.c( 'BindBirdObstacle' )
  var i1123 = data
  i1122.overlayPart = i1123[0]
  i1122.sortingOffset = i1123[1]
  i1122.clearDuration = i1123[2]
  return i1122
}

Deserializers["IceBirdObstacle"] = function (request, data, root) {
  var i1124 = root || request.c( 'IceBirdObstacle' )
  var i1125 = data
  i1124.blockedMessage = i1125[0]
  i1124.overlayPart = i1125[1]
  i1124.textPart = i1125[2]
  return i1124
}

Deserializers["TargetNestObstacle"] = function (request, data, root) {
  var i1126 = root || request.c( 'TargetNestObstacle' )
  var i1127 = data
  i1126.blockedMessage = i1127[0]
  i1126.revealDuration = i1127[1]
  i1126.overlayPart = i1127[2]
  i1126.iconPart = i1127[3]
  return i1126
}

Deserializers["Bird"] = function (request, data, root) {
  var i1128 = root || request.c( 'Bird' )
  var i1129 = data
  request.r(i1129[0], i1129[1], 0, i1128, 'Content')
  var i1131 = i1129[2]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 2) {
  request.r(i1131[i + 0], i1131[i + 1], 2, i1130, '')
  }
  i1128.trailParticles = i1130
  request.r(i1129[3], i1129[4], 0, i1128, '_skeletalAnimation')
  i1128._birdData = request.d('BirdData', i1129[5], i1128._birdData)
  i1128._moveDuration = i1129[6]
  i1128._slotScale = i1129[7]
  i1128._flightSpeed = i1129[8]
  i1128._flightJumpPower = i1129[9]
  i1128._flightJumpPowerPerUnit = i1129[10]
  i1128._sourceFacesRight = !!i1129[11]
  i1128._flightFacingDeadZone = i1129[12]
  i1128._landContactFallbackDelay = i1129[13]
  request.r(i1129[14], i1129[15], 0, i1128, '_collider')
  request.r(i1129[16], i1129[17], 0, i1128, '_skeletalRenderer')
  i1128._idleUpdateFps = i1129[18]
  i1128._freezeSpineInBubble = !!i1129[19]
  i1128._freezeSpineWhenSleeping = !!i1129[20]
  return i1128
}

Deserializers["BirdData"] = function (request, data, root) {
  var i1134 = root || request.c( 'BirdData' )
  var i1135 = data
  i1134.birdType = i1135[0]
  i1134.birdId = i1135[1]
  request.r(i1135[2], i1135[3], 0, i1134, 'spriteIcon')
  request.r(i1135[4], i1135[5], 0, i1134, 'skeletonDataAsset')
  i1134.skinName = i1135[6]
  request.r(i1135[7], i1135[8], 0, i1134, 'skeletonSprite')
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1137 = data
  i1136.usedByComposite = !!i1137[0]
  i1136.autoTiling = !!i1137[1]
  i1136.size = new pc.Vec2( i1137[2], i1137[3] )
  i1136.edgeRadius = i1137[4]
  i1136.enabled = !!i1137[5]
  i1136.isTrigger = !!i1137[6]
  i1136.usedByEffector = !!i1137[7]
  i1136.density = i1137[8]
  i1136.offset = new pc.Vec2( i1137[9], i1137[10] )
  request.r(i1137[11], i1137[12], 0, i1136, 'material')
  return i1136
}

Deserializers["BirdParts"] = function (request, data, root) {
  var i1138 = root || request.c( 'BirdParts' )
  var i1139 = data
  var i1141 = i1139[0]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('BirdParts+Entry', i1141[i + 0]) );
  }
  i1138.parts = i1140
  return i1138
}

Deserializers["BirdParts+Entry"] = function (request, data, root) {
  var i1144 = root || request.c( 'BirdParts+Entry' )
  var i1145 = data
  i1144.key = i1145[0]
  request.r(i1145[1], i1145[2], 0, i1144, 'target')
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1147 = data
  request.r(i1147[0], i1147[1], 0, i1146, 'sharedMesh')
  return i1146
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1148 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1149 = data
  i1148.loop = !!i1149[0]
  i1148.timeScale = i1149[1]
  request.r(i1149[2], i1149[3], 0, i1148, 'skeletonDataAsset')
  i1148.initialSkinName = i1149[4]
  i1148.fixPrefabOverrideViaMeshFilter = i1149[5]
  i1148.initialFlipX = !!i1149[6]
  i1148.initialFlipY = !!i1149[7]
  i1148.updateWhenInvisible = i1149[8]
  i1148.zSpacing = i1149[9]
  i1148.useClipping = !!i1149[10]
  i1148.immutableTriangles = !!i1149[11]
  i1148.pmaVertexColors = !!i1149[12]
  i1148.clearStateOnDisable = !!i1149[13]
  i1148.tintBlack = !!i1149[14]
  i1148.singleSubmesh = !!i1149[15]
  i1148.fixDrawOrder = !!i1149[16]
  i1148.addNormals = !!i1149[17]
  i1148.calculateTangents = !!i1149[18]
  i1148.maskInteraction = i1149[19]
  i1148.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1149[20], i1148.maskMaterials)
  i1148.disableRenderingOnOverride = !!i1149[21]
  i1148.updateTiming = i1149[22]
  i1148.unscaledTime = !!i1149[23]
  i1148._animationName = i1149[24]
  var i1151 = i1149[25]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( i1151[i + 0] );
  }
  i1148.separatorSlotNames = i1150
  i1148.physicsPositionInheritanceFactor = new pc.Vec2( i1149[26], i1149[27] )
  i1148.physicsRotationInheritanceFactor = i1149[28]
  request.r(i1149[29], i1149[30], 0, i1148, 'physicsMovementRelativeTo')
  return i1148
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1152 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1153 = data
  var i1155 = i1153[0]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 2) {
  request.r(i1155[i + 0], i1155[i + 1], 2, i1154, '')
  }
  i1152.materialsMaskDisabled = i1154
  var i1157 = i1153[1]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 2) {
  request.r(i1157[i + 0], i1157[i + 1], 2, i1156, '')
  }
  i1152.materialsInsideMask = i1156
  var i1159 = i1153[2]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 2) {
  request.r(i1159[i + 0], i1159[i + 1], 2, i1158, '')
  }
  i1152.materialsOutsideMask = i1158
  return i1152
}

Deserializers["MagnetNestFx"] = function (request, data, root) {
  var i1162 = root || request.c( 'MagnetNestFx' )
  var i1163 = data
  i1162.appearDuration = i1163[0]
  i1162.startScaleMultiplier = i1163[1]
  i1162.endScaleMultiplier = i1163[2]
  i1162.vanishDuration = i1163[3]
  return i1162
}

Deserializers["ShuffleFX"] = function (request, data, root) {
  var i1164 = root || request.c( 'ShuffleFX' )
  var i1165 = data
  request.r(i1165[0], i1165[1], 0, i1164, 'fan')
  request.r(i1165[2], i1165[3], 0, i1164, 'fan_spin')
  i1164.appearDuration = i1165[4]
  i1164.spinDuration = i1165[5]
  i1164.disappearDuration = i1165[6]
  i1164.totalSpinAngle = i1165[7]
  i1164.blurThreshold = i1165[8]
  i1164.wobbleAngle = i1165[9]
  i1164.wobbleOffset = i1165[10]
  i1164.wobbleSpeed = i1165[11]
  i1164.sortingOrderOffset = i1165[12]
  return i1164
}

Deserializers["ParticlesBase"] = function (request, data, root) {
  var i1166 = root || request.c( 'ParticlesBase' )
  var i1167 = data
  i1166.effectType = i1167[0]
  request.r(i1167[1], i1167[2], 0, i1166, 'particles')
  var i1169 = i1167[3]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 2) {
  request.r(i1169[i + 0], i1169[i + 1], 2, i1168, '')
  }
  i1166.allParticles = i1168
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1171 = data
  i1170.name = i1171[0]
  i1170.atlasId = i1171[1]
  i1170.mipmapCount = i1171[2]
  i1170.hdr = !!i1171[3]
  i1170.size = i1171[4]
  i1170.anisoLevel = i1171[5]
  i1170.filterMode = i1171[6]
  var i1173 = i1171[7]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 4) {
    i1172.push( UnityEngine.Rect.MinMaxRect(i1173[i + 0], i1173[i + 1], i1173[i + 2], i1173[i + 3]) );
  }
  i1170.rects = i1172
  i1170.wrapU = i1171[8]
  i1170.wrapV = i1171[9]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1177 = data
  i1176.name = i1177[0]
  i1176.index = i1177[1]
  i1176.startup = !!i1177[2]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1179 = data
  i1178.aspect = i1179[0]
  i1178.orthographic = !!i1179[1]
  i1178.orthographicSize = i1179[2]
  i1178.backgroundColor = new pc.Color(i1179[3], i1179[4], i1179[5], i1179[6])
  i1178.nearClipPlane = i1179[7]
  i1178.farClipPlane = i1179[8]
  i1178.fieldOfView = i1179[9]
  i1178.depth = i1179[10]
  i1178.clearFlags = i1179[11]
  i1178.cullingMask = i1179[12]
  i1178.rect = i1179[13]
  request.r(i1179[14], i1179[15], 0, i1178, 'targetTexture')
  i1178.usePhysicalProperties = !!i1179[16]
  i1178.focalLength = i1179[17]
  i1178.sensorSize = new pc.Vec2( i1179[18], i1179[19] )
  i1178.lensShift = new pc.Vec2( i1179[20], i1179[21] )
  i1178.gateFit = i1179[22]
  i1178.commandBufferCount = i1179[23]
  i1178.cameraType = i1179[24]
  i1178.enabled = !!i1179[25]
  return i1178
}

Deserializers["BoardManager"] = function (request, data, root) {
  var i1180 = root || request.c( 'BoardManager' )
  var i1181 = data
  var i1183 = i1181[0]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('BubbleBase')))
  for(var i = 0; i < i1183.length; i += 2) {
  request.r(i1183[i + 0], i1183[i + 1], 1, i1182, '')
  }
  i1180.bubbleActive = i1182
  var i1185 = i1181[1]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 2) {
  request.r(i1185[i + 0], i1185[i + 1], 2, i1184, '')
  }
  i1180._bubblePrefabs = i1184
  var i1187 = i1181[2]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 2) {
  request.r(i1187[i + 0], i1187[i + 1], 2, i1186, '')
  }
  i1180._spawnPoints = i1186
  request.r(i1181[3], i1181[4], 0, i1180, '_waterSurface')
  request.r(i1181[5], i1181[6], 0, i1180, '_bubbleParent')
  request.r(i1181[7], i1181[8], 0, i1180, '_magnetGatherPoint')
  i1180._surfaceTolerance = i1181[9]
  request.r(i1181[10], i1181[11], 0, i1180, '_wallsParent')
  request.r(i1181[12], i1181[13], 0, i1180, '_cloude')
  request.r(i1181[14], i1181[15], 0, i1180, '_bottomCollider')
  request.r(i1181[16], i1181[17], 0, i1180, '_alignmentCamera')
  i1180._horizontalSpawnJitter = i1181[18]
  i1180._inwardImpulseMin = i1181[19]
  i1180._inwardImpulseMax = i1181[20]
  i1180._initialSpawnCount = i1181[21]
  i1180._initialSpawnInterval = i1181[22]
  i1180._checkInterval = i1181[23]
  i1180._spawnInterval = i1181[24]
  i1180._deadlockCheckDelay = i1181[25]
  i1180._settleSpeed = i1181[26]
  i1180._settleTime = i1181[27]
  i1180._settleTimeout = i1181[28]
  request.r(i1181[29], i1181[30], 0, i1180, '_boxBird')
  var i1189 = i1181[31]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 2) {
  request.r(i1189[i + 0], i1189[i + 1], 2, i1188, '')
  }
  i1180._SpriteBoxBirds = i1188
  return i1180
}

Deserializers["TopContainer"] = function (request, data, root) {
  var i1196 = root || request.c( 'TopContainer' )
  var i1197 = data
  i1196.animatingCount = i1197[0]
  request.r(i1197[1], i1197[2], 0, i1196, 'top')
  request.r(i1197[3], i1197[4], 0, i1196, 'dockContainer')
  request.r(i1197[5], i1197[6], 0, i1196, 'slotContainer')
  request.r(i1197[7], i1197[8], 0, i1196, '_countComplateText')
  request.r(i1197[9], i1197[10], 0, i1196, 'outsideBirdHolder')
  request.r(i1197[11], i1197[12], 0, i1196, 'fitCamera')
  i1196.referenceResolution = new pc.Vec2( i1197[13], i1197[14] )
  i1196.referenceOrthographicSize = i1197[15]
  i1196.cameraFitPadding = i1197[16]
  i1196.allowCameraFitUpscale = !!i1197[17]
  return i1196
}

Deserializers["DockContainer"] = function (request, data, root) {
  var i1198 = root || request.c( 'DockContainer' )
  var i1199 = data
  i1198.dockCount = i1199[0]
  i1198.activeOrderCount = i1199[1]
  var i1201 = i1199[2]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('BirdDock')))
  for(var i = 0; i < i1201.length; i += 2) {
  request.r(i1201[i + 0], i1201[i + 1], 1, i1200, '')
  }
  i1198.dockSlot = i1200
  request.r(i1199[3], i1199[4], 0, i1198, 'tileDockPrefab')
  return i1198
}

Deserializers["TimeNestController"] = function (request, data, root) {
  var i1204 = root || request.c( 'TimeNestController' )
  var i1205 = data
  return i1204
}

Deserializers["BirdDock"] = function (request, data, root) {
  var i1206 = root || request.c( 'BirdDock' )
  var i1207 = data
  i1206.tileType = i1207[0]
  i1206.birdId = i1207[1]
  i1206.isLock = !!i1207[2]
  i1206.isAnim = !!i1207[3]
  request.r(i1207[4], i1207[5], 0, i1206, 'visual')
  var i1209 = i1207[6]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1209.length; i += 2) {
  request.r(i1209[i + 0], i1209[i + 1], 1, i1208, '')
  }
  i1206.points = i1208
  request.r(i1207[7], i1207[8], 0, i1206, '_targetSprite')
  request.r(i1207[9], i1207[10], 0, i1206, '_amountText')
  request.r(i1207[11], i1207[12], 0, i1206, 'addUI')
  request.r(i1207[13], i1207[14], 0, i1206, 'orderUI')
  i1206.Max = i1207[15]
  return i1206
}

Deserializers["DockCountdown"] = function (request, data, root) {
  var i1212 = root || request.c( 'DockCountdown' )
  var i1213 = data
  request.r(i1213[0], i1213[1], 0, i1212, 'countdownRoot')
  request.r(i1213[2], i1213[3], 0, i1212, 'timeText')
  i1212.warningThreshold = i1213[4]
  i1212.warningColor = new pc.Color(i1213[5], i1213[6], i1213[7], i1213[8])
  var i1215 = i1213[9]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 2) {
  request.r(i1215[i + 0], i1215[i + 1], 2, i1214, '')
  }
  i1212.warningObjects = i1214
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i1219 = data
  i1218.frontSortingLayerID = i1219[0]
  i1218.frontSortingOrder = i1219[1]
  i1218.backSortingLayerID = i1219[2]
  i1218.backSortingOrder = i1219[3]
  i1218.alphaCutoff = i1219[4]
  request.r(i1219[5], i1219[6], 0, i1218, 'sprite')
  i1218.tileMode = i1219[7]
  i1218.isCustomRangeActive = !!i1219[8]
  i1218.spriteSortPoint = i1219[9]
  i1218.enabled = !!i1219[10]
  request.r(i1219[11], i1219[12], 0, i1218, 'sharedMaterial')
  var i1221 = i1219[13]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 2) {
  request.r(i1221[i + 0], i1221[i + 1], 2, i1220, '')
  }
  i1218.sharedMaterials = i1220
  i1218.receiveShadows = !!i1219[14]
  i1218.shadowCastingMode = i1219[15]
  i1218.sortingLayerID = i1219[16]
  i1218.sortingOrder = i1219[17]
  i1218.lightmapIndex = i1219[18]
  i1218.lightmapSceneIndex = i1219[19]
  i1218.lightmapScaleOffset = new pc.Vec4( i1219[20], i1219[21], i1219[22], i1219[23] )
  i1218.lightProbeUsage = i1219[24]
  i1218.reflectionProbeUsage = i1219[25]
  return i1218
}

Deserializers["SlotContainer"] = function (request, data, root) {
  var i1222 = root || request.c( 'SlotContainer' )
  var i1223 = data
  var i1225 = i1223[0]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('BirdSlot')))
  for(var i = 0; i < i1225.length; i += 2) {
  request.r(i1225[i + 0], i1225[i + 1], 1, i1224, '')
  }
  i1222.tileSlots = i1224
  request.r(i1223[1], i1223[2], 0, i1222, 'ExtraSlotPos')
  request.r(i1223[3], i1223[4], 0, i1222, 'tile')
  request.r(i1223[5], i1223[6], 0, i1222, 'branchWave')
  return i1222
}

Deserializers["BranchWave"] = function (request, data, root) {
  var i1228 = root || request.c( 'BranchWave' )
  var i1229 = data
  i1228.amplitude = i1229[0]
  i1228.speed = i1229[1]
  i1228.frequency = i1229[2]
  i1228.damping = i1229[3]
  i1228.falloff = i1229[4]
  i1228.riderTiltScale = i1229[5]
  return i1228
}

Deserializers["BirdSlot"] = function (request, data, root) {
  var i1230 = root || request.c( 'BirdSlot' )
  var i1231 = data
  i1230.isAnim = !!i1231[0]
  request.r(i1231[1], i1231[2], 0, i1230, 'warningSprite')
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1233 = data
  i1232.sortingLayerIndex = i1233[0]
  i1232.sortingOrder = i1233[1]
  i1232.sortingLayerName = i1233[2]
  i1232.enabled = !!i1233[3]
  return i1232
}

Deserializers["OutsideBirdHolder"] = function (request, data, root) {
  var i1234 = root || request.c( 'OutsideBirdHolder' )
  var i1235 = data
  request.r(i1235[0], i1235[1], 0, i1234, 'm_TxtCount')
  request.r(i1235[2], i1235[3], 0, i1234, 'm_Canvas')
  request.r(i1235[4], i1235[5], 0, i1234, 'm_ObjContent')
  request.r(i1235[6], i1235[7], 0, i1234, 'm_OutsideBirdPrefab')
  request.r(i1235[8], i1235[9], 0, i1234, 'm_NestVisual')
  i1234.m_ShakeDuration = i1235[10]
  i1234.m_ShakeScale = i1235[11]
  i1234.m_ShakeRotation = i1235[12]
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1237 = data
  i1236.planeDistance = i1237[0]
  i1236.referencePixelsPerUnit = i1237[1]
  i1236.isFallbackOverlay = !!i1237[2]
  i1236.renderMode = i1237[3]
  i1236.renderOrder = i1237[4]
  i1236.sortingLayerName = i1237[5]
  i1236.sortingOrder = i1237[6]
  i1236.scaleFactor = i1237[7]
  request.r(i1237[8], i1237[9], 0, i1236, 'worldCamera')
  i1236.overrideSorting = !!i1237[10]
  i1236.pixelPerfect = !!i1237[11]
  i1236.targetDisplay = i1237[12]
  i1236.overridePixelPerfect = !!i1237[13]
  i1236.enabled = !!i1237[14]
  return i1236
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i1238 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i1239 = data
  i1238.m_StartCorner = i1239[0]
  i1238.m_StartAxis = i1239[1]
  i1238.m_CellSize = new pc.Vec2( i1239[2], i1239[3] )
  i1238.m_Spacing = new pc.Vec2( i1239[4], i1239[5] )
  i1238.m_Constraint = i1239[6]
  i1238.m_ConstraintCount = i1239[7]
  i1238.m_Padding = UnityEngine.RectOffset.FromPaddings(i1239[8], i1239[9], i1239[10], i1239[11])
  i1238.m_ChildAlignment = i1239[12]
  return i1238
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1240 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1241 = data
  i1240.m_HorizontalFit = i1241[0]
  i1240.m_VerticalFit = i1241[1]
  return i1240
}

Deserializers["SpriteFitScreenHeight"] = function (request, data, root) {
  var i1242 = root || request.c( 'SpriteFitScreenHeight' )
  var i1243 = data
  request.r(i1243[0], i1243[1], 0, i1242, 'm_Camera')
  i1242.m_Overscan = i1243[2]
  return i1242
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i1244 = root || request.c( 'LevelManager' )
  var i1245 = data
  request.r(i1245[0], i1245[1], 0, i1244, 'birdPrefab')
  request.r(i1245[2], i1245[3], 0, i1244, 'birdDataSO')
  request.r(i1245[4], i1245[5], 0, i1244, 'obstacleConfigSO')
  request.r(i1245[6], i1245[7], 0, i1244, 'boardManager')
  request.r(i1245[8], i1245[9], 0, i1244, 'levelDifficultyFile')
  i1244.totalLevelCount = i1245[10]
  i1244.playableLevel = i1245[11]
  var i1247 = i1245[12]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('LevelManager+LevelSet', i1247[i + 0]) );
  }
  i1244.levelSets = i1246
  return i1244
}

Deserializers["LevelManager+LevelSet"] = function (request, data, root) {
  var i1250 = root || request.c( 'LevelManager+LevelSet' )
  var i1251 = data
  i1250.name = i1251[0]
  request.r(i1251[1], i1251[2], 0, i1250, 'levelTableFile')
  var i1253 = i1251[3]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 2) {
  request.r(i1253[i + 0], i1253[i + 1], 2, i1252, '')
  }
  i1250.bubbleFiles = i1252
  return i1250
}

Deserializers["ControllerManager"] = function (request, data, root) {
  var i1256 = root || request.c( 'ControllerManager' )
  var i1257 = data
  i1256.layerMask = UnityEngine.LayerMask.FromIntegerValue( i1257[0] )
  i1256.layerMaskBlocker = UnityEngine.LayerMask.FromIntegerValue( i1257[1] )
  i1256.layerDockMask = UnityEngine.LayerMask.FromIntegerValue( i1257[2] )
  return i1256
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1258 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1259 = data
  request.r(i1259[0], i1259[1], 0, i1258, 'm_FirstSelected')
  i1258.m_sendNavigationEvents = !!i1259[2]
  i1258.m_DragThreshold = i1259[3]
  return i1258
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1260 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1261 = data
  i1260.m_HorizontalAxis = i1261[0]
  i1260.m_VerticalAxis = i1261[1]
  i1260.m_SubmitButton = i1261[2]
  i1260.m_CancelButton = i1261[3]
  i1260.m_InputActionsPerSecond = i1261[4]
  i1260.m_RepeatDelay = i1261[5]
  i1260.m_ForceModuleActive = !!i1261[6]
  i1260.m_SendPointerHoverToParent = !!i1261[7]
  return i1260
}

Deserializers["BoosterManager"] = function (request, data, root) {
  var i1262 = root || request.c( 'BoosterManager' )
  var i1263 = data
  i1262.OnGlobalStateChanged = request.d('System.Action', i1263[0], i1262.OnGlobalStateChanged)
  request.r(i1263[1], i1263[2], 0, i1262, 'MagnetNestFxPrefab')
  request.r(i1263[3], i1263[4], 0, i1262, '_shuffleFXPrefab')
  request.r(i1263[5], i1263[6], 0, i1262, 'ClearHitFxPrefab')
  i1262.clearHitFxLifetime = i1263[7]
  i1262.shuffleSuckDuration = i1263[8]
  i1262.shuffleSpreadDuration = i1263[9]
  i1262.shuffleStagger = i1263[10]
  i1262.shuffleBirdSortingOrder = i1263[11]
  request.r(i1263[12], i1263[13], 0, i1262, 'boosterConfig')
  return i1262
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1264 = root || request.c( 'System.Action' )
  var i1265 = data
  return i1264
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1266 = root || request.c( 'GameManager' )
  var i1267 = data
  i1266.currentGameState = i1267[0]
  i1266.isTestMode = !!i1267[1]
  return i1266
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i1268 = root || request.c( 'SoundManager' )
  var i1269 = data
  request.r(i1269[0], i1269[1], 0, i1268, 'musicSource')
  i1268.resultMusicVolumeMultiplier = i1269[2]
  i1268.ingameMusicVolume = i1269[3]
  request.r(i1269[4], i1269[5], 0, i1268, 'parentSFX')
  i1268.poolSize = i1269[6]
  i1268.maxLoopingPerClip = i1269[7]
  var i1271 = i1269[8]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i1271.length; i += 2) {
  request.r(i1271[i + 0], i1271[i + 1], 1, i1270, '')
  }
  i1268.musicClips = i1270
  var i1273 = i1269[9]
  var i1272 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i1273.length; i += 2) {
  request.r(i1273[i + 0], i1273[i + 1], 1, i1272, '')
  }
  i1268.sfxClips = i1272
  i1268.importantVolume = i1269[10]
  i1268.normalVolume = i1269[11]
  i1268.minorVolume = i1269[12]
  i1268.smallVolume = i1269[13]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1277 = data
  request.r(i1277[0], i1277[1], 0, i1276, 'clip')
  request.r(i1277[2], i1277[3], 0, i1276, 'outputAudioMixerGroup')
  i1276.playOnAwake = !!i1277[4]
  i1276.loop = !!i1277[5]
  i1276.time = i1277[6]
  i1276.volume = i1277[7]
  i1276.pitch = i1277[8]
  i1276.enabled = !!i1277[9]
  return i1276
}

Deserializers["ParticlesManager"] = function (request, data, root) {
  var i1278 = root || request.c( 'ParticlesManager' )
  var i1279 = data
  request.r(i1279[0], i1279[1], 0, i1278, 'set')
  request.r(i1279[2], i1279[3], 0, i1278, 'target')
  request.r(i1279[4], i1279[5], 0, i1278, 'startTarget')
  var i1281 = i1279[6]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 2) {
  request.r(i1281[i + 0], i1281[i + 1], 2, i1280, '')
  }
  i1278.particleEffectData = i1280
  request.r(i1279[7], i1279[8], 0, i1278, 'coinPrefab')
  i1278.spreadRange = i1279[9]
  i1278.spreadRangeOnSum = i1279[10]
  i1278.moveDuration = i1279[11]
  i1278.magMut = i1279[12]
  i1278.toptopOGScale = i1279[13]
  i1278.sum = i1279[14]
  return i1278
}

Deserializers["GameData"] = function (request, data, root) {
  var i1284 = root || request.c( 'GameData' )
  var i1285 = data
  var i1287 = i1285[0]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 4) {
    i1286.push( new pc.Color(i1287[i + 0], i1287[i + 1], i1287[i + 2], i1287[i + 3]) );
  }
  i1284.birdColors = i1286
  return i1284
}

Deserializers["ComboManager"] = function (request, data, root) {
  var i1290 = root || request.c( 'ComboManager' )
  var i1291 = data
  i1290.OnTimerComplete = request.d('System.Action', i1291[0], i1290.OnTimerComplete)
  i1290.comboTime = i1291[1]
  return i1290
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1293 = data
  i1292.m_UiScaleMode = i1293[0]
  i1292.m_ReferencePixelsPerUnit = i1293[1]
  i1292.m_ScaleFactor = i1293[2]
  i1292.m_ReferenceResolution = new pc.Vec2( i1293[3], i1293[4] )
  i1292.m_ScreenMatchMode = i1293[5]
  i1292.m_MatchWidthOrHeight = i1293[6]
  i1292.m_PhysicalUnit = i1293[7]
  i1292.m_FallbackScreenDPI = i1293[8]
  i1292.m_DefaultSpriteDPI = i1293[9]
  i1292.m_DynamicPixelsPerUnit = i1293[10]
  i1292.m_PresetInfoIsWorld = !!i1293[11]
  return i1292
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1295 = data
  i1294.m_IgnoreReversedGraphics = !!i1295[0]
  i1294.m_BlockingObjects = i1295[1]
  i1294.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1295[2] )
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1297 = data
  i1296.m_Alpha = i1297[0]
  i1296.m_Interactable = !!i1297[1]
  i1296.m_BlocksRaycasts = !!i1297[2]
  i1296.m_IgnoreParentGroups = !!i1297[3]
  i1296.enabled = !!i1297[4]
  return i1296
}

Deserializers["GameplayUI"] = function (request, data, root) {
  var i1298 = root || request.c( 'GameplayUI' )
  var i1299 = data
  request.r(i1299[0], i1299[1], 0, i1298, 'warningHard')
  request.r(i1299[2], i1299[3], 0, i1298, 'warningExtreme')
  request.r(i1299[4], i1299[5], 0, i1298, 'canvaG')
  request.r(i1299[6], i1299[7], 0, i1298, 'imgPanel')
  i1298.IsDestroyOnClose = !!i1299[8]
  i1298.isFadeIn = !!i1299[9]
  i1298.isFadeOut = !!i1299[10]
  i1298.isSoundOpen = !!i1299[11]
  i1298.OnOpen = request.d('System.Action', i1299[12], i1298.OnOpen)
  i1298.OnClose = request.d('System.Action', i1299[13], i1298.OnClose)
  i1298.OnFadeIn_Complete = request.d('System.Action', i1299[14], i1298.OnFadeIn_Complete)
  i1298.OnFadeOut_Complete = request.d('System.Action', i1299[15], i1298.OnFadeOut_Complete)
  request.r(i1299[16], i1299[17], 0, i1298, 'contentFadeIO')
  request.r(i1299[18], i1299[19], 0, i1298, 'levelText')
  request.r(i1299[20], i1299[21], 0, i1298, 'settingButton')
  request.r(i1299[22], i1299[23], 0, i1298, 'outButton')
  request.r(i1299[24], i1299[25], 0, i1298, 'musicButton')
  request.r(i1299[26], i1299[27], 0, i1298, 'soundButton')
  request.r(i1299[28], i1299[29], 0, i1298, 'happticButton')
  request.r(i1299[30], i1299[31], 0, i1298, 'replayButton')
  request.r(i1299[32], i1299[33], 0, i1298, 'canlelSettingButton')
  var i1301 = i1299[34]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 2) {
  request.r(i1301[i + 0], i1301[i + 1], 2, i1300, '')
  }
  i1298.boosterItemUIs = i1300
  request.r(i1299[35], i1299[36], 0, i1298, 'musicCrossGameObject')
  request.r(i1299[37], i1299[38], 0, i1298, 'soundCrossGameObject')
  request.r(i1299[39], i1299[40], 0, i1298, 'happticCrossGameObject')
  request.r(i1299[41], i1299[42], 0, i1298, 'ContentBottomTransform')
  request.r(i1299[43], i1299[44], 0, i1298, 'pointBottom')
  request.r(i1299[45], i1299[46], 0, i1298, 'tagLevelImage')
  request.r(i1299[47], i1299[48], 0, i1298, 'tagSettingImage')
  request.r(i1299[49], i1299[50], 0, i1298, 'tagSetting1Image')
  request.r(i1299[51], i1299[52], 0, i1298, 'tagSetting2Image')
  var i1303 = i1299[53]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 2) {
  request.r(i1303[i + 0], i1303[i + 1], 2, i1302, '')
  }
  i1298.tagLevelSprites = i1302
  var i1305 = i1299[54]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 2) {
  request.r(i1305[i + 0], i1305[i + 1], 2, i1304, '')
  }
  i1298.tagSettingSprites = i1304
  var i1307 = i1299[55]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 2) {
  request.r(i1307[i + 0], i1307[i + 1], 2, i1306, '')
  }
  i1298.tagSetting1Sprites = i1306
  var i1309 = i1299[56]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 2) {
  request.r(i1309[i + 0], i1309[i + 1], 2, i1308, '')
  }
  i1298.tagSetting2Sprites = i1308
  request.r(i1299[57], i1299[58], 0, i1298, 'PanelPreWin')
  request.r(i1299[59], i1299[60], 0, i1298, 'textPanelWinTransform')
  request.r(i1299[61], i1299[62], 0, i1298, 'winPulseImage')
  i1298.winPulseScale = i1299[63]
  i1298.winPulseDuration = i1299[64]
  request.r(i1299[65], i1299[66], 0, i1298, 'btnPreWinContinue')
  request.r(i1299[67], i1299[68], 0, i1298, 'btnPlayAgain')
  i1298.preWinTapDelay = i1299[69]
  request.r(i1299[70], i1299[71], 0, i1298, 'clearSlingshot')
  i1298.slingshotPopDuration = i1299[72]
  request.r(i1299[73], i1299[74], 0, i1298, 'settingAnimator')
  request.r(i1299[75], i1299[76], 0, i1298, 'loseUI')
  return i1298
}

Deserializers["Crystal.SafeArea"] = function (request, data, root) {
  var i1312 = root || request.c( 'Crystal.SafeArea' )
  var i1313 = data
  i1312.ConformX = !!i1313[0]
  i1312.ConformY = !!i1313[1]
  i1312.Logging = !!i1313[2]
  return i1312
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1314 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1315 = data
  i1314.m_Spacing = i1315[0]
  i1314.m_ChildForceExpandWidth = !!i1315[1]
  i1314.m_ChildForceExpandHeight = !!i1315[2]
  i1314.m_ChildControlWidth = !!i1315[3]
  i1314.m_ChildControlHeight = !!i1315[4]
  i1314.m_ChildScaleWidth = !!i1315[5]
  i1314.m_ChildScaleHeight = !!i1315[6]
  i1314.m_ReverseArrangement = !!i1315[7]
  i1314.m_Padding = UnityEngine.RectOffset.FromPaddings(i1315[8], i1315[9], i1315[10], i1315[11])
  i1314.m_ChildAlignment = i1315[12]
  return i1314
}

Deserializers["BoosterItemUI"] = function (request, data, root) {
  var i1316 = root || request.c( 'BoosterItemUI' )
  var i1317 = data
  i1316.type = i1317[0]
  request.r(i1317[1], i1317[2], 0, i1316, 'icon')
  request.r(i1317[3], i1317[4], 0, i1316, 'button')
  request.r(i1317[5], i1317[6], 0, i1316, 'amountObject')
  request.r(i1317[7], i1317[8], 0, i1316, 'addObject')
  request.r(i1317[9], i1317[10], 0, i1316, 'freeObject')
  request.r(i1317[11], i1317[12], 0, i1316, 'amountText')
  request.r(i1317[13], i1317[14], 0, i1316, 'lockObj')
  request.r(i1317[15], i1317[16], 0, i1316, 'levelText')
  request.r(i1317[17], i1317[18], 0, i1316, 'priceText')
  return i1316
}

Deserializers["ButtonScaleUI"] = function (request, data, root) {
  var i1318 = root || request.c( 'ButtonScaleUI' )
  var i1319 = data
  i1318.scaleDuration = i1319[0]
  i1318.action = request.d('UnityEngine.Events.UnityEvent', i1319[1], i1318.action)
  request.r(i1319[2], i1319[3], 0, i1318, 'transformToScale')
  i1318.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1319[4], i1318.m_OnClick)
  i1318.m_Navigation = request.d('UnityEngine.UI.Navigation', i1319[5], i1318.m_Navigation)
  i1318.m_Transition = i1319[6]
  i1318.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1319[7], i1318.m_Colors)
  i1318.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1319[8], i1318.m_SpriteState)
  i1318.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1319[9], i1318.m_AnimationTriggers)
  i1318.m_Interactable = !!i1319[10]
  request.r(i1319[11], i1319[12], 0, i1318, 'm_TargetGraphic')
  return i1318
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1320 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1321 = data
  i1320.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1321[0], i1320.m_PersistentCalls)
  return i1320
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1322 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1323 = data
  var i1325 = i1323[0]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.add(request.d('UnityEngine.Events.PersistentCall', i1325[i + 0]));
  }
  i1322.m_Calls = i1324
  return i1322
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1328 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1329 = data
  request.r(i1329[0], i1329[1], 0, i1328, 'm_Target')
  i1328.m_TargetAssemblyTypeName = i1329[2]
  i1328.m_MethodName = i1329[3]
  i1328.m_Mode = i1329[4]
  i1328.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1329[5], i1328.m_Arguments)
  i1328.m_CallState = i1329[6]
  return i1328
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1330 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1331 = data
  i1330.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1331[0], i1330.m_PersistentCalls)
  return i1330
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1332 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1333 = data
  i1332.m_Mode = i1333[0]
  i1332.m_WrapAround = !!i1333[1]
  request.r(i1333[2], i1333[3], 0, i1332, 'm_SelectOnUp')
  request.r(i1333[4], i1333[5], 0, i1332, 'm_SelectOnDown')
  request.r(i1333[6], i1333[7], 0, i1332, 'm_SelectOnLeft')
  request.r(i1333[8], i1333[9], 0, i1332, 'm_SelectOnRight')
  return i1332
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1334 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1335 = data
  i1334.m_NormalColor = new pc.Color(i1335[0], i1335[1], i1335[2], i1335[3])
  i1334.m_HighlightedColor = new pc.Color(i1335[4], i1335[5], i1335[6], i1335[7])
  i1334.m_PressedColor = new pc.Color(i1335[8], i1335[9], i1335[10], i1335[11])
  i1334.m_SelectedColor = new pc.Color(i1335[12], i1335[13], i1335[14], i1335[15])
  i1334.m_DisabledColor = new pc.Color(i1335[16], i1335[17], i1335[18], i1335[19])
  i1334.m_ColorMultiplier = i1335[20]
  i1334.m_FadeDuration = i1335[21]
  return i1334
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1336 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1337 = data
  request.r(i1337[0], i1337[1], 0, i1336, 'm_HighlightedSprite')
  request.r(i1337[2], i1337[3], 0, i1336, 'm_PressedSprite')
  request.r(i1337[4], i1337[5], 0, i1336, 'm_SelectedSprite')
  request.r(i1337[6], i1337[7], 0, i1336, 'm_DisabledSprite')
  return i1336
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1338 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1339 = data
  i1338.m_NormalTrigger = i1339[0]
  i1338.m_HighlightedTrigger = i1339[1]
  i1338.m_PressedTrigger = i1339[2]
  i1338.m_SelectedTrigger = i1339[3]
  i1338.m_DisabledTrigger = i1339[4]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1341 = data
  request.r(i1341[0], i1341[1], 0, i1340, 'animatorController')
  request.r(i1341[2], i1341[3], 0, i1340, 'avatar')
  i1340.updateMode = i1341[4]
  i1340.hasTransformHierarchy = !!i1341[5]
  i1340.applyRootMotion = !!i1341[6]
  var i1343 = i1341[7]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 2) {
  request.r(i1343[i + 0], i1343[i + 1], 2, i1342, '')
  }
  i1340.humanBones = i1342
  i1340.enabled = !!i1341[8]
  return i1340
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1344 = root || request.c( 'UnityEngine.UI.Button' )
  var i1345 = data
  i1344.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1345[0], i1344.m_OnClick)
  i1344.m_Navigation = request.d('UnityEngine.UI.Navigation', i1345[1], i1344.m_Navigation)
  i1344.m_Transition = i1345[2]
  i1344.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1345[3], i1344.m_Colors)
  i1344.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1345[4], i1344.m_SpriteState)
  i1344.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1345[5], i1344.m_AnimationTriggers)
  i1344.m_Interactable = !!i1345[6]
  request.r(i1345[7], i1345[8], 0, i1344, 'm_TargetGraphic')
  return i1344
}

Deserializers["SlingshotAnimator"] = function (request, data, root) {
  var i1346 = root || request.c( 'SlingshotAnimator' )
  var i1347 = data
  i1346.useUnscaledTime = !!i1347[0]
  i1346.speed = i1347[1]
  i1346.flightTime = i1347[2]
  i1346.reloadDelay = i1347[3]
  request.r(i1347[4], i1347[5], 0, i1346, 'animJson')
  var i1349 = i1347[6]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 2) {
  request.r(i1349[i + 0], i1349[i + 1], 2, i1348, '')
  }
  i1346.sprites = i1348
  return i1346
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1350 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1351 = data
  i1350.m_ShowMaskGraphic = !!i1351[0]
  return i1350
}

Deserializers["ColorBirdLogoAnimator"] = function (request, data, root) {
  var i1352 = root || request.c( 'ColorBirdLogoAnimator' )
  var i1353 = data
  i1352.playOnEnable = !!i1353[0]
  i1352.useUnscaledTime = !!i1353[1]
  i1352.playIdle = !!i1353[2]
  i1352.skipIntro = !!i1353[3]
  i1352.loopIntroOutro = !!i1353[4]
  i1352.loopHoldTime = i1353[5]
  i1352.speed = i1353[6]
  request.r(i1353[7], i1353[8], 0, i1352, 'animJson')
  var i1355 = i1353[9]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 2) {
  request.r(i1355[i + 0], i1355[i + 1], 2, i1354, '')
  }
  i1352.layerSprites = i1354
  return i1352
}

Deserializers["LoseUI"] = function (request, data, root) {
  var i1356 = root || request.c( 'LoseUI' )
  var i1357 = data
  request.r(i1357[0], i1357[1], 0, i1356, 'canvaG')
  request.r(i1357[2], i1357[3], 0, i1356, 'imgPanel')
  i1356.IsDestroyOnClose = !!i1357[4]
  i1356.isFadeIn = !!i1357[5]
  i1356.isFadeOut = !!i1357[6]
  i1356.isSoundOpen = !!i1357[7]
  i1356.OnOpen = request.d('System.Action', i1357[8], i1356.OnOpen)
  i1356.OnClose = request.d('System.Action', i1357[9], i1356.OnClose)
  i1356.OnFadeIn_Complete = request.d('System.Action', i1357[10], i1356.OnFadeIn_Complete)
  i1356.OnFadeOut_Complete = request.d('System.Action', i1357[11], i1356.OnFadeOut_Complete)
  request.r(i1357[12], i1357[13], 0, i1356, 'contentFadeIO')
  request.r(i1357[14], i1357[15], 0, i1356, 'buttonFullScreen')
  request.r(i1357[16], i1357[17], 0, i1356, 'buttonRetry')
  request.r(i1357[18], i1357[19], 0, i1356, 'losePulseImage')
  i1356.losePulseScale = i1357[20]
  i1356.losePulseDuration = i1357[21]
  return i1356
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1358 = root || request.c( 'UnityEngine.UI.Text' )
  var i1359 = data
  i1358.m_FontData = request.d('UnityEngine.UI.FontData', i1359[0], i1358.m_FontData)
  i1358.m_Text = i1359[1]
  request.r(i1359[2], i1359[3], 0, i1358, 'm_Material')
  i1358.m_Maskable = !!i1359[4]
  i1358.m_Color = new pc.Color(i1359[5], i1359[6], i1359[7], i1359[8])
  i1358.m_RaycastTarget = !!i1359[9]
  i1358.m_RaycastPadding = new pc.Vec4( i1359[10], i1359[11], i1359[12], i1359[13] )
  return i1358
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1360 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1361 = data
  request.r(i1361[0], i1361[1], 0, i1360, 'm_Font')
  i1360.m_FontSize = i1361[2]
  i1360.m_FontStyle = i1361[3]
  i1360.m_BestFit = !!i1361[4]
  i1360.m_MinSize = i1361[5]
  i1360.m_MaxSize = i1361[6]
  i1360.m_Alignment = i1361[7]
  i1360.m_AlignByGeometry = !!i1361[8]
  i1360.m_RichText = !!i1361[9]
  i1360.m_HorizontalOverflow = i1361[10]
  i1360.m_VerticalOverflow = i1361[11]
  i1360.m_LineSpacing = i1361[12]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1363 = data
  i1362.ambientIntensity = i1363[0]
  i1362.reflectionIntensity = i1363[1]
  i1362.ambientMode = i1363[2]
  i1362.ambientLight = new pc.Color(i1363[3], i1363[4], i1363[5], i1363[6])
  i1362.ambientSkyColor = new pc.Color(i1363[7], i1363[8], i1363[9], i1363[10])
  i1362.ambientGroundColor = new pc.Color(i1363[11], i1363[12], i1363[13], i1363[14])
  i1362.ambientEquatorColor = new pc.Color(i1363[15], i1363[16], i1363[17], i1363[18])
  i1362.fogColor = new pc.Color(i1363[19], i1363[20], i1363[21], i1363[22])
  i1362.fogEndDistance = i1363[23]
  i1362.fogStartDistance = i1363[24]
  i1362.fogDensity = i1363[25]
  i1362.fog = !!i1363[26]
  request.r(i1363[27], i1363[28], 0, i1362, 'skybox')
  i1362.fogMode = i1363[29]
  var i1365 = i1363[30]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1365[i + 0]) );
  }
  i1362.lightmaps = i1364
  i1362.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1363[31], i1362.lightProbes)
  i1362.lightmapsMode = i1363[32]
  i1362.mixedBakeMode = i1363[33]
  i1362.environmentLightingMode = i1363[34]
  i1362.ambientProbe = new pc.SphericalHarmonicsL2(i1363[35])
  request.r(i1363[36], i1363[37], 0, i1362, 'customReflection')
  request.r(i1363[38], i1363[39], 0, i1362, 'defaultReflection')
  i1362.defaultReflectionMode = i1363[40]
  i1362.defaultReflectionResolution = i1363[41]
  i1362.sunLightObjectId = i1363[42]
  i1362.pixelLightCount = i1363[43]
  i1362.defaultReflectionHDR = !!i1363[44]
  i1362.hasLightDataAsset = !!i1363[45]
  i1362.hasManualGenerate = !!i1363[46]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1369 = data
  request.r(i1369[0], i1369[1], 0, i1368, 'lightmapColor')
  request.r(i1369[2], i1369[3], 0, i1368, 'lightmapDirection')
  request.r(i1369[4], i1369[5], 0, i1368, 'shadowMask')
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1370 = root || new UnityEngine.LightProbes()
  var i1371 = data
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i1379 = data
  i1378.name = i1379[0]
  i1378.bounciness = i1379[1]
  i1378.friction = i1379[2]
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1381 = data
  var i1383 = i1381[0]
  var i1382 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1383[i + 0]));
  }
  i1380.ShaderCompilationErrors = i1382
  i1380.name = i1381[1]
  i1380.guid = i1381[2]
  var i1385 = i1381[3]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( i1385[i + 0] );
  }
  i1380.shaderDefinedKeywords = i1384
  var i1387 = i1381[4]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1387[i + 0]) );
  }
  i1380.passes = i1386
  var i1389 = i1381[5]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1389[i + 0]) );
  }
  i1380.usePasses = i1388
  var i1391 = i1381[6]
  var i1390 = []
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1391[i + 0]) );
  }
  i1380.defaultParameterValues = i1390
  request.r(i1381[7], i1381[8], 0, i1380, 'unityFallbackShader')
  i1380.readDepth = !!i1381[9]
  i1380.hasDepthOnlyPass = !!i1381[10]
  i1380.isCreatedByShaderGraph = !!i1381[11]
  i1380.disableBatching = !!i1381[12]
  i1380.compiled = !!i1381[13]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1395 = data
  i1394.shaderName = i1395[0]
  i1394.errorMessage = i1395[1]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1398 = root || new pc.UnityShaderPass()
  var i1399 = data
  i1398.id = i1399[0]
  i1398.subShaderIndex = i1399[1]
  i1398.name = i1399[2]
  i1398.passType = i1399[3]
  i1398.grabPassTextureName = i1399[4]
  i1398.usePass = !!i1399[5]
  i1398.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1399[6], i1398.zTest)
  i1398.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1399[7], i1398.zWrite)
  i1398.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1399[8], i1398.culling)
  i1398.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1399[9], i1398.blending)
  i1398.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1399[10], i1398.alphaBlending)
  i1398.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1399[11], i1398.colorWriteMask)
  i1398.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1399[12], i1398.offsetUnits)
  i1398.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1399[13], i1398.offsetFactor)
  i1398.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1399[14], i1398.stencilRef)
  i1398.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1399[15], i1398.stencilReadMask)
  i1398.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1399[16], i1398.stencilWriteMask)
  i1398.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1399[17], i1398.stencilOp)
  i1398.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1399[18], i1398.stencilOpFront)
  i1398.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1399[19], i1398.stencilOpBack)
  var i1401 = i1399[20]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1401[i + 0]) );
  }
  i1398.tags = i1400
  var i1403 = i1399[21]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( i1403[i + 0] );
  }
  i1398.passDefinedKeywords = i1402
  var i1405 = i1399[22]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1405[i + 0]) );
  }
  i1398.passDefinedKeywordGroups = i1404
  var i1407 = i1399[23]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1407[i + 0]) );
  }
  i1398.variants = i1406
  var i1409 = i1399[24]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1409[i + 0]) );
  }
  i1398.excludedVariants = i1408
  i1398.hasDepthReader = !!i1399[25]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1411 = data
  i1410.val = i1411[0]
  i1410.name = i1411[1]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1413 = data
  i1412.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1413[0], i1412.src)
  i1412.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1413[1], i1412.dst)
  i1412.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1413[2], i1412.op)
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1415 = data
  i1414.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1415[0], i1414.pass)
  i1414.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1415[1], i1414.fail)
  i1414.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1415[2], i1414.zFail)
  i1414.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1415[3], i1414.comp)
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1419 = data
  i1418.name = i1419[0]
  i1418.value = i1419[1]
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1423 = data
  var i1425 = i1423[0]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( i1425[i + 0] );
  }
  i1422.keywords = i1424
  i1422.hasDiscard = !!i1423[1]
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1429 = data
  i1428.passId = i1429[0]
  i1428.subShaderIndex = i1429[1]
  var i1431 = i1429[2]
  var i1430 = []
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.push( i1431[i + 0] );
  }
  i1428.keywords = i1430
  i1428.vertexProgram = i1429[3]
  i1428.fragmentProgram = i1429[4]
  i1428.exportedForWebGl2 = !!i1429[5]
  i1428.readDepth = !!i1429[6]
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1435 = data
  request.r(i1435[0], i1435[1], 0, i1434, 'shader')
  i1434.pass = i1435[2]
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1439 = data
  i1438.name = i1439[0]
  i1438.type = i1439[1]
  i1438.value = new pc.Vec4( i1439[2], i1439[3], i1439[4], i1439[5] )
  i1438.textureValue = i1439[6]
  i1438.shaderPropertyFlag = i1439[7]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1441 = data
  i1440.name = i1441[0]
  request.r(i1441[1], i1441[2], 0, i1440, 'texture')
  i1440.aabb = i1441[3]
  i1440.vertices = i1441[4]
  i1440.triangles = i1441[5]
  i1440.textureRect = UnityEngine.Rect.MinMaxRect(i1441[6], i1441[7], i1441[8], i1441[9])
  i1440.packedRect = UnityEngine.Rect.MinMaxRect(i1441[10], i1441[11], i1441[12], i1441[13])
  i1440.border = new pc.Vec4( i1441[14], i1441[15], i1441[16], i1441[17] )
  i1440.transparency = i1441[18]
  i1440.bounds = i1441[19]
  i1440.pixelsPerUnit = i1441[20]
  i1440.textureWidth = i1441[21]
  i1440.textureHeight = i1441[22]
  i1440.nativeSize = new pc.Vec2( i1441[23], i1441[24] )
  i1440.pivot = new pc.Vec2( i1441[25], i1441[26] )
  i1440.textureRectOffset = new pc.Vec2( i1441[27], i1441[28] )
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1443 = data
  i1442.name = i1443[0]
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1445 = data
  i1444.name = i1445[0]
  i1444.wrapMode = i1445[1]
  i1444.isLooping = !!i1445[2]
  i1444.length = i1445[3]
  var i1447 = i1445[4]
  var i1446 = []
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1447[i + 0]) );
  }
  i1444.curves = i1446
  var i1449 = i1445[5]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1449[i + 0]) );
  }
  i1444.events = i1448
  i1444.halfPrecision = !!i1445[6]
  i1444._frameRate = i1445[7]
  i1444.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1445[8], i1444.localBounds)
  i1444.hasMuscleCurves = !!i1445[9]
  var i1451 = i1445[10]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( i1451[i + 0] );
  }
  i1444.clipMuscleConstant = i1450
  i1444.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1445[11], i1444.clipBindingConstant)
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1455 = data
  i1454.path = i1455[0]
  i1454.hash = i1455[1]
  i1454.componentType = i1455[2]
  i1454.property = i1455[3]
  i1454.keys = i1455[4]
  var i1457 = i1455[5]
  var i1456 = []
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1457[i + 0]) );
  }
  i1454.objectReferenceKeys = i1456
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1461 = data
  i1460.time = i1461[0]
  request.r(i1461[1], i1461[2], 0, i1460, 'value')
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1465 = data
  i1464.functionName = i1465[0]
  i1464.floatParameter = i1465[1]
  i1464.intParameter = i1465[2]
  i1464.stringParameter = i1465[3]
  request.r(i1465[4], i1465[5], 0, i1464, 'objectReferenceParameter')
  i1464.time = i1465[6]
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1467 = data
  i1466.center = new pc.Vec3( i1467[0], i1467[1], i1467[2] )
  i1466.extends = new pc.Vec3( i1467[3], i1467[4], i1467[5] )
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1471 = data
  var i1473 = i1471[0]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.push( i1473[i + 0] );
  }
  i1470.genericBindings = i1472
  var i1475 = i1471[1]
  var i1474 = []
  for(var i = 0; i < i1475.length; i += 1) {
    i1474.push( i1475[i + 0] );
  }
  i1470.pptrCurveMapping = i1474
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1477 = data
  i1476.name = i1477[0]
  i1476.ascent = i1477[1]
  i1476.originalLineHeight = i1477[2]
  i1476.fontSize = i1477[3]
  var i1479 = i1477[4]
  var i1478 = []
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1479[i + 0]) );
  }
  i1476.characterInfo = i1478
  request.r(i1477[5], i1477[6], 0, i1476, 'texture')
  i1476.originalFontSize = i1477[7]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1483 = data
  i1482.index = i1483[0]
  i1482.advance = i1483[1]
  i1482.bearing = i1483[2]
  i1482.glyphWidth = i1483[3]
  i1482.glyphHeight = i1483[4]
  i1482.minX = i1483[5]
  i1482.maxX = i1483[6]
  i1482.minY = i1483[7]
  i1482.maxY = i1483[8]
  i1482.uvBottomLeftX = i1483[9]
  i1482.uvBottomLeftY = i1483[10]
  i1482.uvBottomRightX = i1483[11]
  i1482.uvBottomRightY = i1483[12]
  i1482.uvTopLeftX = i1483[13]
  i1482.uvTopLeftY = i1483[14]
  i1482.uvTopRightX = i1483[15]
  i1482.uvTopRightY = i1483[16]
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1485 = data
  i1484.name = i1485[0]
  var i1487 = i1485[1]
  var i1486 = []
  for(var i = 0; i < i1487.length; i += 1) {
    i1486.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1487[i + 0]) );
  }
  i1484.layers = i1486
  var i1489 = i1485[2]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 1) {
    i1488.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1489[i + 0]) );
  }
  i1484.parameters = i1488
  i1484.animationClips = i1485[3]
  i1484.avatarUnsupported = i1485[4]
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1493 = data
  i1492.name = i1493[0]
  i1492.defaultWeight = i1493[1]
  i1492.blendingMode = i1493[2]
  i1492.avatarMask = i1493[3]
  i1492.syncedLayerIndex = i1493[4]
  i1492.syncedLayerAffectsTiming = !!i1493[5]
  i1492.syncedLayers = i1493[6]
  i1492.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1493[7], i1492.stateMachine)
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1495 = data
  i1494.id = i1495[0]
  i1494.name = i1495[1]
  i1494.path = i1495[2]
  var i1497 = i1495[3]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1497[i + 0]) );
  }
  i1494.states = i1496
  var i1499 = i1495[4]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1499[i + 0]) );
  }
  i1494.machines = i1498
  var i1501 = i1495[5]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 1) {
    i1500.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1501[i + 0]) );
  }
  i1494.entryStateTransitions = i1500
  var i1503 = i1495[6]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1503[i + 0]) );
  }
  i1494.exitStateTransitions = i1502
  var i1505 = i1495[7]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1505[i + 0]) );
  }
  i1494.anyStateTransitions = i1504
  i1494.defaultStateId = i1495[8]
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1509 = data
  i1508.id = i1509[0]
  i1508.name = i1509[1]
  i1508.cycleOffset = i1509[2]
  i1508.cycleOffsetParameter = i1509[3]
  i1508.cycleOffsetParameterActive = !!i1509[4]
  i1508.mirror = !!i1509[5]
  i1508.mirrorParameter = i1509[6]
  i1508.mirrorParameterActive = !!i1509[7]
  i1508.motionId = i1509[8]
  i1508.nameHash = i1509[9]
  i1508.fullPathHash = i1509[10]
  i1508.speed = i1509[11]
  i1508.speedParameter = i1509[12]
  i1508.speedParameterActive = !!i1509[13]
  i1508.tag = i1509[14]
  i1508.tagHash = i1509[15]
  i1508.writeDefaultValues = !!i1509[16]
  var i1511 = i1509[17]
  var i1510 = []
  for(var i = 0; i < i1511.length; i += 2) {
  request.r(i1511[i + 0], i1511[i + 1], 2, i1510, '')
  }
  i1508.behaviours = i1510
  var i1513 = i1509[18]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1513[i + 0]) );
  }
  i1508.transitions = i1512
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1519 = data
  i1518.fullPath = i1519[0]
  i1518.canTransitionToSelf = !!i1519[1]
  i1518.duration = i1519[2]
  i1518.exitTime = i1519[3]
  i1518.hasExitTime = !!i1519[4]
  i1518.hasFixedDuration = !!i1519[5]
  i1518.interruptionSource = i1519[6]
  i1518.offset = i1519[7]
  i1518.orderedInterruption = !!i1519[8]
  i1518.destinationStateId = i1519[9]
  i1518.isExit = !!i1519[10]
  i1518.mute = !!i1519[11]
  i1518.solo = !!i1519[12]
  var i1521 = i1519[13]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1521[i + 0]) );
  }
  i1518.conditions = i1520
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1525 = data
  i1524.mode = i1525[0]
  i1524.parameter = i1525[1]
  i1524.threshold = i1525[2]
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1531 = data
  i1530.destinationStateId = i1531[0]
  i1530.isExit = !!i1531[1]
  i1530.mute = !!i1531[2]
  i1530.solo = !!i1531[3]
  var i1533 = i1531[4]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1533[i + 0]) );
  }
  i1530.conditions = i1532
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1537 = data
  i1536.defaultBool = !!i1537[0]
  i1536.defaultFloat = i1537[1]
  i1536.defaultInt = i1537[2]
  i1536.name = i1537[3]
  i1536.nameHash = i1537[4]
  i1536.type = i1537[5]
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1539 = data
  i1538.name = i1539[0]
  i1538.bytes64 = i1539[1]
  i1538.data = i1539[2]
  return i1538
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1540 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1541 = data
  request.r(i1541[0], i1541[1], 0, i1540, 'atlas')
  i1540.normalStyle = i1541[2]
  i1540.normalSpacingOffset = i1541[3]
  i1540.boldStyle = i1541[4]
  i1540.boldSpacing = i1541[5]
  i1540.italicStyle = i1541[6]
  i1540.tabSize = i1541[7]
  i1540.hashCode = i1541[8]
  request.r(i1541[9], i1541[10], 0, i1540, 'material')
  i1540.materialHashCode = i1541[11]
  i1540.m_Version = i1541[12]
  i1540.m_SourceFontFileGUID = i1541[13]
  request.r(i1541[14], i1541[15], 0, i1540, 'm_SourceFontFile_EditorRef')
  request.r(i1541[16], i1541[17], 0, i1540, 'm_SourceFontFile')
  i1540.m_AtlasPopulationMode = i1541[18]
  i1540.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1541[19], i1540.m_FaceInfo)
  var i1543 = i1541[20]
  var i1542 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.add(request.d('UnityEngine.TextCore.Glyph', i1543[i + 0]));
  }
  i1540.m_GlyphTable = i1542
  var i1545 = i1541[21]
  var i1544 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.add(request.d('TMPro.TMP_Character', i1545[i + 0]));
  }
  i1540.m_CharacterTable = i1544
  var i1547 = i1541[22]
  var i1546 = []
  for(var i = 0; i < i1547.length; i += 2) {
  request.r(i1547[i + 0], i1547[i + 1], 2, i1546, '')
  }
  i1540.m_AtlasTextures = i1546
  i1540.m_AtlasTextureIndex = i1541[23]
  i1540.m_IsMultiAtlasTexturesEnabled = !!i1541[24]
  i1540.m_ClearDynamicDataOnBuild = !!i1541[25]
  var i1549 = i1541[26]
  var i1548 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1549.length; i += 1) {
    i1548.add(request.d('UnityEngine.TextCore.GlyphRect', i1549[i + 0]));
  }
  i1540.m_UsedGlyphRects = i1548
  var i1551 = i1541[27]
  var i1550 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1551.length; i += 1) {
    i1550.add(request.d('UnityEngine.TextCore.GlyphRect', i1551[i + 0]));
  }
  i1540.m_FreeGlyphRects = i1550
  i1540.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1541[28], i1540.m_fontInfo)
  i1540.m_AtlasWidth = i1541[29]
  i1540.m_AtlasHeight = i1541[30]
  i1540.m_AtlasPadding = i1541[31]
  i1540.m_AtlasRenderMode = i1541[32]
  var i1553 = i1541[33]
  var i1552 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1553.length; i += 1) {
    i1552.add(request.d('TMPro.TMP_Glyph', i1553[i + 0]));
  }
  i1540.m_glyphInfoList = i1552
  i1540.m_KerningTable = request.d('TMPro.KerningTable', i1541[34], i1540.m_KerningTable)
  i1540.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1541[35], i1540.m_FontFeatureTable)
  var i1555 = i1541[36]
  var i1554 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1555.length; i += 2) {
  request.r(i1555[i + 0], i1555[i + 1], 1, i1554, '')
  }
  i1540.fallbackFontAssets = i1554
  var i1557 = i1541[37]
  var i1556 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1557.length; i += 2) {
  request.r(i1557[i + 0], i1557[i + 1], 1, i1556, '')
  }
  i1540.m_FallbackFontAssetTable = i1556
  i1540.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1541[38], i1540.m_CreationSettings)
  var i1559 = i1541[39]
  var i1558 = []
  for(var i = 0; i < i1559.length; i += 1) {
    i1558.push( request.d('TMPro.TMP_FontWeightPair', i1559[i + 0]) );
  }
  i1540.m_FontWeightTable = i1558
  var i1561 = i1541[40]
  var i1560 = []
  for(var i = 0; i < i1561.length; i += 1) {
    i1560.push( request.d('TMPro.TMP_FontWeightPair', i1561[i + 0]) );
  }
  i1540.fontWeights = i1560
  return i1540
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1562 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1563 = data
  i1562.m_FaceIndex = i1563[0]
  i1562.m_FamilyName = i1563[1]
  i1562.m_StyleName = i1563[2]
  i1562.m_PointSize = i1563[3]
  i1562.m_Scale = i1563[4]
  i1562.m_UnitsPerEM = i1563[5]
  i1562.m_LineHeight = i1563[6]
  i1562.m_AscentLine = i1563[7]
  i1562.m_CapLine = i1563[8]
  i1562.m_MeanLine = i1563[9]
  i1562.m_Baseline = i1563[10]
  i1562.m_DescentLine = i1563[11]
  i1562.m_SuperscriptOffset = i1563[12]
  i1562.m_SuperscriptSize = i1563[13]
  i1562.m_SubscriptOffset = i1563[14]
  i1562.m_SubscriptSize = i1563[15]
  i1562.m_UnderlineOffset = i1563[16]
  i1562.m_UnderlineThickness = i1563[17]
  i1562.m_StrikethroughOffset = i1563[18]
  i1562.m_StrikethroughThickness = i1563[19]
  i1562.m_TabWidth = i1563[20]
  return i1562
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1566 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1567 = data
  i1566.m_Index = i1567[0]
  i1566.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1567[1], i1566.m_Metrics)
  i1566.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1567[2], i1566.m_GlyphRect)
  i1566.m_Scale = i1567[3]
  i1566.m_AtlasIndex = i1567[4]
  i1566.m_ClassDefinitionType = i1567[5]
  return i1566
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1568 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1569 = data
  i1568.m_Width = i1569[0]
  i1568.m_Height = i1569[1]
  i1568.m_HorizontalBearingX = i1569[2]
  i1568.m_HorizontalBearingY = i1569[3]
  i1568.m_HorizontalAdvance = i1569[4]
  return i1568
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1570 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1571 = data
  i1570.m_X = i1571[0]
  i1570.m_Y = i1571[1]
  i1570.m_Width = i1571[2]
  i1570.m_Height = i1571[3]
  return i1570
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1574 = root || request.c( 'TMPro.TMP_Character' )
  var i1575 = data
  i1574.m_ElementType = i1575[0]
  i1574.m_Unicode = i1575[1]
  i1574.m_GlyphIndex = i1575[2]
  i1574.m_Scale = i1575[3]
  return i1574
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1580 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1581 = data
  i1580.Name = i1581[0]
  i1580.PointSize = i1581[1]
  i1580.Scale = i1581[2]
  i1580.CharacterCount = i1581[3]
  i1580.LineHeight = i1581[4]
  i1580.Baseline = i1581[5]
  i1580.Ascender = i1581[6]
  i1580.CapHeight = i1581[7]
  i1580.Descender = i1581[8]
  i1580.CenterLine = i1581[9]
  i1580.SuperscriptOffset = i1581[10]
  i1580.SubscriptOffset = i1581[11]
  i1580.SubSize = i1581[12]
  i1580.Underline = i1581[13]
  i1580.UnderlineThickness = i1581[14]
  i1580.strikethrough = i1581[15]
  i1580.strikethroughThickness = i1581[16]
  i1580.TabWidth = i1581[17]
  i1580.Padding = i1581[18]
  i1580.AtlasWidth = i1581[19]
  i1580.AtlasHeight = i1581[20]
  return i1580
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1584 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1585 = data
  i1584.id = i1585[0]
  i1584.x = i1585[1]
  i1584.y = i1585[2]
  i1584.width = i1585[3]
  i1584.height = i1585[4]
  i1584.xOffset = i1585[5]
  i1584.yOffset = i1585[6]
  i1584.xAdvance = i1585[7]
  i1584.scale = i1585[8]
  return i1584
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1586 = root || request.c( 'TMPro.KerningTable' )
  var i1587 = data
  var i1589 = i1587[0]
  var i1588 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.add(request.d('TMPro.KerningPair', i1589[i + 0]));
  }
  i1586.kerningPairs = i1588
  return i1586
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1592 = root || request.c( 'TMPro.KerningPair' )
  var i1593 = data
  i1592.xOffset = i1593[0]
  i1592.m_FirstGlyph = i1593[1]
  i1592.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1593[2], i1592.m_FirstGlyphAdjustments)
  i1592.m_SecondGlyph = i1593[3]
  i1592.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1593[4], i1592.m_SecondGlyphAdjustments)
  i1592.m_IgnoreSpacingAdjustments = !!i1593[5]
  return i1592
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1594 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1595 = data
  var i1597 = i1595[0]
  var i1596 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1597[i + 0]));
  }
  i1594.m_GlyphPairAdjustmentRecords = i1596
  return i1594
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1600 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1601 = data
  i1600.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1601[0], i1600.m_FirstAdjustmentRecord)
  i1600.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1601[1], i1600.m_SecondAdjustmentRecord)
  i1600.m_FeatureLookupFlags = i1601[2]
  return i1600
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1602 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1603 = data
  i1602.m_GlyphIndex = i1603[0]
  i1602.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1603[1], i1602.m_GlyphValueRecord)
  return i1602
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1604 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1605 = data
  i1604.m_XPlacement = i1605[0]
  i1604.m_YPlacement = i1605[1]
  i1604.m_XAdvance = i1605[2]
  i1604.m_YAdvance = i1605[3]
  return i1604
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1608 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1609 = data
  i1608.sourceFontFileName = i1609[0]
  i1608.sourceFontFileGUID = i1609[1]
  i1608.pointSizeSamplingMode = i1609[2]
  i1608.pointSize = i1609[3]
  i1608.padding = i1609[4]
  i1608.packingMode = i1609[5]
  i1608.atlasWidth = i1609[6]
  i1608.atlasHeight = i1609[7]
  i1608.characterSetSelectionMode = i1609[8]
  i1608.characterSequence = i1609[9]
  i1608.referencedFontAssetGUID = i1609[10]
  i1608.referencedTextAssetGUID = i1609[11]
  i1608.fontStyle = i1609[12]
  i1608.fontStyleModifier = i1609[13]
  i1608.renderMode = i1609[14]
  i1608.includeFontFeatures = !!i1609[15]
  return i1608
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1612 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1613 = data
  request.r(i1613[0], i1613[1], 0, i1612, 'regularTypeface')
  request.r(i1613[2], i1613[3], 0, i1612, 'italicTypeface')
  return i1612
}

Deserializers["BirdDataSO"] = function (request, data, root) {
  var i1614 = root || request.c( 'BirdDataSO' )
  var i1615 = data
  var i1617 = i1615[0]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 1) {
    i1616.push( request.d('BirdData', i1617[i + 0]) );
  }
  i1614.birds = i1616
  return i1614
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1620 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1621 = data
  var i1623 = i1621[0]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 2) {
  request.r(i1623[i + 0], i1623[i + 1], 2, i1622, '')
  }
  i1620.atlasAssets = i1622
  i1620.scale = i1621[1]
  request.r(i1621[2], i1621[3], 0, i1620, 'skeletonJSON')
  i1620.isUpgradingBlendModeMaterials = !!i1621[4]
  i1620.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1621[5], i1620.blendModeMaterials)
  var i1625 = i1621[6]
  var i1624 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1625.length; i += 2) {
  request.r(i1625[i + 0], i1625[i + 1], 1, i1624, '')
  }
  i1620.skeletonDataModifiers = i1624
  var i1627 = i1621[7]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.push( i1627[i + 0] );
  }
  i1620.fromAnimation = i1626
  var i1629 = i1621[8]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.push( i1629[i + 0] );
  }
  i1620.toAnimation = i1628
  i1620.duration = i1621[9]
  i1620.defaultMix = i1621[10]
  request.r(i1621[11], i1621[12], 0, i1620, 'controller')
  return i1620
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1632 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1633 = data
  i1632.applyAdditiveMaterial = !!i1633[0]
  var i1635 = i1633[1]
  var i1634 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1635.length; i += 1) {
    i1634.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1635[i + 0]));
  }
  i1632.additiveMaterials = i1634
  var i1637 = i1633[2]
  var i1636 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1637[i + 0]));
  }
  i1632.multiplyMaterials = i1636
  var i1639 = i1633[3]
  var i1638 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1639.length; i += 1) {
    i1638.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1639[i + 0]));
  }
  i1632.screenMaterials = i1638
  i1632.requiresBlendModeMaterials = !!i1633[4]
  return i1632
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1642 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1643 = data
  i1642.pageName = i1643[0]
  request.r(i1643[1], i1643[2], 0, i1642, 'material')
  return i1642
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1646 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1647 = data
  request.r(i1647[0], i1647[1], 0, i1646, 'atlasFile')
  var i1649 = i1647[2]
  var i1648 = []
  for(var i = 0; i < i1649.length; i += 2) {
  request.r(i1649[i + 0], i1649[i + 1], 2, i1648, '')
  }
  i1646.materials = i1648
  i1646.textureLoadingMode = i1647[3]
  request.r(i1647[4], i1647[5], 0, i1646, 'onDemandTextureLoader')
  return i1646
}

Deserializers["ObstacleConfigSO"] = function (request, data, root) {
  var i1650 = root || request.c( 'ObstacleConfigSO' )
  var i1651 = data
  var i1653 = i1651[0]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( request.d('ObstacleConfigSO+ObstacleEntry', i1653[i + 0]) );
  }
  i1650.obstacles = i1652
  var i1655 = i1651[1]
  var i1654 = []
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.push( request.d('ObstacleData', i1655[i + 0]) );
  }
  i1650.obstacleDatas = i1654
  return i1650
}

Deserializers["ObstacleConfigSO+ObstacleEntry"] = function (request, data, root) {
  var i1658 = root || request.c( 'ObstacleConfigSO+ObstacleEntry' )
  var i1659 = data
  i1658.type = i1659[0]
  request.r(i1659[1], i1659[2], 0, i1658, 'prefab')
  return i1658
}

Deserializers["ObstacleData"] = function (request, data, root) {
  var i1662 = root || request.c( 'ObstacleData' )
  var i1663 = data
  i1662.name = i1663[0]
  i1662.description = i1663[1]
  request.r(i1663[2], i1663[3], 0, i1662, 'icon')
  request.r(i1663[4], i1663[5], 0, i1662, 'titleIcon')
  i1662.unlockLevel = i1663[6]
  return i1662
}

Deserializers["BoosterConfig"] = function (request, data, root) {
  var i1664 = root || request.c( 'BoosterConfig' )
  var i1665 = data
  var i1667 = i1665[0]
  var i1666 = new (System.Collections.Generic.List$1(Bridge.ns('BoosterInfo')))
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.add(request.d('BoosterInfo', i1667[i + 0]));
  }
  i1664.boosterInfos = i1666
  return i1664
}

Deserializers["BoosterInfo"] = function (request, data, root) {
  var i1670 = root || request.c( 'BoosterInfo' )
  var i1671 = data
  i1670.type = i1671[0]
  i1670.name = i1671[1]
  i1670.description = i1671[2]
  i1670.levelUnlock = i1671[3]
  request.r(i1671[4], i1671[5], 0, i1670, 'icon')
  request.r(i1671[6], i1671[7], 0, i1670, 'titleIcon')
  i1670.amountFirst = i1671[8]
  i1670.price = i1671[9]
  i1670.amountBuy = i1671[10]
  return i1670
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1672 = root || request.c( 'TMPro.TMP_Settings' )
  var i1673 = data
  i1672.m_enableWordWrapping = !!i1673[0]
  i1672.m_enableKerning = !!i1673[1]
  i1672.m_enableExtraPadding = !!i1673[2]
  i1672.m_enableTintAllSprites = !!i1673[3]
  i1672.m_enableParseEscapeCharacters = !!i1673[4]
  i1672.m_EnableRaycastTarget = !!i1673[5]
  i1672.m_GetFontFeaturesAtRuntime = !!i1673[6]
  i1672.m_missingGlyphCharacter = i1673[7]
  i1672.m_warningsDisabled = !!i1673[8]
  request.r(i1673[9], i1673[10], 0, i1672, 'm_defaultFontAsset')
  i1672.m_defaultFontAssetPath = i1673[11]
  i1672.m_defaultFontSize = i1673[12]
  i1672.m_defaultAutoSizeMinRatio = i1673[13]
  i1672.m_defaultAutoSizeMaxRatio = i1673[14]
  i1672.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1673[15], i1673[16] )
  i1672.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1673[17], i1673[18] )
  i1672.m_autoSizeTextContainer = !!i1673[19]
  i1672.m_IsTextObjectScaleStatic = !!i1673[20]
  var i1675 = i1673[21]
  var i1674 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1675.length; i += 2) {
  request.r(i1675[i + 0], i1675[i + 1], 1, i1674, '')
  }
  i1672.m_fallbackFontAssets = i1674
  i1672.m_matchMaterialPreset = !!i1673[22]
  request.r(i1673[23], i1673[24], 0, i1672, 'm_defaultSpriteAsset')
  i1672.m_defaultSpriteAssetPath = i1673[25]
  i1672.m_enableEmojiSupport = !!i1673[26]
  i1672.m_MissingCharacterSpriteUnicode = i1673[27]
  i1672.m_defaultColorGradientPresetsPath = i1673[28]
  request.r(i1673[29], i1673[30], 0, i1672, 'm_defaultStyleSheet')
  i1672.m_StyleSheetsResourcePath = i1673[31]
  request.r(i1673[32], i1673[33], 0, i1672, 'm_leadingCharacters')
  request.r(i1673[34], i1673[35], 0, i1672, 'm_followingCharacters')
  i1672.m_UseModernHangulLineBreakingRules = !!i1673[36]
  return i1672
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1676 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1677 = data
  request.r(i1677[0], i1677[1], 0, i1676, 'spriteSheet')
  var i1679 = i1677[2]
  var i1678 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.add(request.d('TMPro.TMP_Sprite', i1679[i + 0]));
  }
  i1676.spriteInfoList = i1678
  var i1681 = i1677[3]
  var i1680 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1681.length; i += 2) {
  request.r(i1681[i + 0], i1681[i + 1], 1, i1680, '')
  }
  i1676.fallbackSpriteAssets = i1680
  i1676.hashCode = i1677[4]
  request.r(i1677[5], i1677[6], 0, i1676, 'material')
  i1676.materialHashCode = i1677[7]
  i1676.m_Version = i1677[8]
  i1676.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1677[9], i1676.m_FaceInfo)
  var i1683 = i1677[10]
  var i1682 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.add(request.d('TMPro.TMP_SpriteCharacter', i1683[i + 0]));
  }
  i1676.m_SpriteCharacterTable = i1682
  var i1685 = i1677[11]
  var i1684 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.add(request.d('TMPro.TMP_SpriteGlyph', i1685[i + 0]));
  }
  i1676.m_SpriteGlyphTable = i1684
  return i1676
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1688 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1689 = data
  i1688.name = i1689[0]
  i1688.hashCode = i1689[1]
  i1688.unicode = i1689[2]
  i1688.pivot = new pc.Vec2( i1689[3], i1689[4] )
  request.r(i1689[5], i1689[6], 0, i1688, 'sprite')
  i1688.id = i1689[7]
  i1688.x = i1689[8]
  i1688.y = i1689[9]
  i1688.width = i1689[10]
  i1688.height = i1689[11]
  i1688.xOffset = i1689[12]
  i1688.yOffset = i1689[13]
  i1688.xAdvance = i1689[14]
  i1688.scale = i1689[15]
  return i1688
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1694 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1695 = data
  i1694.m_Name = i1695[0]
  i1694.m_HashCode = i1695[1]
  i1694.m_ElementType = i1695[2]
  i1694.m_Unicode = i1695[3]
  i1694.m_GlyphIndex = i1695[4]
  i1694.m_Scale = i1695[5]
  return i1694
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1698 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1699 = data
  request.r(i1699[0], i1699[1], 0, i1698, 'sprite')
  i1698.m_Index = i1699[2]
  i1698.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1699[3], i1698.m_Metrics)
  i1698.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1699[4], i1698.m_GlyphRect)
  i1698.m_Scale = i1699[5]
  i1698.m_AtlasIndex = i1699[6]
  i1698.m_ClassDefinitionType = i1699[7]
  return i1698
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1700 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1701 = data
  var i1703 = i1701[0]
  var i1702 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.add(request.d('TMPro.TMP_Style', i1703[i + 0]));
  }
  i1700.m_StyleList = i1702
  return i1700
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1706 = root || request.c( 'TMPro.TMP_Style' )
  var i1707 = data
  i1706.m_Name = i1707[0]
  i1706.m_HashCode = i1707[1]
  i1706.m_OpeningDefinition = i1707[2]
  i1706.m_ClosingDefinition = i1707[3]
  i1706.m_OpeningTagArray = i1707[4]
  i1706.m_ClosingTagArray = i1707[5]
  i1706.m_OpeningTagUnicodeArray = i1707[6]
  i1706.m_ClosingTagUnicodeArray = i1707[7]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1709 = data
  var i1711 = i1709[0]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1711[i + 0]) );
  }
  i1708.files = i1710
  i1708.componentToPrefabIds = i1709[1]
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1715 = data
  i1714.path = i1715[0]
  request.r(i1715[1], i1715[2], 0, i1714, 'unityObject')
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1717 = data
  var i1719 = i1717[0]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1719[i + 0]) );
  }
  i1716.scriptsExecutionOrder = i1718
  var i1721 = i1717[1]
  var i1720 = []
  for(var i = 0; i < i1721.length; i += 1) {
    i1720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1721[i + 0]) );
  }
  i1716.sortingLayers = i1720
  var i1723 = i1717[2]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1723[i + 0]) );
  }
  i1716.cullingLayers = i1722
  i1716.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1717[3], i1716.timeSettings)
  i1716.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1717[4], i1716.physicsSettings)
  i1716.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1717[5], i1716.physics2DSettings)
  i1716.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1717[6], i1716.qualitySettings)
  i1716.enableRealtimeShadows = !!i1717[7]
  i1716.enableAutoInstancing = !!i1717[8]
  i1716.enableStaticBatching = !!i1717[9]
  i1716.enableDynamicBatching = !!i1717[10]
  i1716.usePreservativeDynamicBatching = !!i1717[11]
  i1716.lightmapEncodingQuality = i1717[12]
  i1716.desiredColorSpace = i1717[13]
  var i1725 = i1717[14]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( i1725[i + 0] );
  }
  i1716.allTags = i1724
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1729 = data
  i1728.name = i1729[0]
  i1728.value = i1729[1]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1733 = data
  i1732.id = i1733[0]
  i1732.name = i1733[1]
  i1732.value = i1733[2]
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1737 = data
  i1736.id = i1737[0]
  i1736.name = i1737[1]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1739 = data
  i1738.fixedDeltaTime = i1739[0]
  i1738.maximumDeltaTime = i1739[1]
  i1738.timeScale = i1739[2]
  i1738.maximumParticleTimestep = i1739[3]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1741 = data
  i1740.gravity = new pc.Vec3( i1741[0], i1741[1], i1741[2] )
  i1740.defaultSolverIterations = i1741[3]
  i1740.bounceThreshold = i1741[4]
  i1740.autoSyncTransforms = !!i1741[5]
  i1740.autoSimulation = !!i1741[6]
  var i1743 = i1741[7]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1743[i + 0]) );
  }
  i1740.collisionMatrix = i1742
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1747 = data
  i1746.enabled = !!i1747[0]
  i1746.layerId = i1747[1]
  i1746.otherLayerId = i1747[2]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1749 = data
  request.r(i1749[0], i1749[1], 0, i1748, 'material')
  i1748.gravity = new pc.Vec2( i1749[2], i1749[3] )
  i1748.positionIterations = i1749[4]
  i1748.velocityIterations = i1749[5]
  i1748.velocityThreshold = i1749[6]
  i1748.maxLinearCorrection = i1749[7]
  i1748.maxAngularCorrection = i1749[8]
  i1748.maxTranslationSpeed = i1749[9]
  i1748.maxRotationSpeed = i1749[10]
  i1748.baumgarteScale = i1749[11]
  i1748.baumgarteTOIScale = i1749[12]
  i1748.timeToSleep = i1749[13]
  i1748.linearSleepTolerance = i1749[14]
  i1748.angularSleepTolerance = i1749[15]
  i1748.defaultContactOffset = i1749[16]
  i1748.autoSimulation = !!i1749[17]
  i1748.queriesHitTriggers = !!i1749[18]
  i1748.queriesStartInColliders = !!i1749[19]
  i1748.callbacksOnDisable = !!i1749[20]
  i1748.reuseCollisionCallbacks = !!i1749[21]
  i1748.autoSyncTransforms = !!i1749[22]
  var i1751 = i1749[23]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1751[i + 0]) );
  }
  i1748.collisionMatrix = i1750
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1755 = data
  i1754.enabled = !!i1755[0]
  i1754.layerId = i1755[1]
  i1754.otherLayerId = i1755[2]
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1757 = data
  var i1759 = i1757[0]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1759[i + 0]) );
  }
  i1756.qualityLevels = i1758
  var i1761 = i1757[1]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.push( i1761[i + 0] );
  }
  i1756.names = i1760
  i1756.shadows = i1757[2]
  i1756.anisotropicFiltering = i1757[3]
  i1756.antiAliasing = i1757[4]
  i1756.lodBias = i1757[5]
  i1756.shadowCascades = i1757[6]
  i1756.shadowDistance = i1757[7]
  i1756.shadowmaskMode = i1757[8]
  i1756.shadowProjection = i1757[9]
  i1756.shadowResolution = i1757[10]
  i1756.softParticles = !!i1757[11]
  i1756.softVegetation = !!i1757[12]
  i1756.activeColorSpace = i1757[13]
  i1756.desiredColorSpace = i1757[14]
  i1756.masterTextureLimit = i1757[15]
  i1756.maxQueuedFrames = i1757[16]
  i1756.particleRaycastBudget = i1757[17]
  i1756.pixelLightCount = i1757[18]
  i1756.realtimeReflectionProbes = !!i1757[19]
  i1756.shadowCascade2Split = i1757[20]
  i1756.shadowCascade4Split = new pc.Vec3( i1757[21], i1757[22], i1757[23] )
  i1756.streamingMipmapsActive = !!i1757[24]
  i1756.vSyncCount = i1757[25]
  i1756.asyncUploadBufferSize = i1757[26]
  i1756.asyncUploadTimeSlice = i1757[27]
  i1756.billboardsFaceCameraPosition = !!i1757[28]
  i1756.shadowNearPlaneOffset = i1757[29]
  i1756.streamingMipmapsMemoryBudget = i1757[30]
  i1756.maximumLODLevel = i1757[31]
  i1756.streamingMipmapsAddAllCameras = !!i1757[32]
  i1756.streamingMipmapsMaxLevelReduction = i1757[33]
  i1756.streamingMipmapsRenderersPerFrame = i1757[34]
  i1756.resolutionScalingFixedDPIFactor = i1757[35]
  i1756.streamingMipmapsMaxFileIORequests = i1757[36]
  i1756.currentQualityLevel = i1757[37]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1767 = data
  i1766.weight = i1767[0]
  i1766.vertices = i1767[1]
  i1766.normals = i1767[2]
  i1766.tangents = i1767[3]
  return i1766
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1768 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1769 = data
  request.r(i1769[0], i1769[1], 0, i1768, 'm_ObjectArgument')
  i1768.m_ObjectArgumentAssemblyTypeName = i1769[2]
  i1768.m_IntArgument = i1769[3]
  i1768.m_FloatArgument = i1769[4]
  i1768.m_StringArgument = i1769[5]
  i1768.m_BoolArgument = !!i1769[6]
  return i1768
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1770 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1771 = data
  i1770.xPlacement = i1771[0]
  i1770.yPlacement = i1771[1]
  i1770.xAdvance = i1771[2]
  i1770.yAdvance = i1771[3]
  return i1770
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

Deserializers.buildID = "5b8c6db1-4d0b-4911-9e33-83843d2ee145";

Deserializers.runtimeInitializeOnLoadInfos = [[["CW","Common","CwInput","Enable"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Sirenix","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","UnitySerializationInitializer","InitializeRuntime"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[["Coffee","UIExtensions","ParticleSystemPreviewSystem","Initialize"],["Coffee","UIParticleInternal","FrameCache","Clear"],["Coffee","UIExtensions","UIParticleUpdater","OnDomainReload"],["Coffee","UIParticleInternal","MaterialRepository","Clear"],["Coffee","UIParticleInternal","UIExtraCallbacks","InitializeOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["LockedNestObstacle","ResetStatics"],["EventManager","ClearAll"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

