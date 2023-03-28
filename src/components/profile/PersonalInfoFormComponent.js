import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Colors from "../../utils/Colors";
import { Icon } from "react-native-elements";
import Input from "../common/InputComponent";
import { useNavigation } from "@react-navigation/native";
import ModalComponent from "../common/ModalComponent";
import ChangePasswordScreen from "../../screens/profile/profileScreens/ChangePasswordScreen";
import TitleBtnComponent from "../../components/profile/TitleBtnComponent";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function PersonalInfoFormComponent(props) {
  const { user } = props;
  const [showModal, setShowModal] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      surname: "",
      phoneNumber: "",
      email: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Nombre requerido"),
      lastname: Yup.string().required("Apellido paterno requerido"),
      surname: Yup.string().required("Apellido materno requerido"),
      phoneNumber: Yup.string()
        .required("Teléfono requerido")
        .min(10, "El teléfoto debe contener 10 digitos")
        .max(10, "El teléfoto debe contener 10 digitos"),
      email: Yup.string()
        .required("Correo electrónico requerido")
        .email("Correo electrónico inválido"),
    }),
    validateOnChange: false,

    onSubmit: async (formData) => {
      console.log(formData);
      disabled ? Toast.show({
        type: "info",
        position: "bottom",
        text1: "Ahora puedes actualizar tu información",
        visibilityTime: 1500,
        bottomOffset: 80,
      })
        : Toast.show({
          type: "info",
          position: "bottom",
          text1: "Tu información ha sido actualizada",
          visibilityTime: 1500,
          bottomOffset: 80,
        });

    },
  });

  const navigation = useNavigation();
  const navigateTo = () => setShowModal(true);

  return (
    <>
      <View style={styles.container}>
        <TitleBtnComponent
          textTitle="Información personal"
          titleStyle={styles.subtitle}
          icon={disabled ? "pencil" : "check"}
          textBtn={disabled ? "Editar" : "Guardar"}
          iconType="material-community"
          btnPrimary={true}
          onPress={disabled ? () => setDisabled(!disabled) : formik.handleSubmit}
        />
        <Input
          label="Nombre(s)"
          value={user.name}
          iconName="person-outline"
          iconType="MaterialIcons"
          onChangeText={(text) => formik.setFieldValue("name", text)}
          errorMessage={formik.errors.name}
          disabled={disabled}
        />
        <View style={styles.row}>
          <View style={styles.column}>
            <Input
              label="Apellido paterno"
              value={user.lastname}
              iconName="person-outline"
              iconType="MaterialIcons"
              onChangeText={(text) => formik.setFieldValue("lastname", text)}
              errorMessage={formik.errors.lastname}
              disabled={disabled}
            />
          </View>
          <View style={styles.column}>
            <Input
              label="Apellido materno"
              value={user.surname}
              iconName="person-outline"
              iconType="MaterialIcons"
              onChangeText={(text) => formik.setFieldValue("surname", text)}
              errorMessage={formik.errors.surname}
              disabled={disabled}
            />
          </View>
        </View>
        <Input
          label="Teléfono"
          value={user.phoneNumber}
          iconName="phone-android"
          iconType="MaterialIcons"
          onChangeText={(text) => formik.setFieldValue("phoneNumber", text)}
          errorMessage={formik.errors.phoneNumber}
          disabled={disabled}
          keyboardType="phone-pad"
        />
        <Input
          label="Correo electrónico"
          value={user.email}
          iconName="mail-outline"
          iconType="MaterialIcons"
          onChangeText={(text) => formik.setFieldValue("email", text)}
          errorMessage={formik.errors.email}
          disabled={disabled}
          keyboardType="email-address"
        />
      </View>
      <TouchableOpacity style={[styles.row, { marginBottom: 20 }]} onPress={navigateTo}>
        <View style={styles.circleKey}>
          <Icon name="vpn-key" type="MaterialIcons" size={20} />
        </View>
        <Text style={styles.label}>Cambiar contraseña</Text>
      </TouchableOpacity>
      <ModalComponent isVisible={showModal} close={() => setShowModal(false)}>
        <View>
          <ChangePasswordScreen />
        </View>
      </ModalComponent>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.PalleteGray,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
    width: "49%",
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
