var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6202 = root || request.c( 'UnityEngine.JointSpring' )
  var i6203 = data
  i6202.spring = i6203[0]
  i6202.damper = i6203[1]
  i6202.targetPosition = i6203[2]
  return i6202
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6204 = root || request.c( 'UnityEngine.JointMotor' )
  var i6205 = data
  i6204.m_TargetVelocity = i6205[0]
  i6204.m_Force = i6205[1]
  i6204.m_FreeSpin = i6205[2]
  return i6204
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6206 = root || request.c( 'UnityEngine.JointLimits' )
  var i6207 = data
  i6206.m_Min = i6207[0]
  i6206.m_Max = i6207[1]
  i6206.m_Bounciness = i6207[2]
  i6206.m_BounceMinVelocity = i6207[3]
  i6206.m_ContactDistance = i6207[4]
  i6206.minBounce = i6207[5]
  i6206.maxBounce = i6207[6]
  return i6206
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6208 = root || request.c( 'UnityEngine.JointDrive' )
  var i6209 = data
  i6208.m_PositionSpring = i6209[0]
  i6208.m_PositionDamper = i6209[1]
  i6208.m_MaximumForce = i6209[2]
  i6208.m_UseAcceleration = i6209[3]
  return i6208
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6210 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6211 = data
  i6210.m_Spring = i6211[0]
  i6210.m_Damper = i6211[1]
  return i6210
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6212 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6213 = data
  i6212.m_Limit = i6213[0]
  i6212.m_Bounciness = i6213[1]
  i6212.m_ContactDistance = i6213[2]
  return i6212
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6214 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6215 = data
  i6214.m_ExtremumSlip = i6215[0]
  i6214.m_ExtremumValue = i6215[1]
  i6214.m_AsymptoteSlip = i6215[2]
  i6214.m_AsymptoteValue = i6215[3]
  i6214.m_Stiffness = i6215[4]
  return i6214
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6216 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6217 = data
  i6216.m_LowerAngle = i6217[0]
  i6216.m_UpperAngle = i6217[1]
  return i6216
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6218 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6219 = data
  i6218.m_MotorSpeed = i6219[0]
  i6218.m_MaximumMotorTorque = i6219[1]
  return i6218
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6220 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6221 = data
  i6220.m_DampingRatio = i6221[0]
  i6220.m_Frequency = i6221[1]
  i6220.m_Angle = i6221[2]
  return i6220
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6222 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6223 = data
  i6222.m_LowerTranslation = i6223[0]
  i6222.m_UpperTranslation = i6223[1]
  return i6222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6224 = root || new pc.UnityMaterial()
  var i6225 = data
  i6224.name = i6225[0]
  request.r(i6225[1], i6225[2], 0, i6224, 'shader')
  i6224.renderQueue = i6225[3]
  i6224.enableInstancing = !!i6225[4]
  var i6227 = i6225[5]
  var i6226 = []
  for(var i = 0; i < i6227.length; i += 1) {
    i6226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6227[i + 0]) );
  }
  i6224.floatParameters = i6226
  var i6229 = i6225[6]
  var i6228 = []
  for(var i = 0; i < i6229.length; i += 1) {
    i6228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6229[i + 0]) );
  }
  i6224.colorParameters = i6228
  var i6231 = i6225[7]
  var i6230 = []
  for(var i = 0; i < i6231.length; i += 1) {
    i6230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6231[i + 0]) );
  }
  i6224.vectorParameters = i6230
  var i6233 = i6225[8]
  var i6232 = []
  for(var i = 0; i < i6233.length; i += 1) {
    i6232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6233[i + 0]) );
  }
  i6224.textureParameters = i6232
  var i6235 = i6225[9]
  var i6234 = []
  for(var i = 0; i < i6235.length; i += 1) {
    i6234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6235[i + 0]) );
  }
  i6224.materialFlags = i6234
  return i6224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6239 = data
  i6238.name = i6239[0]
  i6238.value = i6239[1]
  return i6238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6243 = data
  i6242.name = i6243[0]
  i6242.value = new pc.Color(i6243[1], i6243[2], i6243[3], i6243[4])
  return i6242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6247 = data
  i6246.name = i6247[0]
  i6246.value = new pc.Vec4( i6247[1], i6247[2], i6247[3], i6247[4] )
  return i6246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6251 = data
  i6250.name = i6251[0]
  request.r(i6251[1], i6251[2], 0, i6250, 'value')
  return i6250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6255 = data
  i6254.name = i6255[0]
  i6254.enabled = !!i6255[1]
  return i6254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6257 = data
  i6256.name = i6257[0]
  i6256.width = i6257[1]
  i6256.height = i6257[2]
  i6256.mipmapCount = i6257[3]
  i6256.anisoLevel = i6257[4]
  i6256.filterMode = i6257[5]
  i6256.hdr = !!i6257[6]
  i6256.format = i6257[7]
  i6256.wrapMode = i6257[8]
  i6256.alphaIsTransparency = !!i6257[9]
  i6256.alphaSource = i6257[10]
  i6256.graphicsFormat = i6257[11]
  i6256.sRGBTexture = !!i6257[12]
  i6256.desiredColorSpace = i6257[13]
  i6256.wrapU = i6257[14]
  i6256.wrapV = i6257[15]
  return i6256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6259 = data
  i6258.pivot = new pc.Vec2( i6259[0], i6259[1] )
  i6258.anchorMin = new pc.Vec2( i6259[2], i6259[3] )
  i6258.anchorMax = new pc.Vec2( i6259[4], i6259[5] )
  i6258.sizeDelta = new pc.Vec2( i6259[6], i6259[7] )
  i6258.anchoredPosition3D = new pc.Vec3( i6259[8], i6259[9], i6259[10] )
  i6258.rotation = new pc.Quat(i6259[11], i6259[12], i6259[13], i6259[14])
  i6258.scale = new pc.Vec3( i6259[15], i6259[16], i6259[17] )
  return i6258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6261 = data
  i6260.cullTransparentMesh = !!i6261[0]
  return i6260
}

Deserializers["OutsideBird"] = function (request, data, root) {
  var i6262 = root || request.c( 'OutsideBird' )
  var i6263 = data
  request.r(i6263[0], i6263[1], 0, i6262, 'm_ImageIcon')
  request.r(i6263[2], i6263[3], 0, i6262, 'm_TxtCount')
  return i6262
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6264 = root || request.c( 'UnityEngine.UI.Image' )
  var i6265 = data
  request.r(i6265[0], i6265[1], 0, i6264, 'm_Sprite')
  i6264.m_Type = i6265[2]
  i6264.m_PreserveAspect = !!i6265[3]
  i6264.m_FillCenter = !!i6265[4]
  i6264.m_FillMethod = i6265[5]
  i6264.m_FillAmount = i6265[6]
  i6264.m_FillClockwise = !!i6265[7]
  i6264.m_FillOrigin = i6265[8]
  i6264.m_UseSpriteMesh = !!i6265[9]
  i6264.m_PixelsPerUnitMultiplier = i6265[10]
  request.r(i6265[11], i6265[12], 0, i6264, 'm_Material')
  i6264.m_Maskable = !!i6265[13]
  i6264.m_Color = new pc.Color(i6265[14], i6265[15], i6265[16], i6265[17])
  i6264.m_RaycastTarget = !!i6265[18]
  i6264.m_RaycastPadding = new pc.Vec4( i6265[19], i6265[20], i6265[21], i6265[22] )
  return i6264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6267 = data
  i6266.name = i6267[0]
  i6266.tagId = i6267[1]
  i6266.enabled = !!i6267[2]
  i6266.isStatic = !!i6267[3]
  i6266.layer = i6267[4]
  return i6266
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i6268 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i6269 = data
  i6268.m_hasFontAssetChanged = !!i6269[0]
  request.r(i6269[1], i6269[2], 0, i6268, 'm_baseMaterial')
  i6268.m_maskOffset = new pc.Vec4( i6269[3], i6269[4], i6269[5], i6269[6] )
  i6268.m_text = i6269[7]
  i6268.m_isRightToLeft = !!i6269[8]
  request.r(i6269[9], i6269[10], 0, i6268, 'm_fontAsset')
  request.r(i6269[11], i6269[12], 0, i6268, 'm_sharedMaterial')
  var i6271 = i6269[13]
  var i6270 = []
  for(var i = 0; i < i6271.length; i += 2) {
  request.r(i6271[i + 0], i6271[i + 1], 2, i6270, '')
  }
  i6268.m_fontSharedMaterials = i6270
  request.r(i6269[14], i6269[15], 0, i6268, 'm_fontMaterial')
  var i6273 = i6269[16]
  var i6272 = []
  for(var i = 0; i < i6273.length; i += 2) {
  request.r(i6273[i + 0], i6273[i + 1], 2, i6272, '')
  }
  i6268.m_fontMaterials = i6272
  i6268.m_fontColor32 = UnityEngine.Color32.ConstructColor(i6269[17], i6269[18], i6269[19], i6269[20])
  i6268.m_fontColor = new pc.Color(i6269[21], i6269[22], i6269[23], i6269[24])
  i6268.m_enableVertexGradient = !!i6269[25]
  i6268.m_colorMode = i6269[26]
  i6268.m_fontColorGradient = request.d('TMPro.VertexGradient', i6269[27], i6268.m_fontColorGradient)
  request.r(i6269[28], i6269[29], 0, i6268, 'm_fontColorGradientPreset')
  request.r(i6269[30], i6269[31], 0, i6268, 'm_spriteAsset')
  i6268.m_tintAllSprites = !!i6269[32]
  request.r(i6269[33], i6269[34], 0, i6268, 'm_StyleSheet')
  i6268.m_TextStyleHashCode = i6269[35]
  i6268.m_overrideHtmlColors = !!i6269[36]
  i6268.m_faceColor = UnityEngine.Color32.ConstructColor(i6269[37], i6269[38], i6269[39], i6269[40])
  i6268.m_fontSize = i6269[41]
  i6268.m_fontSizeBase = i6269[42]
  i6268.m_fontWeight = i6269[43]
  i6268.m_enableAutoSizing = !!i6269[44]
  i6268.m_fontSizeMin = i6269[45]
  i6268.m_fontSizeMax = i6269[46]
  i6268.m_fontStyle = i6269[47]
  i6268.m_HorizontalAlignment = i6269[48]
  i6268.m_VerticalAlignment = i6269[49]
  i6268.m_textAlignment = i6269[50]
  i6268.m_characterSpacing = i6269[51]
  i6268.m_wordSpacing = i6269[52]
  i6268.m_lineSpacing = i6269[53]
  i6268.m_lineSpacingMax = i6269[54]
  i6268.m_paragraphSpacing = i6269[55]
  i6268.m_charWidthMaxAdj = i6269[56]
  i6268.m_enableWordWrapping = !!i6269[57]
  i6268.m_wordWrappingRatios = i6269[58]
  i6268.m_overflowMode = i6269[59]
  request.r(i6269[60], i6269[61], 0, i6268, 'm_linkedTextComponent')
  request.r(i6269[62], i6269[63], 0, i6268, 'parentLinkedComponent')
  i6268.m_enableKerning = !!i6269[64]
  i6268.m_enableExtraPadding = !!i6269[65]
  i6268.checkPaddingRequired = !!i6269[66]
  i6268.m_isRichText = !!i6269[67]
  i6268.m_parseCtrlCharacters = !!i6269[68]
  i6268.m_isOrthographic = !!i6269[69]
  i6268.m_isCullingEnabled = !!i6269[70]
  i6268.m_horizontalMapping = i6269[71]
  i6268.m_verticalMapping = i6269[72]
  i6268.m_uvLineOffset = i6269[73]
  i6268.m_geometrySortingOrder = i6269[74]
  i6268.m_IsTextObjectScaleStatic = !!i6269[75]
  i6268.m_VertexBufferAutoSizeReduction = !!i6269[76]
  i6268.m_useMaxVisibleDescender = !!i6269[77]
  i6268.m_pageToDisplay = i6269[78]
  i6268.m_margin = new pc.Vec4( i6269[79], i6269[80], i6269[81], i6269[82] )
  i6268.m_isUsingLegacyAnimationComponent = !!i6269[83]
  i6268.m_isVolumetricText = !!i6269[84]
  request.r(i6269[85], i6269[86], 0, i6268, 'm_Material')
  i6268.m_Maskable = !!i6269[87]
  i6268.m_Color = new pc.Color(i6269[88], i6269[89], i6269[90], i6269[91])
  i6268.m_RaycastTarget = !!i6269[92]
  i6268.m_RaycastPadding = new pc.Vec4( i6269[93], i6269[94], i6269[95], i6269[96] )
  return i6268
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i6276 = root || request.c( 'TMPro.VertexGradient' )
  var i6277 = data
  i6276.topLeft = new pc.Color(i6277[0], i6277[1], i6277[2], i6277[3])
  i6276.topRight = new pc.Color(i6277[4], i6277[5], i6277[6], i6277[7])
  i6276.bottomLeft = new pc.Color(i6277[8], i6277[9], i6277[10], i6277[11])
  i6276.bottomRight = new pc.Color(i6277[12], i6277[13], i6277[14], i6277[15])
  return i6276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i6278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i6279 = data
  i6278.position = new pc.Vec3( i6279[0], i6279[1], i6279[2] )
  i6278.scale = new pc.Vec3( i6279[3], i6279[4], i6279[5] )
  i6278.rotation = new pc.Quat(i6279[6], i6279[7], i6279[8], i6279[9])
  return i6278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i6280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i6281 = data
  i6280.bodyType = i6281[0]
  request.r(i6281[1], i6281[2], 0, i6280, 'material')
  i6280.simulated = !!i6281[3]
  i6280.useAutoMass = !!i6281[4]
  i6280.mass = i6281[5]
  i6280.drag = i6281[6]
  i6280.angularDrag = i6281[7]
  i6280.gravityScale = i6281[8]
  i6280.collisionDetectionMode = i6281[9]
  i6280.sleepMode = i6281[10]
  i6280.constraints = i6281[11]
  return i6280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i6282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i6283 = data
  i6282.radius = i6283[0]
  i6282.enabled = !!i6283[1]
  i6282.isTrigger = !!i6283[2]
  i6282.usedByEffector = !!i6283[3]
  i6282.density = i6283[4]
  i6282.offset = new pc.Vec2( i6283[5], i6283[6] )
  request.r(i6283[7], i6283[8], 0, i6282, 'material')
  return i6282
}

Deserializers["BubbleParts"] = function (request, data, root) {
  var i6284 = root || request.c( 'BubbleParts' )
  var i6285 = data
  var i6287 = i6285[0]
  var i6286 = []
  for(var i = 0; i < i6287.length; i += 1) {
    i6286.push( request.d('BubbleParts+Entry', i6287[i + 0]) );
  }
  i6284.parts = i6286
  return i6284
}

Deserializers["BubbleParts+Entry"] = function (request, data, root) {
  var i6290 = root || request.c( 'BubbleParts+Entry' )
  var i6291 = data
  i6290.key = i6291[0]
  request.r(i6291[1], i6291[2], 0, i6290, 'target')
  return i6290
}

Deserializers["BubbleOneSlot"] = function (request, data, root) {
  var i6292 = root || request.c( 'BubbleOneSlot' )
  var i6293 = data
  i6292.currentConfig = request.d('BubbleConfig', i6293[0], i6292.currentConfig)
  var i6295 = i6293[1]
  var i6294 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i6295.length; i += 2) {
  request.r(i6295[i + 0], i6295[i + 1], 1, i6294, '')
  }
  i6292.birds = i6294
  request.r(i6293[2], i6293[3], 0, i6292, 'birdParent')
  i6292.refillPopDuration = i6293[4]
  i6292.refillMoveDuration = i6293[5]
  i6292.clipBirdsToCircle = !!i6293[6]
  return i6292
}

Deserializers["BubbleConfig"] = function (request, data, root) {
  var i6296 = root || request.c( 'BubbleConfig' )
  var i6297 = data
  i6296.BubbleID = i6297[0]
  i6296.BubbleType = i6297[1]
  i6296.FishStr = i6297[2]
  i6296.IsFrozen = !!i6297[3]
  i6296.IsUnknown = !!i6297[4]
  i6296.IsKey = !!i6297[5]
  i6296.LockCount = i6297[6]
  i6296.Lock2Count = i6297[7]
  i6296.IsObstacle = !!i6297[8]
  i6296.Obstacle2Count = i6297[9]
  i6296.IsMore = !!i6297[10]
  i6296.IsConveyor = !!i6297[11]
  i6296.MaskTargetFish = i6297[12]
  i6296.BindFishStr = i6297[13]
  i6296.IceFishStr = i6297[14]
  i6296.UnKnowFishStr = i6297[15]
  i6296.KeyFishStr = i6297[16]
  i6296.LockFishStr = i6297[17]
  return i6296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i6300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i6301 = data
  i6300.color = new pc.Color(i6301[0], i6301[1], i6301[2], i6301[3])
  request.r(i6301[4], i6301[5], 0, i6300, 'sprite')
  i6300.flipX = !!i6301[6]
  i6300.flipY = !!i6301[7]
  i6300.drawMode = i6301[8]
  i6300.size = new pc.Vec2( i6301[9], i6301[10] )
  i6300.tileMode = i6301[11]
  i6300.adaptiveModeThreshold = i6301[12]
  i6300.maskInteraction = i6301[13]
  i6300.spriteSortPoint = i6301[14]
  i6300.enabled = !!i6301[15]
  request.r(i6301[16], i6301[17], 0, i6300, 'sharedMaterial')
  var i6303 = i6301[18]
  var i6302 = []
  for(var i = 0; i < i6303.length; i += 2) {
  request.r(i6303[i + 0], i6303[i + 1], 2, i6302, '')
  }
  i6300.sharedMaterials = i6302
  i6300.receiveShadows = !!i6301[19]
  i6300.shadowCastingMode = i6301[20]
  i6300.sortingLayerID = i6301[21]
  i6300.sortingOrder = i6301[22]
  i6300.lightmapIndex = i6301[23]
  i6300.lightmapSceneIndex = i6301[24]
  i6300.lightmapScaleOffset = new pc.Vec4( i6301[25], i6301[26], i6301[27], i6301[28] )
  i6300.lightProbeUsage = i6301[29]
  i6300.reflectionProbeUsage = i6301[30]
  return i6300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i6304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i6305 = data
  request.r(i6305[0], i6305[1], 0, i6304, 'additionalVertexStreams')
  i6304.enabled = !!i6305[2]
  request.r(i6305[3], i6305[4], 0, i6304, 'sharedMaterial')
  var i6307 = i6305[5]
  var i6306 = []
  for(var i = 0; i < i6307.length; i += 2) {
  request.r(i6307[i + 0], i6307[i + 1], 2, i6306, '')
  }
  i6304.sharedMaterials = i6306
  i6304.receiveShadows = !!i6305[6]
  i6304.shadowCastingMode = i6305[7]
  i6304.sortingLayerID = i6305[8]
  i6304.sortingOrder = i6305[9]
  i6304.lightmapIndex = i6305[10]
  i6304.lightmapSceneIndex = i6305[11]
  i6304.lightmapScaleOffset = new pc.Vec4( i6305[12], i6305[13], i6305[14], i6305[15] )
  i6304.lightProbeUsage = i6305[16]
  i6304.reflectionProbeUsage = i6305[17]
  return i6304
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i6308 = root || request.c( 'TMPro.TextMeshPro' )
  var i6309 = data
  i6308._SortingLayer = i6309[0]
  i6308._SortingLayerID = i6309[1]
  i6308._SortingOrder = i6309[2]
  i6308.m_hasFontAssetChanged = !!i6309[3]
  request.r(i6309[4], i6309[5], 0, i6308, 'm_renderer')
  i6308.m_maskType = i6309[6]
  i6308.m_text = i6309[7]
  i6308.m_isRightToLeft = !!i6309[8]
  request.r(i6309[9], i6309[10], 0, i6308, 'm_fontAsset')
  request.r(i6309[11], i6309[12], 0, i6308, 'm_sharedMaterial')
  var i6311 = i6309[13]
  var i6310 = []
  for(var i = 0; i < i6311.length; i += 2) {
  request.r(i6311[i + 0], i6311[i + 1], 2, i6310, '')
  }
  i6308.m_fontSharedMaterials = i6310
  request.r(i6309[14], i6309[15], 0, i6308, 'm_fontMaterial')
  var i6313 = i6309[16]
  var i6312 = []
  for(var i = 0; i < i6313.length; i += 2) {
  request.r(i6313[i + 0], i6313[i + 1], 2, i6312, '')
  }
  i6308.m_fontMaterials = i6312
  i6308.m_fontColor32 = UnityEngine.Color32.ConstructColor(i6309[17], i6309[18], i6309[19], i6309[20])
  i6308.m_fontColor = new pc.Color(i6309[21], i6309[22], i6309[23], i6309[24])
  i6308.m_enableVertexGradient = !!i6309[25]
  i6308.m_colorMode = i6309[26]
  i6308.m_fontColorGradient = request.d('TMPro.VertexGradient', i6309[27], i6308.m_fontColorGradient)
  request.r(i6309[28], i6309[29], 0, i6308, 'm_fontColorGradientPreset')
  request.r(i6309[30], i6309[31], 0, i6308, 'm_spriteAsset')
  i6308.m_tintAllSprites = !!i6309[32]
  request.r(i6309[33], i6309[34], 0, i6308, 'm_StyleSheet')
  i6308.m_TextStyleHashCode = i6309[35]
  i6308.m_overrideHtmlColors = !!i6309[36]
  i6308.m_faceColor = UnityEngine.Color32.ConstructColor(i6309[37], i6309[38], i6309[39], i6309[40])
  i6308.m_fontSize = i6309[41]
  i6308.m_fontSizeBase = i6309[42]
  i6308.m_fontWeight = i6309[43]
  i6308.m_enableAutoSizing = !!i6309[44]
  i6308.m_fontSizeMin = i6309[45]
  i6308.m_fontSizeMax = i6309[46]
  i6308.m_fontStyle = i6309[47]
  i6308.m_HorizontalAlignment = i6309[48]
  i6308.m_VerticalAlignment = i6309[49]
  i6308.m_textAlignment = i6309[50]
  i6308.m_characterSpacing = i6309[51]
  i6308.m_wordSpacing = i6309[52]
  i6308.m_lineSpacing = i6309[53]
  i6308.m_lineSpacingMax = i6309[54]
  i6308.m_paragraphSpacing = i6309[55]
  i6308.m_charWidthMaxAdj = i6309[56]
  i6308.m_enableWordWrapping = !!i6309[57]
  i6308.m_wordWrappingRatios = i6309[58]
  i6308.m_overflowMode = i6309[59]
  request.r(i6309[60], i6309[61], 0, i6308, 'm_linkedTextComponent')
  request.r(i6309[62], i6309[63], 0, i6308, 'parentLinkedComponent')
  i6308.m_enableKerning = !!i6309[64]
  i6308.m_enableExtraPadding = !!i6309[65]
  i6308.checkPaddingRequired = !!i6309[66]
  i6308.m_isRichText = !!i6309[67]
  i6308.m_parseCtrlCharacters = !!i6309[68]
  i6308.m_isOrthographic = !!i6309[69]
  i6308.m_isCullingEnabled = !!i6309[70]
  i6308.m_horizontalMapping = i6309[71]
  i6308.m_verticalMapping = i6309[72]
  i6308.m_uvLineOffset = i6309[73]
  i6308.m_geometrySortingOrder = i6309[74]
  i6308.m_IsTextObjectScaleStatic = !!i6309[75]
  i6308.m_VertexBufferAutoSizeReduction = !!i6309[76]
  i6308.m_useMaxVisibleDescender = !!i6309[77]
  i6308.m_pageToDisplay = i6309[78]
  i6308.m_margin = new pc.Vec4( i6309[79], i6309[80], i6309[81], i6309[82] )
  i6308.m_isUsingLegacyAnimationComponent = !!i6309[83]
  i6308.m_isVolumetricText = !!i6309[84]
  request.r(i6309[85], i6309[86], 0, i6308, 'm_Material')
  i6308.m_Maskable = !!i6309[87]
  i6308.m_Color = new pc.Color(i6309[88], i6309[89], i6309[90], i6309[91])
  i6308.m_RaycastTarget = !!i6309[92]
  i6308.m_RaycastPadding = new pc.Vec4( i6309[93], i6309[94], i6309[95], i6309[96] )
  return i6308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i6314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i6315 = data
  i6314.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i6315[0], i6314.main)
  i6314.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i6315[1], i6314.colorBySpeed)
  i6314.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i6315[2], i6314.colorOverLifetime)
  i6314.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i6315[3], i6314.emission)
  i6314.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i6315[4], i6314.rotationBySpeed)
  i6314.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i6315[5], i6314.rotationOverLifetime)
  i6314.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i6315[6], i6314.shape)
  i6314.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i6315[7], i6314.sizeBySpeed)
  i6314.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i6315[8], i6314.sizeOverLifetime)
  i6314.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i6315[9], i6314.textureSheetAnimation)
  i6314.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i6315[10], i6314.velocityOverLifetime)
  i6314.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i6315[11], i6314.noise)
  i6314.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i6315[12], i6314.inheritVelocity)
  i6314.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i6315[13], i6314.forceOverLifetime)
  i6314.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i6315[14], i6314.limitVelocityOverLifetime)
  i6314.useAutoRandomSeed = !!i6315[15]
  i6314.randomSeed = i6315[16]
  return i6314
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i6316 = root || new pc.ParticleSystemMain()
  var i6317 = data
  i6316.duration = i6317[0]
  i6316.loop = !!i6317[1]
  i6316.prewarm = !!i6317[2]
  i6316.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6317[3], i6316.startDelay)
  i6316.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6317[4], i6316.startLifetime)
  i6316.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6317[5], i6316.startSpeed)
  i6316.startSize3D = !!i6317[6]
  i6316.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6317[7], i6316.startSizeX)
  i6316.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6317[8], i6316.startSizeY)
  i6316.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6317[9], i6316.startSizeZ)
  i6316.startRotation3D = !!i6317[10]
  i6316.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6317[11], i6316.startRotationX)
  i6316.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6317[12], i6316.startRotationY)
  i6316.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6317[13], i6316.startRotationZ)
  i6316.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6317[14], i6316.startColor)
  i6316.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6317[15], i6316.gravityModifier)
  i6316.simulationSpace = i6317[16]
  request.r(i6317[17], i6317[18], 0, i6316, 'customSimulationSpace')
  i6316.simulationSpeed = i6317[19]
  i6316.useUnscaledTime = !!i6317[20]
  i6316.scalingMode = i6317[21]
  i6316.playOnAwake = !!i6317[22]
  i6316.maxParticles = i6317[23]
  i6316.emitterVelocityMode = i6317[24]
  i6316.stopAction = i6317[25]
  return i6316
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i6318 = root || new pc.MinMaxCurve()
  var i6319 = data
  i6318.mode = i6319[0]
  i6318.curveMin = new pc.AnimationCurve( { keys_flow: i6319[1] } )
  i6318.curveMax = new pc.AnimationCurve( { keys_flow: i6319[2] } )
  i6318.curveMultiplier = i6319[3]
  i6318.constantMin = i6319[4]
  i6318.constantMax = i6319[5]
  return i6318
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i6320 = root || new pc.MinMaxGradient()
  var i6321 = data
  i6320.mode = i6321[0]
  i6320.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6321[1], i6320.gradientMin)
  i6320.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6321[2], i6320.gradientMax)
  i6320.colorMin = new pc.Color(i6321[3], i6321[4], i6321[5], i6321[6])
  i6320.colorMax = new pc.Color(i6321[7], i6321[8], i6321[9], i6321[10])
  return i6320
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i6322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i6323 = data
  i6322.mode = i6323[0]
  var i6325 = i6323[1]
  var i6324 = []
  for(var i = 0; i < i6325.length; i += 1) {
    i6324.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i6325[i + 0]) );
  }
  i6322.colorKeys = i6324
  var i6327 = i6323[2]
  var i6326 = []
  for(var i = 0; i < i6327.length; i += 1) {
    i6326.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i6327[i + 0]) );
  }
  i6322.alphaKeys = i6326
  return i6322
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i6328 = root || new pc.ParticleSystemColorBySpeed()
  var i6329 = data
  i6328.enabled = !!i6329[0]
  i6328.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6329[1], i6328.color)
  i6328.range = new pc.Vec2( i6329[2], i6329[3] )
  return i6328
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i6332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i6333 = data
  i6332.color = new pc.Color(i6333[0], i6333[1], i6333[2], i6333[3])
  i6332.time = i6333[4]
  return i6332
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i6336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i6337 = data
  i6336.alpha = i6337[0]
  i6336.time = i6337[1]
  return i6336
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i6338 = root || new pc.ParticleSystemColorOverLifetime()
  var i6339 = data
  i6338.enabled = !!i6339[0]
  i6338.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6339[1], i6338.color)
  return i6338
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i6340 = root || new pc.ParticleSystemEmitter()
  var i6341 = data
  i6340.enabled = !!i6341[0]
  i6340.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6341[1], i6340.rateOverTime)
  i6340.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6341[2], i6340.rateOverDistance)
  var i6343 = i6341[3]
  var i6342 = []
  for(var i = 0; i < i6343.length; i += 1) {
    i6342.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i6343[i + 0]) );
  }
  i6340.bursts = i6342
  return i6340
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i6346 = root || new pc.ParticleSystemBurst()
  var i6347 = data
  i6346.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6347[0], i6346.count)
  i6346.cycleCount = i6347[1]
  i6346.minCount = i6347[2]
  i6346.maxCount = i6347[3]
  i6346.repeatInterval = i6347[4]
  i6346.time = i6347[5]
  return i6346
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i6348 = root || new pc.ParticleSystemRotationBySpeed()
  var i6349 = data
  i6348.enabled = !!i6349[0]
  i6348.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6349[1], i6348.x)
  i6348.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6349[2], i6348.y)
  i6348.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6349[3], i6348.z)
  i6348.separateAxes = !!i6349[4]
  i6348.range = new pc.Vec2( i6349[5], i6349[6] )
  return i6348
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i6350 = root || new pc.ParticleSystemRotationOverLifetime()
  var i6351 = data
  i6350.enabled = !!i6351[0]
  i6350.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6351[1], i6350.x)
  i6350.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6351[2], i6350.y)
  i6350.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6351[3], i6350.z)
  i6350.separateAxes = !!i6351[4]
  return i6350
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i6352 = root || new pc.ParticleSystemShape()
  var i6353 = data
  i6352.enabled = !!i6353[0]
  i6352.shapeType = i6353[1]
  i6352.randomDirectionAmount = i6353[2]
  i6352.sphericalDirectionAmount = i6353[3]
  i6352.randomPositionAmount = i6353[4]
  i6352.alignToDirection = !!i6353[5]
  i6352.radius = i6353[6]
  i6352.radiusMode = i6353[7]
  i6352.radiusSpread = i6353[8]
  i6352.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6353[9], i6352.radiusSpeed)
  i6352.radiusThickness = i6353[10]
  i6352.angle = i6353[11]
  i6352.length = i6353[12]
  i6352.boxThickness = new pc.Vec3( i6353[13], i6353[14], i6353[15] )
  i6352.meshShapeType = i6353[16]
  request.r(i6353[17], i6353[18], 0, i6352, 'mesh')
  request.r(i6353[19], i6353[20], 0, i6352, 'meshRenderer')
  request.r(i6353[21], i6353[22], 0, i6352, 'skinnedMeshRenderer')
  i6352.useMeshMaterialIndex = !!i6353[23]
  i6352.meshMaterialIndex = i6353[24]
  i6352.useMeshColors = !!i6353[25]
  i6352.normalOffset = i6353[26]
  i6352.arc = i6353[27]
  i6352.arcMode = i6353[28]
  i6352.arcSpread = i6353[29]
  i6352.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6353[30], i6352.arcSpeed)
  i6352.donutRadius = i6353[31]
  i6352.position = new pc.Vec3( i6353[32], i6353[33], i6353[34] )
  i6352.rotation = new pc.Vec3( i6353[35], i6353[36], i6353[37] )
  i6352.scale = new pc.Vec3( i6353[38], i6353[39], i6353[40] )
  return i6352
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i6354 = root || new pc.ParticleSystemSizeBySpeed()
  var i6355 = data
  i6354.enabled = !!i6355[0]
  i6354.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6355[1], i6354.x)
  i6354.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6355[2], i6354.y)
  i6354.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6355[3], i6354.z)
  i6354.separateAxes = !!i6355[4]
  i6354.range = new pc.Vec2( i6355[5], i6355[6] )
  return i6354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i6356 = root || new pc.ParticleSystemSizeOverLifetime()
  var i6357 = data
  i6356.enabled = !!i6357[0]
  i6356.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6357[1], i6356.x)
  i6356.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6357[2], i6356.y)
  i6356.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6357[3], i6356.z)
  i6356.separateAxes = !!i6357[4]
  return i6356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i6358 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i6359 = data
  i6358.enabled = !!i6359[0]
  i6358.mode = i6359[1]
  i6358.animation = i6359[2]
  i6358.numTilesX = i6359[3]
  i6358.numTilesY = i6359[4]
  i6358.useRandomRow = !!i6359[5]
  i6358.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6359[6], i6358.frameOverTime)
  i6358.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6359[7], i6358.startFrame)
  i6358.cycleCount = i6359[8]
  i6358.rowIndex = i6359[9]
  i6358.flipU = i6359[10]
  i6358.flipV = i6359[11]
  i6358.spriteCount = i6359[12]
  var i6361 = i6359[13]
  var i6360 = []
  for(var i = 0; i < i6361.length; i += 2) {
  request.r(i6361[i + 0], i6361[i + 1], 2, i6360, '')
  }
  i6358.sprites = i6360
  return i6358
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i6364 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i6365 = data
  i6364.enabled = !!i6365[0]
  i6364.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6365[1], i6364.x)
  i6364.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6365[2], i6364.y)
  i6364.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6365[3], i6364.z)
  i6364.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6365[4], i6364.radial)
  i6364.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6365[5], i6364.speedModifier)
  i6364.space = i6365[6]
  i6364.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6365[7], i6364.orbitalX)
  i6364.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6365[8], i6364.orbitalY)
  i6364.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6365[9], i6364.orbitalZ)
  i6364.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6365[10], i6364.orbitalOffsetX)
  i6364.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6365[11], i6364.orbitalOffsetY)
  i6364.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6365[12], i6364.orbitalOffsetZ)
  return i6364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i6366 = root || new pc.ParticleSystemNoise()
  var i6367 = data
  i6366.enabled = !!i6367[0]
  i6366.separateAxes = !!i6367[1]
  i6366.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6367[2], i6366.strengthX)
  i6366.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6367[3], i6366.strengthY)
  i6366.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6367[4], i6366.strengthZ)
  i6366.frequency = i6367[5]
  i6366.damping = !!i6367[6]
  i6366.octaveCount = i6367[7]
  i6366.octaveMultiplier = i6367[8]
  i6366.octaveScale = i6367[9]
  i6366.quality = i6367[10]
  i6366.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6367[11], i6366.scrollSpeed)
  i6366.scrollSpeedMultiplier = i6367[12]
  i6366.remapEnabled = !!i6367[13]
  i6366.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6367[14], i6366.remapX)
  i6366.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6367[15], i6366.remapY)
  i6366.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6367[16], i6366.remapZ)
  i6366.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6367[17], i6366.positionAmount)
  i6366.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6367[18], i6366.rotationAmount)
  i6366.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6367[19], i6366.sizeAmount)
  return i6366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i6368 = root || new pc.ParticleSystemInheritVelocity()
  var i6369 = data
  i6368.enabled = !!i6369[0]
  i6368.mode = i6369[1]
  i6368.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6369[2], i6368.curve)
  return i6368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i6370 = root || new pc.ParticleSystemForceOverLifetime()
  var i6371 = data
  i6370.enabled = !!i6371[0]
  i6370.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6371[1], i6370.x)
  i6370.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6371[2], i6370.y)
  i6370.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6371[3], i6370.z)
  i6370.space = i6371[4]
  i6370.randomized = !!i6371[5]
  return i6370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i6372 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i6373 = data
  i6372.enabled = !!i6373[0]
  i6372.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6373[1], i6372.limit)
  i6372.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6373[2], i6372.limitX)
  i6372.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6373[3], i6372.limitY)
  i6372.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6373[4], i6372.limitZ)
  i6372.dampen = i6373[5]
  i6372.separateAxes = !!i6373[6]
  i6372.space = i6373[7]
  i6372.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6373[8], i6372.drag)
  i6372.multiplyDragByParticleSize = !!i6373[9]
  i6372.multiplyDragByParticleVelocity = !!i6373[10]
  return i6372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i6374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i6375 = data
  request.r(i6375[0], i6375[1], 0, i6374, 'mesh')
  i6374.meshCount = i6375[2]
  i6374.activeVertexStreamsCount = i6375[3]
  i6374.alignment = i6375[4]
  i6374.renderMode = i6375[5]
  i6374.sortMode = i6375[6]
  i6374.lengthScale = i6375[7]
  i6374.velocityScale = i6375[8]
  i6374.cameraVelocityScale = i6375[9]
  i6374.normalDirection = i6375[10]
  i6374.sortingFudge = i6375[11]
  i6374.minParticleSize = i6375[12]
  i6374.maxParticleSize = i6375[13]
  i6374.pivot = new pc.Vec3( i6375[14], i6375[15], i6375[16] )
  request.r(i6375[17], i6375[18], 0, i6374, 'trailMaterial')
  i6374.applyActiveColorSpace = !!i6375[19]
  i6374.enabled = !!i6375[20]
  request.r(i6375[21], i6375[22], 0, i6374, 'sharedMaterial')
  var i6377 = i6375[23]
  var i6376 = []
  for(var i = 0; i < i6377.length; i += 2) {
  request.r(i6377[i + 0], i6377[i + 1], 2, i6376, '')
  }
  i6374.sharedMaterials = i6376
  i6374.receiveShadows = !!i6375[24]
  i6374.shadowCastingMode = i6375[25]
  i6374.sortingLayerID = i6375[26]
  i6374.sortingOrder = i6375[27]
  i6374.lightmapIndex = i6375[28]
  i6374.lightmapSceneIndex = i6375[29]
  i6374.lightmapScaleOffset = new pc.Vec4( i6375[30], i6375[31], i6375[32], i6375[33] )
  i6374.lightProbeUsage = i6375[34]
  i6374.reflectionProbeUsage = i6375[35]
  return i6374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i6378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i6379 = data
  i6378.type = i6379[0]
  i6378.color = new pc.Color(i6379[1], i6379[2], i6379[3], i6379[4])
  i6378.cullingMask = i6379[5]
  i6378.intensity = i6379[6]
  i6378.range = i6379[7]
  i6378.spotAngle = i6379[8]
  i6378.shadows = i6379[9]
  i6378.shadowNormalBias = i6379[10]
  i6378.shadowBias = i6379[11]
  i6378.shadowStrength = i6379[12]
  i6378.shadowResolution = i6379[13]
  i6378.lightmapBakeType = i6379[14]
  i6378.renderMode = i6379[15]
  request.r(i6379[16], i6379[17], 0, i6378, 'cookie')
  i6378.cookieSize = i6379[18]
  i6378.shadowNearPlane = i6379[19]
  i6378.occlusionMaskChannel = i6379[20]
  i6378.isBaked = !!i6379[21]
  i6378.mixedLightingMode = i6379[22]
  i6378.enabled = !!i6379[23]
  return i6378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i6380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i6381 = data
  i6380.name = i6381[0]
  i6380.halfPrecision = !!i6381[1]
  i6380.useSimplification = !!i6381[2]
  i6380.useUInt32IndexFormat = !!i6381[3]
  i6380.vertexCount = i6381[4]
  i6380.aabb = i6381[5]
  var i6383 = i6381[6]
  var i6382 = []
  for(var i = 0; i < i6383.length; i += 1) {
    i6382.push( !!i6383[i + 0] );
  }
  i6380.streams = i6382
  i6380.vertices = i6381[7]
  var i6385 = i6381[8]
  var i6384 = []
  for(var i = 0; i < i6385.length; i += 1) {
    i6384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i6385[i + 0]) );
  }
  i6380.subMeshes = i6384
  var i6387 = i6381[9]
  var i6386 = []
  for(var i = 0; i < i6387.length; i += 16) {
    i6386.push( new pc.Mat4().setData(i6387[i + 0], i6387[i + 1], i6387[i + 2], i6387[i + 3],  i6387[i + 4], i6387[i + 5], i6387[i + 6], i6387[i + 7],  i6387[i + 8], i6387[i + 9], i6387[i + 10], i6387[i + 11],  i6387[i + 12], i6387[i + 13], i6387[i + 14], i6387[i + 15]) );
  }
  i6380.bindposes = i6386
  var i6389 = i6381[10]
  var i6388 = []
  for(var i = 0; i < i6389.length; i += 1) {
    i6388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i6389[i + 0]) );
  }
  i6380.blendShapes = i6388
  return i6380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i6394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i6395 = data
  i6394.triangles = i6395[0]
  return i6394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i6400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i6401 = data
  i6400.name = i6401[0]
  var i6403 = i6401[1]
  var i6402 = []
  for(var i = 0; i < i6403.length; i += 1) {
    i6402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i6403[i + 0]) );
  }
  i6400.frames = i6402
  return i6400
}

Deserializers["BubbleTwoSlot"] = function (request, data, root) {
  var i6404 = root || request.c( 'BubbleTwoSlot' )
  var i6405 = data
  i6404.layoutCenter = new pc.Vec2( i6405[0], i6405[1] )
  i6404.horizontalOffset = i6405[2]
  i6404.currentConfig = request.d('BubbleConfig', i6405[3], i6404.currentConfig)
  var i6407 = i6405[4]
  var i6406 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i6407.length; i += 2) {
  request.r(i6407[i + 0], i6407[i + 1], 1, i6406, '')
  }
  i6404.birds = i6406
  request.r(i6405[5], i6405[6], 0, i6404, 'birdParent')
  i6404.refillPopDuration = i6405[7]
  i6404.refillMoveDuration = i6405[8]
  i6404.clipBirdsToCircle = !!i6405[9]
  return i6404
}

Deserializers["BubbleThreeSlot"] = function (request, data, root) {
  var i6408 = root || request.c( 'BubbleThreeSlot' )
  var i6409 = data
  i6408.layoutCenter = new pc.Vec2( i6409[0], i6409[1] )
  i6408.horizontalOffset = i6409[2]
  i6408.verticalOffset = i6409[3]
  i6408.currentConfig = request.d('BubbleConfig', i6409[4], i6408.currentConfig)
  var i6411 = i6409[5]
  var i6410 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i6411.length; i += 2) {
  request.r(i6411[i + 0], i6411[i + 1], 1, i6410, '')
  }
  i6408.birds = i6410
  request.r(i6409[6], i6409[7], 0, i6408, 'birdParent')
  i6408.refillPopDuration = i6409[8]
  i6408.refillMoveDuration = i6409[9]
  i6408.clipBirdsToCircle = !!i6409[10]
  return i6408
}

Deserializers["BubbleFourSlot"] = function (request, data, root) {
  var i6412 = root || request.c( 'BubbleFourSlot' )
  var i6413 = data
  i6412.layoutCenter = new pc.Vec2( i6413[0], i6413[1] )
  i6412.horizontalOffset = i6413[2]
  i6412.verticalOffset = i6413[3]
  i6412.currentConfig = request.d('BubbleConfig', i6413[4], i6412.currentConfig)
  var i6415 = i6413[5]
  var i6414 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i6415.length; i += 2) {
  request.r(i6415[i + 0], i6415[i + 1], 1, i6414, '')
  }
  i6412.birds = i6414
  request.r(i6413[6], i6413[7], 0, i6412, 'birdParent')
  i6412.refillPopDuration = i6413[8]
  i6412.refillMoveDuration = i6413[9]
  i6412.clipBirdsToCircle = !!i6413[10]
  return i6412
}

Deserializers["BubbleFiveSlot"] = function (request, data, root) {
  var i6416 = root || request.c( 'BubbleFiveSlot' )
  var i6417 = data
  i6416.layoutCenter = new pc.Vec2( i6417[0], i6417[1] )
  i6416.horizontalOffset = i6417[2]
  i6416.verticalOffset = i6417[3]
  i6416.currentConfig = request.d('BubbleConfig', i6417[4], i6416.currentConfig)
  var i6419 = i6417[5]
  var i6418 = new (System.Collections.Generic.List$1(Bridge.ns('Bird')))
  for(var i = 0; i < i6419.length; i += 2) {
  request.r(i6419[i + 0], i6419[i + 1], 1, i6418, '')
  }
  i6416.birds = i6418
  request.r(i6417[6], i6417[7], 0, i6416, 'birdParent')
  i6416.refillPopDuration = i6417[8]
  i6416.refillMoveDuration = i6417[9]
  i6416.clipBirdsToCircle = !!i6417[10]
  return i6416
}

Deserializers["FrozenNestObstacle"] = function (request, data, root) {
  var i6420 = root || request.c( 'FrozenNestObstacle' )
  var i6421 = data
  i6420.layers = i6421[0]
  i6420.touchTolerance = i6421[1]
  i6420.blockedMessage = i6421[2]
  i6420.overlayPart = i6421[3]
  i6420.layerTextPart = i6421[4]
  i6420.minAlpha = i6421[5]
  return i6420
}

Deserializers["LockedNestObstacle"] = function (request, data, root) {
  var i6422 = root || request.c( 'LockedNestObstacle' )
  var i6423 = data
  i6422.blockedMessage = i6423[0]
  request.r(i6423[1], i6423[2], 0, i6422, 'flyingKeyPrefab')
  i6422.keyFlyDuration = i6423[3]
  i6422.keyArcHeight = i6423[4]
  i6422.keySortingOffset = i6423[5]
  i6422.chainPart = i6423[6]
  i6422.lockPart = i6423[7]
  i6422.countTextPart = i6423[8]
  return i6422
}

Deserializers["KeyNestObstacle"] = function (request, data, root) {
  var i6424 = root || request.c( 'KeyNestObstacle' )
  var i6425 = data
  i6424.keyPart = i6425[0]
  return i6424
}

Deserializers["HiddenNestObstacle"] = function (request, data, root) {
  var i6426 = root || request.c( 'HiddenNestObstacle' )
  var i6427 = data
  i6426.blockedMessage = i6427[0]
  i6426.bottomTolerance = i6427[1]
  i6426.settleTime = i6427[2]
  i6426.revealDuration = i6427[3]
  i6426.coverPart = i6427[4]
  return i6426
}

Deserializers["StoneNestObstacle"] = function (request, data, root) {
  var i6428 = root || request.c( 'StoneNestObstacle' )
  var i6429 = data
  i6428.stonePart = i6429[0]
  var i6431 = i6429[1]
  var i6430 = []
  for(var i = 0; i < i6431.length; i += 1) {
    i6430.push( i6431[i + 0] );
  }
  i6428.hiddenParts = i6430
  i6428.keepUpright = !!i6429[2]
  i6428.stoneMass = i6429[3]
  return i6428
}

Deserializers["BigNestObstacle"] = function (request, data, root) {
  var i6434 = root || request.c( 'BigNestObstacle' )
  var i6435 = data
  i6434.countTextPart = i6435[0]
  return i6434
}

Deserializers["HiddenBirdObstacle"] = function (request, data, root) {
  var i6436 = root || request.c( 'HiddenBirdObstacle' )
  var i6437 = data
  i6436.overlayPart = i6437[0]
  i6436.revealDuration = i6437[1]
  return i6436
}

Deserializers["BindBirdObstacle"] = function (request, data, root) {
  var i6438 = root || request.c( 'BindBirdObstacle' )
  var i6439 = data
  i6438.overlayPart = i6439[0]
  i6438.sortingOffset = i6439[1]
  i6438.clearDuration = i6439[2]
  return i6438
}

Deserializers["IceBirdObstacle"] = function (request, data, root) {
  var i6440 = root || request.c( 'IceBirdObstacle' )
  var i6441 = data
  i6440.blockedMessage = i6441[0]
  i6440.overlayPart = i6441[1]
  i6440.textPart = i6441[2]
  return i6440
}

Deserializers["TargetNestObstacle"] = function (request, data, root) {
  var i6442 = root || request.c( 'TargetNestObstacle' )
  var i6443 = data
  i6442.blockedMessage = i6443[0]
  i6442.revealDuration = i6443[1]
  i6442.overlayPart = i6443[2]
  i6442.iconPart = i6443[3]
  return i6442
}

Deserializers["Bird"] = function (request, data, root) {
  var i6444 = root || request.c( 'Bird' )
  var i6445 = data
  request.r(i6445[0], i6445[1], 0, i6444, 'Content')
  var i6447 = i6445[2]
  var i6446 = []
  for(var i = 0; i < i6447.length; i += 2) {
  request.r(i6447[i + 0], i6447[i + 1], 2, i6446, '')
  }
  i6444.trailParticles = i6446
  request.r(i6445[3], i6445[4], 0, i6444, '_skeletalAnimation')
  i6444._birdData = request.d('BirdData', i6445[5], i6444._birdData)
  i6444._moveDuration = i6445[6]
  i6444._slotScale = i6445[7]
  i6444._flightSpeed = i6445[8]
  i6444._flightJumpPower = i6445[9]
  i6444._flightJumpPowerPerUnit = i6445[10]
  i6444._sourceFacesRight = !!i6445[11]
  i6444._flightFacingDeadZone = i6445[12]
  i6444._landContactFallbackDelay = i6445[13]
  request.r(i6445[14], i6445[15], 0, i6444, '_collider')
  request.r(i6445[16], i6445[17], 0, i6444, '_skeletalRenderer')
  i6444._idleUpdateFps = i6445[18]
  i6444._freezeSpineInBubble = !!i6445[19]
  i6444._freezeSpineWhenSleeping = !!i6445[20]
  return i6444
}

Deserializers["BirdData"] = function (request, data, root) {
  var i6450 = root || request.c( 'BirdData' )
  var i6451 = data
  i6450.birdType = i6451[0]
  i6450.birdId = i6451[1]
  request.r(i6451[2], i6451[3], 0, i6450, 'spriteIcon')
  request.r(i6451[4], i6451[5], 0, i6450, 'skeletonDataAsset')
  i6450.skinName = i6451[6]
  request.r(i6451[7], i6451[8], 0, i6450, 'skeletonSprite')
  return i6450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i6452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i6453 = data
  i6452.usedByComposite = !!i6453[0]
  i6452.autoTiling = !!i6453[1]
  i6452.size = new pc.Vec2( i6453[2], i6453[3] )
  i6452.edgeRadius = i6453[4]
  i6452.enabled = !!i6453[5]
  i6452.isTrigger = !!i6453[6]
  i6452.usedByEffector = !!i6453[7]
  i6452.density = i6453[8]
  i6452.offset = new pc.Vec2( i6453[9], i6453[10] )
  request.r(i6453[11], i6453[12], 0, i6452, 'material')
  return i6452
}

Deserializers["BirdParts"] = function (request, data, root) {
  var i6454 = root || request.c( 'BirdParts' )
  var i6455 = data
  var i6457 = i6455[0]
  var i6456 = []
  for(var i = 0; i < i6457.length; i += 1) {
    i6456.push( request.d('BirdParts+Entry', i6457[i + 0]) );
  }
  i6454.parts = i6456
  return i6454
}

Deserializers["BirdParts+Entry"] = function (request, data, root) {
  var i6460 = root || request.c( 'BirdParts+Entry' )
  var i6461 = data
  i6460.key = i6461[0]
  request.r(i6461[1], i6461[2], 0, i6460, 'target')
  return i6460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i6462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i6463 = data
  request.r(i6463[0], i6463[1], 0, i6462, 'sharedMesh')
  return i6462
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i6464 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i6465 = data
  i6464.loop = !!i6465[0]
  i6464.timeScale = i6465[1]
  request.r(i6465[2], i6465[3], 0, i6464, 'skeletonDataAsset')
  i6464.initialSkinName = i6465[4]
  i6464.fixPrefabOverrideViaMeshFilter = i6465[5]
  i6464.initialFlipX = !!i6465[6]
  i6464.initialFlipY = !!i6465[7]
  i6464.updateWhenInvisible = i6465[8]
  i6464.zSpacing = i6465[9]
  i6464.useClipping = !!i6465[10]
  i6464.immutableTriangles = !!i6465[11]
  i6464.pmaVertexColors = !!i6465[12]
  i6464.clearStateOnDisable = !!i6465[13]
  i6464.tintBlack = !!i6465[14]
  i6464.singleSubmesh = !!i6465[15]
  i6464.fixDrawOrder = !!i6465[16]
  i6464.addNormals = !!i6465[17]
  i6464.calculateTangents = !!i6465[18]
  i6464.maskInteraction = i6465[19]
  i6464.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i6465[20], i6464.maskMaterials)
  i6464.disableRenderingOnOverride = !!i6465[21]
  i6464.updateTiming = i6465[22]
  i6464.unscaledTime = !!i6465[23]
  i6464._animationName = i6465[24]
  var i6467 = i6465[25]
  var i6466 = []
  for(var i = 0; i < i6467.length; i += 1) {
    i6466.push( i6467[i + 0] );
  }
  i6464.separatorSlotNames = i6466
  i6464.physicsPositionInheritanceFactor = new pc.Vec2( i6465[26], i6465[27] )
  i6464.physicsRotationInheritanceFactor = i6465[28]
  request.r(i6465[29], i6465[30], 0, i6464, 'physicsMovementRelativeTo')
  return i6464
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i6468 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i6469 = data
  var i6471 = i6469[0]
  var i6470 = []
  for(var i = 0; i < i6471.length; i += 2) {
  request.r(i6471[i + 0], i6471[i + 1], 2, i6470, '')
  }
  i6468.materialsMaskDisabled = i6470
  var i6473 = i6469[1]
  var i6472 = []
  for(var i = 0; i < i6473.length; i += 2) {
  request.r(i6473[i + 0], i6473[i + 1], 2, i6472, '')
  }
  i6468.materialsInsideMask = i6472
  var i6475 = i6469[2]
  var i6474 = []
  for(var i = 0; i < i6475.length; i += 2) {
  request.r(i6475[i + 0], i6475[i + 1], 2, i6474, '')
  }
  i6468.materialsOutsideMask = i6474
  return i6468
}

Deserializers["MagnetNestFx"] = function (request, data, root) {
  var i6478 = root || request.c( 'MagnetNestFx' )
  var i6479 = data
  i6478.appearDuration = i6479[0]
  i6478.startScaleMultiplier = i6479[1]
  i6478.endScaleMultiplier = i6479[2]
  i6478.vanishDuration = i6479[3]
  return i6478
}

Deserializers["ShuffleFX"] = function (request, data, root) {
  var i6480 = root || request.c( 'ShuffleFX' )
  var i6481 = data
  request.r(i6481[0], i6481[1], 0, i6480, 'fan')
  request.r(i6481[2], i6481[3], 0, i6480, 'fan_spin')
  i6480.appearDuration = i6481[4]
  i6480.spinDuration = i6481[5]
  i6480.disappearDuration = i6481[6]
  i6480.totalSpinAngle = i6481[7]
  i6480.blurThreshold = i6481[8]
  i6480.wobbleAngle = i6481[9]
  i6480.wobbleOffset = i6481[10]
  i6480.wobbleSpeed = i6481[11]
  i6480.sortingOrderOffset = i6481[12]
  return i6480
}

Deserializers["ParticlesBase"] = function (request, data, root) {
  var i6482 = root || request.c( 'ParticlesBase' )
  var i6483 = data
  i6482.effectType = i6483[0]
  request.r(i6483[1], i6483[2], 0, i6482, 'particles')
  var i6485 = i6483[3]
  var i6484 = []
  for(var i = 0; i < i6485.length; i += 2) {
  request.r(i6485[i + 0], i6485[i + 1], 2, i6484, '')
  }
  i6482.allParticles = i6484
  return i6482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i6486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i6487 = data
  i6486.name = i6487[0]
  i6486.atlasId = i6487[1]
  i6486.mipmapCount = i6487[2]
  i6486.hdr = !!i6487[3]
  i6486.size = i6487[4]
  i6486.anisoLevel = i6487[5]
  i6486.filterMode = i6487[6]
  var i6489 = i6487[7]
  var i6488 = []
  for(var i = 0; i < i6489.length; i += 4) {
    i6488.push( UnityEngine.Rect.MinMaxRect(i6489[i + 0], i6489[i + 1], i6489[i + 2], i6489[i + 3]) );
  }
  i6486.rects = i6488
  i6486.wrapU = i6487[8]
  i6486.wrapV = i6487[9]
  return i6486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6493 = data
  i6492.name = i6493[0]
  i6492.index = i6493[1]
  i6492.startup = !!i6493[2]
  return i6492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6495 = data
  i6494.aspect = i6495[0]
  i6494.orthographic = !!i6495[1]
  i6494.orthographicSize = i6495[2]
  i6494.backgroundColor = new pc.Color(i6495[3], i6495[4], i6495[5], i6495[6])
  i6494.nearClipPlane = i6495[7]
  i6494.farClipPlane = i6495[8]
  i6494.fieldOfView = i6495[9]
  i6494.depth = i6495[10]
  i6494.clearFlags = i6495[11]
  i6494.cullingMask = i6495[12]
  i6494.rect = i6495[13]
  request.r(i6495[14], i6495[15], 0, i6494, 'targetTexture')
  i6494.usePhysicalProperties = !!i6495[16]
  i6494.focalLength = i6495[17]
  i6494.sensorSize = new pc.Vec2( i6495[18], i6495[19] )
  i6494.lensShift = new pc.Vec2( i6495[20], i6495[21] )
  i6494.gateFit = i6495[22]
  i6494.commandBufferCount = i6495[23]
  i6494.cameraType = i6495[24]
  i6494.enabled = !!i6495[25]
  return i6494
}

Deserializers["BoardManager"] = function (request, data, root) {
  var i6496 = root || request.c( 'BoardManager' )
  var i6497 = data
  var i6499 = i6497[0]
  var i6498 = new (System.Collections.Generic.List$1(Bridge.ns('BubbleBase')))
  for(var i = 0; i < i6499.length; i += 2) {
  request.r(i6499[i + 0], i6499[i + 1], 1, i6498, '')
  }
  i6496.bubbleActive = i6498
  var i6501 = i6497[1]
  var i6500 = []
  for(var i = 0; i < i6501.length; i += 2) {
  request.r(i6501[i + 0], i6501[i + 1], 2, i6500, '')
  }
  i6496._bubblePrefabs = i6500
  var i6503 = i6497[2]
  var i6502 = []
  for(var i = 0; i < i6503.length; i += 2) {
  request.r(i6503[i + 0], i6503[i + 1], 2, i6502, '')
  }
  i6496._spawnPoints = i6502
  request.r(i6497[3], i6497[4], 0, i6496, '_waterSurface')
  request.r(i6497[5], i6497[6], 0, i6496, '_bubbleParent')
  request.r(i6497[7], i6497[8], 0, i6496, '_magnetGatherPoint')
  i6496._surfaceTolerance = i6497[9]
  request.r(i6497[10], i6497[11], 0, i6496, '_wallsParent')
  request.r(i6497[12], i6497[13], 0, i6496, '_cloude')
  request.r(i6497[14], i6497[15], 0, i6496, '_bottomCollider')
  request.r(i6497[16], i6497[17], 0, i6496, '_alignmentCamera')
  i6496._horizontalSpawnJitter = i6497[18]
  i6496._inwardImpulseMin = i6497[19]
  i6496._inwardImpulseMax = i6497[20]
  i6496._initialSpawnCount = i6497[21]
  i6496._initialSpawnInterval = i6497[22]
  i6496._checkInterval = i6497[23]
  i6496._spawnInterval = i6497[24]
  i6496._deadlockCheckDelay = i6497[25]
  i6496._settleSpeed = i6497[26]
  i6496._settleTime = i6497[27]
  i6496._settleTimeout = i6497[28]
  request.r(i6497[29], i6497[30], 0, i6496, '_boxBird')
  var i6505 = i6497[31]
  var i6504 = []
  for(var i = 0; i < i6505.length; i += 2) {
  request.r(i6505[i + 0], i6505[i + 1], 2, i6504, '')
  }
  i6496._SpriteBoxBirds = i6504
  return i6496
}

Deserializers["TopContainer"] = function (request, data, root) {
  var i6512 = root || request.c( 'TopContainer' )
  var i6513 = data
  i6512.animatingCount = i6513[0]
  request.r(i6513[1], i6513[2], 0, i6512, 'top')
  request.r(i6513[3], i6513[4], 0, i6512, 'dockContainer')
  request.r(i6513[5], i6513[6], 0, i6512, 'slotContainer')
  request.r(i6513[7], i6513[8], 0, i6512, '_countComplateText')
  request.r(i6513[9], i6513[10], 0, i6512, 'outsideBirdHolder')
  request.r(i6513[11], i6513[12], 0, i6512, 'fitCamera')
  i6512.referenceResolution = new pc.Vec2( i6513[13], i6513[14] )
  i6512.referenceOrthographicSize = i6513[15]
  i6512.cameraFitPadding = i6513[16]
  i6512.allowCameraFitUpscale = !!i6513[17]
  return i6512
}

Deserializers["DockContainer"] = function (request, data, root) {
  var i6514 = root || request.c( 'DockContainer' )
  var i6515 = data
  i6514.dockCount = i6515[0]
  i6514.activeOrderCount = i6515[1]
  var i6517 = i6515[2]
  var i6516 = new (System.Collections.Generic.List$1(Bridge.ns('BirdDock')))
  for(var i = 0; i < i6517.length; i += 2) {
  request.r(i6517[i + 0], i6517[i + 1], 1, i6516, '')
  }
  i6514.dockSlot = i6516
  request.r(i6515[3], i6515[4], 0, i6514, 'tileDockPrefab')
  return i6514
}

Deserializers["TimeNestController"] = function (request, data, root) {
  var i6520 = root || request.c( 'TimeNestController' )
  var i6521 = data
  return i6520
}

Deserializers["BirdDock"] = function (request, data, root) {
  var i6522 = root || request.c( 'BirdDock' )
  var i6523 = data
  i6522.tileType = i6523[0]
  i6522.birdId = i6523[1]
  i6522.isLock = !!i6523[2]
  i6522.isAnim = !!i6523[3]
  request.r(i6523[4], i6523[5], 0, i6522, 'visual')
  var i6525 = i6523[6]
  var i6524 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i6525.length; i += 2) {
  request.r(i6525[i + 0], i6525[i + 1], 1, i6524, '')
  }
  i6522.points = i6524
  request.r(i6523[7], i6523[8], 0, i6522, '_targetSprite')
  request.r(i6523[9], i6523[10], 0, i6522, '_amountText')
  request.r(i6523[11], i6523[12], 0, i6522, 'addUI')
  request.r(i6523[13], i6523[14], 0, i6522, 'orderUI')
  i6522.Max = i6523[15]
  return i6522
}

Deserializers["DockCountdown"] = function (request, data, root) {
  var i6528 = root || request.c( 'DockCountdown' )
  var i6529 = data
  request.r(i6529[0], i6529[1], 0, i6528, 'countdownRoot')
  request.r(i6529[2], i6529[3], 0, i6528, 'timeText')
  i6528.warningThreshold = i6529[4]
  i6528.warningColor = new pc.Color(i6529[5], i6529[6], i6529[7], i6529[8])
  var i6531 = i6529[9]
  var i6530 = []
  for(var i = 0; i < i6531.length; i += 2) {
  request.r(i6531[i + 0], i6531[i + 1], 2, i6530, '')
  }
  i6528.warningObjects = i6530
  return i6528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i6534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i6535 = data
  i6534.frontSortingLayerID = i6535[0]
  i6534.frontSortingOrder = i6535[1]
  i6534.backSortingLayerID = i6535[2]
  i6534.backSortingOrder = i6535[3]
  i6534.alphaCutoff = i6535[4]
  request.r(i6535[5], i6535[6], 0, i6534, 'sprite')
  i6534.tileMode = i6535[7]
  i6534.isCustomRangeActive = !!i6535[8]
  i6534.spriteSortPoint = i6535[9]
  i6534.enabled = !!i6535[10]
  request.r(i6535[11], i6535[12], 0, i6534, 'sharedMaterial')
  var i6537 = i6535[13]
  var i6536 = []
  for(var i = 0; i < i6537.length; i += 2) {
  request.r(i6537[i + 0], i6537[i + 1], 2, i6536, '')
  }
  i6534.sharedMaterials = i6536
  i6534.receiveShadows = !!i6535[14]
  i6534.shadowCastingMode = i6535[15]
  i6534.sortingLayerID = i6535[16]
  i6534.sortingOrder = i6535[17]
  i6534.lightmapIndex = i6535[18]
  i6534.lightmapSceneIndex = i6535[19]
  i6534.lightmapScaleOffset = new pc.Vec4( i6535[20], i6535[21], i6535[22], i6535[23] )
  i6534.lightProbeUsage = i6535[24]
  i6534.reflectionProbeUsage = i6535[25]
  return i6534
}

Deserializers["SlotContainer"] = function (request, data, root) {
  var i6538 = root || request.c( 'SlotContainer' )
  var i6539 = data
  var i6541 = i6539[0]
  var i6540 = new (System.Collections.Generic.List$1(Bridge.ns('BirdSlot')))
  for(var i = 0; i < i6541.length; i += 2) {
  request.r(i6541[i + 0], i6541[i + 1], 1, i6540, '')
  }
  i6538.tileSlots = i6540
  request.r(i6539[1], i6539[2], 0, i6538, 'ExtraSlotPos')
  request.r(i6539[3], i6539[4], 0, i6538, 'tile')
  request.r(i6539[5], i6539[6], 0, i6538, 'branchWave')
  return i6538
}

Deserializers["BranchWave"] = function (request, data, root) {
  var i6544 = root || request.c( 'BranchWave' )
  var i6545 = data
  i6544.amplitude = i6545[0]
  i6544.speed = i6545[1]
  i6544.frequency = i6545[2]
  i6544.damping = i6545[3]
  i6544.falloff = i6545[4]
  i6544.riderTiltScale = i6545[5]
  return i6544
}

Deserializers["BirdSlot"] = function (request, data, root) {
  var i6546 = root || request.c( 'BirdSlot' )
  var i6547 = data
  i6546.isAnim = !!i6547[0]
  request.r(i6547[1], i6547[2], 0, i6546, 'warningSprite')
  return i6546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i6548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i6549 = data
  i6548.sortingLayerIndex = i6549[0]
  i6548.sortingOrder = i6549[1]
  i6548.sortingLayerName = i6549[2]
  i6548.enabled = !!i6549[3]
  return i6548
}

Deserializers["OutsideBirdHolder"] = function (request, data, root) {
  var i6550 = root || request.c( 'OutsideBirdHolder' )
  var i6551 = data
  request.r(i6551[0], i6551[1], 0, i6550, 'm_TxtCount')
  request.r(i6551[2], i6551[3], 0, i6550, 'm_Canvas')
  request.r(i6551[4], i6551[5], 0, i6550, 'm_ObjContent')
  request.r(i6551[6], i6551[7], 0, i6550, 'm_OutsideBirdPrefab')
  request.r(i6551[8], i6551[9], 0, i6550, 'm_NestVisual')
  i6550.m_ShakeDuration = i6551[10]
  i6550.m_ShakeScale = i6551[11]
  i6550.m_ShakeRotation = i6551[12]
  return i6550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6553 = data
  i6552.planeDistance = i6553[0]
  i6552.referencePixelsPerUnit = i6553[1]
  i6552.isFallbackOverlay = !!i6553[2]
  i6552.renderMode = i6553[3]
  i6552.renderOrder = i6553[4]
  i6552.sortingLayerName = i6553[5]
  i6552.sortingOrder = i6553[6]
  i6552.scaleFactor = i6553[7]
  request.r(i6553[8], i6553[9], 0, i6552, 'worldCamera')
  i6552.overrideSorting = !!i6553[10]
  i6552.pixelPerfect = !!i6553[11]
  i6552.targetDisplay = i6553[12]
  i6552.overridePixelPerfect = !!i6553[13]
  i6552.enabled = !!i6553[14]
  return i6552
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i6554 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i6555 = data
  i6554.m_StartCorner = i6555[0]
  i6554.m_StartAxis = i6555[1]
  i6554.m_CellSize = new pc.Vec2( i6555[2], i6555[3] )
  i6554.m_Spacing = new pc.Vec2( i6555[4], i6555[5] )
  i6554.m_Constraint = i6555[6]
  i6554.m_ConstraintCount = i6555[7]
  i6554.m_Padding = UnityEngine.RectOffset.FromPaddings(i6555[8], i6555[9], i6555[10], i6555[11])
  i6554.m_ChildAlignment = i6555[12]
  return i6554
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i6556 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i6557 = data
  i6556.m_HorizontalFit = i6557[0]
  i6556.m_VerticalFit = i6557[1]
  return i6556
}

Deserializers["SpriteFitScreenHeight"] = function (request, data, root) {
  var i6558 = root || request.c( 'SpriteFitScreenHeight' )
  var i6559 = data
  request.r(i6559[0], i6559[1], 0, i6558, 'm_Camera')
  i6558.m_Overscan = i6559[2]
  return i6558
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i6560 = root || request.c( 'LevelManager' )
  var i6561 = data
  request.r(i6561[0], i6561[1], 0, i6560, 'birdPrefab')
  request.r(i6561[2], i6561[3], 0, i6560, 'birdDataSO')
  request.r(i6561[4], i6561[5], 0, i6560, 'obstacleConfigSO')
  request.r(i6561[6], i6561[7], 0, i6560, 'boardManager')
  request.r(i6561[8], i6561[9], 0, i6560, 'levelDifficultyFile')
  i6560.totalLevelCount = i6561[10]
  i6560.playableLevel = i6561[11]
  var i6563 = i6561[12]
  var i6562 = []
  for(var i = 0; i < i6563.length; i += 1) {
    i6562.push( request.d('LevelManager+LevelSet', i6563[i + 0]) );
  }
  i6560.levelSets = i6562
  return i6560
}

Deserializers["LevelManager+LevelSet"] = function (request, data, root) {
  var i6566 = root || request.c( 'LevelManager+LevelSet' )
  var i6567 = data
  i6566.name = i6567[0]
  request.r(i6567[1], i6567[2], 0, i6566, 'levelTableFile')
  var i6569 = i6567[3]
  var i6568 = []
  for(var i = 0; i < i6569.length; i += 2) {
  request.r(i6569[i + 0], i6569[i + 1], 2, i6568, '')
  }
  i6566.bubbleFiles = i6568
  return i6566
}

Deserializers["ControllerManager"] = function (request, data, root) {
  var i6572 = root || request.c( 'ControllerManager' )
  var i6573 = data
  i6572.layerMask = UnityEngine.LayerMask.FromIntegerValue( i6573[0] )
  i6572.layerMaskBlocker = UnityEngine.LayerMask.FromIntegerValue( i6573[1] )
  i6572.layerDockMask = UnityEngine.LayerMask.FromIntegerValue( i6573[2] )
  return i6572
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6574 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6575 = data
  request.r(i6575[0], i6575[1], 0, i6574, 'm_FirstSelected')
  i6574.m_sendNavigationEvents = !!i6575[2]
  i6574.m_DragThreshold = i6575[3]
  return i6574
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6576 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6577 = data
  i6576.m_HorizontalAxis = i6577[0]
  i6576.m_VerticalAxis = i6577[1]
  i6576.m_SubmitButton = i6577[2]
  i6576.m_CancelButton = i6577[3]
  i6576.m_InputActionsPerSecond = i6577[4]
  i6576.m_RepeatDelay = i6577[5]
  i6576.m_ForceModuleActive = !!i6577[6]
  i6576.m_SendPointerHoverToParent = !!i6577[7]
  return i6576
}

Deserializers["BoosterManager"] = function (request, data, root) {
  var i6578 = root || request.c( 'BoosterManager' )
  var i6579 = data
  i6578.OnGlobalStateChanged = request.d('System.Action', i6579[0], i6578.OnGlobalStateChanged)
  request.r(i6579[1], i6579[2], 0, i6578, 'MagnetNestFxPrefab')
  request.r(i6579[3], i6579[4], 0, i6578, '_shuffleFXPrefab')
  request.r(i6579[5], i6579[6], 0, i6578, 'ClearHitFxPrefab')
  i6578.clearHitFxLifetime = i6579[7]
  i6578.shuffleSuckDuration = i6579[8]
  i6578.shuffleSpreadDuration = i6579[9]
  i6578.shuffleStagger = i6579[10]
  i6578.shuffleBirdSortingOrder = i6579[11]
  request.r(i6579[12], i6579[13], 0, i6578, 'boosterConfig')
  return i6578
}

Deserializers["System.Action"] = function (request, data, root) {
  var i6580 = root || request.c( 'System.Action' )
  var i6581 = data
  return i6580
}

Deserializers["GameManager"] = function (request, data, root) {
  var i6582 = root || request.c( 'GameManager' )
  var i6583 = data
  i6582.currentGameState = i6583[0]
  i6582.isTestMode = !!i6583[1]
  return i6582
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i6584 = root || request.c( 'SoundManager' )
  var i6585 = data
  request.r(i6585[0], i6585[1], 0, i6584, 'musicSource')
  i6584.resultMusicVolumeMultiplier = i6585[2]
  i6584.ingameMusicVolume = i6585[3]
  request.r(i6585[4], i6585[5], 0, i6584, 'parentSFX')
  i6584.poolSize = i6585[6]
  i6584.maxLoopingPerClip = i6585[7]
  var i6587 = i6585[8]
  var i6586 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i6587.length; i += 2) {
  request.r(i6587[i + 0], i6587[i + 1], 1, i6586, '')
  }
  i6584.musicClips = i6586
  var i6589 = i6585[9]
  var i6588 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i6589.length; i += 2) {
  request.r(i6589[i + 0], i6589[i + 1], 1, i6588, '')
  }
  i6584.sfxClips = i6588
  i6584.importantVolume = i6585[10]
  i6584.normalVolume = i6585[11]
  i6584.minorVolume = i6585[12]
  i6584.smallVolume = i6585[13]
  return i6584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6593 = data
  request.r(i6593[0], i6593[1], 0, i6592, 'clip')
  request.r(i6593[2], i6593[3], 0, i6592, 'outputAudioMixerGroup')
  i6592.playOnAwake = !!i6593[4]
  i6592.loop = !!i6593[5]
  i6592.time = i6593[6]
  i6592.volume = i6593[7]
  i6592.pitch = i6593[8]
  i6592.enabled = !!i6593[9]
  return i6592
}

Deserializers["ParticlesManager"] = function (request, data, root) {
  var i6594 = root || request.c( 'ParticlesManager' )
  var i6595 = data
  request.r(i6595[0], i6595[1], 0, i6594, 'set')
  request.r(i6595[2], i6595[3], 0, i6594, 'target')
  request.r(i6595[4], i6595[5], 0, i6594, 'startTarget')
  var i6597 = i6595[6]
  var i6596 = []
  for(var i = 0; i < i6597.length; i += 2) {
  request.r(i6597[i + 0], i6597[i + 1], 2, i6596, '')
  }
  i6594.particleEffectData = i6596
  request.r(i6595[7], i6595[8], 0, i6594, 'coinPrefab')
  i6594.spreadRange = i6595[9]
  i6594.spreadRangeOnSum = i6595[10]
  i6594.moveDuration = i6595[11]
  i6594.magMut = i6595[12]
  i6594.toptopOGScale = i6595[13]
  i6594.sum = i6595[14]
  return i6594
}

Deserializers["GameData"] = function (request, data, root) {
  var i6600 = root || request.c( 'GameData' )
  var i6601 = data
  var i6603 = i6601[0]
  var i6602 = []
  for(var i = 0; i < i6603.length; i += 4) {
    i6602.push( new pc.Color(i6603[i + 0], i6603[i + 1], i6603[i + 2], i6603[i + 3]) );
  }
  i6600.birdColors = i6602
  return i6600
}

Deserializers["ComboManager"] = function (request, data, root) {
  var i6606 = root || request.c( 'ComboManager' )
  var i6607 = data
  i6606.OnTimerComplete = request.d('System.Action', i6607[0], i6606.OnTimerComplete)
  i6606.comboTime = i6607[1]
  return i6606
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6608 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6609 = data
  i6608.m_UiScaleMode = i6609[0]
  i6608.m_ReferencePixelsPerUnit = i6609[1]
  i6608.m_ScaleFactor = i6609[2]
  i6608.m_ReferenceResolution = new pc.Vec2( i6609[3], i6609[4] )
  i6608.m_ScreenMatchMode = i6609[5]
  i6608.m_MatchWidthOrHeight = i6609[6]
  i6608.m_PhysicalUnit = i6609[7]
  i6608.m_FallbackScreenDPI = i6609[8]
  i6608.m_DefaultSpriteDPI = i6609[9]
  i6608.m_DynamicPixelsPerUnit = i6609[10]
  i6608.m_PresetInfoIsWorld = !!i6609[11]
  return i6608
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6610 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6611 = data
  i6610.m_IgnoreReversedGraphics = !!i6611[0]
  i6610.m_BlockingObjects = i6611[1]
  i6610.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6611[2] )
  return i6610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i6612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i6613 = data
  i6612.m_Alpha = i6613[0]
  i6612.m_Interactable = !!i6613[1]
  i6612.m_BlocksRaycasts = !!i6613[2]
  i6612.m_IgnoreParentGroups = !!i6613[3]
  i6612.enabled = !!i6613[4]
  return i6612
}

Deserializers["GameplayUI"] = function (request, data, root) {
  var i6614 = root || request.c( 'GameplayUI' )
  var i6615 = data
  request.r(i6615[0], i6615[1], 0, i6614, 'warningHard')
  request.r(i6615[2], i6615[3], 0, i6614, 'warningExtreme')
  request.r(i6615[4], i6615[5], 0, i6614, 'canvaG')
  request.r(i6615[6], i6615[7], 0, i6614, 'imgPanel')
  i6614.IsDestroyOnClose = !!i6615[8]
  i6614.isFadeIn = !!i6615[9]
  i6614.isFadeOut = !!i6615[10]
  i6614.isSoundOpen = !!i6615[11]
  i6614.OnOpen = request.d('System.Action', i6615[12], i6614.OnOpen)
  i6614.OnClose = request.d('System.Action', i6615[13], i6614.OnClose)
  i6614.OnFadeIn_Complete = request.d('System.Action', i6615[14], i6614.OnFadeIn_Complete)
  i6614.OnFadeOut_Complete = request.d('System.Action', i6615[15], i6614.OnFadeOut_Complete)
  request.r(i6615[16], i6615[17], 0, i6614, 'contentFadeIO')
  request.r(i6615[18], i6615[19], 0, i6614, 'levelText')
  request.r(i6615[20], i6615[21], 0, i6614, 'settingButton')
  request.r(i6615[22], i6615[23], 0, i6614, 'outButton')
  request.r(i6615[24], i6615[25], 0, i6614, 'musicButton')
  request.r(i6615[26], i6615[27], 0, i6614, 'soundButton')
  request.r(i6615[28], i6615[29], 0, i6614, 'happticButton')
  request.r(i6615[30], i6615[31], 0, i6614, 'replayButton')
  request.r(i6615[32], i6615[33], 0, i6614, 'canlelSettingButton')
  var i6617 = i6615[34]
  var i6616 = []
  for(var i = 0; i < i6617.length; i += 2) {
  request.r(i6617[i + 0], i6617[i + 1], 2, i6616, '')
  }
  i6614.boosterItemUIs = i6616
  request.r(i6615[35], i6615[36], 0, i6614, 'musicCrossGameObject')
  request.r(i6615[37], i6615[38], 0, i6614, 'soundCrossGameObject')
  request.r(i6615[39], i6615[40], 0, i6614, 'happticCrossGameObject')
  request.r(i6615[41], i6615[42], 0, i6614, 'ContentBottomTransform')
  request.r(i6615[43], i6615[44], 0, i6614, 'pointBottom')
  request.r(i6615[45], i6615[46], 0, i6614, 'tagLevelImage')
  request.r(i6615[47], i6615[48], 0, i6614, 'tagSettingImage')
  request.r(i6615[49], i6615[50], 0, i6614, 'tagSetting1Image')
  request.r(i6615[51], i6615[52], 0, i6614, 'tagSetting2Image')
  var i6619 = i6615[53]
  var i6618 = []
  for(var i = 0; i < i6619.length; i += 2) {
  request.r(i6619[i + 0], i6619[i + 1], 2, i6618, '')
  }
  i6614.tagLevelSprites = i6618
  var i6621 = i6615[54]
  var i6620 = []
  for(var i = 0; i < i6621.length; i += 2) {
  request.r(i6621[i + 0], i6621[i + 1], 2, i6620, '')
  }
  i6614.tagSettingSprites = i6620
  var i6623 = i6615[55]
  var i6622 = []
  for(var i = 0; i < i6623.length; i += 2) {
  request.r(i6623[i + 0], i6623[i + 1], 2, i6622, '')
  }
  i6614.tagSetting1Sprites = i6622
  var i6625 = i6615[56]
  var i6624 = []
  for(var i = 0; i < i6625.length; i += 2) {
  request.r(i6625[i + 0], i6625[i + 1], 2, i6624, '')
  }
  i6614.tagSetting2Sprites = i6624
  request.r(i6615[57], i6615[58], 0, i6614, 'PanelPreWin')
  request.r(i6615[59], i6615[60], 0, i6614, 'textPanelWinTransform')
  request.r(i6615[61], i6615[62], 0, i6614, 'winPulseImage')
  i6614.winPulseScale = i6615[63]
  i6614.winPulseDuration = i6615[64]
  request.r(i6615[65], i6615[66], 0, i6614, 'btnPreWinContinue')
  request.r(i6615[67], i6615[68], 0, i6614, 'btnPlayAgain')
  i6614.preWinTapDelay = i6615[69]
  request.r(i6615[70], i6615[71], 0, i6614, 'clearSlingshot')
  i6614.slingshotPopDuration = i6615[72]
  request.r(i6615[73], i6615[74], 0, i6614, 'settingAnimator')
  request.r(i6615[75], i6615[76], 0, i6614, 'loseUI')
  return i6614
}

Deserializers["Crystal.SafeArea"] = function (request, data, root) {
  var i6628 = root || request.c( 'Crystal.SafeArea' )
  var i6629 = data
  i6628.ConformX = !!i6629[0]
  i6628.ConformY = !!i6629[1]
  i6628.Logging = !!i6629[2]
  return i6628
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i6630 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i6631 = data
  i6630.m_Spacing = i6631[0]
  i6630.m_ChildForceExpandWidth = !!i6631[1]
  i6630.m_ChildForceExpandHeight = !!i6631[2]
  i6630.m_ChildControlWidth = !!i6631[3]
  i6630.m_ChildControlHeight = !!i6631[4]
  i6630.m_ChildScaleWidth = !!i6631[5]
  i6630.m_ChildScaleHeight = !!i6631[6]
  i6630.m_ReverseArrangement = !!i6631[7]
  i6630.m_Padding = UnityEngine.RectOffset.FromPaddings(i6631[8], i6631[9], i6631[10], i6631[11])
  i6630.m_ChildAlignment = i6631[12]
  return i6630
}

Deserializers["BoosterItemUI"] = function (request, data, root) {
  var i6632 = root || request.c( 'BoosterItemUI' )
  var i6633 = data
  i6632.type = i6633[0]
  request.r(i6633[1], i6633[2], 0, i6632, 'icon')
  request.r(i6633[3], i6633[4], 0, i6632, 'button')
  request.r(i6633[5], i6633[6], 0, i6632, 'amountObject')
  request.r(i6633[7], i6633[8], 0, i6632, 'addObject')
  request.r(i6633[9], i6633[10], 0, i6632, 'freeObject')
  request.r(i6633[11], i6633[12], 0, i6632, 'amountText')
  request.r(i6633[13], i6633[14], 0, i6632, 'lockObj')
  request.r(i6633[15], i6633[16], 0, i6632, 'levelText')
  request.r(i6633[17], i6633[18], 0, i6632, 'priceText')
  return i6632
}

Deserializers["ButtonScaleUI"] = function (request, data, root) {
  var i6634 = root || request.c( 'ButtonScaleUI' )
  var i6635 = data
  i6634.scaleDuration = i6635[0]
  i6634.action = request.d('UnityEngine.Events.UnityEvent', i6635[1], i6634.action)
  request.r(i6635[2], i6635[3], 0, i6634, 'transformToScale')
  i6634.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6635[4], i6634.m_OnClick)
  i6634.m_Navigation = request.d('UnityEngine.UI.Navigation', i6635[5], i6634.m_Navigation)
  i6634.m_Transition = i6635[6]
  i6634.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6635[7], i6634.m_Colors)
  i6634.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6635[8], i6634.m_SpriteState)
  i6634.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6635[9], i6634.m_AnimationTriggers)
  i6634.m_Interactable = !!i6635[10]
  request.r(i6635[11], i6635[12], 0, i6634, 'm_TargetGraphic')
  return i6634
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i6636 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i6637 = data
  i6636.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6637[0], i6636.m_PersistentCalls)
  return i6636
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6638 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6639 = data
  var i6641 = i6639[0]
  var i6640 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6641.length; i += 1) {
    i6640.add(request.d('UnityEngine.Events.PersistentCall', i6641[i + 0]));
  }
  i6638.m_Calls = i6640
  return i6638
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6644 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6645 = data
  request.r(i6645[0], i6645[1], 0, i6644, 'm_Target')
  i6644.m_TargetAssemblyTypeName = i6645[2]
  i6644.m_MethodName = i6645[3]
  i6644.m_Mode = i6645[4]
  i6644.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6645[5], i6644.m_Arguments)
  i6644.m_CallState = i6645[6]
  return i6644
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6646 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6647 = data
  i6646.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6647[0], i6646.m_PersistentCalls)
  return i6646
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6648 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6649 = data
  i6648.m_Mode = i6649[0]
  i6648.m_WrapAround = !!i6649[1]
  request.r(i6649[2], i6649[3], 0, i6648, 'm_SelectOnUp')
  request.r(i6649[4], i6649[5], 0, i6648, 'm_SelectOnDown')
  request.r(i6649[6], i6649[7], 0, i6648, 'm_SelectOnLeft')
  request.r(i6649[8], i6649[9], 0, i6648, 'm_SelectOnRight')
  return i6648
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6650 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6651 = data
  i6650.m_NormalColor = new pc.Color(i6651[0], i6651[1], i6651[2], i6651[3])
  i6650.m_HighlightedColor = new pc.Color(i6651[4], i6651[5], i6651[6], i6651[7])
  i6650.m_PressedColor = new pc.Color(i6651[8], i6651[9], i6651[10], i6651[11])
  i6650.m_SelectedColor = new pc.Color(i6651[12], i6651[13], i6651[14], i6651[15])
  i6650.m_DisabledColor = new pc.Color(i6651[16], i6651[17], i6651[18], i6651[19])
  i6650.m_ColorMultiplier = i6651[20]
  i6650.m_FadeDuration = i6651[21]
  return i6650
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6652 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6653 = data
  request.r(i6653[0], i6653[1], 0, i6652, 'm_HighlightedSprite')
  request.r(i6653[2], i6653[3], 0, i6652, 'm_PressedSprite')
  request.r(i6653[4], i6653[5], 0, i6652, 'm_SelectedSprite')
  request.r(i6653[6], i6653[7], 0, i6652, 'm_DisabledSprite')
  return i6652
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6654 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6655 = data
  i6654.m_NormalTrigger = i6655[0]
  i6654.m_HighlightedTrigger = i6655[1]
  i6654.m_PressedTrigger = i6655[2]
  i6654.m_SelectedTrigger = i6655[3]
  i6654.m_DisabledTrigger = i6655[4]
  return i6654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i6656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i6657 = data
  request.r(i6657[0], i6657[1], 0, i6656, 'animatorController')
  request.r(i6657[2], i6657[3], 0, i6656, 'avatar')
  i6656.updateMode = i6657[4]
  i6656.hasTransformHierarchy = !!i6657[5]
  i6656.applyRootMotion = !!i6657[6]
  var i6659 = i6657[7]
  var i6658 = []
  for(var i = 0; i < i6659.length; i += 2) {
  request.r(i6659[i + 0], i6659[i + 1], 2, i6658, '')
  }
  i6656.humanBones = i6658
  i6656.enabled = !!i6657[8]
  return i6656
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6660 = root || request.c( 'UnityEngine.UI.Button' )
  var i6661 = data
  i6660.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6661[0], i6660.m_OnClick)
  i6660.m_Navigation = request.d('UnityEngine.UI.Navigation', i6661[1], i6660.m_Navigation)
  i6660.m_Transition = i6661[2]
  i6660.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6661[3], i6660.m_Colors)
  i6660.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6661[4], i6660.m_SpriteState)
  i6660.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6661[5], i6660.m_AnimationTriggers)
  i6660.m_Interactable = !!i6661[6]
  request.r(i6661[7], i6661[8], 0, i6660, 'm_TargetGraphic')
  return i6660
}

Deserializers["SlingshotAnimator"] = function (request, data, root) {
  var i6662 = root || request.c( 'SlingshotAnimator' )
  var i6663 = data
  i6662.useUnscaledTime = !!i6663[0]
  i6662.speed = i6663[1]
  i6662.flightTime = i6663[2]
  i6662.reloadDelay = i6663[3]
  request.r(i6663[4], i6663[5], 0, i6662, 'animJson')
  var i6665 = i6663[6]
  var i6664 = []
  for(var i = 0; i < i6665.length; i += 2) {
  request.r(i6665[i + 0], i6665[i + 1], 2, i6664, '')
  }
  i6662.sprites = i6664
  return i6662
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i6666 = root || request.c( 'UnityEngine.UI.Mask' )
  var i6667 = data
  i6666.m_ShowMaskGraphic = !!i6667[0]
  return i6666
}

Deserializers["ColorBirdLogoAnimator"] = function (request, data, root) {
  var i6668 = root || request.c( 'ColorBirdLogoAnimator' )
  var i6669 = data
  i6668.playOnEnable = !!i6669[0]
  i6668.useUnscaledTime = !!i6669[1]
  i6668.playIdle = !!i6669[2]
  i6668.skipIntro = !!i6669[3]
  i6668.loopIntroOutro = !!i6669[4]
  i6668.loopHoldTime = i6669[5]
  i6668.speed = i6669[6]
  request.r(i6669[7], i6669[8], 0, i6668, 'animJson')
  var i6671 = i6669[9]
  var i6670 = []
  for(var i = 0; i < i6671.length; i += 2) {
  request.r(i6671[i + 0], i6671[i + 1], 2, i6670, '')
  }
  i6668.layerSprites = i6670
  return i6668
}

Deserializers["LoseUI"] = function (request, data, root) {
  var i6672 = root || request.c( 'LoseUI' )
  var i6673 = data
  request.r(i6673[0], i6673[1], 0, i6672, 'canvaG')
  request.r(i6673[2], i6673[3], 0, i6672, 'imgPanel')
  i6672.IsDestroyOnClose = !!i6673[4]
  i6672.isFadeIn = !!i6673[5]
  i6672.isFadeOut = !!i6673[6]
  i6672.isSoundOpen = !!i6673[7]
  i6672.OnOpen = request.d('System.Action', i6673[8], i6672.OnOpen)
  i6672.OnClose = request.d('System.Action', i6673[9], i6672.OnClose)
  i6672.OnFadeIn_Complete = request.d('System.Action', i6673[10], i6672.OnFadeIn_Complete)
  i6672.OnFadeOut_Complete = request.d('System.Action', i6673[11], i6672.OnFadeOut_Complete)
  request.r(i6673[12], i6673[13], 0, i6672, 'contentFadeIO')
  request.r(i6673[14], i6673[15], 0, i6672, 'buttonFullScreen')
  request.r(i6673[16], i6673[17], 0, i6672, 'buttonRetry')
  request.r(i6673[18], i6673[19], 0, i6672, 'losePulseImage')
  i6672.losePulseScale = i6673[20]
  i6672.losePulseDuration = i6673[21]
  return i6672
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i6674 = root || request.c( 'UnityEngine.UI.Text' )
  var i6675 = data
  i6674.m_FontData = request.d('UnityEngine.UI.FontData', i6675[0], i6674.m_FontData)
  i6674.m_Text = i6675[1]
  request.r(i6675[2], i6675[3], 0, i6674, 'm_Material')
  i6674.m_Maskable = !!i6675[4]
  i6674.m_Color = new pc.Color(i6675[5], i6675[6], i6675[7], i6675[8])
  i6674.m_RaycastTarget = !!i6675[9]
  i6674.m_RaycastPadding = new pc.Vec4( i6675[10], i6675[11], i6675[12], i6675[13] )
  return i6674
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i6676 = root || request.c( 'UnityEngine.UI.FontData' )
  var i6677 = data
  request.r(i6677[0], i6677[1], 0, i6676, 'm_Font')
  i6676.m_FontSize = i6677[2]
  i6676.m_FontStyle = i6677[3]
  i6676.m_BestFit = !!i6677[4]
  i6676.m_MinSize = i6677[5]
  i6676.m_MaxSize = i6677[6]
  i6676.m_Alignment = i6677[7]
  i6676.m_AlignByGeometry = !!i6677[8]
  i6676.m_RichText = !!i6677[9]
  i6676.m_HorizontalOverflow = i6677[10]
  i6676.m_VerticalOverflow = i6677[11]
  i6676.m_LineSpacing = i6677[12]
  return i6676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6679 = data
  i6678.ambientIntensity = i6679[0]
  i6678.reflectionIntensity = i6679[1]
  i6678.ambientMode = i6679[2]
  i6678.ambientLight = new pc.Color(i6679[3], i6679[4], i6679[5], i6679[6])
  i6678.ambientSkyColor = new pc.Color(i6679[7], i6679[8], i6679[9], i6679[10])
  i6678.ambientGroundColor = new pc.Color(i6679[11], i6679[12], i6679[13], i6679[14])
  i6678.ambientEquatorColor = new pc.Color(i6679[15], i6679[16], i6679[17], i6679[18])
  i6678.fogColor = new pc.Color(i6679[19], i6679[20], i6679[21], i6679[22])
  i6678.fogEndDistance = i6679[23]
  i6678.fogStartDistance = i6679[24]
  i6678.fogDensity = i6679[25]
  i6678.fog = !!i6679[26]
  request.r(i6679[27], i6679[28], 0, i6678, 'skybox')
  i6678.fogMode = i6679[29]
  var i6681 = i6679[30]
  var i6680 = []
  for(var i = 0; i < i6681.length; i += 1) {
    i6680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6681[i + 0]) );
  }
  i6678.lightmaps = i6680
  i6678.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6679[31], i6678.lightProbes)
  i6678.lightmapsMode = i6679[32]
  i6678.mixedBakeMode = i6679[33]
  i6678.environmentLightingMode = i6679[34]
  i6678.ambientProbe = new pc.SphericalHarmonicsL2(i6679[35])
  request.r(i6679[36], i6679[37], 0, i6678, 'customReflection')
  request.r(i6679[38], i6679[39], 0, i6678, 'defaultReflection')
  i6678.defaultReflectionMode = i6679[40]
  i6678.defaultReflectionResolution = i6679[41]
  i6678.sunLightObjectId = i6679[42]
  i6678.pixelLightCount = i6679[43]
  i6678.defaultReflectionHDR = !!i6679[44]
  i6678.hasLightDataAsset = !!i6679[45]
  i6678.hasManualGenerate = !!i6679[46]
  return i6678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6685 = data
  request.r(i6685[0], i6685[1], 0, i6684, 'lightmapColor')
  request.r(i6685[2], i6685[3], 0, i6684, 'lightmapDirection')
  request.r(i6685[4], i6685[5], 0, i6684, 'shadowMask')
  return i6684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6686 = root || new UnityEngine.LightProbes()
  var i6687 = data
  return i6686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i6694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i6695 = data
  i6694.name = i6695[0]
  i6694.bounciness = i6695[1]
  i6694.friction = i6695[2]
  return i6694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6697 = data
  var i6699 = i6697[0]
  var i6698 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6699.length; i += 1) {
    i6698.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6699[i + 0]));
  }
  i6696.ShaderCompilationErrors = i6698
  i6696.name = i6697[1]
  i6696.guid = i6697[2]
  var i6701 = i6697[3]
  var i6700 = []
  for(var i = 0; i < i6701.length; i += 1) {
    i6700.push( i6701[i + 0] );
  }
  i6696.shaderDefinedKeywords = i6700
  var i6703 = i6697[4]
  var i6702 = []
  for(var i = 0; i < i6703.length; i += 1) {
    i6702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6703[i + 0]) );
  }
  i6696.passes = i6702
  var i6705 = i6697[5]
  var i6704 = []
  for(var i = 0; i < i6705.length; i += 1) {
    i6704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6705[i + 0]) );
  }
  i6696.usePasses = i6704
  var i6707 = i6697[6]
  var i6706 = []
  for(var i = 0; i < i6707.length; i += 1) {
    i6706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6707[i + 0]) );
  }
  i6696.defaultParameterValues = i6706
  request.r(i6697[7], i6697[8], 0, i6696, 'unityFallbackShader')
  i6696.readDepth = !!i6697[9]
  i6696.hasDepthOnlyPass = !!i6697[10]
  i6696.isCreatedByShaderGraph = !!i6697[11]
  i6696.disableBatching = !!i6697[12]
  i6696.compiled = !!i6697[13]
  return i6696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6711 = data
  i6710.shaderName = i6711[0]
  i6710.errorMessage = i6711[1]
  return i6710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6714 = root || new pc.UnityShaderPass()
  var i6715 = data
  i6714.id = i6715[0]
  i6714.subShaderIndex = i6715[1]
  i6714.name = i6715[2]
  i6714.passType = i6715[3]
  i6714.grabPassTextureName = i6715[4]
  i6714.usePass = !!i6715[5]
  i6714.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6715[6], i6714.zTest)
  i6714.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6715[7], i6714.zWrite)
  i6714.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6715[8], i6714.culling)
  i6714.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6715[9], i6714.blending)
  i6714.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6715[10], i6714.alphaBlending)
  i6714.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6715[11], i6714.colorWriteMask)
  i6714.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6715[12], i6714.offsetUnits)
  i6714.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6715[13], i6714.offsetFactor)
  i6714.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6715[14], i6714.stencilRef)
  i6714.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6715[15], i6714.stencilReadMask)
  i6714.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6715[16], i6714.stencilWriteMask)
  i6714.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6715[17], i6714.stencilOp)
  i6714.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6715[18], i6714.stencilOpFront)
  i6714.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6715[19], i6714.stencilOpBack)
  var i6717 = i6715[20]
  var i6716 = []
  for(var i = 0; i < i6717.length; i += 1) {
    i6716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6717[i + 0]) );
  }
  i6714.tags = i6716
  var i6719 = i6715[21]
  var i6718 = []
  for(var i = 0; i < i6719.length; i += 1) {
    i6718.push( i6719[i + 0] );
  }
  i6714.passDefinedKeywords = i6718
  var i6721 = i6715[22]
  var i6720 = []
  for(var i = 0; i < i6721.length; i += 1) {
    i6720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6721[i + 0]) );
  }
  i6714.passDefinedKeywordGroups = i6720
  var i6723 = i6715[23]
  var i6722 = []
  for(var i = 0; i < i6723.length; i += 1) {
    i6722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6723[i + 0]) );
  }
  i6714.variants = i6722
  var i6725 = i6715[24]
  var i6724 = []
  for(var i = 0; i < i6725.length; i += 1) {
    i6724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6725[i + 0]) );
  }
  i6714.excludedVariants = i6724
  i6714.hasDepthReader = !!i6715[25]
  return i6714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6727 = data
  i6726.val = i6727[0]
  i6726.name = i6727[1]
  return i6726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6729 = data
  i6728.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6729[0], i6728.src)
  i6728.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6729[1], i6728.dst)
  i6728.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6729[2], i6728.op)
  return i6728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6731 = data
  i6730.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6731[0], i6730.pass)
  i6730.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6731[1], i6730.fail)
  i6730.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6731[2], i6730.zFail)
  i6730.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6731[3], i6730.comp)
  return i6730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6735 = data
  i6734.name = i6735[0]
  i6734.value = i6735[1]
  return i6734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6739 = data
  var i6741 = i6739[0]
  var i6740 = []
  for(var i = 0; i < i6741.length; i += 1) {
    i6740.push( i6741[i + 0] );
  }
  i6738.keywords = i6740
  i6738.hasDiscard = !!i6739[1]
  return i6738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6745 = data
  i6744.passId = i6745[0]
  i6744.subShaderIndex = i6745[1]
  var i6747 = i6745[2]
  var i6746 = []
  for(var i = 0; i < i6747.length; i += 1) {
    i6746.push( i6747[i + 0] );
  }
  i6744.keywords = i6746
  i6744.vertexProgram = i6745[3]
  i6744.fragmentProgram = i6745[4]
  i6744.exportedForWebGl2 = !!i6745[5]
  i6744.readDepth = !!i6745[6]
  return i6744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6751 = data
  request.r(i6751[0], i6751[1], 0, i6750, 'shader')
  i6750.pass = i6751[2]
  return i6750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6755 = data
  i6754.name = i6755[0]
  i6754.type = i6755[1]
  i6754.value = new pc.Vec4( i6755[2], i6755[3], i6755[4], i6755[5] )
  i6754.textureValue = i6755[6]
  i6754.shaderPropertyFlag = i6755[7]
  return i6754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6757 = data
  i6756.name = i6757[0]
  request.r(i6757[1], i6757[2], 0, i6756, 'texture')
  i6756.aabb = i6757[3]
  i6756.vertices = i6757[4]
  i6756.triangles = i6757[5]
  i6756.textureRect = UnityEngine.Rect.MinMaxRect(i6757[6], i6757[7], i6757[8], i6757[9])
  i6756.packedRect = UnityEngine.Rect.MinMaxRect(i6757[10], i6757[11], i6757[12], i6757[13])
  i6756.border = new pc.Vec4( i6757[14], i6757[15], i6757[16], i6757[17] )
  i6756.transparency = i6757[18]
  i6756.bounds = i6757[19]
  i6756.pixelsPerUnit = i6757[20]
  i6756.textureWidth = i6757[21]
  i6756.textureHeight = i6757[22]
  i6756.nativeSize = new pc.Vec2( i6757[23], i6757[24] )
  i6756.pivot = new pc.Vec2( i6757[25], i6757[26] )
  i6756.textureRectOffset = new pc.Vec2( i6757[27], i6757[28] )
  return i6756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6759 = data
  i6758.name = i6759[0]
  return i6758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i6760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i6761 = data
  i6760.name = i6761[0]
  i6760.wrapMode = i6761[1]
  i6760.isLooping = !!i6761[2]
  i6760.length = i6761[3]
  var i6763 = i6761[4]
  var i6762 = []
  for(var i = 0; i < i6763.length; i += 1) {
    i6762.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i6763[i + 0]) );
  }
  i6760.curves = i6762
  var i6765 = i6761[5]
  var i6764 = []
  for(var i = 0; i < i6765.length; i += 1) {
    i6764.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i6765[i + 0]) );
  }
  i6760.events = i6764
  i6760.halfPrecision = !!i6761[6]
  i6760._frameRate = i6761[7]
  i6760.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i6761[8], i6760.localBounds)
  i6760.hasMuscleCurves = !!i6761[9]
  var i6767 = i6761[10]
  var i6766 = []
  for(var i = 0; i < i6767.length; i += 1) {
    i6766.push( i6767[i + 0] );
  }
  i6760.clipMuscleConstant = i6766
  i6760.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i6761[11], i6760.clipBindingConstant)
  return i6760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i6770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i6771 = data
  i6770.path = i6771[0]
  i6770.hash = i6771[1]
  i6770.componentType = i6771[2]
  i6770.property = i6771[3]
  i6770.keys = i6771[4]
  var i6773 = i6771[5]
  var i6772 = []
  for(var i = 0; i < i6773.length; i += 1) {
    i6772.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i6773[i + 0]) );
  }
  i6770.objectReferenceKeys = i6772
  return i6770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i6776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i6777 = data
  i6776.time = i6777[0]
  request.r(i6777[1], i6777[2], 0, i6776, 'value')
  return i6776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i6780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i6781 = data
  i6780.functionName = i6781[0]
  i6780.floatParameter = i6781[1]
  i6780.intParameter = i6781[2]
  i6780.stringParameter = i6781[3]
  request.r(i6781[4], i6781[5], 0, i6780, 'objectReferenceParameter')
  i6780.time = i6781[6]
  return i6780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i6782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i6783 = data
  i6782.center = new pc.Vec3( i6783[0], i6783[1], i6783[2] )
  i6782.extends = new pc.Vec3( i6783[3], i6783[4], i6783[5] )
  return i6782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i6786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i6787 = data
  var i6789 = i6787[0]
  var i6788 = []
  for(var i = 0; i < i6789.length; i += 1) {
    i6788.push( i6789[i + 0] );
  }
  i6786.genericBindings = i6788
  var i6791 = i6787[1]
  var i6790 = []
  for(var i = 0; i < i6791.length; i += 1) {
    i6790.push( i6791[i + 0] );
  }
  i6786.pptrCurveMapping = i6790
  return i6786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i6792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i6793 = data
  i6792.name = i6793[0]
  i6792.ascent = i6793[1]
  i6792.originalLineHeight = i6793[2]
  i6792.fontSize = i6793[3]
  var i6795 = i6793[4]
  var i6794 = []
  for(var i = 0; i < i6795.length; i += 1) {
    i6794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i6795[i + 0]) );
  }
  i6792.characterInfo = i6794
  request.r(i6793[5], i6793[6], 0, i6792, 'texture')
  i6792.originalFontSize = i6793[7]
  return i6792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i6798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i6799 = data
  i6798.index = i6799[0]
  i6798.advance = i6799[1]
  i6798.bearing = i6799[2]
  i6798.glyphWidth = i6799[3]
  i6798.glyphHeight = i6799[4]
  i6798.minX = i6799[5]
  i6798.maxX = i6799[6]
  i6798.minY = i6799[7]
  i6798.maxY = i6799[8]
  i6798.uvBottomLeftX = i6799[9]
  i6798.uvBottomLeftY = i6799[10]
  i6798.uvBottomRightX = i6799[11]
  i6798.uvBottomRightY = i6799[12]
  i6798.uvTopLeftX = i6799[13]
  i6798.uvTopLeftY = i6799[14]
  i6798.uvTopRightX = i6799[15]
  i6798.uvTopRightY = i6799[16]
  return i6798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i6800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i6801 = data
  i6800.name = i6801[0]
  var i6803 = i6801[1]
  var i6802 = []
  for(var i = 0; i < i6803.length; i += 1) {
    i6802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i6803[i + 0]) );
  }
  i6800.layers = i6802
  var i6805 = i6801[2]
  var i6804 = []
  for(var i = 0; i < i6805.length; i += 1) {
    i6804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i6805[i + 0]) );
  }
  i6800.parameters = i6804
  i6800.animationClips = i6801[3]
  i6800.avatarUnsupported = i6801[4]
  return i6800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i6808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i6809 = data
  i6808.name = i6809[0]
  i6808.defaultWeight = i6809[1]
  i6808.blendingMode = i6809[2]
  i6808.avatarMask = i6809[3]
  i6808.syncedLayerIndex = i6809[4]
  i6808.syncedLayerAffectsTiming = !!i6809[5]
  i6808.syncedLayers = i6809[6]
  i6808.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6809[7], i6808.stateMachine)
  return i6808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i6810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i6811 = data
  i6810.id = i6811[0]
  i6810.name = i6811[1]
  i6810.path = i6811[2]
  var i6813 = i6811[3]
  var i6812 = []
  for(var i = 0; i < i6813.length; i += 1) {
    i6812.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i6813[i + 0]) );
  }
  i6810.states = i6812
  var i6815 = i6811[4]
  var i6814 = []
  for(var i = 0; i < i6815.length; i += 1) {
    i6814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6815[i + 0]) );
  }
  i6810.machines = i6814
  var i6817 = i6811[5]
  var i6816 = []
  for(var i = 0; i < i6817.length; i += 1) {
    i6816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6817[i + 0]) );
  }
  i6810.entryStateTransitions = i6816
  var i6819 = i6811[6]
  var i6818 = []
  for(var i = 0; i < i6819.length; i += 1) {
    i6818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6819[i + 0]) );
  }
  i6810.exitStateTransitions = i6818
  var i6821 = i6811[7]
  var i6820 = []
  for(var i = 0; i < i6821.length; i += 1) {
    i6820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6821[i + 0]) );
  }
  i6810.anyStateTransitions = i6820
  i6810.defaultStateId = i6811[8]
  return i6810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i6824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i6825 = data
  i6824.id = i6825[0]
  i6824.name = i6825[1]
  i6824.cycleOffset = i6825[2]
  i6824.cycleOffsetParameter = i6825[3]
  i6824.cycleOffsetParameterActive = !!i6825[4]
  i6824.mirror = !!i6825[5]
  i6824.mirrorParameter = i6825[6]
  i6824.mirrorParameterActive = !!i6825[7]
  i6824.motionId = i6825[8]
  i6824.nameHash = i6825[9]
  i6824.fullPathHash = i6825[10]
  i6824.speed = i6825[11]
  i6824.speedParameter = i6825[12]
  i6824.speedParameterActive = !!i6825[13]
  i6824.tag = i6825[14]
  i6824.tagHash = i6825[15]
  i6824.writeDefaultValues = !!i6825[16]
  var i6827 = i6825[17]
  var i6826 = []
  for(var i = 0; i < i6827.length; i += 2) {
  request.r(i6827[i + 0], i6827[i + 1], 2, i6826, '')
  }
  i6824.behaviours = i6826
  var i6829 = i6825[18]
  var i6828 = []
  for(var i = 0; i < i6829.length; i += 1) {
    i6828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6829[i + 0]) );
  }
  i6824.transitions = i6828
  return i6824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i6834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i6835 = data
  i6834.fullPath = i6835[0]
  i6834.canTransitionToSelf = !!i6835[1]
  i6834.duration = i6835[2]
  i6834.exitTime = i6835[3]
  i6834.hasExitTime = !!i6835[4]
  i6834.hasFixedDuration = !!i6835[5]
  i6834.interruptionSource = i6835[6]
  i6834.offset = i6835[7]
  i6834.orderedInterruption = !!i6835[8]
  i6834.destinationStateId = i6835[9]
  i6834.isExit = !!i6835[10]
  i6834.mute = !!i6835[11]
  i6834.solo = !!i6835[12]
  var i6837 = i6835[13]
  var i6836 = []
  for(var i = 0; i < i6837.length; i += 1) {
    i6836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6837[i + 0]) );
  }
  i6834.conditions = i6836
  return i6834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i6840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i6841 = data
  i6840.mode = i6841[0]
  i6840.parameter = i6841[1]
  i6840.threshold = i6841[2]
  return i6840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i6846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i6847 = data
  i6846.destinationStateId = i6847[0]
  i6846.isExit = !!i6847[1]
  i6846.mute = !!i6847[2]
  i6846.solo = !!i6847[3]
  var i6849 = i6847[4]
  var i6848 = []
  for(var i = 0; i < i6849.length; i += 1) {
    i6848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6849[i + 0]) );
  }
  i6846.conditions = i6848
  return i6846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i6852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i6853 = data
  i6852.defaultBool = !!i6853[0]
  i6852.defaultFloat = i6853[1]
  i6852.defaultInt = i6853[2]
  i6852.name = i6853[3]
  i6852.nameHash = i6853[4]
  i6852.type = i6853[5]
  return i6852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6855 = data
  i6854.name = i6855[0]
  i6854.bytes64 = i6855[1]
  i6854.data = i6855[2]
  return i6854
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i6856 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i6857 = data
  request.r(i6857[0], i6857[1], 0, i6856, 'atlas')
  i6856.normalStyle = i6857[2]
  i6856.normalSpacingOffset = i6857[3]
  i6856.boldStyle = i6857[4]
  i6856.boldSpacing = i6857[5]
  i6856.italicStyle = i6857[6]
  i6856.tabSize = i6857[7]
  i6856.hashCode = i6857[8]
  request.r(i6857[9], i6857[10], 0, i6856, 'material')
  i6856.materialHashCode = i6857[11]
  i6856.m_Version = i6857[12]
  i6856.m_SourceFontFileGUID = i6857[13]
  request.r(i6857[14], i6857[15], 0, i6856, 'm_SourceFontFile_EditorRef')
  request.r(i6857[16], i6857[17], 0, i6856, 'm_SourceFontFile')
  i6856.m_AtlasPopulationMode = i6857[18]
  i6856.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6857[19], i6856.m_FaceInfo)
  var i6859 = i6857[20]
  var i6858 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i6859.length; i += 1) {
    i6858.add(request.d('UnityEngine.TextCore.Glyph', i6859[i + 0]));
  }
  i6856.m_GlyphTable = i6858
  var i6861 = i6857[21]
  var i6860 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i6861.length; i += 1) {
    i6860.add(request.d('TMPro.TMP_Character', i6861[i + 0]));
  }
  i6856.m_CharacterTable = i6860
  var i6863 = i6857[22]
  var i6862 = []
  for(var i = 0; i < i6863.length; i += 2) {
  request.r(i6863[i + 0], i6863[i + 1], 2, i6862, '')
  }
  i6856.m_AtlasTextures = i6862
  i6856.m_AtlasTextureIndex = i6857[23]
  i6856.m_IsMultiAtlasTexturesEnabled = !!i6857[24]
  i6856.m_ClearDynamicDataOnBuild = !!i6857[25]
  var i6865 = i6857[26]
  var i6864 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6865.length; i += 1) {
    i6864.add(request.d('UnityEngine.TextCore.GlyphRect', i6865[i + 0]));
  }
  i6856.m_UsedGlyphRects = i6864
  var i6867 = i6857[27]
  var i6866 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6867.length; i += 1) {
    i6866.add(request.d('UnityEngine.TextCore.GlyphRect', i6867[i + 0]));
  }
  i6856.m_FreeGlyphRects = i6866
  i6856.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i6857[28], i6856.m_fontInfo)
  i6856.m_AtlasWidth = i6857[29]
  i6856.m_AtlasHeight = i6857[30]
  i6856.m_AtlasPadding = i6857[31]
  i6856.m_AtlasRenderMode = i6857[32]
  var i6869 = i6857[33]
  var i6868 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i6869.length; i += 1) {
    i6868.add(request.d('TMPro.TMP_Glyph', i6869[i + 0]));
  }
  i6856.m_glyphInfoList = i6868
  i6856.m_KerningTable = request.d('TMPro.KerningTable', i6857[34], i6856.m_KerningTable)
  i6856.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i6857[35], i6856.m_FontFeatureTable)
  var i6871 = i6857[36]
  var i6870 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6871.length; i += 2) {
  request.r(i6871[i + 0], i6871[i + 1], 1, i6870, '')
  }
  i6856.fallbackFontAssets = i6870
  var i6873 = i6857[37]
  var i6872 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6873.length; i += 2) {
  request.r(i6873[i + 0], i6873[i + 1], 1, i6872, '')
  }
  i6856.m_FallbackFontAssetTable = i6872
  i6856.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i6857[38], i6856.m_CreationSettings)
  var i6875 = i6857[39]
  var i6874 = []
  for(var i = 0; i < i6875.length; i += 1) {
    i6874.push( request.d('TMPro.TMP_FontWeightPair', i6875[i + 0]) );
  }
  i6856.m_FontWeightTable = i6874
  var i6877 = i6857[40]
  var i6876 = []
  for(var i = 0; i < i6877.length; i += 1) {
    i6876.push( request.d('TMPro.TMP_FontWeightPair', i6877[i + 0]) );
  }
  i6856.fontWeights = i6876
  return i6856
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i6878 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i6879 = data
  i6878.m_FaceIndex = i6879[0]
  i6878.m_FamilyName = i6879[1]
  i6878.m_StyleName = i6879[2]
  i6878.m_PointSize = i6879[3]
  i6878.m_Scale = i6879[4]
  i6878.m_UnitsPerEM = i6879[5]
  i6878.m_LineHeight = i6879[6]
  i6878.m_AscentLine = i6879[7]
  i6878.m_CapLine = i6879[8]
  i6878.m_MeanLine = i6879[9]
  i6878.m_Baseline = i6879[10]
  i6878.m_DescentLine = i6879[11]
  i6878.m_SuperscriptOffset = i6879[12]
  i6878.m_SuperscriptSize = i6879[13]
  i6878.m_SubscriptOffset = i6879[14]
  i6878.m_SubscriptSize = i6879[15]
  i6878.m_UnderlineOffset = i6879[16]
  i6878.m_UnderlineThickness = i6879[17]
  i6878.m_StrikethroughOffset = i6879[18]
  i6878.m_StrikethroughThickness = i6879[19]
  i6878.m_TabWidth = i6879[20]
  return i6878
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i6882 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i6883 = data
  i6882.m_Index = i6883[0]
  i6882.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6883[1], i6882.m_Metrics)
  i6882.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6883[2], i6882.m_GlyphRect)
  i6882.m_Scale = i6883[3]
  i6882.m_AtlasIndex = i6883[4]
  i6882.m_ClassDefinitionType = i6883[5]
  return i6882
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i6884 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i6885 = data
  i6884.m_Width = i6885[0]
  i6884.m_Height = i6885[1]
  i6884.m_HorizontalBearingX = i6885[2]
  i6884.m_HorizontalBearingY = i6885[3]
  i6884.m_HorizontalAdvance = i6885[4]
  return i6884
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i6886 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i6887 = data
  i6886.m_X = i6887[0]
  i6886.m_Y = i6887[1]
  i6886.m_Width = i6887[2]
  i6886.m_Height = i6887[3]
  return i6886
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i6890 = root || request.c( 'TMPro.TMP_Character' )
  var i6891 = data
  i6890.m_ElementType = i6891[0]
  i6890.m_Unicode = i6891[1]
  i6890.m_GlyphIndex = i6891[2]
  i6890.m_Scale = i6891[3]
  return i6890
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i6896 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i6897 = data
  i6896.Name = i6897[0]
  i6896.PointSize = i6897[1]
  i6896.Scale = i6897[2]
  i6896.CharacterCount = i6897[3]
  i6896.LineHeight = i6897[4]
  i6896.Baseline = i6897[5]
  i6896.Ascender = i6897[6]
  i6896.CapHeight = i6897[7]
  i6896.Descender = i6897[8]
  i6896.CenterLine = i6897[9]
  i6896.SuperscriptOffset = i6897[10]
  i6896.SubscriptOffset = i6897[11]
  i6896.SubSize = i6897[12]
  i6896.Underline = i6897[13]
  i6896.UnderlineThickness = i6897[14]
  i6896.strikethrough = i6897[15]
  i6896.strikethroughThickness = i6897[16]
  i6896.TabWidth = i6897[17]
  i6896.Padding = i6897[18]
  i6896.AtlasWidth = i6897[19]
  i6896.AtlasHeight = i6897[20]
  return i6896
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i6900 = root || request.c( 'TMPro.TMP_Glyph' )
  var i6901 = data
  i6900.id = i6901[0]
  i6900.x = i6901[1]
  i6900.y = i6901[2]
  i6900.width = i6901[3]
  i6900.height = i6901[4]
  i6900.xOffset = i6901[5]
  i6900.yOffset = i6901[6]
  i6900.xAdvance = i6901[7]
  i6900.scale = i6901[8]
  return i6900
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i6902 = root || request.c( 'TMPro.KerningTable' )
  var i6903 = data
  var i6905 = i6903[0]
  var i6904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i6905.length; i += 1) {
    i6904.add(request.d('TMPro.KerningPair', i6905[i + 0]));
  }
  i6902.kerningPairs = i6904
  return i6902
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i6908 = root || request.c( 'TMPro.KerningPair' )
  var i6909 = data
  i6908.xOffset = i6909[0]
  i6908.m_FirstGlyph = i6909[1]
  i6908.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6909[2], i6908.m_FirstGlyphAdjustments)
  i6908.m_SecondGlyph = i6909[3]
  i6908.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6909[4], i6908.m_SecondGlyphAdjustments)
  i6908.m_IgnoreSpacingAdjustments = !!i6909[5]
  return i6908
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i6910 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i6911 = data
  var i6913 = i6911[0]
  var i6912 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i6913.length; i += 1) {
    i6912.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i6913[i + 0]));
  }
  i6910.m_GlyphPairAdjustmentRecords = i6912
  return i6910
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i6916 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i6917 = data
  i6916.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i6917[0], i6916.m_FirstAdjustmentRecord)
  i6916.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i6917[1], i6916.m_SecondAdjustmentRecord)
  i6916.m_FeatureLookupFlags = i6917[2]
  return i6916
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i6918 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i6919 = data
  i6918.m_GlyphIndex = i6919[0]
  i6918.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i6919[1], i6918.m_GlyphValueRecord)
  return i6918
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i6920 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i6921 = data
  i6920.m_XPlacement = i6921[0]
  i6920.m_YPlacement = i6921[1]
  i6920.m_XAdvance = i6921[2]
  i6920.m_YAdvance = i6921[3]
  return i6920
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i6924 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i6925 = data
  i6924.sourceFontFileName = i6925[0]
  i6924.sourceFontFileGUID = i6925[1]
  i6924.pointSizeSamplingMode = i6925[2]
  i6924.pointSize = i6925[3]
  i6924.padding = i6925[4]
  i6924.packingMode = i6925[5]
  i6924.atlasWidth = i6925[6]
  i6924.atlasHeight = i6925[7]
  i6924.characterSetSelectionMode = i6925[8]
  i6924.characterSequence = i6925[9]
  i6924.referencedFontAssetGUID = i6925[10]
  i6924.referencedTextAssetGUID = i6925[11]
  i6924.fontStyle = i6925[12]
  i6924.fontStyleModifier = i6925[13]
  i6924.renderMode = i6925[14]
  i6924.includeFontFeatures = !!i6925[15]
  return i6924
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i6928 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i6929 = data
  request.r(i6929[0], i6929[1], 0, i6928, 'regularTypeface')
  request.r(i6929[2], i6929[3], 0, i6928, 'italicTypeface')
  return i6928
}

Deserializers["BirdDataSO"] = function (request, data, root) {
  var i6930 = root || request.c( 'BirdDataSO' )
  var i6931 = data
  var i6933 = i6931[0]
  var i6932 = []
  for(var i = 0; i < i6933.length; i += 1) {
    i6932.push( request.d('BirdData', i6933[i + 0]) );
  }
  i6930.birds = i6932
  return i6930
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i6936 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i6937 = data
  var i6939 = i6937[0]
  var i6938 = []
  for(var i = 0; i < i6939.length; i += 2) {
  request.r(i6939[i + 0], i6939[i + 1], 2, i6938, '')
  }
  i6936.atlasAssets = i6938
  i6936.scale = i6937[1]
  request.r(i6937[2], i6937[3], 0, i6936, 'skeletonJSON')
  i6936.isUpgradingBlendModeMaterials = !!i6937[4]
  i6936.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i6937[5], i6936.blendModeMaterials)
  var i6941 = i6937[6]
  var i6940 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i6941.length; i += 2) {
  request.r(i6941[i + 0], i6941[i + 1], 1, i6940, '')
  }
  i6936.skeletonDataModifiers = i6940
  var i6943 = i6937[7]
  var i6942 = []
  for(var i = 0; i < i6943.length; i += 1) {
    i6942.push( i6943[i + 0] );
  }
  i6936.fromAnimation = i6942
  var i6945 = i6937[8]
  var i6944 = []
  for(var i = 0; i < i6945.length; i += 1) {
    i6944.push( i6945[i + 0] );
  }
  i6936.toAnimation = i6944
  i6936.duration = i6937[9]
  i6936.defaultMix = i6937[10]
  request.r(i6937[11], i6937[12], 0, i6936, 'controller')
  return i6936
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i6948 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i6949 = data
  i6948.applyAdditiveMaterial = !!i6949[0]
  var i6951 = i6949[1]
  var i6950 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6951.length; i += 1) {
    i6950.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6951[i + 0]));
  }
  i6948.additiveMaterials = i6950
  var i6953 = i6949[2]
  var i6952 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6953.length; i += 1) {
    i6952.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6953[i + 0]));
  }
  i6948.multiplyMaterials = i6952
  var i6955 = i6949[3]
  var i6954 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6955.length; i += 1) {
    i6954.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6955[i + 0]));
  }
  i6948.screenMaterials = i6954
  i6948.requiresBlendModeMaterials = !!i6949[4]
  return i6948
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i6958 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i6959 = data
  i6958.pageName = i6959[0]
  request.r(i6959[1], i6959[2], 0, i6958, 'material')
  return i6958
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i6962 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i6963 = data
  request.r(i6963[0], i6963[1], 0, i6962, 'atlasFile')
  var i6965 = i6963[2]
  var i6964 = []
  for(var i = 0; i < i6965.length; i += 2) {
  request.r(i6965[i + 0], i6965[i + 1], 2, i6964, '')
  }
  i6962.materials = i6964
  i6962.textureLoadingMode = i6963[3]
  request.r(i6963[4], i6963[5], 0, i6962, 'onDemandTextureLoader')
  return i6962
}

Deserializers["ObstacleConfigSO"] = function (request, data, root) {
  var i6966 = root || request.c( 'ObstacleConfigSO' )
  var i6967 = data
  var i6969 = i6967[0]
  var i6968 = []
  for(var i = 0; i < i6969.length; i += 1) {
    i6968.push( request.d('ObstacleConfigSO+ObstacleEntry', i6969[i + 0]) );
  }
  i6966.obstacles = i6968
  var i6971 = i6967[1]
  var i6970 = []
  for(var i = 0; i < i6971.length; i += 1) {
    i6970.push( request.d('ObstacleData', i6971[i + 0]) );
  }
  i6966.obstacleDatas = i6970
  return i6966
}

Deserializers["ObstacleConfigSO+ObstacleEntry"] = function (request, data, root) {
  var i6974 = root || request.c( 'ObstacleConfigSO+ObstacleEntry' )
  var i6975 = data
  i6974.type = i6975[0]
  request.r(i6975[1], i6975[2], 0, i6974, 'prefab')
  return i6974
}

Deserializers["ObstacleData"] = function (request, data, root) {
  var i6978 = root || request.c( 'ObstacleData' )
  var i6979 = data
  i6978.name = i6979[0]
  i6978.description = i6979[1]
  request.r(i6979[2], i6979[3], 0, i6978, 'icon')
  request.r(i6979[4], i6979[5], 0, i6978, 'titleIcon')
  i6978.unlockLevel = i6979[6]
  return i6978
}

Deserializers["BoosterConfig"] = function (request, data, root) {
  var i6980 = root || request.c( 'BoosterConfig' )
  var i6981 = data
  var i6983 = i6981[0]
  var i6982 = new (System.Collections.Generic.List$1(Bridge.ns('BoosterInfo')))
  for(var i = 0; i < i6983.length; i += 1) {
    i6982.add(request.d('BoosterInfo', i6983[i + 0]));
  }
  i6980.boosterInfos = i6982
  return i6980
}

Deserializers["BoosterInfo"] = function (request, data, root) {
  var i6986 = root || request.c( 'BoosterInfo' )
  var i6987 = data
  i6986.type = i6987[0]
  i6986.name = i6987[1]
  i6986.description = i6987[2]
  i6986.levelUnlock = i6987[3]
  request.r(i6987[4], i6987[5], 0, i6986, 'icon')
  request.r(i6987[6], i6987[7], 0, i6986, 'titleIcon')
  i6986.amountFirst = i6987[8]
  i6986.price = i6987[9]
  i6986.amountBuy = i6987[10]
  return i6986
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i6988 = root || request.c( 'TMPro.TMP_Settings' )
  var i6989 = data
  i6988.m_enableWordWrapping = !!i6989[0]
  i6988.m_enableKerning = !!i6989[1]
  i6988.m_enableExtraPadding = !!i6989[2]
  i6988.m_enableTintAllSprites = !!i6989[3]
  i6988.m_enableParseEscapeCharacters = !!i6989[4]
  i6988.m_EnableRaycastTarget = !!i6989[5]
  i6988.m_GetFontFeaturesAtRuntime = !!i6989[6]
  i6988.m_missingGlyphCharacter = i6989[7]
  i6988.m_warningsDisabled = !!i6989[8]
  request.r(i6989[9], i6989[10], 0, i6988, 'm_defaultFontAsset')
  i6988.m_defaultFontAssetPath = i6989[11]
  i6988.m_defaultFontSize = i6989[12]
  i6988.m_defaultAutoSizeMinRatio = i6989[13]
  i6988.m_defaultAutoSizeMaxRatio = i6989[14]
  i6988.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i6989[15], i6989[16] )
  i6988.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i6989[17], i6989[18] )
  i6988.m_autoSizeTextContainer = !!i6989[19]
  i6988.m_IsTextObjectScaleStatic = !!i6989[20]
  var i6991 = i6989[21]
  var i6990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6991.length; i += 2) {
  request.r(i6991[i + 0], i6991[i + 1], 1, i6990, '')
  }
  i6988.m_fallbackFontAssets = i6990
  i6988.m_matchMaterialPreset = !!i6989[22]
  request.r(i6989[23], i6989[24], 0, i6988, 'm_defaultSpriteAsset')
  i6988.m_defaultSpriteAssetPath = i6989[25]
  i6988.m_enableEmojiSupport = !!i6989[26]
  i6988.m_MissingCharacterSpriteUnicode = i6989[27]
  i6988.m_defaultColorGradientPresetsPath = i6989[28]
  request.r(i6989[29], i6989[30], 0, i6988, 'm_defaultStyleSheet')
  i6988.m_StyleSheetsResourcePath = i6989[31]
  request.r(i6989[32], i6989[33], 0, i6988, 'm_leadingCharacters')
  request.r(i6989[34], i6989[35], 0, i6988, 'm_followingCharacters')
  i6988.m_UseModernHangulLineBreakingRules = !!i6989[36]
  return i6988
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i6992 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i6993 = data
  request.r(i6993[0], i6993[1], 0, i6992, 'spriteSheet')
  var i6995 = i6993[2]
  var i6994 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i6995.length; i += 1) {
    i6994.add(request.d('TMPro.TMP_Sprite', i6995[i + 0]));
  }
  i6992.spriteInfoList = i6994
  var i6997 = i6993[3]
  var i6996 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i6997.length; i += 2) {
  request.r(i6997[i + 0], i6997[i + 1], 1, i6996, '')
  }
  i6992.fallbackSpriteAssets = i6996
  i6992.hashCode = i6993[4]
  request.r(i6993[5], i6993[6], 0, i6992, 'material')
  i6992.materialHashCode = i6993[7]
  i6992.m_Version = i6993[8]
  i6992.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6993[9], i6992.m_FaceInfo)
  var i6999 = i6993[10]
  var i6998 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i6999.length; i += 1) {
    i6998.add(request.d('TMPro.TMP_SpriteCharacter', i6999[i + 0]));
  }
  i6992.m_SpriteCharacterTable = i6998
  var i7001 = i6993[11]
  var i7000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i7001.length; i += 1) {
    i7000.add(request.d('TMPro.TMP_SpriteGlyph', i7001[i + 0]));
  }
  i6992.m_SpriteGlyphTable = i7000
  return i6992
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i7004 = root || request.c( 'TMPro.TMP_Sprite' )
  var i7005 = data
  i7004.name = i7005[0]
  i7004.hashCode = i7005[1]
  i7004.unicode = i7005[2]
  i7004.pivot = new pc.Vec2( i7005[3], i7005[4] )
  request.r(i7005[5], i7005[6], 0, i7004, 'sprite')
  i7004.id = i7005[7]
  i7004.x = i7005[8]
  i7004.y = i7005[9]
  i7004.width = i7005[10]
  i7004.height = i7005[11]
  i7004.xOffset = i7005[12]
  i7004.yOffset = i7005[13]
  i7004.xAdvance = i7005[14]
  i7004.scale = i7005[15]
  return i7004
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i7010 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i7011 = data
  i7010.m_Name = i7011[0]
  i7010.m_HashCode = i7011[1]
  i7010.m_ElementType = i7011[2]
  i7010.m_Unicode = i7011[3]
  i7010.m_GlyphIndex = i7011[4]
  i7010.m_Scale = i7011[5]
  return i7010
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i7014 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i7015 = data
  request.r(i7015[0], i7015[1], 0, i7014, 'sprite')
  i7014.m_Index = i7015[2]
  i7014.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i7015[3], i7014.m_Metrics)
  i7014.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i7015[4], i7014.m_GlyphRect)
  i7014.m_Scale = i7015[5]
  i7014.m_AtlasIndex = i7015[6]
  i7014.m_ClassDefinitionType = i7015[7]
  return i7014
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i7016 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i7017 = data
  var i7019 = i7017[0]
  var i7018 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i7019.length; i += 1) {
    i7018.add(request.d('TMPro.TMP_Style', i7019[i + 0]));
  }
  i7016.m_StyleList = i7018
  return i7016
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i7022 = root || request.c( 'TMPro.TMP_Style' )
  var i7023 = data
  i7022.m_Name = i7023[0]
  i7022.m_HashCode = i7023[1]
  i7022.m_OpeningDefinition = i7023[2]
  i7022.m_ClosingDefinition = i7023[3]
  i7022.m_OpeningTagArray = i7023[4]
  i7022.m_ClosingTagArray = i7023[5]
  i7022.m_OpeningTagUnicodeArray = i7023[6]
  i7022.m_ClosingTagUnicodeArray = i7023[7]
  return i7022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i7024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i7025 = data
  var i7027 = i7025[0]
  var i7026 = []
  for(var i = 0; i < i7027.length; i += 1) {
    i7026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i7027[i + 0]) );
  }
  i7024.files = i7026
  i7024.componentToPrefabIds = i7025[1]
  return i7024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i7030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i7031 = data
  i7030.path = i7031[0]
  request.r(i7031[1], i7031[2], 0, i7030, 'unityObject')
  return i7030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i7032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i7033 = data
  var i7035 = i7033[0]
  var i7034 = []
  for(var i = 0; i < i7035.length; i += 1) {
    i7034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i7035[i + 0]) );
  }
  i7032.scriptsExecutionOrder = i7034
  var i7037 = i7033[1]
  var i7036 = []
  for(var i = 0; i < i7037.length; i += 1) {
    i7036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i7037[i + 0]) );
  }
  i7032.sortingLayers = i7036
  var i7039 = i7033[2]
  var i7038 = []
  for(var i = 0; i < i7039.length; i += 1) {
    i7038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i7039[i + 0]) );
  }
  i7032.cullingLayers = i7038
  i7032.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i7033[3], i7032.timeSettings)
  i7032.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i7033[4], i7032.physicsSettings)
  i7032.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i7033[5], i7032.physics2DSettings)
  i7032.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7033[6], i7032.qualitySettings)
  i7032.enableRealtimeShadows = !!i7033[7]
  i7032.enableAutoInstancing = !!i7033[8]
  i7032.enableStaticBatching = !!i7033[9]
  i7032.enableDynamicBatching = !!i7033[10]
  i7032.usePreservativeDynamicBatching = !!i7033[11]
  i7032.lightmapEncodingQuality = i7033[12]
  i7032.desiredColorSpace = i7033[13]
  var i7041 = i7033[14]
  var i7040 = []
  for(var i = 0; i < i7041.length; i += 1) {
    i7040.push( i7041[i + 0] );
  }
  i7032.allTags = i7040
  return i7032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i7044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i7045 = data
  i7044.name = i7045[0]
  i7044.value = i7045[1]
  return i7044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i7048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i7049 = data
  i7048.id = i7049[0]
  i7048.name = i7049[1]
  i7048.value = i7049[2]
  return i7048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i7052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i7053 = data
  i7052.id = i7053[0]
  i7052.name = i7053[1]
  return i7052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i7054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i7055 = data
  i7054.fixedDeltaTime = i7055[0]
  i7054.maximumDeltaTime = i7055[1]
  i7054.timeScale = i7055[2]
  i7054.maximumParticleTimestep = i7055[3]
  return i7054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i7056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i7057 = data
  i7056.gravity = new pc.Vec3( i7057[0], i7057[1], i7057[2] )
  i7056.defaultSolverIterations = i7057[3]
  i7056.bounceThreshold = i7057[4]
  i7056.autoSyncTransforms = !!i7057[5]
  i7056.autoSimulation = !!i7057[6]
  var i7059 = i7057[7]
  var i7058 = []
  for(var i = 0; i < i7059.length; i += 1) {
    i7058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i7059[i + 0]) );
  }
  i7056.collisionMatrix = i7058
  return i7056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i7062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i7063 = data
  i7062.enabled = !!i7063[0]
  i7062.layerId = i7063[1]
  i7062.otherLayerId = i7063[2]
  return i7062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i7064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i7065 = data
  request.r(i7065[0], i7065[1], 0, i7064, 'material')
  i7064.gravity = new pc.Vec2( i7065[2], i7065[3] )
  i7064.positionIterations = i7065[4]
  i7064.velocityIterations = i7065[5]
  i7064.velocityThreshold = i7065[6]
  i7064.maxLinearCorrection = i7065[7]
  i7064.maxAngularCorrection = i7065[8]
  i7064.maxTranslationSpeed = i7065[9]
  i7064.maxRotationSpeed = i7065[10]
  i7064.baumgarteScale = i7065[11]
  i7064.baumgarteTOIScale = i7065[12]
  i7064.timeToSleep = i7065[13]
  i7064.linearSleepTolerance = i7065[14]
  i7064.angularSleepTolerance = i7065[15]
  i7064.defaultContactOffset = i7065[16]
  i7064.autoSimulation = !!i7065[17]
  i7064.queriesHitTriggers = !!i7065[18]
  i7064.queriesStartInColliders = !!i7065[19]
  i7064.callbacksOnDisable = !!i7065[20]
  i7064.reuseCollisionCallbacks = !!i7065[21]
  i7064.autoSyncTransforms = !!i7065[22]
  var i7067 = i7065[23]
  var i7066 = []
  for(var i = 0; i < i7067.length; i += 1) {
    i7066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i7067[i + 0]) );
  }
  i7064.collisionMatrix = i7066
  return i7064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i7070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i7071 = data
  i7070.enabled = !!i7071[0]
  i7070.layerId = i7071[1]
  i7070.otherLayerId = i7071[2]
  return i7070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i7072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i7073 = data
  var i7075 = i7073[0]
  var i7074 = []
  for(var i = 0; i < i7075.length; i += 1) {
    i7074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7075[i + 0]) );
  }
  i7072.qualityLevels = i7074
  var i7077 = i7073[1]
  var i7076 = []
  for(var i = 0; i < i7077.length; i += 1) {
    i7076.push( i7077[i + 0] );
  }
  i7072.names = i7076
  i7072.shadows = i7073[2]
  i7072.anisotropicFiltering = i7073[3]
  i7072.antiAliasing = i7073[4]
  i7072.lodBias = i7073[5]
  i7072.shadowCascades = i7073[6]
  i7072.shadowDistance = i7073[7]
  i7072.shadowmaskMode = i7073[8]
  i7072.shadowProjection = i7073[9]
  i7072.shadowResolution = i7073[10]
  i7072.softParticles = !!i7073[11]
  i7072.softVegetation = !!i7073[12]
  i7072.activeColorSpace = i7073[13]
  i7072.desiredColorSpace = i7073[14]
  i7072.masterTextureLimit = i7073[15]
  i7072.maxQueuedFrames = i7073[16]
  i7072.particleRaycastBudget = i7073[17]
  i7072.pixelLightCount = i7073[18]
  i7072.realtimeReflectionProbes = !!i7073[19]
  i7072.shadowCascade2Split = i7073[20]
  i7072.shadowCascade4Split = new pc.Vec3( i7073[21], i7073[22], i7073[23] )
  i7072.streamingMipmapsActive = !!i7073[24]
  i7072.vSyncCount = i7073[25]
  i7072.asyncUploadBufferSize = i7073[26]
  i7072.asyncUploadTimeSlice = i7073[27]
  i7072.billboardsFaceCameraPosition = !!i7073[28]
  i7072.shadowNearPlaneOffset = i7073[29]
  i7072.streamingMipmapsMemoryBudget = i7073[30]
  i7072.maximumLODLevel = i7073[31]
  i7072.streamingMipmapsAddAllCameras = !!i7073[32]
  i7072.streamingMipmapsMaxLevelReduction = i7073[33]
  i7072.streamingMipmapsRenderersPerFrame = i7073[34]
  i7072.resolutionScalingFixedDPIFactor = i7073[35]
  i7072.streamingMipmapsMaxFileIORequests = i7073[36]
  i7072.currentQualityLevel = i7073[37]
  return i7072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i7082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i7083 = data
  i7082.weight = i7083[0]
  i7082.vertices = i7083[1]
  i7082.normals = i7083[2]
  i7082.tangents = i7083[3]
  return i7082
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i7084 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i7085 = data
  request.r(i7085[0], i7085[1], 0, i7084, 'm_ObjectArgument')
  i7084.m_ObjectArgumentAssemblyTypeName = i7085[2]
  i7084.m_IntArgument = i7085[3]
  i7084.m_FloatArgument = i7085[4]
  i7084.m_StringArgument = i7085[5]
  i7084.m_BoolArgument = !!i7085[6]
  return i7084
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i7086 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i7087 = data
  i7086.xPlacement = i7087[0]
  i7086.yPlacement = i7087[1]
  i7086.xAdvance = i7087[2]
  i7086.yAdvance = i7087[3]
  return i7086
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"105":[106],"107":[106],"108":[106],"109":[106],"110":[106],"111":[106],"112":[113],"114":[48],"115":[116],"117":[116],"118":[116],"119":[116],"120":[116],"121":[116],"122":[116],"123":[13],"124":[13],"125":[13],"126":[13],"127":[13],"128":[13],"129":[13],"130":[13],"131":[13],"132":[13],"133":[13],"134":[13],"135":[13],"136":[48],"137":[19],"138":[139],"140":[139],"63":[2],"97":[2],"90":[2],"66":[18],"61":[18],"58":[55],"141":[2],"142":[143],"144":[145],"146":[147],"148":[18],"149":[2],"145":[2],"84":[63],"6":[3,2],"150":[2],"83":[63],"65":[2],"64":[2],"94":[2],"151":[2],"152":[2],"153":[2],"154":[2],"96":[2],"155":[2],"156":[3,2],"157":[2],"158":[2],"159":[2],"160":[2],"98":[3,2],"161":[2],"162":[72],"163":[72],"73":[72],"164":[72],"165":[48],"166":[48],"167":[143],"168":[72],"169":[63],"170":[48],"171":[24],"172":[173],"174":[2],"175":[3,2],"40":[19],"176":[3,2],"177":[91,19],"178":[19],"179":[19,43],"180":[116],"181":[13],"182":[173],"183":[184],"185":[2,3],"186":[2],"20":[19,2],"7":[2,3],"187":[2],"188":[3,2],"189":[19],"190":[3,2],"191":[2],"192":[143],"193":[116],"194":[13]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","OutsideBird","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Rigidbody2D","UnityEngine.CircleCollider2D","UnityEngine.PhysicsMaterial2D","BubbleParts","BubbleOneSlot","UnityEngine.SpriteRenderer","UnityEngine.MeshRenderer","TMPro.TextMeshPro","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Light","BubbleTwoSlot","BubbleThreeSlot","BubbleFourSlot","BubbleFiveSlot","FrozenNestObstacle","LockedNestObstacle","KeyNestObstacle","HiddenNestObstacle","StoneNestObstacle","BigNestObstacle","HiddenBirdObstacle","BindBirdObstacle","IceBirdObstacle","TargetNestObstacle","Bird","Spine.Unity.SkeletonAnimation","UnityEngine.BoxCollider2D","BirdParts","UnityEngine.MeshFilter","Spine.Unity.SkeletonDataAsset","MagnetNestFx","ShuffleFX","ParticlesBase","UnityEngine.Camera","UnityEngine.AudioListener","BoardManager","TopContainer","DockContainer","SlotContainer","OutsideBirdHolder","BirdDock","TimeNestController","UnityEngine.GameObject","DockCountdown","UnityEngine.SpriteMask","BirdSlot","BranchWave","UnityEngine.Rendering.SortingGroup","UnityEngine.Canvas","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.ContentSizeFitter","SpriteFitScreenHeight","LevelManager","BirdDataSO","ObstacleConfigSO","UnityEngine.TextAsset","ControllerManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BoosterManager","BoosterConfig","GameManager","SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","ParticlesManager","GameData","ComboManager","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasGroup","GameplayUI","ButtonScaleUI","UnityEngine.UI.Button","BoosterItemUI","SlingshotAnimator","UnityEngine.Animator","LoseUI","Crystal.SafeArea","UnityEngine.UI.HorizontalLayoutGroup","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Mask","ColorBirdLogoAnimator","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Cubemap","Spine.Unity.SpineAtlasAsset","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UIImageFitScreenHeight","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Lean.Common.LeanSelectableGraphicColor","UnityEngine.UI.Graphic","Lean.Common.LeanSelectableRendererColor","UnityEngine.Renderer","Lean.Common.LeanSelectableSpriteRendererColor","UnityEngine.UI.Dropdown","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","CW.Common.CwDepthTextureMode","CW.Common.CwLightIntensity","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","Coffee.UIExtensions.UIParticle","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine","Lean.Pool.LeanPooledRigidbody","Lean.Pool.LeanPooledRigidbody2D"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "10/23/2026 07:57:06";

Deserializers.lunaDaysRunning = "4.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "PA_Lv2";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "6545";

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

Deserializers.buildID = "3ab14597-1cfa-44e8-831a-43912ab79bf9";

Deserializers.runtimeInitializeOnLoadInfos = [[["CW","Common","CwInput","Enable"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Sirenix","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","UnitySerializationInitializer","InitializeRuntime"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[["Coffee","UIExtensions","ParticleSystemPreviewSystem","Initialize"],["Coffee","UIParticleInternal","FrameCache","Clear"],["Coffee","UIExtensions","UIParticleUpdater","OnDomainReload"],["Coffee","UIParticleInternal","MaterialRepository","Clear"],["Coffee","UIParticleInternal","UIExtraCallbacks","InitializeOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["LockedNestObstacle","ResetStatics"],["EventManager","ClearAll"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

