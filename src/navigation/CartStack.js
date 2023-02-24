
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CartScreen from '../screens/CartScreen';
import CartPaymentMethodScreen from '../screens/Cart/CartPaymentMethodScreen'

const Stack = createStackNavigator();

export default function CartStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Cart"
        component={CartScreen}
      />
      <Stack.Screen
        name="PaymentMethod"
        component={CartPaymentMethodScreen}
        options={{title:'Metodos de pago'}}
      />
    </Stack.Navigator>
  );
}

