
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CartScreen from '../../screens/cart/CartScreen';
import CartPaymentMethodScreen from '../../screens/cart/cartScreens/CartPaymentMethodScreen';
import AddCardScreen from '../../screens/cart/cartScreens/AddCardScreen';
import CartPaymentScreen from '../../screens/cart/cartScreens/CartPaymentScreen';

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
      <Stack.Screen
      name='AddCard'
      component={AddCardScreen}
      options={{title:'Agregar tarjeta'}}
      />
      <Stack.Screen 
      name='CartPayment'
      component={CartPaymentScreen}
      options={{title:'Pago'}}
      />
    </Stack.Navigator>
  );
}

