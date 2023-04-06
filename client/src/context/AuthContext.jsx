import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [displayModal, setDisplayModal] = useState(false);
	const [token, setToken] = useState(null);
	const [user, setUser] = useState({});

	return (
		<AuthContext.Provider value={{ displayModal, setDisplayModal, setToken, setUser, token, user }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
