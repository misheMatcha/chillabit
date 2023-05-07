import React from 'react';
import * as cn from 'classnames';
import { motion } from 'framer-motion';
import { createUseStyles, useTheme } from 'react-jss';
import useModal from '../../hooks/useModal';
import { styles } from '../../utils/styles';

const { height, spacing, width } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...height[100].percentage,
		...width[100].percentage,
		backgroundColor: 'blue',
		position: 'fixed',
		zIndex: spacing[2],
	},
	modal: {
		backgroundColor: 'yellow',
		margin: 'auto',
		width: 400,
	},
}));

const Modal = ({ content, bgClose = false }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { closeModal } = useModal();

	return (
		<motion.div
			className={cn(classes.container)}
			onClick={() => (bgClose ? closeModal() : '')}
		>
			<motion.div className={cn(classes.modal)}>{content}</motion.div>
		</motion.div>
	);
};

export default Modal;
