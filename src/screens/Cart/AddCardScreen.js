import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Goback from '../../components/Goback'
import AddCardFormComponent from '../../components/cart/AddCardFormComponent'

export default function AddCardScreen() {
  return (
    <View style={styles.header}>
     <Goback  title='Agregar tarjeta'/>
     <Image style={styles.image} source={require("../../../assets/img/Visa_Logo.png")} />
     <AddCardFormComponent/>

    </View>
  )
}

const styles = StyleSheet.create({
header:{
    paddingTop: 20,
    paddingHorizontal: 20,
},
image:{
width:175,
height:50,
marginTop:30,
},
})