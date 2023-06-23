import React from 'react';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { StepsProvider } from '../../context/StepsContext';
import { styles } from '../../utils/styles';

const { height, width } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...height[100].percentage,
		...width[100].percentage,
	},
}));

const Steps = ({ children, numSteps, styles }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<StepsProvider numSteps={numSteps}>
			<div className={cn(classes.container, styles)}>{children}</div>
		</StepsProvider>
	);
};

export default Steps;
