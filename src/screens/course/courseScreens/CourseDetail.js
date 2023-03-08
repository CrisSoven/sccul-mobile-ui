import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../../../components/common/SearchBar'
import FilterCourse from '../../../components/course/FilterCourse'
import Courses from '../../../components/course/Courses'
import { ScrollView } from 'react-native-gesture-handler'

export default function CourseDetail() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis cursos</Text>
      <SearchBar />
      <FilterCourse />
      <ScrollView>
      <Courses
        title="Fundamentos de Java"
        duration="5 episodios - 1h 24min"
        progress={18}
        image={require("../../../../assets/img/dev.jpg")}
      />
      <Courses
        title="Fundamentos de Java"
        duration="5 episodios - 1h 24min"
        progress={18}
        image={require("../../../../assets/img/dev.jpg")}
      />
      <Courses
        title="Fundamentos de Java"
        duration="5 episodios - 1h 24min"
        progress={18}
        image={require("../../../../assets/img/dev.jpg")}
      />
      <Courses
        title="Fundamentos de Java"
        duration="5 episodios - 1h 24min"
        progress={18}
        image={require("../../../../assets/img/dev.jpg")}
      />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});