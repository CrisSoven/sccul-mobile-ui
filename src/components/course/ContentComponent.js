import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'

export default function ContentComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contenido del curso</Text>
        <Text style={styles.subTitle}>5 secciones · 1h 24 min</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginHorizontal:15,
        marginTop:10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold', 
    },
    subTitle: {
        fontSize: 16,
        color: Colors.PalleteBluePrimary,
        marginTop: 5
    }

})