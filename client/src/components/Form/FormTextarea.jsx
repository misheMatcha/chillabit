import React, { useEffect } from 'react';
import Input from 'antd/lib/input';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, radius, spacing, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'&::placeholder': {
			color: '#999',
		},
		'&:focus, &:focus:hover': {
			borderColor: '#999',
			boxShadow: 'none',
		},
		'&:hover': {
			borderColor: '#ccc',
		},

		borderColor: '#ccc',
		borderRadius: radius[3],
		color: '#333',
		padding: `${spacing['0_25']}px 7px`,
	},
	disableResize: {
		'& > textarea': {
			resize: 'none',
		},
	},
	showCount: {},
}));

const FormTextarea = (props) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<Input.TextArea
			className={cn(
				classes.container,
				{
					// [`${classes.showCount}`]: props.showCount,
					// [`${classes.disableResize}`]: props.showCount,
				},
				props.styles
			)}
			{...props}
		/>
	);
};

export default FormTextarea;
