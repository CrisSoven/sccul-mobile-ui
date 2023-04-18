import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import Colors from '../../utils/Colors'

export default function EmptyContainer({ icon, type, text }) {
  return (
    <View style={styles.container}>
      <Icon size={100} name={icon} type={type} color={Colors.PalleteGray} />
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  },
  text: {
    fontSize: 16,
    color: Colors.PalleteGray,
  },
})