import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#9CFAC1",
  },

  timerContainer: {
    flex: 2,
    // backgroundColor: "#8187efff",
  },

  pokeContainer: {
    flex: 2,
    justifyContent: "center",
    // backgroundColor: "#d1accdff",
  },

  playStopContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginInline: 80,
    // backgroundColor: "#f6de64ff",
  },
});

export default styles;
