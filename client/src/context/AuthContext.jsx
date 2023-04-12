import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [displayModal, setDisplayModal] = useState(false);
	const [token, setToken] = useState(null);
	const [user, setUser] = useState({});

	// auth form
	const [isVerified, setIsVerified] = useState(false);
	const [clickedSignUp, setClickedSignUp] = useState(false);
	const [step, setStep] = useState(1);

	const toggleModal = (isNewUser = false) => {
		// prevents scroll on modal
		let body = document.getElementsByTagName('body')[0];
		body.style.overflow = displayModal ? null : 'hidden';

		if (isNewUser) setClickedSignUp(true);
		setDisplayModal(!displayModal);
	};

	return (
		<AuthContext.Provider
			value={{
				clickedSignUp,
				displayModal,
				isVerified,
				setClickedSignUp,
				setDisplayModal,
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
