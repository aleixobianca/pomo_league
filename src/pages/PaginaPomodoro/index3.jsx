import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import Background from "../../components/Background";
import MenuButton from "../../components/MenuButton";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"; //icones
//  play/stop
import {
  useFonts,
  PressStart2P_400Regular,
} from "@expo-google-fonts/press-start-2p"; //fonte pixelada

export default function PaginaPomodoro() {
  const [isRunning, setIsRunning] = useState(false); // controla play/pause
  const [progress, setProgress] = useState(0);
  const [level, setLevel] = useState(0);
  const taxaUpdate = 0.1;

  //Font pixelada
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  //Animação da recompensa
  function changeProgress(p) {
    const novo = p + taxaUpdate;
    if (novo >= 1) {
      setLevel((l) => l + 1);
      return 0;
    }
    return novo;
  }

  useEffect(() => {
    if (!isRunning) return; // se não estiver rodando, não cria timer

    const timer = setInterval(() => {
      setProgress((p) => changeProgress(p));
    }, 1000);

    return () => clearInterval(timer); // limpa o timer ao desmontar ou pausar
  }, [isRunning]); // roda novamente quando isRunning mudar

  return (
    <View style={styles.container}>
      <Background>
        {/* Menu */}
        <MenuButton />
        {/* Temporizador */}
        <View style={styles.timerContainer}></View>
        {/* Pokebola ou Pikachu */}
        <View style={styles.pokeContainer}>
          {/* pokebola inicial */}
          {/* <TouchableOpacity>
            <Image
              source={require("../../assets/img/pokebola.png")}
              style={styles.pokebolaImg}
            />
          </TouchableOpacity> */}

          <Image
            source={require("../../assets/img/pikachu.png")}
            style={styles.pikachuImg}
          />
          {/* Barra de nível e XP */}
          <View style={styles.expLevelContainer}>
            <View style={styles.levelContainer}>
              <View style={styles.infoPokemon1}>
                <Text style={styles.textInfoPokemon}>PIKACHU</Text>
                <Text style={styles.textInfoPokemon}>Lv{level}</Text>
              </View>
              <View style={styles.infoPokemon2}>
                <Text style={styles.textInfoPokemon}>EXP</Text>
                <View style={{ margin: 20 }}>
                  <Text>{(progress * 100).toFixed(0)}/100</Text>
                  <View
                    style={{
                      height: 20,
                      width: "100%",
                      backgroundColor: "#ddd",
                      borderRadius: 10,
                      marginVertical: 10,
                    }}
                  >
                    <View
                      style={{
                        height: "100%",
                        width: `${progress * 100}%`,
                        backgroundColor: "blue",
                        borderRadius: 10,
                      }}
                    />
                  </View>
                </View>
              </View>
              <Text>+5Exp</Text>
            </View>
          </View>
        </View>
        {/* Botão Play ou Stop */}
        <View style={styles.playStopContainer}>
          <TouchableOpacity onPress={() => setIsRunning((r) => !r)}>
            {isRunning ? (
              <FontAwesome6 name="pause-circle" size={24} color="black" />
            ) : (
              <FontAwesome6 name="play-circle" size={70} color="#5E31FF" />
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome6 name="stop-circle" size={70} color="#FF3131" />
          </TouchableOpacity>
        </View>
      </Background>
    </View>
  );
}
