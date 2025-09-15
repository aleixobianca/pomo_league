import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";
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
  //Font pixelada
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  // if (!fontsLoaded) {
  //   return null;
  // }

  // Recompensa
  const [isRunning, setIsRunning] = useState(true); // controla play/pause
  const [progress, setProgress] = useState(0);
  const [level, setLevel] = useState(0);
  const taxaUpdate = 0.1;

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

  //________________________________________________________________________________

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
          <View style={styles.infoContainer}>
            <View style={styles.boxContainer}>
              <View style={styles.infoPokemon1}>
                <Text style={styles.textInfoPokemon}>PIKACHU</Text>
                <Text style={styles.textInfoPokemon}>Lv{level}</Text>
              </View>
              <View style={styles.infoPokemon2}>
                <Text style={styles.textInfoPokemon}>EXP</Text>
                {/* {(progress * 100).toFixed(0)}/100 */}
                <View
                  style={{
                    height: 10,
                    flex: 0.9,
                    // width: "80%",
                    backgroundColor: "#ddd",
                    borderRadius: 10,
                    marginVertical: 8,
                  }}
                >
                  <View
                    style={{
                      height: "100%",
                      width: `${progress * 100}%`,
                      backgroundColor: "#5e31ff85",
                      borderRadius: 10,
                    }}
                  />
                </View>
              </View>
            </View>
            <Text>+5Exp</Text>
          </View>
        </View>
        {/* Botão Play ou Stop */}
        <View style={styles.playStopContainer}>
          <TouchableOpacity onPress={() => setIsRunning((r) => !r)}>
            {isRunning ? (
              <FontAwesome6 name="pause-circle" size={70} color="#5e31ff85" />
            ) : (
              <FontAwesome6 name="play-circle" size={70} color="#5E31FF" />
            )}
          </TouchableOpacity>

          <TouchableOpacity>
            {/* <FontAwesome6 name="play-circle" size={70} color="#5E31FF" /> */}
            <FontAwesome6 name="stop-circle" size={70} color="#FF3131" />
          </TouchableOpacity>

          {/* <Button
            title={isRunning ? "Pause" : "Play"}
            onPress={() => setIsRunning((r) => !r)}
          /> */}
        </View>
      </Background>
    </View>
  );
}
