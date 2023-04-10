import React from 'react';
import { createUseStyles } from 'react-jss';
import { Outlet } from 'react-router-dom';
import LoginSignUp from '../components/Authenticate/LoginSignUp';
import useAuth from '../hooks/useAuth';

const useStyles = createUseStyles({
	container: {},
});

const Helmet = () => {
	const classes = useStyles();
	const { displayModal } = useAuth();

	return (
		<div className={classes.container}>
			{displayModal && <LoginSignUp />}
			<Outlet />
		</div>
	);
};

export default Helmet;
