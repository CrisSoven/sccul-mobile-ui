import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/home/HomeScreen";
import CourseScreen from "../screens/course/CourseScreen";
import Colors from "../utils/Colors";
import CartStackNavigator from "./stacks/CartStack";
import ProfileStackNavigator from "./stacks/ProfileStack";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PalleteBlack,
        tabBarInactiveTintColor: Colors.PalleteGray,
        tabBarLabelStyle: {
          fontSize: 9,
        },
        tabBarStyle: {
          padding: 15,
          paddingBottom: 15,
          height: 80,
        },
      }}
    >
      <Tab.Screen
        component={HomeScreen}
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons
              name={"home-outline"}
              color={focused ? Colors.PalleteBlack : Colors.PalleteGray}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Carrito"
        // Reemplaza el componente CartScreen por el CartStackNavigator
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons
              name={"cart-outline"}
              color={focused ? Colors.PalleteBlack : Colors.PalleteGray}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        component={CourseScreen}
        name="My course"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons
              name={"bookmark-box-multiple-outline"}
              color={focused ? Colors.PalleteBlack : Colors.PalleteGray}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        component={ProfileStackNavigator}
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons
              name={"account-outline"}
              color={focused ? Colors.PalleteBlack : Colors.PalleteGray}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
