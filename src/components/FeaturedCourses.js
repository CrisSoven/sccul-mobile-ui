import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import { Icon, Rating } from "react-native-elements";

const CursoDestacado = ({ image, title, price, average, comments }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.titleCourse}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        <View style={styles.averageContainer}>
          <Text style={styles.average}>{average}</Text>
          <Rating
            startingValue={average}
            fractions="{1}"
            imageSize={24}
            readonly
            ratingColor="#FFAA0D"
            tintColor="#d4ddd6"
            style={{ marginRight: 10 }}
          />
          <Text style={styles.comments}>({comments})</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

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

  return (
    <View style={styles.listContainer}>
      <View style={styles.tituloContainer}>
        <Text style={styles.titleList}>Cursos destacados</Text>
        <TouchableOpacity
          style={styles.filtroButton}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="filter" type="font-awesome" color="#fff" size={20} />
        </TouchableOpacity>
      </View>
      {cursos.map((curso, index) => (
        <CursoDestacado
          key={index}
          image={curso.image}
          title={curso.title}
          price={curso.price}
          average={curso.average}
          comments={curso.comments}
        />
      ))}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalTitulo}>Filtros</Text>
            <Pressable
              style={styles.modalBoton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalBotonTexto}>Cerrar</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: -10,
    marginRight: -5,
  },
  titleList: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#d4ddd6",
    marginBottom: 10,
    borderRadius: 15,
    width: 370,
  },
  filtroButton: {
    backgroundColor: "#333",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 13,
    flexDirection: "row",
    alignItems: "center",
  },
  filtroButtonText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 10,
  },
  image: {
    width: 140,
    height: 100,
    borderRadius: 15,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  titleCourse: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  averageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  average: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
    color: "#940718",
  },
  comments: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    width: "80%",
  },
  modalTitulo: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalBoton: {
    backgroundColor: "#333",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  modalBotonTexto: {
    color: "#fff",
    fontSize: 15,
  },
});
