import React from "react";
import { View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function BackButton() {
  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back-circle-outline"
        size={50}
        color="#5E31FF"
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 25,
  },
  button: {
    marginLeft: 15,
  },
});
