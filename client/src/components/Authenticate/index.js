import React, { useContext } from 'react';
import { Button } from 'antd';
import { createUseStyles } from 'react-jss';
import AuthFooter from './AuthFooter';
import AuthForm from './AuthForm';
import AuthHeader from './AuthHeader';
import AuthContext from '../../context/AuthContext';

const useStyles = createUseStyles({
	container: {},
});

const LoginSignUp = () => {
	const classes = useStyles();
	const { setDisplayModal } = useContext(AuthContext);

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
