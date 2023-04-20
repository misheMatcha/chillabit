import React from 'react';
import Input from 'antd/lib/input';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
	container: {
		'&:focus, &:hover': {
			borderColor: '#ccc',
			boxShadow: 'none',
		},
		backgroundColor: '#fff',
		borderColor: '#ccc',
		borderRadius: 5,
		color: '#333',
		fontSize: 18,
		height: 40,
	},
	error: {
		'&:focus, &:hover': {
			borderColor: theme.error,
		},
		borderColor: theme.error,
	},
}));

const StyledInput = ({
	isError,
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
			className={cn(classes.container, { [`${classes.error}`]: isError }, styles)}
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
