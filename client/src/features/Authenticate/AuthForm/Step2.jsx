import React from 'react';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import * as cn from 'classnames';
import size from 'lodash/size';
import { createUseStyles, useTheme } from 'react-jss';
import FormButton from './FormButton';
import StyledInput from '../../../components/General/StyledInput';
import useAuthForm from '../../../hooks/useAuthForm';
import { styles } from '../../../utils/styles';

const { alignItems, displayFlex, flexDirection, spacing, textAlign, typography, width } = styles;

const useStyles = createUseStyles((theme) => ({
	backBtn: {
		'& > svg': {
			height: spacing[3],
			paddingRight: spacing[1],
		},
		'&:hover': {
			borderColor: '#ccc !important',
			color: '#333 !important',
		},
		...alignItems.center,
		...displayFlex,
		...typography.body,
		...width[100].percentage,
		backgroundColor: theme.color.white,
		borderColor: '#ccc',
		borderRadius: spacing['0_5'],
		color: '#333',
		height: spacing[5],
		textAlign: textAlign.left,
	},
	container: {
		'& > button': {
			marginBottom: spacing[2],
		},
		'& > div:nth-child(2)': {
			marginBottom: spacing[2],
		},
		...displayFlex,
		...flexDirection.column,
		marginBottom: 0,
	},
	errorSpacing: {
		'& > div:nth-child(2)': {
			marginBottom: 0,
		},
	},
	hidden: {
		display: 'none',
	},
	spacing: {
		margin: 0,
	},
	verifiedSpacing: {
		marginBottom: spacing[2],
	},
}));

const Step2 = () => {
	const theme = useTheme();
	const { errors, isVerified, nextStep, prevStep, setIsVerified, step, updateFormErrors } =
		useAuthForm();
	const classes = useStyles({ errors, isVerified, step, theme });
	const form = Form.useFormInstance();

	return (
		<div
			className={cn(classes.container, {
				[`${classes.hidden}`]: step !== 2,
				[`${classes.errorSpacing}`]: errors.message,
				[`${classes.verifiedSpacing}`]: isVerified,
			})}
		>
			<Button
				className={classes.backBtn}
				onClick={() => {
					setIsVerified(false);
					prevStep();
					form.setFieldValue('password', '');
					updateFormErrors({});
				}}
			>
				<FontAwesomeIcon icon={faCaretLeft} />
				<span>{form.getFieldValue('email')}</span>
			</Button>
			<div>
				<Form.Item
					className={classes.spacing}
					name='password'
				>
					<StyledInput
						error={errors.message}
						placeholder='Your password'
						type='password'
					/>
				</Form.Item>
			</div>
			<Form.Item className={classes.spacing}>
				{isVerified ? (
					<FormButton htmlType='submit'>Sign in</FormButton>
				) : (
					<FormButton
						onClick={(e) => {
							e.preventDefault();
							const passwordLength = size(form.getFieldValue('password'));

							if (passwordLength < 8) {
								updateFormErrors({ message: 'Password must be at least 8 characters' });
							} else if (passwordLength > 72) {
								updateFormErrors({ message: 'Password must be less than 72 characters.' });
							} else {
								nextStep();
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
