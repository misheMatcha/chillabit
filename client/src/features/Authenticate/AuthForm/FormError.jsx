import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
	container: {
		color: theme.error,
		fontSize: 12,
		fontWeight: 500,
		margin: '6px 0 12px',
	},
}));

const FormError = ({ error }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return <div className={classes.container}>{error}</div>;
};

export default FormError;
