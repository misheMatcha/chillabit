import React from 'react';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import { createUseStyles } from 'react-jss';
import useAuthForm from '../../../hooks/useAuthForm';

const useStyles = createUseStyles({
	container: {},
});

const FormStep2 = () => {
	const classes = useStyles();

	const { email, isVerified, password, setPassword, setStep } = useAuthForm();

	return (
		<div className={classes.container}>
			<Input
				onClick={() => setStep(1)}
				value={email}
			/>
			<Form.Item name='password'>
				<Input
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Your password'
					value={password}
					type='password'
				/>
			</Form.Item>
			{isVerified ? (
				<Button onClick={() => console.log('submitted')}>Sign in</Button>
			) : (
				<Button onClick={() => setStep(3)}>Accept & continue</Button>
			)}
		</div>
	);
};

export default FormStep2;
