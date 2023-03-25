import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react"; // Importa useState
import Colors from "../../utils/Colors";
import { Icon } from "react-native-elements";
import Input from "../common/InputComponent";
import { useNavigation } from "@react-navigation/native";
import ModalComponent from "../common/ModalComponent";
import ChangePasswordScreen from "../../screens/profile/profileScreens/ChangePasswordScreen";
import ButtonComponent from "../common/ButtonComponent";

export default function PersonalInfoFormComponent(props) {
  const { user, isEditable } = props;
  console.log(user);

  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const navigateTo = () => {
    setShowModal(true);
  };

  return (
    <View style={{ marginBottom: 20 }}>
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
          <Icon name="vpn-key" type="MaterialIcons" size={20} />
        </View>
        <Text style={styles.label}>Cambiar contraseña</Text>
      </TouchableOpacity>
      <ModalComponent isVisible={showModal} close={() => setShowModal(false)}>
        <View>
          <ChangePasswordScreen />
          <View style={styles.container}>
            <ButtonComponent
              title="Cancelar"
              onPress={() => setShowModal(false)}
            />
            <ButtonComponent
              title="Cambiar contraseña"
              btnPrimary={true}
              onPress={() => setShowModal(false)}
            />
          </View>
        </View>
      </ModalComponent>
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
  container: {
    flexDirection: "row",
    marginTop: 20,
  },
});
