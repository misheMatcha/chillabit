import React from 'react';
import Input from 'antd/lib/input';
import * as cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { styles } from '../../../utils/styles';

const { alignItemsCenter, displayFlex, flexDirection, height, justifyContent, width } = styles;

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
});

const StyledInput = ({ onChange, onClick, placeholder, styles, type, value }) => {
	const classes = useStyles();

	return (
		<Input
			className={cn(classes.container, styles)}
			onChange={onChange}
			onClick={onClick}
			placeholder={placeholder}
			type={type}
			value={value}
		/>
	);
};

export default StyledInput;
