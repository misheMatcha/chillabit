import React, { useEffect, useState } from 'react';
import Form from 'antd/lib/form';
import Radio from 'antd/lib/radio';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import FormItem from './FormItem';
import FormRadio from './FormRadio';
import { styles } from '../../utils/styles';

const { displayFlex, flexDirection, spacing, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	col: {
		...displayFlex,
		...flexDirection.column,
	},
	container: {
		'& > span:last-child': {
			fontSize: spacing['1_5'],
			fontWeight: weight[500],
			marginLeft: spacing['0_5'],
			padding: 0,
		},
	},
}));

const FormRadioGroup = ({ formConfig, column = false, options = [] }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const [currentValue, setCurrentValue] = useState('');

	const form = Form.useFormInstance();

	useEffect(() => {
		if (currentValue === '') setCurrentValue(form.getFieldValue(formConfig.name));
	}, [currentValue, form, formConfig.name]);

	const isCurrentValue = (value) => currentValue === value;

	return (
		<FormItem {...formConfig}>
			<Radio.Group
				className={cn({
					[`${classes.col}`]: column,
				})}
				onChange={(e) => setCurrentValue(e.target.value)}
			>
				{options.map(({ label, ...option }, i) => (
					<FormRadio
						key={`${i}-${label}`}
						label={label}
						isCurrentValue={isCurrentValue}
						{...option}
					/>
				))}
			</Radio.Group>
		</FormItem>
	);
};

export default FormRadioGroup;
