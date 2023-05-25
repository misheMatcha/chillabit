import React from 'react';
import Form from 'antd/lib/form';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
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
		...width[100].percentage,
		marginBottom: 10,
	},
}));

const FormItem = ({ children, label, name, rules, styles, inputConfig = {} }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	const getInput = (type) => {
		if (type === 'text') {
			return <FormInput {...inputConfig} />;
		} else if (type === 'select') {
			return <FormSelect {...inputConfig} />;
		}
	};

	return (
		<Form.Item
			className={cn(classes.container, styles)}
			colon={false}
			label={label}
			labelAlign='left'
			name={name}
			validateFirst={true}
			rules={rules}
		>
			{getInput(inputConfig.type)}
		</Form.Item>
	);
};

export default FormItem;
