import { createContext, useState } from 'react';

const AuthFormContext = createContext({});

export const AuthFormProvider = ({ children }) => {
	const [stage, setStage] = useState(1);
	const [isVerified, setIsVerified] = useState(false);

	return (
		<AuthFormContext.Provider value={{ isVerified, setIsVerified, setStage, stage }}>
			{children}
		</AuthFormContext.Provider>
	);
};

export default AuthFormContext;
