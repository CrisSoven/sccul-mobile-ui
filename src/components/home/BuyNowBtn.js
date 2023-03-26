import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";

export default function BuyNowBtn() {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}> Comprar Ahora </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PalleteBluePrimary,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: Colors.PalleteWhite,
    fontWeight: "bold",
  },
});
