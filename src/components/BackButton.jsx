import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function BackButton() {
  return (
    <View style={styles.backButtonContainer}>
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="arrow-back-circle-outline" size={50} color="#5E31FF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  backButtonContainer: {
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
