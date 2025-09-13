import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Background from "../../components/Background";
import BackButton from "../../components/BackButton";

export default function PaginaPomodoro() {
  return (
    <View style={styles.container}>
      <Background>
        {/* <Text>Olá mundo</Text> */}
        <BackButton />
        <Text>Olá mundo</Text>
      </Background>
    </View>
  );
}
