import React from 'react';
import {
	faEllipsis,
	faEnvelope,
	faPencil,
	faShareFromSquare,
	faTowerCell,
	faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles, useTheme } from 'react-jss';
import { Link, NavLink } from 'react-router-dom';
import StyledButton from '../../components/General/StyledButton';
import useAuth from '../../hooks/useAuth';
import useCurrentPath from '../../hooks/useCurrentPath';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, height, justifyContent, spacing, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	btnGroup: {
		'& > :first-child': {
			textDecoration: theme.link.textDecoration.standard,
		},
		'& > :not(:first-child)': {
			marginLeft: 5,
		},
		...alignItems.flexStart,
		...displayFlex,
		...height[100].percentage,
	},
	container: {
		...alignItems.center,
		...displayFlex,
		...justifyContent.spaceBetween,
		borderBottom: `1px solid ${theme.background.highlight}`,
		height: 50,
		paddingTop: 15,
	},
	navGroup: {
		'& li': {
			'& > a': {
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
								isPending ? '' : isActive ? classes.navLinkActive : ''
							}
							to={link.path}
						>
							{link.label}
						</NavLink>
					</li>
				))}
			</ul>
			<div className={classes.btnGroup}>
				<Link>
					<StyledButton
						icon={faTowerCell}
						label='Station'
					/>
				</Link>
				{currentUser && currentUser.url === userIdentifier ? (
					<StyledButton
						icon={faPencil}
						label='Edit'
					/>
				) : (
					<>
						<StyledButton
							icon={faUserPlus}
							label='Follow'
						/>
						<StyledButton
							icon={faShareFromSquare}
							label='Share'
							special
						/>
						<StyledButton>
							<FontAwesomeIcon icon={faEnvelope} />
						</StyledButton>
						<StyledButton>
							<FontAwesomeIcon icon={faEllipsis} />
						</StyledButton>
					</>
				)}
			</div>
		</div>
	);
};

export default ProfileNavBar;
