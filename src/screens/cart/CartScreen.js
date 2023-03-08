import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import SearchBar from "../../components/common/SearchBar";
import SelectComponent from "../../components/cart/SelectComponent";
import ListCourses from "../../components/common/ListCourses";
import Colors from "../../utils/Colors";
import TitleBtnComponent from "../../components/profile/TitleBtnComponent";
import { useNavigation } from "@react-navigation/native";

export default function CartScreen() {
  const navigation = useNavigation();
  const navigateTo = () => {
    navigation.navigate("PaymentMethod");
  };
  const courses = [
    {
      image: require("../../../assets/img/dev.jpg"),
      title: "Programación",
      price: "$50",
      average: 4.4,
      comments: 20,
    },
    {
      image: require("../../../assets/img/diseño.jpg"),
      title: "Diseño Gráfico",
      price: "$70",
      average: 5.0,
      comments: 10,
    },
    {
      image: require("../../../assets/img/marketimg.jpg"),
      title: "Marketing Digital",
      price: "$60",
      average: 4.5,
      comments: 15,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Carrito de compras</Text>
        <SearchBar />
        <SelectComponent />
        <ScrollView>
          <ListCourses courses={courses} />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TitleBtnComponent
          textTitle="$1,246.50 MX"
          titleStyle={styles.subtitle}
          textBtn="Pagar"
          onPress={navigateTo}
          btnPrimary={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  footer: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.White,
  },
});
