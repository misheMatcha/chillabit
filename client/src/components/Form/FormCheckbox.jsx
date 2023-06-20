import React, { useState } from 'react';
import Checkbox from 'antd/lib/checkbox';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../utils/styles';

const { typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'& .ant-checkbox-checked .ant-checkbox-inner': {
			'&::after': {
				borderWidth: 3,
				left: '26%',
				transform: 'rotate(-45deg) scaleX(-1) translate(-30%,-50%)',
				width: 12,
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
			fontWeight: weight[600],
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

const FormCheckbox = (props) => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const [isChecked, setIsChecked] = useState(false);

	return (
		<Checkbox
			className={cn(classes.container, props.styles)}
			onChange={() => setIsChecked(!isChecked)}
		>
			<div className={classes.title}>{props.title}</div>
			{isChecked ? props.checked : props.unchecked}
		</Checkbox>
	);
};

export default FormCheckbox;
