import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'

export default function CartPaymentMethodTitle(props) {
  const titlePayment = 'Metodos de Pago'
  const navigation = useNavigation()

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.container}>
        <Icon name='chevron-left' type='material-community' size={30} style={styles.icon}/>
        <Text style={styles.title}>{titlePayment}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
})
