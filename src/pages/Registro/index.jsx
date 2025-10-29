import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Background from "../../components/Background";
import BackButton from "../../components/BackButton";

export default function PaginaRegistro({ navigation }) {
  return (
    <Background>
      <View style={styles.container}>
        <BackButton navigation={navigation} page={"Home"} />

        <View style={styles.content}>
          <Text style={styles.title}>Cadastre-se</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.labelEmail}>E-mail</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.labelSenha}>Senha</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.labelSenha}>Confirmar Senha</Text>
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
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 70,
    fontFamily: "Jersey10_400Regular",
    color: "#5E31FF",
    marginBottom: 40,
    textAlign: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#ff2",
  },
  inputGroup: {
    width: "100%",
    marginBottom: 20,
  },
  labelEmail: {
    alignSelf: "flex-start",
    marginLeft: 5,
    fontFamily: "Jersey10_400Regular",
    fontSize: 24,
    color: "#E53935",
    marginBottom: 8,
  },
  labelSenha: {
    alignSelf: "flex-start",
    marginLeft: 5,
    fontFamily: "Jersey10_400Regular",
    fontSize: 24,
    color: "#6A5ACD",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  btnContainer: {
    alignItems: "center",
    width: "100%",
    // backgroundColor: "#d32ec8ff",
  },
  continueButton: {
    width: "100%",
    backgroundColor: "#66FFCC",
    padding: 15,
    borderRadius: 10,
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
  continueButtonText: {
    fontFamily: "Jersey10_400Regular",
    color: "#5E31FF",
    fontSize: 24,
  },
});
