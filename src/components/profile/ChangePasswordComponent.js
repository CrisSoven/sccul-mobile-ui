import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Input from "../common/InputComponent";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonComponent from "../common/ButtonComponent";

export default function ChangePasswordComponent() {
  const [password, setPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
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
      console.log(formData);
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
      // action={() => handleFormSubmit(handleSubmit)}
      />
    </>
  )
}

const styles = StyleSheet.create({
  form: {
    marginVertical: 15,
  },
})