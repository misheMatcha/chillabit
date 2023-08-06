import React from 'react';
import Form from 'antd/lib/form';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, flexDirection, spacing, typography } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {},
}));

const FormItem = ({ children, styles, colon = false, ...props }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

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
