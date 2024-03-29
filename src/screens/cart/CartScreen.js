import Colors from '../../utils/Colors'
import Title from '../../components/common/Title'
import { useStripe } from '@stripe/stripe-react-native'
import { useNavigation } from '@react-navigation/native'
import SearchBar from '../../components/common/SearchBar'
import SwipeNotify from '../../components/cart/SwipeNotify'
import SplashScreen from '../../screens/sccul/SplashScreen'
import React, { useState, useEffect, useCallback } from 'react'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import EmptyContainer from '../../components/common/EmptyContainer'
import SwipeableComponent from '../../components/cart/SwipeableComponent'
import TitleBtnComponent from '../../components/profile/TitleBtnComponent'
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native'
import { buyCourses, checkout, getCoursesCart, getUser } from '../../utils/Axios'

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
  const [refreshing, setRefreshing] = useState(false);

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
        text1: 'No se ha podido realizar la compra',
        visibilityTime: 5000,
        topOffset: 100,
      });
      setIsLoading(false);
      return;
    }

    const { error: errorPresent, ...presetData } =
      await presentPaymentSheet();

    if (errorPresent) {
      setIsLoading(false);
      return;
    } else {
      const { data, error: errorBuy } = await buyCourses(courses, user);
      setIsLoading(false);

      if (errorBuy) {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Error',
          text2: 'No se actualizaron los cursos. Contacte con un administrador',
          visibilityTime: 5000,
          topOffset: 100,
        });
      } else {
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Compra realizada',
          text2: 'Se ha realizado la compra correctamente',
          visibilityTime: 5000,
          topOffset: 100,
        });
        navigation.navigate('CourseStack', {
          screen: 'Courses',
        });
      }
    }
  };

  const fetchCourses = async () => {
    setIsLoading(true);
    const fetchedCourses = await getCoursesCart();
    setCourses(fetchedCourses);
    let totalProv;
    fetchedCourses === null
      ? totalProv
      : (totalProv = fetchedCourses.reduce((acc, curso) => {
        return (
          acc +
          (curso.price - (curso.discount * curso.price) / 100)
        );
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

  useEffect(() => {
    fetchCourses();
    getInfoUser();
  }, [reload]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchCourses();
    await getInfoUser();
    setRefreshing(false);
  }, []);

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
      <Title title='Carrito de compras'/>
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
          <ScrollView
            contentContainerStyle={styles.content}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
          >
            <SwipeableComponent
              courses={listOfCourses()}
              onReload={onReload}
            />
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
    marginHorizontal: 10,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.PalletteRed,
  },
});
