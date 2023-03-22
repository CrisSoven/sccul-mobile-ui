import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../../utils/Colors";

export default function SelectComponent() {

  return (
    <View style={styles.container}>
      <Icon size={15} name="arrow-back-ios" type="material" color={Colors.PalletteRed} />
      <Text style={styles.textP}>Desliza para eliminar un curso</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
    marginVertical: 20,
    justifyContent: "flex-end",
  },
  textP: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.PalletteRed,
  },
});
