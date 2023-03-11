import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import GoBack from "../../../components/common/Goback";
import CardsComponent from "../../../components/cart/CardsComponent";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import TitleBtnComponent from "../../../components/profile/TitleBtnComponent";

export default function CartPaymentMethodScreen(props) {
  const navigation = useNavigation();
  const navigateToAdd = () => {
    navigation.navigate("AddCard");
  };
  const navigateToCard = () => {
    navigation.navigate("CartPayment");
  };
  return (
    <ScrollView>
      <View style={styles.header}>
        <GoBack title="Metodos de Pago" />
        <TitleBtnComponent
          textTitle="Mis tarjetas"
          titleStyle={styles.title}
          icon="add"
          textBtn="Agregar"
          iconType="material-community"
          btnPrimary={true}
          onPress={navigateToAdd}
        />
      </View>
      <View style={styles.content}>
        <CardsComponent
        onPress={navigateToCard}/>
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
