import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const CursoDestacado = ({ image, title, price, average, comments }) => {
  //   const estrellas = [];
  //   for (let i = 1; i <= 5; i++) {
  //     if (i <= Math.floor(puntuacion)) {
  //       estrellas.push("star");
  //     } else if (i === Math.ceil(puntuacion) && puntuacion % 1 !== 0) {
  //       estrellas.push("star-half");
  //     } else {
  //       estrellas.push("star-outline");
  //     }
  //   }
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.titleCourse}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        <View style={styles.averageContainer}>
          <Text style={styles.average}>{average}</Text>
          <Icon name="star" type="ionicons" color="#FFAA0D" size={18} />
          {/* <Text style={styles.puntuacion}>{puntuacion}</Text>
          {estrellas.map((iconName, index) => (
            <Icon
              key={index}
              name={iconName}
              type="ionicons"
              color="#FFC107"
              size={18}
            />
          ))} */}
          <Text style={styles.comments}>({comments})</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function FeaturedCourses() {
  const cursos = [
    {
      image: require("../../assets/img/chequito.jpg"),
      title: "Programación",
      price: "$50",
      average: 4.5,
      comments: 20,
    },
    {
      image: require("../../assets/img/chequito.jpg"),
      title: "Diseño Gráfico",
      price: "$70",
      average: 5,
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
      <Text style={styles.titleList}>Cursos destacados</Text>
      {cursos.map((curso, index) => (
        console.log(cursos),
        <CursoDestacado
          key={index}
          image={curso.image}
          title={curso.title}
          price={curso.price}
          average={curso.average}
          comments={curso.comments}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 40,
    marginHorizontal: 20,
  },
  titleList: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: -10,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#d4ddd6",
    marginBottom: 10,
    borderRadius: 15,
    width: 370,
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
});
