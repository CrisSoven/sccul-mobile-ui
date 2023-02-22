import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PriceTotalCartComponnet() {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>$1,450.50 MX</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 150,
        height: 40,
        borderRadius: 10,
        backgroundColor: 'rgb(217,239,234)',
      },
      price: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
      },
})