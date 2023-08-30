import React from 'react';
import * as cn from 'classnames';
import { createUseStyles } from 'react-jss';
import useSteps from '../../../hooks/useSteps';

const useStyles = createUseStyles({
	container: {
		height: '100%',
		width: '100%',
	},
	hide: {
		display: 'none',
	},
});

const Step = ({ children, step }) => {
	const classes = useStyles();
	const { currentStep } = useSteps();

	return (
		<div
			className={cn(classes.container, {
				[`${classes.hide}`]: step !== currentStep,
			})}
		>
			{children}
		</div>
	);
};

export default Step;
