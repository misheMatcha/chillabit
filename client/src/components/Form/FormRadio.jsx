import React from 'react';
import Radio from 'antd/lib/radio';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../utils/styles';

const { spacing } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'& .ant-radio': {
			'& .ant-radio-inner': {
				'&::after': {
					backgroundColor: '#333',
					content: "''",
					display: 'block',
					height: spacing['3_5'],
					inset: 1,
					position: 'absolute',
					width: spacing['3_5'],
				},
				backgroundColor: 'transparent',
				borderColor: '#666',
			},
		},
		'& > span:last-child': {
			marginLeft: spacing['0_7'],
			padding: 0,
		},
	},
}));

const FormRadio = (props, { children, styles }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<Radio
			className={cn(classes.container, styles)}
			{...props}
		>
			{children ? children : props.label}
		</Radio>
	);
};

export default FormRadio;
