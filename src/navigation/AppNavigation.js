import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import IndexScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import CourseScreen from "../screens/CourseScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Colors from "../utils/Colors";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
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
        component={IndexScreen}
        name="Home"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icons
              name={"home-outline"}
              color={focused ? Colors.Black : Colors.PalleteGray}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        component={CartScreen}
        name="Cart"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icons
              name={"cart-outline"}
              color={focused ? Colors.Black : Colors.PalleteGray}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        component={CourseScreen}
        name="My course"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icons
              name={"bookmark-box-multiple-outline"}
              color={focused ? Colors.Black : Colors.PalleteGray}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        component={ProfileScreen}
        name="Profile"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icons
              name={"account-outline"}
              color={focused ? Colors.Black : Colors.PalleteGray}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
