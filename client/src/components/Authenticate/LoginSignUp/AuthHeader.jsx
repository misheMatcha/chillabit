import React, { useEffect } from 'react';
import Button from 'antd/lib/button';
import { createUseStyles } from 'react-jss';
import useAuth from '../../../hooks/useAuth';
import { CHILLABIT } from '../../../utils/constants';

const useStyles = createUseStyles({
	container: {},
});

const LoginSignUp = () => {
	const classes = useStyles();

	const { clickedSignUp, isVerified, step } = useAuth();

	useEffect(() => {}, [step]);

	return (
		<div className={classes.container}>
			{step === 1 && (
				<>
					<Button>Continue with Facebook</Button>
					<Button>Continue with Google</Button>
					<Button>Continue with Apple</Button>
					<div>or</div>
				</>
			)}

			{step === 2 && isVerified && (
				<>
					<div>Welcome back!</div>
					{clickedSignUp && (
						<div>
							<div>We noticed that an account already exists for this email.</div>
							<div>Please sign in below</div>
						</div>
					)}
				</>
			)}

			{step > 1 && !isVerified && <div>Create your {CHILLABIT} account</div>}
		</div>
	);
};

export default LoginSignUp;
