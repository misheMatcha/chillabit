import React, { useContext, useState } from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import { createUseStyles } from 'react-jss';
import AuthFormContext from '../../../context/AuthFormContext';

const useStyles = createUseStyles({
	container: {},
});

const AuthForm = () => {
	const classes = useStyles();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [age, setAge] = useState('');
	const [gender, setGender] = useState('');

	const { step } = useContext(AuthFormContext);

	return (
		<div className={classes.container}>
			<Form>
				<Form.Item name='email'>
					<Input
						onChange={(e) => setEmail(e.target.value)}
						placeholder='Your email address or profile URL'
						value={email}
					/>
				</Form.Item>
				<Form.Item name='password'>
					<Input
						onChange={(e) => setPassword(e.target.value)}
						placeholder='Your password'
						value={password}
						type='password'
					/>
				</Form.Item>
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
			</Form>
		</div>
	);
};

export default AuthForm;
