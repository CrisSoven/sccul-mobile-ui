import { StyleSheet, Text, View } from "react-native";
import ListCourses from "../../../components/common/ListCourses";
import React from "react";
import Goback from "../../../components/common/Goback";



export default function CategoryScreen() {
  return (
    <View style={styles.container}>
      <Goback
      title='Categorias'
      />
      <Text style={styles.title}>Arriba las aguilas</Text>
      {/* <ListCourses /> */}
      {/* Coco ya solo manda a tarer los cursos por que el Listcourses lo pide,
      si lo descometas te va dar error we */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
