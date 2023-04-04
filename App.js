import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import { View } from 'react-native';
import Header from './src/components/common/Header';
import Toast from 'react-native-toast-message';
import { useEffect } from 'react';
import { useState } from 'react';
import SplashScreen from './src/screens/sccul/SplashScreen';
import { checkLoginStatus, deleteToken } from './src/utils/Axios';
import AuthContextProvider from './src/context/auth/AuthContextProvider';
import { StripeProvider } from '@stripe/stripe-react-native';

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
		return <SplashScreen />;
	}
	return (
		<AuthContextProvider>
			<StripeProvider publishableKey='pk_test_51MnoaKBTa0KYEe2P3JfJXyc9DDAqwuUjshuAWpDZU4LzoDP0I6yiKQbAPrD72lYBDZ1xiUQ2ZuY1YYp2GN1sMadd00BLvaxXYW'>
				<View style={{ flex: 1 }}>
					<NavigationContainer>
						<Header />
						<AppNavigation />
						<Toast />
					</NavigationContainer>
				</View>
			</StripeProvider>
		</AuthContextProvider>
	);
}
