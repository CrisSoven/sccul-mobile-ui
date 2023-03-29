import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import SearchBar from "../../components/common/SearchBar";
import SwipeNotify from "../../components/cart/SwipeNotify";
import Colors from "../../utils/Colors";
import TitleBtnComponent from "../../components/profile/TitleBtnComponent";
import { useNavigation } from "@react-navigation/native";
import { getCoursesCart } from "../../utils/Axios";
import SwipeableComponent from "../../components/cart/SwipeableComponent";
import SplashScreen from "../../screens/sccul/SplashScreen";
import EmptyContainer from "../../components/common/EmptyContainer";

export default function CartScreen() {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const fetchCourses = async () => {
      const fetchedCourses = await getCoursesCart();
      setCourses(fetchedCourses);
    };
    fetchCourses();
  }, [
    // courses
  ]);

  // const total = courses.reduce((acc, curso) => {
  //   return acc + curso.price;
  // }, 0);

  const navigation = useNavigation();
  const handlePaymentMethod = () => {
    navigation.navigate("PaymentMethod", { courses });
  };

  return (
    courses === null ? (
      <SplashScreen />
    ) : (
      <View style={styles.container}>
      <Text style={styles.title}>Carrito de compras</Text>
      <SearchBar />
      {
        !courses.length ?
          <EmptyContainer icon="cart-minus" type="material-community" text="Tu carrito está vacío" /> : (
            <>
              <SwipeNotify />
              <ScrollView contentContainerStyle={styles.content}>
                <SwipeableComponent courses={courses} />
              </ScrollView>
              <TitleBtnComponent
                textTitle={`$ MX`}
                titleStyle={styles.subtitle}
                textBtn=" Pagar "
                icon="payments"
                onPress={handlePaymentMethod}
                btnPrimary={true}
              />
            </>
          )
      }
    </View>
    )
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
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.PalletteRed,
  },
});
