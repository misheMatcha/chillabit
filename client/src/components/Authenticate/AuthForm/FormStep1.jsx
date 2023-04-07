import React, { useContext } from 'react';
import { Button, Form, Input } from 'antd';
import { createUseStyles } from 'react-jss';
import AuthFormContext from '../../../context/AuthFormContext';

const useStyles = createUseStyles({
	container: {},
});

const FormStep1 = () => {
	const classes = useStyles();

	const { email, setEmail, setStep } = useContext(AuthFormContext);

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
