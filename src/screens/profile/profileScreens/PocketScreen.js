import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from 'react'
import Goback from '../../../components/common/Goback'
import TitleBtnComponent from '../../../components/profile/TitleBtnComponent'
import CardsComponent from "../../../components/cart/CardsComponent"
import Line from '../../../components/common/Line'
import { useNavigation } from '@react-navigation/native'

export default function PocketScreen() {
  const navigation = useNavigation();
  const navigateTo = () => {
    navigation.navigate('CreditCards')
  }
    return (
      <ScrollView>
        <Goback title={"Mi cartera"} />
        <TitleBtnComponent
          textTitle="Mis tarjetas"
          titleStyle={styles.title}
          icon="add"
          textBtn="Agregar tarjeta"
          iconType="material-community"
          btnPrimary={true}
        />
        <CardsComponent onPress={navigateTo}/>
        <CardsComponent onPress={navigateTo}/>
        <CardsComponent onPress={navigateTo}/>
        <Line />
        <View style={styles.subcontainer}>
          <Text style={styles.title}>Movimientos recientes</Text>
        </View>
      </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: "bold",
    },
    subcontainer: {
      marginLeft: 20,
      marginVertical: 20,
    },
  })