import { StyleSheet, Image } from "react-native";
import React from "react";
import Goback from "../../../components/common/Goback";
import AddCardFormComponent from "../../../components/cart/AddCardFormComponent";
import { ScrollView } from "react-native-gesture-handler";

export default function AddCardScreen() {
  return (
    <ScrollView>
      <Goback title="Agregar tarjeta" />
      <Image
        style={styles.image}
        source={require("../../../../assets/img/bankCards.png")}
      />
      <AddCardFormComponent isEditable={true}/>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  image: {
    height: 75,
    width: 200,
    margin: 20,
    resizeMode: "contain",
  }
});
