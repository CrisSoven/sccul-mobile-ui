import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GoBack from '../../../components/common/Goback'
import AddCardComponenet from '../../../components/cart/AddCardBtnComponent'
import CardsComponent from '../../../components/cart/CardsComponent'
import { ScrollView } from 'react-native-gesture-handler'

export default function CartPaymentMethodScreen(props) {
  const { navigation } = props;

  return (
    <ScrollView contentContainerStyle={styles.header}>

      <GoBack title="Metodos de Pago"/>
      <AddCardComponenet/>
      <CardsComponent/>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingHorizontal: 1,
    paddingVertical:5,
    width:360,
    height:660
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
