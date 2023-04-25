import React from 'react';
import Input from 'antd/lib/input';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../../utils/styles';

const { radius, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'&:focus, &:hover': {
			borderColor: '#ccc',
			boxShadow: 'none',
		},
		...typography.h3,
		backgroundColor: theme.color.white,
		borderColor: '#ccc',
		borderRadius: radius[4],
		color: '#333',
		fontWeight: weight[400],
		height: spacing[5],
	},
	invalid: {
		'&:focus, &:hover': {
			borderColor: theme.input.borderColor.invalid,
		},
		borderColor: theme.input.borderColor.invalid,
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
