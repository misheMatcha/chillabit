import React from 'react';
import { createUseStyles } from 'react-jss';
import useAuthForm from '../../hooks/useAuthForm';

const useStyles = createUseStyles({
	container: {},
});

const AuthFooter = () => {
	const classes = useStyles();

	const { step, isVerified } = useAuthForm();

	return (
		<div className={classes.container}>
			{step === 1 && (
				<div>
					<div>Need help?</div>
					<div>
						When registering, you agree that we may use your provided data for the registration and
						to send you notifications on our products and services. You can unsubscribe from
						notifications at any time in your settings. For additional info please refer to our
						Privacy Policy.
					</div>
				</div>
			)}

			{isVerified && <div>Don't know your password?</div>}

			{!isVerified && step === 2 && (
				<div>
					<div>Need help?</div>
					<div>
						When registering, you agree that we may use your provided data for the registration and
						to send you notifications on our products and services. You can unsubscribe from
						notifications at any time in your settings. For additional info please refer to our
						Privacy Policy.
					</div>
					<div>Are you trying to sign in?</div>
					<div>The email address that you entered was not found.</div>
					<div>Double-check your email address.</div>
				</div>
			)}

			{step === 3 && (
				<div>
					<div>
						By signing up I accept the Terms of Use. I have read and understood the Privacy Policy
						and Cookies Policy.
					</div>
				</div>
			)}
		</div>
	);
};

export default AuthFooter;
