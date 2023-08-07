import React from 'react';
import Form from 'antd/lib/form';
import InputNumber from 'antd/lib/input-number';
import * as cn from 'classnames';
import isEmpty from 'lodash/isEmpty';
import { createUseStyles, useTheme } from 'react-jss';
import FormItem from './FormItem';
import { styles } from '../../utils/styles';

const { radius, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'& .ant-input-number-handler-wrap': {
			opacity: 1,
		},
		'&:focus-within, &:focus-within:hover': {
			borderColor: '#999',
		},
		'&:hover': {
			borderColor: '#ccc',
		},
		borderColor: '#ccc',
		boxShadow: 'none',
		color: '#333',
		display: 'flex',
		flexGrow: 1,
	},
	error: {
		borderColor: `${theme.color.error} !important`,
		boxShadow: 'none !important',
	},
	large: {
		'& .ant-input-number-input': {
			height: spacing[5],
			lineHeight: spacing[3],
			padding: `7px 30px 7px 8px`,
		},
		borderRadius: 5,
		fontSize: spacing['2_25'],
	},
}));

const preventDefault = (e) => e.preventDefault();

const FormInputNumber = ({
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
			<InputNumber
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

export default FormInputNumber;
