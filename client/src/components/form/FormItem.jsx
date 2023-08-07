import React, { useEffect } from 'react';
import Form from 'antd/lib/form';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, flexDirection, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'& .ant-form-item-explain-connected': {
			marginBottom: spacing[1],
		},
		'& .ant-form-item-explain-error': {
			color: theme.color.error,
			fontSize: 13,
			fontWeight: weight[600],
			padding: `6px 0`,
		},
		marginBottom: spacing[2],
	},
}));

const FormItem = ({ children, styles, colon = false, ...props }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	useEffect(() => {});

	return (
		<Form.Item
			className={cn(classes.container, styles)}
			colon={colon}
			{...props}
		>
			{children}
		</Form.Item>
	);
};

export default FormItem;
