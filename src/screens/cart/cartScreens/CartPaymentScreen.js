import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState } from "react";
import Goback from "../../../components/common/Goback";
import Line from "../../../components/common/Line";
import CartResume from "../../../components/cart/CartResume";
import DetailsPayment from "../../../components/cart/DetailsPayment";
import AccionsBtnComponent from "../../../components/cart/AccionsBtnComponent";
import CardsComponent from "../../../components/cart/CardsComponent";
import ResumePrice from "../../../components/cart/ResumePrice";
import { useNavigation } from "@react-navigation/native";

//const windowWidth = Dimensions.get("window").width;

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
    <>
      <View style={styles.header}>
        <Goback title="Confirmar compra" />
        <ResumePrice />
        <CardsComponent />
      </View>
      <ScrollView>
        <Line />
        <CartResume />
        <Line />
        <DetailsPayment />
        <AccionsBtnComponent
          btnCancelTitle="Cancelar"
          btnContinueTitle="Finalizar Compra"
          action={handleAction}
          btnPrimary={true}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    //width: windowWidth,
    paddingBottom: 30,
  },
  header: {
    paddingHorizontal: 20,
    //width: windowWidth,
  },
});
