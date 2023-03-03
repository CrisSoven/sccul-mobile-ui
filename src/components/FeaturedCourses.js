import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import Filter from "./common/Filter";
import ListCourses from "./common/ListCourses";
import Colors from "../utils/Colors";

export default function FeaturedCourses() {
  const [modalVisible, setModalVisible] = useState(false);

  const cursos = [
    {
      image: require("../../assets/img/chequito.jpg"),
      title: "Programación",
      price: "$50",
      average: 4.4,
      comments: 20,
    },
    {
      image: require("../../assets/img/chequito.jpg"),
      title: "Diseño Gráfico",
      price: "$70",
      average: 5.0,
      comments: 10,
    },
    {
      image: require("../../assets/img/chequito.jpg"),
      title: "Marketing Digital",
      price: "$60",
      average: 4.5,
      comments: 15,
    },
  ];

  const handleFilterPress = () => {
    setModalVisible(true);
  }

  return (
    <View style={styles.listContainer}>
      <View style={styles.tituloContainer}>
        <Text style={styles.titleList}>Cursos destacados</Text>
        <Filter onPress={handleFilterPress} />
      </View>
      <ListCourses cursos={cursos} />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Filtros</Text>
            <Pressable
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 40,
    marginHorizontal: 20,
  },
  tituloContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: -10,
    marginRight: -5,
  },
  titleList: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: Colors.PalleteWhite,
    borderRadius: 15,
    padding: 20,
    width: "80%",
  },
  modalTitle: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: Colors.PalleteAuxiliarBlue,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  modalButtonText: {
    color: Colors.PalleteWhite,
    fontSize: 15,
  },
});
