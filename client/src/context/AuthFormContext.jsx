import { createContext, useState } from 'react';

const AuthFormContext = createContext({});

export const AuthFormProvider = ({ children }) => {
	const [step, setStep] = useState(1);
	const [isVerified, setIsVerified] = useState(false);

	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [age, setAge] = useState('');
	const [gender, setGender] = useState('');

	return (
		<AuthFormContext.Provider
			value={{
				age,
				email,
				gender,
				isVerified,
				password,
				setAge,
				setEmail,
				setGender,
				setIsVerified,
				setPassword,
				setStep,
				setUsername,
				step,
				username,
			}}
		>
			{children}
		</AuthFormContext.Provider>
	);
};

export default AuthFormContext;
