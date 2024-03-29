import React from 'react'
import HomeScreen from '../screens/home/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack'
import CategoryScreen from '../screens/home/homeScreens/CategoryScreen'
import CoursesDetailsScreen from '../screens/home/homeScreens/CoursesDetailsScreen'

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='HomeS' component={HomeScreen} />
      <Stack.Screen name='CategoryScreen' component={CategoryScreen} />
      <Stack.Screen name='CoursesDetailsScreen' component={CoursesDetailsScreen} />
    </Stack.Navigator>
  );
}
