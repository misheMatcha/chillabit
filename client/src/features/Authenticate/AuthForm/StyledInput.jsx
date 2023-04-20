import React from 'react';
import Input from 'antd/lib/input';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../../utils/styles';

const { spacing, typography } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'&:focus, &:hover': {
			borderColor: '#ccc',
			boxShadow: 'none',
		},
		...typography.body,
		backgroundColor: theme.color.white,
		borderColor: '#ccc',
		borderRadius: spacing['0_5'],
		color: '#333',
		height: spacing[5],
	},
	invalid: {
		'&:focus, &:hover': {
			borderColor: theme.input.invalid.border,
		},
		borderColor: theme.input.invalid.border,
	},
}));

const StyledInput = ({
	isInvalid,
	maxLength,
	onChange,
	onClick,
	placeholder,
	styles,
	type,
	value,
}) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<Input
			className={cn(classes.container, { [`${classes.invalid}`]: isInvalid }, styles)}
			maxLength={maxLength}
			onChange={onChange}
			onClick={onClick}
			placeholder={placeholder}
			type={type}
			value={value}
		/>
	);
};

export default StyledInput;
