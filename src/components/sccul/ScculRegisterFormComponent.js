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
		names: '',
		lastname: '',
		surname: '',
		cellphone: '',
		email: '',
		password: '',
		repeatPassword: '',
	};

	const validationSchema = yup.object().shape({
		names: yup.string().required('Nombre(s) obligatorio'),
		lastname: yup.string().required('Apellido paterno obligatorio'),
		cellphone: yup
			.string()
			.required('Número de teléfono obligatorio')
			.min(10, 'Número de teléfono debe tener 10 dígitos')
			.max(10, 'Número de teléfono debe tener 10 dígitos'),
		email: yup
			.string()
			.email('Correo electrónico inválido')
			.required('Correo electrónico obligatorio'),
		password: yup.string().required('Contraseña obligatoria'),
		repeatPassword: yup
			.string()
			.required('Contraseña obligatoria')
			.oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
	});

	const handleFormSubmit = (handleSubmit) => {
		handleSubmit();
	};

	const handleSubmit = async (values) => {
		const { names, lastname, surname, cellphone, email, password } = values;

		try {
			console.log('entra');
			const response = await fetch(
				'http://10.0.2.2:8080/api/auth/register',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name: names,
						lastname: lastname,
						surname,
						phoneNumber: cellphone,
						email,
						password,
					}),
				}
			);
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
							<Text style={styles.label}>Nombre(s)</Text>
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
									placeholder='Nombre(s)'
									onChangeText={handleChange('names')}
									onBlur={handleBlur('names')}
									value={values.names}
								/>
							</View>
							{errors.names && touched.names && (
								<Text style={styles.error}>{errors.names}</Text>
							)}
						</View>
						<View style={styles.isRow}>
							<View style={[styles.spaceBetween, styles.isCol]}>
								<Text style={styles.label}>
									Apellido paterno
								</Text>
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
										placeholder='Apellido paterno'
										onChangeText={handleChange('lastname')}
										onBlur={handleBlur('lastname')}
										value={values.lastname}
									/>
								</View>
								{errors.lastname && touched.lastname && (
									<Text style={styles.error}>
										{errors.lastname}
									</Text>
								)}
							</View>
							<View style={[styles.spaceBetween, styles.isCol]}>
								<Text style={styles.label}>
									Apellido materno
								</Text>
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
										placeholder='Apellido materno'
										onChangeText={handleChange('surname')}
										onBlur={handleBlur('surname')}
										value={values.surname}
									/>
								</View>
								{errors.surname && touched.surname && (
									<Text style={styles.error}>
										{errors.surname}
									</Text>
								)}
							</View>
						</View>
						<View style={styles.spaceBetween}>
							<Text style={styles.label}>Número de teléfono</Text>
							<View style={styles.inputContainer}>
								<Icon
									style={styles.icon}
									name='cellphone'
									size={24}
									color='black'
									type='material-community'
								/>
								<TextInput
									style={styles.input}
									placeholder='Número de teléfono'
									onChangeText={handleChange('cellphone')}
									onBlur={handleBlur('cellphone')}
									value={values.cellphone}
									keyboardType='phone-pad'
									maxLength={10}
									minLength={10}
								/>
							</View>
							{errors.cellphone && touched.cellphone && (
								<Text style={styles.error}>
									{errors.cellphone}
								</Text>
							)}
						</View>
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
						</View>
						<View style={styles.spaceBetween}>
							<Text style={styles.label}>Repetir contraseña</Text>
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
									placeholder='Repetir contra'
									secureTextEntry={!showPass}
									onChangeText={handleChange(
										'repeatPassword'
									)}
									onBlur={handleBlur('repeatPassword')}
									value={values.repeatPassword}
								/>
							</View>
							{errors.repeatPassword &&
								touched.repeatPassword && (
									<Text style={styles.error}>
										{errors.repeatPassword}
									</Text>
								)}
						</View>
						<View style={{ marginVertical: 10 }}>
							<AccionsBtnComponent
								btnCancelTitle={'Regresar'}
								btnContinueTitle={'Iniciar sesión'}
								btnPrimary={true}
								action={() => handleFormSubmit(handleSubmit)}
							/>
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
		width: '100%',
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
	isRow: {
		flexDirection: 'row',
	},
	isCol: {
		flex: 1,
		marginHorizontal: 10,
	},
});
