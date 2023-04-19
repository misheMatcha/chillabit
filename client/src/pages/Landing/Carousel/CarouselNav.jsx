import React from 'react';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'antd/lib/button';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { CHILLABIT } from '../../../utils/constants';
import { styles } from '../../../utils/styles';

const { alignItemsCenter, borderRadius, displayFlex, justifyContent, width } = styles;

const useStyles = createUseStyles((theme) => ({
	btn: {
		'&:hover': {
			border: `1px solid #f50 !important`,
			color: `#fff !important`,
		},
		...borderRadius,
		backgroundColor: '#f50',
		border: `1px solid #f50`,
		color: '#fff',
	},
	btnWrapper: {
		'& > a': {
			color: '#fff',
			fontWeight: 600,
			textDecoration: 'none',
		},
		'& button': {
			marginRight: 10,
			padding: '2px 16px',
		},
		...displayFlex,
		...alignItemsCenter,
		fontSize: 14,
	},
	clear: {
		'&:hover': {
			border: `1px solid #fff !important`,
			color: `#fff !important`,
		},
		backgroundColor: 'transparent',
		border: `1px solid #fff`,
		color: '#fff',
	},
	container: {
		...displayFlex,
		...justifyContent.spaceBetween,
		...width.max,
		padding: '13px 30px 0 30px',
		position: 'absolute',
		zIndex: 1,
	},
	logo: {
		fontSize: 40,
		marginRight: 4,
	},
	logoWrapper: {
		...alignItemsCenter,
		...displayFlex,
		fontSize: 14,
		fontWeight: 900,
		letterSpacing: 1,
		textTransform: 'uppercase',
	},
}));

const CarouselNav = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { toggleModal } = useAuth();

	return (
		<div className={classes.container}>
			<div className={classes.logoWrapper}>
				<FontAwesomeIcon
					className={classes.logo}
					icon={faSoundcloud}
				/>
				{CHILLABIT}
			</div>
			<div className={classes.btnWrapper}>
				<Button
					className={cn(classes.btn, classes.clear)}
					onClick={() => toggleModal()}
				>
					Sign in
				</Button>
				<Button
					className={classes.btn}
					onClick={() => toggleModal(true)}
				>
					Create account
				</Button>
				<Link>For Artists</Link>
			</div>
		</div>
	);
};

export default CarouselNav;
