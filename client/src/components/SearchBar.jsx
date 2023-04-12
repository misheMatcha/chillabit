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
// - fix hover/focus colors
// - add onSearch fnc
// - style to be reused in navbar

const useStyles = createUseStyles((theme) => ({
	container: {
		'& > span': {
			'& > input': {
				'&:hover': {
					borderColor: `${theme.color.gray} !important`,
				},
				backgroundColor: `${theme.color.gray} !important`,
				borderColor: theme.color.gray,
				color: '#666',
				fontSize: 16,
				padding: '0 16px',
			},
			'& > span': {
				'& > button': {
					'&:hover': {
						borderColor: `${theme.color.gray} !important`,
					},
					...btnSize,
					backgroundColor: `${theme.color.gray} !important`,
					borderColor: theme.color.gray,
					color: '#666 !important',
					fontSize: 20,
				},
				...btnSize,
				backgroundColor: 'yellow !important',
			},
			...displayFlex,
			height: 46,
		},
		backgroundColor: theme.color.gray,
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
