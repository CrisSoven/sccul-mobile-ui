import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from 'react'
import Goback from '../../../components/common/Goback'
import CreditCard from '../../../components/profile/CreditCard'
import Line from '../../../components/common/Line'
import TitleBtnComponent from '../../../components/profile/TitleBtnComponent'
import Colors from "../../../utils/Colors";
import AddCardFormComponent from "../../../components/cart/AddCardFormComponent"

export default function CreditCardDetailsScreen() {
  return (
    <ScrollView>
      <Goback title={"Mi cartera"} />
      <CreditCard />
      <Line />
      <TitleBtnComponent
        textTitle={"Datos de la tarjeta"}
        titleStyle={styles.subtitle}
        icon={"edit"}
        iconType={"material-community"}
        textBtn={"Editar"}
        btnPrimary={true}
      />
      <AddCardFormComponent />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.PalleteGray,
  },
})