import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

export default function ExpBar(props) {
  const [progress, setProgress] = useState(0);
  const [level, setLevel] = useState(0);
  const [isRunning, setIsRunning] = useState(true); // controla play/pause
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
    if (!isRunning) return; // se não estiver rodando, não cria timer

    const timer = setInterval(() => {
      setProgress((p) => changeProgress(p));
    }, 1000);

    return () => clearInterval(timer); // limpa o timer ao desmontar ou pausar
  }, [isRunning]); // roda novamente quando isRunning mudar

  return (
    <View style={{ margin: 20 }}>
      <Text>Level: {level}</Text>
      <Text>{(progress * 100).toFixed(0)}/100</Text>
      <View
        style={{
          height: 20,
          width: "100%",
          backgroundColor: "#ddd",
          borderRadius: 10,
          marginVertical: 10,
        }}
      >
        <View
          style={{
            height: "100%",
            width: `${progress * 100}%`,
            backgroundColor: "blue",
            borderRadius: 10,
          }}
        />
      </View>
      <Button
        title={isRunning ? "Pause" : "Play"}
        onPress={() => setIsRunning((r) => !r)}
      />
    </View>
  );
}
