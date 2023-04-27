import React from 'react';
import Input from 'antd/lib/input';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../utils/styles';

const { Search } = Input;
const { radius, spacing, typography, weight } = styles;

// TODO
// - add onSearch fnc
// - remove onClick animation

const useStyles = createUseStyles((theme) => ({
	defaultStyle: {
		'& .ant-input': {
			'&::placeholder': {
				color: '#999',
			},
			'&:focus, &:hover': {
				border: 0,
				boxShadow: 'none',
			},
			...typography.body,
			backgroundColor: theme.background.highlight,
			border: 0,
			borderRadius: radius[4],
			color: '#666',
			fontWeight: weight[400],
			height: spacing['5_7'],
		},
		'& .ant-input-group-addon .ant-btn': {
			'& span': {
				color: '#666',
				fontSize: spacing['2_5'],
			},
			'&:hover': {
				color: '#666 !important',
			},
			backgroundColor: theme.background.highlight,
			border: 0,
			fontWeight: weight[700],
			height: spacing['5_7'],
			width: 50,
		},
		width: 600,
	},
	navStyle: {
		'& .ant-input': {
			backgroundColor: '#e5e5e5',
			fontSize: 14,
			height: spacing['3_5'],
			letterSpacing: -0.5,
			padding: '5px 7px',
		},
		'& .ant-input-group-addon .ant-btn': {
			'& span': {
				fontSize: spacing['1_7'],
			},
			backgroundColor: '#e5e5e5',
			height: spacing['3_5'],
			width: 30,
		},
		'& .anticon anticon-search': {},
	},
}));

const SearchBar = ({ isNav = false }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<Search
			className={cn(classes.defaultStyle, { [`${classes.navStyle}`]: isNav })}
			placeholder='Search for artists, bands, tracks, podcasts'
		/>
	);
};

export default SearchBar;
