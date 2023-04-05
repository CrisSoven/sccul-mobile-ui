import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/common/SearchBar';
import SwipeNotify from '../../components/cart/SwipeNotify';
import Colors from '../../utils/Colors';
import TitleBtnComponent from '../../components/profile/TitleBtnComponent';
import { useNavigation } from '@react-navigation/native';
import { checkout, getCoursesCart } from '../../utils/Axios';
import SwipeableComponent from '../../components/cart/SwipeableComponent';
import SplashScreen from '../../screens/sccul/SplashScreen';
import EmptyContainer from '../../components/common/EmptyContainer';
import { useStripe } from '@stripe/stripe-react-native';

export default function CartScreen() {
	const [courses, setCourses] = useState(null);
	const { initPaymentSheet, presentPaymentSheet } = useStripe();
	const [isLoading, setIsLoading] = useState(true);
	const [total, setTotal] = useState(0);

	const onCheckout = async () => {
		setIsLoading(true);
		console.log('Total: ' + total);

		const { paymentIntent, ephemeralKey, customer } = await checkout(total );

		const { error } = await initPaymentSheet({
			paymentIntentClientSecret: paymentIntent,
			merchantDisplayName: 'Example Inc.',
		});
		if (error) {
			console.log('Error', error);
			setIsLoading(false);
			return;
		} else {
			// setIsLoading(true);
		}

		const { errorPresent } = await presentPaymentSheet();

		if (errorPresent) {
			setIsLoading(false);
			console.log('Error', errorPresent.code, errorPresent.message);
			return;
			// Alert.alert(`Error code: ${error.code}`, error.message);
		} else {
			// Alert.alert('Success', 'Your order is confirmed!');
		}

		setIsLoading(false);
	};

	// const fetchPaymentSheetParams = async () => {

	// 	const { paymentIntent, ephemeralKey, customer } = await checkout();

	// 	console.log('paymentIntent: ' + paymentIntent);
	// 	console.log('ephemeralKey:' + ephemeralKey);
	// 	console.log('customer:' + customer);

	// 	return {
	// 		paymentIntent,
	// 		ephemeralKey,
	// 		customer,
	// 	};
	// };

	// const initializePaymentSheet = async () => {
	// 	const { paymentIntent, ephemeralKey, customer } =
	// 		await fetchPaymentSheetParams();

	// 	const { error } = await initPaymentSheet({
	// 		paymentIntentClientSecret: paymentIntent,
	// 		merchantDisplayName: 'Example Inc.',
	// 	});
	// 	if (error) {
	// 		console.log('Error', error);
	// 	} else {
	// 		setIsLoading(true);
	// 	}
	// };

	// const openPaymentSheet = async () => {
	// 	const { error } = await presentPaymentSheet();

	// 	if (error) {
	// 		console.log('Error', error.code, error.message);
	// 		// Alert.alert(`Error code: ${error.code}`, error.message);
	// 	} else {
	// 		// Alert.alert('Success', 'Your order is confirmed!');
	// 	}
	// };

	// useEffect(() => {
	// 	initializePaymentSheet();
	// }, []);

	useEffect(() => {
		const fetchCourses = async () => {
			const fetchedCourses = await getCoursesCart();
			setCourses(fetchedCourses);
			let totalProv;
			fetchedCourses === null
				? totalProv
				: (totalProv = fetchedCourses.reduce((acc, curso) => {
						return acc + curso.price;
				  }, 0));

			setTotal(totalProv);
			console.log('Total: ' + totalProv);
			setIsLoading(false);
		};
		fetchCourses();
	}, []);

	const navigation = useNavigation();
	const handlePaymentMethod = () => {
		// navigation.navigate('PaymentMethod', { courses });
	};

	return courses === null ? (
		<SplashScreen />
	) : (
		<View style={styles.container}>
			<Text style={styles.title}>Carrito de compras</Text>
			<SearchBar />
			{!courses.length ? (
				<EmptyContainer
					icon='cart-minus'
					type='material-community'
					text='Tu carrito está vacío'
				/>
			) : (
				<>
					<SwipeNotify />
					<ScrollView contentContainerStyle={styles.content}>
						<SwipeableComponent courses={courses} />
					</ScrollView>
					<TitleBtnComponent
						textTitle={`$ MX`}
						titleStyle={styles.subtitle}
						textBtn=' Pagar '
						icon='payments'
						onPress={onCheckout}
						btnPrimary={true}
						loading={isLoading}
					/>
				</>
			)}
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 20,
	},
	content: {
		flexGrow: 1,
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginLeft: 20,
		marginBottom: 20,
	},
	subtitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: Colors.PalletteRed,
	},
});
