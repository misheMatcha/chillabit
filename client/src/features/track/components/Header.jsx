import React from 'react';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { TRACK_PLACEHOLDER } from '../../../data/trackPlaceholders';
import useGeneral from '../../../hooks/useGeneral';
import { styles } from '../../../utils/styles';

const {
	alignItems,
	displayFlex,
	flexDirection,
	justifyContent,
	spacing,
	typography,
	weight,
	width,
} = styles;

const useStyles = createUseStyles((theme) => ({
	artist: {
		...alignItems.center,
		...displayFlex,
		...typography.body,
		color: '#ccc',
		fontSize: spacing[2],
		letterSpacing: -0.25,
		lineHeight: 1.2,
		marginTop: spacing['0_5'],
		padding: `${spacing['0_5']}px ${spacing[1]}px ${spacing['0_25']}px`,
	},
	container: {
		...displayFlex,
		backgroundImage: 'linear-gradient(315deg, rgb(221, 201, 187) 0%, rgb(108, 89, 78) 100%)',
		height: 380,
		marginBottom: spacing['2_5'],
	},
	content: {
		'& > div:first-child': {
			...displayFlex,
			...justifyContent.spaceBetween,
		},
		...displayFlex,
		...flexDirection.column,
		...justifyContent.spaceBetween,
		...width[100].percentage,
		margin: `${spacing['3_7']}px 10px ${spacing['3_7']}px ${spacing['3_7']}px`,
	},
	image: {
		background: ({ trackCover }) => `url(${trackCover})`,
		height: 340,
		margin: spacing['2_5'],
		minWidth: 340,
	},
	listenInfo: {
		...alignItems.center,
		...displayFlex,
	},
	play: {
		'& > a': {
			...displayFlex,
			color: theme.color.special,
			height: '100%',
		},
		fontSize: 60,
		marginRight: 5,
	},
	tags: {
		'&::before': {
			content: "'#'",
			marginRight: 3,
		},
		backgroundColor: '#999',
		border: `1px solid #999`,
		borderRadius: spacing['2_5'],
		padding: `3px ${spacing[1]}px 0`,
	},
	title: {
		...typography.h2,
		fontWeight: weight[500],
		letterSpacing: -0.75,
		lineHeight: '37px',
		padding: `${spacing['0_25']}px ${spacing[1]}px 0`,
	},
	trackDesc: {
		'& > div': {
			backgroundColor: 'rgba(0, 0, 0, 0.8)',
			color: theme.color.white,
			width: 'max-content',
		},
	},
	trackInfo: {
		'& > div:first-child': {
			marginBottom: spacing[2],
		},
		...alignItems.flexEnd,
		...displayFlex,
		...flexDirection.column,
		...typography.h4,
		color: theme.color.white,
		fontWeight: weight[600],
	},
}));

const { artist, date, tags, title, trackCover } = TRACK_PLACEHOLDER;

const Header = () => {
	const theme = useTheme();
	const { user } = useGeneral();
	const classes = useStyles({ theme, trackCover, user });
	return (
		<div className={classes.container}>
			<div className={classes.content}>
				<div>
					<div className={classes.listenInfo}>
						<div className={classes.play}>
							<Link>
								<FontAwesomeIcon icon={faCirclePlay} />
							</Link>
						</div>
						<div className={classes.trackDesc}>
							<div className={classes.title}>{title}</div>
							<div className={classes.artist}>{artist}</div>
						</div>
					</div>
					<div className={classes.trackInfo}>
						<div>{date}</div>
						{tags && <div className={classes.tags}>{tags}</div>}
					</div>
				</div>
			</div>
			<div className={classes.image} />
		</div>
	);
};

export default Header;
