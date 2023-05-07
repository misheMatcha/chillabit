import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [displayModal, setDisplayModal] = useState(false);
	const [token, setToken] = useState(null);
	const [currentUser, setCurrentUser] = useState(null);

	// auth form
	const [errors, setErrors] = useState({});
	const [isVerified, setIsVerified] = useState(false);
	const [step, setStep] = useState(1);

	const toggleModal = (isNewUser = false) => {
		// prevents scroll on modal
		const body = document.getElementsByTagName('body')[0];
		body.style.overflow = displayModal ? null : 'hidden';

		setDisplayModal(!displayModal);
	};

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				displayModal,
				errors,
				isVerified,
				setCurrentUser,
				setDisplayModal,
				setErrors,
				setIsVerified,
				setStep,
				setToken,
				step,
				toggleModal,
				token,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
