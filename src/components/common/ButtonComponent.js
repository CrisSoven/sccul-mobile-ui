import Colors from "../../utils/Colors";
import { Icon } from "react-native-elements";
import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ButtonComponent(props) {
  const { title, icon, onPress, style } = props;
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {icon && <Icon name={icon} size={24} color="white" style={styles.icon} />}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: Colors.PalleteBluePrimary,
    marginHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    height: 50,
  },
  title: {
    color: Colors.PalleteWhite,
    fontWeight: "bold",
  },
  icon: {
    marginRight: 5,
  },
});
