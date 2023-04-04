import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { Icon } from 'react-native-elements';
import Colors from '../utils/Colors';
import CartStack from './CartStack';
import ProfileStack from './ProfileStack';
import HomeStack from './HomeStack';
import CourseStack from './CourseStack';
import { checkLoginStatus, deleteToken } from '../utils/Axios';
import Splash from '../screens/sccul/SplashScreen';
import ScculStack from './ScculStack';
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import { AuthContext } from '../context/auth/authContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function AppNavigation() {
	const { authState, checkSession } = useContext(AuthContext);
	const [session, setSession] = useState(null);

	useEffect(() => {
		//Creo que ya no es necesario esto
		const fetchSession = async () => {
			const fetchedSession = await deleteToken();
			// const fetchedSession = await checkLoginStatus();
			// setSession(fetchedSession);
		};
		// fetchSession();
		checkSession();
	}, [checkSession]);

	if (authState.session === null) {
		return <Splash />;
	}

	console.log('Session: ' + session);

	return authState.session ? (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: Colors.PalleteBlack,
				tabBarInactiveTintColor: Colors.PalleteGray,
				tabBarStyle: {
					padding: 9,
					paddingBottom: 10,
					height: 65,
				},
			}}
		>
			<Tab.Screen
				component={HomeStack}
				name='HomeStack'
				options={{ title: 'Inicio', tabBarIcon: icon('home-outline') }}
			/>
			<Tab.Screen
				name='CartStack'
				component={CartStack}
				options={{
					title: 'Mi carrito',
					tabBarIcon: icon('cart-outline'),
					unmountOnBlur: true,
				}}
			/>
			<Tab.Screen
				name='CourseStack'
				component={CourseStack}
				options={{
					title: 'Mis cursos',
					tabBarIcon: icon('bookmark-box-multiple-outline'),
					unmountOnBlur: true,
				}}
			/>
			<Tab.Screen
				name='ProfileStack'
				component={ProfileStack}
				options={{
					title: 'Perfil',
					tabBarIcon: icon('account-outline'),
					unmountOnBlur: true,
				}}
			/>
		</Tab.Navigator>
	) : (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='ScculStack' component={ScculStack} />
		</Stack.Navigator>
	);
}

const icon =
	(iconName) =>
	({ focused }) =>
		(
			<Icon
				name={iconName}
				type='material-community'
				color={focused ? Colors.PalleteBlack : Colors.PalleteGray}
				size={28}
			/>
		);
