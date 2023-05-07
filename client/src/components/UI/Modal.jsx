import React from 'react';
import * as cn from 'classnames';
import { motion } from 'framer-motion';
import { createUseStyles, useTheme } from 'react-jss';
import useModal from '../../hooks/useModal';
import { styles } from '../../utils/styles';

const { height, width } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {},
}));

const Modal = ({ content }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { closeModal } = useModal();

	return (
		<motion.div className={cn(classes.container)}>
			<motion.div className={cn(classes.container)}>{content}</motion.div>
		</motion.div>
	);
};

export default Modal;
