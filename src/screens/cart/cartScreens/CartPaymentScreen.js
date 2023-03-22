import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Goback from "../../../components/common/Goback";
import Line from "../../../components/common/Line";
import CartResume from "../../../components/cart/CartResume";
import DetailsPayment from "../../../components/cart/DetailsPayment";
import AccionsBtnComponent from "../../../components/cart/AccionsBtnComponent";
import CardsComponent from "../../../components/cart/CardsComponent";
import ResumePrice from "../../../components/cart/ResumePrice";
import { useNavigation } from "@react-navigation/native";
import { getBankCardById, getInscriptions } from "../../../utils/Axios";
import Splash from "../../sccul/SplashScreen";

export default function CartPaymentScreen(props) {
  const { cardId } = props.route.params;
  const [card, setCard] = useState({});
  const [inscription, setInscription] = useState({});

  useEffect(() => {
    const fetchCard = async () => {
      const fetchedCard = await getBankCardById(cardId);
      setCard(fetchedCard);
    };
    fetchCard();
  }, []);

  useEffect(() => {
    const fetchInscription = async () => {
      const fetchedInscription = await getInscriptions();
      setInscription(fetchedInscription);
    };
    fetchInscription();
  }, []);

  console.log(inscription);

  if (!cardId) {
    return <Splash />;
  }

  const navigation = useNavigation();
  const [isPurchaseSuccessful, setIsPurchaseSuccessful] = useState(false);
  const handleAction = () => {
    if (isPurchaseSuccessful) {
      navigation.navigate("Successful");
    } else {
      navigation.navigate("Fail");
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Goback title="Confirmar compra" />
        <ResumePrice
          totalInscriptions={inscription.length} 
         />
        {/* <CardsComponent card={card}/> */}
        <Line />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.scrollContent}>
          {/* <CartResume /> */}
          <Line />
          {/* <DetailsPayment /> */}
          <AccionsBtnComponent
            btnCancelTitle="Cancelar"
            btnContinueTitle="Finalizar Compra"
            action={handleAction}
            btnPrimary={true}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    elevation: 4,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
});
