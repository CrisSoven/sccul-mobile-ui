import { StyleSheet, View, Animated, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Swipeable } from 'react-native-gesture-handler'
import Courses from '../common/Courses'
import Colors from '../../utils/Colors'
import { Icon } from 'react-native-elements'
import { deleteInscription } from '../../utils/Axios'

export default function SwipeableComponent({ courses, onReload }) {
  const SwipeDelete = async (courseId) => {
    const courseToDelete = courses.find(course => course.id === courseId);
    if (courseToDelete) {
      const response = await deleteInscription(courseToDelete);
      if (response) {
        onReload();
      }
    }
  };
  const deleteAction = (progress, dragX) => {
    const translateX = dragX.interpolate({
      inputRange: [-300, 0],
      outputRange: [0, -200],
      extrapolate: 'clamp'
    });
    return (
      <View style={styles.swipeBackground}>
        <ActivityIndicator size="small" color={Colors.PalleteGreenBackground} />
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
    marginHorizontal: 15
  },
  swipeBackground: {
    flexDirection: 'row',
    width: "100%",
    height: 110,
    borderRadius: 16,
    backgroundColor: Colors.PalletteRed,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
})