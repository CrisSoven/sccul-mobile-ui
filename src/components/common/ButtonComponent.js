import Colors from "../../utils/Colors";
import { Icon } from "react-native-elements";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";

export default function ButtonComponent(props) {
  const { title, icon, btnPrimary, onPress, loading } = props;
  return (
    <Button
      title={title}
      loading={loading}
      onPress={onPress}
      titleStyle={btnPrimary ? styles.titlePrimary : styles.titleCancel}
      icon={icon && <Icon name={icon} size={24} color="white" style={styles.icon} />}
      buttonStyle={[styles.button, btnPrimary ? styles.btnPrimaryColor : styles.btnCancelColor]}
    />
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
