import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MenuButton() {
  return (
    <View style={styles.menuButtonContainer}>
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="menu-sharp" size={40} color="#5E31FF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuButtonContainer: {
    flex: 0.5,
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 25,
    // backgroundColor: "red",
  },
  iconButton: {
    marginLeft: 15,
  },
});
