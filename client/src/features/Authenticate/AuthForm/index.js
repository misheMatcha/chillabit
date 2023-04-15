import React, { useState } from 'react';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
import Select from 'antd/lib/select';
import includes from 'lodash/includes';
import size from 'lodash/size';
import { createUseStyles } from 'react-jss';
import { useLocation, useNavigate } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import useAuth from '../../../hooks/useAuth';
import axios from '../../../utils/axios';

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
	const [errors, setErrors] = useState({});
	const [gender, setGender] = useState('');
	const [isCustomGender, setIsCustomGender] = useState(false);
	const { setDisplayModal, setStep, step, isVerified, setIsVerified, setToken, setUser, user } =
		useAuth();
	const classes = useStyles(step);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from?.pathname || '/home';
	const [form] = Form.useForm();

	const signUpUser = (values) => {
		axios
			.post('/users', { user: { ...values, gender: isCustomGender ? gender : values.gender } })
			.then((res) => {
				setUser(res.data.user);
				setToken(res.data.token);
				setDisplayModal(false);
				navigate(from, { replace: true });
			})
			.catch((err) => {
				setErrors(err.response.data);
			});
	};

	const loginUser = (values) => {
		axios
			.post('/login', { user: { email: values.email, password: values.password } })
			.then((res) => {
				setUser(res.data.user);
				setToken(res.data.token);
				setDisplayModal(false);
				navigate(from, { replace: true });
			})
			.catch((err) => {
				setErrors(err.response.data);
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
				{step === 1 && <Step1 form={{ form }} />}
				{step === 2 && <Step2 form={{ form }} />}
				{step === 3 && <Step3 form={{ form }} />}
			</Form>
		</div>
	);
};

export default AuthForm;
