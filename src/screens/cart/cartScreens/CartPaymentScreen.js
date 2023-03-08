import { StyleSheet, View, ScrollView, Platform, StatusBar } from "react-native";
import React, { useState } from "react";
import Goback from "../../../components/common/Goback";
import Line from "../../../components/common/Line";
import CartResume from "../../../components/cart/CartResume";
import DetailsPayment from "../../../components/cart/DetailsPayment";
import AccionsBtnComponent from "../../../components/cart/AccionsBtnComponent";
import CardsComponent from "../../../components/cart/CardsComponent";
import ResumePrice from "../../../components/cart/ResumePrice";
import { useNavigation } from "@react-navigation/native";

export default function CartPaymentScreen(props) {
  const navigation = useNavigation();
  const [isPurchaseSuccessful, setIsPurchaseSuccessful] = useState(false); // Aquí asumo que tienes una variable que indica si la compra fue exitosa o no
  const handleAction = () => {
    if (!isPurchaseSuccessful) {
      navigation.navigate("Successful");
    } else {
      navigation.navigate("Fail");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Goback title="Confirmar compra" />
        <ResumePrice />
        <CardsComponent />
        <Line />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.scrollContent}>
          <CartResume />
          <Line />
          <DetailsPayment />
          <AccionsBtnComponent
            btnCancelTitle="Cancelar"
            btnContinueTitle="Finalizar Compra"
            action={handleAction}
            btnPrimary={true}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    elevation: 4,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
});
