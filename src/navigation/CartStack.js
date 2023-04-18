import React from 'react'
import CartScreen from '../screens/cart/CartScreen'
import { createStackNavigator } from '@react-navigation/stack'
import CartPaymentScreen from '../screens/cart/cartScreens/CartPaymentScreen'

const Stack = createStackNavigator();

export default function CartStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Cart' component={CartScreen} />
      <Stack.Screen name='CartPayment' component={CartPaymentScreen} />
    </Stack.Navigator>
  );
}