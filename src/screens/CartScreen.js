import { StyleSheet, Text, View } from 'react-native'
// import Fonts from "../utils/Fonts";

import React from 'react'
import SearchBar from '../components/SearchBar'
import SelectComponent from '../components/cart/SelectComponent';
import BottonsCartComponent from '../components/cart/BottonsCartComponent';
import PriceTotalCartComponnet from '../components/cart/PriceTotalCartComponnet';

export default function CartScreen() {
  const cartTitle = 'Carrito de compras'
  return (
    <View style={styles.header}>
      <View>
      <Text style={styles.title}>{cartTitle}</Text>
      </View>
      <SearchBar/>
      <SelectComponent/>
      <View style={styles.footer}>
      <PriceTotalCartComponnet/>
      <BottonsCartComponent/>
      </View>
    </View>

);
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
  footer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});