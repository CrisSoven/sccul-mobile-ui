import { StyleSheet, Text, View } from "react-native";
import ListCourses from "../../components/ListCourses";
import React from "react";

export default function CategoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      <ListCourses />
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
