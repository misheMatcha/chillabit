import React from 'react';
import Input from 'antd/lib/input';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import FormItem from './FormItem';
import { styles } from '../../utils/styles';

const { radius, spacing } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'&::placeholder': {
			color: '#999',
		},
		'&:focus, &:focus:hover': {
			borderColor: '#999',
			boxShadow: 'none',
		},
		'&:hover': {
			borderColor: '#ccc',
		},

		borderColor: '#ccc',
		borderRadius: radius[3],
		color: '#333',
		padding: `${spacing['0_25']}px 7px`,
	},
	showCount: {
		'& .ant-input': {
			'&::placeholder': {
				color: '#999',
			},
			padding: `0 43px 0 7px !important`,
		},
		'& .ant-input-suffix': {
			'& .ant-input-data-count': {
				bottom: 36,
				marginRight: spacing[1],
			},
		},
		'&:hover': {
			borderColor: '#ccc !important',
		},
		boxShadow: 'none',
		height: 101,
	},
}));

const FormTextarea = ({ formConfig, styles, disableReize = false, ...props }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<FormItem {...formConfig}>
			<Input.TextArea
				className={cn(
					classes.container,
					{
						[`${classes.showCount}`]: props.showCount,
					},
					styles
				)}
				style={{ resize: disableReize ? 'none' : '' }}
				{...props}
			/>
		</FormItem>
	);
};

export default FormTextarea;
