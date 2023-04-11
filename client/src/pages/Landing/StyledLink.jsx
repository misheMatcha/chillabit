import React from 'react';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles((theme) => ({
	base: {
		'&:hover': {
			color: theme.btn.fontColor,
		},
		backgroundColor: theme.btn.bg,
		border: `1px solid ${theme.btn.bg}`,
		borderRadius: theme.btn.borderRadius,
		color: theme.btn.fontColor,
		fontSize: 18,
		height: 46,
		padding: '12px 15px',
	},
}));

const StyledLink = ({ children, styles, to }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<Link
			to={to}
			className={cn(classes.base, styles)}
		>
			{children}
		</Link>
	);
};

export default StyledLink;
