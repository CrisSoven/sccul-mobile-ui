import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'
import Line from '../common/Line'

export default function CartResume({ price , discount }) {
  return (
    <>
      <Text style={styles.title}>Resumen</Text>
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Coste total de cursos</Text>
        <Text style={styles.rowValue}>{`$${price} MX`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.rowTitle && styles.discount]}>Descuento total</Text>
        <Text style={[styles.rowValue && styles.discount]}>{`- $${discount} MX`}</Text>
      </View>
      <Line />
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.PalleteBlack,
    marginBottom: 10,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  rowTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.PalleteBlack,
  },
  rowValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.PalleteBlack,
  },
  discount: {
    color: Colors.PalletteRed,
    fontSize: 18,
    fontWeight: 'bold',
    },
})
