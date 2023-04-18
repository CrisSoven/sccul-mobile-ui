import React from 'react';
import LoginScreen from '../screens/sccul/LoginScreen';
import LandingScreen from '../screens/sccul/LandingScreen';
import RegisterScreen from '../screens/sccul/RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ResetPasswordScreen from '../screens/sccul/ResetPasswordScreen';

const Stack = createStackNavigator();

export default function ScculStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Landings' component={LandingScreen} />
      <Stack.Screen name='Logins' component={LoginScreen} />
      <Stack.Screen name='Registers' component={RegisterScreen} />
      <Stack.Screen name='ResetPass' component={ResetPasswordScreen}/>
    </Stack.Navigator>
  );
}
