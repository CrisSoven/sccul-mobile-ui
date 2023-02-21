import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import Banner from '../components/Banner'
import ScrollViewCategories from '../components/ScrollViewCategories'

export default function HomeScreen() {
  return (
    <View>
      <SearchBar/>
      <Banner/>
      <ScrollViewCategories/>
    </View>
  )
}

const styles = StyleSheet.create({})