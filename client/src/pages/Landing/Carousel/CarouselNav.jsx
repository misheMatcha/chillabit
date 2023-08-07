import React from 'react';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'antd/lib/button';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import useModal from '../../../hooks/useModal';
import { CHILLABIT } from '../../../utils/constants';
import { styles } from '../../../utils/styles';

const { alignItems, displayFlex, justifyContent, radius, spacing, typography, weight, width } =
	styles;

const useStyles = createUseStyles((theme) => ({
	actionsWrapper: {
		'& > a': {
			color: theme.color.white,
			fontSize: 14,
			fontWeight: weight[500],
			textDecoration: theme.link.textDecoration.standard,
		},
		'& button': {
			marginRight: spacing['1_5'],
			padding: `${spacing['0_25']}px ${spacing[2]}px`,
		},
		...displayFlex,
		...alignItems.center,
		...typography.h4,
	},
	btn: {
		'&:hover': {
			border: `1px solid ${theme.button.backgroundColor.special} !important`,
			color: `${theme.button.color.special} !important`,
		},
		backgroundColor: theme.button.backgroundColor.special,
		border: `1px solid ${theme.button.backgroundColor.special}`,
		borderRadius: radius[3],
		color: theme.color.white,
	},
	clear: {
		'&:hover': {
			border: `1px solid ${theme.color.white} !important`,
			color: `${theme.color.white} !important`,
		},
		backgroundColor: theme.color.transparent,
		border: `1px solid ${theme.color.white}`,
		color: theme.color.white,
	},
	container: {
		...displayFlex,
		...justifyContent.spaceBetween,
		...width.max,
		padding: {
			left: spacing[4],
			right: spacing[4],
			top: spacing['1_5'],
		},
		position: 'absolute',
		zIndex: 1,
	},
	logo: {
		fontSize: spacing[5],
		marginRight: spacing['0_5'],
	},
	logoWrapper: {
		...alignItems.center,
		...displayFlex,
		...typography.micro,
		fontSize: 14,
		letterSpacing: 1,
	},
}));

const CarouselNav = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { openModal } = useModal();

	return (
		<div className={classes.container}>
			<div className={classes.logoWrapper}>
				<FontAwesomeIcon
					className={classes.logo}
					icon={faSoundcloud}
				/>
				{CHILLABIT}
			</div>
			<div className={classes.actionsWrapper}>
				<Button
					className={cn(classes.btn, classes.clear)}
					onClick={() => openModal('auth')}
				>
					Sign in
				</Button>
				<Button
					className={classes.btn}
					onClick={() => openModal('auth', { clickedCreate: true })}
				>
					Create account
				</Button>
				<Link>For Artists</Link>
			</div>
		</div>
	);
};

export default CarouselNav;
