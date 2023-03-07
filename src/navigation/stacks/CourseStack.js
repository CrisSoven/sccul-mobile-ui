import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CourseDetail from '../../screens/course/courseScreens/CourseDetail';
import CourseSuvery from '../../screens/course/courseScreens/CourseSuvery';

const Stack = createStackNavigator();

export default function CourseStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Course"
        component={CourseDetail}
      />
      <Stack.Screen
        name='Survey'
        component={CourseSuvery}
      />
    </Stack.Navigator>
  )
}
