import React, { useContext, useState } from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import { createUseStyles } from 'react-jss';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import AuthFormContext from '../../../context/AuthFormContext';

const useStyles = createUseStyles({
	container: {},
});

const AuthForm = () => {
	const classes = useStyles();

	const { step } = useContext(AuthFormContext);

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
