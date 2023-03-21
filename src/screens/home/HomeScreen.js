import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import SearchBar from "../../components/common/SearchBar";
import Banner from "../../components/home/Banner";
import ScrollViewCategories from "../../components/home/ScrollViewCategories";
import FeaturedCourses from "../../components/FeaturedCourses";

export default function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <SearchBar />
        <Banner />
        <Text style={styles.title}>Categorías</Text>
        <ScrollViewCategories />
        <FeaturedCourses />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "5%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: "3%",
    marginHorizontal: "2%",
  },
});
