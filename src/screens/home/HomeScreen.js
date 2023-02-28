import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import SearchBar from "../../components/common/SearchBar";
import Banner from "../../components/home/Banner";
import ScrollViewCategories from "../../components/home/ScrollViewCategories";
import FeaturedCourses from "../../components/FeaturedCourses";

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
