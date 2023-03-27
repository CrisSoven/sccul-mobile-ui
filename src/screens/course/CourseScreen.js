import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import SearchBar from '../../components/common/SearchBar'
import FilterCourse from '../../components/course/FilterCourse'
import Courses from '../../components/course/Courses'
import { getCourses } from '../../utils/Axios'
import Splash from '../sccul/SplashScreen'

export default function CourseScreen() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const fetchedCourses = await getCourses();
      setCourses(fetchedCourses);
    };
    fetchCourses();
  }, []);
  const filteredCourses = courses.filter((curso) => {
    const inscriptions = curso.inscriptions;
    if (inscriptions && inscriptions.length > 0) {
      return inscriptions[0].status.includes("comprado");
    }
  });

  return (
    !filteredCourses ?
      <Splash /> : (
        <>
          <View style={styles.content}>
            <Text style={styles.title}>Mis cursos</Text>
          </View>
          <SearchBar />
          <FilterCourse />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              {
                filteredCourses.map((course) => (
                  <Courses
                    key={course.id}
                    course={course}
                    title={course.name}
                    duration={course.sections}
                    progress={course.inscriptions[0].fullPercentage}
                    image={course.image}
                  />
                ))
              }
            </View>
          </ScrollView>
        </>
      )
  )
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
    justifyContent: "center",
  },
});