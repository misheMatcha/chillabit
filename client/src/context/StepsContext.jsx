import { createContext, useState } from 'react';

const StepsContext = createContext({});

export const StepsProvider = ({ children, numSteps }) => {
	const [currentStep, setCurrentStep] = useState(1);

	const prevStep = () => {
		if (currentStep > 0) setCurrentStep(currentStep - 1);
	};

	const nextStep = () => {
		if (currentStep < numSteps) setCurrentStep(currentStep + 1);
	};

	return (
		<StepsContext.Provider
			value={{
				currentStep,
				nextStep,
				prevStep,
				setCurrentStep,
			}}
		>
			{children}
		</StepsContext.Provider>
	);
};

export default StepsContext;
