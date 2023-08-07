import React from 'react';
import { createUseStyles } from 'react-jss';
import { StepsProvider } from '../../../context/StepsContext';

const useStyles = createUseStyles({
	container: {
		// display: 'flex',
	},
});

const Wrapper = ({ children }) => {
	const classes = useStyles();

	return (
		<StepsProvider>
			<div className={classes.container}>{children}</div>
		</StepsProvider>
	);
};

export default Wrapper;
