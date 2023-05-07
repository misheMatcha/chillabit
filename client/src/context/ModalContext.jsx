import { createContext, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Modal from '../components/UI/Modal';

const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
	const [modal, setModal] = useState();
	const [modalConfig, setModalConfig] = useState({});

	const openModal = (content) => {
		console.log('open');
		setModal(content);
	};

	const closeModal = () => {
		console.log('close');
		setModal(null);
		setModalConfig({});
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
