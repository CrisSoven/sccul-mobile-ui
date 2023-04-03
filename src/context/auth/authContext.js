import { createContext } from 'react';

const initialState = {
	session: null,
};

export const AuthContext = createContext(initialState);
