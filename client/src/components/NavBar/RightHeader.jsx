import React from 'react';
import Button from 'antd/lib/button';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import MoreButtonsDropdown from './MoreButtonsDropdown';
import UserDropdown from './UserDropdown';
import useAuth from '../../hooks/useAuth';
import { styles } from '../../utils/styles';

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
		whiteSpace: 'nowrap',
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
	userDropdownWrapper: {},
}));

const RightHeader = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { toggleModal, user } = useAuth();

	return (
		<div className={classes.container}>
			{user ? (
				<div className={classes.proWrapper}>
					<Link className={classes.proLink}>Try Go+</Link>
					<Link className={classes.proLink}>Try Next Pro</Link>
				</div>
			) : (
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
			)}
			<div className={classes.uploadWrapper}>
				<Link
					className={classes.uploadLink}
					to='/upload'
				>
					Upload
				</Link>
			</div>
			{user && (
				<>
					<div className={classes.userDropdownWrapper}>
						<UserDropdown />
					</div>
					<div className={classes.moreBtns}>bell</div>
					<div className={classes.moreBtns}>mail</div>
				</>
			)}
			<div className={classes.moreBtns}>
				<MoreButtonsDropdown />
			</div>
		</div>
	);
};

export default RightHeader;
