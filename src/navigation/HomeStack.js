import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/HomeScreen";
import CategoryScreen from "../screens/home/homeScreens/CategoryScreen";
import CoursesDetailsScreen from "../screens/home/homeScreens/CoursesDetailsScreen";
import LandingScreen from "../screens/sccul/LandingScreen";
import LoginScreen from "../screens/sccul/LoginScreen";
import RegisterScreen from "../screens/sccul/RegisterScreen";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="Landings" component={LandingScreen} />
      <Stack.Screen name="Logins" component={LoginScreen} />
      <Stack.Screen name="Registers" component={RegisterScreen} /> */}
      <Stack.Screen name="HomeS" component={HomeScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="CoursesDetailsScreen" component={CoursesDetailsScreen} />
    </Stack.Navigator>
  );
}
