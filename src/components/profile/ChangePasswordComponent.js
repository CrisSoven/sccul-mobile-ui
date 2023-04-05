import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Input from "../common/InputComponent";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonComponent from "../common/ButtonComponent";
import { changePassword, getUser, verifyPassword } from "../../utils/Axios";

import { Toast } from "react-native-toast-message/lib/src/Toast";

export default function ChangePasswordComponent({ onClose }) {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const showPass = () => setPassword(!password);
  const showNewPass = () => setNewPassword(!newPassword);
  const showConfirmPass = () => setConfirmPassword(!confirmPassword);

  const formik = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      password: Yup.string().required("Contraseña actual requerida"),
      newPassword: Yup.string().required("Nueva contraseña requerida"),
      confirmPassword: Yup.string()
        .required("Confirmar contraseña requerida")
        .oneOf([Yup.ref("newPassword")], "Las contraseñas no coinciden"),
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      setIsLoading(true);
      const { password, newPassword } = formData;
      try {
        const isPasswordValid = await verifyPassword(
          password,
          newPassword,
          confirmPassword
        );

        if (!isPasswordValid) {
          Toast.show({
            type: "error",
            position: "bottom",
            text1: "La contraseña actual es incorrecta",
            visibilityTime: 1500,
            bottomOffset: 80,
          });
          return;
        }
        await changePassword(password, newPassword);
        console.log(password);
        console.log(newPassword);
        Toast.show({
          type: "info",
          position: "bottom",
          text1: "Tu contraseña ha sido actualizada",
          visibilityTime: 1500,
          bottomOffset: 80,
        });
        onClose();
      } catch (error) {
        console.log(error);
        Toast.show({
          type: "error",
          position: "bottom",
          text1: error.message || "Ha ocurrido un error, inténtalo de nuevo",
          visibilityTime: 1500,
          bottomOffset: 80,
        });
        if (
          error.message === "Ha ocurrido un error al actualizar la contraseña"
        ) {
          Toast.show({
            type: "warning",
            position: "bottom",
            text1: "La contraseña actual no coincide",
            visibilityTime: 1500,
            bottomOffset: 80,
          });
        }
      }
      setIsLoading(false);
    },
  });

  return (
    <>
      <View style={styles.form}>
        <Input
          label="Contraseña actual"
          placeholder="•••••••"
          secureTextEntry={password ? false : true}
          iconName={password ? "eye-off-outline" : "eye-outline"}
          iconType="material-community"
          onPressIcon={showPass}
          onChangeText={(text) => formik.setFieldValue("password", text)}
          errorMessage={formik.errors.password}
        />
        <Input
          label="Nueva contraseña"
          placeholder="•••••••"
          secureTextEntry={newPassword ? false : true}
          iconName={newPassword ? "eye-off-outline" : "eye-outline"}
          iconType="material-community"
          onPressIcon={showNewPass}
          onChangeText={(text) => formik.setFieldValue("newPassword", text)}
          errorMessage={formik.errors.newPassword}
        />
        <Input
          label="Confirmar contraseña"
          placeholder="•••••••"
          secureTextEntry={confirmPassword ? false : true}
          iconName={confirmPassword ? "eye-off-outline" : "eye-outline"}
          iconType="material-community"
          onPressIcon={showConfirmPass}
          onChangeText={(text) => formik.setFieldValue("confirmPassword", text)}
          errorMessage={formik.errors.confirmPassword}
        />
      </View>
      <ButtonComponent
        icon="lock-reset"
        type="material-community"
        title="Cambiar contraseña"
        loading={isLoading}
        btnPrimary={true}
        onPress={formik.handleSubmit}
      />
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    marginVertical: 15,
  },
});
