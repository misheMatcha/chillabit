import React from 'react';
import * as cn from 'classnames';
import { createUseStyles } from 'react-jss';
import useSteps from '../../hooks/useSteps';
import { styles } from '../../utils/styles';

const { height, width } = styles;

const useStyles = createUseStyles({
	container: {
		...height[100].percentage,
		...width[100].percentage,
	},
	display: {
		display: 'none',
	},
});

const Step = ({ children, step }) => {
	const classes = useStyles();
	const { currentStep } = useSteps();

	return (
		<div className={cn(classes.container, { [`${classes.display}`]: currentStep !== step })}>
			{children}
		</div>
	);
};

export default Step;
