import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function Goback(props) {
    const { title } = props
  const navigation = useNavigation()

  return (
      <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.container}>
      <Icon name='chevron-left' type='material-community' size={30} style={styles.icon}/>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
    
</View>
  )
}

const styles = StyleSheet.create({
    header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    },
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
})
