import React from 'react';
import {
	faAngleDown,
	faArrowUpFromBracket,
	faHeart,
	faRadio,
	faStar,
	faUser,
	faUserGroup,
	faWaveSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import StyledDropdown from './StyledDropdown';
import useAuth from '../../hooks/useAuth';
import { styles } from '../../utils/styles';

const { spacing, truncateText, typography, weight } = styles;

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
		padding: '0 10px',
		textDecoration: theme.link.textDecoration.standard,
	},
	dropdownItem: {
		...typography.h5,
		fontSize: 13,
		fontWeight: weight[900],
		letterSpacing: -0.75,
	},
	userDropdown: {
		'& .ant-dropdown-menu-item': {
			'& .ant-dropdown-menu-title-content': {
				marginLeft: 8,
			},
			'& svg': {
				height: spacing['1_7'],
				margin: '0 !important',
				width: spacing['2_5'],
			},
			padding: '0px 10px !important',
		},
		minWidth: '135px !important',
	},
	username: {
		...truncateText,
		letterSpacing: -0.1,
		margin: `0 ${spacing[1]}px`,
		maxWidth: 154,
	},
}));

const UserDropdown = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { user } = useAuth();

	const items = [
		{ icon: faUser, label: 'Profile' },
		{ icon: faHeart, label: 'Likes' },
		{ icon: faRadio, label: 'Stations' },
		{ icon: faUserGroup, label: 'Who to follow' },
		{ icon: faStar, label: 'Try Next Pro' },
		{ icon: faWaveSquare, label: 'Tracks' },
		{ icon: faArrowUpFromBracket, label: 'Distribute' },
	].map((item, i) => ({
		icon: <FontAwesomeIcon icon={item.icon} />,
		key: i,
		label: <Link className={classes.dropdownItem}>{item.label}</Link>,
	}));

	return (
		<StyledDropdown
			items={items}
			overlayStyle={classes.userDropdown}
			style={classes.container}
			placement='bottomLeft'
		>
			<Link>
				<div className={classes.avatar} />
				{/* <span className={classes.username}>{user.username}</span> */}
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
