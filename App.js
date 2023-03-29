import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import Splash from './src/screens/sccul/SplashScreen';
import { View } from 'react-native';
import Header from './src/components/common/Header';
import ScculStack from './src/navigation/ScculStack';
import { checkLoginStatus, deleteToken } from './src/utils/Axios';
import Toast from "react-native-toast-message";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      // const fetchedSession = await deleteToken();
      const fetchedSession = await checkLoginStatus();
      setSession(fetchedSession);
    };
    fetchSession();
  }, [session]);

  if (session === null) {
    return <Splash />;
  }
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        {session ? (
          <>
            <Header />
            <AppNavigation />
            <Toast />
          </>
        ) : (
          <>
            <ScculStack />
            <Toast />
          </>
        )}
      </NavigationContainer>
    </View>
  );
}
