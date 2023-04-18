import * as Yup from 'yup';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { forgotPassword } from '../../utils/Axios';
import { StyleSheet, View, Image } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import InputComponent from '../../components/common/InputComponent';
import AccionsBtnComponent from '../../components/cart/AccionsBtnComponent';
import ScculMainComponent from '../../components/sccul/ScculMainComponent';

export default function ResetPasswordScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Correo electrónico obligatorio')
        .email('Correo electrónico no valido'),
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
            type: 'success',
            position: 'top',
            text1: 'Correo enviado correctamente',
            text2: 'Revisa tu bandeja de entrada',
            visibilityTime: 5000,
            topOffset: 100,
          });
        } else {
          Toast.show({
            type: 'error',
            position: 'top',
            text1: response.message,
            visibilityTime: 5000,
            topOffset: 100,
          });
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Ha ocurrido un error',
          visibilityTime: 5000,
          topOffset: 100,
        });
      }
    },
  });

  return (
    <View style={styles.header}>
      <ScculMainComponent text='Ingresa tu correo electrónico' />
      <Image style={styles.img} source={require('../../../assets/img/resetImage.png')} />
      <InputComponent
        label='Correo electrónico'
        placeholder='correo@ejemplo.com'
        iconName='email-outline'
        iconType='material-community'
        keyboardType='email-address'
        onChangeText={(text) => formik.setFieldValue('email', text)}
        errorMessage={formik.errors.email}
      />
      <AccionsBtnComponent
        btnCancelTitle='Regresar'
        icon='email-fast-outline'
        type='material-community'
        btnContinueTitle='Enviar'
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
  img: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
