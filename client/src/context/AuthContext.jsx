import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	const [currentUser, setCurrentUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const loginSetup = (values) => {
		setCurrentUser(values.user);
		setIsLoggedIn(true);
		setToken(values.token);
	};

	const logoutSetup = () => {
		setCurrentUser(null);
		setIsLoggedIn(false);
		setToken(null);
	};

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				isLoggedIn,
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
