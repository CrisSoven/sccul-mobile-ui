import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../utils/Colors";
import ChangePasswordComponent from "../../../components/profile/ChangePasswordComponent";

export default function ChangePasswordScreen({onClose}) {
  return (
    <View>
      <Text style={styles.title}>Cambiar contraseña</Text>
      <ChangePasswordComponent onClose={onClose}/>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.PalleteBlack,
  },
});
