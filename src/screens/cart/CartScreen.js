import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import SearchBar from "../../components/common/SearchBar";
import SelectComponent from "../../components/cart/SelectComponent";
import ListCourses from "../../components/common/ListCourses";
import Colors from "../../utils/Colors";
import TitleBtnComponent from "../../components/profile/TitleBtnComponent";
import { useNavigation } from "@react-navigation/native";

export default function CartScreen() {
  const navigation = useNavigation();
  const navigateTo = () => {
    navigation.navigate("PaymentMethod");
  };
  const courses = [
    {
      image: require("../../../assets/img/dev.jpg"),
      title: "Programación Orientado a Objetos (POO)",
      price: "$50 MXN",
      description:
        "Fundamentos de JavaScript está diseñado para aquellos sin experiencia previa que buscan aprender los conceptos básicos del lenguaje. Tendrás la oportunidad de aplicar tus habilidades a través de proyectos prácticos y ejercicios. Con un enfoque en la enseñanza clara y concisa.",
      category: "Programación",
      average: 4.5,
      section: [
        {
          number: 1,
          title: "Introducción al curso",
          duration: "1:30",
        },
        {
          number: 2,
          title: "Introductorio a Programación Orientada a Objetos",
          duration: "1:40",
        },
      ],
      comments: [
        {
          comment:
            "Excelente curso, ojala no hagan más cursos de este tipo Excelente curso, ojala no hagan más cursos de este tipo Excelente curso, ojala no hagan más cursos de este tipo Excelente curso, ojala no hagan más cursos de este tipo",
          name: "Checo Perez",
          score: 1,
          createdAt: "10/10/2020",
        },
        {
          comment:
            "Excelente curso, me encanto, espero que hagan más cursos de este tipo",
          name: "Joksan Bahena",
          score: 4.5,
          createdAt: "13/06/1970",
        },
        {
          comment:
            "No me gusto en lo absoluto, esperaba más de este curso con el precio que tiene",
          name: "Yei Peralta",
          score: 3.5,
          createdAt: "10/11/2021",
        },
      ],
    },
    {
      image: require("../../../assets/img/diseño.jpg"),
      title: "Diseño Gráfico",
      price: "$70",
      average: 5.0,
      comments: 10,
    },
    {
      image: require("../../../assets/img/marketimg.jpg"),
      title: "Marketing Digital",
      price: "$60",
      average: 4.5,
      comments: 15,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de compras</Text>
      <SearchBar />
      <ScrollView style={styles.content}>
        <SelectComponent />
        <ListCourses courses={courses} />
      </ScrollView>
      <TitleBtnComponent
        textTitle="$1,246.50 MX"
        titleStyle={styles.subtitle}
        textBtn="Pagar"
        onPress={navigateTo}
        btnPrimary={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.White,
  },
});
