import React, { useContext, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { createUseStyles } from 'react-jss';
import AuthFooter from './AuthFooter';
import AuthHeader from './AuthHeader';
import TheForm from './theForm';
import AuthContext from '../context/AuthContext';
import { AuthFormProvider } from '../context/AuthFormContext';

const useStyles = createUseStyles({
	container: {},
});

const AuthForm = () => {
	const classes = useStyles();

	const [emailOrUrl, setEmailOrUrl] = useState('');
	const [password, setPassword] = useState('');
	const [step, setStep] = useState(1);

	const { auth, setAuth } = useContext(AuthContext);

	const closeModal = () => {
		setAuth({ ...auth, displayModal: false });
	};

	return (
		<AuthFormProvider>
			<div className={classes.container}>
				<div>
					<Button onClick={closeModal}>x</Button>
					<div>
						<AuthHeader />
						<TheForm />
						<AuthFooter />
					</div>
				</div>
			</div>
		</AuthFormProvider>
	);
};

export default AuthForm;
