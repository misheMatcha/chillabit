import React from 'react';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import { createUseStyles } from 'react-jss';
import useAuthForm from '../../../hooks/useAuthForm';

const useStyles = createUseStyles({
	container: {},
});

const FormStep1 = () => {
	const classes = useStyles();

	const { email, setEmail, setStep } = useAuthForm();

	return (
		<div className={classes.container}>
			<Form.Item name='email'>
				<Input
					onChange={(e) => setEmail(e.target.value)}
					placeholder='Your email address or profile URL'
					value={email}
				/>
			</Form.Item>
			<Button onClick={() => setStep(2)}>Continue</Button>
		</div>
	);
};

export default FormStep1;
