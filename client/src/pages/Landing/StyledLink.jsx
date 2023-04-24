import React from 'react';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { styles } from '../../utils/styles';

const { borderRadius, spacing, typography } = styles;

const useStyles = createUseStyles((theme) => ({
	base: {
		'&:hover': {
			color: theme.button.color.special,
		},
		...borderRadius,
		...typography.body,
		backgroundColor: theme.button.backgroundColor.special,
		border: `1px solid ${theme.button.backgroundColor.special}`,
		color: theme.button.color.special,
		fontSize: spacing['0_7'] * 3,
		height: spacing[6],
		padding: `${spacing['1_5']}px ${spacing[2]}px`,
		textDecoration: theme.link.textDecoration.standard,
	},
	clear: {
		backgroundColor: theme.color.transparent,
		borderColor: theme.button.color.special,
	},
}));

const StyledLink = ({ children, clear = false, styles, to }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<Link
			to={to}
			className={cn(classes.base, { [`${classes.clear}`]: clear }, styles)}
		>
			{children}
		</Link>
	);
};

export default StyledLink;
