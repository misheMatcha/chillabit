import React from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import * as cn from 'classnames';
import { motion } from 'framer-motion';
import { createUseStyles, useTheme } from 'react-jss';
import useModal from '../../hooks/useModal';
import { styles } from '../../utils/styles';
import StyledButton from '../General/StyledButton';

const { alignItems, displayFlex, height, spacing, width } = styles;

const useStyles = createUseStyles((theme) => ({
	closeBtn: {
		'& .fa-xmark': {
			fontSize: spacing[2],
		},
		'& span': {
			...displayFlex,
		},
		'&:hover': {
			borderColor: `${theme.color.transparent} !important`,
		},
		...alignItems.flexEnd,
		...displayFlex,
		borderColor: theme.color.transparent,
		height: spacing['3_5'],
		left: `calc(100% - ${spacing['3_5']}px)`,
		padding: 0,
		position: 'absolute',
		top: 0,
		width: spacing['3_5'],
	},
	container: {
		...height[100].percentage,
		...width[100].percentage,
		backgroundColor: 'hsla(0,0%,94.9%,.9)',
		position: 'fixed',
		zIndex: spacing[2],
	},
	modal: {
		backgroundColor: theme.background.surface,
		margin: 'auto',
		padding: spacing['3_5'],
		position: 'relative',
		width: 460,
	},
}));

const bgVariants = {
	animate: { opacity: 1, transition: { duration: 0.3, ease: 'linear' } },
	exit: { opacity: 0, transition: { delay: 0.2 } },
	initial: { opacity: 0 },
	transition: {},
};

const modalVariants = {
	animate: { top: 76, transition: { delay: 0.3, duration: 0.8, type: 'spring' } },
	exit: { top: '-100%', transition: { delay: 0 } },
	initial: { top: '-100%' },
	transition: {},
};

const Modal = ({
	bgStyles,
	content,
	modalStyles,
	bgClose = false,
	bgAnimations = {},
	modalAnimations = {},
}) => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { closeModal } = useModal();

	return (
		<motion.div
			initial={{ ...bgVariants.initial, ...bgAnimations.initial }}
			animate={{ ...bgVariants.animate, ...bgAnimations.animate }}
			transition={{ ...bgVariants.transition, ...bgAnimations.transition }}
			exit={{ ...bgVariants.exit, ...bgAnimations.exit }}
			className={cn(classes.container, bgStyles)}
			onClick={() => (bgClose ? closeModal() : '')}
		>
			<motion.div
				initial={{ ...modalVariants.initial, ...modalAnimations.initial }}
				animate={{ ...modalVariants.animate, ...modalAnimations.animate }}
				transition={{ ...modalVariants.transition, ...modalAnimations.transition }}
				exit={{ ...modalVariants.exit, ...modalAnimations.exit }}
				className={cn(classes.modal, modalStyles)}
			>
				<StyledButton
					icon={faXmark}
					onClick={closeModal}
					styles={classes.closeBtn}
					transparent
				/>
				{content}
			</motion.div>
		</motion.div>
	);
};

export default Modal;
