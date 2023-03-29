import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import SearchBar from "../../components/common/SearchBar";
import SwipeNotify from "../../components/cart/SwipeNotify";
import Colors from "../../utils/Colors";
import TitleBtnComponent from "../../components/profile/TitleBtnComponent";
import { useNavigation } from "@react-navigation/native";
import { getCourses, getUser } from "../../utils/Axios";
import Splash from "../../screens/sccul/SplashScreen";
import SwipeableComponent from "../../components/cart/SwipeableComponent";
import EmptyContainer from "../../components/common/EmptyContainer";

export default function CartScreen() {
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const fetchedCourses = await getCourses();
      const fetchedUser = await getUser();
      setCourses(fetchedCourses);
      setUser(fetchedUser);
    };
    fetchCourses();
  }, [
    
  ]);

  const filteredCourses = courses.filter((curso) => {
    return curso.inscriptions.some((inscrito) => {
      return inscrito.user.id == user && inscrito.status === "inscrito";
    });
  });
  
  const total = filteredCourses.reduce((acc, curso) => {
    return acc + curso.price;
  }, 0);

  const navigation = useNavigation();
  const navigateTo = () => {
    navigation.navigate("PaymentMethod", { filteredCourses });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de compras</Text>
      <SearchBar />
      {
        filteredCourses.length === 0 ?
          <EmptyContainer icon="cart-minus" type="material-community" text="Tu carrito está vacío" /> : (
            <>
              <SwipeNotify />
              <ScrollView contentContainerStyle={styles.content}>
                <SwipeableComponent courses={filteredCourses} />
              </ScrollView>
              <TitleBtnComponent
                textTitle={`$${total} MX`}
                titleStyle={styles.subtitle}
                textBtn=" Pagar "
                icon="payments"
                onPress={navigateTo}
                btnPrimary={true}
              />
            </>
          )
      }
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
