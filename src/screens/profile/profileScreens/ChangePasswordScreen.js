import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Colors from "../../../utils/Colors";
import ChangePasswordComponent from "../../../components/profile/ChangePasswordComponent";
import { useNavigation } from "@react-navigation/native";

export default function ChangePasswordScreen() {
  const navigation = useNavigation();
  const navigateTo = () => {
    navigation.navigate("Profiles");
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <Text style={styles.title}>Cambiar contraseña</Text>
      <ChangePasswordComponent />
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
