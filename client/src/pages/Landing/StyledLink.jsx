import React from 'react';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { styles } from '../../utils/styles';

const { borderRadius } = styles;

const useStyles = createUseStyles((theme) => ({
	base: {
		'&:hover': {
			color: '#fff',
		},
		...borderRadius,
		backgroundColor: '#f50',
		border: `1px solid #f50`,
		color: '#fff',
		fontSize: 18,
		height: 46,
		padding: '12px 15px',
		textDecoration: 'none',
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
