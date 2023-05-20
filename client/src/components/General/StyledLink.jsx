import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { styles } from '../../utils/styles';

const { displayFlex, radius, spacing, truncateText, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	btn: {
		border: '1px solid #999',
		borderRadius: radius[3],
		width: 'fit-content',
	},
	default: {
		'&:hover': {
			color: '#333',
		},
		...displayFlex,
		...typography.body,
		color: theme.link.color.standard,
		fontSize: spacing['1_7'],
		textDecoration: theme.link.textDecoration.standard,
	},
	defaultContent: {
		...truncateText,
	},
	hover: {
		'&:hover $icon': {
			color: '#999',
		},
	},
	icon: {
		marginRight: spacing['0_7'],
	},
	large: {
		...typography.h3,
		fontWeight: weight[500],
		lineHeight: `${spacing['2_25']}px`,
		padding: `13px ${spacing[3]}px`,
	},
	medium: {
		...typography.body,
		fontWeight: weight[600],
		lineHeight: `${spacing['2_25']}px`,
		padding: '10px 15px',
	},
	primary: {
		color: '#999',
	},
	primaryBtn: {
		'&:hover': {
			color: theme.color.white,
		},
		borderColor: theme.color.white,
		color: theme.color.white,
	},
	secondary: {
		'&:hover': {
			color: theme.color.white,
		},
		color: theme.color.white,
	},
	small: {
		'& $icon': {
			fontSize: 10,
		},
		...typography.captions,
		fontSize: spacing['1_5'],
	},
	special: {
		'&:hover': {
			color: theme.color.special,
		},
		color: theme.color.special,
	},
	specialBtn: {
		'&:hover': {
			color: theme.button.color.special,
		},
		backgroundColor: theme.button.backgroundColor.special,
		borderColor: theme.button.backgroundColor.special,
		color: theme.button.color.special,
	},
	teritary: {
		'&:hover': {
			color: theme.color.special,
		},
		backgroundColor: theme.color.transparent,
		color: theme.color.special,
	},
}));

const StyledLink = ({
	children,
	icon,
	label,
	onCLick,
	styles,
	to,
	button = false,
	large = false,
	medium = false,
	small = false,
	special = false,
	teritary = false,
	primary = false,
	secondary = false,
	noIconHover = false,
}) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<Link
			className={cn(
				classes.default,
				{
					[`${classes.btn}`]: button,
					[`${classes.small}`]: small,
					[`${classes.medium}`]: medium,
					[`${classes.large}`]: large,
					[`${classes.primary}`]: primary,
					[`${classes.primaryBtn}`]: primary && button,
					[`${classes.secondary}`]: secondary,
					[`${classes.teritary}`]: teritary,
					[`${classes.special}`]: special,
					[`${classes.specialBtn}`]: (special && button) || teritary,
				},
				styles
			)}
			onClick={onCLick}
			to={to}
		>
			{children ? (
				children
			) : (
				<div
					className={cn(classes.defaultContent, {
						[`${classes.hover}`]: noIconHover,
					})}
				>
					{icon && (
						<FontAwesomeIcon
							className={cn({ [`${classes.icon}`]: icon })}
							icon={icon}
						/>
					)}
					<span>{label}</span>
				</div>
			)}
		</Link>
	);
};

export default StyledLink;
