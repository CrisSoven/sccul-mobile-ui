import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Input from "../common/InputComponent";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ChangePasswordComponent() {
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);


  const showPass = () => {
    setPassword(!password);
  };
  const showConfirmPass = () => {
    setConfirmPassword(!confirmPassword);
  };

  return (
    <View style={styles.form}>
      <Input
        label="Nueva contraseña"
        placeholder="•••••••"
        secureTextEntry={password ? false : true}
        iconName={password ? "eye-off-outline" : "eye-outline"}
        iconType="material-community"
        iconSize={25}
        onPressIcon={showPass}
      />
      <Input
        label="Confirmar contraseña"
        placeholder="•••••••"
        secureTextEntry={confirmPassword ? false : true}
        iconName={confirmPassword ? "eye-off-outline" : "eye-outline"}
        iconType="material-community"
        iconSize={25}
        onPressIcon={showConfirmPass}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    marginTop: 50,
  },
})