import { StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from 'react'
import Goback from '../../../components/common/Goback'
import CreditCard from '../../../components/profile/CreditCard'
import Line from '../../../components/common/Line'
import TitleBtnComponent from '../../../components/profile/TitleBtnComponent'
import Colors from "../../../utils/Colors";
import AddCardFormComponent from "../../../components/cart/AddCardFormComponent"
import { getBankCardById } from "../../../utils/Axios";
import Splash from "../../../screens/sccul/SplashScreen";

export default function CreditCardDetailsScreen({ route }) {
  const [card, setCard] = useState([])
  const { cardId } = route.params;
  useEffect(() => {
    const fetchBankCard = async () => {
      const fetchedCard = await getBankCardById(cardId)
      setCard(fetchedCard)
    }
    fetchBankCard();
  }, [])

  if (!card.id) {
    return <Splash/>
  };
  return (
    <ScrollView>
      <Goback title={"Mi cartera"} />
      <CreditCard card={card}/>
      <Line />
      <TitleBtnComponent
        textTitle={"Datos de la tarjeta"}
        titleStyle={styles.subtitle}
        icon={"pencil"}
        iconType={"material-community"}
        textBtn={"Editar"}
        btnPrimary={true}
      />
      <AddCardFormComponent card={card} isEditable={false}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.PalleteGray,
  },
})