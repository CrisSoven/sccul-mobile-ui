import * as Yup from 'yup';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import Input from '../common/InputComponent';
import { StyleSheet, View } from 'react-native';
import { registerUser } from '../../utils/Axios';
import { useNavigation } from '@react-navigation/native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import AccionsBtnComponent from '../../components/cart/AccionsBtnComponent';

export default function LoginForm() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);
  const showPass = () => setPassword(!password);
  const showRepeatPass = () => setRepeatPassword(!repeatPassword);

  const formik = useFormik({
    initialValues: {
      names: '',
      lastname: '',
      surname: '',
      cellphone: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: Yup.object({
      names: Yup.string().required('Nombre(s) obligatorio'),
      lastname: Yup.string().required('Apellidos obligatorios'),
      cellphone: Yup
        .string()
        .required('Número de teléfono obligatorio')
        .min(10, 'Número de teléfono debe tener 10 dígitos')
        .max(10, 'Número de teléfono debe tener 10 dígitos'),
      email: Yup
        .string()
        .email('Correo electrónico inválido')
        .required('Correo electrónico obligatorio'),
      password: Yup.string().required('Contraseña obligatoria'),
      repeatPassword: Yup
        .string()
        .required('Contraseña obligatoria')
        .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden'),
    }),
    validateOnChange: false,

    onSubmit: async (formData) => {
      const { names, lastname, surname, cellphone, email, password } = formData;
      setIsLoading(true);
      try {
        const registed = await registerUser(names, lastname, surname, cellphone, email, password);
        registed ? (
          Toast.show({
            position: 'bottom',
            type: 'success',
            text1: 'Usuario registrado correctamente',
            text2: 'Inicia sesión para continuar',
          }),
          navigation.navigate('Logins')
        ) :
          Toast.show({
            position: 'bottom',
            type: 'error',
            text1: 'Correo eletrónico o teléfono ya registrado',
          });
      }
      catch (error) {
        console.log(error);
      }
      finally {
        setIsLoading(false);
      }
    }
  });

  return (
    <View style={styles.header}>
      <Input
        label='Nombre(s)'
        placeholder='Nombre(s)'
        iconName='account-outline'
        iconType='material-community'
        onChangeText={(text) => formik.setFieldValue('names', text)}
        errorMessage={formik.errors.names}
      />
      <View style={styles.row}>
        <View style={styles.column}>
          <Input
            label='Apellido paterno'
            placeholder='Apellido paterno'
            iconName='account-outline'
            iconType='material-community'
            onChangeText={(text) => formik.setFieldValue('lastname', text)}
            errorMessage={formik.errors.lastname}
          />
        </View>
        <View style={styles.column}>
          <Input
            label='Apellido materno'
            placeholder='Apellido materno'
            iconName='account-outline'
            iconType='material-community'
            onChangeText={(text) => formik.setFieldValue('surname', text)}
            errorMessage={formik.errors.lastname}
          />
        </View>
      </View>
      <Input
        label='Numero de celular'
        placeholder='Numero de celular'
        iconName='cellphone'
        iconType='material-community'
        keyboardType='phone-pad'
        minLeght={10}
        maxLength={10}
        onChangeText={(text) => formik.setFieldValue('cellphone', text)}
        errorMessage={formik.errors.cellphone}
      />
      <Input
        label='Correo electrónico'
        placeholder='correo@ejemplo.com'
        iconName='email-outline'
        iconType='material-community'
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
      <Input
        label='Confirmar contraseña'
        placeholder='•••••••'
        secureTextEntry={repeatPassword ? false : true}
        iconName={repeatPassword ? 'eye-off-outline' : 'eye-outline'}
        iconType='material-community'
        onPressIcon={showRepeatPass}
        onChangeText={(text) => formik.setFieldValue('repeatPassword', text)}
        errorMessage={formik.errors.repeatPassword}
      />
      <AccionsBtnComponent
        btnCancelTitle='Cancelar'
        icon='login'
        type='material-community'
        btnContinueTitle='Registrar'
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
    marginVertical: 20,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    width: '49%',
  },
});
