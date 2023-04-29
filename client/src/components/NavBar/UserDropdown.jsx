import React from 'react';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import StyledDropdown from './StyledDropdown';
import useAuth from '../../hooks/useAuth';
import { styles } from '../../utils/styles';

const { displayFlex, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	divider: {
		borderBottom: `1px solid ${theme.background.highlight}`,
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
			placement='bottomLeft'
		>
			<Link>
				<FontAwesomeIcon
					className={classes.icon}
					icon={faEllipsis}
				/>
			</Link>
		</StyledDropdown>
	);
};

export default UserDropdown;
