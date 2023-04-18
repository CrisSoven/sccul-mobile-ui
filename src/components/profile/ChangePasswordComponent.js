import * as Yup from 'yup'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import Input from '../common/InputComponent'
import { StyleSheet, View } from 'react-native'
import ButtonComponent from '../common/ButtonComponent'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import { changePassword, verifyPassword } from '../../utils/Axios'

export default function ChangePasswordComponent({ onClose }) {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const showPass = () => setPassword(!password);
  const showNewPass = () => setNewPassword(!newPassword);
  const showConfirmPass = () => setConfirmPassword(!confirmPassword);
  const formik = useFormik({
    initialValues: {
      password: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      password: Yup.string().required('Contraseña actual requerida'),
      newPassword: Yup.string().required('Nueva contraseña requerida'),
      confirmPassword: Yup.string()
        .required('Confirmar contraseña requerida')
        .oneOf([Yup.ref('newPassword')], 'Las contraseñas no coinciden'),
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      setIsLoading(true);
      const { password, newPassword } = formData;
      console.log('formData:', formData);
      try {
        console.log('Antes de verificar la contraseña actual');
        const isPasswordValid = await verifyPassword(
          password,
          newPassword,
          formData.confirmPassword
        );
        console.log('Respuesta del servicio verifyPassword:', isPasswordValid);
        if (isPasswordValid.error) {
          Toast.show({
            type: 'error',
            position: 'bottom',
            text1: 'La contraseña actual es incorrecta',
            visibilityTime: 1500,
            bottomOffset: 80,
          });
          onClose();
          setIsLoading(false);
          return;
        }
        console.log('Antes de cambiar la contraseña');
        const response = await changePassword(password, newPassword);
        console.log('Respuesta del servicio changePassword  :', response);
        Toast.show({
          type: 'info',
          position: 'bottom',
          text1: 'Tu contraseña ha sido actualizada',
          visibilityTime: 1500,
          bottomOffset: 80,
        });
        onClose();
      } catch (error) {
        console.log('Error:', error);
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Ha ocurrido un error, inténtalo de nuevo',
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
          label='Contraseña actual'
          placeholder='•••••••'
          secureTextEntry={password ? false : true}
          iconName={password ? 'eye-off-outline' : 'eye-outline'}
          iconType='material-community'
          onPressIcon={showPass}
          onChangeText={(text) => formik.setFieldValue('password', text)}
          errorMessage={formik.errors.password}
        />
        <Input
          label='Nueva contraseña'
          placeholder='•••••••'
          secureTextEntry={newPassword ? false : true}
          iconName={newPassword ? 'eye-off-outline' : 'eye-outline'}
          iconType='material-community'
          onPressIcon={showNewPass}
          onChangeText={(text) => formik.setFieldValue('newPassword', text)}
          errorMessage={formik.errors.newPassword}
        />
        <Input
          label='Confirmar contraseña'
          placeholder='•••••••'
          secureTextEntry={confirmPassword ? false : true}
          iconName={confirmPassword ? 'eye-off-outline' : 'eye-outline'}
          iconType='material-community'
          onPressIcon={showConfirmPass}
          onChangeText={(text) => formik.setFieldValue('confirmPassword', text)}
          errorMessage={formik.errors.confirmPassword}
        />
      </View>
      <ButtonComponent
        icon='lock-reset'
        type='material-community'
        title='Cambiar contraseña'
        loading={isLoading}
        btnPrimary={true}
        onPress={formik.handleSubmit}
        style={{alignSelf: 'center'}}
      />
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    marginVertical: 15,
  },
});
