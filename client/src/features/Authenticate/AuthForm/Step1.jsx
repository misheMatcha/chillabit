import React from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import * as cn from 'classnames';
import includes from 'lodash/includes';
import { createUseStyles } from 'react-jss';
import FormButton from './FormButton';
import useAuth from '../../../hooks/useAuth';
import axios from '../../../utils/axios';
import { styles } from '../../../utils/styles';

const { alignItemsCenter, displayFlex, flexDirection, justifyContent, height, width } = styles;

const useStyles = createUseStyles({
	container: {},
});

const Step1 = ({ form }) => {
	const classes = useStyles();
	const { errors, setErrors, setIsVerified, setStep } = useAuth();

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
				setErrors(err.response.data);
			});
	};

	return (
		<div className={classes.container}>
			<div className={classes.step1}>
				<Form.Item name='email'>
					<Input placeholder='Your email address or profile URL' />
				</Form.Item>
				{errors.message && <div>{errors.message}</div>}
			</div>
			<FormButton />
		</div>
	);
};

export default Step1;
