import React, { useState } from 'react';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
import includes from 'lodash/includes';
import { createUseStyles } from 'react-jss';
import useAuth from '../../hooks/useAuth';
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
	const [step, setStep] = useState(1);
	const [errors, setErrors] = useState({});
	const { isVerified } = useAuth();
	const classes = useStyles(step);

	const [form] = Form.useForm();

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

	const verifyHandle = () => {
		setErrors({});
		const handle = form.getFieldValue('email');
		let handles = { user: { email: '', url: '' } };

		if (includes(handle, '@')) {
			handles.user.email = handle;
		} else {
			handles.user.url = handle;
		}

		axios
			.post('/authenticates/handle', handles)
			.then((res) => {
				setStep(2);
				console.log(res.data);
			})
			.catch((err) => {
				setErrors({ ...err.response.data });
			});
	};

	return (
		<div className={classes.container}>
			<Form
				form={form}
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
					{errors.message && <div>{errors.message}</div>}
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
					{step === 1 && <Button onClick={verifyHandle}>next step</Button>}
					<Button htmlType='submit'>Continue</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default AuthForm;
