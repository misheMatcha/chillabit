import React, { useEffect } from 'react';
import Form from 'antd/lib/form';
import Select from 'antd/lib/select';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import FormItem from './FormItem';
import { styles } from '../../utils/styles';

const { spacing, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'& .ant-select-selector': {
			'&:focus-within': {
				borderColor: '#999 !important',
			},
			'&:hover': {
				borderColor: '#999 !important',
			},
			boxShadow: 'none !important',
		},
		'& .ant-form-item-explain-connected': {
			// marginBottom: spacing[1],
		},
		'& .ant-form-item-explain-error': {
			// color: theme.color.error,
			// fontSize: 13,
			// fontWeight: weight[600],
			// padding: `6px 0`,
		},
	},
	large: {
		'& .ant-select-selector': {
			borderRadius: 5,
			fontSize: spacing['2_25'],
			height: `${spacing[5]}px !important`,
			lineHeight: spacing[3],
			padding: `7px ${spacing[1]}px !important`,
		},
	},
	popup: {
		borderRadius: 0,
	},
}));

const FormSelect = ({
	formConfig,
	popupStyles,
	styles,
	dropdownAlign = { offset: [0, 0] },
	large = false,
	...props
}) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	useEffect(() => {});

	return (
		<FormItem {...formConfig}>
			<Select
				popupClassName={cn(classes.popup, popupStyles)}
				className={cn(
					classes.container,
					{
						[`${classes.large}`]: large,
					},
					styles
				)}
				dropdownAlign={dropdownAlign}
				{...props}
			/>
		</FormItem>
	);
};

export default FormSelect;
