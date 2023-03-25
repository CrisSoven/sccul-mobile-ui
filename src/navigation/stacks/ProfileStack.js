import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../screens/profile/ProfileScreen";
import React from "react";
import ChangePasswordScreen from "../../screens/profile/profileScreens/ChangePasswordScreen";
import PocketScreen from "../../screens/profile/profileScreens/PocketScreen";
import CreditCardDetailsScreen from "../../screens/profile/profileScreens/CreditCardDetailsScreen";
import ModalComponent from "../../components/common/ModalComponent";

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profiles" component={ProfileScreen} />
      <Stack.Screen name="ChangePass" component={ChangePasswordScreen} />
      <Stack.Screen name="Pockets" component={PocketScreen} />
      <Stack.Screen name="CreditCards" component={CreditCardDetailsScreen} />
      <Stack.Screen name="ModalComponent" component={ModalComponent}/>

    </Stack.Navigator>
  );
}
