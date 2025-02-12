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
    QuickSandLight: require("../assets/fonts/Quicksand-Light.ttf"),
    QuickSandMedium: require("../assets/fonts/Quicksand-Medium.ttf"),
    QuickSandRegular: require("../assets/fonts/Quicksand-Regular.ttf"),
    QuickSandSemiBold: require("../assets/fonts/Quicksand-SemiBold.ttf"),
    QuickSandBold: require("../assets/fonts/Quicksand-Bold.ttf"),
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
