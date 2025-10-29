import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
    color: "#5E31FF",
    fontFamily: "PressStart2P_400Regular",
  },
  pokemonCard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    height: 100,
  },
  pokemonImage: {
    width: 70,
    height: 70,
  },
  pokedexNumberText: {
    fontFamily: "PressStart2P_400Regular",
    fontSize: 20,
    color: "#aaa",
    textAlign: "center",
  },
});

export default styles;
