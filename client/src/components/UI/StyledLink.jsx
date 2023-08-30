import React from 'react';
import * as cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, flexDirection, justifyContent, spacing, typography, width } =
	styles;

const useStyles = createUseStyles({
	container: {
		'&:hover': {
			color: '#333',
		},
		color: '#044dd2',
	},
	small: {
		// ...typography.captions,
		// fontSize: 12,
	},
});

const StyledLink = ({ children, styles, small = false }) => {
	const classes = useStyles();

	return (
		<Link
			className={cn(
				classes.container,
				{
					[`${classes.small}`]: small,
				},
				styles
			)}
		>
			{children}
		</Link>
	);
};

export default StyledLink;
