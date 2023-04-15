import React from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import includes from 'lodash/includes';
import { createUseStyles } from 'react-jss';
import FormButton from './FormButton';
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
	input: {
		'&:focus': {
			borderColor: '#ccc',
			boxShadow: 'none',
		},
		'&:hover': {
			borderColor: '#ccc',
		},
		backgroundColor: '#fff',
		borderColor: '#ccc',
		borderRadius: 5,
		color: '#333',
		fontSize: 18,
		height: 40,
	},
	inputWrapper: {
		margin: 0,
	},
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
				<Form.Item
					className={classes.inputWrapper}
					name='email'
				>
					<Input
						className={classes.input}
						placeholder='Your email address or profile URL'
					/>
				</Form.Item>
				{errors.message && <div className={classes.error}>{errors.message}</div>}
			</div>
			<FormButton />
		</div>
	);
};

export default Step1;
