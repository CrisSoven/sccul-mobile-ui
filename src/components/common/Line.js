import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";

export default function Line() {
  return <View style={styles.lineStyle} />;
}

const styles = StyleSheet.create({
  lineStyle: {
    borderBottomColor: Colors.PalleteGray,
    borderBottomWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
