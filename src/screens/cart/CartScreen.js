import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../../components/common/SearchBar";
import SelectComponent from "../../components/cart/SelectComponent";
import ListCourses from "../../components/common/ListCourses";
import Colors from "../../utils/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import TitleBtnComponent from "../../components/profile/TitleBtnComponent";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";


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
    <ScrollView>

  
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.content}>
        <Text style={styles.title}>Carrito de compras</Text>
        <SearchBar />
        <SelectComponent />
        <ListCourses 
          courses={courses}
        />
      </View>
      
      <TitleBtnComponent
        style={styles.footer}
        textTitle="$1,246.50 MX"
        titleStyle={styles.subtitle}
        textBtn="Pagar"
        onPress={navigateTo}
      />
    </KeyboardAwareScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
  },
  footer: {
    position: "absolute",
    bottom: 0,
  },

  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.PalleteGray,
  },
});
