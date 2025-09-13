import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function PaginaHome() {
  return (
    <View style={styles.container}>
      <View style={styles.gradientBackground}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoPart1}>Pomo</Text>
          <Text style={styles.logoPart2}>League</Text>
        </View>

        <Text style={styles.subtitle}>Mantenha o foco</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            // onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            // onPress={() => navigation.navigate("Registro")}
          >
            <Text style={styles.buttonText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
    backgroundColor: "#E0FFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logoContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 20,
    marginTop: -80,
  },
  logoPart1: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#FF6347",
    marginRight: 5,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10,
  },
  logoPart2: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#4169E1",
    marginLeft: 110,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 20,
    color: "#333",
    marginBottom: 50,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#66FFCC",
    width: "80%",
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
  },
});
