import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/navigation/AppNavigation";
import Splash from "./src/screens/sccul/SplashScreen";
import Header from "./src/components/common/Header";
import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function Started() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(true);
      }
    }
    Started();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading && <Header />}
      <NavigationContainer>
        {isLoading ? <AppNavigation /> : <Splash />}
      </NavigationContainer>
    </View>
  );
}
