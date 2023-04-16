import {
  StyleSheet,
  Text,
  View,
  RefreshControl,
  ScrollView,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "../../components/common/SearchBar";
import FilterCourse from "../../components/course/FilterCourse";
import Courses from "../../components/course/Courses";
import { getBoughtCourses } from "../../utils/Axios";
import Splash from "../sccul/SplashScreen";
import EmptyContainer from "../../components/common/EmptyContainer";

export default function CourseScreen({ route }) {
  const { filter } = route.params;

  const [courses, setCourses] = useState(null);
  const [inputText, setInputText] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const fetchCourses = async () => {
    const fetchedCourses = await getBoughtCourses();
    setCourses(fetchedCourses);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const listOfCourses = () => {
    if (inputText === "") {
      return courses;
    }

    return courses.filter((course) => {
      return course.name.toLowerCase().includes(inputText.toLowerCase());
    });
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchCourses();
    setRefreshing(false);
  }, []);

  return courses === null ? (
    <Splash />
  ) : (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.content}>
        <Text style={styles.title}>Mis cursos</Text>
      </View>
      <SearchBar setInputValue={setInputText} value={inputText} />
      {!courses.length ? (
        <EmptyContainer
          icon="tag-outline"
          type="material-community"
          text="No tienes cursos comprados"
        />
      ) : (
        <>
          <FilterCourse />

          <View style={styles.container}>
            {listOfCourses().map((course) => (
              <Courses
                key={course.id}
                course={course}
                title={course.name}
                duration={course.sections}
                progress={course.inscriptions[0].fullPercentage}
                image={course.image}
              />
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
