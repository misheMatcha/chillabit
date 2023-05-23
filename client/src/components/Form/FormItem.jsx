import React from 'react';
import Form from 'antd/lib/form';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import FormInput from './FormInput';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, flexDirection, spacing, typography, weight } = styles;

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
			fontWeight: weight[600],
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
}));

const FormItem = ({ children, label, name, rules, styles, inputConfig = {} }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	const getInput = (type) => {
		if (type === 'text') {
			return <FormInput {...inputConfig} />;
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
			// rules={rules}
			rules={[
				{ message: 'Enter a profile URL.', required: true },
				{ message: 'short.', len: 5 },
				{ message: 'short.', min: 3 },
			]}
		>
			{getInput(inputConfig.type)}
		</Form.Item>
	);
};

export default FormItem;
