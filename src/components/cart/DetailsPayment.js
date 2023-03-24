import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'
import Courses from '../common/Courses';

export default function DetailsPayment(props) {
  const { courses } = props;
  return (
    <>
      <Text style={styles.title}>Detalles de compra</Text>
      {
        courses.map((course) => {
          <Courses
            key={course.id}
            title={course.title}
            price={course.price}
            image={course.image}
            onPress={() => navigation.navigate("CourseDetail", { course })}
          />
        })
      }
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.PalleteBlack,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
  },

})