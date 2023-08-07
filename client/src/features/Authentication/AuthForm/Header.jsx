import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../../utils/styles';

const { spacing, textAlign, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	apple: {
		'&:hover': {
			borderColor: `${theme.color.black} !important`,
			color: `${theme.color.white} !important`,
		},
		backgroundColor: theme.color.black,
		borderColor: theme.color.black,
		color: theme.color.white,
	},
	btn: {
		...typography.body,
		borderRadius: spacing['0_5'],
		height: spacing[5],
	},
	container: {
		'& p': {
			marginBottom: spacing['0_7'],
		},
		...typography.captions,
	},
	returningUser: {
		marginBottom: 8,
	},
	title: {
		...textAlign.center,
		...typography.h1,
		fontWeight: weight[600],
		marginBottom: '1em',
	},
}));

const Header = ({ children }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return <div className={classes.container}>{children}</div>;
};

export default Header;
