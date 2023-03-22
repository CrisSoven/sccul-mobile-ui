import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PriceTotalCartComponnet from './PriceTotalCartComponent'
import Colors from '../../utils/Colors'

export default function ResumePrice(props) {
  const { totalInscriptions } = props
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Total a pagar ({totalInscriptions})</Text>
    <PriceTotalCartComponnet
      priceText={'$'  + 599.75 + 'mx'  }
        containerStyle={styles.priceContainer}
        priceStyle={styles.price}
    />        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingVertical:5,
    
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.PalleteBlack, 
    },
    price:{
        fontSize: 50,
        fontWeight: 'bold',
        color: Colors.PalleteAuxiliarBlue,
    }
})