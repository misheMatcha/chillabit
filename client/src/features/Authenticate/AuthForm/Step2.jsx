import React from 'react';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import size from 'lodash/size';
import { createUseStyles } from 'react-jss';
import FormButton from './FormButton';
import FormError from './FormError';
import StyledInput from './StyledInput';
import useAuth from '../../../hooks/useAuth';
import { styles } from '../../../utils/styles';

const { alignItemsCenter, displayFlex, flexDirection, width } = styles;

const useStyles = createUseStyles({
	backBtn: {
		'& > svg': {
			height: 25,
			paddingRight: 8,
		},
		'&:hover': {
			borderColor: '#ccc !important',
			color: '#333 !important',
		},
		...alignItemsCenter,
		...displayFlex,
		...width[100].percentage,
		backgroundColor: '#fff',
		borderColor: '#ccc',
		borderRadius: 5,
		color: '#333',
		fontSize: 18,
		height: 40,
		textAlign: 'left',
	},
	container: {
		'& > button': {
			marginBottom: 16,
		},
		'& > div:nth-child(2)': {
			marginBottom: ({ errors }) => (errors.message ? 0 : 16),
		},
		...displayFlex,
		...flexDirection.column,
		marginBottom: ({ isVerified }) => (isVerified ? 16 : 0),
	},
	formItem: {
		margin: 0,
	},
});

const Step2 = ({ form }) => {
	const { errors, setErrors, isVerified, setIsVerified, setStep } = useAuth();
	const classes = useStyles({ errors, isVerified });

	return (
		<div className={classes.container}>
			<Button
				className={classes.backBtn}
				onClick={() => {
					setIsVerified(false);
					setStep(1);
				}}
			>
				<FontAwesomeIcon icon={faCaretLeft} />
				<span>{form.getFieldValue('email')}</span>
			</Button>
			<div>
				<Form.Item
					className={classes.formItem}
					name='password'
				>
					<StyledInput
						isError={errors.message}
						placeholder='Your password'
						type='password'
					/>
				</Form.Item>
				{errors.message && <FormError isError={errors.message} />}
			</div>
			<Form.Item className={classes.formItem}>
				{isVerified ? (
					<FormButton htmlType='submit'>Sign in</FormButton>
				) : (
					<FormButton
						onClick={(e) => {
							e.preventDefault();
							const passwordLength = size(form.getFieldValue('password'));

							if (passwordLength < 8) {
								setErrors({ message: 'Password must be at least 8 characters' });
							} else if (passwordLength > 72) {
								setErrors({ message: 'Password must be less than 72 characters.' });
							} else {
								setStep(3);
							}
						}}
					>
						Accept & continue
					</FormButton>
				)}
			</Form.Item>
		</div>
	);
};

export default Step2;
