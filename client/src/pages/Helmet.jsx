import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { createUseStyles } from 'react-jss';
import { Outlet } from 'react-router-dom';
import LoginSignUp from '../components/Authenticate/LoginSignUp';
import useAuth from '../hooks/useAuth';

const useStyles = createUseStyles({
	container: {},
	form: {
		backgroundColor: 'yellow',
		margin: 'auto',
		padding: 25,
		position: 'relative',
		width: 450,
	},
	modal: {
		// backgroundColor: 'hsla(0,0%,94.9%,.9)',
		backgroundColor: 'blue',
		height: '100vh',
		left: 0,
		position: 'absolute',
		top: 0,
		width: '100vw',
		zIndex: 2,
	},
});

const Helmet = () => {
	const classes = useStyles();
	const { displayModal } = useAuth();

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
