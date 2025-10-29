import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function BackButton({ navigation, page }) {
  return (
    <View style={styles.backButtonContainer}>
      <TouchableOpacity
        // style={styles.iconButton}
        onPress={() => navigation.navigate(page)}
      >
        <Ionicons name="arrow-back-circle-outline" size={50} color="#5E31FF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  backButtonContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 30,
    // backgroundColor: "red",
  },
  // iconButton: {
  //   marginLeft: 15,
  // },
});
