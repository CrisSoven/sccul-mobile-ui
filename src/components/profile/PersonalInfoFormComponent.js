import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";
import { Icon } from "react-native-elements";
import Input from "../common/InputComponent";
import { useNavigation } from "@react-navigation/native";
import ModalComponent from "../common/ModalComponent";

export default function PersonalInfoFormComponent(props) {
  const { user, isEditable } = props;
  console.log(user);

  const navigation = useNavigation();
  const navigateTo = () => {
    navigation.navigate("ChangePass");
  };

  return (
    <View style={{marginBottom: 20}}>
      <Input
        label="Nombre(s)"
        value={user.name}
        iconName="person-outline"
        iconType="MaterialIcons"
        iconSize={25}
        editable={isEditable}
      />
      <View style={styles.row}>
        <View style={styles.column}>
          <Input
            label="Apellido paterno"
            value={user.lastname}
            iconName="person-outline"
            iconType="MaterialIcons"
            iconSize={25}
            editable={isEditable}
          />
        </View>
        <View style={styles.column}>
          <Input
            label="Apellido materno"
            value={user.surname}
            iconName="person-outline"
            iconType="MaterialIcons"
            iconSize={25}
            editable={isEditable}
          />
        </View>
      </View>
      <Input
        label="Teléfono"
        value={user.phoneNumber}
        iconName="phone-android"
        iconType="MaterialIcons"
        iconSize={20}
        editable={isEditable}
      />
      <Input
        label="Correo electrónico"
        value={user.email}
        iconName="mail-outline"
        iconType="MaterialIcons"
        iconSize={25}
        editable={isEditable}
      />
      <TouchableOpacity style={styles.row} onPress={navigateTo}>
        <View style={styles.circleKey}>
          <Icon
            name="vpn-key"
            type="MaterialIcons"
            size={20}
          />
        </View>
        <Text style={styles.label}>Cambiar contraseña</Text>
      </TouchableOpacity>
      {/* <ModalComponent isVisible={true} close={() => {}}>
        <Text>hola</Text>
      </ModalComponent> */}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
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
    justifyContent: "center",
    marginLeft: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 10,
  },
});
