import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import Toast from "react-native-toast-message";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"; //icones play/stop
import styles from "./styles";
import Background from "../../components/Background";
import MenuButton from "../../components/MenuButton";
import Pokemon from "../../components/Pokemon/Pokemon";

export default function PaginaPomodoro() {
  const [isRunning, setIsRunning] = useState(false); // controla play/pause
  const [escolheuPokemon, setEscolheuPokemon] = useState(false);
  const [cancelouPomodoro, setCancelouPomodoro] = useState(true);

  return (
    <View style={styles.container}>
      <Background>
        <Toast />
        {/* Menu */}
        <MenuButton />

        {/* Temporizador */}
        <View style={styles.timerContainer}></View>

        {/* Container da Pokebola ou pokemon */}
        <View style={styles.pokeContainer}>
          {/* Mostrar pokemon se escolheuPokemon é true */}
          {/* Mostrar pokebola se escolheuPokemon é false */}
          {escolheuPokemon ? (
            <Pokemon isRunningVar={isRunning} />
          ) : (
            <TouchableOpacity onPress={() => setEscolheuPokemon((p) => !p)}>
              <Image
                source={require("../../assets/img/pokebola.png")}
                style={styles.pokebolaImg}
              />
            </TouchableOpacity>
          )}
        </View>

        {/* Container do Botão Play, Pause e Stop */}
        <View style={styles.playStopContainer}>
          {/* Botão play e pause */}
          {isRunning ? (
            <TouchableOpacity onPress={() => setIsRunning((r) => !r)}>
              <FontAwesome6 name="pause-circle" size={70} color="#5e31ff85" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                if (escolheuPokemon) {
                  setIsRunning((r) => !r);
                  setCancelouPomodoro((r) => (r = false));
                } else {
                  Toast.show({
                    type: "error",
                    text1: "Notificação",
                    text2: "Escolha um pokemon antes de iniciar o pomodoro!",
                  });
                }
              }}
            >
              <FontAwesome6 name="play-circle" size={70} color="#5E31FF" />
            </TouchableOpacity>
          )}

          {/* Botão Stop */}
          {cancelouPomodoro ? null : (
            <TouchableOpacity
              onPress={() => {
                setCancelouPomodoro((c) => (c = true));
                setIsRunning((r) => (r = false));
                setEscolheuPokemon((e) => (e = false));
              }}
            >
              <FontAwesome6 name="stop-circle" size={70} color="#FF3131" />
            </TouchableOpacity>
          )}
        </View>
      </Background>
    </View>
  );
}
