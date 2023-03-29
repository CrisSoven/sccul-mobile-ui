import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Input from "../common/InputComponent";
import { useFormik } from "formik";
import * as Yup from "yup";
import AccionsBtnComponent from '../../components/cart/AccionsBtnComponent';
import { loginUser } from '../../utils/Axios';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { useNavigation } from '@react-navigation/native';

export default function LoginForm() {
  const [password, setPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const showPass = () => setPassword(!password);
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .required('Correo electrónico obligatorio')
        .email('Correo electrónico no valido'),
      password: Yup.string().required('Contraseña obligatoria'),
    }),
    validateOnChange: false,

    onSubmit: async (formData) => {
      const { email, password } = formData;
      setIsLoading(true);
      try {
        await loginUser(email, password);
        return true;
      }
      catch (error) {
        console.log(error);
        Toast.show({
          position: 'bottom',
          type: 'error',
          text1: 'Correo o contraseña incorrectos',
        });
      }
      finally {
        setIsLoading(false);
      }
    }
  });

  return (
    <View style={styles.header}>
      <Input
        label="Correo electrónico"
        placeholder="correo@ejemplo.com"
        iconName="email-outline"
        iconType="material-community"
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        label="Contraseña"
        placeholder="•••••••"
        secureTextEntry={password ? false : true}
        iconName={password ? "eye-off-outline" : "eye-outline"}
        iconType="material-community"
        onPressIcon={showPass}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <AccionsBtnComponent
        btnCancelTitle="Cancelar"
        icon="login"
        type="material-community"
        btnContinueTitle="Iniciar sesión"
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
