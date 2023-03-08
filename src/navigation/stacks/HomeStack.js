import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/home/HomeScreen";
import CategoryScreen from "../../screens/home/homeScreens/CategoryScreen";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeS" component={HomeScreen} />
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{ title: "Checo Puto" }}
      />
    </Stack.Navigator>
  );
}
