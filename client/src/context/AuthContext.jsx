import { createContext, useState } from 'react';
import { isEmptyObject } from '../utils/general';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	const [currentUser, setCurrentUser] = useState({});

	const loginSetup = (values) => {
		setCurrentUser(values.user);
		setToken(values.token);
	};

	const logoutSetup = () => {
		setCurrentUser(null);
		setToken(null);
	};

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				isLoggedIn: !isEmptyObject(currentUser),
				loginSetup,
				logoutSetup,
				setCurrentUser,
				setToken,
				token,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
