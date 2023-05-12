import { createContext, useState } from 'react';

const GeneralContext = createContext({});

export const GeneralProvider = ({ children }) => {
	const [errors, setErrors] = useState({});
	const [user, setUser] = useState(null);

	return (
		<GeneralContext.Provider
			value={{
				errors,
				setErrors,
				setUser,
				user,
			}}
		>
			{children}
		</GeneralContext.Provider>
	);
};

export default GeneralContext;
