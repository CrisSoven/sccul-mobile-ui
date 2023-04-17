import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Courses from "./common/Courses";
import { getCourses } from "../utils/Axios";
import SplashScreen from "../screens/sccul/SplashScreen";

export default function FeaturedCourses({ courses }) {
  // const [courses, setCourses] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  // 	const fetchCourses = async () => {
  // 		setIsLoading(true);
  // 		console.log('loading', isLoading);
  // 		const fetchedCourses = await getCourses();
  // 		setCourses(fetchedCourses);
  // 		setIsLoading(false);
  // 	};
  // 	fetchCourses();
  // }, []);

  // if (isLoading) {
  // 	return <SplashScreen />;
  // }

  return (
    <>
      <View style={styles.listContainer}>
        <Courses courses={courses} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginHorizontal: "4%",
  },
});
