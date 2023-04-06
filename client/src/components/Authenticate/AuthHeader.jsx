import React, { useContext } from 'react';
import { Button } from 'antd';
import { createUseStyles } from 'react-jss';
import AuthFormContext from '../../context/AuthFormContext';
import { CHILLABIT } from '../../utils/constants';

const useStyles = createUseStyles({
	container: {},
});

const LoginSignUp = ({ isReturningUser = false }) => {
	const classes = useStyles();

	const { step } = useContext(AuthFormContext);

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

			{step === 2 && (
				<>
					<div>Welcome back!</div>
					{isReturningUser && (
						<div>
							<div>We noticed that an account already exists for this email.</div>
							<div>Please sign in below</div>
						</div>
					)}
				</>
			)}

			{step === 3 && (
				<>
					<div>Create your {CHILLABIT} account</div>
				</>
			)}
		</div>
	);
};

export default LoginSignUp;
