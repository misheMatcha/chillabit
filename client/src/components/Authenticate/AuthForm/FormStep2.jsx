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

	const { password, step, setPassword, setStep } = useAuthForm();

	return (
		<div className={classes.container}>
			<Form.Item name='password'>
				<Input
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Your password'
					value={password}
					type='password'
				/>
			</Form.Item>
			<Button>Sign in</Button>
		</div>
	);
};

export default FormStep2;
