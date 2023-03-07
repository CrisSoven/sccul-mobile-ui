import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Colors from "../../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const categories = ["Programación", "Diseño", "Marketing", "Música", "Cocina"];

export default function ScrollViewCategories() {
  const navigation = useNavigation();

  return (
    <View style={styles.box}>
      <Text style={styles.title}>Categorías</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.container}
            onPress={() =>
              {navigation.navigate("CategoryScreen")}}
          >
            <Text style={styles.text}>{category}</Text>
          </TouchableOpacity>
        ))}
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
    backgroundColor: Colors.PalleteGreenBackground,
    marginRight: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  text: {
    color: Colors.PalleteBlack,
    fontWeight: "bold",
    textAlign: "center",
  },
});
