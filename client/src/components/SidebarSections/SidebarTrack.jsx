import React from 'react';
import { faHeart, faMessage, faPlay, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../utils/styles';
import StyledLink from '../General/StyledLink';

const { displayFlex, flexDirection, justifyContent, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	artist: {
		...typography.h5,
		fontWeight: weight[600],
	},
	container: {
		'& a': {
			textDecoration: theme.link.textDecoration.standard,
		},
		...displayFlex,
		...justifyContent.spaceBetween,
		...typography.captions,
		margin: '5px 0',
	},
	content: {
		...displayFlex,
		...flexDirection.column,
		width: 240,
	},
	image: {
		height: 50,
		width: 50,
	},
	stats: {
		'& > :not(:last-child)': {
			marginRight: spacing['1_5'],
		},
		...displayFlex,
	},
	title: {
		...typography.h5,
		color: '#333',
		fontWeight: weight[500],
	},
}));

const SidebarTrack = ({ track }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	const { artist, comments, likes, plays, reposts, title, trackCover } = track;

	return (
		<div className={classes.container}>
			<img
				className={classes.image}
				src={trackCover}
				alt={title}
			/>
			<div className={classes.content}>
				<StyledLink
					styles={classes.artist}
					to=''
					label={artist}
					primary
				/>
				<StyledLink
					styles={classes.title}
					to=''
					label={title}
					primary
				/>
				<div className={classes.stats}>
					<StyledLink
						icon={faPlay}
						label={plays}
						small
						primary
						labelHover
						noIconHover
					/>
					<StyledLink
						icon={faHeart}
						label={likes}
						small
						primary
						labelHover
						noIconHover
					/>
					<StyledLink
						icon={faRepeat}
						label={reposts}
						small
						primary
						labelHover
						noIconHover
					/>
					<StyledLink
						icon={faMessage}
						label={comments}
						small
						primary
						labelHover
						noIconHover
					/>
				</div>
			</div>
		</div>
	);
};

export default SidebarTrack;
