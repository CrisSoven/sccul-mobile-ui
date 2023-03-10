import React, { useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import CartScreen from '../../screens/cart/CartScreen';
import CartPaymentMethodScreen from '../../screens/cart/cartScreens/CartPaymentMethodScreen';
import AddCardScreen from '../../screens/cart/cartScreens/AddCardScreen';
import CartPaymentScreen from '../../screens/cart/cartScreens/CartPaymentScreen';
import Successful from '../../screens/cart/cartScreens/Successful';
import Fail from '../../screens/cart/cartScreens/Fail';

const Stack = createStackNavigator();

export default function CartStackNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen
        name="PaymentMethod"
        component={CartPaymentMethodScreen}
        options={{ title: "Metodos de pago" }}
      />
      <Stack.Screen
        name="AddCard"
        component={AddCardScreen}
        options={{ title: "Agregar tarjeta" }}
      />
      <Stack.Screen
        name="CartPayment"
        component={CartPaymentScreen}
        options={{ title: "Pago" }}
      />
      <Stack.Screen name="Successful" component={Successful} />
      <Stack.Screen name="Fail" component={Fail} />
    </Stack.Navigator>
  );
}