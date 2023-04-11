import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import StyledLink from './StyledLink';
import SearchBar from '../../components/SearchBar';
import { CHILLABIT } from '../../utils/constants';
import { styles } from '../../utils/styles';

const { alignItemsCenter, displayFlex, flexDirection, justifyContent, textAlignCenter } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...alignItemsCenter,
		...displayFlex,
		...flexDirection.column,
		// ...justifyContent.center,
		// backgroundColor: theme.color.gray,
		backgroundColor: 'blueviolet',
	},
	explore: {
		backgroundColor: 'yellow',
		marginTop: 5,
	},
	or: {
		margin: '0 14px',
	},
	search: {
		...displayFlex,
		backgroundColor: 'blue',
		height: 46,
		marginBottom: 12,
		marginTop: 49,
	},
	title: {
		...textAlignCenter,
		fontSize: 24,
		marginBottom: 30,
		paddingTop: 20,
	},
	tracks: {
		height: 500,
	},
	trending: {
		paddingBottom: 10,
	},
}));

const Trending = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<div className={classes.search}>
				<SearchBar />
				<span className={classes.or}>or</span>
				<StyledLink>Upload your own</StyledLink>
			</div>
			<div className={classes.trending}>
				<div className={classes.title}>
					Hear what’s trending for free in the {CHILLABIT} community
				</div>
				<div className={classes.tracks}>trending</div>
				<div className={classes.explore}>
					<StyledLink>Explore trending playlists</StyledLink>
				</div>
			</div>
		</div>
	);
};

export default Trending;
