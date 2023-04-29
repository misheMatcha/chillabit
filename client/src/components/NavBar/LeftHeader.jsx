import React from 'react';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles, useTheme } from 'react-jss';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { CHILLABIT } from '../../utils/constants';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, flexDirection, justifyContent, spacing, typography, weight } =
	styles;

const defaultLinkStyle = {
	...alignItems.center,
	...displayFlex,
	...justifyContent.center,
	...typography.body,
	borderRight: '1px solid #111',
	color: '#ccc',
	fontSize: 14,
	width: 104,
};

const useStyles = createUseStyles((theme) => ({
	brand: {
		...typography.body,
		fontWeight: weight[900],
		letterSpacing: 1.5,
		marginLeft: spacing['0_7'],
		textTransform: 'uppercase',
	},
	container: {
		...displayFlex,
	},
	link: {
		'&:hover': {
			color: theme.color.white,
		},
		...defaultLinkStyle,
		textDecoration: theme.link.textDecoration.standard,
	},
	linkActive: {
		...defaultLinkStyle,
		backgroundColor: '#111',
		color: theme.color.white,
		textDecoration: theme.link.textDecoration.standard,
	},
	linkWrapper: {
		...flexDirection.row,
		...displayFlex,
	},
	logo: {
		...typography.h1,
	},
	logoWrapper: {
		...alignItems.center,
		...displayFlex,
		...justifyContent.center,
		backgroundColor: theme.color.black,
		width: ({ user }) => (user ? 69 : 184),
	},
}));

const navLinkList = [
	{
		key: 1,
		label: 'Home',
		to: '/discover',
	},
	{
		key: 2,
		label: 'Feed',
		to: '/feed',
	},
	{
		key: 3,
		label: 'Library',
		to: '/you/library',
	},
];

const LeftHeader = () => {
	const theme = useTheme();
	const { user } = useAuth();
	const classes = useStyles({ theme, user });

	return (
		<div className={classes.container}>
			<div className={classes.logoWrapper}>
				<div className={classes.logo}>
					<FontAwesomeIcon icon={faSoundcloud} />
				</div>
				{!user && <span className={classes.brand}>{CHILLABIT}</span>}
			</div>
			<div className={classes.linkWrapper}>
				{navLinkList.map(({ key, label, to }) => (
					<NavLink
						key={key}
						to={to}
						className={({ isActive, isPending }) =>
							isPending ? classes.link : isActive ? classes.linkActive : classes.link
						}
					>
						{label}
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default LeftHeader;
