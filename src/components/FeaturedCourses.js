import React from 'react';
import Courses from './common/Courses';
import { View, StyleSheet } from 'react-native';

export default function FeaturedCourses({ courses }) {
  return (
    <View style={styles.listContainer}>
      <Courses courses={courses} />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginHorizontal: '4%',
  },
});
