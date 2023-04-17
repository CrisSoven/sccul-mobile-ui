import { StyleSheet, Text, View, RefreshControl } from "react-native";
import Courses from "../../../components/common/Courses";
import React, { useState, useEffect, useCallback } from "react";
import Goback from "../../../components/common/Goback";
import ScrollViewCategories from "../../../components/home/ScrollViewCategories";
import SearchBar from "../../../components/common/SearchBar";
import { ScrollView } from "react-native-gesture-handler";
import { getCourses } from "../../../utils/Axios";
import SplashScreen from "../../sccul/SplashScreen";

export default function CategoryScreen({ route }) {
  const { category } = route.params;
  const [courses, setCourses] = useState([]);
  const [inputText, setInputText] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCourses = async () => {
    setIsLoading(true);
    const fetchedCourses = await getCourses();
    const filteredCoursesCategoryStatus = fetchedCourses.filter(
      (course) => course.status === 1
    );
    setCourses(filteredCoursesCategoryStatus);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const filteredCourses = courses.filter((curso) =>
    curso.category.name.includes(category.name)
  );

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchCourses();
    setRefreshing(false);
  }, []);

  const listOfCourses = () => {
    if (inputText === "") {
      return filteredCourses;
    }

    return filteredCourses.filter((course) => {
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
      <View>
        <Goback title={"Categorías"} />
        <SearchBar setInputValue={setInputText} value={inputText} />
        <View style={styles.scrollViewCategoriesContainer}>
          <ScrollViewCategories />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{`Cursos (${category.name})`}</Text>
        </View>
        <View style={styles.listContainer}>
          <Courses courses={listOfCourses()} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: "5%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: "4%",
    marginBottom: "5%",
  },
  listContainer: {
    marginHorizontal: "3.5%",
    flex: 1,
  },
  scrollViewCategoriesContainer: {
    marginTop: "5%",
  },
});
