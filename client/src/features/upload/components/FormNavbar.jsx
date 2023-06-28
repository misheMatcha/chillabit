import React from 'react';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import useSteps from '../../../hooks/useSteps';
import { styles } from '../../../utils/styles';

const { alignItems, displayFlex, height, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'& > li:first-child': {
			marginLeft: 0,
		},
		...displayFlex,
		borderBottom: `1px solid ${theme.background.highlight}`,
		marginBottom: spacing[2],
	},
	link: {
		'&:hover': {
			color: '#333',
		},
		...alignItems.center,
		...displayFlex,
		...height[100].percentage,
		...typography.h1,
		color: '#333',
		fontSize: spacing['3_25'],
		fontWeight: weight[600],
		letterSpacing: -1,
	},
	linkActive: {
		'& $link': {
			color: theme.color.special,
		},
		borderColor: `${theme.color.special} !important`,
	},
	list: {
		'&:hover': {
			borderColor: theme.color.black,
		},
		borderBottom: `${spacing['0_25']}px solid ${theme.color.transparent}`,
		margin: `0 ${spacing['1_5']}px`,
	},
	new: {
		...typography.micro,
		border: `1px solid ${theme.color.special}`,
		color: theme.color.special,
		fontSize: 10,
		letterSpacing: -0.5,
		marginLeft: spacing['0_5'],
		padding: spacing['0_5'],
	},
}));

const FormNavbar = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { currentStep, setCurrentStep } = useSteps();

	const uploadNavList = [
		{ label: 'Basic info', step: 3 },
		{ label: 'Metadata', step: 4 },
		{ label: 'Permissions', step: 5 },
		{
			label: (
				<>
					<span>Advanced</span>
					<span className={classes.new}>new</span>
				</>
			),
			step: 6,
		},
	];

	return (
		<div>
			<ul className={classes.container}>
				{uploadNavList.map(({ label, step }, i) => (
					<li
						className={cn(classes.list, { [`${classes.linkActive}`]: step === currentStep })}
						key={i}
						onClick={() => setCurrentStep(step)}
					>
						<Link className={classes.link}>{label}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FormNavbar;
