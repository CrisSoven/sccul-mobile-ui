import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../../components/common/SearchBar";
import SelectComponent from "../../components/cart/SelectComponent";
import Colors from "../../utils/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import TitleBtnComponent from "../../components/profile/TitleBtnComponent";
import { useNavigation } from "@react-navigation/native";

export default function CartScreen() {
  const navigation = useNavigation();
  const navigateTo = () => {
    navigation.navigate("PaymentMethod");
  };
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Carrito de compras</Text>
        <SearchBar />
        <SelectComponent />
      </View>
        
      <TitleBtnComponent
        style={styles.footer}
        textTitle="$1,246.50 MX"
        titleStyle={styles.subtitle}
        textBtn="Pagar"
        onPress={navigateTo}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
  },
  footer: {
    position: "absolute",
    bottom: 0,
  },

  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.PalleteGray,
  },
});
