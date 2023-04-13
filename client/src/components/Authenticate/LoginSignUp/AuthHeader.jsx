import React, { useEffect } from 'react';
import Button from 'antd/lib/button';
import * as cn from 'classnames';
import { createUseStyles } from 'react-jss';
import useAuth from '../../../hooks/useAuth';
import { CHILLABIT } from '../../../utils/constants';
import { styles } from '../../../utils/styles';

const { displayFlex, flexDirection, justifyContent } = styles;

const useStyles = createUseStyles({
	apple: {
		backgroundColor: '#000',
		borderColor: '#000',
		color: '#fff',
	},
	btn: {
		borderRadius: 4,
		fontSize: 16,
		fontWeight: 500,
		height: 40,
	},
	container: {
		'& p': {
			marginBottom: 6,
		},
		fontSize: 14,
		fontWeight: 500,
	},
	facebook: {
		backgroundColor: '#3578e5',
		borderColor: '#3578e5',
		color: '#fff',
	},
	google: {
		backgroundColor: '#fff',
		borderColor: '#ccc',
		color: '#222',
	},
	providerBtns: {
		...displayFlex,
		...flexDirection.column,
		...justifyContent.spaceBetween,
		height: 150,
	},
	seperator: {
		'& span': {
			padding: '0 16px',
		},
		'&:after': {
			borderTop: '1px solid #333',
			content: "''",
			display: 'inline-block',
			height: 4,
			width: '43%',
		},
		'&:before': {
			borderTop: '1px solid #333',
			content: "''",
			display: 'inline-block',
			height: 4,
			width: '43%',
		},
		fontSize: 16,
		margin: '16px 0',
		textAlign: 'center',
	},
	title: {
		fontSize: 32,
		fontWeight: 600,
		marginBottom: '1em',
		textAlign: 'center',
	},
});

const LoginSignUp = () => {
	const classes = useStyles();

	const { clickedSignUp, isVerified, step } = useAuth();

	useEffect(() => {}, [step]);

	return (
		<div className={classes.container}>
			{step === 1 && (
				<div>
					<div className={classes.providerBtns}>
						<Button
							onClick={() => console.log('facbook api')}
							className={cn(classes.btn, classes.facebook)}
						>
							Continue with Facebook
						</Button>
						<Button
							onClick={() => console.log('google api')}
							className={cn(classes.btn, classes.google)}
						>
							Continue with Google
						</Button>
						<Button
							onClick={() => console.log('apple api')}
							className={cn(classes.btn, classes.apple)}
						>
							Continue with Apple
						</Button>
					</div>
					<div className={classes.seperator}>
						<span>or</span>
					</div>
				</div>
			)}

			{step === 2 && isVerified && (
				<div>
					<div className={classes.title}>Welcome back!</div>
					{clickedSignUp && (
						<p>
							<div>We noticed that an account already exists for this email.</div>
							<div>Please sign in below</div>
						</p>
					)}
				</div>
			)}

			{step > 1 && !isVerified && (
				<div className={classes.title}>Create your {CHILLABIT} account</div>
			)}
		</div>
	);
};

export default LoginSignUp;
