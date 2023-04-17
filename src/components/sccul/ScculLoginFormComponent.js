import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "../common/InputComponent";
import { useFormik } from "formik";
import * as Yup from "yup";
import AccionsBtnComponent from "../../components/cart/AccionsBtnComponent";
import { loginUser } from "../../utils/Axios";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/auth/authContext";
import Colors from "../../utils/Colors";

export default function LoginForm() {
  const [password, setPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { authState, login } = useContext(AuthContext);
  const showPass = () => setPassword(!password);
  const navigation = useNavigation();
  const navigateRes = () => {
    navigation.navigate("ResetPass");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .required("Correo electrónico obligatorio")
        .email("Correo electrónico no valido"),
      password: Yup.string().required("Contraseña obligatoria"),
    }),
    validateOnChange: false,

    onSubmit: async (formData) => {
      const { email, password } = formData;
      setIsLoading(true);
      try {
        const response = await login(email, password);
        navigation.navigate("Logins");

        response
          ? Toast.show({
            type: "success",
            position: "top",
            text1: `¡Bienvenido de nuevo ${response}!`,
            text2: "Cargando recursos...",
            visibilityTime: 5000,
            bottomOffset: 80,
          }) : {};
      } catch (error) {
        console.log(error);
        Toast.show({
          type: "error",
          position: "top",
          text1: "Correo o contraseña incorrectos",
          visibilityTime: 5000,
          bottomOffset: 80,
        });
      } finally {
        setIsLoading(false);
      }
    },
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
      <View style={{ alignItems: "center" }}>
        <Text style={{ marginTop: 10 }}>
          ¿Olvidaste tu contraseña?
          <Text style={styles.registerNow} onPress={navigateRes}> Cambiala aquí</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  registerNow: {
    color: Colors.PalletteRed,
    fontWeight: "bold",
  },
});
