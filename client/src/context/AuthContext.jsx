import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	const [currentUser, setCurrentUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	// auth form
	const [errors, setErrors] = useState({});
	const [isVerified, setIsVerified] = useState(false);
	const [step, setStep] = useState(1);

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
				errors,
				isLoggedIn,
				isVerified,
				loginSetup,
				logoutSetup,
				setCurrentUser,
				setErrors,
				setIsVerified,
				setStep,
				setToken,
				step,
				token,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
