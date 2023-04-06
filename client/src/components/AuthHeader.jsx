import React, { useContext } from 'react';
import { Button } from 'antd';
import { createUseStyles } from 'react-jss';
import AuthFormContext from '../context/AuthFormContext';
import { CHILLABIT } from '../utils/constants';

const useStyles = createUseStyles({
	container: {},
});

const AuthHeader = ({ isReturningUser = false }) => {
	const classes = useStyles();

	const { stage } = useContext(AuthFormContext);

	return (
		<div className={classes.container}>
			{stage === 1 && (
				<>
					<Button>Continue with Facebook</Button>
					<Button>Continue with Google</Button>
					<Button>Continue with Apple</Button>
					<div>or</div>
				</>
			)}

			{stage === 2 && (
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

			{stage === 3 && (
				<>
					<div>Create your {CHILLABIT} account</div>
				</>
			)}
		</div>
	);
};

export default AuthHeader;
