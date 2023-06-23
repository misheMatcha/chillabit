import React from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { createUseStyles, useTheme } from 'react-jss';
import { NavLink } from 'react-router-dom';
import StyledLink from '../../../components/General/StyledLink';
import { CHILLABIT } from '../../../utils/constants';
import { styles } from '../../../utils/styles';

const { alignItems, displayFlex, height, justifyContent, spacing, typography, width } = styles;

const useStyles = createUseStyles((theme) => ({
	artistLink: {
		'& svg': {
			fontSize: 10,
		},
		'&:hover': {
			borderBottom: `${spacing['0_25']}px solid ${theme.color.black}`,
		},
		borderBottom: `${spacing['0_25']}px solid ${theme.color.transparent}`,
		color: '#333',
	},
	container: {
		'& ul, & li, & a': {
			...alignItems.center,
			...displayFlex,
			...height[100].percentage,
		},
		...displayFlex,
		...justifyContent.spaceBetween,
		...width[100].percentage,
		borderBottom: `1px solid ${theme.background.highlight}`,
		height: 50,
		padding: `0 ${spacing['3_7']}px`,
	},
	li: {
		'& > a': {
			...typography.body,
			fontSize: spacing['1_7'],
			textDecoration: theme.link.textDecoration.standard,
		},
	},
	navLink: {
		color: '#333',
	},
	navLinkActive: {
		borderBottom: `2px solid ${theme.color.special}`,
		color: theme.color.special,
		marginBottom: -1,
	},
	navList: {
		'& > :first-child': {
			marginRight: spacing['1_5'],
		},
		'& > li:not(first-child)': {
			margin: `0 ${spacing['1_5']}px`,
		},
		...displayFlex,
	},
}));

const navLinks = [
	{ label: 'Upload', to: '/upload' },
	{ label: 'Mastering', to: '/you/mastering' },
	{ label: 'Your tracks', to: '/you/tracks' },
	{ label: 'Artist Plans', to: '/artist-plans' },
];

const Navbar = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<ul className={classes.navList}>
				{navLinks.map((link, i) => (
					<li
						className={classes.li}
						key={i}
					>
						<NavLink
							className={({ isActive, isPending }) =>
								isPending ? classes.navLink : isActive ? classes.navLinkActive : classes.navLink
							}
							to={link.to}
						>
							{link.label}
						</NavLink>
					</li>
				))}
			</ul>
			<StyledLink
				styles={classes.artistLink}
				icon={faArrowUpRightFromSquare}
				label={`${CHILLABIT} for Artists`}
				to='artists.chillabit.com' // fix later
			/>
		</div>
	);
};

export default Navbar;
