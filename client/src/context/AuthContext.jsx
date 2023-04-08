import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [displayModal, setDisplayModal] = useState(false);
	const [token, setToken] = useState(null);
	const [user, setUser] = useState({});

	// auth form
	const [isVerified, setIsVerified] = useState(false);
	const [clickedSignUp, setClickedSignUp] = useState(false);

	return (
		<AuthContext.Provider
			value={{
				clickedSignUp,
				displayModal,
				isVerified,
				setClickedSignUp,
				setDisplayModal,
				setIsVerified,
				setToken,
				setUser,
				token,
				user,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
