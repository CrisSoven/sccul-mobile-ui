import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import { View } from 'react-native';
import Header from './src/components/common/Header';
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
            <Header />
            <AppNavigation />
            <Toast />
      </NavigationContainer>
    </View>
  );
}
