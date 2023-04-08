import React from 'react';
import Button from 'antd/lib/button';
import { createUseStyles } from 'react-jss';
import AuthFooter from './AuthFooter';
import AuthForm from './AuthForm';
import AuthHeader from './AuthHeader';
import useAuth from '../../hooks/useAuth';

const useStyles = createUseStyles({
	container: {},
});

const LoginSignUp = () => {
	const classes = useStyles();
	const { setDisplayModal } = useAuth();

	return (
		<div className={classes.container}>
			<div>
				<Button onClick={() => setDisplayModal(false)}>x</Button>
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
