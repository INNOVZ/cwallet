import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { Appearance, useColorScheme } from "react-native";
import "../global.css";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    RalewayExtraLight: require("../assets/fonts/Raleway-ExtraLight.ttf"),
    RalewayLight: require("../assets/fonts/Raleway-Light.ttf"),
    RalewayMedium: require("../assets/fonts/Raleway-Medium.ttf"),
    RalewayRegular: require("../assets/fonts/Raleway-Regular.ttf"),
    RalewaySemiBold: require("../assets/fonts/Raleway-SemiBold.ttf"),
    RalewayBold: require("../assets/fonts/Raleway-ExtraBold.ttf"),
    RalewayExtraBold: require("../assets/fonts/Raleway-Bold.ttf"),
    RalewayBlack: require("../assets/fonts/Raleway-Black.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)/invest"
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
      <StatusBar />
    </Stack>
  );
}
