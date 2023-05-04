import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [displayModal, setDisplayModal] = useState(false);
	const [token, setToken] = useState(null);
	const [currentUser, setCurrentUser] = useState(null);

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
	};

	return (
		<AuthContext.Provider
			value={{
				clickedSignUp,
				currentUser,
				displayModal,
				errors,
				isVerified,
				setClickedSignUp,
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
