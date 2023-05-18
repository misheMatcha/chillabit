import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { styles } from '../../utils/styles';

const { displayFlex, radius, spacing, truncateText, typography } = styles;

const useStyles = createUseStyles((theme) => ({
	default: {
		'&:hover': {
			color: '#333',
		},
		...displayFlex,
		...typography.body,
		// borderRadius: radius[3],
		color: theme.link.color.standard,
		fontSize: spacing['1_7'],
		textDecoration: theme.link.textDecoration.standard,
	},
	defaultContent: {
		...truncateText,
	},
	icon: {
		marginRight: spacing['0_7'],
	},
	small: {
		'& $icon': {
			fontSize: 10,
		},
		...typography.captions,
		fontSize: spacing['1_5'],
	},
	primary: {
		color: '#999',
	},
	secondary: {
		color: theme.color.white,
	},
	special: {
		'&:hover': {
			color: theme.color.special,
		},
		color: theme.color.special,
	},
	hover: {
		'&:hover $icon': {
			color: '#999',
		},
	},
}));

const StyledLink = ({
	children,
	icon,
	label,
	styles,
	to,
	large = false,
	medium = false,
	small = false,
	special = false,
	transparent = false,
	white = false,
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
					[`${classes.small}`]: small,
					[`${classes.primary}`]: primary,
					[`${classes.secondary}`]: secondary,
					[`${classes.special}`]: special,
				},
				styles
			)}
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
