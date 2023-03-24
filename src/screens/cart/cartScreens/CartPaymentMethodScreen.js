import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import GoBack from "../../../components/common/Goback";
import CardsComponent from "../../../components/cart/CardsComponent";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import TitleBtnComponent from "../../../components/profile/TitleBtnComponent";
import { getBankCards } from "../../../utils/Axios";
import Splash from "../../sccul/SplashScreen";

export default function CartPaymentMethodScreen(props) {
  const { filteredCourses } = props.route.params;

  const [cards, setCards] = useState([]);
  useEffect(() => {
    const fetchCards = async () => {
      const fetchedCards = await getBankCards();
      setCards(fetchedCards);
    };
    fetchCards();
  }, []);

  if (!cards.length > 0) {
    return <Splash />;
  }

  const navigation = useNavigation();

  const navigateToAddCard = () => {
    console.log("add card???");
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <GoBack title="Metodos de pago" />
        <TitleBtnComponent
          textTitle="Mis tarjetas"
          titleStyle={styles.title}
          textBtn="Agregar tarjeta"
          icon="add"
          btnPrimary={true}
          onPress={navigateToAddCard}
        />
      </View>
      <View style={styles.content}>
        <CardsComponent
          cards={cards}
          courses={filteredCourses}
          onPress={"CartPayment"} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
