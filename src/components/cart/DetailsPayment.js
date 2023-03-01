import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'

export default function DetailsPayment() {
  return (
    <View>
      <Text style={styles.title}>Detalles de compra</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.PalleteBlack,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 10,
        },

})