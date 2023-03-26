import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { getCategories } from "../../utils/Axios";

export default function ScrollViewCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    };
    fetchCategories();
  }, []);

  const navigation = useNavigation();

  return (
    <View style={styles.viewContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.container}
              onPress={() => {
                navigation.navigate("CategoryScreen", { category });
              }}
            >
              <Text style={styles.text} numberOfLines={1}>{category.name}</Text>
            </TouchableOpacity>
          ))
        }
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
    width: "auto",
    height: 55,
    backgroundColor: Colors.PalleteGreenBackground,
    marginRight: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.PalleteBlack,
    fontWeight: "500",
    textAlign: "center",
    fontSize: 13,
    paddingHorizontal: 20,
  },
});
