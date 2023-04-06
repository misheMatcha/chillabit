import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import AuthFormContext from '../context/AuthFormContext';

const useStyles = createUseStyles({
	container: {},
});

const AuthFooter = () => {
	const classes = useStyles();

	const { isVerified, stage } = useContext(AuthFormContext);

	return (
		<div className={classes.container}>
			{stage === 1 && (
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

			{stage === 2 && <div>Don't know your password?</div>}

			{stage === 2 && !isVerified && (
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
		</div>
	);
};

export default AuthFooter;
