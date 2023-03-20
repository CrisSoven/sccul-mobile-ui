import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Goback from "../../../components/common/Goback";
import AddCardFormComponent from "../../../components/cart/AddCardFormComponent";
import { ScrollView } from "react-native-gesture-handler";
import AccionsBtnComponent from "../../../components/cart/AccionsBtnComponent";
import SaveCardBtnComponent from "../../../components/cart/SaveCardBtnComponent";
import { useNavigation } from "@react-navigation/native";

export default function AddCardScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Goback title="Agregar tarjeta" />
      <Image
        style={styles.image}
        source={require("../../../../assets/img/visa.png")}
      />
      <AddCardFormComponent />
      <SaveCardBtnComponent />
      <AccionsBtnComponent
        btnCancelTitle="Cancelar"
        btnContinueTitle="Continuar"
        action={() => navigation.navigate('CartPayment')}
        btnPrimary={true}
      />
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  image: {
    width: 175,
    height: 50,
    marginTop: 30,
    resizeMode: "contain",
  }
});
