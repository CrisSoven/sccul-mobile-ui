import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import Splash from './src/screens/sccul/SplashScreen';
import { View } from 'react-native';
import Header from './src/components/common/Header';
import ScculStack from './src/navigation/stacks/ScculStack';

export default function App() {
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(true);
=======
	const [isLoading, setIsLoading] = useState(false);
	const [isLogged, setIsLogged] = useState(false);
>>>>>>> a1ecd67bada1121d41214b2e7d6f98f04e75178e

	useEffect(() => {
		async function checkLoginStatus() {
			// Aquí iría la lógica para verificar si el usuario está logueado o no
			// Si está logueado, se setea setIsLogged a true
			// Si no está logueado, se setea setIsLogged a false
			setIsLoading(false); // Una vez que se haya verificado el estado de login, se oculta el splash screen
		}

		checkLoginStatus();
	}, []);

<<<<<<< HEAD
  if (isLoading) {
    return <Splash />;
  }
=======
	if (isLoading) {
		// Se muestra el splash screen mientras se verifica el estado de login
		return <Splash />;
	}
>>>>>>> a1ecd67bada1121d41214b2e7d6f98f04e75178e

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
