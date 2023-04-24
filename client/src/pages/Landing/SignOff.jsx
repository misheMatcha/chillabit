import React from 'react';
import Button from 'antd/lib/button';
import { createUseStyles, useTheme } from 'react-jss';
import useAuth from '../../hooks/useAuth';
import { styles } from '../../utils/styles';

const {
	alignItems,
	displayFlex,
	flexDirection,
	justifyContent,
	radius,
	spacing,
	typography,
	weight,
} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		padding: '0 30px',
	},
	create: {
		height: spacing['5_7'],
		margin: '10px 0',
	},
	createBtn: {
		'&:hover': {
			borderColor: `${theme.button.backgroundColor.special} !important`,
			color: `${theme.button.color.special} !important`,
		},
		...typography.h3,
		backgroundColor: theme.button.backgroundColor.special,
		borderColor: theme.button.backgroundColor.special,
		borderRadius: radius[3],
		color: theme.button.color.special,
		fontWeight: weight[500],
		height: spacing['5_7'],
		padding: `0 ${spacing[5]}px`,
	},
	footer: {
		borderTop: `1px solid ${theme.background.highlight}`,
		color: '#999',
		fontSize: 14,
		padding: '15px 0',
	},
	github: {
		marginBottom: 5,
	},
	signOff: {
		...alignItems.center,
		...displayFlex,
		...flexDirection.column,
		...justifyContent.center,
		height: 375,
	},
	signinBtn: {
		'&:hover': {
			borderColor: `#ccc !important`,
			color: `#333 !important`,
		},
		...typography.h4,
		backgroundColor: theme.color.transparent,
		borderColor: '#e5e5e5',
		borderRadius: radius[3],
		fontWeight: weight[400],
		height: spacing[5],
		marginLeft: 10,
		padding: '0 15px',
	},
	signinWrapper: {
		...alignItems.center,
		...displayFlex,
		...typography.captions,
		fontWeight: weight[300],
		height: spacing[5],
		margin: '5px 0 10px',
	},
	tagline: {
		...typography.h2,
		fontSize: spacing[3],
		fontWeight: weight[400],
		marginBottom: 10,
		marginTop: 7,
	},
	title: {
		...typography.h1,
		fontSize: spacing['4_5'],
		fontWeight: weight[400],
	},
}));

const SignOff = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { toggleModal } = useAuth();

	return (
		<div className={classes.container}>
			<div className={classes.signOff}>
				<div className={classes.title}>Thanks for listening. Now join in.</div>
				<div className={classes.tagline}>
					Save tracks, follow artists and build playlists. All for free.
				</div>
				<div className={classes.create}>
					<Button
						className={classes.createBtn}
						onClick={() => toggleModal(true)}
					>
						Create account
					</Button>
				</div>
				<div className={classes.signinWrapper}>
					Already have an account?
					<Button
						className={classes.signinBtn}
						onClick={() => toggleModal()}
					>
						Sign in
					</Button>
				</div>
			</div>
			<div className={classes.footer}>
				<div className={classes.github}>github link</div>
				<div>blurb</div>
			</div>
		</div>
	);
};

export default SignOff;
