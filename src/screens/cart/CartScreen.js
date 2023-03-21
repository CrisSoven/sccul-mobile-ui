import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import SearchBar from "../../components/common/SearchBar";
import SelectComponent from "../../components/cart/SelectComponent";
import Colors from "../../utils/Colors";
import TitleBtnComponent from "../../components/profile/TitleBtnComponent";
import { useNavigation } from "@react-navigation/native";
import { getCourses } from "../../utils/Axios";
import Splash from "../../screens/sccul/SplashScreen";
import SwipeableComponent from "../../components/cart/SwipeableComponent";

export default function CartScreen() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const fetchedCourses = await getCourses();
      setCourses(fetchedCourses);
    };
    fetchCourses();
  }, []);

  if (!courses.length > 0) {
    return <Splash />;
  }

  const filteredCourses = courses.filter((curso) => {
    const inscriptions = curso.inscriptions;
    if (inscriptions && inscriptions.length > 0) {
      return inscriptions[0].status.includes("inscrito");
    }
  });

  const total = filteredCourses.reduce((acc, curso) => {
    return acc + curso.price;
  }, 0);

  const navigation = useNavigation();
  const navigateTo = () => {
    navigation.navigate("PaymentMethod");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de compras</Text>
      <SearchBar />
      <SelectComponent />
      <ScrollView style={styles.content}>
        <SwipeableComponent courses={filteredCourses} />
      </ScrollView>
      <TitleBtnComponent
        textTitle= {`$${total.toFixed(3)} MX`}
        titleStyle={styles.subtitle}
        textBtn=" Pagar "
        icon="payments"
        onPress={navigateTo}
        btnPrimary={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  content: {
    flex: 1,
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
