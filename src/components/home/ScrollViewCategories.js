import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Colors from "../../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const categories = ["Programación", "Diseño", "Marketing", "Música", "Cocina", "Idiomas"];

export default function ScrollViewCategories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const navigation = useNavigation();

  return (
    <View style={styles.viewContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.container}
            onPress={() => {
              setSelectedCategory(category);
              navigation.navigate("CategoryScreen", { category });
            }}
          >
            <Text style={styles.text}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    marginHorizontal: "4%",
    marginBottom: "3%",
  },
  container: {
    width: 130,
    height: 55,
    backgroundColor: Colors.PalleteGreenBackground,
    marginRight: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  text: {
    color: Colors.PalleteBlack,
    fontWeight: "500",
    textAlign: "center",
    fontSize: 13,
  },
});
