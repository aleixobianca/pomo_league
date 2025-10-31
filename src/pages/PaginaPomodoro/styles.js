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
    position: "relative",
    // backgroundColor: "#92ef81ff",
  },
  circularProgress: {
    position: "absolute",
    // backgroundColor: "#8187efff",
  },
  centro: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#1c23e2ff",
  },
  imgTemporizador: {
    flex: 1,
    width: 300,
    height: 300,
    marginLeft: 15,
    marginTop: 10,
    resizeMode: "contain",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#e6e210ff",
  },
  tempo: {
    color: "#FFF",
    fontSize: 85,
    fontFamily: "Jersey10_400Regular",
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
    lineHeight: 60,
    position: "absolute",
    // backgroundColor: "#d1accdff",
  },
  modalView: {
    margin: 40,
    marginTop: 50,
    height: 630,
    borderColor: "#000",
    borderWidth: 5,
    borderRadius: 20,
    // backgroundColor: "#66FFCC",
    backgroundColor: "#5E31FF",
  },
  modalCloseBtn: {
    alignItems: "flex-end",
    margin: 10,
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalSucessoText: {
    marginBottom: 10,
    color: "#FFF",
    fontSize: 50,
    fontFamily: "Jersey10_400Regular",
    textShadowColor: "#000",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 1,
  },
  containerSlider: {
    justifyContent: "center",
    alignItems: "center",
    position: "bottom",
    // backgroundColor: "#eacc0bff",
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
