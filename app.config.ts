import { ExpoConfig, ConfigContext } from "expo/config";

import type { WithAndroidWidgetsParams } from 'react-native-android-widget';

const widgetConfig: WithAndroidWidgetsParams = {
  // Paths to all custom fonts used in all widgets
  fonts: ['./assets/fonts/Inter.ttf'],
  widgets: [
    {
      name: 'Hello', // This name will be the **name** with which we will reference our widget.
      label: 'My Hello Widget', // Label shown in the widget picker
      minWidth: '320dp',
      minHeight: '120dp',
      // This means the widget's default size is 5x2 cells, as specified by the targetCellWidth and targetCellHeight attributes.
      // Or 320×120dp, as specified by minWidth and minHeight for devices running Android 11 or lower.
      // If defined, targetCellWidth,targetCellHeight attributes are used instead of minWidth or minHeight.
      targetCellWidth: 5,
      targetCellHeight: 2,
      description: 'This is my first widget', // Description shown in the widget picker
      previewImage: './assets/images/favicon.png', // Path to widget preview image

      // How often, in milliseconds, that this AppWidget wants to be updated.
      // The task handler will be called with widgetAction = 'UPDATE_WIDGET'.
      // Default is 0 (no automatic updates)
      // Minimum is 1800000 (30 minutes == 30 * 60 * 1000).
      updatePeriodMillis: 1800000,
    },
  ],
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: "my-app",
  name: "My App",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.tamas.varga.sillyapp",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.tamas.varga.sillyapp",
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: ["expo-router", "expo-secure-store", ['react-native-android-widget', widgetConfig]],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    router: {
      origin: false,
    },
    eas: {
      projectId: "b61bdeba-f70e-4cf7-8c87-a4dd990f13cf",
    },
  },
});
