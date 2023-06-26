import React from 'react';
import Input from 'antd/lib/input';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import FormItem from './FormItem';
import { styles } from '../../utils/styles';

const { radius, spacing } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'&:focus, &:focus:hover': {
			boxShadow: 'none !important',
		},
		borderRadius: radius[3],
		height: 26,
		padding: `${spacing['0_25']}px 7px`,
	},
	default: {
		'&:focus, &:focus:hover': {
			borderColor: '#999',
		},
		'&:hover': {
			borderColor: '#ccc',
		},
		borderColor: '#ccc',
	},
	error: {
		borderColor: `${theme.color.error} !important`,
		color: `${theme.color.error} !important`,
	},
}));

const preventDefault = (e) => e.preventDefault();

const FormInput = ({ error, formConfig, styles, onPressEnter = preventDefault, ...props }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<FormItem {...formConfig}>
			<Input
				className={cn(
					classes.container,
					{
						[`${classes.default}`]: !error,
						[`${classes.error}`]: error,
					},
					styles
				)}
				onPressEnter={onPressEnter}
				{...props}
			/>
		</FormItem>
	);
};

export default FormInput;
