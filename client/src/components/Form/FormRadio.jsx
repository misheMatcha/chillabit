import React from 'react';
import Radio from 'antd/lib/radio';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import FormItem from './FormItem';
import { styles } from '../../utils/styles';

const { spacing, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'& .ant-radio': {
			'& .ant-radio-inner': {
				'&::after': {
					backgroundColor: '#333',
				},
				backgroundColor: theme.background.highlight,
				borderColor: '#666',
				height: 14,
				width: 14,
			},
		},
		'& > span:last-child': {
			fontSize: spacing['1_5'],
			fontWeight: weight[500],
			marginLeft: spacing['0_5'],
			padding: 0,
		},
	},
}));

const FormRadio = ({ children, formConfig, styles, options = [], ...props }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<FormItem {...formConfig}>
			<Radio.Group>
				{options.map((radio, i) => (
					<Radio
						key={`${i}-${radio.label}`}
						className={cn(classes.container, styles)}
						{...radio}
					>
						{radio.label}
					</Radio>
				))}
			</Radio.Group>
		</FormItem>
	);
};

export default FormRadio;
