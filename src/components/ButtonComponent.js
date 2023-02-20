import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import Colors from "../utils/Colors";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ButtonComponent(props) {
  const { icon, title } = props;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        console.log("Pressed");
      }}
    >
      <View style={styles.row}>
        <Icons name={icon} size={24} color={Colors.PalleteWhite} />
        <Text style={styles.label}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: Colors.PalleteBlack,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: Colors.PalleteWhite,
    marginLeft: 12,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
