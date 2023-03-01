import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'

export default function Line() {
  return (
    <View>
         <View style={{ borderBottomColor: Colors.PalleteGray, borderBottomWidth: 1, marginTop:25,} } />
    </View>
  )
}

const styles = StyleSheet.create({})