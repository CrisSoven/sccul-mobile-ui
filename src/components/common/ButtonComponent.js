import Colors from "../../utils/Colors";
import { Icon } from "react-native-elements";
import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ButtonComponent(props) {
  const { title, icon, onPress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
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
  },
  title: {
    color: Colors.PalleteWhite,
    fontWeight: "bold",
  },
  icon: {
    marginRight: 5,
  },
});
