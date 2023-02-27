import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GoBack from '../../components/Goback'
import AddCardComponenet from '../../components/cart/AddCardBtnComponent'
import CardsComponent from '../../components/cart/CardsComponent'

export default function CartPaymentMethodScreen(props) {
  const { navigation } = props;

  return (
    <View style={styles.header}>
      <GoBack title="Metodos de Pago"/>
      <AddCardComponenet/>
      <CardsComponent/>
      
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  
})
