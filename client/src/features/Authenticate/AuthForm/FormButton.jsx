import React from 'react';
import Button from 'antd/lib/button';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../../utils/styles';

const { spacing, typography, width } = styles;

const useStyles = createUseStyles((theme) => ({
	base: {
		'&:hover': {
			borderColor: `${theme.button.special.background} !important`,
			color: `${theme.button.special.font} !important`,
		},
		...typography.body,
		...width[100].percentage,
		backgroundColor: theme.button.special.background,
		borderColor: theme.button.special.background,
		borderRadius: 3,
		color: theme.button.special.font,
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
