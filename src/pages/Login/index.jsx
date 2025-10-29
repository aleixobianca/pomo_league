import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Background from "../../components/Background";
import BackButton from "../../components/BackButton";

export default function PaginaLogin({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Background>
      <View style={styles.container}>
        <BackButton navigation={navigation} page={"Home"} />

        <View style={styles.content}>
          <Text style={styles.title}>Login</Text>

          <Text style={styles.labelEmail}>E-mail</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            placeholder="seuemail@exemplo.com"
          />

          <Text style={styles.labelSenha}>Senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholder="********"
          />

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("Pomodoro")}
          >
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
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
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#c4a734ff",
  },
  title: {
    fontSize: 70,
    fontFamily: "Jersey10_400Regular",
    color: "#5E31FF",
    marginBottom: 40,
    // backgroundColor: "#c434baff",
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
    height: 52,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#DCDCDC",
  },
  loginButton: {
    width: "100%",
    height: 52,
    backgroundColor: "#66FFCC",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  loginButtonText: {
    fontFamily: "Jersey10_400Regular",
    color: "#5E31FF",
    fontSize: 24,
  },
  forgotPasswordText: {
    marginTop: 25,
    color: "#333",
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 15,
  },
});
