import React from 'react'
import ProfileScreen from '../screens/profile/ProfileScreen'
import { createStackNavigator } from '@react-navigation/stack'
import ModalComponent from '../components/common/ModalComponent'
import ChangePasswordScreen from '../screens/profile/profileScreens/ChangePasswordScreen'

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Profiles' component={ProfileScreen} />
      <Stack.Screen name='ChangePass' component={ChangePasswordScreen} />
      <Stack.Screen name='ModalComponent' component={ModalComponent}/>
    </Stack.Navigator>
  );
}
