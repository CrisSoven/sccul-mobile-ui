import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'
import Sections from "../../components/common/Sections";

export default function ContentComponent(props) {
  const { course, disable } = props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contenido del curso</Text>
      <View style={styles.capsAndDurationContainer}>
        <Text style={{fontSize: 16}}>{course.sections.length} Capitulos - </Text>
        <Text style={styles.totalDuration}>
          xdh xdmin
        </Text>
      </View>
      <View style={styles.sectionsContainer}>
        <Sections sections={course.sections} disable={disable} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  capsAndDurationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  totalDuration: {
    fontSize: 14,
    fontWeight: "bold",
  },
})