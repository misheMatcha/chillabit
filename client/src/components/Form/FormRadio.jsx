import React from 'react';
import Radio from 'antd/lib/radio';
import * as cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../utils/styles';

const { spacing, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'& .ant-radio': {
			'& .ant-radio-inner': {
				'&::after': {
					backgroundColor: '#333',
				},
				backgroundColor: theme.background.highlight,
				borderColor: '#666',
				height: 14,
				width: 14,
			},
		},
		'& > span:last-child': {
			fontSize: spacing['1_5'],
			fontWeight: weight[500],
			marginLeft: spacing['0_5'],
			padding: 0,
		},
	},
	disabled: {
		'& .ant-radio': {
			'& .ant-radio-inner': {
				backgroundColor: '#e5e5e5',
				borderColor: '#ccc',
			},
		},
		'& > span:last-child': {
			color: '#999',
		},
	},
	flexStart: {
		'& > span:first-child, > span:last-child': {
			alignSelf: 'flex-start',
		},
		marginBottom: spacing['1_5'],
	},
	labelDesc: {
		color: '#666',
		fontSize: spacing['1_5'],
		lineHeight: 1.2,
	},
}));

const wrapperVariants = {
	animate: {
		height: 'auto',
	},
	exit: {
		height: 0,
		transition: {
			delay: 0,
			duration: 0.5,
		},
	},
	initial: {
		height: 0,
	},
	transition: {
		delay: 0.5,
		duration: 0.5,
	},
};

const variants = {
	animate: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.2,
		},
	},
	initial: {
		opacity: 0,
	},
	transition: {
		delay: 0.5,
		duration: 1,
	},
};

const FormRadio = ({
	children,
	disabled,
	isCurrentValue,
	label,
	labelDesc,
	value,
	alignFlexStart = false,
	animated = false,
	styles,
	...props
}) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<Radio
			className={cn(
				classes.container,
				{
					[`${classes.disabled}`]: disabled,
					[`${classes.flexStart}`]: alignFlexStart,
				},
				styles
			)}
			value={value}
			{...props}
		>
			{animated ? (
				<>
					<div className={classes.label}>{label}</div>
					<AnimatePresence>
						{isCurrentValue(value) && (
							<motion.div
								className={classes.labelDesc}
								{...wrapperVariants}
							>
								<motion.span {...variants}>{labelDesc}</motion.span>
							</motion.div>
						)}
					</AnimatePresence>
				</>
			) : children ? (
				children
			) : (
				label
			)}
		</Radio>
	);
};

export default FormRadio;
