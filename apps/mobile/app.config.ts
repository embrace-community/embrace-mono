import type { ConfigContext, ExpoConfig } from '@expo/config';

import { ClientEnv, Env, withEnvSuffix } from './env';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: Env.NAME,
  description: `${Env.NAME} Mobile App`,
  slug: 'embrace-mono-mobile',
  version: Env.VERSION.toString(),
  orientation: 'portrait',
  icon: `${withEnvSuffix('./assets/icon')}.png`,
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#F75469',
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: 'https://u.expo.dev/6019ddd1-a639-4295-a06b-ae43451e95df',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: Env.BUNDLE_ID,
    runtimeVersion: '1.0.0',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: `${withEnvSuffix('./assets/icon')}.png`,
      backgroundColor: '#FFFFFF',
    },
    package: Env.PACKAGE,
    runtimeVersion: {
      policy: 'sdkVersion',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: [
    ['@bacons/link-assets', ['./assets/fonts/Inter.ttf']],
    'expo-localization',
  ],
  extra: {
    eas: {
      projectId: '6019ddd1-a639-4295-a06b-ae43451e95df',
    },
    ...ClientEnv,
  },
});
