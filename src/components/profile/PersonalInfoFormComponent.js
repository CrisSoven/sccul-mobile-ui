import * as Yup from 'yup';
import { useFormik } from 'formik';
import Colors from '../../utils/Colors';
import { Icon } from 'react-native-elements';
import Input from '../common/InputComponent';
import React, { useEffect, useState } from 'react';
import ModalComponent from '../common/ModalComponent';
import { saveToken, updateUserInfo } from '../../utils/Axios';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TitleBtnComponent from '../../components/profile/TitleBtnComponent';
import ChangePasswordScreen from '../../screens/profile/profileScreens/ChangePasswordScreen';

export default function PersonalInfoFormComponent(props) {
  const { user, onReload } = props;
  const [showModal, setShowModal] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const onClose = () => setShowModal((prevState) => !prevState);

  const formik = useFormik({
    initialValues: {
      name: user.name,
      lastname: user.lastname,
      surname: user.surname,
      phoneNumber: user.phoneNumber,
      email: user.email,
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .matches(
          /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/,
          'El nombre solo puede contener letras, espacios, Ñ y caracteres con acentos'
        )
        .required('Nombre requerido'),
      lastname: Yup.string()
        .matches(
          /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/,
          'El apellido paterno solo puede contener letras, espacios, Ñ y caracteres con acentos'
        )
        .required('Apellido paterno requerido'),
      surname: Yup.string()
        .matches(
          /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/,
          'El apellido materno solo puede contener letras, espacios, Ñ y caracteres con acentos'
        )
        .required('Apellido materno requerido'),
      phoneNumber: Yup.string()
        .required('Teléfono requerido')
        .min(10, 'El teléfono debe contener 10 dígitos')
        .max(10, 'El teléfono debe contener 10 dígitos'),
      email: Yup.string()
        .required('Correo electrónico requerido')
        .email('Correo electrónico inválido'),
    }),

    validateOnChange: false,

    onSubmit: async (formData) => {
      setIsLoading(true);
      try {
        const updatedUser = await updateUserInfo(
          formData.name,
          formData.lastname,
          formData.surname,
          formData.phoneNumber,
          formData.email
        );
        console.log(updatedUser);
        saveToken(updatedUser);
        setDisabled(true);
        onReload();
        Toast.show({
          type: 'info',
          position: 'bottom',
          text1: 'Tu información ha sido actualizada',
          visibilityTime: 1500,
          bottomOffset: 80,
        });
      } catch (error) {
        console.log(error);
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

  useEffect(() => {
    formik.setValues({
      name: user.name,
      lastname: user.lastname,
      surname: user.surname,
      phoneNumber: user.phoneNumber,
      email: user.email,
    });
  }, [user]);

  return (
    <View style={styles.container}>
      <TitleBtnComponent
        textTitle='Información personal'
        titleStyle={styles.subtitle}
        icon={disabled ? 'pencil' : 'check'}
        textBtn={disabled ? 'Editar' : 'Guardar'}
        iconType='material-community'
        btnPrimary={true}
        onPress={
          disabled ? () => setDisabled(!disabled) : formik.handleSubmit
        }
      />
      <View style={styles.content}>
        <Input
          label='Nombre(s)'
          value={formik.values.name}
          iconName='person-outline'
          iconType='MaterialIcons'
          onChangeText={(text) => formik.setFieldValue('name', text)}
          onBlur={formik.handleBlur('name')}
          errorMessage={formik.touched.name && formik.errors.name}
          disabled={disabled}
          shouldUpdate={false}
        />
        <View style={styles.row}>
          <View style={styles.column}>
            <Input
              label='Apellido paterno'
              value={formik.values.lastname}
              iconName='person-outline'
              iconType='MaterialIcons'
              onChangeText={(text) => formik.setFieldValue('lastname', text)}
              errorMessage={formik.errors.lastname}
              disabled={disabled}
              shouldUpdate={false}
            />
          </View>
          <View style={styles.column}>
            <Input
              label='Apellido materno'
              value={formik.values.surname}
              iconName='person-outline'
              iconType='MaterialIcons'
              onChangeText={(text) => formik.setFieldValue('surname', text)}
              errorMessage={formik.errors.surname}
              disabled={disabled}
              shouldUpdate={false}
            />
          </View>
        </View>
        <Input
          label='Teléfono'
          value={formik.values.phoneNumber}
          iconName='phone-android'
          iconType='MaterialIcons'
          onChangeText={(text) => formik.setFieldValue('phoneNumber', text)}
          errorMessage={formik.errors.phoneNumber}
          disabled={disabled}
          keyboardType='phone-pad'
          shouldUpdate={false}
        />
        <Input
          label='Correo electrónico'
          value={formik.values.email}
          iconName='mail-outline'
          iconType='MaterialIcons'
          onChangeText={(text) => formik.setFieldValue('email', text)}
          errorMessage={formik.errors.email}
          disabled={disabled}
          keyboardType='email-address'
          shouldUpdate={false}
        />
      </View>
      <TouchableOpacity
        style={[styles.row, { marginBottom: 10 }]}
        onPress={handleShowModal}
      >
        <View style={styles.circleKey}>
          <Icon name='vpn-key' type='MaterialIcons' size={20} />
        </View>
        <Text style={styles.label}>Cambiar contraseña</Text>
      </TouchableOpacity>
      <ModalComponent isVisible={showModal} close={() => setShowModal(false)}>
        <ChangePasswordScreen onClose={onClose} />
      </ModalComponent>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.PalleteGray,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    width: '50%',
  },
  circleKey: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.PalleteGreenBackground,
    justifyContent: 'center',
    marginLeft: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 10,
  },
});
