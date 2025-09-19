import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import Toast from "react-native-toast-message"; //notificação na tela persolizada
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Slider from "@react-native-community/slider";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"; //icones play/stop
import styles from "./styles";
import Background from "../../components/Background";
import MenuButton from "../../components/MenuButton";
import Pokemon from "../../components/Pokemon/Pokemon";

export default function PaginaPomodoro() {
  const [isRunning, setIsRunning] = useState(false); // controla play/pause
  const [escolheuPokemon, setEscolheuPokemon] = useState(false);
  const [cancelouPomodoro, setCancelouPomodoro] = useState(true);
  const [tempoInicial, setTempoInicial] = useState(3000);
  const [segundosRestantes, setSegundosRestantes] = useState(tempoInicial); // 50 minutos
  const [progresso, setProgresso] = useState(0);

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
        {/* Menu */}
        <MenuButton />

        {/* Temporizador */}
        <View style={styles.timerContainer}>
          {/* slider que define o tempo*/}
          {isRunning || progresso > 0 ? null : (
            <View style={styles.containerSlider}>
              <Slider
                style={{
                  width: 250,
                  height: 30,
                }}
                minimumValue={0}
                maximumValue={7200} //equivalente a 120 min
                step={600} // garante que vá de 10 em 10 min
                value={segundosRestantes}
                onValueChange={handleChange}
                minimumTrackTintColor="#5E31FF"
                maximumTrackTintColor="#1c1acbff"
                thumbTintColor="#5E31FF"
              />
            </View>
          )}

          {/* relógio circular*/}
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

        {/* Container da Pokebola ou pokemon */}
        <View style={styles.pokeContainer}>
          {/* Mostrar pokemon se escolheuPokemon é true */}
          {/* Mostrar pokebola se escolheuPokemon é false */}
          {escolheuPokemon ? (
            <Pokemon isRunningVar={isRunning} progressoTimer={progresso} />
          ) : (
            <TouchableOpacity onPress={() => setEscolheuPokemon((p) => !p)}>
              <Image
                source={require("../../assets/img/pokebola.png")}
                style={styles.pokebolaImg}
              />
            </TouchableOpacity>
          )}
        </View>

        {/* Container do Botão Play, Pause e Stop */}
        <View style={styles.playStopContainer}>
          {/* Botão play e pause */}
          <Toast />{" "}
          {/* notificação coso clique em play sem ter escolhido um pokemon */}
          {isRunning ? (
            <TouchableOpacity onPress={() => setIsRunning((r) => !r)}>
              <FontAwesome6 name="pause-circle" size={70} color="#5e31ff85" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                if (escolheuPokemon) {
                  setIsRunning((r) => !r);
                  setCancelouPomodoro((r) => (r = false));
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
          {/* Botão Stop */}
          {cancelouPomodoro ? null : (
            <TouchableOpacity
              onPress={() => {
                setCancelouPomodoro((c) => (c = true));
                setIsRunning((r) => (r = false));
                setEscolheuPokemon((e) => (e = false));
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
