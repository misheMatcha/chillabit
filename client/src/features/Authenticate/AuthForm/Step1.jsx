import React, { useState } from 'react';
import Form from 'antd/lib/form';
import includes from 'lodash/includes';
import { createUseStyles } from 'react-jss';
import FormButton from './FormButton';
import StyledInput from './StyledInput';
import useAuth from '../../../hooks/useAuth';
import axios from '../../../utils/axios';
import { styles } from '../../../utils/styles';

const { displayFlex, flexDirection, justifyContent } = styles;

const useStyles = createUseStyles({
	container: {
		...displayFlex,
		...flexDirection.column,
		...justifyContent.spaceBetween,
		minHeight: 96,
	},
	error: {
		color: '#d61348',
		fontSize: 12,
		fontWeight: 500,
		margin: '6px 0 12px',
	},
	inputWrapper: {
		margin: 0,
	},
});

const Step1 = ({ form }) => {
	const classes = useStyles();
	const { errors, setErrors, setIsVerified, setStep } = useAuth();
	// const [loading, setLoading] = useState(true);

	const verifyHandle = async () => {
		const handle = form.getFieldValue('email');
		let handles = { user: { email: '', url: '' } };

		if (includes(handle, '@')) {
			handles.user.email = handle;
		} else {
			handles.user.url = handle;
		}

		try {
			const response = await axios.post('/authenticates/handle', handles);
			setIsVerified(response.data.isVerified);
			form.setFieldValue('email', response.data.email);
			setStep(2);
			setErrors({});
		} catch (err) {
			setErrors(err.response.data);
		}
	};

	return (
		<div className={classes.container}>
			{/* {`${loading}`} */}
			<div className={classes.step1}>
				<Form.Item
					className={classes.inputWrapper}
					name='email'
				>
					<StyledInput placeholder='Your email address or profile URL' />
				</Form.Item>
				{errors.message && <div className={classes.error}>{errors.message}</div>}
			</div>
			<FormButton onClick={verifyHandle}>Continue</FormButton>
		</div>
	);
};

export default Step1;
