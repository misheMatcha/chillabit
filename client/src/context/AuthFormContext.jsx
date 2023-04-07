import { createContext, useState } from 'react';

const AuthFormContext = createContext({});

export const AuthFormProvider = ({ children }) => {
	const [step, setStep] = useState(1);
	const [isVerified, setIsVerified] = useState(false);
	const [clickedSignUp, setClickedSignUp] = useState(false);

	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [age, setAge] = useState('');
	const [gender, setGender] = useState('');

	return (
		<AuthFormContext.Provider
			value={{
				age,
				clickedSignUp,
				email,
				gender,
				isVerified,
				password,
				setAge,
				setClickedSignUp,
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