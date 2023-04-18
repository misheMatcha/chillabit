import React from 'react';
import Button from 'antd/lib/button';
import { createUseStyles } from 'react-jss';
import { styles } from '../../../utils/styles';

const { width } = styles;

const useStyles = createUseStyles({
	btn: {
		'&:hover': {
			borderColor: '#f50 !important',
			color: '#fff !important',
		},
		...width[100].percentage,
		backgroundColor: '#f50',
		borderColor: '#f50',
		borderRadius: 3,
		color: '#fff',
		fontSize: 16,
		fontWeight: 500,
		height: 40,
	},
});

const FormButton = ({ children, onClick, htmlType }) => {
	const classes = useStyles();

	return (
		<Button
			className={classes.btn}
			htmlType={htmlType}
			onClick={onClick}
		>
			{children}
		</Button>
	);
};

export default FormButton;
