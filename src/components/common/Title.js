import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Title({ title, goBack }) {
  return <Text style={goBack ? styles.goBack : styles.title}>{title}</Text>
}

const styles = StyleSheet.create({
  goBack: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
  },
})