import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Modal, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MenuButton({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.menuButtonContainer}>
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
            style={styles.closeBtn}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Ionicons name="close-outline" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.sairBtn}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.sairText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="menu-sharp" size={40} color="#5E31FF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    marginRight: 100,
    backgroundColor: "white",
    // height: 100,
    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeBtn: {
    alignItems: "flex-end",
  },
  sairBtn: {
    marginTop: 50,
    alignItems: "flex-start",
  },
  sairText: {
    color: "red",
    fontSize: 25,
    fontFamily: "Jersey10_400Regular",
    marginBottom: 15,
    textAlign: "start",
  },
  menuButtonContainer: {
    flex: 0.5,
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 25,
    // backgroundColor: "red",
  },
  iconButton: {
    marginLeft: 15,
  },
});
