import { createContext, useState } from 'react';

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
	const [errors, setErrors] = useState({});
	const [step, setStep] = useState();

	return (
		<FormContext.Provider
			value={{
				errors,
				setErrors,
				setStep,
				step,
			}}
		>
			{children}
		</FormContext.Provider>
	);
};

export default FormContext;
