import React from 'react';
import * as cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { styles } from '../../../utils/styles';

const { width } = styles;

const useStyles = createUseStyles({
	container: {
		color: '#999',
		fontSize: 12.5,
		fontWeight: 600,
	},
	content: {
		'& a': {
			'&:nth-child(2)': {
				paddingRight: 4,
			},
			paddingLeft: 4,
		},
	},
	helpLinkWrapper: {
		...width[100].percentage,
		margin: '10px 0',
		textAlign: 'right',
	},
	link: {
		'&:hover': {
			color: '#000',
		},
		color: '#044dd2',
		textDecoration: 'none',
	},
	moreInfo: {
		color: '#000',
		textAlign: 'center',
	},
});

const AuthFooter = () => {
	const classes = useStyles();

	const { step, isVerified } = useAuth();

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
							<Link className={cn(classes.link)}>Privacy Policy</Link>.
						</span>
					</p>
					{step === 2 && (
						<p className={classes.moreInfo}>
							<div>Are you trying to sign in?</div>
							<div>The email address that you entered was not found.</div>
							<div>Double-check your email address.</div>
						</p>
					)}
				</div>
			)}

			{isVerified && (
				<div>
					<Link className={cn(classes.link)}>Don't know your password?</Link>
				</div>
			)}

			{step === 3 && (
				<p className={classes.content}>
					<span>
						By signing up I accept the
						<Link className={cn(classes.link)}>Terms of Use</Link>. I have read and understood the
						<Link className={cn(classes.link)}>Privacy Policy</Link>
						and
						<Link className={cn(classes.link)}>Cookies Policy</Link>.
					</span>
				</p>
			)}
		</div>
	);
};

export default AuthFooter;
