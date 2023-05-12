import React, { useEffect } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import useAuthForm from '../../../hooks/useAuthForm';
import { CHILLABIT } from '../../../utils/constants';
import { styles } from '../../../utils/styles';

const { spacing, textAlign, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	apple: {
		'&:hover': {
			borderColor: `${theme.color.black} !important`,
			color: `${theme.color.white} !important`,
		},
		backgroundColor: theme.color.black,
		borderColor: theme.color.black,
		color: theme.color.white,
	},
	btn: {
		...typography.body,
		borderRadius: spacing['0_5'],
		height: spacing[5],
	},
	container: {
		'& p': {
			marginBottom: spacing['0_7'],
		},
		...typography.captions,
	},
	returningUser: {
		marginBottom: 8,
	},
	title: {
		...textAlign.center,
		...typography.h1,
		fontWeight: weight[600],
		marginBottom: '1em',
	},
}));

const Header = ({ newUser }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	const { isVerified, step } = useAuthForm();

	useEffect(() => {}, [step]);

	return (
		<div className={classes.container}>
			{step === 1 && (
				<div>
					<div className={classes.title}>Sign into {CHILLABIT}</div>
				</div>
			)}

			{step === 2 && isVerified && (
				<div>
					<div className={classes.title}>Welcome back!</div>
					{newUser && (
						<div className={classes.returningUser}>
							<div>We noticed that an account already exists for this email.</div>
							<div>Please sign in below</div>
						</div>
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
