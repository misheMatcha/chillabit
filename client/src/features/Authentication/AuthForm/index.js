import React, { useState } from 'react';
import Form from 'antd/lib/form';
import pick from 'lodash/pick';
import { createUseStyles } from 'react-jss';
import { useLocation, useNavigate } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { Steps } from '../../../components/form';
import useAuth from '../../../hooks/useAuth';
import useModal from '../../../hooks/useModal';
import { loginUser, registerUser } from '../../../utils/apis';
import { errorsObjToArr } from '../../../utils/general';
import { styles } from '../../../utils/styles';

const { alignItems, displayFlex, flexDirection, justifyContent, spacing, typography, width } =
	styles;

const useStyles = createUseStyles({
	container: {
		...displayFlex,
		...alignItems.center,
		...justifyContent.center,
		minHeight: 400,
	},
});

const initialValues = {
	age: '',
	email: '',
	gender: '',
	password: '',
	username: '',
};

const AuthForm = ({ clickedRegister = false }) => {
	const [isVerified, setIsVerified] = useState(false);
	const { loginSetup } = useAuth();
	const { closeModal } = useModal();
	const classes = useStyles();

	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from?.pathname || '/discover';
	const [form] = Form.useForm();

	const register = async (values) => {
		const user = { user: { ...values } };
		if (values.customGender !== '') user.gender = values.customGender;

		try {
			const response = await registerUser(user);
			loginSetup(response.data);
			closeModal();
			navigate(from, { replace: true });
		} catch (err) {
			form.setFields(errorsObjToArr(err.response.data));
		}
	};

	const login = async (values) => {
		const user = { user: pick(values, ['email', 'password']) };
		try {
			const response = await loginUser(user);
			loginSetup(response.data);
			closeModal();
			navigate(from, { replace: true });
		} catch (err) {
			form.setFields(errorsObjToArr(err.response.data));
		}
	};

	return (
		<Steps.Wrapper>
			<Form
				className={classes.container}
				form={form}
				initialValues={initialValues}
				onFinish={(values) => {
					isVerified ? login(values) : register(values);
				}}
			>
				<Step1 updateVerification={setIsVerified} />
				<Step2
					isVerified={isVerified}
					clickedRegister={clickedRegister}
				/>
				<Step3 />
			</Form>
		</Steps.Wrapper>
	);
};

export default AuthForm;
