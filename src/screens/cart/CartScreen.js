import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import SearchBar from '../../components/common/SearchBar';
import SwipeNotify from '../../components/cart/SwipeNotify';
import Colors from '../../utils/Colors';
import TitleBtnComponent from '../../components/profile/TitleBtnComponent';
import { useNavigation } from '@react-navigation/native';
import {
	buyCourses,
	checkout,
	getCoursesCart,
	getUser,
} from '../../utils/Axios';
import SwipeableComponent from '../../components/cart/SwipeableComponent';
import SplashScreen from '../../screens/sccul/SplashScreen';
import EmptyContainer from '../../components/common/EmptyContainer';
import { useStripe } from '@stripe/stripe-react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default function CartScreen() {
	const { initPaymentSheet, presentPaymentSheet } = useStripe();

	const navigation = useNavigation();

	const [courses, setCourses] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [total, setTotal] = useState(0);
	const [user, setUser] = useState(null);

	const onCheckout = async () => {
		setIsLoading(true);
		console.log('Total: ' + total);

		const { paymentIntent, ephemeralKey, customer } = await checkout(total);

		const { error } = await initPaymentSheet({
			paymentIntentClientSecret: paymentIntent,
			merchantDisplayName: 'Example Inc.',
		});
		if (error) {
			console.log('Error', error);
			setIsLoading(false);
			return;
		} else {
			setIsLoading(false);
		}

		const { errorPresent } = await presentPaymentSheet();

		if (errorPresent) {
			setIsLoading(false);
			// console.log('Error', errorPresent.code, errorPresent.message);
			return;
			// Alert.alert(`Error code: ${error.code}`, error.message);
		}

		const { data, error: errorBuy } = await buyCourses(courses, user);
		console.log('data: ' + data);
		setIsLoading(false);

		if (errorBuy) {
			Toast.show({
				type: 'error',
				text1: 'Error',
				text2: 'No se actualizar los cursos. Contacte con un administrador',
			});
		} else {
			Toast.show({
				type: 'success',
				text1: 'Compra realizada',
				text2: 'Se ha realizado la compra correctamente',
			});

			navigation.navigate('CourseStack', {
				screen: 'Courses',
			});
		}
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
			setIsLoading(true);
			const fetchedCourses = await getCoursesCart();
			setCourses(fetchedCourses);
			// fetchedCourses.map((course) => {
			// 	console.log('Course: ' + course.inscriptions[0].id);
			// });
			let totalProv;
			fetchedCourses === null
				? totalProv
				: (totalProv = fetchedCourses.reduce((acc, curso) => {
						return acc + curso.price;
				  }, 0));

			setTotal(totalProv);
			// console.log('Total: ' + totalProv);
			setIsLoading(false);
		};

		const getInfoUser = async () => {
			setIsLoading(true);
			const user = await getUser();
			setUser(user);
			setIsLoading(false);
		};

		fetchCourses();
		getInfoUser();
	}, []);

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
						textTitle={`$${total} MX`}
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
