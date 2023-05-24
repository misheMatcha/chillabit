import React, { useState } from 'react';
import Select from 'antd/lib/select';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import FormInput from './FormInput';
import { styles } from '../../utils/styles';

const {
	alignItems,
	displayFlex,
	flexDirection,
	height,
	justifyContent,
	radius,
	spacing,
	typography,
	weight,
} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...displayFlex,
	},
	downdown: {
		'& .ant-select-item': {
			...alignItems.center,
			...displayFlex,
			borderRadius: 0,
			padding: '0 18px',
		},
		'& .ant-select-item-option': {},
		'& .ant-select-item-option-active': {
			'&:hover': {
				color: theme.color.special,
			},
			backgroundColor: `${theme.color.transparent} !important`,
			borderRadius: 0,
		},

		'& .ant-select-item-option-selected': {
			backgroundColor: `${theme.color.transparent} !important`,
			color: `${theme.color.special} !important`,
			fontWeight: `${weight[500]} !important`,
		},
		borderRadius: 0,
		padding: 0,
	},
	inputPosition: {
		...flexDirection.column,
	},
	inputSpacing: {
		marginLeft: 10,
	},
	select: {
		'& .ant-select-selector': {
			...alignItems.center,
			...displayFlex,
			borderColor: '#ccc !important',
			borderRadius: radius[3],
			height: '26px !important',
			padding: '0 10px !important',
		},
	},
}));

const FormSelect = (props) => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const [custom, setCustom] = useState('');
	const [isCustom, setIsCustom] = useState(false);

	return (
		<div
			className={cn(classes.container, {
				[`${classes.inputPosition}`]: props.inputPosition === 'bottom',
			})}
		>
			{props.customoption ? (
				<Select
					bordered={false}
					className={classes.select}
					popupClassName={classes.downdown}
					defaultOpen={true}
					onSelect={(value) =>
						value === 'Custom' || value === 'custom' ? setIsCustom(true) : setIsCustom(false)
					}
					{...props}
				>
					{props.customoption}
				</Select>
			) : (
				<Select
					dropdownStyle={{ backgroundColor: 'red !important', padding: '0 !important' }}
					defaultOpen={true}
					onSelect={(value) =>
						value === 'Custom' || value === 'custom' ? setIsCustom(true) : setIsCustom(false)
					}
					{...props}
				/>
			)}
			{isCustom && <FormInput styles={classes.inputSpacing} />}
		</div>
	);
};

export default FormSelect;
