import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Container principal para centralizar
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  // O NOVO estilo genérico para a imagem do Pokémon
  pokemonImage: {
    width: 200,    // O tamanho que você gostou
    height: 200,   // O tamanho que você gostou
    resizeMode: 'contain',
    marginBottom: 10, // Espaço entre a imagem e o nome
  },
  // O NOVO estilo genérico para o nome
  pokemonName: {
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#333',
    fontFamily: "PressStart2P_400Regular", // Usando sua fonte pixelada
  },
  // Mantendo os estilos antigos da barra de XP que você já tinha
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
    alignItems: "flex-end",
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
