import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import stylesPokemon from "./stylesPokemon";

export default function Pokemon({ pokemonData, isRunningVar, progressoTimer }) {
  const [progressPokemon, setProgressPokemon] = useState(0);
  const [level, setLevel] = useState(0);
  const taxaUpdate = 0.1;

  if (!pokemonData) {
    return null;
  }

  function changeProgress(p) {
    const novo = p + taxaUpdate;
    if (novo >= 1) {
      setLevel((l) => l + 1);
      return 0;
    }
    return novo;
  }

  useEffect(() => {
    if (!isRunningVar) return;
    setProgressPokemon((p) => changeProgress(p));
  }, [isRunningVar, progressoTimer]);

  return (
    <View style={stylesPokemon.container}>
      {}
      <Image source={pokemonData.image} style={stylesPokemon.pokemonImage} />

      <View style={stylesPokemon.infoContainer}>
        <View style={stylesPokemon.boxContainer}>
          <View style={stylesPokemon.infoPokemon1}>
            {}
            <Text style={stylesPokemon.textInfoPokemon}>
              {pokemonData.name.toUpperCase()}
            </Text>
            <Text style={stylesPokemon.textInfoPokemon}>Lv{level}</Text>
          </View>
          <View style={stylesPokemon.infoPokemon2}>
            <Text style={stylesPokemon.textInfoPokemon}>EXP:</Text>
            <View
              style={{
                height: 10,
                flex: 0.9,
                backgroundColor: "#ddd",
                borderRadius: 10,
                marginTop: -4.5,
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
