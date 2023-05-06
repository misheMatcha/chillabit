import React from 'react';
import Button from 'antd/lib/button';
import { createUseStyles, useTheme } from 'react-jss';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useCurrentPath from '../../hooks/useCurrentPath';
import { styles } from '../../utils/styles';

const {
	alignItems,
	displayFlex,
	height,
	justifyContent,
	radius,
	spacing,
	typography,
	weight,
	width,
} = styles;

const useStyles = createUseStyles((theme) => ({
	btnGroup: {
		// ...displayFlex
	},
	container: {
		...alignItems.center,
		...displayFlex,
		...justifyContent.spaceBetween,
		borderBottom: `1px solid ${theme.background.highlight}`,
		height: 34 + 15,
		paddingTop: 15,
	},
	navGroup: {
		'& li': {
			'& a': {
				...alignItems.center,
				...displayFlex,
				...height[100].percentage,
				color: '#333',
				fontSize: 18,
				fontWeight: weight[600],
				textDecoration: theme.link.textDecoration.standard,
			},
			'&:first-child': {
				marginRight: spacing['1_5'],
			},
			'&:last-child': {
				marginLeft: spacing['1_5'],
			},
			'&:not(:first-child):not(:last-child)': {
				margin: `0 ${spacing['1_5']}px`,
			},
			listStyle: 'none',
		},
		...displayFlex,
		...height[100].percentage,
		margin: '1px 0 0',
		padding: 0,
	},
	navLink: {},
	navLinkActive: {
		borderBottom: `${spacing['0_25']}px solid ${theme.color.special}`,
		color: `${theme.color.special} !important`,
	},
}));

const navLinkList = [
	{ label: 'All', path: '' },
	{ label: 'Popular tracks', path: 'popular-tracks' },
	{ label: 'Tracks', path: 'tracks' },
	{ label: 'Albums', path: 'albums' },
	{ label: 'Playlists', path: 'sets' },
	{ label: 'Reposts', path: 'reposts' },
];

const ProfileNavBar = () => {
	const theme = useTheme();
	const { currentUser } = useAuth();
	const { userIdentifier } = useCurrentPath();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<ul className={classes.navGroup}>
				{navLinkList.map((link, i) => (
					<li key={i}>
						<NavLink
							className={({ isActive, isPending }) =>
								isPending ? classes.navLink : isActive ? classes.navLinkActive : classes.navLink
							}
							to={link.path}
						>
							{link.label}
						</NavLink>
					</li>
				))}
			</ul>
			<div className={classes.btnGroup}>
				<Link>Station</Link>
				{currentUser === userIdentifier ? (
					<>
						<Button>Edit</Button>
					</>
				) : (
					<>
						<Button>Follow</Button>
						<Button>Share</Button>
						<Button>Message</Button>
						<Button>dropdown</Button>
					</>
				)}
			</div>
		</div>
	);
};

export default ProfileNavBar;
