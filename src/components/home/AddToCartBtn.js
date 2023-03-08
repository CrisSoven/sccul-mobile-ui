import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../utils/Colors";

export default function AddToCartBtn() {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Icons name="cart-plus" size={24} color={Colors.PalleteWhite} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PalleteBlueSecundary,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
