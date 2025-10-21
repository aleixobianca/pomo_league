import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import stylesPokemon from "./stylesPokemon";

// MUDANÇA 1: Recebemos 'pokemonData' e desestruturamos os props
export default function Pokemon({ pokemonData, isRunningVar, progressoTimer }) {
  const [progressPokemon, setProgressPokemon] = useState(0);
  const [level, setLevel] = useState(0);
  const taxaUpdate = 0.1;

  // MUDANÇA 2: Um check de segurança. Se nenhum pokémon foi escolhido, não mostra nada.
  if (!pokemonData) {
    return null;
  }

  // Sua lógica de progresso (continua igual)
  function changeProgress(p) {
    const novo = p + taxaUpdate;
    if (novo >= 1) {
      setLevel((l) => l + 1);
      return 0;
    }
    return novo;
  }

  // Seu useEffect (continua igual, só usando os props diretos)
  useEffect(() => {
    if (!isRunningVar) return; 
    setProgressPokemon((p) => changeProgress(p));
  }, [isRunningVar, progressoTimer]);

  return (
    <View style={stylesPokemon.container}>
      {/* MUDANÇA 3: A IMAGEM AGORA É DINÂMICA */}
      <Image
        source={pokemonData.image} 
        style={stylesPokemon.pokemonImage} // Usando o estilo 'pokemonImage' que definimos
      />

      {/* Barra de nível e XP */}
      <View style={stylesPokemon.infoContainer}>
        <View style={stylesPokemon.boxContainer}>
          <View style={stylesPokemon.infoPokemon1}>
            {/* MUDANÇA 4: O NOME AGORA É DINÂMICO */}
            <Text style={stylesPokemon.textInfoPokemon}>
              {pokemonData.name.toUpperCase()}
            </Text>
            <Text style={stylesPokemon.textInfoPokemon}>Lv{level}</Text>
          </View>
          <View style={stylesPokemon.infoPokemon2}>
            <Text style={stylesPokemon.textInfoPokemon}>EXP</Text>
            <View
              style={{
                height: 10,
                flex: 0.9,
                backgroundColor: "#ddd",
                borderRadius: 10,
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: `${progressPokemon * 100}%`,
                  backgroundColor: "#5e31ff85",
                  borderRadius: 10,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}