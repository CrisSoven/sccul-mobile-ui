import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useState } from 'react'
import { Swipeable } from 'react-native-gesture-handler'
import Courses from '../common/Courses'
import Colors from '../../utils/Colors'
import { Icon } from 'react-native-elements'
import { deleteInscription } from '../../utils/Axios'

export default function SwipeableComponent({ courses }) {
  const [inscription, setInscription] = useState([]);

  const SwipeDelete = (courseId) => {
    const fetchCourses = async () => {
      courses.map((course) => {
        if (course.id === courseId) {
          const fetchedInscription = deleteInscription(course.inscriptions[0].id);
          setInscription(fetchedInscription);
        }
      })
    }
    fetchCourses();
  };

  const deleteAction = (progress, dragX) => {
    const translateX = dragX.interpolate({
      inputRange: [-300, 0],
      outputRange: [0, -200],
      extrapolate: 'clamp'
    });
    return (
      <View style={styles.swipeBackgroud}>
        <Animated.Text style={[styles.textDelete, { transform: [{ translateX }] }]}>Eliminando del carrito...</Animated.Text>
        <Icon name="trash" type="font-awesome-5" color={Colors.PalleteGreenBackground} size={20} />
      </View>
    )
  };

  return (
    <>
      {
        courses.map((courseSwipe) => (
          <Swipeable
            key={courseSwipe.id}
            renderRightActions={deleteAction}
            onSwipeableOpen={() => SwipeDelete(courseSwipe.id)}
          >
            <View style={styles.container}>
              <Courses courseSwipe={courseSwipe} />
            </View>
          </Swipeable>
        ))
      }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textDelete: {
    color: Colors.PalleteGreenBackground,
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 15
  },
  swipeBackgroud: {
    flexDirection: 'row',
    width: "100%",
    height: 115,
    borderRadius: 16,
    backgroundColor: Colors.PalletteRed,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
})