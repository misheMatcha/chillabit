import React from 'react';
import { faHeart, faMessage, faPlay, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { styles } from '../../../utils/styles';

const { displayFlex, flexDirection, justifyContent, spacing, truncateText, typography, weight } =
	styles;

const useStyles = createUseStyles((theme) => ({
	artist: {
		...typography.h5,
		...truncateText,
		color: '#999',
		fontSize: spacing['1_7'],
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
		backgroundColor: 'rebeccapurple',
		height: 50,
		width: 50,
	},
	statLink: {
		'& svg': {
			fontSize: 10,
			marginRight: spacing['0_25'],
		},
		color: '#999',
		fontSize: spacing['1_5'],
		marginRight: spacing['1_5'],
	},
	stats: {},
	title: {
		...typography.h5,
		...truncateText,
		color: '#333',
		fontSize: spacing['1_7'],
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
				<Link className={classes.artist}>{artist}</Link>
				<Link className={classes.title}>{title}</Link>
				<div className={classes.stats}>
					<Link className={classes.statLink}>
						<FontAwesomeIcon icon={faPlay} />
						{plays}
					</Link>
					<Link className={classes.statLink}>
						<FontAwesomeIcon icon={faHeart} />
						{likes}
					</Link>
					<Link className={classes.statLink}>
						<FontAwesomeIcon icon={faRepeat} />
						{reposts}
					</Link>
					<Link className={classes.statLink}>
						<FontAwesomeIcon icon={faMessage} />
						{comments}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SidebarTrack;
