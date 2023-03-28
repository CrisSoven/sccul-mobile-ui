import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import SearchBar from '../../components/common/SearchBar'
import FilterCourse from '../../components/course/FilterCourse'
import Courses from '../../components/course/Courses'
import { getCourses, getUser } from '../../utils/Axios'
import Splash from '../sccul/SplashScreen'
import EmptyContainer from '../../components/common/EmptyContainer'

export default function CourseScreen() {
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const fetchedCourses = await getCourses();
      const fetchedUser = await getUser();
      setCourses(fetchedCourses);
      setUser(fetchedUser);
    };
    fetchCourses();
  }, []);

  const filteredCourses = courses.filter((curso) => {
    const inscriptions = curso.inscriptions;
    if (inscriptions && inscriptions.length > 0 && inscriptions[0].user.id === user.id) {
      return inscriptions[0].status.includes("comprado");
    }
  });

  console.log(filteredCourses);

  return (
    !filteredCourses ?
      <Splash /> : (
        <>
          <View style={styles.content}>
            <Text style={styles.title}>Mis cursos</Text>
          </View>
          <SearchBar />
          {
            filteredCourses.length === 0 ? <EmptyContainer icon="tag-outline" type="material-community" text="No tienes cursos comprados" /> : (
              filteredCourses.map((course) => (
                <>
                  <FilterCourse />
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                      <Courses
                        key={course.id}
                        course={course}
                        title={course.name}
                        duration={course.sections}
                        progress={course.inscriptions[0].fullPercentage}
                        image={course.image}
                      />
                    </View>
                  </ScrollView>
                </>
              ))
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
  },
});