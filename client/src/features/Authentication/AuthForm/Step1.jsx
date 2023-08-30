import React from 'react';
import Form from 'antd/lib/form';
import * as cn from 'classnames';
import includes from 'lodash/includes';
import { createUseStyles } from 'react-jss';
import Footer from './Footer';
import FormButton from './FormButton';
import Header from './Header';
import { FormInput, Steps } from '../../../components/form';
import { StyledLink } from '../../../components/ui';
import useSteps from '../../../hooks/useSteps';
import { verifyHandle } from '../../../utils/apis';
import { CHILLABIT } from '../../../utils/constants';
import { errorsObjToArr } from '../../../utils/general';
import { styles } from '../../../utils/styles';
const { displayFlex, flexDirection, justifyContent } = styles;

const useStyles = createUseStyles({
	container: {},
	help: {
		margin: '14px 0 10px',
		textAlign: 'right',
	},
	privacy: {
		marginLeft: 4,
	},
});

const Step1 = ({ updateVerification = () => {} }) => {
	const classes = useStyles();
	const { nextStep } = useSteps();
	const form = Form.useFormInstance();

	const checkHandle = async (e) => {
		e.preventDefault();
		const handle = form.getFieldValue('email');
		let handles = { user: { email: '', url: '' } };

		if (includes(handle, '@')) {
			handles.user.email = handle;
		} else {
			handles.user.url = handle;
		}

		try {
			const response = await verifyHandle(handles);
			form.setFieldValue('email', response.data.email);
			updateVerification(response.data.isVerified);
			nextStep();
		} catch (err) {
			form.setFields(errorsObjToArr(err.response.data));
		}
	};

	return (
		<Steps.Step step={1}>
			<Header>Sign into {CHILLABIT}</Header>
			<FormInput
				formConfig={{
					name: 'email',
				}}
				large
				onPressEnter={checkHandle}
				placeholder='Your email address or profile URL'
			/>
			<FormButton onClick={checkHandle}>Continue</FormButton>
			<Footer>
				<div className={classes.help}>
					<StyledLink small>Need help?</StyledLink>
				</div>
				<span>
					When registering, you agree that we may use your provided data for the registration and to
					send you notifications on our products and services. You can unsubscribe from
					notifications at any time in your settings. For additional info please refer to our
					<StyledLink
						styles={classes.privacy}
						small
					>
						Privacy Policy
					</StyledLink>
					.
				</span>
			</Footer>
		</Steps.Step>
	);
};

export default Step1;
