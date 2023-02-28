import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function ScrollViewCategories() {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>Categorías</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.text}>Programación</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.text}>Diseño gráfico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.text}>Marketing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.text}>Cocina</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 20,
    marginLeft: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 10,
  },
  container: {
    width: 130,
    height: 60,
    backgroundColor: "rgb(217,239,234)",
    marginRight: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  text: {
    color: "rgb(164,180,177)",
    fontWeight: "bold",
    textAlign: "center",
  },
});
