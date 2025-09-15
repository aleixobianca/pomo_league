import React from "react";
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
  let level = 5;

  //Font pixelada
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

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
              </View>
            </View>
            <Text>+5Exp</Text>
          </View>
        </View>
        {/* Botão Play ou Stop */}
        <View style={styles.playStopContainer}>
          <TouchableOpacity>
            {/* <FontAwesome6 name="play-circle" size={70} color="#5E31FF" /> */}
            <FontAwesome6 name="stop-circle" size={70} color="#FF3131" />
          </TouchableOpacity>
        </View>
      </Background>
    </View>
  );
}
