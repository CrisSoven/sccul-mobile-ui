import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function FilterCourse() {
  const navigation = useNavigation();
  const [filter, setFilter] = useState("Todos");
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.content}
        onPress={() => navigation.navigate("Course", { filter })}
      >
        <Text style={styles.text}>Todos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.content}
        onPress={() => navigation.navigate("Course", { filter: "En progreso" })}
      >
        <Text style={styles.text}>En progreso</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.content}
        onPress={() => navigation.navigate("Course", { filter: "Finalizados" })}
      >
        <Text style={styles.text}>Finalizados</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.content}
        onPress={() => navigation.navigate("Course", { filter: "Sin empezar" })}
      >
        <Text style={styles.text}>Sin empezar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    flexDirection: "row",
  },
  content: {
    height: 55,
    backgroundColor: Colors.PalleteGreenBackground,
    marginRight: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "500",
    textAlign: "center",
    fontSize: 13,
    paddingHorizontal: 10,
  },
});
