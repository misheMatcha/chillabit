import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { createUseStyles, useTheme } from 'react-jss';
import { Outlet } from 'react-router-dom';
import LoginSignUp from '../features/Authenticate/LoginSignUp/index';
import useAuth from '../hooks/useAuth';
import { styles } from '../utils/styles';

const { height, spacing, width } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {},
	form: {
		backgroundColor: theme.color.white,
		margin: 'auto',
		padding: spacing['3_5'],
		position: 'relative',
		width: 460,
	},
	modal: {
		...height[100].view,
		...width[100].view,
		backgroundColor: 'hsla(0,0%,94.9%,.9)',
		left: 0,
		position: 'fixed',
		top: 0,
		zIndex: 200,
	},
}));

const Helmet = () => {
	const theme = useTheme();
	const { displayModal } = useAuth();
	const classes = useStyles({ displayModal, theme });

	return (
		<div className={classes.container}>
			<AnimatePresence>
				{displayModal && (
					<motion.div
						className={classes.modal}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3, ease: 'linear' }}
						exit={{ opacity: 0 }}
					>
						<motion.div
							className={classes.form}
							initial={{ top: '-100%' }}
							animate={{ top: 76 }}
							transition={{ duration: 0.5, type: 'spring' }}
							exit={{ top: '-100%' }}
						>
							<LoginSignUp />
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
			<Outlet />
		</div>
	);
};

export default Helmet;
