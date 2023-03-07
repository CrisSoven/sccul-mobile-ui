import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import CourseScreen from "../screens/course/CourseScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import Colors from "../utils/Colors";
import CartStackNavigator from "./stacks/CartStack";
import HomeStack from "./stacks/HomeStack";
import CourseStack from "./stacks/CourseStack";

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
        component={HomeStack }
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
        component={CourseStack}
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
        component={ProfileScreen}
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
