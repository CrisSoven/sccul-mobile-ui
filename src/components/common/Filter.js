import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import Colors from "../../utils/Colors";

export default function Filter({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.filtroButton}
      onPress={() => onPress()}
    >
      <Icon name="filter" type="font-awesome" color="#fff" size={20} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  filtroButton: {
    backgroundColor: Colors.PalleteAuxiliarBlue,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 13,
    flexDirection: "row",
    alignItems: "center",
  },
});
