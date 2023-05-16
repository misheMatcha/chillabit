import React from 'react';
import Form from 'antd/lib/form';
import pick from 'lodash/pick';
import { createUseStyles } from 'react-jss';
import { useLocation, useNavigate } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import useAuth from '../../../hooks/useAuth';
import useAuthForm from '../../../hooks/useAuthForm';
import useModal from '../../../hooks/useModal';
import axios from '../../../utils/axios';
import { styles } from '../../../utils/styles';

const { width } = styles;

const useStyles = createUseStyles({
	container: { ...width[100].percentage },
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

const initialValues = {
	age: '',
	email: '',
	gender: '',
	password: '',
	username: '',
};

const AuthForm = () => {
	const { loginSetup } = useAuth();
	const { gender, step, isCustomGender, isVerified, updateFormErrors } = useAuthForm();
	const { closeModal } = useModal();
	const classes = useStyles(step);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from?.pathname || '/discover';
	const [form] = Form.useForm();

	const signUpUser = async (values) => {
		try {
			const response = await axios.post('/users', {
				user: { ...values, gender: isCustomGender ? gender : values.gender },
			});

			loginSetup(response.data);
			closeModal();
			navigate(from, { replace: true });
		} catch (err) {
			updateFormErrors(err.response.data);
		}
	};

	const loginUser = async (values) => {
		try {
			const response = await axios.post('/login', {
				user: pick(values, ['email', 'password']),
			});

			loginSetup(response.data);
			closeModal();
			navigate(from, { replace: true });
		} catch (err) {
			updateFormErrors(err.response.data);
		}
	};

	return (
		<Form
			className={classes.container}
			form={form}
			initialValues={initialValues}
			onFinish={(values) => {
				isVerified ? loginUser(values) : signUpUser(values);
			}}
		>
			<Step1 />
			<Step2 />
			<Step3 />
		</Form>
	);
};

export default AuthForm;
