import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import stylesPokemon from "./stylesPokemon";

export default function Pokemon(props) {
  const [progress, setProgress] = useState(0);
  const [level, setLevel] = useState(0);
  const taxaUpdate = 0.1;

  function changeProgress(p) {
    const novo = p + taxaUpdate;
    if (novo >= 1) {
      setLevel((l) => l + 1);
      return 0;
    }
    return novo;
  }

  useEffect(() => {
    if (!props.isRunningVar) return; // se não estiver rodando, não cria timer

    const timer = setInterval(() => {
      setProgress((p) => changeProgress(p));
    }, 1000); //cria o timer

    return () => clearInterval(timer); // limpa o timer ao desmontar ou pausar
  }, [props.isRunningVar]); // roda novamente quando isRunningVar mudar

  return (
    <View style={stylesPokemon.container}>
      {/* pokebola inicial */}
      {/* <TouchableOpacity>
        <Image
          source={require("../../assets/img/pokebola.png")}
          style={styles.pokebolaImg}
        />
      </TouchableOpacity> */}

      <Image
        source={require("../../assets/img/pikachu.png")}
        style={stylesPokemon.pikachuImg}
      />
      {/* Barra de nível e XP */}
      <View style={stylesPokemon.infoContainer}>
        <View style={stylesPokemon.boxContainer}>
          <View style={stylesPokemon.infoPokemon1}>
            <Text style={stylesPokemon.textInfoPokemon}>PIKACHU</Text>
            <Text style={stylesPokemon.textInfoPokemon}>Lv{level}</Text>
          </View>
          <View style={stylesPokemon.infoPokemon2}>
            <Text style={stylesPokemon.textInfoPokemon}>EXP</Text>
            {/* {(progress * 100).toFixed(0)}/100 */}
            <View
              style={{
                height: 10,
                flex: 0.9,
                // width: "80%",
                backgroundColor: "#ddd",
                borderRadius: 10,
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: `${progress * 100}%`,
                  backgroundColor: "#5e31ff85",
                  borderRadius: 10,
                }}
              />
            </View>
          </View>
        </View>
        <Text style={stylesPokemon.textExp}>+5Exp</Text>
      </View>
    </View>
  );
}
