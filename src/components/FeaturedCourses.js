import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
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
  return (
    <>
      <View style={styles.tituloContainer}>
        <Text style={styles.titleFeatured}>Cursos destacados</Text>
      </View>
      <View style={styles.listContainer}>
        <Courses courses={courses}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  tituloContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: "3%",
    marginTop: "5%",
  },
  titleFeatured: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: "5%",
  },
  listContainer: {
    marginHorizontal: "4%",
  },
});
