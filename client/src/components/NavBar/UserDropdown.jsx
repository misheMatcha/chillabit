import React from 'react';
import { faAngleDown, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import StyledDropdown from './StyledDropdown';
import useAuth from '../../hooks/useAuth';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, justifyContent, spacing, truncateText, typography, weight } =
	styles;

const useStyles = createUseStyles((theme) => ({
	arrow: {
		fontSize: spacing['1_5'],
	},
	avatar: {
		backgroundImage: 'linear-gradient(135deg,#8e8485,#70929c)',
		borderRadius: '50%',
		height: 26,
		minWidth: 26,
	},
	container: {
		maxWidth: 223,
		padding: '0 10px',
		textDecoration: theme.link.textDecoration.standard,
	},
	dropdown: {
		width: 500,
	},
	dropdownItem: {
		...displayFlex,
		...typography.h5,
		fontSize: 13,
		fontWeight: weight[900],
		height: spacing[4],
		letterSpacing: -0.75,
		padding: `${spacing[1]}px 10px !important`,
	},
	icon: {
		color: theme.color.white,
		fontSize: spacing['3_5'],
	},
	username: {
		...truncateText,
		letterSpacing: -0.25,
		margin: `0 ${spacing[1]}px`,
		maxWidth: 154,
	},
}));

const UserDropdown = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { user } = useAuth();

	const items = [
		{ icon: faEllipsis, label: 'Profile' },
		{ icon: faEllipsis, label: 'Likes' },
		{ icon: faEllipsis, label: 'Stations' },
		{ icon: faEllipsis, label: 'Who to follow' },
		{ icon: faEllipsis, label: 'Try Next Pro' },
		{ icon: faEllipsis, label: 'Tracks' },
		{ icon: faEllipsis, label: 'Distribute' },
	].map((item, i) => ({
		icon: <FontAwesomeIcon icon={item.icon} />,
		key: i,
		label: <Link className={classes.dropdownItem}>{item.label}</Link>,
	}));

	return (
		<StyledDropdown
			items={items}
			// overlayStyle={classes.dropdown}
			style={classes.container}
			placement='bottomLeft'
		>
			<Link>
				<div className={classes.avatar} />
				{/* <span className={classes.username}>a</span> */}
				<span className={classes.username}>asadfsdfsafsadfdsafasfasdfasfsdfasfasdfasfsdafsd</span>
				<FontAwesomeIcon
					className={classes.arrow}
					icon={faAngleDown}
				/>
			</Link>
		</StyledDropdown>
	);
};

export default UserDropdown;
