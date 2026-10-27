var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i8298 = root || request.c( 'UnityEngine.JointSpring' )
  var i8299 = data
  i8298.spring = i8299[0]
  i8298.damper = i8299[1]
  i8298.targetPosition = i8299[2]
  return i8298
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i8300 = root || request.c( 'UnityEngine.JointMotor' )
  var i8301 = data
  i8300.m_TargetVelocity = i8301[0]
  i8300.m_Force = i8301[1]
  i8300.m_FreeSpin = i8301[2]
  return i8300
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i8302 = root || request.c( 'UnityEngine.JointLimits' )
  var i8303 = data
  i8302.m_Min = i8303[0]
  i8302.m_Max = i8303[1]
  i8302.m_Bounciness = i8303[2]
  i8302.m_BounceMinVelocity = i8303[3]
  i8302.m_ContactDistance = i8303[4]
  i8302.minBounce = i8303[5]
  i8302.maxBounce = i8303[6]
  return i8302
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i8304 = root || request.c( 'UnityEngine.JointDrive' )
  var i8305 = data
  i8304.m_PositionSpring = i8305[0]
  i8304.m_PositionDamper = i8305[1]
  i8304.m_MaximumForce = i8305[2]
  i8304.m_UseAcceleration = i8305[3]
  return i8304
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i8306 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i8307 = data
  i8306.m_Spring = i8307[0]
  i8306.m_Damper = i8307[1]
  return i8306
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i8308 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i8309 = data
  i8308.m_Limit = i8309[0]
  i8308.m_Bounciness = i8309[1]
  i8308.m_ContactDistance = i8309[2]
  return i8308
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i8310 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i8311 = data
  i8310.m_ExtremumSlip = i8311[0]
  i8310.m_ExtremumValue = i8311[1]
  i8310.m_AsymptoteSlip = i8311[2]
  i8310.m_AsymptoteValue = i8311[3]
  i8310.m_Stiffness = i8311[4]
  return i8310
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i8312 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i8313 = data
  i8312.m_LowerAngle = i8313[0]
  i8312.m_UpperAngle = i8313[1]
  return i8312
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i8314 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i8315 = data
  i8314.m_MotorSpeed = i8315[0]
  i8314.m_MaximumMotorTorque = i8315[1]
  return i8314
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i8316 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i8317 = data
  i8316.m_DampingRatio = i8317[0]
  i8316.m_Frequency = i8317[1]
  i8316.m_Angle = i8317[2]
  return i8316
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i8318 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i8319 = data
  i8318.m_LowerTranslation = i8319[0]
  i8318.m_UpperTranslation = i8319[1]
  return i8318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i8320 = root || new pc.UnityMaterial()
  var i8321 = data
  i8320.name = i8321[0]
  request.r(i8321[1], i8321[2], 0, i8320, 'shader')
  i8320.renderQueue = i8321[3]
  i8320.enableInstancing = !!i8321[4]
  var i8323 = i8321[5]
  var i8322 = []
  for(var i = 0; i < i8323.length; i += 1) {
    i8322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i8323[i + 0]) );
  }
  i8320.floatParameters = i8322
  var i8325 = i8321[6]
  var i8324 = []
  for(var i = 0; i < i8325.length; i += 1) {
    i8324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i8325[i + 0]) );
  }
  i8320.colorParameters = i8324
  var i8327 = i8321[7]
  var i8326 = []
  for(var i = 0; i < i8327.length; i += 1) {
    i8326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i8327[i + 0]) );
  }
  i8320.vectorParameters = i8326
  var i8329 = i8321[8]
  var i8328 = []
  for(var i = 0; i < i8329.length; i += 1) {
    i8328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i8329[i + 0]) );
  }
  i8320.textureParameters = i8328
  var i8331 = i8321[9]
  var i8330 = []
  for(var i = 0; i < i8331.length; i += 1) {
    i8330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i8331[i + 0]) );
  }
  i8320.materialFlags = i8330
  return i8320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i8334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i8335 = data
  i8334.name = i8335[0]
  i8334.value = i8335[1]
  return i8334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i8338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i8339 = data
  i8338.name = i8339[0]
  i8338.value = new pc.Color(i8339[1], i8339[2], i8339[3], i8339[4])
  return i8338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i8342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i8343 = data
  i8342.name = i8343[0]
  i8342.value = new pc.Vec4( i8343[1], i8343[2], i8343[3], i8343[4] )
  return i8342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i8346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i8347 = data
  i8346.name = i8347[0]
  request.r(i8347[1], i8347[2], 0, i8346, 'value')
  return i8346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i8350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i8351 = data
  i8350.name = i8351[0]
  i8350.enabled = !!i8351[1]
  return i8350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i8352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i8353 = data
  i8352.name = i8353[0]
  i8352.width = i8353[1]
  i8352.height = i8353[2]
  i8352.mipmapCount = i8353[3]
  i8352.anisoLevel = i8353[4]
  i8352.filterMode = i8353[5]
  i8352.hdr = !!i8353[6]
  i8352.format = i8353[7]
  i8352.wrapMode = i8353[8]
  i8352.alphaIsTransparency = !!i8353[9]
  i8352.alphaSource = i8353[10]
  i8352.graphicsFormat = i8353[11]
  i8352.sRGBTexture = !!i8353[12]
  i8352.desiredColorSpace = i8353[13]
  i8352.wrapU = i8353[14]
  i8352.wrapV = i8353[15]
  return i8352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i8354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i8355 = data
  i8354.pivot = new pc.Vec2( i8355[0], i8355[1] )
  i8354.anchorMin = new pc.Vec2( i8355[2], i8355[3] )
  i8354.anchorMax = new pc.Vec2( i8355[4], i8355[5] )
  i8354.sizeDelta = new pc.Vec2( i8355[6], i8355[7] )
  i8354.anchoredPosition3D = new pc.Vec3( i8355[8], i8355[9], i8355[10] )
  i8354.rotation = new pc.Quat(i8355[11], i8355[12], i8355[13], i8355[14])
  i8354.scale = new pc.Vec3( i8355[15], i8355[16], i8355[17] )
  return i8354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i8356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i8357 = data
  i8356.cullTransparentMesh = !!i8357[0]
  return i8356
}

Deserializers["OutsideBird"] = function (request, data, root) {
  var i8358 = root || request.c( 'OutsideBird' )
  var i8359 = data
  request.r(i8359[0], i8359[1], 0, i8358, 'm_ImageIcon')
  request.r(i8359[2], i8359[3], 0, i8358, 'm_TxtCount')
  return i8358
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i8360 = root || request.c( 'UnityEngine.UI.Image' )
  var i8361 = data
  request.r(i8361[0], i8361[1], 0, i8360, 'm_Sprite')
  i8360.m_Type = i8361[2]
  i8360.m_PreserveAspect = !!i8361[3]
  i8360.m_FillCenter = !!i8361[4]
  i8360.m_FillMethod = i8361[5]
  i8360.m_FillAmount = i8361[6]
  i8360.m_FillClockwise = !!i8361[7]
  i8360.m_FillOrigin = i8361[8]
  i8360.m_UseSpriteMesh = !!i8361[9]
  i8360.m_PixelsPerUnitMultiplier = i8361[10]
  request.r(i8361[11], i8361[12], 0, i8360, 'm_Material')
  i8360.m_Maskable = !!i8361[13]
  i8360.m_Color = new pc.Color(i8361[14], i8361[15], i8361[16], i8361[17])
  i8360.m_RaycastTarget = !!i8361[18]
  i8360.m_RaycastPadding = new pc.Vec4( i8361[19], i8361[20], i8361[21], i8361[22] )
  return i8360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i8362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i8363 = data
  i8362.name = i8363[0]
  i8362.tagId = i8363[1]
  i8362.enabled = !!i8363[2]
  i8362.isStatic = !!i8363[3]
  i8362.layer = i8363[4]
  return i8362
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i8364 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i8365 = data
  i8364.m_hasFontAssetChanged = !!i8365[0]
  request.r(i8365[1], i8365[2], 0, i8364, 'm_baseMaterial')
  i8364.m_maskOffset = new pc.Vec4( i8365[3], i8365[4], i8365[5], i8365[6] )
  i8364.m_text = i8365[7]
  i8364.m_isRightToLeft = !!i8365[8]
  request.r(i8365[9], i8365[10], 0, i8364, 'm_fontAsset')
  request.r(i8365[11], i8365[12], 0, i8364, 'm_sharedMaterial')
  var i8367 = i8365[13]
  var i8366 = []
  for(var i = 0; i < i8367.length; i += 2) {
  request.r(i8367[i + 0], i8367[i + 1], 2, i8366, '')
  }
  i8364.m_fontSharedMaterials = i8366
  request.r(i8365[14], i8365[15], 0, i8364, 'm_fontMaterial')
  var i8369 = i8365[16]
  var i8368 = []
  for(var i = 0; i < i8369.length; i += 2) {
  request.r(i8369[i + 0], i8369[i + 1], 2, i8368, '')
  }
  i8364.m_fontMaterials = i8368
  i8364.m_fontColor32 = UnityEngine.Color32.ConstructColor(i8365[17], i8365[18], i8365[19], i8365[20])
  i8364.m_fontColor = new pc.Color(i8365[21], i8365[22], i8365[23], i8365[24])
  i8364.m_enableVertexGradient = !!i8365[25]
  i8364.m_colorMode = i8365[26]
  i8364.m_fontColorGradient = request.d('TMPro.VertexGradient', i8365[27], i8364.m_fontColorGradient)
  request.r(i8365[28], i8365[29], 0, i8364, 'm_fontColorGradientPreset')
  request.r(i8365[30], i8365[31], 0, i8364, 'm_spriteAsset')
  i8364.m_tintAllSprites = !!i8365[32]
  request.r(i8365[33], i8365[34], 0, i8364, 'm_StyleSheet')
  i8364.m_TextStyleHashCode = i8365[35]
  i8364.m_overrideHtmlColors = !!i8365[36]
  i8364.m_faceColor = UnityEngine.Color32.ConstructColor(i8365[37], i8365[38], i8365[39], i8365[40])
  i8364.m_fontSize = i8365[41]
  i8364.m_fontSizeBase = i8365[42]
  i8364.m_fontWeight = i8365[43]
  i8364.m_enableAutoSizing = !!i8365[44]
  i8364.m_fontSizeMin = i8365[45]
  i8364.m_fontSizeMax = i8365[46]
  i8364.m_fontStyle = i8365[47]
  i8364.m_HorizontalAlignment = i8365[48]
  i8364.m_VerticalAlignment = i8365[49]
  i8364.m_textAlignment = i8365[50]
  i8364.m_characterSpacing = i8365[51]
  i8364.m_wordSpacing = i8365[52]
  i8364.m_lineSpacing = i8365[53]
  i8364.m_lineSpacingMax = i8365[54]
  i8364.m_paragraphSpacing = i8365[55]
  i8364.m_charWidthMaxAdj = i8365[56]
  i8364.m_enableWordWrapping = !!i8365[57]
  i8364.m_wordWrappingRatios = i8365[58]
  i8364.m_overflowMode = i8365[59]
  request.r(i8365[60], i8365[61], 0, i8364, 'm_linkedTextComponent')
  request.r(i8365[62], i8365[63], 0, i8364, 'parentLinkedComponent')
  i8364.m_enableKerning = !!i8365[64]
  i8364.m_enableExtraPadding = !!i8365[65]
  i8364.checkPaddingRequired = !!i8365[66]
  i8364.m_isRichText = !!i8365[67]
  i8364.m_parseCtrlCharacters = !!i8365[68]
  i8364.m_isOrthographic = !!i8365[69]
  i8364.m_isCullingEnabled = !!i8365[70]
  i8364.m_horizontalMapping = i8365[71]
  i8364.m_verticalMapping = i8365[72]
  i8364.m_uvLineOffset = i8365[73]
  i8364.m_geometrySortingOrder = i8365[74]
  i8364.m_IsTextObjectScaleStatic = !!i8365[75]
  i8364.m_VertexBufferAutoSizeReduction = !!i8365[76]
  i8364.m_useMaxVisibleDescender = !!i8365[77]
  i8364.m_pageToDisplay = i8365[78]
  i8364.m_margin = new pc.Vec4( i8365[79], i8365[80], i8365[81], i8365[82] )
  i8364.m_isUsingLegacyAnimationComponent = !!i8365[83]
  i8364.m_isVolumetricText = !!i8365[84]
  request.r(i8365[85], i8365[86], 0, i8364, 'm_Material')
  i8364.m_Maskable = !!i8365[87]
  i8364.m_Color = new pc.Color(i8365[88], i8365[89], i8365[90], i8365[91])
  i8364.m_RaycastTarget = !!i8365[92]
  i8364.m_RaycastPadding = new pc.Vec4( i8365[93], i8365[94], i8365[95], i8365[96] )
  return i8364
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i8372 = root || request.c( 'TMPro.VertexGradient' )
  var i8373 = data
  i8372.topLeft = new pc.Color(i8373[0], i8373[1], i8373[2], i8373[3])
  i8372.topRight = new pc.Color(i8373[4], i8373[5], i8373[6], i8373[7])
  i8372.bottomLeft = new pc.Color(i8373[8], i8373[9], i8373[10], i8373[11])
  i8372.bottomRight = new pc.Color(i8373[12], i8373[13], i8373[14], i8373[15])
  return i8372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i8374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i8375 = data
  i8374.position = new pc.Vec3( i8375[0], i8375[1], i8375[2] )
  i8374.scale = new pc.Vec3( i8375[3], i8375[4], i8375[5] )
  i8374.rotation = new pc.Quat(i8375[6], i8375[7], i8375[8], i8375[9])
  return i8374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i8376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i8377 = data
  i8376.bodyType = i8377[0]
  request.r(i8377[1], i8377[2], 0, i8376, 'material')
  i8376.simulated = !!i8377[3]
  i8376.useAutoMass = !!i8377[4]
  i8376.mass = i8377[5]
  i8376.drag = i8377[6]
  i8376.angularDrag = i8377[7]
  i8376.gravityScale = i8377[8]
  i8376.collisionDetectionMode = i8377[9]
  i8376.sleepMode = i8377[10]
  i8376.constraints = i8377[11]
  return i8376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i8378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i8379 = data
  i8378.radius = i8379[0]
  i8378.enabled = !!i8379[1]
  i8378.isTrigger = !!i8379[2]
  i8378.usedByEffector = !!i8379[3]
  i8378.density = i8379[4]
  i8378.offset = new pc.Vec2( i8379[5], i8379[6] )
  request.r(i8379[7], i8379[8], 0, i8378, 'material')
  return i8378
}

Deserializers["BubbleParts"] = function (request, data, root) {
  var i8380 = root || request.c( 'BubbleParts' )
  var i8381 = data
  var i8383 = i8381[0]
  var i8382 = []
  for(var i = 0; i < i8383.length; i += 1) {
    i8382.push( request.d('BubbleParts+Entry', i8383[i + 0]) );
  }
  i8380.parts = i8382
  return i8380
}

Deserializers["BubbleParts+Entry"] = function (request, data, root) {
  var i8386 = root || request.c( 'BubbleParts+Entry' )
  var i8387 = data
  i8386.key = i8387[0]
  request.r(i8387[1], i8387[2], 0, i8386, 'target')
  return i8386
}

Deserializers["BubbleOneSlot"] = function (request, data, root) {
  var i8388 = root || request.c( 'BubbleOneSlot' )
  var i8389 = data
  i8388.currentConfig = request.d('BubbleConfig', i8389[0], i8388.currentConfig)
  var i8391 = i8389[1]
  var i8390 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i8391.length; i += 2) {
  request.r(i8391[i + 0], i8391[i + 1], 1, i8390, '')
  }
  i8388.birds = i8390
  request.r(i8389[2], i8389[3], 0, i8388, 'birdParent')
  i8388.refillPopDuration = i8389[4]
  i8388.refillMoveDuration = i8389[5]
  i8388.clipBirdsToCircle = !!i8389[6]
  return i8388
}

Deserializers["BubbleConfig"] = function (request, data, root) {
  var i8392 = root || request.c( 'BubbleConfig' )
  var i8393 = data
  i8392.BubbleID = i8393[0]
  i8392.BubbleType = i8393[1]
  i8392.FishStr = i8393[2]
  i8392.IsFrozen = !!i8393[3]
  i8392.IsUnknown = !!i8393[4]
  i8392.IsKey = !!i8393[5]
  i8392.LockCount = i8393[6]
  i8392.Lock2Count = i8393[7]
  i8392.IsObstacle = !!i8393[8]
  i8392.Obstacle2Count = i8393[9]
  i8392.IsMore = !!i8393[10]
  i8392.IsConveyor = !!i8393[11]
  i8392.MaskTargetFish = i8393[12]
  i8392.BindFishStr = i8393[13]
  i8392.IceFishStr = i8393[14]
  i8392.UnKnowFishStr = i8393[15]
  i8392.KeyFishStr = i8393[16]
  i8392.LockFishStr = i8393[17]
  return i8392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i8396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i8397 = data
  i8396.color = new pc.Color(i8397[0], i8397[1], i8397[2], i8397[3])
  request.r(i8397[4], i8397[5], 0, i8396, 'sprite')
  i8396.flipX = !!i8397[6]
  i8396.flipY = !!i8397[7]
  i8396.drawMode = i8397[8]
  i8396.size = new pc.Vec2( i8397[9], i8397[10] )
  i8396.tileMode = i8397[11]
  i8396.adaptiveModeThreshold = i8397[12]
  i8396.maskInteraction = i8397[13]
  i8396.spriteSortPoint = i8397[14]
  i8396.enabled = !!i8397[15]
  request.r(i8397[16], i8397[17], 0, i8396, 'sharedMaterial')
  var i8399 = i8397[18]
  var i8398 = []
  for(var i = 0; i < i8399.length; i += 2) {
  request.r(i8399[i + 0], i8399[i + 1], 2, i8398, '')
  }
  i8396.sharedMaterials = i8398
  i8396.receiveShadows = !!i8397[19]
  i8396.shadowCastingMode = i8397[20]
  i8396.sortingLayerID = i8397[21]
  i8396.sortingOrder = i8397[22]
  i8396.lightmapIndex = i8397[23]
  i8396.lightmapSceneIndex = i8397[24]
  i8396.lightmapScaleOffset = new pc.Vec4( i8397[25], i8397[26], i8397[27], i8397[28] )
  i8396.lightProbeUsage = i8397[29]
  i8396.reflectionProbeUsage = i8397[30]
  return i8396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i8400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i8401 = data
  request.r(i8401[0], i8401[1], 0, i8400, 'additionalVertexStreams')
  i8400.enabled = !!i8401[2]
  request.r(i8401[3], i8401[4], 0, i8400, 'sharedMaterial')
  var i8403 = i8401[5]
  var i8402 = []
  for(var i = 0; i < i8403.length; i += 2) {
  request.r(i8403[i + 0], i8403[i + 1], 2, i8402, '')
  }
  i8400.sharedMaterials = i8402
  i8400.receiveShadows = !!i8401[6]
  i8400.shadowCastingMode = i8401[7]
  i8400.sortingLayerID = i8401[8]
  i8400.sortingOrder = i8401[9]
  i8400.lightmapIndex = i8401[10]
  i8400.lightmapSceneIndex = i8401[11]
  i8400.lightmapScaleOffset = new pc.Vec4( i8401[12], i8401[13], i8401[14], i8401[15] )
  i8400.lightProbeUsage = i8401[16]
  i8400.reflectionProbeUsage = i8401[17]
  return i8400
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i8404 = root || request.c( 'TMPro.TextMeshPro' )
  var i8405 = data
  i8404._SortingLayer = i8405[0]
  i8404._SortingLayerID = i8405[1]
  i8404._SortingOrder = i8405[2]
  i8404.m_hasFontAssetChanged = !!i8405[3]
  request.r(i8405[4], i8405[5], 0, i8404, 'm_renderer')
  i8404.m_maskType = i8405[6]
  i8404.m_text = i8405[7]
  i8404.m_isRightToLeft = !!i8405[8]
  request.r(i8405[9], i8405[10], 0, i8404, 'm_fontAsset')
  request.r(i8405[11], i8405[12], 0, i8404, 'm_sharedMaterial')
  var i8407 = i8405[13]
  var i8406 = []
  for(var i = 0; i < i8407.length; i += 2) {
  request.r(i8407[i + 0], i8407[i + 1], 2, i8406, '')
  }
  i8404.m_fontSharedMaterials = i8406
  request.r(i8405[14], i8405[15], 0, i8404, 'm_fontMaterial')
  var i8409 = i8405[16]
  var i8408 = []
  for(var i = 0; i < i8409.length; i += 2) {
  request.r(i8409[i + 0], i8409[i + 1], 2, i8408, '')
  }
  i8404.m_fontMaterials = i8408
  i8404.m_fontColor32 = UnityEngine.Color32.ConstructColor(i8405[17], i8405[18], i8405[19], i8405[20])
  i8404.m_fontColor = new pc.Color(i8405[21], i8405[22], i8405[23], i8405[24])
  i8404.m_enableVertexGradient = !!i8405[25]
  i8404.m_colorMode = i8405[26]
  i8404.m_fontColorGradient = request.d('TMPro.VertexGradient', i8405[27], i8404.m_fontColorGradient)
  request.r(i8405[28], i8405[29], 0, i8404, 'm_fontColorGradientPreset')
  request.r(i8405[30], i8405[31], 0, i8404, 'm_spriteAsset')
  i8404.m_tintAllSprites = !!i8405[32]
  request.r(i8405[33], i8405[34], 0, i8404, 'm_StyleSheet')
  i8404.m_TextStyleHashCode = i8405[35]
  i8404.m_overrideHtmlColors = !!i8405[36]
  i8404.m_faceColor = UnityEngine.Color32.ConstructColor(i8405[37], i8405[38], i8405[39], i8405[40])
  i8404.m_fontSize = i8405[41]
  i8404.m_fontSizeBase = i8405[42]
  i8404.m_fontWeight = i8405[43]
  i8404.m_enableAutoSizing = !!i8405[44]
  i8404.m_fontSizeMin = i8405[45]
  i8404.m_fontSizeMax = i8405[46]
  i8404.m_fontStyle = i8405[47]
  i8404.m_HorizontalAlignment = i8405[48]
  i8404.m_VerticalAlignment = i8405[49]
  i8404.m_textAlignment = i8405[50]
  i8404.m_characterSpacing = i8405[51]
  i8404.m_wordSpacing = i8405[52]
  i8404.m_lineSpacing = i8405[53]
  i8404.m_lineSpacingMax = i8405[54]
  i8404.m_paragraphSpacing = i8405[55]
  i8404.m_charWidthMaxAdj = i8405[56]
  i8404.m_enableWordWrapping = !!i8405[57]
  i8404.m_wordWrappingRatios = i8405[58]
  i8404.m_overflowMode = i8405[59]
  request.r(i8405[60], i8405[61], 0, i8404, 'm_linkedTextComponent')
  request.r(i8405[62], i8405[63], 0, i8404, 'parentLinkedComponent')
  i8404.m_enableKerning = !!i8405[64]
  i8404.m_enableExtraPadding = !!i8405[65]
  i8404.checkPaddingRequired = !!i8405[66]
  i8404.m_isRichText = !!i8405[67]
  i8404.m_parseCtrlCharacters = !!i8405[68]
  i8404.m_isOrthographic = !!i8405[69]
  i8404.m_isCullingEnabled = !!i8405[70]
  i8404.m_horizontalMapping = i8405[71]
  i8404.m_verticalMapping = i8405[72]
  i8404.m_uvLineOffset = i8405[73]
  i8404.m_geometrySortingOrder = i8405[74]
  i8404.m_IsTextObjectScaleStatic = !!i8405[75]
  i8404.m_VertexBufferAutoSizeReduction = !!i8405[76]
  i8404.m_useMaxVisibleDescender = !!i8405[77]
  i8404.m_pageToDisplay = i8405[78]
  i8404.m_margin = new pc.Vec4( i8405[79], i8405[80], i8405[81], i8405[82] )
  i8404.m_isUsingLegacyAnimationComponent = !!i8405[83]
  i8404.m_isVolumetricText = !!i8405[84]
  request.r(i8405[85], i8405[86], 0, i8404, 'm_Material')
  i8404.m_Maskable = !!i8405[87]
  i8404.m_Color = new pc.Color(i8405[88], i8405[89], i8405[90], i8405[91])
  i8404.m_RaycastTarget = !!i8405[92]
  i8404.m_RaycastPadding = new pc.Vec4( i8405[93], i8405[94], i8405[95], i8405[96] )
  return i8404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i8410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i8411 = data
  i8410.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i8411[0], i8410.main)
  i8410.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i8411[1], i8410.colorBySpeed)
  i8410.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i8411[2], i8410.colorOverLifetime)
  i8410.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i8411[3], i8410.emission)
  i8410.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i8411[4], i8410.rotationBySpeed)
  i8410.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i8411[5], i8410.rotationOverLifetime)
  i8410.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i8411[6], i8410.shape)
  i8410.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i8411[7], i8410.sizeBySpeed)
  i8410.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i8411[8], i8410.sizeOverLifetime)
  i8410.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i8411[9], i8410.textureSheetAnimation)
  i8410.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i8411[10], i8410.velocityOverLifetime)
  i8410.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i8411[11], i8410.noise)
  i8410.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i8411[12], i8410.inheritVelocity)
  i8410.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i8411[13], i8410.forceOverLifetime)
  i8410.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i8411[14], i8410.limitVelocityOverLifetime)
  i8410.useAutoRandomSeed = !!i8411[15]
  i8410.randomSeed = i8411[16]
  return i8410
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i8412 = root || new pc.ParticleSystemMain()
  var i8413 = data
  i8412.duration = i8413[0]
  i8412.loop = !!i8413[1]
  i8412.prewarm = !!i8413[2]
  i8412.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8413[3], i8412.startDelay)
  i8412.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8413[4], i8412.startLifetime)
  i8412.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8413[5], i8412.startSpeed)
  i8412.startSize3D = !!i8413[6]
  i8412.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8413[7], i8412.startSizeX)
  i8412.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8413[8], i8412.startSizeY)
  i8412.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8413[9], i8412.startSizeZ)
  i8412.startRotation3D = !!i8413[10]
  i8412.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8413[11], i8412.startRotationX)
  i8412.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8413[12], i8412.startRotationY)
  i8412.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8413[13], i8412.startRotationZ)
  i8412.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8413[14], i8412.startColor)
  i8412.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8413[15], i8412.gravityModifier)
  i8412.simulationSpace = i8413[16]
  request.r(i8413[17], i8413[18], 0, i8412, 'customSimulationSpace')
  i8412.simulationSpeed = i8413[19]
  i8412.useUnscaledTime = !!i8413[20]
  i8412.scalingMode = i8413[21]
  i8412.playOnAwake = !!i8413[22]
  i8412.maxParticles = i8413[23]
  i8412.emitterVelocityMode = i8413[24]
  i8412.stopAction = i8413[25]
  return i8412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i8414 = root || new pc.MinMaxCurve()
  var i8415 = data
  i8414.mode = i8415[0]
  i8414.curveMin = new pc.AnimationCurve( { keys_flow: i8415[1] } )
  i8414.curveMax = new pc.AnimationCurve( { keys_flow: i8415[2] } )
  i8414.curveMultiplier = i8415[3]
  i8414.constantMin = i8415[4]
  i8414.constantMax = i8415[5]
  return i8414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i8416 = root || new pc.MinMaxGradient()
  var i8417 = data
  i8416.mode = i8417[0]
  i8416.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8417[1], i8416.gradientMin)
  i8416.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8417[2], i8416.gradientMax)
  i8416.colorMin = new pc.Color(i8417[3], i8417[4], i8417[5], i8417[6])
  i8416.colorMax = new pc.Color(i8417[7], i8417[8], i8417[9], i8417[10])
  return i8416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i8418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i8419 = data
  i8418.mode = i8419[0]
  var i8421 = i8419[1]
  var i8420 = []
  for(var i = 0; i < i8421.length; i += 1) {
    i8420.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i8421[i + 0]) );
  }
  i8418.colorKeys = i8420
  var i8423 = i8419[2]
  var i8422 = []
  for(var i = 0; i < i8423.length; i += 1) {
    i8422.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i8423[i + 0]) );
  }
  i8418.alphaKeys = i8422
  return i8418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i8424 = root || new pc.ParticleSystemColorBySpeed()
  var i8425 = data
  i8424.enabled = !!i8425[0]
  i8424.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8425[1], i8424.color)
  i8424.range = new pc.Vec2( i8425[2], i8425[3] )
  return i8424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i8428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i8429 = data
  i8428.color = new pc.Color(i8429[0], i8429[1], i8429[2], i8429[3])
  i8428.time = i8429[4]
  return i8428
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i8432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i8433 = data
  i8432.alpha = i8433[0]
  i8432.time = i8433[1]
  return i8432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i8434 = root || new pc.ParticleSystemColorOverLifetime()
  var i8435 = data
  i8434.enabled = !!i8435[0]
  i8434.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8435[1], i8434.color)
  return i8434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i8436 = root || new pc.ParticleSystemEmitter()
  var i8437 = data
  i8436.enabled = !!i8437[0]
  i8436.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8437[1], i8436.rateOverTime)
  i8436.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8437[2], i8436.rateOverDistance)
  var i8439 = i8437[3]
  var i8438 = []
  for(var i = 0; i < i8439.length; i += 1) {
    i8438.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i8439[i + 0]) );
  }
  i8436.bursts = i8438
  return i8436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i8442 = root || new pc.ParticleSystemBurst()
  var i8443 = data
  i8442.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8443[0], i8442.count)
  i8442.cycleCount = i8443[1]
  i8442.minCount = i8443[2]
  i8442.maxCount = i8443[3]
  i8442.repeatInterval = i8443[4]
  i8442.time = i8443[5]
  return i8442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i8444 = root || new pc.ParticleSystemRotationBySpeed()
  var i8445 = data
  i8444.enabled = !!i8445[0]
  i8444.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8445[1], i8444.x)
  i8444.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8445[2], i8444.y)
  i8444.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8445[3], i8444.z)
  i8444.separateAxes = !!i8445[4]
  i8444.range = new pc.Vec2( i8445[5], i8445[6] )
  return i8444
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i8446 = root || new pc.ParticleSystemRotationOverLifetime()
  var i8447 = data
  i8446.enabled = !!i8447[0]
  i8446.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8447[1], i8446.x)
  i8446.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8447[2], i8446.y)
  i8446.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8447[3], i8446.z)
  i8446.separateAxes = !!i8447[4]
  return i8446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i8448 = root || new pc.ParticleSystemShape()
  var i8449 = data
  i8448.enabled = !!i8449[0]
  i8448.shapeType = i8449[1]
  i8448.randomDirectionAmount = i8449[2]
  i8448.sphericalDirectionAmount = i8449[3]
  i8448.randomPositionAmount = i8449[4]
  i8448.alignToDirection = !!i8449[5]
  i8448.radius = i8449[6]
  i8448.radiusMode = i8449[7]
  i8448.radiusSpread = i8449[8]
  i8448.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8449[9], i8448.radiusSpeed)
  i8448.radiusThickness = i8449[10]
  i8448.angle = i8449[11]
  i8448.length = i8449[12]
  i8448.boxThickness = new pc.Vec3( i8449[13], i8449[14], i8449[15] )
  i8448.meshShapeType = i8449[16]
  request.r(i8449[17], i8449[18], 0, i8448, 'mesh')
  request.r(i8449[19], i8449[20], 0, i8448, 'meshRenderer')
  request.r(i8449[21], i8449[22], 0, i8448, 'skinnedMeshRenderer')
  i8448.useMeshMaterialIndex = !!i8449[23]
  i8448.meshMaterialIndex = i8449[24]
  i8448.useMeshColors = !!i8449[25]
  i8448.normalOffset = i8449[26]
  i8448.arc = i8449[27]
  i8448.arcMode = i8449[28]
  i8448.arcSpread = i8449[29]
  i8448.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8449[30], i8448.arcSpeed)
  i8448.donutRadius = i8449[31]
  i8448.position = new pc.Vec3( i8449[32], i8449[33], i8449[34] )
  i8448.rotation = new pc.Vec3( i8449[35], i8449[36], i8449[37] )
  i8448.scale = new pc.Vec3( i8449[38], i8449[39], i8449[40] )
  return i8448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i8450 = root || new pc.ParticleSystemSizeBySpeed()
  var i8451 = data
  i8450.enabled = !!i8451[0]
  i8450.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8451[1], i8450.x)
  i8450.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8451[2], i8450.y)
  i8450.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8451[3], i8450.z)
  i8450.separateAxes = !!i8451[4]
  i8450.range = new pc.Vec2( i8451[5], i8451[6] )
  return i8450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i8452 = root || new pc.ParticleSystemSizeOverLifetime()
  var i8453 = data
  i8452.enabled = !!i8453[0]
  i8452.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8453[1], i8452.x)
  i8452.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8453[2], i8452.y)
  i8452.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8453[3], i8452.z)
  i8452.separateAxes = !!i8453[4]
  return i8452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i8454 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i8455 = data
  i8454.enabled = !!i8455[0]
  i8454.mode = i8455[1]
  i8454.animation = i8455[2]
  i8454.numTilesX = i8455[3]
  i8454.numTilesY = i8455[4]
  i8454.useRandomRow = !!i8455[5]
  i8454.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8455[6], i8454.frameOverTime)
  i8454.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8455[7], i8454.startFrame)
  i8454.cycleCount = i8455[8]
  i8454.rowIndex = i8455[9]
  i8454.flipU = i8455[10]
  i8454.flipV = i8455[11]
  i8454.spriteCount = i8455[12]
  var i8457 = i8455[13]
  var i8456 = []
  for(var i = 0; i < i8457.length; i += 2) {
  request.r(i8457[i + 0], i8457[i + 1], 2, i8456, '')
  }
  i8454.sprites = i8456
  return i8454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i8460 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i8461 = data
  i8460.enabled = !!i8461[0]
  i8460.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8461[1], i8460.x)
  i8460.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8461[2], i8460.y)
  i8460.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8461[3], i8460.z)
  i8460.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8461[4], i8460.radial)
  i8460.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8461[5], i8460.speedModifier)
  i8460.space = i8461[6]
  i8460.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8461[7], i8460.orbitalX)
  i8460.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8461[8], i8460.orbitalY)
  i8460.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8461[9], i8460.orbitalZ)
  i8460.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8461[10], i8460.orbitalOffsetX)
  i8460.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8461[11], i8460.orbitalOffsetY)
  i8460.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8461[12], i8460.orbitalOffsetZ)
  return i8460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i8462 = root || new pc.ParticleSystemNoise()
  var i8463 = data
  i8462.enabled = !!i8463[0]
  i8462.separateAxes = !!i8463[1]
  i8462.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8463[2], i8462.strengthX)
  i8462.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8463[3], i8462.strengthY)
  i8462.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8463[4], i8462.strengthZ)
  i8462.frequency = i8463[5]
  i8462.damping = !!i8463[6]
  i8462.octaveCount = i8463[7]
  i8462.octaveMultiplier = i8463[8]
  i8462.octaveScale = i8463[9]
  i8462.quality = i8463[10]
  i8462.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8463[11], i8462.scrollSpeed)
  i8462.scrollSpeedMultiplier = i8463[12]
  i8462.remapEnabled = !!i8463[13]
  i8462.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8463[14], i8462.remapX)
  i8462.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8463[15], i8462.remapY)
  i8462.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8463[16], i8462.remapZ)
  i8462.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8463[17], i8462.positionAmount)
  i8462.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8463[18], i8462.rotationAmount)
  i8462.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8463[19], i8462.sizeAmount)
  return i8462
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i8464 = root || new pc.ParticleSystemInheritVelocity()
  var i8465 = data
  i8464.enabled = !!i8465[0]
  i8464.mode = i8465[1]
  i8464.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8465[2], i8464.curve)
  return i8464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i8466 = root || new pc.ParticleSystemForceOverLifetime()
  var i8467 = data
  i8466.enabled = !!i8467[0]
  i8466.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8467[1], i8466.x)
  i8466.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8467[2], i8466.y)
  i8466.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8467[3], i8466.z)
  i8466.space = i8467[4]
  i8466.randomized = !!i8467[5]
  return i8466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i8468 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i8469 = data
  i8468.enabled = !!i8469[0]
  i8468.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8469[1], i8468.limit)
  i8468.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8469[2], i8468.limitX)
  i8468.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8469[3], i8468.limitY)
  i8468.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8469[4], i8468.limitZ)
  i8468.dampen = i8469[5]
  i8468.separateAxes = !!i8469[6]
  i8468.space = i8469[7]
  i8468.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8469[8], i8468.drag)
  i8468.multiplyDragByParticleSize = !!i8469[9]
  i8468.multiplyDragByParticleVelocity = !!i8469[10]
  return i8468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i8470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i8471 = data
  request.r(i8471[0], i8471[1], 0, i8470, 'mesh')
  i8470.meshCount = i8471[2]
  i8470.activeVertexStreamsCount = i8471[3]
  i8470.alignment = i8471[4]
  i8470.renderMode = i8471[5]
  i8470.sortMode = i8471[6]
  i8470.lengthScale = i8471[7]
  i8470.velocityScale = i8471[8]
  i8470.cameraVelocityScale = i8471[9]
  i8470.normalDirection = i8471[10]
  i8470.sortingFudge = i8471[11]
  i8470.minParticleSize = i8471[12]
  i8470.maxParticleSize = i8471[13]
  i8470.pivot = new pc.Vec3( i8471[14], i8471[15], i8471[16] )
  request.r(i8471[17], i8471[18], 0, i8470, 'trailMaterial')
  i8470.applyActiveColorSpace = !!i8471[19]
  i8470.enabled = !!i8471[20]
  request.r(i8471[21], i8471[22], 0, i8470, 'sharedMaterial')
  var i8473 = i8471[23]
  var i8472 = []
  for(var i = 0; i < i8473.length; i += 2) {
  request.r(i8473[i + 0], i8473[i + 1], 2, i8472, '')
  }
  i8470.sharedMaterials = i8472
  i8470.receiveShadows = !!i8471[24]
  i8470.shadowCastingMode = i8471[25]
  i8470.sortingLayerID = i8471[26]
  i8470.sortingOrder = i8471[27]
  i8470.lightmapIndex = i8471[28]
  i8470.lightmapSceneIndex = i8471[29]
  i8470.lightmapScaleOffset = new pc.Vec4( i8471[30], i8471[31], i8471[32], i8471[33] )
  i8470.lightProbeUsage = i8471[34]
  i8470.reflectionProbeUsage = i8471[35]
  return i8470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i8474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i8475 = data
  i8474.type = i8475[0]
  i8474.color = new pc.Color(i8475[1], i8475[2], i8475[3], i8475[4])
  i8474.cullingMask = i8475[5]
  i8474.intensity = i8475[6]
  i8474.range = i8475[7]
  i8474.spotAngle = i8475[8]
  i8474.shadows = i8475[9]
  i8474.shadowNormalBias = i8475[10]
  i8474.shadowBias = i8475[11]
  i8474.shadowStrength = i8475[12]
  i8474.shadowResolution = i8475[13]
  i8474.lightmapBakeType = i8475[14]
  i8474.renderMode = i8475[15]
  request.r(i8475[16], i8475[17], 0, i8474, 'cookie')
  i8474.cookieSize = i8475[18]
  i8474.shadowNearPlane = i8475[19]
  i8474.occlusionMaskChannel = i8475[20]
  i8474.isBaked = !!i8475[21]
  i8474.mixedLightingMode = i8475[22]
  i8474.enabled = !!i8475[23]
  return i8474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i8476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i8477 = data
  i8476.name = i8477[0]
  i8476.halfPrecision = !!i8477[1]
  i8476.useSimplification = !!i8477[2]
  i8476.useUInt32IndexFormat = !!i8477[3]
  i8476.vertexCount = i8477[4]
  i8476.aabb = i8477[5]
  var i8479 = i8477[6]
  var i8478 = []
  for(var i = 0; i < i8479.length; i += 1) {
    i8478.push( !!i8479[i + 0] );
  }
  i8476.streams = i8478
  i8476.vertices = i8477[7]
  var i8481 = i8477[8]
  var i8480 = []
  for(var i = 0; i < i8481.length; i += 1) {
    i8480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i8481[i + 0]) );
  }
  i8476.subMeshes = i8480
  var i8483 = i8477[9]
  var i8482 = []
  for(var i = 0; i < i8483.length; i += 16) {
    i8482.push( new pc.Mat4().setData(i8483[i + 0], i8483[i + 1], i8483[i + 2], i8483[i + 3],  i8483[i + 4], i8483[i + 5], i8483[i + 6], i8483[i + 7],  i8483[i + 8], i8483[i + 9], i8483[i + 10], i8483[i + 11],  i8483[i + 12], i8483[i + 13], i8483[i + 14], i8483[i + 15]) );
  }
  i8476.bindposes = i8482
  var i8485 = i8477[10]
  var i8484 = []
  for(var i = 0; i < i8485.length; i += 1) {
    i8484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i8485[i + 0]) );
  }
  i8476.blendShapes = i8484
  return i8476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i8490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i8491 = data
  i8490.triangles = i8491[0]
  return i8490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i8496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i8497 = data
  i8496.name = i8497[0]
  var i8499 = i8497[1]
  var i8498 = []
  for(var i = 0; i < i8499.length; i += 1) {
    i8498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i8499[i + 0]) );
  }
  i8496.frames = i8498
  return i8496
}

Deserializers["BubbleTwoSlot"] = function (request, data, root) {
  var i8500 = root || request.c( 'BubbleTwoSlot' )
  var i8501 = data
  i8500.layoutCenter = new pc.Vec2( i8501[0], i8501[1] )
  i8500.horizontalOffset = i8501[2]
  i8500.currentConfig = request.d('BubbleConfig', i8501[3], i8500.currentConfig)
  var i8503 = i8501[4]
  var i8502 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i8503.length; i += 2) {
  request.r(i8503[i + 0], i8503[i + 1], 1, i8502, '')
  }
  i8500.birds = i8502
  request.r(i8501[5], i8501[6], 0, i8500, 'birdParent')
  i8500.refillPopDuration = i8501[7]
  i8500.refillMoveDuration = i8501[8]
  i8500.clipBirdsToCircle = !!i8501[9]
  return i8500
}

Deserializers["BubbleThreeSlot"] = function (request, data, root) {
  var i8504 = root || request.c( 'BubbleThreeSlot' )
  var i8505 = data
  i8504.layoutCenter = new pc.Vec2( i8505[0], i8505[1] )
  i8504.horizontalOffset = i8505[2]
  i8504.verticalOffset = i8505[3]
  i8504.currentConfig = request.d('BubbleConfig', i8505[4], i8504.currentConfig)
  var i8507 = i8505[5]
  var i8506 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i8507.length; i += 2) {
  request.r(i8507[i + 0], i8507[i + 1], 1, i8506, '')
  }
  i8504.birds = i8506
  request.r(i8505[6], i8505[7], 0, i8504, 'birdParent')
  i8504.refillPopDuration = i8505[8]
  i8504.refillMoveDuration = i8505[9]
  i8504.clipBirdsToCircle = !!i8505[10]
  return i8504
}

Deserializers["BubbleFourSlot"] = function (request, data, root) {
  var i8508 = root || request.c( 'BubbleFourSlot' )
  var i8509 = data
  i8508.layoutCenter = new pc.Vec2( i8509[0], i8509[1] )
  i8508.horizontalOffset = i8509[2]
  i8508.verticalOffset = i8509[3]
  i8508.currentConfig = request.d('BubbleConfig', i8509[4], i8508.currentConfig)
  var i8511 = i8509[5]
  var i8510 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i8511.length; i += 2) {
  request.r(i8511[i + 0], i8511[i + 1], 1, i8510, '')
  }
  i8508.birds = i8510
  request.r(i8509[6], i8509[7], 0, i8508, 'birdParent')
  i8508.refillPopDuration = i8509[8]
  i8508.refillMoveDuration = i8509[9]
  i8508.clipBirdsToCircle = !!i8509[10]
  return i8508
}

Deserializers["BubbleFiveSlot"] = function (request, data, root) {
  var i8512 = root || request.c( 'BubbleFiveSlot' )
  var i8513 = data
  i8512.layoutCenter = new pc.Vec2( i8513[0], i8513[1] )
  i8512.horizontalOffset = i8513[2]
  i8512.verticalOffset = i8513[3]
  i8512.currentConfig = request.d('BubbleConfig', i8513[4], i8512.currentConfig)
  var i8515 = i8513[5]
  var i8514 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i8515.length; i += 2) {
  request.r(i8515[i + 0], i8515[i + 1], 1, i8514, '')
  }
  i8512.birds = i8514
  request.r(i8513[6], i8513[7], 0, i8512, 'birdParent')
  i8512.refillPopDuration = i8513[8]
  i8512.refillMoveDuration = i8513[9]
  i8512.clipBirdsToCircle = !!i8513[10]
  return i8512
}

Deserializers["FrozenNestObstacle"] = function (request, data, root) {
  var i8516 = root || request.c( 'FrozenNestObstacle' )
  var i8517 = data
  i8516.layers = i8517[0]
  i8516.touchTolerance = i8517[1]
  i8516.blockedMessage = i8517[2]
  i8516.overlayPart = i8517[3]
  i8516.layerTextPart = i8517[4]
  i8516.minAlpha = i8517[5]
  return i8516
}

Deserializers["LockedNestObstacle"] = function (request, data, root) {
  var i8518 = root || request.c( 'LockedNestObstacle' )
  var i8519 = data
  i8518.blockedMessage = i8519[0]
  request.r(i8519[1], i8519[2], 0, i8518, 'flyingKeyPrefab')
  i8518.keyFlyDuration = i8519[3]
  i8518.keyArcHeight = i8519[4]
  i8518.keySortingOffset = i8519[5]
  i8518.chainPart = i8519[6]
  i8518.lockPart = i8519[7]
  i8518.countTextPart = i8519[8]
  return i8518
}

Deserializers["KeyNestObstacle"] = function (request, data, root) {
  var i8520 = root || request.c( 'KeyNestObstacle' )
  var i8521 = data
  i8520.keyPart = i8521[0]
  return i8520
}

Deserializers["HiddenNestObstacle"] = function (request, data, root) {
  var i8522 = root || request.c( 'HiddenNestObstacle' )
  var i8523 = data
  i8522.blockedMessage = i8523[0]
  i8522.bottomTolerance = i8523[1]
  i8522.settleTime = i8523[2]
  i8522.revealDuration = i8523[3]
  i8522.coverPart = i8523[4]
  return i8522
}

Deserializers["StoneNestObstacle"] = function (request, data, root) {
  var i8524 = root || request.c( 'StoneNestObstacle' )
  var i8525 = data
  i8524.stonePart = i8525[0]
  var i8527 = i8525[1]
  var i8526 = []
  for(var i = 0; i < i8527.length; i += 1) {
    i8526.push( i8527[i + 0] );
  }
  i8524.hiddenParts = i8526
  i8524.keepUpright = !!i8525[2]
  i8524.stoneMass = i8525[3]
  return i8524
}

Deserializers["BigNestObstacle"] = function (request, data, root) {
  var i8530 = root || request.c( 'BigNestObstacle' )
  var i8531 = data
  i8530.countTextPart = i8531[0]
  return i8530
}

Deserializers["HiddenBirdObstacle"] = function (request, data, root) {
  var i8532 = root || request.c( 'HiddenBirdObstacle' )
  var i8533 = data
  i8532.overlayPart = i8533[0]
  i8532.revealDuration = i8533[1]
  return i8532
}

Deserializers["BindBirdObstacle"] = function (request, data, root) {
  var i8534 = root || request.c( 'BindBirdObstacle' )
  var i8535 = data
  i8534.overlayPart = i8535[0]
  i8534.sortingOffset = i8535[1]
  i8534.clearDuration = i8535[2]
  return i8534
}

Deserializers["IceBirdObstacle"] = function (request, data, root) {
  var i8536 = root || request.c( 'IceBirdObstacle' )
  var i8537 = data
  i8536.blockedMessage = i8537[0]
  i8536.overlayPart = i8537[1]
  i8536.textPart = i8537[2]
  return i8536
}

Deserializers["TargetNestObstacle"] = function (request, data, root) {
  var i8538 = root || request.c( 'TargetNestObstacle' )
  var i8539 = data
  i8538.blockedMessage = i8539[0]
  i8538.revealDuration = i8539[1]
  i8538.overlayPart = i8539[2]
  i8538.iconPart = i8539[3]
  return i8538
}

Deserializers["Bird"] = function (request, data, root) {
  var i8540 = root || request.c( 'Bird' )
  var i8541 = data
  request.r(i8541[0], i8541[1], 0, i8540, 'Content')
  var i8543 = i8541[2]
  var i8542 = []
  for(var i = 0; i < i8543.length; i += 2) {
  request.r(i8543[i + 0], i8543[i + 1], 2, i8542, '')
  }
  i8540.trailParticles = i8542
  request.r(i8541[3], i8541[4], 0, i8540, '_skeletalAnimation')
  i8540._birdData = request.d('BirdData', i8541[5], i8540._birdData)
  i8540._moveDuration = i8541[6]
  i8540._slotScale = i8541[7]
  i8540._flightSpeed = i8541[8]
  i8540._flightJumpPower = i8541[9]
  i8540._flightJumpPowerPerUnit = i8541[10]
  i8540._sourceFacesRight = !!i8541[11]
  i8540._flightFacingDeadZone = i8541[12]
  i8540._landContactFallbackDelay = i8541[13]
  request.r(i8541[14], i8541[15], 0, i8540, '_collider')
  request.r(i8541[16], i8541[17], 0, i8540, '_skeletalRenderer')
  i8540._idleUpdateFps = i8541[18]
  i8540._freezeSpineInBubble = !!i8541[19]
  i8540._freezeSpineWhenSleeping = !!i8541[20]
  return i8540
}

Deserializers["BirdData"] = function (request, data, root) {
  var i8546 = root || request.c( 'BirdData' )
  var i8547 = data
  i8546.birdType = i8547[0]
  i8546.birdId = i8547[1]
  request.r(i8547[2], i8547[3], 0, i8546, 'spriteIcon')
  request.r(i8547[4], i8547[5], 0, i8546, 'skeletonDataAsset')
  return i8546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i8548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i8549 = data
  i8548.usedByComposite = !!i8549[0]
  i8548.autoTiling = !!i8549[1]
  i8548.size = new pc.Vec2( i8549[2], i8549[3] )
  i8548.edgeRadius = i8549[4]
  i8548.enabled = !!i8549[5]
  i8548.isTrigger = !!i8549[6]
  i8548.usedByEffector = !!i8549[7]
  i8548.density = i8549[8]
  i8548.offset = new pc.Vec2( i8549[9], i8549[10] )
  request.r(i8549[11], i8549[12], 0, i8548, 'material')
  return i8548
}

Deserializers["BirdParts"] = function (request, data, root) {
  var i8550 = root || request.c( 'BirdParts' )
  var i8551 = data
  var i8553 = i8551[0]
  var i8552 = []
  for(var i = 0; i < i8553.length; i += 1) {
    i8552.push( request.d('BirdParts+Entry', i8553[i + 0]) );
  }
  i8550.parts = i8552
  return i8550
}

Deserializers["BirdParts+Entry"] = function (request, data, root) {
  var i8556 = root || request.c( 'BirdParts+Entry' )
  var i8557 = data
  i8556.key = i8557[0]
  request.r(i8557[1], i8557[2], 0, i8556, 'target')
  return i8556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i8558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i8559 = data
  request.r(i8559[0], i8559[1], 0, i8558, 'sharedMesh')
  return i8558
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i8560 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i8561 = data
  i8560.loop = !!i8561[0]
  i8560.timeScale = i8561[1]
  request.r(i8561[2], i8561[3], 0, i8560, 'skeletonDataAsset')
  i8560.initialSkinName = i8561[4]
  i8560.fixPrefabOverrideViaMeshFilter = i8561[5]
  i8560.initialFlipX = !!i8561[6]
  i8560.initialFlipY = !!i8561[7]
  i8560.updateWhenInvisible = i8561[8]
  i8560.zSpacing = i8561[9]
  i8560.useClipping = !!i8561[10]
  i8560.immutableTriangles = !!i8561[11]
  i8560.pmaVertexColors = !!i8561[12]
  i8560.clearStateOnDisable = !!i8561[13]
  i8560.tintBlack = !!i8561[14]
  i8560.singleSubmesh = !!i8561[15]
  i8560.fixDrawOrder = !!i8561[16]
  i8560.addNormals = !!i8561[17]
  i8560.calculateTangents = !!i8561[18]
  i8560.maskInteraction = i8561[19]
  i8560.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i8561[20], i8560.maskMaterials)
  i8560.disableRenderingOnOverride = !!i8561[21]
  i8560.updateTiming = i8561[22]
  i8560.unscaledTime = !!i8561[23]
  i8560._animationName = i8561[24]
  var i8563 = i8561[25]
  var i8562 = []
  for(var i = 0; i < i8563.length; i += 1) {
    i8562.push( i8563[i + 0] );
  }
  i8560.separatorSlotNames = i8562
  i8560.physicsPositionInheritanceFactor = new pc.Vec2( i8561[26], i8561[27] )
  i8560.physicsRotationInheritanceFactor = i8561[28]
  request.r(i8561[29], i8561[30], 0, i8560, 'physicsMovementRelativeTo')
  return i8560
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i8564 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i8565 = data
  var i8567 = i8565[0]
  var i8566 = []
  for(var i = 0; i < i8567.length; i += 2) {
  request.r(i8567[i + 0], i8567[i + 1], 2, i8566, '')
  }
  i8564.materialsMaskDisabled = i8566
  var i8569 = i8565[1]
  var i8568 = []
  for(var i = 0; i < i8569.length; i += 2) {
  request.r(i8569[i + 0], i8569[i + 1], 2, i8568, '')
  }
  i8564.materialsInsideMask = i8568
  var i8571 = i8565[2]
  var i8570 = []
  for(var i = 0; i < i8571.length; i += 2) {
  request.r(i8571[i + 0], i8571[i + 1], 2, i8570, '')
  }
  i8564.materialsOutsideMask = i8570
  return i8564
}

Deserializers["MagnetNestFx"] = function (request, data, root) {
  var i8574 = root || request.c( 'MagnetNestFx' )
  var i8575 = data
  i8574.appearDuration = i8575[0]
  i8574.startScaleMultiplier = i8575[1]
  i8574.endScaleMultiplier = i8575[2]
  i8574.vanishDuration = i8575[3]
  return i8574
}

Deserializers["ShuffleFX"] = function (request, data, root) {
  var i8576 = root || request.c( 'ShuffleFX' )
  var i8577 = data
  request.r(i8577[0], i8577[1], 0, i8576, 'fan')
  request.r(i8577[2], i8577[3], 0, i8576, 'fan_spin')
  i8576.appearDuration = i8577[4]
  i8576.spinDuration = i8577[5]
  i8576.disappearDuration = i8577[6]
  i8576.totalSpinAngle = i8577[7]
  i8576.blurThreshold = i8577[8]
  i8576.wobbleAngle = i8577[9]
  i8576.wobbleOffset = i8577[10]
  i8576.wobbleSpeed = i8577[11]
  i8576.sortingOrderOffset = i8577[12]
  return i8576
}

Deserializers["ParticlesBase"] = function (request, data, root) {
  var i8578 = root || request.c( 'ParticlesBase' )
  var i8579 = data
  i8578.effectType = i8579[0]
  request.r(i8579[1], i8579[2], 0, i8578, 'particles')
  var i8581 = i8579[3]
  var i8580 = []
  for(var i = 0; i < i8581.length; i += 2) {
  request.r(i8581[i + 0], i8581[i + 1], 2, i8580, '')
  }
  i8578.allParticles = i8580
  return i8578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i8582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i8583 = data
  i8582.name = i8583[0]
  i8582.atlasId = i8583[1]
  i8582.mipmapCount = i8583[2]
  i8582.hdr = !!i8583[3]
  i8582.size = i8583[4]
  i8582.anisoLevel = i8583[5]
  i8582.filterMode = i8583[6]
  var i8585 = i8583[7]
  var i8584 = []
  for(var i = 0; i < i8585.length; i += 4) {
    i8584.push( UnityEngine.Rect.MinMaxRect(i8585[i + 0], i8585[i + 1], i8585[i + 2], i8585[i + 3]) );
  }
  i8582.rects = i8584
  i8582.wrapU = i8583[8]
  i8582.wrapV = i8583[9]
  return i8582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i8588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i8589 = data
  i8588.name = i8589[0]
  i8588.index = i8589[1]
  i8588.startup = !!i8589[2]
  return i8588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i8590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i8591 = data
  i8590.aspect = i8591[0]
  i8590.orthographic = !!i8591[1]
  i8590.orthographicSize = i8591[2]
  i8590.backgroundColor = new pc.Color(i8591[3], i8591[4], i8591[5], i8591[6])
  i8590.nearClipPlane = i8591[7]
  i8590.farClipPlane = i8591[8]
  i8590.fieldOfView = i8591[9]
  i8590.depth = i8591[10]
  i8590.clearFlags = i8591[11]
  i8590.cullingMask = i8591[12]
  i8590.rect = i8591[13]
  request.r(i8591[14], i8591[15], 0, i8590, 'targetTexture')
  i8590.usePhysicalProperties = !!i8591[16]
  i8590.focalLength = i8591[17]
  i8590.sensorSize = new pc.Vec2( i8591[18], i8591[19] )
  i8590.lensShift = new pc.Vec2( i8591[20], i8591[21] )
  i8590.gateFit = i8591[22]
  i8590.commandBufferCount = i8591[23]
  i8590.cameraType = i8591[24]
  i8590.enabled = !!i8591[25]
  return i8590
}

Deserializers["BoardManager"] = function (request, data, root) {
  var i8592 = root || request.c( 'BoardManager' )
  var i8593 = data
  var i8595 = i8593[0]
  var i8594 = new (System.Collections.Generic.List$1(Bridge.ns('BubbleBase')))
  for(var i = 0; i < i8595.length; i += 2) {
  request.r(i8595[i + 0], i8595[i + 1], 1, i8594, '')
  }
  i8592.bubbleActive = i8594
  var i8597 = i8593[1]
  var i8596 = []
  for(var i = 0; i < i8597.length; i += 2) {
  request.r(i8597[i + 0], i8597[i + 1], 2, i8596, '')
  }
  i8592._bubblePrefabs = i8596
  var i8599 = i8593[2]
  var i8598 = []
  for(var i = 0; i < i8599.length; i += 2) {
  request.r(i8599[i + 0], i8599[i + 1], 2, i8598, '')
  }
  i8592._spawnPoints = i8598
  request.r(i8593[3], i8593[4], 0, i8592, '_waterSurface')
  request.r(i8593[5], i8593[6], 0, i8592, '_bubbleParent')
  request.r(i8593[7], i8593[8], 0, i8592, '_magnetGatherPoint')
  i8592._surfaceTolerance = i8593[9]
  request.r(i8593[10], i8593[11], 0, i8592, '_wallsParent')
  request.r(i8593[12], i8593[13], 0, i8592, '_cloude')
  request.r(i8593[14], i8593[15], 0, i8592, '_bottomCollider')
  request.r(i8593[16], i8593[17], 0, i8592, '_alignmentCamera')
  i8592._horizontalSpawnJitter = i8593[18]
  i8592._inwardImpulseMin = i8593[19]
  i8592._inwardImpulseMax = i8593[20]
  i8592._initialSpawnCount = i8593[21]
  i8592._initialSpawnInterval = i8593[22]
  i8592._checkInterval = i8593[23]
  i8592._spawnInterval = i8593[24]
  i8592._deadlockCheckDelay = i8593[25]
  i8592._settleSpeed = i8593[26]
  i8592._settleTime = i8593[27]
  i8592._settleTimeout = i8593[28]
  request.r(i8593[29], i8593[30], 0, i8592, '_boxBird')
  var i8601 = i8593[31]
  var i8600 = []
  for(var i = 0; i < i8601.length; i += 2) {
  request.r(i8601[i + 0], i8601[i + 1], 2, i8600, '')
  }
  i8592._SpriteBoxBirds = i8600
  return i8592
}

Deserializers["TopContainer"] = function (request, data, root) {
  var i8608 = root || request.c( 'TopContainer' )
  var i8609 = data
  i8608.animatingCount = i8609[0]
  request.r(i8609[1], i8609[2], 0, i8608, 'top')
  request.r(i8609[3], i8609[4], 0, i8608, 'dockContainer')
  request.r(i8609[5], i8609[6], 0, i8608, 'slotContainer')
  request.r(i8609[7], i8609[8], 0, i8608, '_countComplateText')
  request.r(i8609[9], i8609[10], 0, i8608, 'outsideBirdHolder')
  request.r(i8609[11], i8609[12], 0, i8608, 'fitCamera')
  i8608.referenceResolution = new pc.Vec2( i8609[13], i8609[14] )
  i8608.referenceOrthographicSize = i8609[15]
  i8608.cameraFitPadding = i8609[16]
  i8608.allowCameraFitUpscale = !!i8609[17]
  return i8608
}

Deserializers["DockContainer"] = function (request, data, root) {
  var i8610 = root || request.c( 'DockContainer' )
  var i8611 = data
  i8610.dockCount = i8611[0]
  i8610.activeOrderCount = i8611[1]
  var i8613 = i8611[2]
  var i8612 = new (System.Collections.Generic.List$1(Bridge.ns('BirdDock')))
  for(var i = 0; i < i8613.length; i += 2) {
  request.r(i8613[i + 0], i8613[i + 1], 1, i8612, '')
  }
  i8610.dockSlot = i8612
  request.r(i8611[3], i8611[4], 0, i8610, 'tileDockPrefab')
  return i8610
}

Deserializers["TimeNestController"] = function (request, data, root) {
  var i8616 = root || request.c( 'TimeNestController' )
  var i8617 = data
  return i8616
}

Deserializers["BirdDock"] = function (request, data, root) {
  var i8618 = root || request.c( 'BirdDock' )
  var i8619 = data
  i8618.tileType = i8619[0]
  i8618.birdId = i8619[1]
  i8618.isLock = !!i8619[2]
  i8618.isAnim = !!i8619[3]
  request.r(i8619[4], i8619[5], 0, i8618, 'visual')
  var i8621 = i8619[6]
  var i8620 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i8621.length; i += 2) {
  request.r(i8621[i + 0], i8621[i + 1], 1, i8620, '')
  }
  i8618.points = i8620
  request.r(i8619[7], i8619[8], 0, i8618, '_targetSprite')
  request.r(i8619[9], i8619[10], 0, i8618, '_amountText')
  request.r(i8619[11], i8619[12], 0, i8618, 'addUI')
  request.r(i8619[13], i8619[14], 0, i8618, 'orderUI')
  i8618.Max = i8619[15]
  return i8618
}

Deserializers["DockCountdown"] = function (request, data, root) {
  var i8624 = root || request.c( 'DockCountdown' )
  var i8625 = data
  request.r(i8625[0], i8625[1], 0, i8624, 'countdownRoot')
  request.r(i8625[2], i8625[3], 0, i8624, 'timeText')
  i8624.warningThreshold = i8625[4]
  i8624.warningColor = new pc.Color(i8625[5], i8625[6], i8625[7], i8625[8])
  var i8627 = i8625[9]
  var i8626 = []
  for(var i = 0; i < i8627.length; i += 2) {
  request.r(i8627[i + 0], i8627[i + 1], 2, i8626, '')
  }
  i8624.warningObjects = i8626
  return i8624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i8630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i8631 = data
  i8630.frontSortingLayerID = i8631[0]
  i8630.frontSortingOrder = i8631[1]
  i8630.backSortingLayerID = i8631[2]
  i8630.backSortingOrder = i8631[3]
  i8630.alphaCutoff = i8631[4]
  request.r(i8631[5], i8631[6], 0, i8630, 'sprite')
  i8630.tileMode = i8631[7]
  i8630.isCustomRangeActive = !!i8631[8]
  i8630.spriteSortPoint = i8631[9]
  i8630.enabled = !!i8631[10]
  request.r(i8631[11], i8631[12], 0, i8630, 'sharedMaterial')
  var i8633 = i8631[13]
  var i8632 = []
  for(var i = 0; i < i8633.length; i += 2) {
  request.r(i8633[i + 0], i8633[i + 1], 2, i8632, '')
  }
  i8630.sharedMaterials = i8632
  i8630.receiveShadows = !!i8631[14]
  i8630.shadowCastingMode = i8631[15]
  i8630.sortingLayerID = i8631[16]
  i8630.sortingOrder = i8631[17]
  i8630.lightmapIndex = i8631[18]
  i8630.lightmapSceneIndex = i8631[19]
  i8630.lightmapScaleOffset = new pc.Vec4( i8631[20], i8631[21], i8631[22], i8631[23] )
  i8630.lightProbeUsage = i8631[24]
  i8630.reflectionProbeUsage = i8631[25]
  return i8630
}

Deserializers["SlotContainer"] = function (request, data, root) {
  var i8634 = root || request.c( 'SlotContainer' )
  var i8635 = data
  var i8637 = i8635[0]
  var i8636 = new (System.Collections.Generic.List$1(Bridge.ns('BirdSlot')))
  for(var i = 0; i < i8637.length; i += 2) {
  request.r(i8637[i + 0], i8637[i + 1], 1, i8636, '')
  }
  i8634.tileSlots = i8636
  request.r(i8635[1], i8635[2], 0, i8634, 'ExtraSlotPos')
  request.r(i8635[3], i8635[4], 0, i8634, 'tile')
  request.r(i8635[5], i8635[6], 0, i8634, 'branchWave')
  return i8634
}

Deserializers["BranchWave"] = function (request, data, root) {
  var i8640 = root || request.c( 'BranchWave' )
  var i8641 = data
  i8640.amplitude = i8641[0]
  i8640.speed = i8641[1]
  i8640.frequency = i8641[2]
  i8640.damping = i8641[3]
  i8640.falloff = i8641[4]
  i8640.riderTiltScale = i8641[5]
  return i8640
}

Deserializers["BirdSlot"] = function (request, data, root) {
  var i8642 = root || request.c( 'BirdSlot' )
  var i8643 = data
  i8642.isAnim = !!i8643[0]
  request.r(i8643[1], i8643[2], 0, i8642, 'warningSprite')
  return i8642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i8644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i8645 = data
  i8644.sortingLayerIndex = i8645[0]
  i8644.sortingOrder = i8645[1]
  i8644.sortingLayerName = i8645[2]
  i8644.enabled = !!i8645[3]
  return i8644
}

Deserializers["OutsideBirdHolder"] = function (request, data, root) {
  var i8646 = root || request.c( 'OutsideBirdHolder' )
  var i8647 = data
  request.r(i8647[0], i8647[1], 0, i8646, 'm_TxtCount')
  request.r(i8647[2], i8647[3], 0, i8646, 'm_Canvas')
  request.r(i8647[4], i8647[5], 0, i8646, 'm_ObjContent')
  request.r(i8647[6], i8647[7], 0, i8646, 'm_OutsideBirdPrefab')
  request.r(i8647[8], i8647[9], 0, i8646, 'm_NestVisual')
  i8646.m_ShakeDuration = i8647[10]
  i8646.m_ShakeScale = i8647[11]
  i8646.m_ShakeRotation = i8647[12]
  return i8646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i8648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i8649 = data
  i8648.planeDistance = i8649[0]
  i8648.referencePixelsPerUnit = i8649[1]
  i8648.isFallbackOverlay = !!i8649[2]
  i8648.renderMode = i8649[3]
  i8648.renderOrder = i8649[4]
  i8648.sortingLayerName = i8649[5]
  i8648.sortingOrder = i8649[6]
  i8648.scaleFactor = i8649[7]
  request.r(i8649[8], i8649[9], 0, i8648, 'worldCamera')
  i8648.overrideSorting = !!i8649[10]
  i8648.pixelPerfect = !!i8649[11]
  i8648.targetDisplay = i8649[12]
  i8648.overridePixelPerfect = !!i8649[13]
  i8648.enabled = !!i8649[14]
  return i8648
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i8650 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i8651 = data
  i8650.m_StartCorner = i8651[0]
  i8650.m_StartAxis = i8651[1]
  i8650.m_CellSize = new pc.Vec2( i8651[2], i8651[3] )
  i8650.m_Spacing = new pc.Vec2( i8651[4], i8651[5] )
  i8650.m_Constraint = i8651[6]
  i8650.m_ConstraintCount = i8651[7]
  i8650.m_Padding = UnityEngine.RectOffset.FromPaddings(i8651[8], i8651[9], i8651[10], i8651[11])
  i8650.m_ChildAlignment = i8651[12]
  return i8650
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i8652 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i8653 = data
  i8652.m_HorizontalFit = i8653[0]
  i8652.m_VerticalFit = i8653[1]
  return i8652
}

Deserializers["SpriteFitScreenHeight"] = function (request, data, root) {
  var i8654 = root || request.c( 'SpriteFitScreenHeight' )
  var i8655 = data
  request.r(i8655[0], i8655[1], 0, i8654, 'm_Camera')
  i8654.m_Overscan = i8655[2]
  return i8654
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i8656 = root || request.c( 'LevelManager' )
  var i8657 = data
  request.r(i8657[0], i8657[1], 0, i8656, 'birdPrefab')
  request.r(i8657[2], i8657[3], 0, i8656, 'birdDataSO')
  request.r(i8657[4], i8657[5], 0, i8656, 'obstacleConfigSO')
  request.r(i8657[6], i8657[7], 0, i8656, 'boardManager')
  request.r(i8657[8], i8657[9], 0, i8656, 'levelDifficultyFile')
  i8656.totalLevelCount = i8657[10]
  i8656.playableLevel = i8657[11]
  var i8659 = i8657[12]
  var i8658 = []
  for(var i = 0; i < i8659.length; i += 1) {
    i8658.push( request.d('LevelManager+LevelSet', i8659[i + 0]) );
  }
  i8656.levelSets = i8658
  return i8656
}

Deserializers["LevelManager+LevelSet"] = function (request, data, root) {
  var i8662 = root || request.c( 'LevelManager+LevelSet' )
  var i8663 = data
  i8662.name = i8663[0]
  request.r(i8663[1], i8663[2], 0, i8662, 'levelTableFile')
  var i8665 = i8663[3]
  var i8664 = []
  for(var i = 0; i < i8665.length; i += 2) {
  request.r(i8665[i + 0], i8665[i + 1], 2, i8664, '')
  }
  i8662.bubbleFiles = i8664
  return i8662
}

Deserializers["ControllerManager"] = function (request, data, root) {
  var i8668 = root || request.c( 'ControllerManager' )
  var i8669 = data
  i8668.layerMask = UnityEngine.LayerMask.FromIntegerValue( i8669[0] )
  i8668.layerMaskBlocker = UnityEngine.LayerMask.FromIntegerValue( i8669[1] )
  i8668.layerDockMask = UnityEngine.LayerMask.FromIntegerValue( i8669[2] )
  return i8668
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i8670 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i8671 = data
  request.r(i8671[0], i8671[1], 0, i8670, 'm_FirstSelected')
  i8670.m_sendNavigationEvents = !!i8671[2]
  i8670.m_DragThreshold = i8671[3]
  return i8670
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i8672 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i8673 = data
  i8672.m_HorizontalAxis = i8673[0]
  i8672.m_VerticalAxis = i8673[1]
  i8672.m_SubmitButton = i8673[2]
  i8672.m_CancelButton = i8673[3]
  i8672.m_InputActionsPerSecond = i8673[4]
  i8672.m_RepeatDelay = i8673[5]
  i8672.m_ForceModuleActive = !!i8673[6]
  i8672.m_SendPointerHoverToParent = !!i8673[7]
  return i8672
}

Deserializers["BoosterManager"] = function (request, data, root) {
  var i8674 = root || request.c( 'BoosterManager' )
  var i8675 = data
  i8674.OnGlobalStateChanged = request.d('System.Action', i8675[0], i8674.OnGlobalStateChanged)
  request.r(i8675[1], i8675[2], 0, i8674, 'MagnetNestFxPrefab')
  request.r(i8675[3], i8675[4], 0, i8674, '_shuffleFXPrefab')
  request.r(i8675[5], i8675[6], 0, i8674, 'ClearHitFxPrefab')
  i8674.clearHitFxLifetime = i8675[7]
  i8674.shuffleSuckDuration = i8675[8]
  i8674.shuffleSpreadDuration = i8675[9]
  i8674.shuffleStagger = i8675[10]
  i8674.shuffleBirdSortingOrder = i8675[11]
  request.r(i8675[12], i8675[13], 0, i8674, 'boosterConfig')
  return i8674
}

Deserializers["System.Action"] = function (request, data, root) {
  var i8676 = root || request.c( 'System.Action' )
  var i8677 = data
  return i8676
}

Deserializers["GameManager"] = function (request, data, root) {
  var i8678 = root || request.c( 'GameManager' )
  var i8679 = data
  i8678.currentGameState = i8679[0]
  i8678.isTestMode = !!i8679[1]
  return i8678
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i8680 = root || request.c( 'SoundManager' )
  var i8681 = data
  request.r(i8681[0], i8681[1], 0, i8680, 'musicSource')
  i8680.resultMusicVolumeMultiplier = i8681[2]
  i8680.ingameMusicVolume = i8681[3]
  request.r(i8681[4], i8681[5], 0, i8680, 'parentSFX')
  i8680.poolSize = i8681[6]
  i8680.maxLoopingPerClip = i8681[7]
  var i8683 = i8681[8]
  var i8682 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i8683.length; i += 2) {
  request.r(i8683[i + 0], i8683[i + 1], 1, i8682, '')
  }
  i8680.musicClips = i8682
  var i8685 = i8681[9]
  var i8684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i8685.length; i += 2) {
  request.r(i8685[i + 0], i8685[i + 1], 1, i8684, '')
  }
  i8680.sfxClips = i8684
  i8680.importantVolume = i8681[10]
  i8680.normalVolume = i8681[11]
  i8680.minorVolume = i8681[12]
  i8680.smallVolume = i8681[13]
  return i8680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i8688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i8689 = data
  request.r(i8689[0], i8689[1], 0, i8688, 'clip')
  request.r(i8689[2], i8689[3], 0, i8688, 'outputAudioMixerGroup')
  i8688.playOnAwake = !!i8689[4]
  i8688.loop = !!i8689[5]
  i8688.time = i8689[6]
  i8688.volume = i8689[7]
  i8688.pitch = i8689[8]
  i8688.enabled = !!i8689[9]
  return i8688
}

Deserializers["ParticlesManager"] = function (request, data, root) {
  var i8690 = root || request.c( 'ParticlesManager' )
  var i8691 = data
  request.r(i8691[0], i8691[1], 0, i8690, 'set')
  request.r(i8691[2], i8691[3], 0, i8690, 'target')
  request.r(i8691[4], i8691[5], 0, i8690, 'startTarget')
  var i8693 = i8691[6]
  var i8692 = []
  for(var i = 0; i < i8693.length; i += 2) {
  request.r(i8693[i + 0], i8693[i + 1], 2, i8692, '')
  }
  i8690.particleEffectData = i8692
  request.r(i8691[7], i8691[8], 0, i8690, 'coinPrefab')
  i8690.spreadRange = i8691[9]
  i8690.spreadRangeOnSum = i8691[10]
  i8690.moveDuration = i8691[11]
  i8690.magMut = i8691[12]
  i8690.toptopOGScale = i8691[13]
  i8690.sum = i8691[14]
  return i8690
}

Deserializers["GameData"] = function (request, data, root) {
  var i8696 = root || request.c( 'GameData' )
  var i8697 = data
  var i8699 = i8697[0]
  var i8698 = []
  for(var i = 0; i < i8699.length; i += 4) {
    i8698.push( new pc.Color(i8699[i + 0], i8699[i + 1], i8699[i + 2], i8699[i + 3]) );
  }
  i8696.birdColors = i8698
  return i8696
}

Deserializers["ComboManager"] = function (request, data, root) {
  var i8702 = root || request.c( 'ComboManager' )
  var i8703 = data
  i8702.OnTimerComplete = request.d('System.Action', i8703[0], i8702.OnTimerComplete)
  i8702.comboTime = i8703[1]
  return i8702
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i8704 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i8705 = data
  i8704.m_UiScaleMode = i8705[0]
  i8704.m_ReferencePixelsPerUnit = i8705[1]
  i8704.m_ScaleFactor = i8705[2]
  i8704.m_ReferenceResolution = new pc.Vec2( i8705[3], i8705[4] )
  i8704.m_ScreenMatchMode = i8705[5]
  i8704.m_MatchWidthOrHeight = i8705[6]
  i8704.m_PhysicalUnit = i8705[7]
  i8704.m_FallbackScreenDPI = i8705[8]
  i8704.m_DefaultSpriteDPI = i8705[9]
  i8704.m_DynamicPixelsPerUnit = i8705[10]
  i8704.m_PresetInfoIsWorld = !!i8705[11]
  return i8704
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i8706 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i8707 = data
  i8706.m_IgnoreReversedGraphics = !!i8707[0]
  i8706.m_BlockingObjects = i8707[1]
  i8706.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i8707[2] )
  return i8706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i8708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i8709 = data
  i8708.m_Alpha = i8709[0]
  i8708.m_Interactable = !!i8709[1]
  i8708.m_BlocksRaycasts = !!i8709[2]
  i8708.m_IgnoreParentGroups = !!i8709[3]
  i8708.enabled = !!i8709[4]
  return i8708
}

Deserializers["GameplayUI"] = function (request, data, root) {
  var i8710 = root || request.c( 'GameplayUI' )
  var i8711 = data
  request.r(i8711[0], i8711[1], 0, i8710, 'warningHard')
  request.r(i8711[2], i8711[3], 0, i8710, 'warningExtreme')
  request.r(i8711[4], i8711[5], 0, i8710, 'canvaG')
  request.r(i8711[6], i8711[7], 0, i8710, 'imgPanel')
  i8710.IsDestroyOnClose = !!i8711[8]
  i8710.isFadeIn = !!i8711[9]
  i8710.isFadeOut = !!i8711[10]
  i8710.isSoundOpen = !!i8711[11]
  i8710.OnOpen = request.d('System.Action', i8711[12], i8710.OnOpen)
  i8710.OnClose = request.d('System.Action', i8711[13], i8710.OnClose)
  i8710.OnFadeIn_Complete = request.d('System.Action', i8711[14], i8710.OnFadeIn_Complete)
  i8710.OnFadeOut_Complete = request.d('System.Action', i8711[15], i8710.OnFadeOut_Complete)
  request.r(i8711[16], i8711[17], 0, i8710, 'contentFadeIO')
  request.r(i8711[18], i8711[19], 0, i8710, 'levelText')
  request.r(i8711[20], i8711[21], 0, i8710, 'settingButton')
  request.r(i8711[22], i8711[23], 0, i8710, 'outButton')
  request.r(i8711[24], i8711[25], 0, i8710, 'musicButton')
  request.r(i8711[26], i8711[27], 0, i8710, 'soundButton')
  request.r(i8711[28], i8711[29], 0, i8710, 'happticButton')
  request.r(i8711[30], i8711[31], 0, i8710, 'replayButton')
  request.r(i8711[32], i8711[33], 0, i8710, 'canlelSettingButton')
  var i8713 = i8711[34]
  var i8712 = []
  for(var i = 0; i < i8713.length; i += 2) {
  request.r(i8713[i + 0], i8713[i + 1], 2, i8712, '')
  }
  i8710.boosterItemUIs = i8712
  request.r(i8711[35], i8711[36], 0, i8710, 'musicCrossGameObject')
  request.r(i8711[37], i8711[38], 0, i8710, 'soundCrossGameObject')
  request.r(i8711[39], i8711[40], 0, i8710, 'happticCrossGameObject')
  request.r(i8711[41], i8711[42], 0, i8710, 'ContentBottomTransform')
  request.r(i8711[43], i8711[44], 0, i8710, 'pointBottom')
  request.r(i8711[45], i8711[46], 0, i8710, 'tagLevelImage')
  request.r(i8711[47], i8711[48], 0, i8710, 'tagSettingImage')
  request.r(i8711[49], i8711[50], 0, i8710, 'tagSetting1Image')
  request.r(i8711[51], i8711[52], 0, i8710, 'tagSetting2Image')
  var i8715 = i8711[53]
  var i8714 = []
  for(var i = 0; i < i8715.length; i += 2) {
  request.r(i8715[i + 0], i8715[i + 1], 2, i8714, '')
  }
  i8710.tagLevelSprites = i8714
  var i8717 = i8711[54]
  var i8716 = []
  for(var i = 0; i < i8717.length; i += 2) {
  request.r(i8717[i + 0], i8717[i + 1], 2, i8716, '')
  }
  i8710.tagSettingSprites = i8716
  var i8719 = i8711[55]
  var i8718 = []
  for(var i = 0; i < i8719.length; i += 2) {
  request.r(i8719[i + 0], i8719[i + 1], 2, i8718, '')
  }
  i8710.tagSetting1Sprites = i8718
  var i8721 = i8711[56]
  var i8720 = []
  for(var i = 0; i < i8721.length; i += 2) {
  request.r(i8721[i + 0], i8721[i + 1], 2, i8720, '')
  }
  i8710.tagSetting2Sprites = i8720
  request.r(i8711[57], i8711[58], 0, i8710, 'PanelPreWin')
  request.r(i8711[59], i8711[60], 0, i8710, 'textPanelWinTransform')
  request.r(i8711[61], i8711[62], 0, i8710, 'preWinLogo')
  request.r(i8711[63], i8711[64], 0, i8710, 'btnPreWinContinue')
  i8710.preWinTapDelay = i8711[65]
  request.r(i8711[66], i8711[67], 0, i8710, 'clearSlingshot')
  i8710.slingshotPopDuration = i8711[68]
  request.r(i8711[69], i8711[70], 0, i8710, 'settingAnimator')
  request.r(i8711[71], i8711[72], 0, i8710, 'loseUI')
  return i8710
}

Deserializers["Crystal.SafeArea"] = function (request, data, root) {
  var i8724 = root || request.c( 'Crystal.SafeArea' )
  var i8725 = data
  i8724.ConformX = !!i8725[0]
  i8724.ConformY = !!i8725[1]
  i8724.Logging = !!i8725[2]
  return i8724
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i8726 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i8727 = data
  i8726.m_Spacing = i8727[0]
  i8726.m_ChildForceExpandWidth = !!i8727[1]
  i8726.m_ChildForceExpandHeight = !!i8727[2]
  i8726.m_ChildControlWidth = !!i8727[3]
  i8726.m_ChildControlHeight = !!i8727[4]
  i8726.m_ChildScaleWidth = !!i8727[5]
  i8726.m_ChildScaleHeight = !!i8727[6]
  i8726.m_ReverseArrangement = !!i8727[7]
  i8726.m_Padding = UnityEngine.RectOffset.FromPaddings(i8727[8], i8727[9], i8727[10], i8727[11])
  i8726.m_ChildAlignment = i8727[12]
  return i8726
}

Deserializers["BoosterItemUI"] = function (request, data, root) {
  var i8728 = root || request.c( 'BoosterItemUI' )
  var i8729 = data
  i8728.type = i8729[0]
  request.r(i8729[1], i8729[2], 0, i8728, 'icon')
  request.r(i8729[3], i8729[4], 0, i8728, 'button')
  request.r(i8729[5], i8729[6], 0, i8728, 'amountObject')
  request.r(i8729[7], i8729[8], 0, i8728, 'addObject')
  request.r(i8729[9], i8729[10], 0, i8728, 'freeObject')
  request.r(i8729[11], i8729[12], 0, i8728, 'amountText')
  request.r(i8729[13], i8729[14], 0, i8728, 'lockObj')
  request.r(i8729[15], i8729[16], 0, i8728, 'levelText')
  request.r(i8729[17], i8729[18], 0, i8728, 'priceText')
  return i8728
}

Deserializers["ButtonScaleUI"] = function (request, data, root) {
  var i8730 = root || request.c( 'ButtonScaleUI' )
  var i8731 = data
  i8730.scaleDuration = i8731[0]
  i8730.action = request.d('UnityEngine.Events.UnityEvent', i8731[1], i8730.action)
  request.r(i8731[2], i8731[3], 0, i8730, 'transformToScale')
  i8730.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i8731[4], i8730.m_OnClick)
  i8730.m_Navigation = request.d('UnityEngine.UI.Navigation', i8731[5], i8730.m_Navigation)
  i8730.m_Transition = i8731[6]
  i8730.m_Colors = request.d('UnityEngine.UI.ColorBlock', i8731[7], i8730.m_Colors)
  i8730.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i8731[8], i8730.m_SpriteState)
  i8730.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i8731[9], i8730.m_AnimationTriggers)
  i8730.m_Interactable = !!i8731[10]
  request.r(i8731[11], i8731[12], 0, i8730, 'm_TargetGraphic')
  return i8730
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i8732 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i8733 = data
  i8732.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8733[0], i8732.m_PersistentCalls)
  return i8732
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i8734 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i8735 = data
  var i8737 = i8735[0]
  var i8736 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i8737.length; i += 1) {
    i8736.add(request.d('UnityEngine.Events.PersistentCall', i8737[i + 0]));
  }
  i8734.m_Calls = i8736
  return i8734
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i8740 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i8741 = data
  request.r(i8741[0], i8741[1], 0, i8740, 'm_Target')
  i8740.m_TargetAssemblyTypeName = i8741[2]
  i8740.m_MethodName = i8741[3]
  i8740.m_Mode = i8741[4]
  i8740.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i8741[5], i8740.m_Arguments)
  i8740.m_CallState = i8741[6]
  return i8740
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i8742 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i8743 = data
  i8742.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8743[0], i8742.m_PersistentCalls)
  return i8742
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i8744 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i8745 = data
  i8744.m_Mode = i8745[0]
  i8744.m_WrapAround = !!i8745[1]
  request.r(i8745[2], i8745[3], 0, i8744, 'm_SelectOnUp')
  request.r(i8745[4], i8745[5], 0, i8744, 'm_SelectOnDown')
  request.r(i8745[6], i8745[7], 0, i8744, 'm_SelectOnLeft')
  request.r(i8745[8], i8745[9], 0, i8744, 'm_SelectOnRight')
  return i8744
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i8746 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i8747 = data
  i8746.m_NormalColor = new pc.Color(i8747[0], i8747[1], i8747[2], i8747[3])
  i8746.m_HighlightedColor = new pc.Color(i8747[4], i8747[5], i8747[6], i8747[7])
  i8746.m_PressedColor = new pc.Color(i8747[8], i8747[9], i8747[10], i8747[11])
  i8746.m_SelectedColor = new pc.Color(i8747[12], i8747[13], i8747[14], i8747[15])
  i8746.m_DisabledColor = new pc.Color(i8747[16], i8747[17], i8747[18], i8747[19])
  i8746.m_ColorMultiplier = i8747[20]
  i8746.m_FadeDuration = i8747[21]
  return i8746
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i8748 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i8749 = data
  request.r(i8749[0], i8749[1], 0, i8748, 'm_HighlightedSprite')
  request.r(i8749[2], i8749[3], 0, i8748, 'm_PressedSprite')
  request.r(i8749[4], i8749[5], 0, i8748, 'm_SelectedSprite')
  request.r(i8749[6], i8749[7], 0, i8748, 'm_DisabledSprite')
  return i8748
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i8750 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i8751 = data
  i8750.m_NormalTrigger = i8751[0]
  i8750.m_HighlightedTrigger = i8751[1]
  i8750.m_PressedTrigger = i8751[2]
  i8750.m_SelectedTrigger = i8751[3]
  i8750.m_DisabledTrigger = i8751[4]
  return i8750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i8752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i8753 = data
  request.r(i8753[0], i8753[1], 0, i8752, 'animatorController')
  request.r(i8753[2], i8753[3], 0, i8752, 'avatar')
  i8752.updateMode = i8753[4]
  i8752.hasTransformHierarchy = !!i8753[5]
  i8752.applyRootMotion = !!i8753[6]
  var i8755 = i8753[7]
  var i8754 = []
  for(var i = 0; i < i8755.length; i += 2) {
  request.r(i8755[i + 0], i8755[i + 1], 2, i8754, '')
  }
  i8752.humanBones = i8754
  i8752.enabled = !!i8753[8]
  return i8752
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i8756 = root || request.c( 'UnityEngine.UI.Button' )
  var i8757 = data
  i8756.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i8757[0], i8756.m_OnClick)
  i8756.m_Navigation = request.d('UnityEngine.UI.Navigation', i8757[1], i8756.m_Navigation)
  i8756.m_Transition = i8757[2]
  i8756.m_Colors = request.d('UnityEngine.UI.ColorBlock', i8757[3], i8756.m_Colors)
  i8756.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i8757[4], i8756.m_SpriteState)
  i8756.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i8757[5], i8756.m_AnimationTriggers)
  i8756.m_Interactable = !!i8757[6]
  request.r(i8757[7], i8757[8], 0, i8756, 'm_TargetGraphic')
  return i8756
}

Deserializers["SlingshotAnimator"] = function (request, data, root) {
  var i8758 = root || request.c( 'SlingshotAnimator' )
  var i8759 = data
  i8758.useUnscaledTime = !!i8759[0]
  i8758.speed = i8759[1]
  i8758.flightTime = i8759[2]
  i8758.reloadDelay = i8759[3]
  request.r(i8759[4], i8759[5], 0, i8758, 'animJson')
  var i8761 = i8759[6]
  var i8760 = []
  for(var i = 0; i < i8761.length; i += 2) {
  request.r(i8761[i + 0], i8761[i + 1], 2, i8760, '')
  }
  i8758.sprites = i8760
  return i8758
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i8762 = root || request.c( 'UnityEngine.UI.Mask' )
  var i8763 = data
  i8762.m_ShowMaskGraphic = !!i8763[0]
  return i8762
}

Deserializers["Coffee.UIExtensions.UIParticle"] = function (request, data, root) {
  var i8764 = root || request.c( 'Coffee.UIExtensions.UIParticle' )
  var i8765 = data
  i8764.m_IsTrail = !!i8765[0]
  i8764.m_IgnoreCanvasScaler = !!i8765[1]
  i8764.m_AbsoluteMode = !!i8765[2]
  i8764.m_Scale3D = new pc.Vec3( i8765[3], i8765[4], i8765[5] )
  var i8767 = i8765[6]
  var i8766 = []
  for(var i = 0; i < i8767.length; i += 1) {
    i8766.push( request.d('Coffee.UIExtensions.AnimatableProperty', i8767[i + 0]) );
  }
  i8764.m_AnimatableProperties = i8766
  var i8769 = i8765[7]
  var i8768 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i8769.length; i += 2) {
  request.r(i8769[i + 0], i8769[i + 1], 1, i8768, '')
  }
  i8764.m_Particles = i8768
  i8764.m_MeshSharing = i8765[8]
  i8764.m_GroupId = i8765[9]
  i8764.m_GroupMaxId = i8765[10]
  i8764.m_PositionMode = i8765[11]
  i8764.m_AutoScaling = !!i8765[12]
  i8764.m_AutoScalingMode = i8765[13]
  i8764.m_UseCustomView = !!i8765[14]
  i8764.m_CustomViewSize = i8765[15]
  i8764.m_TimeScaleMultiplier = i8765[16]
  request.r(i8765[17], i8765[18], 0, i8764, 'm_Material')
  i8764.m_Maskable = !!i8765[19]
  i8764.m_Color = new pc.Color(i8765[20], i8765[21], i8765[22], i8765[23])
  i8764.m_RaycastTarget = !!i8765[24]
  i8764.m_RaycastPadding = new pc.Vec4( i8765[25], i8765[26], i8765[27], i8765[28] )
  return i8764
}

Deserializers["Coffee.UIExtensions.AnimatableProperty"] = function (request, data, root) {
  var i8772 = root || request.c( 'Coffee.UIExtensions.AnimatableProperty' )
  var i8773 = data
  i8772.m_Name = i8773[0]
  i8772.m_Type = i8773[1]
  return i8772
}

Deserializers["ColorBirdLogoAnimator"] = function (request, data, root) {
  var i8776 = root || request.c( 'ColorBirdLogoAnimator' )
  var i8777 = data
  i8776.playOnEnable = !!i8777[0]
  i8776.useUnscaledTime = !!i8777[1]
  i8776.playIdle = !!i8777[2]
  i8776.skipIntro = !!i8777[3]
  i8776.loopIntroOutro = !!i8777[4]
  i8776.loopHoldTime = i8777[5]
  i8776.speed = i8777[6]
  request.r(i8777[7], i8777[8], 0, i8776, 'animJson')
  var i8779 = i8777[9]
  var i8778 = []
  for(var i = 0; i < i8779.length; i += 2) {
  request.r(i8779[i + 0], i8779[i + 1], 2, i8778, '')
  }
  i8776.layerSprites = i8778
  return i8776
}

Deserializers["LoseUI"] = function (request, data, root) {
  var i8780 = root || request.c( 'LoseUI' )
  var i8781 = data
  request.r(i8781[0], i8781[1], 0, i8780, 'canvaG')
  request.r(i8781[2], i8781[3], 0, i8780, 'imgPanel')
  i8780.IsDestroyOnClose = !!i8781[4]
  i8780.isFadeIn = !!i8781[5]
  i8780.isFadeOut = !!i8781[6]
  i8780.isSoundOpen = !!i8781[7]
  i8780.OnOpen = request.d('System.Action', i8781[8], i8780.OnOpen)
  i8780.OnClose = request.d('System.Action', i8781[9], i8780.OnClose)
  i8780.OnFadeIn_Complete = request.d('System.Action', i8781[10], i8780.OnFadeIn_Complete)
  i8780.OnFadeOut_Complete = request.d('System.Action', i8781[11], i8780.OnFadeOut_Complete)
  request.r(i8781[12], i8781[13], 0, i8780, 'contentFadeIO')
  request.r(i8781[14], i8781[15], 0, i8780, 'buttonFullScreen')
  request.r(i8781[16], i8781[17], 0, i8780, 'buttonRetry')
  request.r(i8781[18], i8781[19], 0, i8780, 'birdLoseSkeleton')
  i8780.birdLoseAnimName = i8781[20]
  i8780.birdLoseLoop = !!i8781[21]
  return i8780
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i8782 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i8783 = data
  var i8785 = i8783[0]
  var i8784 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i8785.length; i += 1) {
    i8784.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i8785[i + 0]));
  }
  i8782.m_Delegates = i8784
  return i8782
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i8788 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i8789 = data
  i8788.eventID = i8789[0]
  i8788.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i8789[1], i8788.callback)
  return i8788
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i8790 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i8791 = data
  i8790.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8791[0], i8790.m_PersistentCalls)
  return i8790
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i8792 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i8793 = data
  request.r(i8793[0], i8793[1], 0, i8792, 'm_ObjectArgument')
  i8792.m_ObjectArgumentAssemblyTypeName = i8793[2]
  i8792.m_IntArgument = i8793[3]
  i8792.m_FloatArgument = i8793[4]
  i8792.m_StringArgument = i8793[5]
  i8792.m_BoolArgument = !!i8793[6]
  return i8792
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i8794 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i8795 = data
  request.r(i8795[0], i8795[1], 0, i8794, 'skeletonDataAsset')
  request.r(i8795[2], i8795[3], 0, i8794, 'additiveMaterial')
  request.r(i8795[4], i8795[5], 0, i8794, 'multiplyMaterial')
  request.r(i8795[6], i8795[7], 0, i8794, 'screenMaterial')
  i8794.forceAdditiveMaterial = !!i8795[8]
  i8794.initialSkinName = i8795[9]
  i8794.initialFlipX = !!i8795[10]
  i8794.initialFlipY = !!i8795[11]
  i8794.startingAnimation = i8795[12]
  i8794.startingLoop = !!i8795[13]
  i8794.timeScale = i8795[14]
  i8794.freeze = !!i8795[15]
  i8794.layoutScaleMode = i8795[16]
  i8794.updateWhenInvisible = i8795[17]
  i8794.allowMultipleCanvasRenderers = !!i8795[18]
  var i8797 = i8795[19]
  var i8796 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i8797.length; i += 2) {
  request.r(i8797[i + 0], i8797[i + 1], 1, i8796, '')
  }
  i8794.canvasRenderers = i8796
  i8794.enableSeparatorSlots = !!i8795[20]
  i8794.updateSeparatorPartLocation = !!i8795[21]
  i8794.updateSeparatorPartScale = !!i8795[22]
  i8794.disableMeshAssignmentOnOverride = !!i8795[23]
  i8794.m_SkeletonColor = new pc.Color(i8795[24], i8795[25], i8795[26], i8795[27])
  i8794.referenceSize = new pc.Vec2( i8795[28], i8795[29] )
  i8794.pivotOffset = new pc.Vec2( i8795[30], i8795[31] )
  i8794.referenceScale = i8795[32]
  i8794.layoutScale = i8795[33]
  i8794.rectTransformSize = new pc.Vec2( i8795[34], i8795[35] )
  i8794.editReferenceRect = !!i8795[36]
  var i8799 = i8795[37]
  var i8798 = []
  for(var i = 0; i < i8799.length; i += 1) {
    i8798.push( i8799[i + 0] );
  }
  i8794.separatorSlotNames = i8798
  var i8801 = i8795[38]
  var i8800 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i8801.length; i += 2) {
  request.r(i8801[i + 0], i8801[i + 1], 1, i8800, '')
  }
  i8794.separatorParts = i8800
  i8794.physicsPositionInheritanceFactor = new pc.Vec2( i8795[39], i8795[40] )
  i8794.physicsRotationInheritanceFactor = i8795[41]
  request.r(i8795[42], i8795[43], 0, i8794, 'physicsMovementRelativeTo')
  i8794.meshGenerator = request.d('Spine.Unity.MeshGenerator', i8795[44], i8794.meshGenerator)
  i8794.updateTiming = i8795[45]
  i8794.unscaledTime = !!i8795[46]
  request.r(i8795[47], i8795[48], 0, i8794, 'm_Material')
  i8794.m_Maskable = !!i8795[49]
  i8794.m_Color = new pc.Color(i8795[50], i8795[51], i8795[52], i8795[53])
  i8794.m_RaycastTarget = !!i8795[54]
  i8794.m_RaycastPadding = new pc.Vec4( i8795[55], i8795[56], i8795[57], i8795[58] )
  return i8794
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i8804 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i8805 = data
  i8804.settings = request.d('Spine.Unity.MeshGenerator+Settings', i8805[0], i8804.settings)
  return i8804
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i8806 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i8807 = data
  i8806.useClipping = !!i8807[0]
  i8806.zSpacing = i8807[1]
  i8806.tintBlack = !!i8807[2]
  i8806.canvasGroupCompatible = !!i8807[3]
  i8806.pmaVertexColors = !!i8807[4]
  i8806.addNormals = !!i8807[5]
  i8806.calculateTangents = !!i8807[6]
  i8806.immutableTriangles = !!i8807[7]
  return i8806
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i8808 = root || request.c( 'UnityEngine.UI.Text' )
  var i8809 = data
  i8808.m_FontData = request.d('UnityEngine.UI.FontData', i8809[0], i8808.m_FontData)
  i8808.m_Text = i8809[1]
  request.r(i8809[2], i8809[3], 0, i8808, 'm_Material')
  i8808.m_Maskable = !!i8809[4]
  i8808.m_Color = new pc.Color(i8809[5], i8809[6], i8809[7], i8809[8])
  i8808.m_RaycastTarget = !!i8809[9]
  i8808.m_RaycastPadding = new pc.Vec4( i8809[10], i8809[11], i8809[12], i8809[13] )
  return i8808
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i8810 = root || request.c( 'UnityEngine.UI.FontData' )
  var i8811 = data
  request.r(i8811[0], i8811[1], 0, i8810, 'm_Font')
  i8810.m_FontSize = i8811[2]
  i8810.m_FontStyle = i8811[3]
  i8810.m_BestFit = !!i8811[4]
  i8810.m_MinSize = i8811[5]
  i8810.m_MaxSize = i8811[6]
  i8810.m_Alignment = i8811[7]
  i8810.m_AlignByGeometry = !!i8811[8]
  i8810.m_RichText = !!i8811[9]
  i8810.m_HorizontalOverflow = i8811[10]
  i8810.m_VerticalOverflow = i8811[11]
  i8810.m_LineSpacing = i8811[12]
  return i8810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i8812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i8813 = data
  i8812.ambientIntensity = i8813[0]
  i8812.reflectionIntensity = i8813[1]
  i8812.ambientMode = i8813[2]
  i8812.ambientLight = new pc.Color(i8813[3], i8813[4], i8813[5], i8813[6])
  i8812.ambientSkyColor = new pc.Color(i8813[7], i8813[8], i8813[9], i8813[10])
  i8812.ambientGroundColor = new pc.Color(i8813[11], i8813[12], i8813[13], i8813[14])
  i8812.ambientEquatorColor = new pc.Color(i8813[15], i8813[16], i8813[17], i8813[18])
  i8812.fogColor = new pc.Color(i8813[19], i8813[20], i8813[21], i8813[22])
  i8812.fogEndDistance = i8813[23]
  i8812.fogStartDistance = i8813[24]
  i8812.fogDensity = i8813[25]
  i8812.fog = !!i8813[26]
  request.r(i8813[27], i8813[28], 0, i8812, 'skybox')
  i8812.fogMode = i8813[29]
  var i8815 = i8813[30]
  var i8814 = []
  for(var i = 0; i < i8815.length; i += 1) {
    i8814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i8815[i + 0]) );
  }
  i8812.lightmaps = i8814
  i8812.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i8813[31], i8812.lightProbes)
  i8812.lightmapsMode = i8813[32]
  i8812.mixedBakeMode = i8813[33]
  i8812.environmentLightingMode = i8813[34]
  i8812.ambientProbe = new pc.SphericalHarmonicsL2(i8813[35])
  request.r(i8813[36], i8813[37], 0, i8812, 'customReflection')
  request.r(i8813[38], i8813[39], 0, i8812, 'defaultReflection')
  i8812.defaultReflectionMode = i8813[40]
  i8812.defaultReflectionResolution = i8813[41]
  i8812.sunLightObjectId = i8813[42]
  i8812.pixelLightCount = i8813[43]
  i8812.defaultReflectionHDR = !!i8813[44]
  i8812.hasLightDataAsset = !!i8813[45]
  i8812.hasManualGenerate = !!i8813[46]
  return i8812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i8818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i8819 = data
  request.r(i8819[0], i8819[1], 0, i8818, 'lightmapColor')
  request.r(i8819[2], i8819[3], 0, i8818, 'lightmapDirection')
  request.r(i8819[4], i8819[5], 0, i8818, 'shadowMask')
  return i8818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i8820 = root || new UnityEngine.LightProbes()
  var i8821 = data
  return i8820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i8828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i8829 = data
  i8828.name = i8829[0]
  i8828.bounciness = i8829[1]
  i8828.friction = i8829[2]
  return i8828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i8830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i8831 = data
  var i8833 = i8831[0]
  var i8832 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i8833.length; i += 1) {
    i8832.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i8833[i + 0]));
  }
  i8830.ShaderCompilationErrors = i8832
  i8830.name = i8831[1]
  i8830.guid = i8831[2]
  var i8835 = i8831[3]
  var i8834 = []
  for(var i = 0; i < i8835.length; i += 1) {
    i8834.push( i8835[i + 0] );
  }
  i8830.shaderDefinedKeywords = i8834
  var i8837 = i8831[4]
  var i8836 = []
  for(var i = 0; i < i8837.length; i += 1) {
    i8836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i8837[i + 0]) );
  }
  i8830.passes = i8836
  var i8839 = i8831[5]
  var i8838 = []
  for(var i = 0; i < i8839.length; i += 1) {
    i8838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i8839[i + 0]) );
  }
  i8830.usePasses = i8838
  var i8841 = i8831[6]
  var i8840 = []
  for(var i = 0; i < i8841.length; i += 1) {
    i8840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i8841[i + 0]) );
  }
  i8830.defaultParameterValues = i8840
  request.r(i8831[7], i8831[8], 0, i8830, 'unityFallbackShader')
  i8830.readDepth = !!i8831[9]
  i8830.hasDepthOnlyPass = !!i8831[10]
  i8830.isCreatedByShaderGraph = !!i8831[11]
  i8830.disableBatching = !!i8831[12]
  i8830.compiled = !!i8831[13]
  return i8830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i8844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i8845 = data
  i8844.shaderName = i8845[0]
  i8844.errorMessage = i8845[1]
  return i8844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i8848 = root || new pc.UnityShaderPass()
  var i8849 = data
  i8848.id = i8849[0]
  i8848.subShaderIndex = i8849[1]
  i8848.name = i8849[2]
  i8848.passType = i8849[3]
  i8848.grabPassTextureName = i8849[4]
  i8848.usePass = !!i8849[5]
  i8848.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8849[6], i8848.zTest)
  i8848.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8849[7], i8848.zWrite)
  i8848.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8849[8], i8848.culling)
  i8848.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8849[9], i8848.blending)
  i8848.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8849[10], i8848.alphaBlending)
  i8848.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8849[11], i8848.colorWriteMask)
  i8848.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8849[12], i8848.offsetUnits)
  i8848.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8849[13], i8848.offsetFactor)
  i8848.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8849[14], i8848.stencilRef)
  i8848.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8849[15], i8848.stencilReadMask)
  i8848.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8849[16], i8848.stencilWriteMask)
  i8848.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8849[17], i8848.stencilOp)
  i8848.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8849[18], i8848.stencilOpFront)
  i8848.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8849[19], i8848.stencilOpBack)
  var i8851 = i8849[20]
  var i8850 = []
  for(var i = 0; i < i8851.length; i += 1) {
    i8850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i8851[i + 0]) );
  }
  i8848.tags = i8850
  var i8853 = i8849[21]
  var i8852 = []
  for(var i = 0; i < i8853.length; i += 1) {
    i8852.push( i8853[i + 0] );
  }
  i8848.passDefinedKeywords = i8852
  var i8855 = i8849[22]
  var i8854 = []
  for(var i = 0; i < i8855.length; i += 1) {
    i8854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i8855[i + 0]) );
  }
  i8848.passDefinedKeywordGroups = i8854
  var i8857 = i8849[23]
  var i8856 = []
  for(var i = 0; i < i8857.length; i += 1) {
    i8856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8857[i + 0]) );
  }
  i8848.variants = i8856
  var i8859 = i8849[24]
  var i8858 = []
  for(var i = 0; i < i8859.length; i += 1) {
    i8858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8859[i + 0]) );
  }
  i8848.excludedVariants = i8858
  i8848.hasDepthReader = !!i8849[25]
  return i8848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i8860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i8861 = data
  i8860.val = i8861[0]
  i8860.name = i8861[1]
  return i8860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i8862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i8863 = data
  i8862.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8863[0], i8862.src)
  i8862.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8863[1], i8862.dst)
  i8862.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8863[2], i8862.op)
  return i8862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i8864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i8865 = data
  i8864.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8865[0], i8864.pass)
  i8864.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8865[1], i8864.fail)
  i8864.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8865[2], i8864.zFail)
  i8864.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8865[3], i8864.comp)
  return i8864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i8868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i8869 = data
  i8868.name = i8869[0]
  i8868.value = i8869[1]
  return i8868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i8872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i8873 = data
  var i8875 = i8873[0]
  var i8874 = []
  for(var i = 0; i < i8875.length; i += 1) {
    i8874.push( i8875[i + 0] );
  }
  i8872.keywords = i8874
  i8872.hasDiscard = !!i8873[1]
  return i8872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i8878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i8879 = data
  i8878.passId = i8879[0]
  i8878.subShaderIndex = i8879[1]
  var i8881 = i8879[2]
  var i8880 = []
  for(var i = 0; i < i8881.length; i += 1) {
    i8880.push( i8881[i + 0] );
  }
  i8878.keywords = i8880
  i8878.vertexProgram = i8879[3]
  i8878.fragmentProgram = i8879[4]
  i8878.exportedForWebGl2 = !!i8879[5]
  i8878.readDepth = !!i8879[6]
  return i8878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i8884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i8885 = data
  request.r(i8885[0], i8885[1], 0, i8884, 'shader')
  i8884.pass = i8885[2]
  return i8884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i8888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i8889 = data
  i8888.name = i8889[0]
  i8888.type = i8889[1]
  i8888.value = new pc.Vec4( i8889[2], i8889[3], i8889[4], i8889[5] )
  i8888.textureValue = i8889[6]
  i8888.shaderPropertyFlag = i8889[7]
  return i8888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i8890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i8891 = data
  i8890.name = i8891[0]
  request.r(i8891[1], i8891[2], 0, i8890, 'texture')
  i8890.aabb = i8891[3]
  i8890.vertices = i8891[4]
  i8890.triangles = i8891[5]
  i8890.textureRect = UnityEngine.Rect.MinMaxRect(i8891[6], i8891[7], i8891[8], i8891[9])
  i8890.packedRect = UnityEngine.Rect.MinMaxRect(i8891[10], i8891[11], i8891[12], i8891[13])
  i8890.border = new pc.Vec4( i8891[14], i8891[15], i8891[16], i8891[17] )
  i8890.transparency = i8891[18]
  i8890.bounds = i8891[19]
  i8890.pixelsPerUnit = i8891[20]
  i8890.textureWidth = i8891[21]
  i8890.textureHeight = i8891[22]
  i8890.nativeSize = new pc.Vec2( i8891[23], i8891[24] )
  i8890.pivot = new pc.Vec2( i8891[25], i8891[26] )
  i8890.textureRectOffset = new pc.Vec2( i8891[27], i8891[28] )
  return i8890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i8892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i8893 = data
  i8892.name = i8893[0]
  return i8892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i8894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i8895 = data
  i8894.name = i8895[0]
  i8894.wrapMode = i8895[1]
  i8894.isLooping = !!i8895[2]
  i8894.length = i8895[3]
  var i8897 = i8895[4]
  var i8896 = []
  for(var i = 0; i < i8897.length; i += 1) {
    i8896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i8897[i + 0]) );
  }
  i8894.curves = i8896
  var i8899 = i8895[5]
  var i8898 = []
  for(var i = 0; i < i8899.length; i += 1) {
    i8898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i8899[i + 0]) );
  }
  i8894.events = i8898
  i8894.halfPrecision = !!i8895[6]
  i8894._frameRate = i8895[7]
  i8894.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i8895[8], i8894.localBounds)
  i8894.hasMuscleCurves = !!i8895[9]
  var i8901 = i8895[10]
  var i8900 = []
  for(var i = 0; i < i8901.length; i += 1) {
    i8900.push( i8901[i + 0] );
  }
  i8894.clipMuscleConstant = i8900
  i8894.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i8895[11], i8894.clipBindingConstant)
  return i8894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i8904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i8905 = data
  i8904.path = i8905[0]
  i8904.hash = i8905[1]
  i8904.componentType = i8905[2]
  i8904.property = i8905[3]
  i8904.keys = i8905[4]
  var i8907 = i8905[5]
  var i8906 = []
  for(var i = 0; i < i8907.length; i += 1) {
    i8906.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i8907[i + 0]) );
  }
  i8904.objectReferenceKeys = i8906
  return i8904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i8910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i8911 = data
  i8910.time = i8911[0]
  request.r(i8911[1], i8911[2], 0, i8910, 'value')
  return i8910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i8914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i8915 = data
  i8914.functionName = i8915[0]
  i8914.floatParameter = i8915[1]
  i8914.intParameter = i8915[2]
  i8914.stringParameter = i8915[3]
  request.r(i8915[4], i8915[5], 0, i8914, 'objectReferenceParameter')
  i8914.time = i8915[6]
  return i8914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i8916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i8917 = data
  i8916.center = new pc.Vec3( i8917[0], i8917[1], i8917[2] )
  i8916.extends = new pc.Vec3( i8917[3], i8917[4], i8917[5] )
  return i8916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i8920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i8921 = data
  var i8923 = i8921[0]
  var i8922 = []
  for(var i = 0; i < i8923.length; i += 1) {
    i8922.push( i8923[i + 0] );
  }
  i8920.genericBindings = i8922
  var i8925 = i8921[1]
  var i8924 = []
  for(var i = 0; i < i8925.length; i += 1) {
    i8924.push( i8925[i + 0] );
  }
  i8920.pptrCurveMapping = i8924
  return i8920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i8926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i8927 = data
  i8926.name = i8927[0]
  i8926.ascent = i8927[1]
  i8926.originalLineHeight = i8927[2]
  i8926.fontSize = i8927[3]
  var i8929 = i8927[4]
  var i8928 = []
  for(var i = 0; i < i8929.length; i += 1) {
    i8928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i8929[i + 0]) );
  }
  i8926.characterInfo = i8928
  request.r(i8927[5], i8927[6], 0, i8926, 'texture')
  i8926.originalFontSize = i8927[7]
  return i8926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i8932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i8933 = data
  i8932.index = i8933[0]
  i8932.advance = i8933[1]
  i8932.bearing = i8933[2]
  i8932.glyphWidth = i8933[3]
  i8932.glyphHeight = i8933[4]
  i8932.minX = i8933[5]
  i8932.maxX = i8933[6]
  i8932.minY = i8933[7]
  i8932.maxY = i8933[8]
  i8932.uvBottomLeftX = i8933[9]
  i8932.uvBottomLeftY = i8933[10]
  i8932.uvBottomRightX = i8933[11]
  i8932.uvBottomRightY = i8933[12]
  i8932.uvTopLeftX = i8933[13]
  i8932.uvTopLeftY = i8933[14]
  i8932.uvTopRightX = i8933[15]
  i8932.uvTopRightY = i8933[16]
  return i8932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i8934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i8935 = data
  i8934.name = i8935[0]
  var i8937 = i8935[1]
  var i8936 = []
  for(var i = 0; i < i8937.length; i += 1) {
    i8936.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i8937[i + 0]) );
  }
  i8934.layers = i8936
  var i8939 = i8935[2]
  var i8938 = []
  for(var i = 0; i < i8939.length; i += 1) {
    i8938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i8939[i + 0]) );
  }
  i8934.parameters = i8938
  i8934.animationClips = i8935[3]
  i8934.avatarUnsupported = i8935[4]
  return i8934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i8942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i8943 = data
  i8942.name = i8943[0]
  i8942.defaultWeight = i8943[1]
  i8942.blendingMode = i8943[2]
  i8942.avatarMask = i8943[3]
  i8942.syncedLayerIndex = i8943[4]
  i8942.syncedLayerAffectsTiming = !!i8943[5]
  i8942.syncedLayers = i8943[6]
  i8942.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8943[7], i8942.stateMachine)
  return i8942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i8944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i8945 = data
  i8944.id = i8945[0]
  i8944.name = i8945[1]
  i8944.path = i8945[2]
  var i8947 = i8945[3]
  var i8946 = []
  for(var i = 0; i < i8947.length; i += 1) {
    i8946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i8947[i + 0]) );
  }
  i8944.states = i8946
  var i8949 = i8945[4]
  var i8948 = []
  for(var i = 0; i < i8949.length; i += 1) {
    i8948.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8949[i + 0]) );
  }
  i8944.machines = i8948
  var i8951 = i8945[5]
  var i8950 = []
  for(var i = 0; i < i8951.length; i += 1) {
    i8950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8951[i + 0]) );
  }
  i8944.entryStateTransitions = i8950
  var i8953 = i8945[6]
  var i8952 = []
  for(var i = 0; i < i8953.length; i += 1) {
    i8952.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8953[i + 0]) );
  }
  i8944.exitStateTransitions = i8952
  var i8955 = i8945[7]
  var i8954 = []
  for(var i = 0; i < i8955.length; i += 1) {
    i8954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8955[i + 0]) );
  }
  i8944.anyStateTransitions = i8954
  i8944.defaultStateId = i8945[8]
  return i8944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i8958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i8959 = data
  i8958.id = i8959[0]
  i8958.name = i8959[1]
  i8958.cycleOffset = i8959[2]
  i8958.cycleOffsetParameter = i8959[3]
  i8958.cycleOffsetParameterActive = !!i8959[4]
  i8958.mirror = !!i8959[5]
  i8958.mirrorParameter = i8959[6]
  i8958.mirrorParameterActive = !!i8959[7]
  i8958.motionId = i8959[8]
  i8958.nameHash = i8959[9]
  i8958.fullPathHash = i8959[10]
  i8958.speed = i8959[11]
  i8958.speedParameter = i8959[12]
  i8958.speedParameterActive = !!i8959[13]
  i8958.tag = i8959[14]
  i8958.tagHash = i8959[15]
  i8958.writeDefaultValues = !!i8959[16]
  var i8961 = i8959[17]
  var i8960 = []
  for(var i = 0; i < i8961.length; i += 2) {
  request.r(i8961[i + 0], i8961[i + 1], 2, i8960, '')
  }
  i8958.behaviours = i8960
  var i8963 = i8959[18]
  var i8962 = []
  for(var i = 0; i < i8963.length; i += 1) {
    i8962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8963[i + 0]) );
  }
  i8958.transitions = i8962
  return i8958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i8968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i8969 = data
  i8968.fullPath = i8969[0]
  i8968.canTransitionToSelf = !!i8969[1]
  i8968.duration = i8969[2]
  i8968.exitTime = i8969[3]
  i8968.hasExitTime = !!i8969[4]
  i8968.hasFixedDuration = !!i8969[5]
  i8968.interruptionSource = i8969[6]
  i8968.offset = i8969[7]
  i8968.orderedInterruption = !!i8969[8]
  i8968.destinationStateId = i8969[9]
  i8968.isExit = !!i8969[10]
  i8968.mute = !!i8969[11]
  i8968.solo = !!i8969[12]
  var i8971 = i8969[13]
  var i8970 = []
  for(var i = 0; i < i8971.length; i += 1) {
    i8970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8971[i + 0]) );
  }
  i8968.conditions = i8970
  return i8968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i8974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i8975 = data
  i8974.mode = i8975[0]
  i8974.parameter = i8975[1]
  i8974.threshold = i8975[2]
  return i8974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i8980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i8981 = data
  i8980.destinationStateId = i8981[0]
  i8980.isExit = !!i8981[1]
  i8980.mute = !!i8981[2]
  i8980.solo = !!i8981[3]
  var i8983 = i8981[4]
  var i8982 = []
  for(var i = 0; i < i8983.length; i += 1) {
    i8982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8983[i + 0]) );
  }
  i8980.conditions = i8982
  return i8980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i8986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i8987 = data
  i8986.defaultBool = !!i8987[0]
  i8986.defaultFloat = i8987[1]
  i8986.defaultInt = i8987[2]
  i8986.name = i8987[3]
  i8986.nameHash = i8987[4]
  i8986.type = i8987[5]
  return i8986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i8988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i8989 = data
  i8988.name = i8989[0]
  i8988.bytes64 = i8989[1]
  i8988.data = i8989[2]
  return i8988
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i8990 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i8991 = data
  request.r(i8991[0], i8991[1], 0, i8990, 'atlas')
  i8990.normalStyle = i8991[2]
  i8990.normalSpacingOffset = i8991[3]
  i8990.boldStyle = i8991[4]
  i8990.boldSpacing = i8991[5]
  i8990.italicStyle = i8991[6]
  i8990.tabSize = i8991[7]
  i8990.hashCode = i8991[8]
  request.r(i8991[9], i8991[10], 0, i8990, 'material')
  i8990.materialHashCode = i8991[11]
  i8990.m_Version = i8991[12]
  i8990.m_SourceFontFileGUID = i8991[13]
  request.r(i8991[14], i8991[15], 0, i8990, 'm_SourceFontFile_EditorRef')
  request.r(i8991[16], i8991[17], 0, i8990, 'm_SourceFontFile')
  i8990.m_AtlasPopulationMode = i8991[18]
  i8990.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i8991[19], i8990.m_FaceInfo)
  var i8993 = i8991[20]
  var i8992 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i8993.length; i += 1) {
    i8992.add(request.d('UnityEngine.TextCore.Glyph', i8993[i + 0]));
  }
  i8990.m_GlyphTable = i8992
  var i8995 = i8991[21]
  var i8994 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i8995.length; i += 1) {
    i8994.add(request.d('TMPro.TMP_Character', i8995[i + 0]));
  }
  i8990.m_CharacterTable = i8994
  var i8997 = i8991[22]
  var i8996 = []
  for(var i = 0; i < i8997.length; i += 2) {
  request.r(i8997[i + 0], i8997[i + 1], 2, i8996, '')
  }
  i8990.m_AtlasTextures = i8996
  i8990.m_AtlasTextureIndex = i8991[23]
  i8990.m_IsMultiAtlasTexturesEnabled = !!i8991[24]
  i8990.m_ClearDynamicDataOnBuild = !!i8991[25]
  var i8999 = i8991[26]
  var i8998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i8999.length; i += 1) {
    i8998.add(request.d('UnityEngine.TextCore.GlyphRect', i8999[i + 0]));
  }
  i8990.m_UsedGlyphRects = i8998
  var i9001 = i8991[27]
  var i9000 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i9001.length; i += 1) {
    i9000.add(request.d('UnityEngine.TextCore.GlyphRect', i9001[i + 0]));
  }
  i8990.m_FreeGlyphRects = i9000
  i8990.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i8991[28], i8990.m_fontInfo)
  i8990.m_AtlasWidth = i8991[29]
  i8990.m_AtlasHeight = i8991[30]
  i8990.m_AtlasPadding = i8991[31]
  i8990.m_AtlasRenderMode = i8991[32]
  var i9003 = i8991[33]
  var i9002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i9003.length; i += 1) {
    i9002.add(request.d('TMPro.TMP_Glyph', i9003[i + 0]));
  }
  i8990.m_glyphInfoList = i9002
  i8990.m_KerningTable = request.d('TMPro.KerningTable', i8991[34], i8990.m_KerningTable)
  i8990.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i8991[35], i8990.m_FontFeatureTable)
  var i9005 = i8991[36]
  var i9004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i9005.length; i += 2) {
  request.r(i9005[i + 0], i9005[i + 1], 1, i9004, '')
  }
  i8990.fallbackFontAssets = i9004
  var i9007 = i8991[37]
  var i9006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i9007.length; i += 2) {
  request.r(i9007[i + 0], i9007[i + 1], 1, i9006, '')
  }
  i8990.m_FallbackFontAssetTable = i9006
  i8990.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i8991[38], i8990.m_CreationSettings)
  var i9009 = i8991[39]
  var i9008 = []
  for(var i = 0; i < i9009.length; i += 1) {
    i9008.push( request.d('TMPro.TMP_FontWeightPair', i9009[i + 0]) );
  }
  i8990.m_FontWeightTable = i9008
  var i9011 = i8991[40]
  var i9010 = []
  for(var i = 0; i < i9011.length; i += 1) {
    i9010.push( request.d('TMPro.TMP_FontWeightPair', i9011[i + 0]) );
  }
  i8990.fontWeights = i9010
  return i8990
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i9012 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i9013 = data
  i9012.m_FaceIndex = i9013[0]
  i9012.m_FamilyName = i9013[1]
  i9012.m_StyleName = i9013[2]
  i9012.m_PointSize = i9013[3]
  i9012.m_Scale = i9013[4]
  i9012.m_UnitsPerEM = i9013[5]
  i9012.m_LineHeight = i9013[6]
  i9012.m_AscentLine = i9013[7]
  i9012.m_CapLine = i9013[8]
  i9012.m_MeanLine = i9013[9]
  i9012.m_Baseline = i9013[10]
  i9012.m_DescentLine = i9013[11]
  i9012.m_SuperscriptOffset = i9013[12]
  i9012.m_SuperscriptSize = i9013[13]
  i9012.m_SubscriptOffset = i9013[14]
  i9012.m_SubscriptSize = i9013[15]
  i9012.m_UnderlineOffset = i9013[16]
  i9012.m_UnderlineThickness = i9013[17]
  i9012.m_StrikethroughOffset = i9013[18]
  i9012.m_StrikethroughThickness = i9013[19]
  i9012.m_TabWidth = i9013[20]
  return i9012
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i9016 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i9017 = data
  i9016.m_Index = i9017[0]
  i9016.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i9017[1], i9016.m_Metrics)
  i9016.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i9017[2], i9016.m_GlyphRect)
  i9016.m_Scale = i9017[3]
  i9016.m_AtlasIndex = i9017[4]
  i9016.m_ClassDefinitionType = i9017[5]
  return i9016
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i9018 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i9019 = data
  i9018.m_Width = i9019[0]
  i9018.m_Height = i9019[1]
  i9018.m_HorizontalBearingX = i9019[2]
  i9018.m_HorizontalBearingY = i9019[3]
  i9018.m_HorizontalAdvance = i9019[4]
  return i9018
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i9020 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i9021 = data
  i9020.m_X = i9021[0]
  i9020.m_Y = i9021[1]
  i9020.m_Width = i9021[2]
  i9020.m_Height = i9021[3]
  return i9020
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i9024 = root || request.c( 'TMPro.TMP_Character' )
  var i9025 = data
  i9024.m_ElementType = i9025[0]
  i9024.m_Unicode = i9025[1]
  i9024.m_GlyphIndex = i9025[2]
  i9024.m_Scale = i9025[3]
  return i9024
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i9030 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i9031 = data
  i9030.Name = i9031[0]
  i9030.PointSize = i9031[1]
  i9030.Scale = i9031[2]
  i9030.CharacterCount = i9031[3]
  i9030.LineHeight = i9031[4]
  i9030.Baseline = i9031[5]
  i9030.Ascender = i9031[6]
  i9030.CapHeight = i9031[7]
  i9030.Descender = i9031[8]
  i9030.CenterLine = i9031[9]
  i9030.SuperscriptOffset = i9031[10]
  i9030.SubscriptOffset = i9031[11]
  i9030.SubSize = i9031[12]
  i9030.Underline = i9031[13]
  i9030.UnderlineThickness = i9031[14]
  i9030.strikethrough = i9031[15]
  i9030.strikethroughThickness = i9031[16]
  i9030.TabWidth = i9031[17]
  i9030.Padding = i9031[18]
  i9030.AtlasWidth = i9031[19]
  i9030.AtlasHeight = i9031[20]
  return i9030
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i9034 = root || request.c( 'TMPro.TMP_Glyph' )
  var i9035 = data
  i9034.id = i9035[0]
  i9034.x = i9035[1]
  i9034.y = i9035[2]
  i9034.width = i9035[3]
  i9034.height = i9035[4]
  i9034.xOffset = i9035[5]
  i9034.yOffset = i9035[6]
  i9034.xAdvance = i9035[7]
  i9034.scale = i9035[8]
  return i9034
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i9036 = root || request.c( 'TMPro.KerningTable' )
  var i9037 = data
  var i9039 = i9037[0]
  var i9038 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i9039.length; i += 1) {
    i9038.add(request.d('TMPro.KerningPair', i9039[i + 0]));
  }
  i9036.kerningPairs = i9038
  return i9036
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i9042 = root || request.c( 'TMPro.KerningPair' )
  var i9043 = data
  i9042.xOffset = i9043[0]
  i9042.m_FirstGlyph = i9043[1]
  i9042.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i9043[2], i9042.m_FirstGlyphAdjustments)
  i9042.m_SecondGlyph = i9043[3]
  i9042.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i9043[4], i9042.m_SecondGlyphAdjustments)
  i9042.m_IgnoreSpacingAdjustments = !!i9043[5]
  return i9042
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i9044 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i9045 = data
  var i9047 = i9045[0]
  var i9046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i9047.length; i += 1) {
    i9046.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i9047[i + 0]));
  }
  i9044.m_GlyphPairAdjustmentRecords = i9046
  return i9044
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i9050 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i9051 = data
  i9050.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i9051[0], i9050.m_FirstAdjustmentRecord)
  i9050.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i9051[1], i9050.m_SecondAdjustmentRecord)
  i9050.m_FeatureLookupFlags = i9051[2]
  return i9050
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i9052 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i9053 = data
  i9052.m_GlyphIndex = i9053[0]
  i9052.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i9053[1], i9052.m_GlyphValueRecord)
  return i9052
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i9054 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i9055 = data
  i9054.m_XPlacement = i9055[0]
  i9054.m_YPlacement = i9055[1]
  i9054.m_XAdvance = i9055[2]
  i9054.m_YAdvance = i9055[3]
  return i9054
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i9058 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i9059 = data
  i9058.sourceFontFileName = i9059[0]
  i9058.sourceFontFileGUID = i9059[1]
  i9058.pointSizeSamplingMode = i9059[2]
  i9058.pointSize = i9059[3]
  i9058.padding = i9059[4]
  i9058.packingMode = i9059[5]
  i9058.atlasWidth = i9059[6]
  i9058.atlasHeight = i9059[7]
  i9058.characterSetSelectionMode = i9059[8]
  i9058.characterSequence = i9059[9]
  i9058.referencedFontAssetGUID = i9059[10]
  i9058.referencedTextAssetGUID = i9059[11]
  i9058.fontStyle = i9059[12]
  i9058.fontStyleModifier = i9059[13]
  i9058.renderMode = i9059[14]
  i9058.includeFontFeatures = !!i9059[15]
  return i9058
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i9062 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i9063 = data
  request.r(i9063[0], i9063[1], 0, i9062, 'regularTypeface')
  request.r(i9063[2], i9063[3], 0, i9062, 'italicTypeface')
  return i9062
}

Deserializers["BirdDataSO"] = function (request, data, root) {
  var i9064 = root || request.c( 'BirdDataSO' )
  var i9065 = data
  var i9067 = i9065[0]
  var i9066 = []
  for(var i = 0; i < i9067.length; i += 1) {
    i9066.push( request.d('BirdData', i9067[i + 0]) );
  }
  i9064.birds = i9066
  return i9064
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i9070 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i9071 = data
  var i9073 = i9071[0]
  var i9072 = []
  for(var i = 0; i < i9073.length; i += 2) {
  request.r(i9073[i + 0], i9073[i + 1], 2, i9072, '')
  }
  i9070.atlasAssets = i9072
  i9070.scale = i9071[1]
  request.r(i9071[2], i9071[3], 0, i9070, 'skeletonJSON')
  i9070.isUpgradingBlendModeMaterials = !!i9071[4]
  i9070.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i9071[5], i9070.blendModeMaterials)
  var i9075 = i9071[6]
  var i9074 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i9075.length; i += 2) {
  request.r(i9075[i + 0], i9075[i + 1], 1, i9074, '')
  }
  i9070.skeletonDataModifiers = i9074
  var i9077 = i9071[7]
  var i9076 = []
  for(var i = 0; i < i9077.length; i += 1) {
    i9076.push( i9077[i + 0] );
  }
  i9070.fromAnimation = i9076
  var i9079 = i9071[8]
  var i9078 = []
  for(var i = 0; i < i9079.length; i += 1) {
    i9078.push( i9079[i + 0] );
  }
  i9070.toAnimation = i9078
  i9070.duration = i9071[9]
  i9070.defaultMix = i9071[10]
  request.r(i9071[11], i9071[12], 0, i9070, 'controller')
  return i9070
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i9082 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i9083 = data
  i9082.applyAdditiveMaterial = !!i9083[0]
  var i9085 = i9083[1]
  var i9084 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i9085.length; i += 1) {
    i9084.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i9085[i + 0]));
  }
  i9082.additiveMaterials = i9084
  var i9087 = i9083[2]
  var i9086 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i9087.length; i += 1) {
    i9086.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i9087[i + 0]));
  }
  i9082.multiplyMaterials = i9086
  var i9089 = i9083[3]
  var i9088 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i9089.length; i += 1) {
    i9088.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i9089[i + 0]));
  }
  i9082.screenMaterials = i9088
  i9082.requiresBlendModeMaterials = !!i9083[4]
  return i9082
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i9092 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i9093 = data
  i9092.pageName = i9093[0]
  request.r(i9093[1], i9093[2], 0, i9092, 'material')
  return i9092
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i9096 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i9097 = data
  request.r(i9097[0], i9097[1], 0, i9096, 'atlasFile')
  var i9099 = i9097[2]
  var i9098 = []
  for(var i = 0; i < i9099.length; i += 2) {
  request.r(i9099[i + 0], i9099[i + 1], 2, i9098, '')
  }
  i9096.materials = i9098
  i9096.textureLoadingMode = i9097[3]
  request.r(i9097[4], i9097[5], 0, i9096, 'onDemandTextureLoader')
  return i9096
}

Deserializers["ObstacleConfigSO"] = function (request, data, root) {
  var i9100 = root || request.c( 'ObstacleConfigSO' )
  var i9101 = data
  var i9103 = i9101[0]
  var i9102 = []
  for(var i = 0; i < i9103.length; i += 1) {
    i9102.push( request.d('ObstacleConfigSO+ObstacleEntry', i9103[i + 0]) );
  }
  i9100.obstacles = i9102
  var i9105 = i9101[1]
  var i9104 = []
  for(var i = 0; i < i9105.length; i += 1) {
    i9104.push( request.d('ObstacleData', i9105[i + 0]) );
  }
  i9100.obstacleDatas = i9104
  return i9100
}

Deserializers["ObstacleConfigSO+ObstacleEntry"] = function (request, data, root) {
  var i9108 = root || request.c( 'ObstacleConfigSO+ObstacleEntry' )
  var i9109 = data
  i9108.type = i9109[0]
  request.r(i9109[1], i9109[2], 0, i9108, 'prefab')
  return i9108
}

Deserializers["ObstacleData"] = function (request, data, root) {
  var i9112 = root || request.c( 'ObstacleData' )
  var i9113 = data
  i9112.name = i9113[0]
  i9112.description = i9113[1]
  request.r(i9113[2], i9113[3], 0, i9112, 'icon')
  request.r(i9113[4], i9113[5], 0, i9112, 'titleIcon')
  i9112.unlockLevel = i9113[6]
  return i9112
}

Deserializers["BoosterConfig"] = function (request, data, root) {
  var i9114 = root || request.c( 'BoosterConfig' )
  var i9115 = data
  var i9117 = i9115[0]
  var i9116 = new (System.Collections.Generic.List$1(Bridge.ns('BoosterInfo')))
  for(var i = 0; i < i9117.length; i += 1) {
    i9116.add(request.d('BoosterInfo', i9117[i + 0]));
  }
  i9114.boosterInfos = i9116
  return i9114
}

Deserializers["BoosterInfo"] = function (request, data, root) {
  var i9120 = root || request.c( 'BoosterInfo' )
  var i9121 = data
  i9120.type = i9121[0]
  i9120.name = i9121[1]
  i9120.description = i9121[2]
  i9120.levelUnlock = i9121[3]
  request.r(i9121[4], i9121[5], 0, i9120, 'icon')
  request.r(i9121[6], i9121[7], 0, i9120, 'titleIcon')
  i9120.amountFirst = i9121[8]
  i9120.price = i9121[9]
  i9120.amountBuy = i9121[10]
  return i9120
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i9122 = root || request.c( 'TMPro.TMP_Settings' )
  var i9123 = data
  i9122.m_enableWordWrapping = !!i9123[0]
  i9122.m_enableKerning = !!i9123[1]
  i9122.m_enableExtraPadding = !!i9123[2]
  i9122.m_enableTintAllSprites = !!i9123[3]
  i9122.m_enableParseEscapeCharacters = !!i9123[4]
  i9122.m_EnableRaycastTarget = !!i9123[5]
  i9122.m_GetFontFeaturesAtRuntime = !!i9123[6]
  i9122.m_missingGlyphCharacter = i9123[7]
  i9122.m_warningsDisabled = !!i9123[8]
  request.r(i9123[9], i9123[10], 0, i9122, 'm_defaultFontAsset')
  i9122.m_defaultFontAssetPath = i9123[11]
  i9122.m_defaultFontSize = i9123[12]
  i9122.m_defaultAutoSizeMinRatio = i9123[13]
  i9122.m_defaultAutoSizeMaxRatio = i9123[14]
  i9122.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i9123[15], i9123[16] )
  i9122.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i9123[17], i9123[18] )
  i9122.m_autoSizeTextContainer = !!i9123[19]
  i9122.m_IsTextObjectScaleStatic = !!i9123[20]
  var i9125 = i9123[21]
  var i9124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i9125.length; i += 2) {
  request.r(i9125[i + 0], i9125[i + 1], 1, i9124, '')
  }
  i9122.m_fallbackFontAssets = i9124
  i9122.m_matchMaterialPreset = !!i9123[22]
  request.r(i9123[23], i9123[24], 0, i9122, 'm_defaultSpriteAsset')
  i9122.m_defaultSpriteAssetPath = i9123[25]
  i9122.m_enableEmojiSupport = !!i9123[26]
  i9122.m_MissingCharacterSpriteUnicode = i9123[27]
  i9122.m_defaultColorGradientPresetsPath = i9123[28]
  request.r(i9123[29], i9123[30], 0, i9122, 'm_defaultStyleSheet')
  i9122.m_StyleSheetsResourcePath = i9123[31]
  request.r(i9123[32], i9123[33], 0, i9122, 'm_leadingCharacters')
  request.r(i9123[34], i9123[35], 0, i9122, 'm_followingCharacters')
  i9122.m_UseModernHangulLineBreakingRules = !!i9123[36]
  return i9122
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i9126 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i9127 = data
  request.r(i9127[0], i9127[1], 0, i9126, 'spriteSheet')
  var i9129 = i9127[2]
  var i9128 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i9129.length; i += 1) {
    i9128.add(request.d('TMPro.TMP_Sprite', i9129[i + 0]));
  }
  i9126.spriteInfoList = i9128
  var i9131 = i9127[3]
  var i9130 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i9131.length; i += 2) {
  request.r(i9131[i + 0], i9131[i + 1], 1, i9130, '')
  }
  i9126.fallbackSpriteAssets = i9130
  i9126.hashCode = i9127[4]
  request.r(i9127[5], i9127[6], 0, i9126, 'material')
  i9126.materialHashCode = i9127[7]
  i9126.m_Version = i9127[8]
  i9126.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i9127[9], i9126.m_FaceInfo)
  var i9133 = i9127[10]
  var i9132 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i9133.length; i += 1) {
    i9132.add(request.d('TMPro.TMP_SpriteCharacter', i9133[i + 0]));
  }
  i9126.m_SpriteCharacterTable = i9132
  var i9135 = i9127[11]
  var i9134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i9135.length; i += 1) {
    i9134.add(request.d('TMPro.TMP_SpriteGlyph', i9135[i + 0]));
  }
  i9126.m_SpriteGlyphTable = i9134
  return i9126
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i9138 = root || request.c( 'TMPro.TMP_Sprite' )
  var i9139 = data
  i9138.name = i9139[0]
  i9138.hashCode = i9139[1]
  i9138.unicode = i9139[2]
  i9138.pivot = new pc.Vec2( i9139[3], i9139[4] )
  request.r(i9139[5], i9139[6], 0, i9138, 'sprite')
  i9138.id = i9139[7]
  i9138.x = i9139[8]
  i9138.y = i9139[9]
  i9138.width = i9139[10]
  i9138.height = i9139[11]
  i9138.xOffset = i9139[12]
  i9138.yOffset = i9139[13]
  i9138.xAdvance = i9139[14]
  i9138.scale = i9139[15]
  return i9138
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i9144 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i9145 = data
  i9144.m_Name = i9145[0]
  i9144.m_HashCode = i9145[1]
  i9144.m_ElementType = i9145[2]
  i9144.m_Unicode = i9145[3]
  i9144.m_GlyphIndex = i9145[4]
  i9144.m_Scale = i9145[5]
  return i9144
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i9148 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i9149 = data
  request.r(i9149[0], i9149[1], 0, i9148, 'sprite')
  i9148.m_Index = i9149[2]
  i9148.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i9149[3], i9148.m_Metrics)
  i9148.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i9149[4], i9148.m_GlyphRect)
  i9148.m_Scale = i9149[5]
  i9148.m_AtlasIndex = i9149[6]
  i9148.m_ClassDefinitionType = i9149[7]
  return i9148
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i9150 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i9151 = data
  var i9153 = i9151[0]
  var i9152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i9153.length; i += 1) {
    i9152.add(request.d('TMPro.TMP_Style', i9153[i + 0]));
  }
  i9150.m_StyleList = i9152
  return i9150
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i9156 = root || request.c( 'TMPro.TMP_Style' )
  var i9157 = data
  i9156.m_Name = i9157[0]
  i9156.m_HashCode = i9157[1]
  i9156.m_OpeningDefinition = i9157[2]
  i9156.m_ClosingDefinition = i9157[3]
  i9156.m_OpeningTagArray = i9157[4]
  i9156.m_ClosingTagArray = i9157[5]
  i9156.m_OpeningTagUnicodeArray = i9157[6]
  i9156.m_ClosingTagUnicodeArray = i9157[7]
  return i9156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i9158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i9159 = data
  var i9161 = i9159[0]
  var i9160 = []
  for(var i = 0; i < i9161.length; i += 1) {
    i9160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i9161[i + 0]) );
  }
  i9158.files = i9160
  i9158.componentToPrefabIds = i9159[1]
  return i9158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i9164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i9165 = data
  i9164.path = i9165[0]
  request.r(i9165[1], i9165[2], 0, i9164, 'unityObject')
  return i9164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i9166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i9167 = data
  var i9169 = i9167[0]
  var i9168 = []
  for(var i = 0; i < i9169.length; i += 1) {
    i9168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i9169[i + 0]) );
  }
  i9166.scriptsExecutionOrder = i9168
  var i9171 = i9167[1]
  var i9170 = []
  for(var i = 0; i < i9171.length; i += 1) {
    i9170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i9171[i + 0]) );
  }
  i9166.sortingLayers = i9170
  var i9173 = i9167[2]
  var i9172 = []
  for(var i = 0; i < i9173.length; i += 1) {
    i9172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i9173[i + 0]) );
  }
  i9166.cullingLayers = i9172
  i9166.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i9167[3], i9166.timeSettings)
  i9166.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i9167[4], i9166.physicsSettings)
  i9166.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i9167[5], i9166.physics2DSettings)
  i9166.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i9167[6], i9166.qualitySettings)
  i9166.enableRealtimeShadows = !!i9167[7]
  i9166.enableAutoInstancing = !!i9167[8]
  i9166.enableStaticBatching = !!i9167[9]
  i9166.enableDynamicBatching = !!i9167[10]
  i9166.usePreservativeDynamicBatching = !!i9167[11]
  i9166.lightmapEncodingQuality = i9167[12]
  i9166.desiredColorSpace = i9167[13]
  var i9175 = i9167[14]
  var i9174 = []
  for(var i = 0; i < i9175.length; i += 1) {
    i9174.push( i9175[i + 0] );
  }
  i9166.allTags = i9174
  return i9166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i9178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i9179 = data
  i9178.name = i9179[0]
  i9178.value = i9179[1]
  return i9178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i9182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i9183 = data
  i9182.id = i9183[0]
  i9182.name = i9183[1]
  i9182.value = i9183[2]
  return i9182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i9186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i9187 = data
  i9186.id = i9187[0]
  i9186.name = i9187[1]
  return i9186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i9188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i9189 = data
  i9188.fixedDeltaTime = i9189[0]
  i9188.maximumDeltaTime = i9189[1]
  i9188.timeScale = i9189[2]
  i9188.maximumParticleTimestep = i9189[3]
  return i9188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i9190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i9191 = data
  i9190.gravity = new pc.Vec3( i9191[0], i9191[1], i9191[2] )
  i9190.defaultSolverIterations = i9191[3]
  i9190.bounceThreshold = i9191[4]
  i9190.autoSyncTransforms = !!i9191[5]
  i9190.autoSimulation = !!i9191[6]
  var i9193 = i9191[7]
  var i9192 = []
  for(var i = 0; i < i9193.length; i += 1) {
    i9192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i9193[i + 0]) );
  }
  i9190.collisionMatrix = i9192
  return i9190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i9196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i9197 = data
  i9196.enabled = !!i9197[0]
  i9196.layerId = i9197[1]
  i9196.otherLayerId = i9197[2]
  return i9196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i9198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i9199 = data
  request.r(i9199[0], i9199[1], 0, i9198, 'material')
  i9198.gravity = new pc.Vec2( i9199[2], i9199[3] )
  i9198.positionIterations = i9199[4]
  i9198.velocityIterations = i9199[5]
  i9198.velocityThreshold = i9199[6]
  i9198.maxLinearCorrection = i9199[7]
  i9198.maxAngularCorrection = i9199[8]
  i9198.maxTranslationSpeed = i9199[9]
  i9198.maxRotationSpeed = i9199[10]
  i9198.baumgarteScale = i9199[11]
  i9198.baumgarteTOIScale = i9199[12]
  i9198.timeToSleep = i9199[13]
  i9198.linearSleepTolerance = i9199[14]
  i9198.angularSleepTolerance = i9199[15]
  i9198.defaultContactOffset = i9199[16]
  i9198.autoSimulation = !!i9199[17]
  i9198.queriesHitTriggers = !!i9199[18]
  i9198.queriesStartInColliders = !!i9199[19]
  i9198.callbacksOnDisable = !!i9199[20]
  i9198.reuseCollisionCallbacks = !!i9199[21]
  i9198.autoSyncTransforms = !!i9199[22]
  var i9201 = i9199[23]
  var i9200 = []
  for(var i = 0; i < i9201.length; i += 1) {
    i9200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i9201[i + 0]) );
  }
  i9198.collisionMatrix = i9200
  return i9198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i9204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i9205 = data
  i9204.enabled = !!i9205[0]
  i9204.layerId = i9205[1]
  i9204.otherLayerId = i9205[2]
  return i9204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i9206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i9207 = data
  var i9209 = i9207[0]
  var i9208 = []
  for(var i = 0; i < i9209.length; i += 1) {
    i9208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i9209[i + 0]) );
  }
  i9206.qualityLevels = i9208
  var i9211 = i9207[1]
  var i9210 = []
  for(var i = 0; i < i9211.length; i += 1) {
    i9210.push( i9211[i + 0] );
  }
  i9206.names = i9210
  i9206.shadows = i9207[2]
  i9206.anisotropicFiltering = i9207[3]
  i9206.antiAliasing = i9207[4]
  i9206.lodBias = i9207[5]
  i9206.shadowCascades = i9207[6]
  i9206.shadowDistance = i9207[7]
  i9206.shadowmaskMode = i9207[8]
  i9206.shadowProjection = i9207[9]
  i9206.shadowResolution = i9207[10]
  i9206.softParticles = !!i9207[11]
  i9206.softVegetation = !!i9207[12]
  i9206.activeColorSpace = i9207[13]
  i9206.desiredColorSpace = i9207[14]
  i9206.masterTextureLimit = i9207[15]
  i9206.maxQueuedFrames = i9207[16]
  i9206.particleRaycastBudget = i9207[17]
  i9206.pixelLightCount = i9207[18]
  i9206.realtimeReflectionProbes = !!i9207[19]
  i9206.shadowCascade2Split = i9207[20]
  i9206.shadowCascade4Split = new pc.Vec3( i9207[21], i9207[22], i9207[23] )
  i9206.streamingMipmapsActive = !!i9207[24]
  i9206.vSyncCount = i9207[25]
  i9206.asyncUploadBufferSize = i9207[26]
  i9206.asyncUploadTimeSlice = i9207[27]
  i9206.billboardsFaceCameraPosition = !!i9207[28]
  i9206.shadowNearPlaneOffset = i9207[29]
  i9206.streamingMipmapsMemoryBudget = i9207[30]
  i9206.maximumLODLevel = i9207[31]
  i9206.streamingMipmapsAddAllCameras = !!i9207[32]
  i9206.streamingMipmapsMaxLevelReduction = i9207[33]
  i9206.streamingMipmapsRenderersPerFrame = i9207[34]
  i9206.resolutionScalingFixedDPIFactor = i9207[35]
  i9206.streamingMipmapsMaxFileIORequests = i9207[36]
  i9206.currentQualityLevel = i9207[37]
  return i9206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i9216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i9217 = data
  i9216.weight = i9217[0]
  i9216.vertices = i9217[1]
  i9216.normals = i9217[2]
  i9216.tangents = i9217[3]
  return i9216
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i9218 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i9219 = data
  i9218.xPlacement = i9219[0]
  i9218.yPlacement = i9219[1]
  i9218.xAdvance = i9219[2]
  i9218.yAdvance = i9219[3]
  return i9218
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"108":[109],"110":[109],"111":[109],"112":[109],"113":[109],"114":[109],"115":[116],"117":[48],"118":[119],"120":[119],"121":[119],"122":[119],"123":[119],"124":[119],"125":[119],"126":[13],"127":[13],"128":[13],"129":[13],"130":[13],"131":[13],"132":[13],"133":[13],"134":[13],"135":[13],"136":[13],"137":[13],"138":[13],"139":[48],"140":[19],"141":[142],"143":[142],"63":[2],"90":[2],"91":[2],"66":[18],"61":[18],"58":[55],"144":[2],"145":[146],"147":[148],"149":[150],"151":[18],"152":[2],"148":[2],"84":[63],"6":[3,2],"153":[2],"83":[63],"65":[2],"64":[2],"95":[2],"154":[2],"155":[2],"156":[2],"157":[2],"97":[2],"158":[2],"159":[3,2],"160":[2],"161":[2],"162":[2],"163":[2],"101":[3,2],"164":[2],"165":[72],"166":[72],"73":[72],"167":[72],"168":[48],"169":[48],"170":[146],"171":[72],"172":[63],"173":[48],"174":[24],"175":[176],"177":[2],"178":[3,2],"40":[19],"99":[3,2],"179":[92,19],"180":[19],"181":[19,43],"182":[119],"183":[13],"184":[176],"185":[186],"98":[2,3],"187":[2],"20":[19,2],"7":[2,3],"188":[2],"189":[3,2],"190":[19],"191":[3,2],"192":[2],"193":[146],"194":[119],"195":[13]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","OutsideBird","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Rigidbody2D","UnityEngine.CircleCollider2D","UnityEngine.PhysicsMaterial2D","BubbleParts","BubbleOneSlot","UnityEngine.SpriteRenderer","UnityEngine.MeshRenderer","TMPro.TextMeshPro","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Light","BubbleTwoSlot","BubbleThreeSlot","BubbleFourSlot","BubbleFiveSlot","FrozenNestObstacle","LockedNestObstacle","KeyNestObstacle","HiddenNestObstacle","StoneNestObstacle","BigNestObstacle","HiddenBirdObstacle","BindBirdObstacle","IceBirdObstacle","TargetNestObstacle","Bird","Spine.Unity.SkeletonAnimation","UnityEngine.BoxCollider2D","BirdParts","UnityEngine.MeshFilter","Spine.Unity.SkeletonDataAsset","MagnetNestFx","ShuffleFX","ParticlesBase","UnityEngine.Camera","UnityEngine.AudioListener","BoardManager","TopContainer","DockContainer","SlotContainer","OutsideBirdHolder","BirdDock","TimeNestController","UnityEngine.GameObject","DockCountdown","UnityEngine.SpriteMask","BirdSlot","BranchWave","UnityEngine.Rendering.SortingGroup","UnityEngine.Canvas","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.ContentSizeFitter","SpriteFitScreenHeight","LevelManager","BirdDataSO","ObstacleConfigSO","UnityEngine.TextAsset","ControllerManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BoosterManager","BoosterConfig","GameManager","SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","ParticlesManager","GameData","ComboManager","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasGroup","GameplayUI","ButtonScaleUI","UnityEngine.UI.Button","BoosterItemUI","ColorBirdLogoAnimator","SlingshotAnimator","UnityEngine.Animator","LoseUI","Crystal.SafeArea","UnityEngine.UI.HorizontalLayoutGroup","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Mask","Coffee.UIExtensions.UIParticle","Spine.Unity.SkeletonGraphic","UnityEngine.EventSystems.EventTrigger","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Cubemap","Spine.Unity.SpineAtlasAsset","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UIImageFitScreenHeight","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Lean.Common.LeanSelectableGraphicColor","UnityEngine.UI.Graphic","Lean.Common.LeanSelectableRendererColor","UnityEngine.Renderer","Lean.Common.LeanSelectableSpriteRendererColor","UnityEngine.UI.Dropdown","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","CW.Common.CwDepthTextureMode","CW.Common.CwLightIntensity","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine","Lean.Pool.LeanPooledRigidbody","Lean.Pool.LeanPooledRigidbody2D"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "10/23/2026 07:57:06";

Deserializers.lunaDaysRunning = "3.8";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1797";

Deserializers.runtimeAnalysisExcludedMethodsCount = "6252";

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

Deserializers.buildID = "9e7d6b79-9e47-42e8-82b9-e8549d2ea48f";

Deserializers.runtimeInitializeOnLoadInfos = [[["CW","Common","CwInput","Enable"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Sirenix","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","UnitySerializationInitializer","InitializeRuntime"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[["Coffee","UIExtensions","ParticleSystemPreviewSystem","Initialize"],["Coffee","UIParticleInternal","FrameCache","Clear"],["Coffee","UIExtensions","UIParticleUpdater","OnDomainReload"],["Coffee","UIParticleInternal","MaterialRepository","Clear"],["Coffee","UIParticleInternal","UIExtraCallbacks","InitializeOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["LockedNestObstacle","ResetStatics"],["EventManager","ClearAll"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

