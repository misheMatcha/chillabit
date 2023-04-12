import React from 'react';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import StyledLink from './StyledLink';
import SearchBar from '../../components/SearchBar';
import Track from '../../components/Track';
import { PLACEHOLDER_TRACK_LIST } from '../../data/placeholderTrackList';
import { CHILLABIT } from '../../utils/constants';
import { styles } from '../../utils/styles';

const { alignItemsCenter, displayFlex, flexDirection, justifyContent, textAlignCenter, width } =
	styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...alignItemsCenter,
		...displayFlex,
		...flexDirection.column,
	},
	explore: {
		...alignItemsCenter,
		...displayFlex,
		...justifyContent.center,
		height: 46,
		marginTop: 5,
	},
	or: {
		...alignItemsCenter,
		...displayFlex,
		margin: '0 14px',
	},
	search: {
		...displayFlex,
		...justifyContent.center,
		...width[100].percentage,
		height: 46,
		marginBottom: 12,
		marginTop: 49,
	},
	title: {
		...textAlignCenter,
		fontSize: 26,
		marginBottom: 30,
		paddingTop: 20,
	},
	tracks: {
		'& li': {},
		...displayFlex,
		...justifyContent.spaceBetween,
		flexWrap: 'wrap',
		listStyle: 'none',
		margin: 0,
		padding: 0,
	},
	trending: {
		...width[100].percentage,
		padding: '0 30px',
		paddingBottom: 10,
	},
	upload: {
		fontSize: 16,
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
				<StyledLink styles={classes.upload}>Upload your own</StyledLink>
			</div>
			<div className={classes.trending}>
				<div className={classes.title}>
					Hear what’s trending for free in the {CHILLABIT} community
				</div>
				<ul className={classes.tracks}>
					{PLACEHOLDER_TRACK_LIST.map((track, i) => {
						return (
							<li key={i}>
								<Track
									artist={track.artist}
									cover={track.cover}
									title={track.title}
								/>
							</li>
						);
					})}
				</ul>
				<div className={classes.explore}>
					<StyledLink>Explore trending playlists</StyledLink>
				</div>
			</div>
		</div>
	);
};

export default Trending;
