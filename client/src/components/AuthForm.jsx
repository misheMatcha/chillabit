import React, { useContext } from 'react';
import { Button } from 'antd';
import { createUseStyles } from 'react-jss';
import AuthContext from '../context/AuthContext';

const useStyles = createUseStyles({
	container: {},
});

const AuthForm = () => {
	const classes = useStyles();

	const { auth, setAuth } = useContext(AuthContext);

	const closeModal = () => {
		setAuth({ ...auth, displayModal: false });
	};

	return (
		<div className={classes.container}>
			<div>
				<Button onClick={closeModal}>x</Button>
			</div>
		</div>
	);
};

export default AuthForm;
