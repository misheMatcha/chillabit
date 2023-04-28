import React from 'react';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from 'antd/lib/dropdown';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, justifyContent, radius, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...alignItems.center,
		...displayFlex,
		...justifyContent.center,
		height: spacing['5_7'],
		width: spacing['5_7'],
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
			height: 32,
			padding: `${spacing[1]}px 10px !important`,
		},
		'& .ant-dropdown-menu-item:last-child': {
			borderBottomLeftRadius: `${radius[4]}px !important`,
			borderBottomRightRadius: `${radius[4]}px !important`,
		},
		'& .ant-dropdown-menu-item:nth-child(3), .ant-dropdown-menu-item:nth-child(8)': {
			borderBottom: '1px solid #f2f2f2',
		},
		border: '1px solid #ccc',
		borderBottomLeftRadius: radius[4],
		borderBottomRightRadius: radius[4],
		top: `${spacing['5_7']}px !important`,
		width: 168,
	},
	dropdownItem: {
		...typography.h5,
		fontSize: 13,
		fontWeight: weight[900],
		letterSpacing: -0.75,
	},
	icon: {
		color: theme.color.white,
		fontSize: spacing['3_5'],
	},
}));

const MoreButtonsDropdown = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	const items = [
		{
			key: '1',
			label: <Link className={classes.dropdownItem}>About us</Link>,
		},
		{
			key: '2',
			label: <Link className={classes.dropdownItem}>Legal</Link>,
		},
		{
			key: '3',
			label: <Link className={classes.dropdownItem}>Copyright</Link>,
		},
		{
			key: '4',
			label: <Link className={classes.dropdownItem}>Mobile apps</Link>,
		},
		{
			key: '5',
			label: <Link className={classes.dropdownItem}>For Creators</Link>,
		},
		{
			key: '6',
			label: <Link className={classes.dropdownItem}>Blog</Link>,
		},
		{
			key: '7',
			label: <Link className={classes.dropdownItem}>Jobs</Link>,
		},
		{
			key: '8',
			label: <Link className={classes.dropdownItem}>Developers</Link>,
		},
		{
			key: '9',
			label: <Link className={classes.dropdownItem}>Support</Link>,
		},
		{
			key: '10',
			label: <Link className={classes.dropdownItem}>Keyboard shortcuts</Link>,
		},
	];

	return (
		<Dropdown
			overlayClassName={classes.dropdown}
			className={classes.container}
			menu={{ items }}
			trigger={['click']}
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
