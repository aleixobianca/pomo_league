import React from "react";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import PaginaPomodoro from "./src/pages/PaginaPomodoro/index8";
// import ExpBar from "./src/components/ExpBar";
// import {
//   useFonts,
//   PressStart2P_400Regular,
// } from "@expo-google-fonts/press-start-2p"; //fonte pixelada

// // Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

// // Set the animation options. This is optional.
// // SplashScreen.setOptions({
// //   duration: 1000,
// //   fade: true,
// // });

// export default function App() {
//   //Start fonte pixelada
//   const [loaded] = useFonts({
//     PressStart2P_400Regular,
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }
//   //End fonte pixelada

//   return <PaginaPomodoro />;
// }

import {
  useFonts as usePixelFonts,
  PressStart2P_400Regular,
} from "@expo-google-fonts/press-start-2p"; // fonte pixelada

import { useFonts as useJerseyFonts } from "@expo-google-fonts/jersey-10"; // nova fonte

import { Jersey10_400Regular } from "@expo-google-fonts/jersey-10/400Regular"; // nova fonte

// Manter splash visível enquanto as fontes dos textos carregam
SplashScreen.preventAutoHideAsync();

export default function App() {
  // carregar duas fontes para o texto
  const [pixelLoaded] = usePixelFonts({
    PressStart2P_400Regular,
  });

  const [jerseyLoaded] = useJerseyFonts({
    Jersey10_400Regular,
  });

  const loaded = pixelLoaded && jerseyLoaded;

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <PaginaPomodoro />;
}
