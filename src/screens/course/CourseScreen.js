import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import SearchBar from '../../components/common/SearchBar'
import FilterCourse from '../../components/course/FilterCourse'
import Courses from '../../components/course/Courses'
import { getBoughtCourses } from '../../utils/Axios'
import Splash from '../sccul/SplashScreen'
import EmptyContainer from '../../components/common/EmptyContainer'

export default function CourseScreen() {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const fetchCourses = async () => {
      const fetchedCourses = await getBoughtCourses();
      setCourses(fetchedCourses);
    };
    fetchCourses();
  }, []);

  return (
    courses === null ?
      <Splash /> : (
        <>
          <View style={styles.content}>
            <Text style={styles.title}>Mis cursos</Text>
          </View>
          <SearchBar />
          {
            !courses.length ? <EmptyContainer icon="tag-outline" type="material-community" text="No tienes cursos comprados" /> : (
              <>
                <FilterCourse />
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={styles.container}>
                    {
                      courses.map((course) => (
                        <Courses
                          key={course.id}
                          course={course}
                          title={course.name}
                          duration={course.sections}
                          progress={course.inscriptions[0].full_percentage}
                          image={course.image}
                        />
                      ))
                    }
                  </View>
                </ScrollView>
              </>
            )
          }
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
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});