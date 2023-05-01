import React, { useEffect } from 'react';
// import Button from 'antd/lib/button';
// import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import useAuth from '../../../hooks/useAuth';
import { CHILLABIT } from '../../../utils/constants';
import { styles } from '../../../utils/styles';

const { spacing, textAlign, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	// apple: {
	// 	'&:hover': {
	// 		borderColor: `${theme.color.black} !important`,
	// 		color: `${theme.color.white} !important`,
	// 	},
	// 	backgroundColor: theme.color.black,
	// 	borderColor: theme.color.black,
	// 	color: theme.color.white,
	// },
	// btn: {
	// 	...typography.body,
	// 	borderRadius: spacing['0_5'],
	// 	height: spacing[5],
	// },
	container: {
		'& p': {
			marginBottom: spacing['0_7'],
		},
		...typography.captions,
	},
	// facebook: {
	// 	'&:hover': {
	// 		borderColor: '#3578e5 !important',
	// 		color: `${theme.color.white} !important`,
	// 	},
	// 	backgroundColor: '#3578e5',
	// 	borderColor: '#3578e5',
	// 	color: theme.color.white,
	// },
	// google: {
	// 	'&:hover': {
	// 		borderColor: '#ccc !important',
	// 		color: '#222 !important',
	// 	},
	// 	backgroundColor: theme.color.white,
	// 	borderColor: '#ccc',
	// 	color: '#222',
	// },
	// providerBtns: {
	// 	...displayFlex,
	// 	...flexDirection.column,
	// 	...justifyContent.spaceBetween,
	// 	height: 148,
	// },
	// seperator: {
	// 	'& span': {
	// 		padding: `0 ${spacing[2]}px`,
	// 	},
	// 	'&:after, &:before': {
	// 		borderTop: '1px solid #333',
	// 		content: "''",
	// 		display: 'inline-block',
	// 		height: spacing['0_5'],
	// 		width: '44%',
	// 	},
	// 	...textAlign.center,
	// 	...typography.body,
	// 	margin: `${spacing[2]}px 0`,
	// },
	title: {
		...textAlign.center,
		...typography.h1,
		fontWeight: weight[600],
		marginBottom: '1em',
	},
}));

// Commenting out provider buttons code, TBD if will be implemented later

const Header = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	const { clickedSignUp, isVerified, step } = useAuth();

	useEffect(() => {}, [step]);

	return (
		<div className={classes.container}>
			{step === 1 && (
				<div>
					<div className={classes.title}>Sign into {CHILLABIT}</div>
				</div>
				// <div>
				// 	<div className={classes.providerBtns}>
				// 		<Button
				// 			onClick={() => console.log('facbook api')}
				// 			className={cn(classes.btn, classes.facebook)}
				// 		>
				// 			Continue with Facebook
				// 		</Button>
				// 		<Button
				// 			onClick={() => console.log('google api')}
				// 			className={cn(classes.btn, classes.google)}
				// 		>
				// 			Continue with Google
				// 		</Button>
				// 		<Button
				// 			onClick={() => console.log('apple api')}
				// 			className={cn(classes.btn, classes.apple)}
				// 		>
				// 			Continue with Apple
				// 		</Button>
				// 	</div>
				// 	<div className={classes.seperator}>
				// 		<span>or</span>
				// 	</div>
				// </div>
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

export default Header;
