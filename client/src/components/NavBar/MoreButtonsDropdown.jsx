import React, { useState } from 'react';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from 'antd/lib/dropdown';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { CHILLABIT } from '../../utils/constants';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, justifyContent, radius, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...alignItems.center,
		...displayFlex,
		...justifyContent.center,
		backgroundColor: ({ isOpen }) => (isOpen ? '#111' : 'transparent'),
		height: spacing['5_7'],
		width: spacing['5_7'],
	},
	divider: {
		borderBottom: `1px solid ${theme.background.highlight}`,
	},
	dropdown: {
		'& .ant-dropdown-menu': {
			borderBottomLeftRadius: radius[4],
			borderBottomRightRadius: radius[4],
			boxShadow: 'none',
			padding: 0,
		},
		'& .ant-dropdown-menu-item': {
			'&:hover': {
				backgroundColor: `${theme.background.highlight} !important`,
			},
			borderRadius: '0px !important',
			height: spacing[4],
			padding: `0px !important`,
		},
		'& .ant-dropdown-menu-item:last-child': {
			borderBottomLeftRadius: `${radius[4]}px !important`,
			borderBottomRightRadius: `${radius[4]}px !important`,
		},
		borderBottom: '1px solid #ccc',
		borderBottomLeftRadius: radius[4],
		borderBottomRightRadius: radius[4],
		borderLeft: '1px solid #ccc',
		borderRight: '1px solid #ccc',
		top: `${spacing['5_7']}px !important`,
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
		color: theme.color.white,
		fontSize: spacing['3_5'],
	},
}));

const MoreButtonsDropdown = () => {
	const theme = useTheme();
	const [isOpen, setIsOpen] = useState(false);
	const classes = useStyles({ isOpen, theme });
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
		<Dropdown
			overlayClassName={classes.dropdown}
			className={classes.container}
			menu={{ items: getDropdownItems() }}
			placement='bottomRight'
			trigger={['click']}
			onOpenChange={() => setIsOpen(!isOpen)}
		>
			<Link>
				<FontAwesomeIcon
					className={classes.icon}
					icon={faEllipsis}
				/>
			</Link>
		</Dropdown>
	);
};

export default MoreButtonsDropdown;
