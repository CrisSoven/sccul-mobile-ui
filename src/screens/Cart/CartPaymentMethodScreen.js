import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartPaymentMethodTitle from '../../components/cart/CartPaymentMethodTitle'
import AddCardComponenet from '../../components/cart/AddCardComponenet'

export default function CartPaymentMethodScreen() {

  return (
    <View>
    <CartPaymentMethodTitle/>
    <AddCardComponenet/>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },

})