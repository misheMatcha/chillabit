import React from 'react';
import Button from 'antd/lib/button';
import { createUseStyles, useTheme } from 'react-jss';
import useAuth from '../../hooks/useAuth';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, flexDirection, justifyContent } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		padding: '0 30px',
	},
	create: {
		height: 46,
		margin: '10px 0',
	},
	createBtn: {
		'& > span': {
			padding: '0 15px',
		},
		'&:hover': {
			borderColor: `#f50 !important`,
			color: `#fff !important`,
		},
		...displayFlex,
		backgroundColor: '#f50',
		borderColor: '#f50',
		borderRadius: 3,
		color: '#fff',
		fontSize: 18,
		height: 46,
		padding: '13px 23px',
	},
	footer: {
		borderTop: `1px solid #f2f2f2`,
		color: '#999',
		fontSize: 14,
		lineHeight: 20,
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
		...displayFlex,
		backgroundColor: 'transparent',
		borderColor: '#e5e5e5',
		borderRadius: 3,
		fontSize: 18,
		height: 40,
		marginLeft: 10,
		padding: '10px 15px',
	},
	signinWrapper: {
		...alignItems.center,
		...displayFlex,
		fontSize: 14,
		height: 40,
		margin: '5px 0 10px',
	},
	tagline: {
		fontSize: 24,
		marginBottom: 10,
		marginTop: 7,
	},
	title: {
		fontSize: 36,
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
