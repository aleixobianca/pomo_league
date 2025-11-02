import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#9CFAC1",
  },
  iconTopoBreakWork: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: -20,
    // backgroundColor: "#f8f409ff",
  },
  timerContainer: {
    height: 250,
    marginTop: -20,
    // backgroundColor: "#f8f409ff",
  },
  innerTimerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
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
  containerSlider: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    position: "bottom",
    // backgroundColor: "#eacc0bff",
  },
  breakWorkContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    // backgroundColor: "#e709e3ff",
  },
  innerBreakWorkContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 5,
    justifyContent: "center",
    // backgroundColor: "#23e709ff",
  },

  picker: {
    width: 120,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#e709d5ff",
  },
  pickerItemBreak: {
    color: "#5E31FF",
    fontSize: 18,
  },
  pickerItemWork: {
    color: "#F55656",
    fontSize: 18,
  },
  pokeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#d1accdff",
  },
  pokebolaImg: {
    width: 80,
    height: 80,
    // backgroundColor: "#23e709ff",
  },
  playStopContainer: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    marginInline: 80,
    padding: 5,
    // backgroundColor: "#f6de64ff",
  },
  modalView: {
    margin: 40,
    marginTop: 50,
    height: 630,
    borderColor: "#000",
    borderWidth: 5,
    borderRadius: 20,
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
  modalWorkText: {
    marginBottom: 10,
    color: "#FFF",
    fontSize: 50,
    fontFamily: "Jersey10_400Regular",
    textShadowColor: "#000",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 1,
  },
  modalContinuarBtn: {
    backgroundColor: "#FFF",
    width: "60%",
    paddingVertical: 15,
    borderRadius: 10,
    margin: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalContinuarBtnText: {
    fontFamily: "Jersey10_400Regular",
    color: "#5E31FF",
    fontSize: 24,
  },
});

export default styles;
