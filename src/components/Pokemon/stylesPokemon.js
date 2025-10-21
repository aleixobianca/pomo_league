import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  pokemonImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  pokemonName: {
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#333',
    fontFamily: "PressStart2P_400Regular",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  boxContainer: {
    width: 200,
    height: 70,
    padding: 6,
    borderWidth: 5,
    borderColor: "#526B63",
    borderRadius: 10,
    marginRight: 5,
    backgroundColor: "#FFFFDE",
  },
  infoPokemon1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  infoPokemon2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", 
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
  },
});

export default styles;
