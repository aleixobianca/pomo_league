import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";

//Importa a fonte PressStart2P
import {
  useFonts as usePixelFonts,
  PressStart2P_400Regular,
} from "@expo-google-fonts/press-start-2p";

// Importa a fonte Jersey
import { useFonts as useJerseyFonts } from "@expo-google-fonts/jersey-10";
import { Jersey10_400Regular } from "@expo-google-fonts/jersey-10/400Regular";

// Importa as telas que vamos usar
import PaginaPomodoro from "./src/pages/Pomodoro/index";
import PaginaPokemonParty from "./src/pages/PokemonParty";
import PaginaHome from "./src/pages/Home/index";
import PaginaLogin from "./src/pages/Login/index";
import PaginaRegistro from "./src/pages/Registro/index";

// MANTÉM A SPLASH SCREEN ATIVA
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  // Carrega a primeira fonte para o texto
  const [pixelLoaded] = usePixelFonts({
    PressStart2P_400Regular,
  });

  // Carrega a segunda fonte para o texto
  const [jerseyLoaded] = useJerseyFonts({
    Jersey10_400Regular,
  });

  const loaded = pixelLoaded && jerseyLoaded;

  // SÓ ESCONDE A SPLASH SCREEN DEPOIS QUE AS DUAS FONTES CARREGAREM
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // NÃO MOSTRA NADA ATÉ AS DUAS FONTES FICAREM PRONTAS
  if (!loaded) {
    return null;
  }

  // Se a fonte já carregou, mostra o app
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={PaginaHome} />
        <Stack.Screen name="Login" component={PaginaLogin} />
        <Stack.Screen name="Registro" component={PaginaRegistro} />
        <Stack.Screen name="Pomodoro" component={PaginaPomodoro} />
        <Stack.Screen name="PokemonParty" component={PaginaPokemonParty} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
