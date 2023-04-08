import React from 'react';
import Form from 'antd/lib/form';
import { createUseStyles } from 'react-jss';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import useAuthForm from '../../../hooks/useAuthForm';

const useStyles = createUseStyles({
	container: {},
});

const AuthForm = () => {
	const classes = useStyles();

	const { step } = useAuthForm();

	return (
		<div className={classes.container}>
			<Form>
				{step === 1 && <FormStep1 />}
				{step === 2 && <FormStep2 />}
				{step === 3 && <FormStep3 />}
			</Form>
		</div>
	);
};

export default AuthForm;
