import React from 'react';
import CartScreen from '../screens/cart/CartScreen';
import CartPaymentMethodScreen from '../screens/cart/cartScreens/CartPaymentMethodScreen';
import AddCardScreen from '../screens/cart/cartScreens/AddCardScreen';
import CartPaymentScreen from '../screens/cart/cartScreens/CartPaymentScreen';
import Successful from '../screens/cart/cartScreens/Successful';
import Fail from '../screens/cart/cartScreens/Fail';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function CartStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="PaymentMethod" component={CartPaymentMethodScreen} />
      <Stack.Screen name="AddCard" component={AddCardScreen} />
      <Stack.Screen name="CartPayment" component={CartPaymentScreen} />
      <Stack.Screen name="Successful" component={Successful} />
      <Stack.Screen name="Fail" component={Fail} />
    </Stack.Navigator>
  );
}