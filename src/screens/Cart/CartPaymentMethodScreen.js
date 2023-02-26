import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GoBack from '../../components/Goback'
import AddCardComponenet from '../../components/cart/AddCardComponenet'

export default function CartPaymentMethodScreen() {

  return (
    <View>
      <GoBack title="Metodos de Pago"/>
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
