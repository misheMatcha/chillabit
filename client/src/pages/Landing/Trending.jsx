import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import StyledLink from '../../components/General/StyledLink';
import SearchBar from '../../components/SearchBar';
import Track from '../../components/Track';
import { PLACEHOLDER_TRACK_LIST } from '../../data/placeholderTrackList';
import { CHILLABIT } from '../../utils/constants';
import { styles } from '../../utils/styles';

const {
	alignItems,
	displayFlex,
	flexDirection,
	justifyContent,
	spacing,
	textAlign,
	typography,
	weight,
	width,
} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...alignItems.center,
		...displayFlex,
		...flexDirection.column,
	},
	explore: {
		...alignItems.center,
		...displayFlex,
		...justifyContent.center,
		height: spacing['5_7'],
		marginTop: spacing['0_5'],
	},
	or: {
		...alignItems.center,
		...displayFlex,
		margin: `0 ${spacing[2]}px`,
	},
	search: {
		...displayFlex,
		...justifyContent.center,
		...width[100].percentage,
		height: spacing['5_7'],
		marginBottom: spacing['1_5'] + 2,
		marginTop: 49,
	},
	title: {
		...textAlign.center,
		...typography.h2,
		fontWeight: weight[400],
		marginBottom: 30,
		paddingTop: spacing['2_5'],
	},
	tracks: {
		...displayFlex,
		...justifyContent.spaceBetween,
		flexWrap: 'wrap',
		listStyle: 'none',
		margin: 0,
		padding: 0,
	},
	trending: {
		...width[100].percentage,
		padding: `0 ${spacing[4]}px`,
		paddingBottom: spacing['1_5'],
	},
	upload: {
		...typography.h4,
		fontWeight: weight[500],
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
				<StyledLink
					styles={classes.upload}
					label='Upload your own'
					button
					large
					special
				/>
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
					<StyledLink
						to=''
						button
						large
						special
						label='Explore trending playlists'
					/>
				</div>
			</div>
		</div>
	);
};

export default Trending;
