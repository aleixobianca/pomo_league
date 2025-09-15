import React from "react";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import PaginaPomodoro from "./src/pages/PaginaPomodoro/index6";
// import ExpBar from "./src/components/ExpBar";
import {
  useFonts,
  PressStart2P_400Regular,
} from "@expo-google-fonts/press-start-2p"; //fonte pixelada

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
// SplashScreen.setOptions({
//   duration: 1000,
//   fade: true,
// });

export default function App() {
  //Start fonte pixelada
  const [loaded] = useFonts({
    PressStart2P_400Regular,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  //End fonte pixelada

  return <PaginaPomodoro />;
}
