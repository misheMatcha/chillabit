import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../../utils/styles';

const { spacing, typography } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...typography.captions,
		color: theme.color.error,
		marginBottom: spacing['1_5'],
		marginTop: spacing['0_7'],
	},
}));

const FormError = ({ children }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return <div className={classes.container}>{children}</div>;
};

export default FormError;
