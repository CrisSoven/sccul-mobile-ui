import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import Filter from "./common/Filter";
import ListCourses from "./common/ListCourses";
import Colors from "../utils/Colors";

export default function FeaturedCourses() {
  const [modalVisible, setModalVisible] = useState(false);

  const courses = [
    {
      image: require("../../assets/img/dev.jpg"),
      title: "Programación Orientado a Objetos (POO)",
      price: "$50 MXN",
      description:
        "Fundamentos de JavaScript está diseñado para aquellos sin experiencia previa que buscan aprender los conceptos básicos del lenguaje. Tendrás la oportunidad de aplicar tus habilidades a través de proyectos prácticos y ejercicios. Con un enfoque en la enseñanza clara y concisa.",
      category: "Programación",
      average: 4.4,
      comments: 20,
    },
    {
      image: require("../../assets/img/diseño.jpg"),
      title: "Diseño Gráfico para pendejos",
      price: "$70",
      description:
        "Fundamentos de JavaScript está diseñado para aquellos sin experiencia previa que buscan aprender los conceptos básicos del lenguaje. Tendrás la oportunidad de aplicar tus habilidades a través de proyectos prácticos y ejercicios. Con un enfoque en la enseñanza clara y concisa.",
      category: "Diseño",
      average: 5.0,
      comments: 10,
    },
    {
      image: require("../../assets/img/marketimg.jpg"),
      title: "Marketing Digital - Aprende a vender",
      price: "$60",
      description:
        "Fundamentos de JavaScript está diseñado para aquellos sin experiencia previa que buscan aprender los conceptos básicos del lenguaje. Tendrás la oportunidad de aplicar tus habilidades a través de proyectos prácticos y ejercicios. Con un enfoque en la enseñanza clara y concisa.",
      category: "Marketing",
      average: 4.5,
      comments: 15,
    },
  ];

  const handleFilterPress = () => {
    setModalVisible(true);
  };

  return (
    <>
      <View style={styles.tituloContainer}>
        <Text style={styles.titleFeatured}>Cursos destacados</Text>
        <Filter onPress={handleFilterPress} />
      </View>
      <View style={styles.listContainer}>
        <ListCourses courses={courses} />
      </View>
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
    </>
  );
}

const styles = StyleSheet.create({
  tituloContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: "2%",
    marginTop: "5%",
  },
  titleFeatured: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: "5%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: Colors.PalleteWhite,
    borderRadius: 15,
    padding: "5%",
    width: "80%",
  },
  modalTitle: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: "10%",
  },
  modalButton: {
    backgroundColor: Colors.PalleteAuxiliarBlue,
    borderRadius: 15,
    paddingVertical: "3%",
    alignItems: "center",
  },
  modalButtonText: {
    color: Colors.PalleteWhite,
    fontSize: 15,
  },
  listContainer: {
    marginHorizontal: "4%",
  },
});
