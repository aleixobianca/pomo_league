import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Modal, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

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
            <FontAwesome6 name="xmark" size={34} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sairBtn}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.sairText}>
              Sair{" "}
              <FontAwesome6
                name="arrow-right-to-bracket"
                size={16}
                color="red"
              />
            </Text>
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
    marginLeft: 55,
    padding: 10,
    borderColor: "#000",
    borderWidth: 5,
    borderRadius: 20,
    paddingLeft: 20,
    backgroundColor: "#FFF",
  },
  closeBtn: {
    alignItems: "flex-end",
  },
  sairBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e6e4e4fa",
    width: 100,
    marginBottom: 15,
    marginTop: 50,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sairText: {
    color: "red",
    fontSize: 25,
    fontFamily: "Jersey10_400Regular",
  },
  menuButtonContainer: {
    flex: 0.3,
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 25,
  },
  iconButton: {
    marginLeft: 15,
  },
});
