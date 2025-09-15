import React from "react";
import {
  useFonts,
  PressStart2P_400Regular,
} from "@expo-google-fonts/press-start-2p"; //fonte pixelada

import PaginaPomodoro from "./src/pages/PaginaPomodoro/index5";
// import ExpBar from "./src/components/ExpBar";

export default function App() {
  // return <ExpBar />;
  //Font pixelada
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  // if (!fontsLoaded) {
  //   return null;
  // }
  return <PaginaPomodoro />;
}
