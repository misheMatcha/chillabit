import React, { useState } from 'react';
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
	textAlign,
	typography,
	weight,
	width,
} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		top: `${spacing['5_7']}px !important`,
	},
	dropdown: {
		backgroundColor: theme.background.surface,
		borderBottom: `1px solid #ccc`,
		borderBottomLeftRadius: radius[3],
		borderBottomRightRadius: radius[3],
		borderLeft: `1px solid #ccc`,
		borderRight: `1px solid #ccc`,
		width: spacing['0_5'] * 100,
	},
	dropdownItem: {
		...textAlign.center,
		...typography.captions,
		color: '#999',
		fontSize: 13,
		fontWeight: weight[700],
		padding: spacing[2],
	},
	dropdownList: {
		maxHeight: spacing['0_5'] * 100,
	},
	footer: {
		'& a': {
			color: theme.color.black,
		},
		...displayFlex,
		...justifyContent.center,
		...typography.captions,
		borderTop: '1px solid #ccc',
		fontWeight: weight[500],
		padding: `10px ${spacing[2]}px`,
	},
	header: {
		...displayFlex,
		...justifyContent.spaceBetween,
		...typography.h4,
		borderBottom: '1px solid #ccc',
		fontWeight: weight[600],
		padding: `${spacing[1]}px ${spacing[2]}px`,
		textTransform: 'capitalize',
	},
	settings: {
		'&:hover': {
			color: 'black',
		},
		...typography.h5,
		color: '#999',
		fontSize: 13,
		fontWeight: weight[500],
	},
	trigger: {
		...alignItems.center,
		...displayFlex,
		...justifyContent.center,
		...height[100].percentage,
		...width[100].percentage,
		backgroundColor: ({ isOpen }) => (isOpen ? '#111' : 'transparent'),
		color: ({ isOpen }) => (isOpen ? theme.color.white : '#ccc'),
		fontSize: spacing[2],
	},
}));

const CustomRenderDropdown = ({ icon, label, hasSettings = false, items = null }) => {
	const theme = useTheme();
	const [isOpen, setIsOpen] = useState(false);
	const classes = useStyles({ isOpen, theme });

	return (
		<Dropdown
			dropdownRender={() => (
				<div className={classes.dropdown}>
					<div className={classes.header}>
						<div>{label}</div>
						{hasSettings && <Link className={classes.settings}>Settings</Link>}
					</div>
					<div className={classes.dropdownList}>
						<div className={classes.dropdownItem}>
							{items ? (
								<>
									{items.map((item, i) => (
										<Link key={i}>{item}</Link>
									))}
								</>
							) : (
								`No ${label}`
							)}
						</div>
					</div>
					<div className={classes.footer}>
						<Link>View all {label}</Link>
					</div>
				</div>
			)}
			onOpenChange={() => setIsOpen(!isOpen)}
			overlayClassName={classes.container}
			trigger={['click']}
		>
			<Link className={classes.trigger}>
				<FontAwesomeIcon icon={icon} />
			</Link>
		</Dropdown>
	);
};

export default CustomRenderDropdown;
