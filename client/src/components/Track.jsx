import React from 'react';
import { faCirclePlay, faEllipsis, faHeart, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../utils/styles';

const { alignItemsCenter, displayFlex, flexDirection, height, justifyContent, width } = styles;

const useStyles = createUseStyles((theme) => ({
	action: {
		'&:hover': {
			color: 'rebeccapurple',
		},
		fontSize: 14,
		padding: '3px 4px',
	},
	artist: {},
	container: {
		border: '1px solid black',
		height: 258,
	},
	cover: {
		'& > div': {
			...height[100].percentage,
			...width[100].percentage,
		},
		...displayFlex,
		border: '1px solid black',
		height: 180,
		width: 180,
	},
	info: {},
	layer1: {
		'&:hover': {
			opacity: 1,
		},
		...displayFlex,
		...flexDirection.column,
		backgroundColor: 'yellow',
		justifyContent: 'flex-end',
		opacity: 0,
		zIndex: 1,
	},
	layer2: {
		backgroundColor: 'yellowgreen',
		marginLeft: '-100%',
	},
	play: {
		'&:hover': {
			color: 'rebeccapurple',
		},
	},
	playWrapper: {
		...displayFlex,
		...justifyContent.center,
		fontSize: 58,
	},
	playableActions: {
		...displayFlex,
		justifyContent: 'flex-end',
		margin: 5,
	},
	playableActionsWrapper: {
		...displayFlex,
		alignItems: 'flex-end',
		background: 'linear-gradient(0deg,rgba(0,0,0,.4),transparent)',
		height: 50,
		justifyContent: 'flex-end',
	},
	title: {},
}));

const Track = ({ artist, cover, title }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<div className={classes.cover}>
				<div className={classes.layer1}>
					<div className={classes.playWrapper}>
						<FontAwesomeIcon
							className={classes.play}
							icon={faCirclePlay}
						/>
					</div>
					<div className={classes.playableActionsWrapper}>
						<div className={classes.playableActions}>
							<FontAwesomeIcon
								className={classes.action}
								icon={faHeart}
							/>
							<FontAwesomeIcon
								className={classes.action}
								icon={faUserPlus}
							/>
							<FontAwesomeIcon
								className={classes.action}
								icon={faEllipsis}
							/>
						</div>
					</div>
				</div>
				<div className={classes.layer2}>layer 2</div>
			</div>
			<div className={classes.info}>
				<div className={classes.title}>{title}</div>
				<div className={classes.artist}>{artist}</div>
			</div>
		</div>
	);
};

export default Track;
