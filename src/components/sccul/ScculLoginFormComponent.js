import * as Yup from 'yup';
import { useFormik } from 'formik';
import Colors from '../../utils/Colors';
import Input from '../common/InputComponent';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth/authContext';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import AccionsBtnComponent from '../../components/cart/AccionsBtnComponent';

export default function LoginForm() {
  const [password, setPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { authState, login } = useContext(AuthContext);
  const showPass = () => setPassword(!password);
  const navigation = useNavigation();
  const handleNavigateResetPassword = () => {
    navigation.navigate('ResetPass');
  };

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
        const response = await login(email, password);
        navigation.navigate('Logins');
        response
          ? Toast.show({
            type: 'success',
            position: 'top',
            text1: `¡Bienvenido de nuevo ${response}!`,
            text2: 'Cargando recursos...',
            visibilityTime: 5000,
            topOffset: 100,
          }) : {};
      } catch (error) {
        console.log(error);
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Correo o contraseña incorrectos',
          visibilityTime: 5000,
          topOffset: 100,
        });
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <View style={styles.header}>
      <Input
        label='Correo electrónico'
        placeholder='correo@ejemplo.com'
        iconName='email-outline'
        iconType='material-community'
        keyboardType='email-address'
        onChangeText={(text) => formik.setFieldValue('email', text)}
        errorMessage={formik.errors.email}
      />
      <Input
        label='Contraseña'
        placeholder='•••••••'
        secureTextEntry={password ? false : true}
        iconName={password ? 'eye-off-outline' : 'eye-outline'}
        iconType='material-community'
        onPressIcon={showPass}
        onChangeText={(text) => formik.setFieldValue('password', text)}
        errorMessage={formik.errors.password}
      />
      <View style={styles.textContainer}>
        <Text style={styles.restoreNow} onPress={handleNavigateResetPassword}>¿Olvidaste tu contraseña?</Text>
      </View>
      <AccionsBtnComponent
        btnCancelTitle='Regresar'
        icon='login'
        type='material-community'
        btnContinueTitle='Iniciar sesión'
        btnPrimary={true}
        buttonStyle={{ paddingHorizontal: '10%' }}
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
  textContainer: {
    marginHorizontal: 20,
    marginBottom: 15,
  },
  restoreNow: {
    color: Colors.PalletteRed,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
