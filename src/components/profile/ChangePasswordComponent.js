import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Input from "../common/InputComponent";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonComponent from "../common/ButtonComponent";
import { useNavigation } from "@react-navigation/native";
import { changePassword, deleteToken, getUser } from "../../utils/Axios";

import { Toast } from "react-native-toast-message/lib/src/Toast";

export default function ChangePasswordComponent(props) {
  const [password, setPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();
  const { close } = props;

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
    onSubmit: async (formData) => {
      setIsLoading(true);
      const { password, newPassword } = formData;
      try {
        const user = await getUser();
        console.log("User:", user);
        await changePassword(user.id, password, newPassword, user.token);
        await deleteToken();
        Toast.show({
          type: "info",
          position: "bottom",
          text1: "Tu contraseña ha sido actualizada",
          visibilityTime: 1500,
          bottomOffset: 80,
        });
        // close()
      } catch (error) {
        console.log(error);
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Ha ocurrido un error, inténtalo de nuevo",
          visibilityTime: 1500,
          bottomOffset: 80,
        });
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
