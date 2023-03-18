import { StyleSheet, Text, View } from "react-native";
import ListCourses from "../../../components/common/ListCourses";
import React from "react";
import Goback from "../../../components/common/Goback";
import ScrollViewCategories from "../../../components/home/ScrollViewCategories";
import SearchBar from "../../../components/common/SearchBar";
import { ScrollView } from "react-native-gesture-handler";

export default function CategoryScreen({ route }) {
  const { category } = route.params;

  const courses = [
    {
      id: 1,
      title: "JavaPug - Curso de Java desde cero a experto",
      image: require("../../../../assets/img/leclerc.jpg"),
      description:
        "Fundamentos de JavaScript está diseñado para aquellos sin experiencia previa que buscan aprender los conceptos básicos del lenguaje. Tendrás la oportunidad de aplicar tus habilidades a través de proyectos prácticos y ejercicios. Con un enfoque en la enseñanza clara y concisa.",
      category: "Programación",
      price: "$20",
      average: 4.5,
      comments: 10,
      section: [
        {
          number: 1,
          title: "Sección 1",
          duration: "1:30",
        },
        {
          number: 2,
          title: "Sección 2",
          duration: "1:30",
        },
      ],
    },
    {
      id: 2,
      title: "Curso 2",
      image: require("../../../../assets/img/leclerc.jpg"),
      description:
        "Fundamentos de JavaScript está diseñado para aquellos sin experiencia previa que buscan aprender los conceptos básicos del lenguaje. Tendrás la oportunidad de aplicar tus habilidades a través de proyectos prácticos y ejercicios. Con un enfoque en la enseñanza clara y concisa.",
      category: "Diseño",
      price: "$30",
      average: 3.5,
      comments: 5,
      section: [
        {
          number: 1,
          title: "Sección 1",
          duration: "1:30",
        },
        {
          number: 2,
          title: "Sección 2",
          duration: "1:30",
        },
      ],
    },
    {
      id: 3,
      title: "Curso 3",
      image: require("../../../../assets/img/leclerc.jpg"),
      description:
        "Fundamentos de JavaScript está diseñado para aquellos sin experiencia previa que buscan aprender los conceptos básicos del lenguaje. Tendrás la oportunidad de aplicar tus habilidades a través de proyectos prácticos y ejercicios. Con un enfoque en la enseñanza clara y concisa.",
      category: "Programación",
      price: "$25",
      average: 4.2,
      comments: 8,
      section: [
        {
          number: 1,
          title: "Sección 1",
          duration: "1:30",
        },
        {
          number: 2,
          title: "Sección 2",
          duration: "1:30",
        },
      ],
    },
    {
      id: 4,
      title: "Curso 4",
      image: require("../../../../assets/img/leclerc.jpg"),
      description:
        "Fundamentos de JavaScript está diseñado para aquellos sin experiencia previa que buscan aprender los conceptos básicos del lenguaje. Tendrás la oportunidad de aplicar tus habilidades a través de proyectos prácticos y ejercicios. Con un enfoque en la enseñanza clara y concisa.",
      category: "Música",
      price: "$15",
      average: 4.8,
      comments: 15,
      section: [
        {
          number: 1,
          title: "Sección 1",
          duration: "1:30",
        },
        {
          number: 2,
          title: "Sección 2",
          duration: "1:30",
        },
      ],
    },
    {
      id: 5,
      title: "Curso 5",
      image: require("../../../../assets/img/leclerc.jpg"),
      description:
        "Fundamentos de JavaScript está diseñado para aquellos sin experiencia previa que buscan aprender los conceptos básicos del lenguaje. Tendrás la oportunidad de aplicar tus habilidades a través de proyectos prácticos y ejercicios. Con un enfoque en la enseñanza clara y concisa.",
      category: "Cocina",
      price: "$10",
      average: 3.0,
      comments: 2,
      section: [
        {
          number: 1,
          title: "Sección 1",
          duration: "1:30",
        },
        {
          number: 2,
          title: "Sección 2",
          duration: "1:30",
        },
      ],
    },
    {
      id: 6,
      title: "Curso 6",
      image: require("../../../../assets/img/leclerc.jpg"),
      description:
        "Fundamentos de JavaScript está diseñado para aquellos sin experiencia previa que buscan aprender los conceptos básicos del lenguaje. Tendrás la oportunidad de aplicar tus habilidades a través de proyectos prácticos y ejercicios. Con un enfoque en la enseñanza clara y concisa.",
      category: "Marketing",
      price: "$40",
      average: 4.2,
      comments: 12,
      section: [
        {
          number: 1,
          title: "Sección 1",
          duration: "1:30",
        },
        {
          number: 2,
          title: "Sección 2",
          duration: "1:30",
        },
      ],
    },
    {
      id: 7,
      title: "Curso 7",
      image: require("../../../../assets/img/leclerc.jpg"),
      description:
        "Fundamentos de JavaScript está diseñado para aquellos sin experiencia previa que buscan aprender los conceptos básicos del lenguaje. Tendrás la oportunidad de aplicar tus habilidades a través de proyectos prácticos y ejercicios. Con un enfoque en la enseñanza clara y concisa.",
      category: "Programación",
      price: "$50",
      average: 3.8,
      comments: 7,
    },
    {
      id: 8,
      title: "Curso 8",
      image: require("../../../../assets/img/leclerc.jpg"),
      description:
        "Fundamentos de JavaScript está diseñado para aquellos sin experiencia previa que buscan aprender los conceptos básicos del lenguaje. Tendrás la oportunidad de aplicar tus habilidades a través de proyectos prácticos y ejercicios. Con un enfoque en la enseñanza clara y concisa.",
      category: "Diseño",
      price: "$15",
      average: 4.9,
      comments: 20,
    },
    {
      id: 9,
      title: "Curso 9",
      image: require("../../../../assets/img/leclerc.jpg"),
      description:
        "Fundamentos de JavaScript está diseñado para aquellos sin experiencia previa que buscan aprender los conceptos básicos del lenguaje. Tendrás la oportunidad de aplicar tus habilidades a través de proyectos prácticos y ejercicios. Con un enfoque en la enseñanza clara y concisa.",
      category: "Marketing",
      price: "$60",
      average: 4.5,
      comments: 9,
    },
    {
      id: 10,
      title: "Curso 10",
      image: require("../../../../assets/img/leclerc.jpg"),
      description:
        "Fundamentos de JavaScript está diseñado para aquellos sin experiencia previa que buscan aprender los conceptos básicos del lenguaje. Tendrás la oportunidad de aplicar tus habilidades a través de proyectos prácticos y ejercicios. Con un enfoque en la enseñanza clara y concisa.",
      category: "Programación",
      price: "$35",
      average: 4.5,
      comments: 6,
    },
    {
      id: 11,
      title: "Curso 11",
      image: require("../../../../assets/img/leclerc.jpg"),
      description:
        "Fundamentos de JavaScript está diseñado para aquellos sin experiencia previa que buscan aprender los conceptos básicos del lenguaje. Tendrás la oportunidad de aplicar tus habilidades a través de proyectos prácticos y ejercicios. Con un enfoque en la enseñanza clara y concisa.",
      category: "Cocina",
      price: "$45",
      average: 4.3,
      comments: 11,
    },
    {
      id: 12,
      title: "Curso 12",
      image: require("../../../../assets/img/leclerc.jpg"),
      description:
        "Fundamentos de JavaScript está diseñado para aquellos sin experiencia previa que buscan aprender los conceptos básicos del lenguaje. Tendrás la oportunidad de aplicar tus habilidades a través de proyectos prácticos y ejercicios. Con un enfoque en la enseñanza clara y concisa.",
      category: "Música",
      price: "$55",
      average: 3.9,
      comments: 8,
    },
  ];

  const filteredCourses = courses.filter((curso) =>
    curso.category.includes(category)
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Goback title={"Categorías"} />
      <SearchBar />
      <View style={styles.scrollViewCategoriesContainer}>
        <ScrollViewCategories />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{`Cursos (${category})`}</Text>
      </View>
      <View style={styles.listContainer}>
        <ListCourses courses={filteredCourses} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: "5%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: "2%",
    marginBottom: "5%",
  },
  listContainer: {
    marginHorizontal: "3.5%",
    flex: 1,
  },
  scrollViewCategoriesContainer: {
    marginTop: "5%",
  },
});
