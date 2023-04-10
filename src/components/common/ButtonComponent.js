import Colors from "../../utils/Colors";
import { Icon, Button } from "react-native-elements";
import React from "react";
import { StyleSheet } from "react-native";

export default function ButtonComponent(props) {
  const { title, icon, type, btnPrimary, onPress, loading } = props;
  return (
      <Button
        title={title}
        loading={loading}
        onPress={onPress}
        titleStyle={btnPrimary ? styles.titlePrimary : styles.titleCancel}
        icon={icon && <Icon name={icon} type={type} size={24} color="white" style={{ marginRight: "8%" }} />}
        buttonStyle={[styles.button, btnPrimary ? styles.btnPrimaryColor: styles.btnCancelColor]}
      />
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    height: 45,
    paddingHorizontal: 20,
    marginHorizontal: 5,
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
});
