import React from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import * as cn from 'classnames';
import isEmpty from 'lodash/isEmpty';
import { createUseStyles, useTheme } from 'react-jss';
import FormItem from './FormItem';
import { styles } from '../../utils/styles';

const { radius, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'&:focus, &:focus:hover': {
			borderColor: '#999',
			boxShadow: 'none',
		},
		'&:hover': {
			borderColor: '#ccc',
		},
		borderColor: '#ccc',
	},
	error: {
		borderColor: `${theme.color.error} !important`,
		boxShadow: 'none !important',
	},
	large: {
		borderRadius: 5,
		fontSize: spacing['2_25'],
		height: spacing[5],
		lineHeight: spacing[3],
		padding: `7px ${spacing[1]}px`,
	},
}));

const preventDefault = (e) => e.preventDefault();

const FormInput = ({
	formConfig,
	styles,
	large = false,
	onPressEnter = preventDefault,
	...props
}) => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const form = Form.useFormInstance();

	return (
		<FormItem {...formConfig}>
			<Input
				className={cn(
					classes.container,
					{
						[`${classes.error}`]: !isEmpty(form.getFieldError(formConfig.name)),
						[`${classes.large}`]: large,
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
