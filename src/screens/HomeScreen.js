import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";
import ScrollViewCategories from "../components/ScrollViewCategories";
import FeaturedCourses from "../components/FeaturedCourses";

export default function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <SearchBar />
        <Banner />
        <ScrollViewCategories />
        <FeaturedCourses />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
