import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Button } from "react-native";
import styles from "./styles";
import Background from "../../components/Background";
import MenuButton from "../../components/MenuButton";
import Pokemon from "../../components/Pokemon/Pokemon";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"; //icones play/stop

export default function PaginaPomodoro() {
  const [isRunning, setIsRunning] = useState(false); // controla play/pause

  return (
    <View style={styles.container}>
      <Background>
        {/* Menu */}
        <MenuButton />
        {/* Temporizador */}
        <View style={styles.timerContainer}></View>
        <View style={styles.pokeContainer}>
          <Pokemon isRunningVar={isRunning} />
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
