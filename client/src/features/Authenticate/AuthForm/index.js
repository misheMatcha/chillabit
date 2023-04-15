import React, { useState } from 'react';
import Form from 'antd/lib/form';
import { createUseStyles } from 'react-jss';
import { useLocation, useNavigate } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import useAuth from '../../../hooks/useAuth';
import axios from '../../../utils/axios';

const useStyles = createUseStyles({
	container: {},
});

const AuthForm = () => {
	const [gender, setGender] = useState('');
	const [isCustomGender, setIsCustomGender] = useState(false);
	const { setDisplayModal, setErrors, step, isVerified, setToken, setUser } = useAuth();
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
