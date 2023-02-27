import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";

export default function ProfileScreen() {
  return (
    <View style={styles.header}>
      <View style={styles.column}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.column}>
        <ButtonComponent
        icon="logout" title="Log out"  type='material-community'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: "row",
  },
  column: {
    flex: 1,
    width: '50%',
  },
});
