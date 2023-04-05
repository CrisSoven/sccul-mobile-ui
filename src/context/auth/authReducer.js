export const authReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				session: action.payload,
			};

		case 'LOGOUT':
			return {
				session: false,
			};

		// case 'UPDATE_USER_DATA':
		// 	return {
		// 		...state,
		// 		fullName: action.payload.fullName,
		// 		email: action.payload.email,
		// 	};

		// case 'IS_LOADING':
		// 	return {
		// 		...state,
		// 		isLoading: action.payload,
		// 	};

		default:
			return state;
	}
};
