import React, { useEffect } from 'react';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'antd/lib/button';
import Dropdown from 'antd/lib/dropdown';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link, NavLink } from 'react-router-dom';
import LeftHeader from './LeftHeader';
import MoreButtonsDropdown from './MoreButtonsDropdown';
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

const useStyles = createUseStyles((theme) => ({
	btn: {
		'&:hover': {
			borderColor: `${theme.button.backgroundColor.special} !important`,
			color: `${theme.button.color.special} !important`,
		},
		...alignItems.center,
		...displayFlex,
		...justifyContent.center,
		backgroundColor: theme.button.backgroundColor.special,
		borderColor: theme.button.backgroundColor.special,
		borderRadius: radius[3],
		color: theme.button.color.special,
		fontSize: spacing['1_7'],
		fontWeight: weight[500],
		height: 26,
		padding: `${spacing['0_25']}px 10px`,
	},
	clear: {
		'&:hover': {
			borderColor: '#999 !important',
		},
		backgroundColor: theme.button.backgroundColor.teritary,
		borderColor: '#666',
	},
	container: {
		...displayFlex,
		fontSize: spacing['1_7'],
		fontWeight: weight[500],
	},
	loginMenu: {
		'& > button:first-child': {
			marginRight: 10,
		},
		'& > button:last-child': {
			marginLeft: spacing[1],
		},
		...alignItems.center,
		...displayFlex,
		padding: '0 10px',
	},
	moreBtns: {
		...alignItems.center,
		...displayFlex,
		...justifyContent.center,
		width: spacing['5_7'],
	},
	proLink: {
		color: theme.color.special,
		padding: '0 10px',
		textDecoration: theme.link.textDecoration.standard,
	},
	proWrapper: {
		...alignItems.center,
		...displayFlex,
	},
	uploadLink: {
		color: '#ccc',
		textDecoration: theme.link.textDecoration.standard,
	},
	uploadWrapper: {
		padding: `${spacing['1_5']}px 10px`,
	},
}));

const RightHeader = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { toggleModal, token, user } = useAuth();

	useEffect(() => {
		console.log(user);
		console.log(token);
	}, [user, token]);

	return (
		<div className={classes.container}>
			{token ? (
				<div className={classes.loginMenu}>
					<Button
						className={cn(classes.btn, classes.clear)}
						onClick={() => toggleModal()}
					>
						Sign in
					</Button>
					<Button
						className={classes.btn}
						onClick={() => toggleModal(true)}
					>
						Create account
					</Button>
				</div>
			) : (
				<div className={classes.proWrapper}>
					<Link className={classes.proLink}>Try Go+</Link>
					<Link className={classes.proLink}>Try Next Pro</Link>
				</div>
			)}
			<div className={classes.uploadWrapper}>
				<Link
					className={classes.uploadLink}
					to='/upload'
				>
					Upload
				</Link>
			</div>
			<div className={classes.moreBtns}>
				<MoreButtonsDropdown />
			</div>
		</div>
	);
};

export default RightHeader;
