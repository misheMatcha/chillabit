import React from 'react';
import Input from 'antd/lib/input';
import * as cn from 'classnames';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	container: {
		'&:focus': {
			borderColor: '#ccc',
			boxShadow: 'none',
		},
		'&:hover': {
			borderColor: '#ccc',
		},
		backgroundColor: '#fff',
		borderColor: '#ccc',
		borderRadius: 5,
		color: '#333',
		fontSize: 18,
		height: 40,
	},
	error: {
		'&:focus': {
			borderColor: '#d61348',
		},
		'&:hover': {
			borderColor: '#d61348',
		},
		borderColor: '#d61348',
	},
});

const StyledInput = ({ error, maxLength, onChange, onClick, placeholder, styles, type, value }) => {
	const classes = useStyles();

	return (
		<Input
			className={cn(classes.container, { [`${classes.error}`]: error }, styles)}
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
