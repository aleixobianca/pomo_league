import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa as duas telas que vamos usar
import PaginaPomodoro from './src/pages/PaginaPomodoro/index8'; // Verifique se o caminho para o seu arquivo está certo
import PaginaPokemonParty from './src/pages/PaginaPokemonParty';

// Cria o "controlador" de telas
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // O NavigationContainer é o "pai" de toda a navegação
    <NavigationContainer>
      {/* O Stack.Navigator é o nosso "baralho" de telas */}
      <Stack.Navigator 
        initialRouteName="Pomodoro" // Diz que a primeira tela a abrir é a Pomodoro
        screenOptions={{ headerShown: false }} // Isso esconde a barra de título que aparece por padrão
      >
        {/* Aqui declaramos quais telas fazem parte do nosso baralho */}
        <Stack.Screen name="Pomodoro" component={PaginaPomodoro} />
        <Stack.Screen name="PokemonParty" component={PaginaPokemonParty} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}