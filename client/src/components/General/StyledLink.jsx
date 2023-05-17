import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { styles } from '../../utils/styles';

const { displayFlex, radius, spacing, typography } = styles;

const useStyles = createUseStyles((theme) => ({
	bold: {},
	btn: {
		border: `1px solid black`,
		padding: `${spacing['0_25']}px 15px`,
	},
	default: {
		'&:hover': {
			color: '#333',
		},
		...typography.body,
		...displayFlex,
		borderRadius: radius[3],
		color: theme.link.color.standard,
		fontWeight: ({ bold }) => bold,
		height: 30,
		textDecoration: theme.link.textDecoration.standard,
		width: 'fit-content',
	},
	large: {},
	medium: {
		height: spacing[5],
		padding: '10px 15px',
	},
	special: {
		'&:hover': {
			color: theme.button.color.special,
		},
		backgroundColor: theme.button.backgroundColor.special,
		borderColor: theme.button.backgroundColor.special,
		color: theme.button.color.special,
	},
	transparent: {
		backgroundColor: theme.color.transparent,
	},
	transparentSpecial: {
		'&:hover': {
			color: theme.button.backgroundColor.special,
		},
		color: theme.button.backgroundColor.special,
	},
	transparentWhite: {
		'&:hover': {
			color: theme.color.white,
		},
		borderColor: theme.color.white,
		color: theme.color.white,
	},
}));

const StyledLink = ({
	children,
	icon,
	label,
	styles,
	to,
	bold = 500,
	button = false,
	large = false,
	medium = false,
	special = false,
	transparent = false,
	white = false,
}) => {
	const theme = useTheme();
	const classes = useStyles({ bold, theme });

	return (
		<Link
			className={cn(
				classes.default,
				{
					[`${classes.btn}`]: (button && !special) || (button && special),
					[`${classes.special}`]: (special && !button) || (special && button),
					[`${classes.transparent}`]: transparent,
					[`${classes.transparentSpecial}`]: transparent && special,
					[`${classes.transparentWhite}`]: transparent && white,
					[`${classes.large}`]: large,
					[`${classes.medium}`]: medium,
				},
				styles
			)}
			to={to}
		>
			{children ? (
				children
			) : (
				<div>
					{icon && <FontAwesomeIcon icon={icon} />}
					<span>{label}</span>
				</div>
			)}
		</Link>
	);
};

export default StyledLink;
