import Colors from "../../utils/Colors";
import { Icon, Button } from "react-native-elements";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function ButtonComponent(props) {
  const { title, icon, type, btnPrimary, onPress, loading, buttonStyle } = props;
  return (
    <View style={styles.container}>
      <Button
        title={title}
        loading={loading}
        onPress={onPress}
        titleStyle={btnPrimary ? styles.titlePrimary : styles.titleCancel}
        icon={icon && <Icon name={icon} type={type} size={24} color="white" style={{ marginRight: "8%" }} />}
        buttonStyle={btnPrimary ? [styles.button, styles.btnPrimaryColor, buttonStyle] : [styles.button, styles.btnCancelColor, buttonStyle]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
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
