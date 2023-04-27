import React from 'react';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'antd/lib/button';
import { createUseStyles, useTheme } from 'react-jss';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { CHILLABIT } from '../utils/constants';
import { styles } from '../utils/styles';

const {
	alignItems,
	displayFlex,
	flexDirection,
	justifyContent,
	radius,
	spacing,
	typography,
	weight,
	width,
} = styles;

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
		...justifyContent.center,
		backgroundColor: '#333',
		color: theme.color.white,
		height: spacing['5_7'],
		position: 'fixed',
	},
	headerWrapper: {
		...displayFlex,
		...flexDirection.row,
		...width.max,
	},
	leftHeader: {
		...displayFlex,
	},
	leftNav: {
		...flexDirection.row,
		...displayFlex,
	},
	leftNavLink: {
		'&:hover': {
			color: theme.color.white,
		},
		...leftNavLinkStyle(theme),
	},
	leftNavLinkActive: {
		...leftNavLinkStyle(theme),
		backgroundColor: '#111',
		color: theme.color.white,
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
	middleHeader: {
		width: 412,
	},
	rightHeader: {
		...displayFlex,
	},
}));

const NavBar = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { toggleModal, user } = useAuth();

	return (
		<div className={classes.container}>
			<div className={classes.headerWrapper}>
				<div className={classes.leftHeader}>
					<div className={classes.logoWrapper}>
						<div className={classes.logo}>
							<FontAwesomeIcon icon={faSoundcloud} />
						</div>
						<span>{CHILLABIT}</span>
					</div>
					<div className={classes.leftNav}>
						<NavLink
							to='/home'
							className={({ isActive, isPending }) =>
								isPending
									? classes.leftNavLink
									: isActive
									? classes.leftNavLinkActive
									: classes.leftNavLink
							}
							acti
						>
							Home
						</NavLink>
						<NavLink
							to='/feed'
							className={classes.leftNavLink}
						>
							Feed
						</NavLink>
						<NavLink
							to='/you/library'
							className={classes.leftNavLink}
						>
							Library
						</NavLink>
					</div>
				</div>
				<div className={classes.middleHeader}>search bar</div>
				<div className={classes.rightHeader}>
					<Button onClick={() => toggleModal()}>Sign in</Button>
					<Button onClick={() => toggleModal(true)}>Create account</Button>
					<Link>Upload</Link>
					<div>dropdown settings</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
