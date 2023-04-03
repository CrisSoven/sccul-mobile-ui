import { useCallback, useReducer, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { authReducer } from './authReducer';
import { checkLoginStatus, deleteToken, loginUser } from '../../utils/Axios';
import { useEffect } from 'react';
import { AuthContext } from './authContext';

const AuthContextProvider = ({ children }) => {
	const [authState, setAuthState] = useState({
		session: false,
	});

	const [state, dispatch] = useReducer(authReducer, {
		session: false,
	});

	const login = async (email, password) => {
		const isLogged = await loginUser(email, password);
		dispatch({
			type: 'LOGIN',
			payload: isLogged,
		});

		return isLogged;
	};

	const logout = async () => {
		await deleteToken();

		dispatch({
			type: 'LOGOUT',
		});
	};

	const checkSession = useCallback(async () => {
		const isLogged = await checkLoginStatus();
		dispatch({
			type: 'LOGIN',
			payload: isLogged,
		});
	}, []);

	useEffect(() => {
		setAuthState(state);
	}, [state]);

	return (
		<AuthContext.Provider
			value={{ authState, login, checkSession, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;

const styles = StyleSheet.create({});
