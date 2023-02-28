import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Goback from "../../../components/common/Goback";
import AddCardFormComponent from "../../../components/cart/AddCardFormComponent";
import { ScrollView } from "react-native-gesture-handler";
import AccionsBtnComponent from "../../../components/cart/AccionsBtnComponent";
import SaveCardBtnComponent from "../../../components/cart/SaveCardBtnComponent";

export default function AddCardScreen() {
  return (
    <ScrollView contentContainerStyle={styles.header}>
      <View>

      <Goback title="Agregar tarjeta" />
      <Image
        style={styles.image}
        source={require("../../../../assets/img/Visa_Logo.png")}
        />
      <AddCardFormComponent />
      <SaveCardBtnComponent/>
      <AccionsBtnComponent/>
    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingHorizontal: 1,
    paddingVertical:5,
    width:360,
    height:660
  },
  image: {
    width: 175,
    height: 50,
    marginTop: 30,
  },
  btn: {
    width: 196,
    height: 40,
  },
});
