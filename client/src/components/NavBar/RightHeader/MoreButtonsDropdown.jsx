import React from 'react';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { CHILLABIT } from '../../../utils/constants';
import { styles } from '../../../utils/styles';
import StyledDropdown from '../../StyledDropdown';

const { displayFlex, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		width: spacing['5_7'],
	},
	divider: {
		borderBottom: `1px solid ${theme.background.highlight}`,
	},
	dropdown: {
		width: 168,
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
		fontSize: spacing['3_5'],
	},
}));

const MoreButtonsDropdown = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { user } = useAuth();

	const items = [
		{ label: 'About us' },
		{ label: 'Legal' },
		{
			hasDivider: true,
			label: 'Copyright',
		},
		{
			isSignedIn: true,
			label: `Get ${CHILLABIT} Go+`,
		},
		{ label: 'Mobile apps' },
		{ label: 'For Creators' },
		{ label: 'Blog' },
		{ label: 'Jobs' },
		{
			hasDivider: true,
			label: 'Developers',
		},
		{ label: 'Support' },
		{
			hasDivider: user ? true : false,
			label: 'Keyboard shortcuts',
		},
		{
			isSignedIn: true,
			label: 'Subscription',
		},
		{
			isSignedIn: true,
			label: 'Settings',
		},
		{
			isSignedIn: true,
			label: 'Sign out',
		},
	];

	const getDropdownItems = () => {
		const dropdownItems = [];

		for (let i = 0; i < items.length; i++) {
			const item = items[i];

			if (!user && item.isSignedIn) continue;

			dropdownItems.push({
				key: i,
				label: (
					<Link className={cn(classes.dropdownItem, { [`${classes.divider}`]: item.hasDivider })}>
						{item.label}
					</Link>
				),
			});
		}

		return dropdownItems;
	};

	return (
		<StyledDropdown
			items={getDropdownItems()}
			overlayStyle={classes.dropdown}
			placement='bottomRight'
			style={classes.container}
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

export default MoreButtonsDropdown;
