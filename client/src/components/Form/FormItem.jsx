import React from 'react';
import Form from 'antd/lib/form';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import FormCheckbox from './FormCheckbox';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormTextarea from './FormTextarea';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, flexDirection, spacing, typography, weight, width } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'& .ant-col': {
			flex: 0,
		},
		'& .ant-form-item-explain': {
			margin: `${spacing['0_7']}px 0`,
		},
		'& .ant-form-item-explain-error': {
			...typography.captions,
			color: theme.color.error,
			fontSize: 13,
		},

		'& .ant-form-item-label': {
			'& label': {
				fontSize: 13,
				height: spacing['1_5'],
			},
			...alignItems.flexStart,
			...displayFlex,
			fontWeight: weight[500],
			marginBottom: spacing[1],
		},

		'& .ant-form-item-required': {
			'&::after': {
				color: `${theme.color.error} !important`,
				content: "'*' !important",
				fontSize: spacing['1_5'],
			},
			'&::before': {
				display: 'none !important',
			},
		},
		'& .ant-row': {
			...flexDirection.column,
		},
		marginBottom: 10,
	},
	fullWidth: {
		...width[100].percentage,
	},
}));

const FormItem = ({
	children,
	label,
	name,
	rules,
	styles,
	fullWidth = false,
	inputConfig = {},
}) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	const getInput = (type) => {
		switch (type) {
			case 'text':
				return <FormInput {...inputConfig} />;
			case 'select':
				return <FormSelect {...inputConfig} />;
			case 'tetextarea':
				return <FormTextarea {...inputConfig} />;
			case 'checkbox':
				return <FormCheckbox {...inputConfig} />;
			default:
		}
	};

	return (
		<Form.Item
			className={cn(classes.container, { [`${classes.fullWidth}`]: fullWidth }, styles)}
			colon={false}
			label={label}
			labelAlign='left'
			name={name}
			validateFirst={true}
			rules={rules}
		>
			{children ? children : getInput(inputConfig.type)}
		</Form.Item>
	);
};

export default FormItem;
