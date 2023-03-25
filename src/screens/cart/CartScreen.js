import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import SearchBar from "../../components/common/SearchBar";
import SwipeNotify from "../../components/cart/SwipeNotify";
import Colors from "../../utils/Colors";
import TitleBtnComponent from "../../components/profile/TitleBtnComponent";
import { useNavigation } from "@react-navigation/native";
import { getCourses } from "../../utils/Axios";
import Splash from "../../screens/sccul/SplashScreen";
import SwipeableComponent from "../../components/cart/SwipeableComponent";
import EmptyCart from "../../components/cart/EmptyCart";

export default function CartScreen() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const fetchedCourses = await getCourses();
      setCourses(fetchedCourses);
    };
    fetchCourses();
  }, [courses]);

  const filteredCourses = courses.filter((curso) => {
    const inscriptions = curso.inscriptions;
    if (inscriptions && inscriptions.length > 0) {
      return inscriptions[0].status.includes("inscrito");
    }
  });

  const total = filteredCourses.reduce((acc, curso) => {
    return acc + curso.price;
  }, 0);

  const finalTotal = total.toFixed(3);

  const navigation = useNavigation();
  const navigateTo = () => {
    navigation.navigate("PaymentMethod", { filteredCourses });
  };

  return (
    !courses.length > 0 ?
      <Splash /> : (
        <View style={styles.container}>
          <Text style={styles.title}>Carrito de compras</Text>
          <SearchBar />
          {
            filteredCourses.length === 0 ?
              <EmptyCart /> : (
                <>
                  <SwipeNotify />
                  <ScrollView contentContainerStyle={styles.content}>
                    <SwipeableComponent courses={filteredCourses} />
                  </ScrollView>

                </>
              )
          }
          <TitleBtnComponent
            textTitle={`$${finalTotal} MX`}
            titleStyle={styles.subtitle}
            textBtn=" Pagar "
            icon="payments"
            onPress={navigateTo}
            btnPrimary={true}
          />
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
