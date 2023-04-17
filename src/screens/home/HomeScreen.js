import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import SearchBar from "../../components/common/SearchBar";
import Banner from "../../components/home/Banner";
import ScrollViewCategories from "../../components/home/ScrollViewCategories";
import FeaturedCourses from "../../components/FeaturedCourses";
import SplashScreen from "../sccul/SplashScreen";
import { getCourses } from "../../utils/Axios";

export default function HomeScreen() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputText, setInputText] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const fetchCourses = async () => {
    setIsLoading(true);
    const fetchedCourses = await getCourses();
    const filteredCourses = fetchedCourses.filter(
      (course) => course.status === 1
    );
    setCourses(filteredCourses);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchCourses();
    setRefreshing(false);
  }, []);

  const listOfCourses = () => {
    if (inputText === "") {
      return courses;
    }

    return courses.filter((course) => {
      return course.name.toLowerCase().includes(inputText.toLowerCase());
    });
  };

  if (isLoading && !refreshing) {
    return <SplashScreen />;
  }

  if (isLoading && refreshing) {
    return <SplashScreen />;
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <Banner />
        <ScrollViewCategories />
        <View style={styles.info}>
          <SearchBar setInputValue={setInputText} value={inputText} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Todos los cursos</Text>
          </View>
          <FeaturedCourses courses={listOfCourses()} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: "4%",
    marginTop: "5%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: "5%",
  },
  container: {
    flex: 1,
    marginTop: 10,
  },
  info: {
    marginTop: 25,
  },
});
