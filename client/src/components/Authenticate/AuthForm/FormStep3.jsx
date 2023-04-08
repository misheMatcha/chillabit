import React from 'react';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
import { createUseStyles } from 'react-jss';
import useAuthForm from '../../../hooks/useAuthForm';

const useStyles = createUseStyles({
	container: {},
});

const FormStep3 = () => {
	const classes = useStyles();

	const { age, gender, step, setAge, setGender, setStep, setUsername, username } = useAuthForm();

	return (
		<div className={classes.container}>
			<label>
				Choose your display name
				<Form.Item name='username'>
					<Input
						onChange={(e) => setUsername(e.target.value)}
						value={username}
					/>
				</Form.Item>
				Your display name can be anything you like. Your name or artist name are good choices.
			</label>
			<label>
				Enter your age
				<Form.Item name='age'>
					<InputNumber
						onChange={(e) => setAge(e.target.value)}
						value={age}
					/>
				</Form.Item>
			</label>
			<label>
				Enter your gender
				<Form.Item name='gender'>
					<Input
						onChange={(e) => setGender(e.target.value)}
						value={gender}
					/>
				</Form.Item>
			</label>
		</div>
	);
};

export default FormStep3;
