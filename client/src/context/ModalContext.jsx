import { createContext, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Modal from '../components/UI/Modal';
import LoginSignUp from '../features/Authenticate/LoginSignUp';
import useGeneral from '../hooks/useGeneral';
import ProfileEditForm from '../pages/Profile/EditForm';
import { isEmptyObject } from '../utils/general';

const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
	const [modal, setModal] = useState();
	const [modalConfig, setModalConfig] = useState({});
	const { errors, setErrors } = useGeneral();
	const body = document.getElementsByTagName('body')[0];

	const openModal = (content, contentConfig, modalConfigOptions) => {
		if (content === 'auth') {
			setModal(<LoginSignUp {...contentConfig} />);
		} else {
			setModal(<ProfileEditForm {...contentConfig} />);
		}

		setModalConfig(modalConfigOptions);
		body.style.overflow = 'hidden';
	};

	const closeModal = () => {
		setModal(null);
		setModalConfig({});
		if (!isEmptyObject(errors)) setErrors({});
		body.style.overflow = null;
	};

	return (
		<ModalContext.Provider
			value={{
				closeModal,
				openModal,
			}}
		>
			<AnimatePresence>
				{modal && (
					<Modal
						content={modal}
						{...modalConfig}
					/>
				)}
			</AnimatePresence>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContext;
