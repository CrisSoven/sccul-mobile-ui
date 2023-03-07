import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'
import ListCourses from '../common/ListCourses';

export default function DetailsPayment() {
  const cursos = [
    {
      image: require("../../../assets/img/dev.jpg"),
      title: "Programación",
      price: "$50",
      average: 4.4,
      comments: 20,
    },
    {
      image: require("../../../assets/img/diseño.jpg"),
      title: "Diseño Gráfico",
      price: "$70",
      average: 5.0,
      comments: 10,
    },
    {
      image: require("../../../assets/img/marketimg.jpg"),
      title: "Marketing Digital",
      price: "$60",
      average: 4.5,
      comments: 15,
    },
  ];
  return (
    <View>
      <Text style={styles.title}>Detalles de compra</Text>
      <ListCourses 
      cursos={cursos}/>
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

})