import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from 'antd/lib/button';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import MoreButtonsDropdown from './MoreButtonsDropdown';
import NotificationsDowndrop from './NotificationsDropdown';
import UserDropdown from './UserDropdown';
import useAuth from '../../../hooks/useAuth';
import useModal from '../../../hooks/useModal';
import { styles } from '../../../utils/styles';
import CustomRenderDropdown from '../../General/CustomRenderDropdown';

const { alignItems, displayFlex, justifyContent, radius, spacing, weight } = styles;

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
	const { isLoggedIn } = useAuth();
	const { openModal } = useModal();

	return (
		<div className={classes.container}>
			{isLoggedIn ? (
				<div className={classes.proWrapper}>
					<Link className={classes.proLink}>Try Go+</Link>
					<Link className={classes.proLink}>Try Next Pro</Link>
				</div>
			) : (
				<div className={classes.loginMenu}>
					<Button
						className={cn(classes.btn, classes.clear)}
						onClick={() => openModal('auth')}
					>
						Sign in
					</Button>
					<Button
						className={classes.btn}
						onClick={() => openModal('auth', { newUser: true })}
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
			{isLoggedIn && (
				<>
					<div className={classes.userDropdownWrapper}>
						<UserDropdown />
					</div>
					<div className={classes.moreBtns}>
						<NotificationsDowndrop />
					</div>
					<div className={classes.moreBtns}>
						<CustomRenderDropdown
							icon={faEnvelope}
							label='messages'
						/>
					</div>
				</>
			)}
			<div className={classes.moreBtns}>
				<MoreButtonsDropdown />
			</div>
		</div>
	);
};

export default RightHeader;
