import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import Background from "../../components/Background";
import BackButton from "../../components/BackButton";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"; //icones play/stop

export default function PaginaPomodoro() {
  return (
    <View style={styles.container}>
      <Background>
        {/* <Text>Olá mundo</Text> */}
        <BackButton />
        <View style={styles.timerContainer}></View>
        <View style={styles.pokeContainer}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/img/pokebola.png")}
              style={styles.pokebolaImg}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.playStopContainer}>
          <TouchableOpacity>
            <FontAwesome6 name="play-circle" size={60} color="#5E31FF" />
          </TouchableOpacity>
        </View>
      </Background>
    </View>
  );
}
