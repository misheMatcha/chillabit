import React from 'react';
import Select from 'antd/lib/select';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, radius, spacing, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	dropdown: {
		'& .ant-select-item': {
			...alignItems.center,
			...displayFlex,
			borderRadius: 0,
			padding: `0 ${spacing['2_25']}px`,
		},
		'& .ant-select-item-group': {
			...alignItems.flexEnd,
			...displayFlex,
			borderBottom: `1px solid ${theme.background.highlight}`,
			fontSize: 13,
			fontWeight: weight[500],
			letterSpacing: -1,
			lineHeight: 1.3,
			margin: `${spacing[1]}px 0`,
			paddingBottom: spacing['0_5'],
			paddingLeft: spacing['0_25'],
			textTransform: 'uppercase',
		},
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
		padding: '0 0 10px',
	},
	select: {
		'& .ant-select-selector': {
			...alignItems.center,
			...displayFlex,
			borderColor: '#ccc !important',
			borderRadius: radius[3],
			height: `${spacing['3_25']}px !important`,
			padding: '0 10px !important',
		},
	},
}));

const FormSelect = (props) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<Select
			dropdownAlign={{ offset: [0, 0] }}
			bordered={false}
			className={classes.select}
			popupClassName={classes.dropdown}
			{...props}
		/>
	);
};

export default FormSelect;
