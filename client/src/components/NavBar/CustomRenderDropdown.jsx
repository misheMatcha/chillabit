import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from 'antd/lib/dropdown';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { styles } from '../../utils/styles';

const {
	alignItems,
	displayFlex,
	justifyContent,
	height,
	radius,
	spacing,
	typography,
	weight,
	width,
} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		top: `${spacing['5_7']}px !important`,
	},
	dropdown: {
		// backgroundColor: 'gray',
		borderBottom: `1px solid black`,
		borderBottomLeftRadius: radius[3],
		borderBottomRightRadius: radius[3],
		borderLeft: `1px solid black`,
		borderRight: `1px solid black`,
		width: spacing['0_5'] * 100,
	},
	dropdownItem: {
		padding: spacing[2],
	},
	dropdownList: {
		maxHeight: spacing['0_5'] * 100,
	},
	footer: {
		...displayFlex,
		borderTop: '1px solid black',
		padding: `10px ${spacing[2]}px`,
	},
	header: {
		...displayFlex,
		...justifyContent.spaceBetween,
		...typography.h4,
		borderBottom: '1px solid black',
		fontWeight: weight[600],
		padding: `${spacing[1]}px ${spacing[2]}px`,
		textTransform: 'capitalize',
	},
	settings: {
		'&:hover': {
			color: 'black',
		},
		...typography.h5,
		fontWeight: weight[500],
	},
	trigger: {
		...alignItems.center,
		...displayFlex,
		...justifyContent.center,
		...height[100].percentage,
		...width[100].percentage,
		color: theme.color.white,
		fontSize: spacing[2],
	},
}));

const CustomRenderDropdown = ({ icon, label, hasSettings = false, items = null }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<Dropdown
			dropdownRender={() => (
				<div className={classes.dropdown}>
					<div className={classes.header}>
						<div>{label}</div>
						{hasSettings && <Link className={classes.settings}>Settings</Link>}
					</div>
					<div className={classes.dropdownList}>
						<div className={classes.dropdownItem}>{items ? 'map' : `No ${label}`}</div>
					</div>
					<div className={classes.footer}>
						<Link>View all {label}</Link>
					</div>
				</div>
			)}
			overlayClassName={classes.container}
			// placement='bottomRight'
			trigger={['click']}
		>
			<Link className={classes.trigger}>
				<FontAwesomeIcon icon={icon} />
			</Link>
		</Dropdown>
	);
};

export default CustomRenderDropdown;
