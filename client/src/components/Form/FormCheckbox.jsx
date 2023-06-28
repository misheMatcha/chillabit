import React, { useState } from 'react';
import Checkbox from 'antd/lib/checkbox';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import FormItem from './FormItem';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, justifyContent, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'& .ant-checkbox-checked .ant-checkbox-inner': {
			'&::after': {
				borderColor: '#333',
				left: '15%',
			},
			backgroundColor: `${theme.background.highlight} !important`,
			borderColor: `#333 !important`,
		},
		'& .ant-checkbox-checked:after': {
			border: 'none !important',
		},
		'& .ant-checkbox-inner': {
			backgroundColor: `${theme.background.highlight} !important`,
			borderColor: `#333 !important`,
			borderRadius: spacing['0_25'],
			height: 13,
			width: 13,
		},
		'& > span:last-child': {
			...typography.captions,
			fontSize: 13,
		},
		...displayFlex,
		...justifyContent.center,
		...alignItems.center,
	},
	special: {
		'& .ant-checkbox-checked .ant-checkbox-inner': {
			'&::after': {
				borderWidth: 3,
				left: '26%',
				transform: 'rotate(-45deg) scaleX(-1) translate(-30%,-50%)',
				width: spacing['1_5'],
			},
			backgroundColor: `${theme.color.special} !important`,
			borderColor: `${theme.color.special} !important`,
		},
		'& .ant-checkbox-checked:after': {
			border: 'none !important',
		},
		'& .ant-checkbox-inner': {
			backgroundColor: '#e5e5e5 !important',
			border: '1px solid #cecece !important',
			borderRadius: '50%',
			height: 26,
			width: 26,
		},
		'& > span:last-child': {
			...typography.captions,
			color: '#666',
			fontSize: 13,
			fontWeight: weight[500],
			letterSpacing: 0.025,
			paddingLeft: 10,
		},
		width: 235,
	},
	title: {
		color: '#333',
		marginBottom: 7,
	},
}));

const FormCheckbox = ({
	formConfig,
	checkedLabel,
	children,
	label,
	styles,
	title,
	special = false,
	...props
}) => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const [isChecked, setIsChecked] = useState(false);

	return (
		<FormItem {...formConfig}>
			{special ? (
				<Checkbox
					className={cn(classes.special, styles)}
					onChange={() => setIsChecked(!isChecked)}
					{...props}
				>
					<div className={classes.title}>{title}</div>
					{isChecked && checkedLabel ? checkedLabel : label}
				</Checkbox>
			) : (
				<Checkbox
					className={cn(classes.container, styles)}
					{...props}
				>
					{children ? children : label}
				</Checkbox>
			)}
		</FormItem>
	);
};

export default FormCheckbox;
