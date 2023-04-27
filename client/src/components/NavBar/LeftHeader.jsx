import React from 'react';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles, useTheme } from 'react-jss';
import { NavLink } from 'react-router-dom';
import { CHILLABIT } from '../../utils/constants';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, flexDirection, justifyContent, spacing, typography, weight } =
	styles;

const leftNavLinkStyle = (theme) => ({
	...alignItems.center,
	...displayFlex,
	...justifyContent.center,
	...typography.body,
	borderRight: '1px solid #111',
	color: '#ccc',
	fontSize: 14,
	textDecoration: theme.link.textDecoration.standard,
	width: 104,
});

const useStyles = createUseStyles((theme) => ({
	container: {
		...displayFlex,
	},
	link: {
		'&:hover': {
			color: theme.color.white,
		},
		...leftNavLinkStyle(theme),
	},
	linkActive: {
		...leftNavLinkStyle(theme),
		backgroundColor: '#111',
		color: theme.color.white,
	},
	linkWrapper: {
		...flexDirection.row,
		...displayFlex,
	},
	logo: {
		...typography.h1,
	},
	logoWrapper: {
		'& span': {
			marginLeft: spacing['0_5'],
		},
		...alignItems.center,
		...displayFlex,
		...justifyContent.center,
		backgroundColor: theme.color.black,
		width: 184,
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
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<div className={classes.logoWrapper}>
				<div className={classes.logo}>
					<FontAwesomeIcon icon={faSoundcloud} />
				</div>
				<span>{CHILLABIT}</span>
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
