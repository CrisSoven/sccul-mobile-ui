import { StyleSheet, View, ScrollView, Text } from "react-native";
import React, { useState, useEffect } from "react";
import Goback from "../../../components/common/Goback";
import Line from "../../../components/common/Line";
import CartResume from "../../../components/cart/CartResume";
import DetailsPayment from "../../../components/cart/DetailsPayment";
import AccionsBtnComponent from "../../../components/cart/AccionsBtnComponent";
import CardsComponent from "../../../components/cart/CardsComponent";
import ResumePrice from "../../../components/cart/ResumePrice";
import { useNavigation } from "@react-navigation/native";
import { getBankCardById } from "../../../utils/Axios";
import Splash from "../../sccul/SplashScreen";
import Courses from "../../../components/common/Courses";
import Colors from "../../../utils/Colors";

export default function CartPaymentScreen(props) {
  const { cardId, courses } = props.route.params;

  const [card, setCard] = useState({});

  useEffect(() => {
    const fetchCard = async () => {
      const fetchedCard = await getBankCardById(cardId);
      setCard(fetchedCard);
    };
    fetchCard();
  }, []);

  const total = courses.reduce((acc, curso) => {
    return acc + curso.price;
  }, 0);

  const finalTotal = total.toFixed(3);

  const navigation = useNavigation();
  const [isPurchaseSuccessful, setIsPurchaseSuccessful] = useState(false);
  const handleAction = () => {
    if (!isPurchaseSuccessful) {
      navigation.navigate("Successful");
    } else {
      navigation.navigate("Fail");
    }
  };

  return (
    <>
      {
        !card.id || !courses ? (
          <Splash />
        ) : (
          <View style={styles.container}>
            <View style={styles.header}>
              <Goback title="Confirmar compra" />
              <ResumePrice
                price={finalTotal}
                totalInscriptions={courses.length}
              />
              <CardsComponent
                card={card}
              />
              <Line />
            </View>
            <ScrollView style={styles.scrollContainer}>
              <View style={styles.scrollContent}>
                <CartResume
                  price={finalTotal}
                />
                <Line />
                <Text style={styles.title}>Detalles de compra</Text>
                <Courses
                  courses={courses}
                />
              </View>
            </ScrollView>
            <AccionsBtnComponent
              btnCancelTitle="Cancelar"
              btnContinueTitle="Finalizar compra"
              action={handleAction}
              btnPrimary={true}
            />
          </View>
        )
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
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
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.PalleteBlack,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
  },
});
