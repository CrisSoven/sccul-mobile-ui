import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../../../components/common/SearchBar'
import FilterCourse from '../../../components/course/FilterCourse'

export default function CourseDetail() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis cursos</Text>
      <SearchBar/>
      <FilterCourse/>
      
    </View>
  )
}

const styles = StyleSheet.create({
container:{
  flex: 1,
  padding: 20,
},
title:{
  fontSize: 24,
  fontWeight: 'bold',
},

 
})