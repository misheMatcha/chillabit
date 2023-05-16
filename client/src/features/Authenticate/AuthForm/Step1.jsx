import React from 'react';
import Form from 'antd/lib/form';
import * as cn from 'classnames';
import includes from 'lodash/includes';
import { createUseStyles } from 'react-jss';
import FormButton from './FormButton';
import StyledInput from '../../../components/General/StyledInput';
import useAuthForm from '../../../hooks/useAuthForm';
import axios from '../../../utils/axios';
import { styles } from '../../../utils/styles';

const { displayFlex, flexDirection, justifyContent } = styles;

const useStyles = createUseStyles({
	container: {
		...displayFlex,
		...flexDirection.column,
		...justifyContent.spaceBetween,
	},
	hidden: {
		display: 'none',
	},
	spacing: {
		margin: 0,
	},
});

const Step1 = () => {
	const { errors, nextStep, setIsVerified, step, updateFormErrors } = useAuthForm();
	const classes = useStyles({ step });
	const form = Form.useFormInstance();

	const verifyHandle = async () => {
		const handle = form.getFieldValue('email');
		let handles = { user: { email: '', url: '' } };

		if (includes(handle, '@')) {
			handles.user.email = handle;
		} else {
			handles.user.url = handle;
		}

		try {
			const response = await axios.post('/verify_handle', handles);
			setIsVerified(response.data.isVerified);
			form.setFieldValue('email', response.data.email);
			nextStep();
			updateFormErrors({});
		} catch (err) {
			updateFormErrors(err.response.data);
		}
	};

	return (
		<div
			className={cn(classes.container, {
				[`${classes.hidden}`]: step !== 1,
			})}
		>
			<div>
				<Form.Item
					className={cn({ [`${classes.spacing}`]: errors.message })}
					name='email'
				>
					<StyledInput
						error={errors.message}
						placeholder='Your email address or profile URL'
					/>
				</Form.Item>
			</div>
			<FormButton onClick={verifyHandle}>Continue</FormButton>
		</div>
	);
};

export default Step1;
