import React from 'react';
import Button from 'antd/lib/button';
import { createUseStyles } from 'react-jss';
import AuthFooter from './AuthFooter';
import AuthForm from './AuthForm.jsx';
import AuthHeader from './AuthHeader';
import useAuth from '../../../hooks/useAuth';

const useStyles = createUseStyles({
	container: {},
});

const LoginSignUp = () => {
	const classes = useStyles();
	const { toggleModal } = useAuth();

	return (
		<div className={classes.container}>
			<div>
				<Button onClick={() => toggleModal()}>x</Button>
				<div>
					<AuthHeader />
					<AuthForm />
					<AuthFooter />
				</div>
			</div>
		</div>
	);
};

export default LoginSignUp;
