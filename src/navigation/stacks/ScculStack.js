import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../../screens/sccul/SplashScreen";
import LoginScreen from "../../screens/sccul/LoginScreen";
import React from "react";

const Stack = createStackNavigator();
export default function ScculStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
      />
      <Stack.Screen
      name="Logins"
      component={LoginScreen}
      />
    </Stack.Navigator>
  );
  
}
