import React from 'react';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'antd/lib/button';
import { createUseStyles, useTheme } from 'react-jss';
import { Link, NavLink } from 'react-router-dom';
import LeftHeader from './LeftHeader';
import useAuth from '../../hooks/useAuth';
import { CHILLABIT } from '../../utils/constants';
import { styles } from '../../utils/styles';
import SearchBar from '../SearchBar';

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
	middleHeader: {
		...alignItems.center,
		...displayFlex,
		padding: '9px 10px',
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
				<LeftHeader />
				<div className={classes.middleHeader}>
					<SearchBar isNav />
				</div>
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
