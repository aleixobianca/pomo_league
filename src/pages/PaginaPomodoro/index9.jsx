import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image, Text, Modal } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Toast from "react-native-toast-message";
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
  const [modalVisible, setModalVisible] = useState(false);
  const [fimSucesso, setFimSucesso] = useState(false);

  useEffect(() => {
    if (route && route.params && route.params.pokemonEscolhido) {
      setPokemonAtivo(route.params.pokemonEscolhido);
    }
  }, [route]);

  useEffect(() => {
    let intervalo;
    if (isRunning && segundosRestantes >= 1) {
      intervalo = setInterval(() => {
        setSegundosRestantes((prev) => {
          const novoValor = prev - 1;
          setProgresso(((tempoInicial - novoValor) / tempoInicial) * 100);
          return novoValor;
        });
      }, 10);
    } else if (isRunning && segundosRestantes < 1) {
      setFimSucesso(true);
      setModalVisible(true);
      setCancelouPomodoro(true);
      setIsRunning(false);
      setSegundosRestantes(0);
      clearInterval(intervalo);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [isRunning, segundosRestantes, tempoInicial]);

  const formatarTempo = () => {
    const minutos = Math.floor(segundosRestantes / 60);
    const segundos = segundosRestantes % 60;
    let tempo = `${minutos < 10 ? "0" + minutos : minutos}:${
      segundos < 10 ? "0" + segundos : segundos
    }`;
    return tempo;
  };

  const handleChangeSlider = (val) => {
    setSegundosRestantes(val);
    setTempoInicial(val);
    setProgresso(0);
  };

  const playBtnOnPress = () => {
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
  };

  const stopBtnOnPress = () => {
    setCancelouPomodoro(true);
    setIsRunning(false);
    setPokemonAtivo(null); // Limpa o pokémon escolhido
    setProgresso(0);
    setSegundosRestantes(tempoInicial);
  };

  const reiniciarBtnOnPress = () => {
    stopBtnOnPress();
    setFimSucesso(false);
  };

  return (
    <Background>
      <View style={styles.container}>
        <MenuButton navigation={navigation} />
        <View style={styles.timerContainer}>
          <Image
            source={require("../../assets/img/temporizador_fundo.png")}
            style={[styles.imgTemporizador]}
          />

          <AnimatedCircularProgress
            backgroundColor="#F55656"
            width={100}
            size={222}
            fill={progresso}
            tintColor="#5E31FF"
            rotation={0}
            // lineCap="round"
            style={styles.circularProgress}
          ></AnimatedCircularProgress>

          <View style={styles.centro}>
            <Text style={styles.tempo}>{formatarTempo()}</Text>
          </View>
        </View>

        {isRunning || progresso > 0 ? null : (
          <View style={styles.containerSlider}>
            <Slider
              style={{ width: 250, height: 30 }}
              minimumValue={0}
              maximumValue={7200}
              step={600}
              value={segundosRestantes}
              onValueChange={handleChangeSlider}
              minimumTrackTintColor="#5E31FF"
              maximumTrackTintColor="#1c1acbff"
              thumbTintColor="#5E31FF"
            />
          </View>
        )}

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
            <TouchableOpacity
              onPress={() => navigation.navigate("PokemonParty")}
            >
              <Image
                source={require("../../assets/img/pokebola.png")}
                style={styles.pokebolaImg}
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.playStopContainer}>
          <Toast />

          {fimSucesso ? (
            // botão reiniciar
            <TouchableOpacity onPress={() => reiniciarBtnOnPress()}>
              <FontAwesome6 name="rotate-left" size={70} color="#5E31FF" />
            </TouchableOpacity>
          ) : isRunning ? (
            // botão pause
            <TouchableOpacity onPress={() => setIsRunning((r) => !r)}>
              <FontAwesome6 name="pause-circle" size={70} color="#5E31FF" />
            </TouchableOpacity>
          ) : (
            // botão play
            <TouchableOpacity onPress={() => playBtnOnPress()}>
              <FontAwesome6 name="play-circle" size={70} color="#5E31FF" />
            </TouchableOpacity>
          )}

          {cancelouPomodoro ? null : (
            // botão stop
            <TouchableOpacity onPress={() => stopBtnOnPress()}>
              <FontAwesome6 name="stop-circle" size={70} color="#F55656" />
            </TouchableOpacity>
          )}

          {/* Mensagem de sucesso */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.modalView}>
              <TouchableOpacity
                style={styles.modalCloseBtn}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <FontAwesome6 name="xmark" size={34} color="#000" />
              </TouchableOpacity>
              <View style={styles.modalContent}>
                <Text style={styles.modalSucessoText}>Você conseguiu!</Text>
                <FontAwesome6 name="champagne-glasses" size={50} color="#FFF" />
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </Background>
  );
}
