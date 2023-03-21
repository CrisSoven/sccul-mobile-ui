import { StyleSheet, Text, View } from "react-native";
import React from "react";
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
  return (
    <View>
      <Goback title="Cambiar contraseña" />
      <Text style={styles.text}>La nueva contraseña debe ser diferente a la actual</Text>
      <ChangePasswordComponent />
      <View style={styles.container}>
        <ButtonComponent
          title="Cancelar"
          onPress={navigateTo}
        />
        <ButtonComponent
          title="Cambiar contraseña"
          btnPrimary={true}
          onPress={navigateTo}
        />
      </View>
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
