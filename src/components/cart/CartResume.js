import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'

export default function CartResume() {
  return (
    <View>
      <Text style={styles.title}>Resumen</Text>
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Coste total de cursos</Text>
        <Text style={styles.rowValue}>$620.42 MX</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.rowTitle && styles.discount]}>Descuento total</Text>
        <Text style={[styles.rowValue && styles.discount]}>- $121.20 MX</Text>
      </View>
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
