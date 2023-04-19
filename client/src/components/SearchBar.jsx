import React from 'react';
import Input from 'antd/lib/input';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../utils/styles';

const { Search } = Input;
const { displayFlex } = styles;

const btnSize = {
	height: '46px !important',
	width: '50px !important',
};

// TODO
// - add onSearch fnc
// - style to be reused in navbar

const useStyles = createUseStyles((theme) => ({
	container: {
		'& > span': {
			'& > input': {
				'&:focus': {
					borderColor: `#f2f2f2 !important`,
					boxShadow: 'none',
				},
				'&:hover': {
					borderColor: `#f2f2f2 !important`,
				},
				'&:hover + span > button': {
					borderColor: `#f2f2f2 !important`,
				},
				backgroundColor: `#f2f2f2 !important`,
				borderColor: '#f2f2f2',
				color: '#666',
				fontSize: 16,
				padding: '0 16px',
			},
			'& > span': {
				'& > button': {
					'&:hover': {
						borderColor: `#f2f2f2 !important`,
					},
					...btnSize,
					backgroundColor: `#f2f2f2 !important`,
					borderColor: '#f2f2f2',
					color: '#666 !important',
					fontSize: 20,
				},
				...btnSize,
			},
			...displayFlex,
			height: 46,
		},
		backgroundColor: '#f2f2f2',
		borderRadius: 4,
		width: 518,
	},
}));

const SearchBar = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<Search
			className={classes.container}
			placeholder='Search for artists, bands, tracks, podcasts'
		/>
	);
};

export default SearchBar;
