import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from 'react'
import Goback from '../../../components/common/Goback'
import TitleBtnComponent from '../../../components/profile/TitleBtnComponent'
import CardsComponent from "../../../components/cart/CardsComponent"
import Line from '../../../components/common/Line'
import { getBankCards } from "../../../utils/Axios"

export default function PocketScreen() {
  const [cards, setCards] = useState([])
  useEffect(() => {
    const fetchBankCards = async () => {
      const fetchedCards = await getBankCards()
      setCards(fetchedCards)
    }
    fetchBankCards();
  }, [])

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
      <CardsComponent cards={cards} />
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