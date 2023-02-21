import { StyleSheet, Text, View } from 'react-native'
import Fonts from "../utils/Fonts";

import React from 'react'

export default function CartScreen() {
  const cartTitle = 'Carrito de compras'
  return (
    <View>
      <Text>CartScreen</Text>
      <View style={styles.header}>
        <View style={styles.column}>
          <Text style={styles.title}>{cartTitle}</Text>
        </View>
      </View>
      <View>
          <Text>Aqui va el bucador</Text>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
title: {
  fontSize: 24,
  fontFamily:Fonts['Cabin-Bold'],
  fontWeight:'bold', 
},
header: {
  paddingTop: 20,
  paddingHorizontal: 20,
  flex: 1,
  flexDirection: "row",
},
column: {
  flex: 1,
  width: '50%',
},
});