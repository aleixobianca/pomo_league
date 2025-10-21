import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#9CFAC1",
  },

  timerContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#92ef81ff",
  },
  circularProgress: {
    marginBottom: 30,
    // backgroundColor: "#8187efff",
  },
  centro: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#d1accdff",
  },
  tempo: {
    color: "#5E31FF",
    fontSize: 45,
    // fontWeight: "bold",
    fontFamily: 'PressStart2P_400Regular',
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
    lineHeight: 60
  },
  containerSlider: {
    justifyContent: "center",
    alignItems: "center",
  },

  pokeContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#d1accdff",
  },

  pokebolaImg: {
    width: 80,
    height: 80,
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
