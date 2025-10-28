import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PaginaRegistro({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons
            name="arrow-back-circle-outline"
            size={50}
            color="#5E31FF"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Cadastre-se</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input} secureTextEntry={true} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Confirmar Senha</Text>
        <TextInput style={styles.input} secureTextEntry={true} />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate("Pomodoro")}
        >
          <Text style={styles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0FFFF",
    padding: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  backButtonContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 30,
    marginLeft: -20,
    // backgroundColor: "pink",
  },
  iconButton: {
    marginLeft: 15,
  },

  title: {
    fontSize: 70,
    fontFamily: "Jersey10_400Regular",
    color: "#5E31FF",
    marginBottom: 40,
    marginTop: 80,
    textAlign: "center",
  },
  inputGroup: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#6A5ACD",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 45,
    backgroundColor: "#DCDCDC",
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  btnContainer: {
    alignItems: "center",
  },
  continueButton: {
    width: "80%",
    backgroundColor: "#66FFCC",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  continueButtonText: {
    fontFamily: "Jersey10_400Regular",
    color: "#5E31FF",
    fontSize: 24,
  },
});
