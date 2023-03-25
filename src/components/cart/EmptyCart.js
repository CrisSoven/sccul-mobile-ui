import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import Colors from '../../utils/Colors'

export default function EmptyCart() {
  return (
    <View style={styles.container}>
        <Icon size={100} name="cart-minus" type="material-community" color={Colors.PalleteGray} />
        <Text style={styles.text}>Tu carrito está vacío</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 16,
        color: Colors.PalleteGray,
    },
})