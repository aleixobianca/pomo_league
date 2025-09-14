import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#9CFAC1",
  },
  timerContainer: {
    flex: 2,
    // backgroundColor: "green",
  },
  pokeContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "pink",
  },
  pokebolaImg: {
    width: 80,
    height: 80,
  },
  pikachuImg: {
    width: 150,
    height: 150,
    marginLeft: 35,
    marginBottom: 10,
  },
  expLevelContainer: {},
  levelContainer: {
    width: 200,
    height: 70,
    padding: 6,
    borderWidth: 5, // espessura da borda
    borderColor: "#526B63",
    borderRadius: 10, // cantos arredondados (opcional)
    backgroundColor: "#FFFFDE",
  },
  infoPokemon1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  infoPokemon2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    // backgroundColor: "green",
  },

  textInfoPokemon: {
    fontFamily: "PressStart2P_400Regular",
    fontSize: 13,
  },

  playStopContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginInline: 80,
  },
});

export default styles;
