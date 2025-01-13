const IS_DEV = process.env.APP_VARIANT === 'development'
const IS_PREVIEW = process.env.APP_VARIANT === 'preview'

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.byk04712.StickerSmash.dev'
  }

  if (IS_PREVIEW) {
    return 'com.byk04712.StickerSmash.preview'
  }

  return 'com.byk04712.StickerSmash'
}

const getAppName = () => {
  if (IS_DEV) {
    return 'StickerSmash (Dev)'
  }

  if (IS_PREVIEW) {
    return 'StickerSmash (Preview)'
  }

  return 'StickerSmash: Emoji Stickers'
}

export default {
  "expo": {
    "name": getAppName(),
    "slug": "StickerSmash",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "newArchEnabled": true,
    "splash": {
      "image": "./assets/splash-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": getUniqueIdentifier()
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": getUniqueIdentifier()
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "1557a7e2-ea45-4534-879f-db3fbaefbec6"
      }
    },
    "owner": "byk04712"
  }
}
