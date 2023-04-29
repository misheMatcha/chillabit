import React, { useState } from 'react';
import Dropdown from 'antd/lib/dropdown';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import useAuth from '../../hooks/useAuth';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, justifyContent, radius, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...alignItems.center,
		...displayFlex,
		...justifyContent.center,
		backgroundColor: ({ isOpen }) => (isOpen ? '#111' : 'transparent'),
		color: ({ isOpen }) => (isOpen ? theme.color.white : '#ccc'),
		height: spacing['5_7'],
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

const StyledDropdown = ({ children, items, overlayStyle, placement, style }) => {
	const theme = useTheme();
	const [isOpen, setIsOpen] = useState(false);
	const classes = useStyles({ isOpen, theme });
	const { user } = useAuth();

	return (
		<Dropdown
			overlayClassName={cn(classes.dropdown, overlayStyle)}
			className={cn(classes.container, style)}
			menu={{ items }}
			placement={placement}
			trigger={['click']}
			onOpenChange={() => setIsOpen(!isOpen)}
		>
			{children}
		</Dropdown>
	);
};

export default StyledDropdown;
