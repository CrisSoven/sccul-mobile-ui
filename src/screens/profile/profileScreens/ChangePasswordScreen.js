import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Goback from "../../../components/common/Goback";
import Colors from "../../../utils/Colors";
import ChangePasswordComponent from "../../../components/profile/ChangePasswordComponent";
import ButtonComponent from "../../../components/common/ButtonComponent";
import { useNavigation } from "@react-navigation/native";

export default function ChangePasswordScreen() {
  const navigation = useNavigation();
  const navigateTo = () => {
    navigation.navigate("Profiles");
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <Text style={styles.text}>
        La nueva contraseña debe ser diferente a la actual
      </Text>
      <ChangePasswordComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
  },
  text: {
    marginTop: "15%",
    marginLeft: 20,
    fontSize: 16,
    color: Colors.PalleteBlack,
  },
});
