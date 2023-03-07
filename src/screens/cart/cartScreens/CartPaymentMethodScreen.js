import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import GoBack from "../../../components/common/Goback";
import AddCardComponenet from "../../../components/cart/AddCardBtnComponent";
import CardsComponent from "../../../components/cart/CardsComponent";
import { ScrollView } from "react-native-gesture-handler";

export default function CartPaymentMethodScreen(props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <GoBack title="Metodos de Pago" />
        <AddCardComponenet />
      </View>
      <View style={styles.content}>
        <CardsComponent />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
