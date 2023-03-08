import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";
import { Icon } from "react-native-elements";
import Input from "../common/InputComponent";
import { useNavigation } from "@react-navigation/native";

export default function PersonalInfoFormComponent() {
  const navigation = useNavigation();
  const navigateTo = () => {
    navigation.navigate("ChangePass");
  };

  return (
    <View style={styles.form}>
      <Input
        label="Nombre(s)"
        value="Cristopher"
        iconName="person-outline"
        iconType="MaterialIcons"
        iconSize={25}
        editable={false}
      />
      <View style={styles.row}>
        <View style={styles.column}>
          <Input
            label="Apellido paterno"
            value="Soto"
            iconName="person-outline"
            iconType="MaterialIcons"
            iconSize={25}
            editable={false}
          />
        </View>
        <View style={styles.column}>
          <Input
            label="Apellido materno"
            value="Ventura"
            iconName="person-outline"
            iconType="MaterialIcons"
            iconSize={25}
            editable={false}
          />
        </View>
      </View>
      <Input
        label="Teléfono"
        value="7775550627"
        iconName="phone-android"
        iconType="MaterialIcons"
        iconSize={20}
        editable={false}
      />
      <Input
        label="Correo electrónico"
        value="cristopher.sotoventura@gmail.com"
        iconName="mail-outline"
        iconType="MaterialIcons"
        iconSize={25}
        editable={false}
      />
      <TouchableOpacity style={styles.row} onPress={navigateTo}>
        <View style={styles.circleKey}>
          <Icon
            style={styles.icon}
            name="vpn-key"
            type="MaterialIcons"
            size={20}
            editable={false}

          />
        </View>
        <Text style={styles.label}>Cambiar contraseña</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    paddingRight: 10,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
    width: "50%",
  },
  circleKey: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.PalleteGreenBackground,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: "700",
    marginTop: 20,
    marginLeft: 20,
  },
});
