import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, Image, Text, Modal } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Toast from "react-native-toast-message";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import styles from "./styles";
import Background from "../../components/Background";
import MenuButton from "../../components/MenuButton";
import Pokemon from "../../components/Pokemon/Pokemon";

export default function PaginaPomodoro({ navigation, route }) {
  const [isRunning, setIsRunning] = useState(false);
  const [tempoInicial, setTempoInicial] = useState(3000);
  const [segundosRestantes, setSegundosRestantes] = useState(tempoInicial);
  const [progresso, setProgresso] = useState(0);
  const [cancelouPomodoro, setCancelouPomodoro] = useState(true);
  const [fimSucesso, setFimSucesso] = useState(false);
  const [modalSucessoVisible, setModalSucessoVisible] = useState(false);
  const [modalBreakWorkVisible, setModalBreakWorkVisible] = useState(false);
  const [breakDuration, setBreakDuration] = useState(60 * 5);
  const [workUnits, setWorkUnits] = useState(2);
  // const [workUnitsAtual, setWorkUnitsAtual] = useState(1);
  const workUnitsAtual = useRef(1);
  const [nextBreakLiberado, setNextBreakLiberado] = useState(true);
  const [pokemonAtivo, setPokemonAtivo] = useState(null);
  const [sizeViewTimer, setSizeViewTimer] = useState(0);
  const breakItems = [
    { id: 0, value: 60 * 1, label: "1 min" },
    { id: 1, value: 60 * 5, label: "5 min" },
    { id: 2, value: 60 * 10, label: "10 min" },
    { id: 3, value: 60 * 15, label: "15 min" },
    { id: 4, value: 60 * 20, label: "20 min" },
    { id: 5, value: 60 * 25, label: "25 min" },
    { id: 6, value: 60 * 30, label: "30 min" },
  ];
  const workItems = [
    { id: 0, value: 2, label: 2 },
    { id: 1, value: 3, label: 3 },
    { id: 2, value: 4, label: 4 },
    { id: 3, value: 5, label: 5 },
    { id: 4, value: 6, label: 6 },
    { id: 5, value: 7, label: 7 },
    { id: 6, value: 8, label: 8 },
  ];

  useEffect(() => {
    if (route && route.params && route.params.pokemonEscolhido) {
      setPokemonAtivo(route.params.pokemonEscolhido);
    }
  }, [route]);

  // useEffect(() => {
  //   let timer;
  //   if (isRunning && segundosRestantes >= 1) {
  //     timer = setInterval(() => {
  //       setSegundosRestantes((prev) => {
  //         const novoValor = prev - 1;
  //         setProgresso(((tempoInicial - novoValor) / tempoInicial) * 100);
  //         return novoValor;
  //       });
  //     }, 10);
  //   } else if (isRunning && segundosRestantes < 1) {
  //     setFimSucesso(true);
  //     setModalVisible(true);
  //     setCancelouPomodoro(true);
  //     setIsRunning(false);
  //     setSegundosRestantes(0);
  //     clearInterval(timer);
  //   } else {
  //     clearInterval(timer);
  //   }
  //   return () => clearInterval(timer);
  // }, [isRunning, segundosRestantes, tempoInicial]);

  // useEffect(() => {
  //   if (!isRunning) return;
  //   let timer = setInterval(() => {
  //     setSegundosRestantes((prev) => {
  //       const novoValor = prev - 1;
  //       setProgresso(((tempoInicial - novoValor) / tempoInicial) * 100);
  //       return novoValor;
  //     });
  //   }, 250);

  //   return () => clearInterval(timer);
  // }, [isRunning, tempoInicial]);

  // useEffect(() => {
  //   if (isRunning && segundosRestantes < 1) {
  //     setIsRunning(false);
  //     setFimSucesso(true);
  //     setModalVisible(true);
  //     setCancelouPomodoro(true);
  //     setSegundosRestantes(0);
  //   }
  // }, [isRunning, segundosRestantes]);

  useEffect(() => {
    if (!isRunning) return;
    let timer = setInterval(() => {
      setSegundosRestantes((prev) => {
        let novoValor = prev - 1;
        setProgresso(((tempoInicial - novoValor) / tempoInicial) * 100);
        return novoValor;
      });
    }, 250);

    return () => clearInterval(timer);
  }, [isRunning, tempoInicial, nextBreakLiberado]);

  // useEffect(() => {
  //   if (!isRunning) return;

  //   if (isRunning && segundosRestantes < 1) {
  //     if (workUnitsToGo < 1) {
  //       setIsRunning(false);
  //       setFimSucesso(true);
  //       setModalSucessoVisible(true);
  //       setCancelouPomodoro(true);
  //       setSegundosRestantes(0);
  //     } else if (nextBreakLiberado) {
  //       setModalBreakVisible(true);
  //       setSegundosRestantes(breakDuration);
  //       setNextBreakLiberado(false);
  //     } else {
  //       setModalBreakVisible(true);
  //       setSegundosRestantes(tempoInicial);
  //       setWorkUnitsToGo((unidades) => unidades - 1);
  //       setNextBreakLiberado(true);
  //     }
  //   }
  // }, [isRunning, segundosRestantes, breakDuration]);

  useEffect(() => {
    if (!isRunning) return;
    if (segundosRestantes >= 1) return;

    if (isRunning && segundosRestantes < 1) {
      if (workUnitsAtual >= workUnits) {
        setIsRunning(false);
        setFimSucesso(true);
        setModalSucessoVisible(true);
        setCancelouPomodoro(true);
        setSegundosRestantes(0);
      } else if (nextBreakLiberado) {
        setModalBreakWorkVisible(true);
        setSegundosRestantes(breakDuration);
        setNextBreakLiberado(false);
      } else {
        setModalBreakWorkVisible(true);
        setSegundosRestantes(tempoInicial);
        setNextBreakLiberado(true);
        workUnitsAtual.current++;
      }
    }
  }, [
    isRunning,
    segundosRestantes,
    tempoInicial,
    breakDuration,
    // workUnitsAtual,
    workUnits,
    nextBreakLiberado,
  ]);

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
        <View
          style={styles.timerContainer}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setSizeViewTimer(height); // define o tamanho igual à altura da View
          }}
        >
          {sizeViewTimer > 0 && (
            <View style={styles.innerTimerContainer}>
              <AnimatedCircularProgress
                backgroundColor="#F55656"
                width={125}
                size={250}
                fill={progresso}
                tintColor="#5E31FF"
                rotation={0}
                // lineCap="round"
                style={styles.circularProgress}
              />
              <View style={styles.centro}>
                <Text style={styles.tempo}>{formatarTempo()}</Text>
              </View>
            </View>
          )}
        </View>

        {isRunning || progresso > 0 ? null : (
          <View style={styles.containerSlider}>
            <Slider
              style={{ width: 250, height: 30 }}
              minimumValue={0}
              maximumValue={7200}
              step={60 * 5}
              value={segundosRestantes}
              onValueChange={handleChangeSlider}
              minimumTrackTintColor="#5E31FF"
              maximumTrackTintColor="#1c1acbff"
              thumbTintColor="#5E31FF"
            />
          </View>
        )}
        {progresso == 0 && (
          <View style={styles.breakWorkContainer}>
            <View style={styles.innerBreakWorkContainer}>
              <FontAwesome6 name="mug-hot" size={50} color="#5E31FF" />
              <Picker
                selectedValue={breakDuration}
                onValueChange={(itemValue) => setBreakDuration(itemValue)}
                style={styles.picker}
              >
                {breakItems.map((item, itemKey) => {
                  return (
                    <Picker.Item
                      style={styles.pickerItemBreak}
                      key={itemKey}
                      value={item.value}
                      label={item.label}
                    />
                  );
                })}
              </Picker>
            </View>
            <View style={styles.innerBreakWorkContainer}>
              <FontAwesome6 name="suitcase" size={50} color="#F55656" />
              <Picker
                selectedValue={workUnits}
                onValueChange={(itemValue) => {
                  setWorkUnits(itemValue);
                }}
                style={styles.picker}
                itemStyle={{ flex: 1, textAlign: "center" }}
              >
                {workItems.map((item, itemKey) => {
                  return (
                    <Picker.Item
                      style={styles.pickerItemWork}
                      key={itemKey}
                      value={item.value}
                      label={item.label}
                    />
                  );
                })}
              </Picker>
            </View>
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
          {/* notificação caso tente iniciar pomodoro sem escolher o pokemon */}
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
          {!cancelouPomodoro && (
            // botão stop
            <TouchableOpacity onPress={() => stopBtnOnPress()}>
              <FontAwesome6 name="stop-circle" size={70} color="#F55656" />
            </TouchableOpacity>
          )}
        </View>

        {/* Mensagem de alerta de break ou inicio de trabalho*/}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalBreakWorkVisible}
          onRequestClose={() => {
            setModalBreakWorkVisible(!modalBreakWorkVisible);
          }}
        >
          <View style={styles.modalView}>
            {nextBreakLiberado ? (
              <View
                style={[styles.modalContent, { backgroundColor: "#66FFCC" }]}
              >
                <FontAwesome6 name="suitcase" size={90} color="#F55656" />
                <TouchableOpacity
                  style={styles.modalContinuarBtn}
                  onPress={() =>
                    setModalBreakWorkVisible(!modalBreakWorkVisible)
                  }
                >
                  <Text style={styles.modalContinuarBtnText}>Continuar</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View
                style={[styles.modalContent, { backgroundColor: "#66FFCC" }]}
              >
                <FontAwesome6 name="mug-hot" size={90} color="#5E31FF" />
                <TouchableOpacity
                  style={styles.modalContinuarBtn}
                  onPress={() =>
                    setModalBreakWorkVisible(!modalBreakWorkVisible)
                  }
                >
                  <Text style={styles.modalContinuarBtnText}>Continuar</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </Modal>

        {/* Mensagem de sucesso ao fim do pomodoro*/}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalSucessoVisible}
          onRequestClose={() => {
            setModalSucessoVisible(!modalSucessoVisible);
          }}
        >
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.modalCloseBtn}
              onPress={() => setModalSucessoVisible(!modalSucessoVisible)}
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
    </Background>
  );
}
