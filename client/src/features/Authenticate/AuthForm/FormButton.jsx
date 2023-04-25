import React from 'react';
import Button from 'antd/lib/button';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../../utils/styles';

const { radius, spacing, typography, width } = styles;

const useStyles = createUseStyles((theme) => ({
	base: {
		'&:hover': {
			borderColor: `${theme.button.backgroundColor.special} !important`,
			color: `${theme.button.color.special} !important`,
		},
		...typography.body,
		...width[100].percentage,
		backgroundColor: theme.button.backgroundColor.special,
		borderColor: theme.button.backgroundColor.special,
		borderRadius: radius[3],
		color: theme.button.color.special,
		height: spacing[5],
	},
}));

const FormButton = ({ children, onClick, htmlType }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<Button
			className={classes.base}
			htmlType={htmlType}
			onClick={onClick}
		>
			{children}
		</Button>
	);
};

export default FormButton;
