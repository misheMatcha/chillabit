import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import useAuthForm from '../../../hooks/useAuthForm';
import { styles } from '../../../utils/styles';

const { spacing, textAlign, typography, width } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...typography.captions,
		color: '#999',
	},
	content: {
		'& a': {
			'&:nth-child(2)': {
				paddingRight: spacing['0_5'],
			},
			paddingLeft: spacing['0_5'],
		},
	},
	helpLinkWrapper: {
		...textAlign.right,
		...width[100].percentage,
		margin: `${spacing['1_5']}px 0`,
	},
	link: {
		'&:hover': {
			color: theme.color.black,
		},
		color: theme.link.color.standard,
		textDecoration: theme.link.textDecoration.standard,
	},
	moreInfo: {
		...textAlign.center,
		color: theme.color.black,
		marginBottom: '1em',
	},
	passwordReset: {
		...textAlign.center,
	},
}));

const Footer = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	const { isVerified, step } = useAuthForm();

	return (
		<div className={classes.container}>
			{step < 3 && !isVerified && (
				<div>
					<div className={classes.helpLinkWrapper}>
						<Link className={classes.link}>Need help?</Link>
					</div>
					<p className={classes.content}>
						<span>
							When registering, you agree that we may use your provided data for the registration
							and to send you notifications on our products and services. You can unsubscribe from
							notifications at any time in your settings. For additional info please refer to our
							<Link className={classes.link}>Privacy Policy</Link>.
						</span>
					</p>
					{step === 2 && (
						<div className={classes.moreInfo}>
							<div>Are you trying to sign in?</div>
							<div>The email address that you entered was not found.</div>
							<div>Double-check your email address.</div>
						</div>
					)}
				</div>
			)}

			{isVerified && (
				<div className={classes.passwordReset}>
					<Link className={classes.link}>Don't know your password?</Link>
				</div>
			)}

			{step === 3 && (
				<p className={classes.content}>
					<span>
						By signing up I accept the
						<Link className={classes.link}>Terms of Use</Link>. I have read and understood the
						<Link className={classes.link}>Privacy Policy</Link>
						and
						<Link className={classes.link}>Cookies Policy</Link>.
					</span>
				</p>
			)}
		</div>
	);
};

export default Footer;
