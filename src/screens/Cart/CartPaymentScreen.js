import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Goback from '../../components/Goback'
import { ScrollView } from 'react-native-gesture-handler'
import PriceTotalCartComponnet from '../../components/cart/PriceTotalCartComponnet'
import CardsComponent from '../../components/cart/CardsComponent'

export default function CartPaymentScreen(props) {
  return (

    <ScrollView contentContainerStyle={styles.header}>
    <View>
        <Goback title='Confirmar compra' />
        <PriceTotalCartComponnet
        priceText={'$'  + 599.75 + 'mx'  }
        />
        <CardsComponent/>
    </View>
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
    price: {
        backgroundColor:'white'
    },

})
