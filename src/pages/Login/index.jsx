// Autor da Página de Login: Rodrigo Avilez

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Background from "../../components/Background";

export default function PaginaLogin({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Background>
        <StatusBar barStyle="dark-content" />

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
      </Background>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F9FF",
  },
  backButtonContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 30,
  },
  iconButton: {
    marginLeft: 15,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 70,
    fontFamily: "Jersey10_400Regular",
    color: "#5E31FF",
    marginBottom: 40,
  },
  labelEmail: {
    alignSelf: "flex-start",
    marginLeft: 10,
    fontSize: 18,
    color: "#E53935",
    fontWeight: "600",
    marginBottom: 8,
  },
  labelSenha: {
    alignSelf: "flex-start",
    marginLeft: 10,
    fontSize: 18,
    color: "#6A5ACD",
    fontWeight: "600",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 52,
    backgroundColor: "#EAEAEA",
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
    backgroundColor: "#76EDB4",
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
