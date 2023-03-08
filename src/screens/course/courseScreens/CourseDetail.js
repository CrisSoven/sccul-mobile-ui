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
        <View style={styles.row}>
          <Courses
            styles={styles.column}
            title="Fundamentos de Java"
            duration="5 episodios - 1h 24min"
            progress={18}
            image={require("../../../../assets/img/dev.jpg")}
          />
          <Courses
            styles={styles.column}
            title="Postres franceses"
            duration="6 episodios - 1h 40min"
            progress={100}
            image={require("../../../../assets/img/diseño.jpg")}
          />
        </View>
        <View style={styles.row}>
          <Courses
            styles={styles.column}
            title="Postres franceses"
            duration="6 episodios - 1h 40min"
            progress={100}
            image={require("../../../../assets/img/diseño.jpg")}
          />
          <Courses
            styles={styles.column}
            title="Fundamentos de Java"
            duration="5 episodios - 1h 24min"
            progress={18}
            image={require("../../../../assets/img/dev.jpg")}
          />
          <Courses
            styles={styles.column}
            title="Postres franceses"
            duration="6 episodios - 1h 40min"
            progress={500}
            image={require("../../../../assets/img/diseño.jpg")}
          />
          <Courses
            styles={styles.column}
            title="Fundamentos de Java"
            duration="5 episodios - 1h 24min"
            progress={18}
            image={require("../../../../assets/img/dev.jpg")}
          />
        </View>
        <View style={styles.row}>
          <Courses
            styles={styles.column}
            title="Fundamentos de Java"
            duration="5 episodios - 1h 24min"
            progress={18}
            image={require("../../../../assets/img/dev.jpg")}
          />
          <Courses
            styles={styles.column}
            title="Postres franceses"
            duration="6 episodios - 1h 40min"
            progress={100}
            image={require("../../../../assets/img/diseño.jpg")}
          />
          <Courses
            styles={styles.column}
            title="Postres franceses"
            duration="6 episodios - 1h 40min"
            progress={80}
            image={require("../../../../assets/img/diseño.jpg")}
          />
          <Courses
            styles={styles.column}
            title="Fundamentos de Java"
            duration="5 episodios - 1h 24min"
            progress={18}
            image={require("../../../../assets/img/dev.jpg")}
          />
        </View>
        <View style={styles.row}>
          <Courses
            styles={styles.column}
            title="Fundamentos de Java"
            duration="5 episodios - 1h 24min"
            progress={18}
            image={require("../../../../assets/img/dev.jpg")}
          />
          <Courses
            styles={styles.column}
            title="Fundamentos de Java"
            duration="5 episodios - 1h 24min"
            progress={18}
            image={require("../../../../assets/img/dev.jpg")}
          />
        </View>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "50%",
  },
  column: {
    flexDirection: 'column',
  }
});