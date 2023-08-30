import React from 'react';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../../utils/styles';

const { textAlign, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...textAlign.center,
		...typography.h1,
		fontWeight: weight[600],
		// marginBottom: '1em',
		marginBottom: 32,
	},
}));

const Header = ({ children, styles }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return <div className={cn(classes.container, styles)}>{children}</div>;
};

export default Header;
