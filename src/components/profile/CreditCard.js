import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'

export default function CreditCard(props) {
  const { card } = props;
  return (
    <View style={styles.creditCard}>
      <Text style={[styles.userInfo, styles.userName]} numberOfLines={1}>{card.alias}</Text>

      <Text style={styles.textLabel}>Número de tarjeta</Text>
      <View style={styles.ccRow}>
      <Image source={require("../../../assets/img/ChipCC.png")} /> 
        <Text style={styles.cardNumbers}>{`XXXX XXXX XXXX ${card.cardNumber.substr(12)}`}</Text>
      </View>


      <Text style={styles.textLabel}>Fecha de expiracións</Text>
      <Text style={styles.userInfo}>{card.cardExpiration}</Text>

      <Image style={styles.image} source={card.cardNumber.substr(0,1) == 4 ? require("../../../assets/img/visa.png") : require("../../../assets/img/masterCard.png")} />
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
  userName: {
    fontSize: 25,
    marginTop: 10,
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
    marginTop: 30,
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