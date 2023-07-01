import React from 'react';
import Form from 'antd/lib/form';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, flexDirection, spacing, typography, weight, width } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'& .ant-form-item-control-input': {
			minHeight: spacing['3_25'],
		},
		'& .ant-form-item-explain': {
			height: 27.8,
		},
		'& .ant-form-item-explain-error': {
			...typography.captions,
			color: theme.color.error,
			fontSize: 13,
			fontWeight: weight[600],
			padding: `${spacing['0_7']}px 0 5px`,
		},
		'& .ant-form-item-label': {
			'& label': {
				...displayFlex,
				...alignItems.flexStart,
				...typography.captions,
				fontSize: 13,
				height: 24.8,
			},
		},
		'& .ant-form-item-required': {
			'&::before': {
				display: 'none !important',
			},
		},
		'& .ant-row': {
			flexGrow: 1,
		},
		...displayFlex,
		marginBottom: 10,
	},
	fullWidth: {
		...width[100].percentage,
	},
	marginTop: {
		marginTop: 10,
	},
	required: {
		...typography.micro,
		color: theme.color.error,
		marginLeft: spacing['0_25'],
	},
	topLabel: {
		'& .ant-row': {
			...flexDirection.column,
		},
	},
}));

const FormItem = ({
	children,
	label,
	styles,
	colon = false,
	marginTop = true,
	topLabel = true,
	...props
}) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<Form.Item
			className={cn(
				classes.container,
				{
					[`${classes.marginTop}`]: marginTop,
					[`${classes.topLabel}`]: topLabel,
				},
				styles
			)}
			colon={colon}
			label={
				props.required ? (
					<>
						{label}
						<span className={classes.required}>*</span>
					</>
				) : (
					label
				)
			}
			labelAlign='left'
			validateFirst={true}
			validateTrigger={['onChange', 'onSubmit']}
			wrapperCol={{
				flex: 1,
			}}
			{...props}
		>
			{children}
		</Form.Item>
	);
};

export default FormItem;
