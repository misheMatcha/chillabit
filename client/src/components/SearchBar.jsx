import React from 'react';
import Input from 'antd/lib/input';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../utils/styles';

const { Search } = Input;
const { displayFlex, radius, spacing, typography } = styles;

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
					borderColor: `${theme.background.highlight} !important`,
					boxShadow: 'none',
				},
				'&:hover': {
					borderColor: `${theme.background.highlight} !important`,
				},
				'&:hover + span > button': {
					borderColor: `${theme.background.highlight} !important`,
				},
				backgroundColor: `${theme.background.highlight} !important`,
				borderColor: theme.background.highlight,
				color: '#666',
				...typography.body,
				padding: `0 ${spacing[2]}px`,
			},
			'& > span': {
				'& > button': {
					'&:hover': {
						borderColor: `${theme.background.highlight} !important`,
					},
					...btnSize,
					backgroundColor: `${theme.background.highlight} !important`,
					borderColor: theme.background.highlight,
					color: '#666 !important',
					fontSize: spacing['2_5'],
				},
				...btnSize,
			},
			...displayFlex,
			height: spacing['5_7'],
		},
		backgroundColor: theme.background.highlight,
		borderRadius: radius[4],
		width: 600,
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
