import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AccionsBtnComponent from "../../components/cart/AccionsBtnComponent";
import { Formik } from "formik";
import InputComponent from "../../components/common/InputComponent";
import { useFormik } from "formik";
import * as Yup from "yup";
import { forgotPassword } from "../../utils/Axios";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export default function ResetPasswordScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Correo electrónico obligatorio")
        .email("Correo electrónico no valido"),
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      const { email } = formData;
      setIsLoading(true);
      try {
        const response = await forgotPassword(email);
        setIsLoading(false);
        if (response.success) {
          Toast.show({
            type: "success",
            position: "bottom",
            text1: "Correo enviado correctamente",
          });
        } else {
          Toast.show({
            position: "bottom",
            type: "error",
            text1: response.message,
          });
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        Toast.show({
          position: "bottom",
          type: "error",
          text1: "Ha ocurrido un error",
        });
      }
    },
  });

  return (
    <View style={styles.header}>
      {/* <Text style={{ marginTop: 10 }}>
        Ingresa tu correo electrónico para poder enviar el link para realizar tu
        cambio de contraseña
      </Text> */}
      <InputComponent
        label="Correo electrónico"
        placeholder="correo@ejemplo.com"
        iconName="email-outline"
        iconType="material-community"
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <AccionsBtnComponent
        btnCancelTitle="Cancelar"
        icon="login"
        type="material-community"
        btnContinueTitle="Confirmar"
        btnPrimary={true}
        buttonStyle={{ paddingHorizontal: "10%" }}
        loading={isLoading}
        onPress={formik.handleSubmit}
        isLoading={isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
