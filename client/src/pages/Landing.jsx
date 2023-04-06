import React, { useContext } from 'react';
import { Button } from 'antd';
import { createUseStyles } from 'react-jss';
import AuthContext from '../context/AuthContext';

const useStyles = createUseStyles({
	container: {},
});

const Landing = () => {
	const classes = useStyles();

	const { auth, setAuth } = useContext(AuthContext);

	const openModal = () => {
		setAuth({ ...auth, displayModal: true });
	};

	return (
		<div className={classes.container}>
			<div>
				<Button onClick={openModal}>Sign in</Button>
				<Button onClick={openModal}>Create account</Button>
			</div>
		</div>
	);
};

export default Landing;
