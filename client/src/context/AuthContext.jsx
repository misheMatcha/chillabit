import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [displayModal, setDisplayModal] = useState(false);
	const [token, setToken] = useState(null);
	const [user, setUser] = useState({});

	// auth form
	const [clickedSignUp, setClickedSignUp] = useState(false);
	const [errors, setErrors] = useState({});
	const [isVerified, setIsVerified] = useState(false);
	const [step, setStep] = useState(1);

	const toggleModal = (isNewUser = false) => {
		// prevents scroll on modal
		const body = document.getElementsByTagName('body')[0];
		body.style.overflow = displayModal ? null : 'hidden';

		if (isNewUser) setClickedSignUp(true);
		setDisplayModal(!displayModal);
		if (!displayModal) setStep(1);
	};

	return (
		<AuthContext.Provider
			value={{
				clickedSignUp,
				displayModal,
				errors,
				isVerified,
				setClickedSignUp,
				setDisplayModal,
				setErrors,
				setIsVerified,
				setStep,
				setToken,
				setUser,
				step,
				toggleModal,
				token,
				user,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
