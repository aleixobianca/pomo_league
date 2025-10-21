import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';

// IMPORTANDO A FONTE
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';

// Importa as duas telas que vamos usar
import PaginaPomodoro from './src/pages/PaginaPomodoro/index8';
import PaginaPokemonParty from './src/pages/PaginaPokemonParty';

// MANTÉM A SPLASH SCREEN ATIVA
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  // CARREGA A FONTE
  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  // SÓ ESCONDE A SPLASH SCREEN DEPOIS QUE A FONTE CARREGAR
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // NÃO MOSTRA NADA ATÉ A FONTE ESTAR PRONTA
  // Esta é a parte mais importante!
  if (!fontsLoaded) {
    return null;
  }

  // Se a fonte já carregou, mostra o app
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Pomodoro"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Pomodoro" component={PaginaPomodoro} />
        <Stack.Screen name="PokemonParty" component={PaginaPokemonParty} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}