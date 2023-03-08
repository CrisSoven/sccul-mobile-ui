import Colors from "../../utils/Colors";
import { Icon } from "react-native-elements";
import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ButtonComponent(props) {
  const { title, icon, btnPrimary, onPress } = props;
  return (
    <TouchableOpacity style={[styles.button, btnPrimary === true ? styles.btnPrimaryColor : styles.btnCancelColor]} onPress={onPress}>
      {icon && <Icon name={icon} size={24} color="white" style={styles.icon} />}
      <Text style={btnPrimary === true ? styles.titlePrimary : styles.titleCancel}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    marginHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: "80%",
  },
  btnPrimaryColor: {
    backgroundColor: Colors.PalleteBluePrimary,
  },
  btnCancelColor: {
    backgroundColor: Colors.PalleteGray,
  },
  titlePrimary: {
    color: Colors.PalleteWhite,
    fontWeight: "bold",
  },
  titleCancel: {
    color: Colors.PalleteBlack,
    fontWeight: "bold",
  },
  icon: {
    marginRight: 5,
  },
});
