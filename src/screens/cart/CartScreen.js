import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/common/SearchBar';
import SwipeNotify from '../../components/cart/SwipeNotify';
import Colors from '../../utils/Colors';
import TitleBtnComponent from '../../components/profile/TitleBtnComponent';
import { useNavigation } from '@react-navigation/native';
import { buyCourses, checkout, getCoursesCart, getUser } from '../../utils/Axios';
import SwipeableComponent from '../../components/cart/SwipeableComponent';
import SplashScreen from '../../screens/sccul/SplashScreen';
import EmptyContainer from '../../components/common/EmptyContainer';
import { useStripe } from '@stripe/stripe-react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default function CartScreen() {
  const [reload, setReload] = useState(false);
  const onReload = () => setReload((prevState) => !prevState);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const navigation = useNavigation();
  const [courses, setCourses] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState(null);
  const [inputText, setInputText] = useState('');

  const onCheckout = async () => {
    setIsLoading(true);
    console.log('Total: ' + total);
    const { paymentIntent, ephemeralKey, customer } = await checkout(total);
    const { error } = await initPaymentSheet({
      paymentIntentClientSecret: paymentIntent,
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      merchantDisplayName: 'SCCUL Inc.',
      defaultBillingDetails: {
        address: {
          country: 'mx',
        },
      },
    });
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'No se ha podido realizar la compra',
      });
      setIsLoading(false);
      return;
    }

    const { error: errorPresent, ...presetData } =
      await presentPaymentSheet();

    if (errorPresent) {
      setIsLoading(false);
      // console.log('Error', errorPresent.code, errorPresent.message);
      // Toast.show({
      // 	type: 'error',
      // 	text1: 'Error',
      // 	text2: errorPresent.message,
      // });
      return;
      // Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      const { data, error: errorBuy } = await buyCourses(courses, user);
      setIsLoading(false);

      if (errorBuy) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'No se actualizaron los cursos. Contacte con un administrador',
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
    }
  };

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true);
      const fetchedCourses = await getCoursesCart();
      setCourses(fetchedCourses);
      let totalProv;
      fetchedCourses === null ? totalProv
        : (totalProv = fetchedCourses.reduce((acc, curso) => {
          return (acc + (curso.price - (curso.discount * curso.price) / 100));
        }, 0));

      setTotal(totalProv.toFixed(2));
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
  }, [reload]);

  const listOfCourses = () => {
    if (inputText === '') {
      return courses;
    }

    return courses.filter((course) => {
      return course.name.toLowerCase().includes(inputText.toLowerCase());
    });
  };

  return courses === null ? (
    <SplashScreen />
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de compras</Text>
      <SearchBar setInputValue={setInputText} value={inputText} />
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
            <SwipeableComponent courses={listOfCourses()} onReload={onReload} />
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
