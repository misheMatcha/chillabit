import React from 'react';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
import { createUseStyles } from 'react-jss';
import useAuthForm from '../../hooks/useAuthForm';
import axios from '../../utils/axios';

const useStyles = createUseStyles({
	container: {},
	step1: {
		display: (step) => (step === 1 ? 'block' : 'none'),
	},
	step2: {
		display: (step) => (step === 2 ? 'block' : 'none'),
	},
	step3: {
		display: (step) => (step === 3 ? 'block' : 'none'),
	},
});

const AuthForm = () => {
	const { isVerified, step, setStep } = useAuthForm();
	const classes = useStyles(step);

	const signUpUser = (values) => {
		let newUser = { user: { ...values } };
		axios
			.post('/users', newUser)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => console.log(err.response.data));
	};

	const loginUser = (values) => {
		axios
			.post('/login', { user: { ...values } })
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => console.log(err.response.data));
	};

	return (
		<div className={classes.container}>
			<Form
				initialValues={{
					age: '',
					email: '',
					gender: '',
					password: '',
					username: '',
				}}
				onFinish={(values) => {
					isVerified ? loginUser(values) : signUpUser(values);
				}}
			>
				<div className={classes.step1}>
					<Form.Item name='email'>
						<Input placeholder='Your email address or profile URL' />
					</Form.Item>
				</div>

				<div className={classes.step2}>
					<Form.Item name='password'>
						<Input
							placeholder='Your password'
							type='password'
						/>
					</Form.Item>
				</div>

				<div className={classes.step3}>
					<label>
						Choose your display name
						<Form.Item name='username'>
							<Input />
						</Form.Item>
						Your display name can be anything you like. Your name or artist name are good choices.
					</label>
					<label>
						Enter your age
						<Form.Item name='age'>
							<InputNumber />
						</Form.Item>
					</label>
					<label>
						Enter your gender
						<Form.Item name='gender'>
							<Input />
						</Form.Item>
					</label>
				</div>

				<Form.Item>
					<Button htmlType='submit'>Continue</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default AuthForm;
