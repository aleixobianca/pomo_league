import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#2578f5ff",
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
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginLeft: 50,
    // backgroundColor: "#fff",
  },
  boxContainer: {
    width: 200,
    height: 70,
    padding: 6,
    borderWidth: 5, // espessura da borda
    borderColor: "#526B63",
    borderRadius: 10, // cantos arredondados (opcional)
    marginRight: 5,
    backgroundColor: "#FFFFDE",
  },
  infoPokemon1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
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
    fontSize: 12,
    color: "#526b63ff",
  },

  textExp: {
    fontFamily: "PressStart2P_400Regular",
    fontSize: 12,
    color: "#FF3131",
    // backgroundColor: "#333",
  },
});

export default styles;
