import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import Toast from "react-native-toast-message";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Slider from "@react-native-community/slider";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import styles from "./styles";
import Background from "../../components/Background";
import MenuButton from "../../components/MenuButton";
import Pokemon from "../../components/Pokemon/Pokemon";

export default function PaginaPomodoro({ navigation, route }) {
  const [isRunning, setIsRunning] = useState(false);
  const [cancelouPomodoro, setCancelouPomodoro] = useState(true);
  const [tempoInicial, setTempoInicial] = useState(3000);
  const [segundosRestantes, setSegundosRestantes] = useState(tempoInicial);
  const [progresso, setProgresso] = useState(0);
  const [pokemonAtivo, setPokemonAtivo] = useState(null);

  useEffect(() => {
    if (route && route.params && route.params.pokemonEscolhido) {
      setPokemonAtivo(route.params.pokemonEscolhido);
    }
  }, [route]); 

  useEffect(() => {
    let intervalo;
    if (isRunning && segundosRestantes > 0) {
      intervalo = setInterval(() => {
        setSegundosRestantes((prev) => {
          const novoValor = prev - 1;
          setProgresso(((tempoInicial - novoValor) / tempoInicial) * 100);
          return novoValor;
        });
      }, 1000);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [isRunning, segundosRestantes, tempoInicial]);

  const formatarTempo = () => {
    const minutos = Math.floor(segundosRestantes / 60);
    const segundos = segundosRestantes % 60;
    return `${minutos < 10 ? "0" + minutos : minutos}:${
      segundos < 10 ? "0" + segundos : segundos
    }`;
  };

  const handleChange = (val) => {
    setSegundosRestantes(val);
    setTempoInicial(val);
    setProgresso(0);
  };

  return (
    <View style={styles.container}>
      <Background>
        <MenuButton />

        <View style={styles.timerContainer}>
          {isRunning || progresso > 0 ? null : (
            <View style={styles.containerSlider}>
              <Slider
                style={{ width: 250, height: 30 }}
                minimumValue={0}
                maximumValue={7200}
                step={600}
                value={segundosRestantes}
                onValueChange={handleChange}
                minimumTrackTintColor="#5E31FF"
                maximumTrackTintColor="#1c1acbff"
                thumbTintColor="#5E31FF"
              />
            </View>
          )}
          <AnimatedCircularProgress
            backgroundColor="#FF3131"
            width={25}
            size={250}
            fill={progresso}
            tintColor="#5E31FF"
            rotation={0}
            lineCap="round"
            style={styles.circularProgress}
          >
            {() => (
              <View style={styles.centro}>
                <Text style={styles.tempo}>{formatarTempo()}</Text>
              </View>
            )}
          </AnimatedCircularProgress>
        </View>

        <View style={styles.pokeContainer}>
          {pokemonAtivo ? (
            // CORREÇÃO 2: Garantimos que o componente <Pokemon> receba os dados
            // que ele precisa para funcionar, incluindo os dados do pokémon ativo.
            <Pokemon
              pokemonData={pokemonAtivo} // Passando o objeto inteiro do Pokémon
              isRunningVar={isRunning}
              progressoTimer={progresso}
            />
          ) : (
            <TouchableOpacity onPress={() => navigation.navigate("PokemonParty")}>
              <Image
                source={require("../../assets/img/pokebola.png")}
                style={styles.pokebolaImg}
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.playStopContainer}>
          <Toast />
          {isRunning ? (
            <TouchableOpacity onPress={() => setIsRunning((r) => !r)}>
              <FontAwesome6 name="pause-circle" size={70} color="#5e31ff85" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                if (pokemonAtivo) {
                  setIsRunning((r) => !r);
                  setCancelouPomodoro(false);
                } else {
                  Toast.show({
                    type: "error",
                    text1: "Notificação",
                    text2: "Escolha um pokemon antes de iniciar o pomodoro!",
                  });
                }
              }}
            >
              <FontAwesome6 name="play-circle" size={70} color="#5E31FF" />
            </TouchableOpacity>
          )}
          
          {cancelouPomodoro ? null : (
            <TouchableOpacity
              onPress={() => {
                setCancelouPomodoro(true);
                setIsRunning(false);
                setPokemonAtivo(null); // Limpa o pokémon escolhido
                setProgresso(0);
                setSegundosRestantes(tempoInicial);
              }}
            >
              <FontAwesome6 name="stop-circle" size={70} color="#FF3131" />
            </TouchableOpacity>
          )}
        </View>
      </Background>
    </View>
  );
}