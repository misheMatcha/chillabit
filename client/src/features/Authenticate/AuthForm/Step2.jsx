import React from 'react';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import size from 'lodash/size';
import { createUseStyles } from 'react-jss';
import FormButton from './FormButton';
import StyledInput from './StyledInput';
import useAuth from '../../../hooks/useAuth';
import { styles } from '../../../utils/styles';

const { alignItemsCenter, displayFlex, flexDirection, justifyContent, width } = styles;

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
		...displayFlex,
		...flexDirection.column,
		...justifyContent.spaceBetween,
		marginBottom: 16,
		minHeight: 152,
	},
	inputWrapper: {
		margin: 0,
	},
});

const Step2 = ({ form }) => {
	const classes = useStyles();
	const { errors, isVerified, setIsVerified, setStep } = useAuth();

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
			<div className={classes.step2}>
				<Form.Item
					className={classes.inputWrapper}
					name='password'
					rules={[
						{ message: 'Password must be at least 8 characters.', min: 8 },
						{ max: 72, message: 'Password must be less than 72 characters.' },
					]}
				>
					<StyledInput
						placeholder='Your password'
						type='password'
					/>
				</Form.Item>
				{errors.message && <div>{errors.message}</div>}
			</div>
			{isVerified ? (
				<FormButton htmlType='submit'>Sign in</FormButton>
			) : (
				<FormButton
					onClick={(e) => {
						e.preventDefault();
						const passwordLength = size(form.getFieldValue('password'));
						if (passwordLength >= 8 && passwordLength <= 72) setStep(3);
					}}
				>
					Accept & continue
				</FormButton>
			)}
		</div>
	);
};

export default Step2;
