import React from 'react';
import { faUserGroup, faUserPlus, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles, useTheme } from 'react-jss';
import TrackHeader from './TrackHeader';
import TrackSidebar from './TrackSidebar';
import StyledButton from '../../components/General/StyledButton';
import { TRACK_PLACEHOLDER, TRACK_USER_PLACEHOLDER } from '../../data/trackPlaceholders';
import { styles } from '../../utils/styles';
import PageLayoutTemplate from '../PageLayoutTemplate';

const {
	alignItems,
	displayFlex,
	flexDirection,
	height,
	justifyContent,
	spacing,
	typography,
	weight,
} = styles;

const useStyles = createUseStyles((theme) => ({
	avatar: {
		backgroundColor: 'lavender',
		borderRadius: '50%',
		height: 120,
		width: 120,
	},
	container: {
		...displayFlex,
		...height[100].percentage,
	},
	mainWrapper: {
		...displayFlex,
		flexGrow: 1,
	},
	userInfo: {
		paddingRight: 30,
		width: 150,
	},
	userStats: {
		...displayFlex,
		color: '#999',
		...typography.captions,
		fontSize: spacing['1_5'],
		marginBottom: 5,
	},
	username: {
		...typography.captions,
		fontSize: 14,
		fontWeight: weight[400],
		margin: `${spacing['0_7']}px 0 5px`,
	},
}));

const Track = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	const { avatar, followers, tracks, username } = TRACK_USER_PLACEHOLDER;

	return (
		<PageLayoutTemplate
			header={<TrackHeader />}
			sidebar={<TrackSidebar />}
		>
			<div className={classes.container}>
				<div className={classes.userInfo}>
					<div className={classes.avatar}>
						<img
							className={classes.avatar}
							src={avatar}
							alt=''
						/>
					</div>
					<div className={classes.username}>{username}</div>
					<div className={classes.userStats}>
						<div>
							<FontAwesomeIcon icon={faUserGroup} />
							{followers}
						</div>
						<div>
							<FontAwesomeIcon icon={faWaveSquare} />
							{tracks}
						</div>
					</div>
					<StyledButton
						icon={faUserPlus}
						label='Follow'
						special
					/>
				</div>
				<div className={classes.mainWrapper}>
					<div>{TRACK_PLACEHOLDER.desc}</div>
				</div>
			</div>
		</PageLayoutTemplate>
	);
};

export default Track;
