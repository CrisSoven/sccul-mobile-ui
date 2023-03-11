import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'
import { Icon } from "react-native-elements";

export default function CreditCard() {
  return (
    <View style={styles.creditCard}>
      <Text style={styles.userInfo}>Jonathan Abed Ramirez</Text>

      <Text style={styles.textLabel}>Número de tarjeta</Text>
      <View style={styles.ccRow}>
      <Image source={require("../../../assets/img/ChipCC.png")} />
        <Text style={styles.cardNumbers}>XXXX XXXX XXXX 2509</Text>
      </View>


      <Text style={styles.textLabel}>Fecha de expiracións</Text>
      <Text style={styles.userInfo}>01/25</Text>

      <Image style={styles.image} source={require("../../../assets/img/Visa_Logo.png")} />
    </View>
  )
}

const styles = StyleSheet.create({
  creditCard: {
    height: 240,
    width: 380,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: "5%",
    justifyContent: "center",
    backgroundColor: Colors.PalleteAuxiliarBlue,
    alignSelf: "center",
  },
  userInfo: {
    color: Colors.PalleteWhite,
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  ccRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  cardNumbers: {
    marginLeft: 10,
    color: Colors.PalleteWhite,
    fontSize: 25,
    fontWeight: "bold",
  },
  textLabel: {
    color: Colors.PalleteWhite,
    marginHorizontal: 20,
    marginTop: 40,
  },
  image: {
    width: "20%",
    height: "10%",
    position: "absolute",
    right: 20,
    bottom: 20,
    resizeMode: "contain",
  },
})