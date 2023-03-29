import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { Icon } from "react-native-elements";
import Colors from "../utils/Colors";
import CartStack from "./CartStack";
import ProfileStack from "./ProfileStack";
import HomeStack from "./HomeStack";
import CourseStack from "./CourseStack";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PalleteBlack,
        tabBarInactiveTintColor: Colors.PalleteGray,
        tabBarStyle: {
          padding: 9,
          paddingBottom: 10,
          height: 65,
        },
      }}
    >
      <Tab.Screen
        component={HomeStack}
        name="Inicio"
        options={{ tabBarIcon: icon("home-outline") }}
      />
      <Tab.Screen
        name="Mi carrito"
        component={CartStack}
        options={{ tabBarIcon: icon("cart-outline") }}
      />
      <Tab.Screen
        component={CourseStack}
        name="Mis cursos"
        options={{ tabBarIcon: icon("bookmark-box-multiple-outline") }}
      />
      <Tab.Screen
        component={ProfileStack}
        name="Perfil"
        options={{ tabBarIcon: icon("account-outline") }}
      />
    </Tab.Navigator>
  );
}

const icon = (iconName) => ({ focused }) => (
  <Icon
    name={iconName}
    type="material-community"
    color={focused ? Colors.PalleteBlack : Colors.PalleteGray}
    size={28}
  />
);