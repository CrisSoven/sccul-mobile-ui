import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';
import Colors from '../../utils/Colors';
import AccionsBtnComponent from '../../components/cart/AccionsBtnComponent';

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);
  const navigation = useNavigation();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required('Correo electrónico obligatorio')
      .email('Correc electrónico no valido'),
    password: yup.string().required('Contraseña obligatoria'),
  });

  const handleFormSubmit = (handleSubmit) => {
    handleSubmit();
  };

  const handleSubmit = async (values) => {
    const { email, password } = values;

    try {
      console.log('entra');
      const response = await fetch('http://10.0.2.2:8080/api/auth/mobile/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.header}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <View style={styles.spaceBetween}>
              <Text style={styles.label}>Correo electrónico</Text>
              <View style={styles.inputContainer}>
                <Icon
                  style={styles.icon}
                  name='account-outline'
                  size={24}
                  color='black'
                  type='material-community'
                />
                <TextInput
                  style={styles.input}
                  placeholder='Correo electronico'
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType='email-address'
                />
              </View>
              {errors.email && touched.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}
            </View>
            <View style={styles.spaceBetween}>
              <Text style={styles.label}>Contraseña</Text>
              <View style={styles.inputContainer}>
                <Icon
                  style={styles.icon}
                  name='account-outline'
                  size={24}
                  color='black'
                  type='material-community'
                />
                <TextInput
                  style={styles.input}
                  placeholder='Contraseña'
                  secureTextEntry={!showPass}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
              </View>
              {errors.password && touched.password && (
                <Text style={styles.error}>
                  {errors.password}
                </Text>
              )}
              <View style={{ marginVertical: 10 }}>
                <AccionsBtnComponent
                  btnCancelTitle={'Regresar'}
                  btnContinueTitle={'Iniciar sesión'}
                  btnPrimary={true}
                  action={() =>
                    handleFormSubmit(handleSubmit)
                  }
                />
              </View>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
    width: '40%',
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.PalleteGreenBackground,
    backgroundColor: Colors.PalleteGreenBackground,
    borderRadius: 10,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    height: 45,
  },
  error: {
    color: Colors.PalletteRed,
    fontWeight: 'bold',
    marginTop: 5,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  spaceBetween: {
    marginBottom: 30,
  },
});
