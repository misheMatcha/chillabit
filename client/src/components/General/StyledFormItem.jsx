import React from 'react';
import Form from 'antd/lib/form';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import StyledInput from './StyledInput';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, flexDirection, spacing, typography } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'& .ant-col': {
			flex: 0,
		},
		'& .ant-form-item-label': {
			'& label': {
				...alignItems.flexStart,
				...displayFlex,
				...typography.captions,
				fontSize: 13,
				height: 25,
			},
		},
		'& .ant-form-item-row': {
			...flexDirection.column,
		},
		paddingBottom: 15,
	},
	halfWidth: {
		'& .ant-form-item-control-input': {
			minHeight: spacing['3_25'],
		},
		width: 256,
	},
	input: {
		...typography.captions,
		fontSize: 13,
		height: spacing['3_25'],
		padding: `${spacing['0_25']}px 7px`,
	},
	required: {
		'& .ant-form-item-required': {
			'&::after': {
				color: `${theme.color.error} !important`,
				content: "'*' !important",
			},
			'&::before': {
				display: 'none !important',
			},
		},
	},
}));

const StyledFormItem = ({
	children,
	formStyles,
	inputStyles,
	label,
	name,
	onChange,
	placeholder,
	rules,
	required = false,
	small = false,
}) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<Form.Item
			className={cn(
				classes.container,
				{
					[`${classes.required}`]: required,
					[`${classes.halfWidth}`]: small,
				},
				formStyles
			)}
			colon={false}
			label={label}
			name={name}
			rules={rules}
		>
			{children ? (
				children
			) : (
				<StyledInput
					onChange={onChange}
					styles={cn({ [`${classes.input}`]: small }, inputStyles)}
					placeholder={placeholder}
				/>
			)}
		</Form.Item>
	);
};

export default StyledFormItem;
