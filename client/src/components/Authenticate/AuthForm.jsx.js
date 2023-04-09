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
	const { isVerified, setIsVerified, setToken, setUser } = useAuth();
	const classes = useStyles(step);

	const [form] = Form.useForm();

	const signUpUser = (values) => {
		axios
			.post('/users', { user: { ...values } })
			.then((res) => {
				console.log(res.data);
				setUser(res.data.user);
				setToken(res.data.token);
			})
			.catch((err) => setErrors(...err.response.data));
	};

	const loginUser = (values) => {
		axios
			.post('/login', { user: { email: values.email, password: values.password } })
			.then((res) => {
				setUser(res.data.user);
				setToken(res.data.token);
			})
			.catch((err) => setErrors(err.response.data));
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
				setIsVerified(res.data.isVerified);
				form.setFieldValue('email', res.data.email);
				setStep(2);
			})
			.catch((err) => {
				setErrors({ ...err.response.data });
			});
	};

	const formButton = () => {
		switch (step) {
			case 1:
				return <Button onClick={verifyHandle}>Continue</Button>;
			case 2:
				return isVerified ? (
					<Button htmlType='submit'>Sign in</Button>
				) : (
					<Button
						onClick={(e) => {
							e.preventDefault();
							setStep(3);
						}}
					>
						Accept & continue
					</Button>
				);
			default:
				return <Button htmlType='submit'>Continue</Button>;
		}
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
					<Input value={form.getFieldValue('email')} />
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

				<Form.Item>{formButton()}</Form.Item>
			</Form>
		</div>
	);
};

export default AuthForm;
