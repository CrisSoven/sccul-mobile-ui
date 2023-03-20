import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import Filter from "./common/Filter";
import Courses from "./common/Courses";
import Colors from "../utils/Colors";
import { getCourses } from "../utils/Axios";

export default function FeaturedCourses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const fetchedCourses = await getCourses();
      setCourses(fetchedCourses);
    };
    fetchCourses();
  }, []);

  const [modalVisible, setModalVisible] = useState(false);

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
        <Courses courses={courses}/>
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
    fontSize: 24,
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
