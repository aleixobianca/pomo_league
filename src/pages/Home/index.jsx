import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Background from "../../components/Background";

export default function PaginaHome({ navigation }) {
  return (
    <View style={styles.container}>
      <Background>
        <View style={styles.innerContainer}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logoImg}
              source={require("../../assets/img/logo.png")}
            />
          </View>

          <Text style={styles.subtitle}>Mantenha o foco</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Registro")}
            >
              <Text style={styles.buttonText}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logoContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  logoImg: {
    width: 350,
    resizeMode: "contain",
  },
  subtitle: {
    fontFamily: "Jersey10_400Regular",
    fontSize: 30,
    color: "#526B63",
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
    fontFamily: "Jersey10_400Regular",
    color: "#5E31FF",
    fontSize: 24,
  },
});
