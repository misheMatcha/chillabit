import React, { useContext } from 'react';
import { Button, Form, Input } from 'antd';
import { createUseStyles } from 'react-jss';
import AuthFormContext from '../../../context/AuthFormContext';

const useStyles = createUseStyles({
	container: {},
});

const FormStep2 = () => {
	const classes = useStyles();

	const { password, step, setPassword, setStep } = useContext(AuthFormContext);

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
