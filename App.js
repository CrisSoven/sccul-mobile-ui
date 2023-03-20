import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import Splash from './src/screens/sccul/SplashScreen';
import { View } from 'react-native';
import Header from './src/components/common/Header';
import ScculStack from './src/navigation/stacks/ScculStack';
import { checkLoginStatus } from './src/utils/Axios';

export default function App() {
  const [isLogged, setIsLogged] = useState(null);

  useEffect(() => {
    async function checkStatus() {
      const status = await checkLoginStatus();
      setIsLogged(true);
    }
    checkStatus();
  }, []);

  if (isLogged === null) {
    return <Splash />;
  }
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        {isLogged ? (
          <>
            <Header />
            <AppNavigation />
          </>
        ) : (
          <ScculStack />
        )}
      </NavigationContainer>
    </View>
  );
}
