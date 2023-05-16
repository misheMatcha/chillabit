import { createContext, useState } from 'react';
import useGeneral from '../hooks/useGeneral';

const AuthFormContext = createContext({});

export const AuthFormProvider = ({ children }) => {
	const [gender, setGender] = useState('');
	const [isCustomGender, setIsCustomGender] = useState(false);
	const [isVerified, setIsVerified] = useState(false);
	const [step, setStep] = useState(1);

	const { errors, setErrors } = useGeneral();

	const nextStep = () => setStep(step + 1);

	const prevStep = () => {
		if (step > 0) setStep(step - 1);
	};

	const updateFormErrors = (errors) => setErrors(errors);

	return (
		<AuthFormContext.Provider
			value={{
				errors,
				gender,
				isCustomGender,
				isVerified,
				nextStep,
				prevStep,
				setGender,
				setIsCustomGender,
				setIsVerified,
				step,
				updateFormErrors,
			}}
		>
			{children}
		</AuthFormContext.Provider>
	);
};

export default AuthFormContext;
