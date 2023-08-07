import React, { useEffect } from 'react';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import * as cn from 'classnames';
import size from 'lodash/size';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import FormButton from './FormButton';
import Header from './Header';
import { FormInput, Steps } from '../../../components/form';
import useAuthForm from '../../../hooks/useAuthForm';
import useSteps from '../../../hooks/useSteps';
import { CHILLABIT } from '../../../utils/constants';
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
	spacing: {
		margin: 0,
	},
	verifiedSpacing: {
		marginBottom: spacing[2],
	},
}));

const Step2 = ({ clickedCreate, isVerified }) => {
	const theme = useTheme();
	const { step } = useAuthForm();
	const { nextStep, prevStep } = useSteps();
	const classes = useStyles({ isVerified, step, theme });
	const form = Form.useFormInstance();

	return (
		<Steps.Step step={2}>
			<Header>
				{isVerified ? (
					<div>
						<div className={classes.title}>Welcome back!</div>
						{clickedCreate && (
							<div className={classes.returningUser}>
								<div>We noticed that an account already exists for this email.</div>
								<div>Please sign in below</div>
							</div>
						)}
					</div>
				) : (
					<div className={classes.title}>Create your {CHILLABIT} account</div>
				)}
			</Header>
			<div
				className={cn(classes.container, {
					[`${classes.verifiedSpacing}`]: isVerified,
				})}
			>
				<Button
					className={classes.backBtn}
					onClick={() => {
						prevStep();
						form.setFieldValue('password', '');
					}}
				>
					<FontAwesomeIcon icon={faCaretLeft} />
					<span>{form.getFieldValue('email')}</span>
				</Button>
				<div>
					<FormInput
						formConfig={{
							name: 'password',
						}}
						large
						placeholder='Your password'
						type='password'
					/>
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
									// updateFormErrors({ message: 'Password must be at least 8 characters' });
								} else if (passwordLength > 72) {
									// updateFormErrors({ message: 'Password must be less than 72 characters.' });
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
			<Footer>
				{isVerified ? (
					<div className={classes.passwordReset}>
						<Link className={classes.link}>Don't know your password?</Link>
					</div>
				) : (
					<>
						<div className={classes.helpLinkWrapper}>
							<Link className={classes.link}>Need help?</Link>
						</div>
						<p className={classes.content}>
							<span>
								When registering, you agree that we may use your provided data for the registration
								and to send you notifications on our products and services. You can unsubscribe from
								notifications at any time in your settings. For additional info please refer to our
								<Link className={classes.link}>Privacy Policy</Link>.
							</span>
						</p>
						<div className={classes.moreInfo}>
							<div>Are you trying to sign in?</div>
							<div>The email address that you entered was not found.</div>
							<div>Double-check your email address.</div>
						</div>
					</>
				)}
			</Footer>
		</Steps.Step>
	);
};

export default Step2;
