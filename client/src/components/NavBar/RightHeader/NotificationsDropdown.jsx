import React from 'react';
import { faBell, faHeart, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'antd/lib/button';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../../utils/styles';
import CustomRenderDropdown from '../../General/CustomRenderDropdown';

const {
	alignItems,
	displayFlex,
	flexDirection,
	justifyContent,
	radius,
	spacing,
	textAlign,
	typography,
	width,
} = styles;

// TODO
// - add backend logic later
// - shape data

const useStyles = createUseStyles((theme) => ({
	avatar: {
		backgroundImage: 'linear-gradient(135deg,#8e8485,#70929c)',
		borderRadius: '50%',
		height: 50,
		marginRight: spacing[1],
		minWidth: 50,
	},
	contentWrapper: {
		...displayFlex,
		...flexDirection.column,
		...justifyContent.spaceEvently,
		height: 42,
	},
	date: {
		'& span': {
			marginLeft: spacing['0_5'],
		},
		color: '#999',
	},
	followBtn: {
		'& svg': {
			fontSize: 10,
			marginRight: spacing['0_5'],
		},
		'&:hover': {
			borderColor: `#ccc !important`,
			color: `${theme.color.black} !important`,
		},
		...alignItems.center,
		...displayFlex,
		...justifyContent.center,
		...typography.captions,
		borderColor: '#ccc',
		borderRadius: radius[3],
		fontSize: spacing['1_5'],
		height: 22,
		padding: 0,
		width: 100,
	},
	item: {
		...displayFlex,
		...typography.captions,
		fontSize: 13,
		letterSpacing: -0.5,
	},
	main: {
		...alignItems.center,
		...displayFlex,
		...justifyContent.spaceBetween,
		...textAlign.left,
		...width[100].percentage,
		color: '#666',
	},
	username: {
		color: theme.color.black,
		marginRight: spacing[1],
	},
}));

const NotificationsDowndrop = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	const notificationItems = [
		<div className={classes.item}>
			<div className={classes.avatar} />
			<div className={classes.main}>
				<div className={classes.contentWrapper}>
					<div>
						<span className={classes.username}>username</span>
						started following you
					</div>
					<div className={classes.date}>
						<FontAwesomeIcon icon={faHeart} /> <span>29 January 2020</span>
					</div>
				</div>
				<Button className={classes.followBtn}>
					<FontAwesomeIcon icon={faUserPlus} /> Follow back
				</Button>
			</div>
		</div>,
	];

	return (
		<CustomRenderDropdown
			hasSettings
			icon={faBell}
			items={notificationItems}
			label='notifications'
		/>
	);
};

export default NotificationsDowndrop;
