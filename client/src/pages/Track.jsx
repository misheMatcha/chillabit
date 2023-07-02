import React, { useEffect } from 'react';
import { faUserGroup, faUserPlus, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { createUseStyles, useTheme } from 'react-jss';
import { useLocation } from 'react-router-dom';
import PageLayoutTemplate from './PageLayoutTemplate';
import StyledButton from '../components/General/StyledButton';
import StyledLink from '../components/General/StyledLink';
import TruncateSection from '../components/General/TruncateSection';
import { TRACK_PLACEHOLDER, TRACK_USER_PLACEHOLDER } from '../data/trackPlaceholders';
import { Header, Sidebar } from '../features/track';
import useTrack from '../hooks/useTrack';
import { styles } from '../utils/styles';

const { displayFlex, height, spacing, weight } = styles;

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
	stat: {
		fontWeight: weight[600],
	},
	userInfo: {
		paddingRight: spacing['3_7'],
		width: 150,
	},
	userStats: {
		'& > :first-child': {
			marginRight: spacing['1_5'],
		},
		...displayFlex,
		marginBottom: 5,
	},
	username: {
		color: '#333',
		fontWeight: weight[400],
		letterSpacing: -0.5,
		margin: `${spacing['0_7']}px 0 5px`,
	},
}));

const { avatar, followers, tracks, username } = TRACK_USER_PLACEHOLDER;

const Track = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const location = useLocation();
	const { getTrack, track, setTrack } = useTrack();

	useEffect(() => {
		const title = location.pathname.split('/').filter(Boolean)[1];
		console.log(title);
		if (!track || track.permalink !== title) {
			getTrack(title)
				.then((res) => setTrack(res.data))
				.catch((err) => console.log(err.response.data));
		}

		console.log(track);
	});

	return (
		<PageLayoutTemplate
			header={<Header />}
			sidebar={<Sidebar />}
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
					<StyledLink styles={classes.username}>{username}</StyledLink>
					<div className={classes.userStats}>
						<StyledLink
							styles={classes.stat}
							to=''
							icon={faUserGroup}
							label={followers}
							primary
							small
							noIconHover
						/>
						<StyledLink
							styles={classes.stat}
							to=''
							icon={faWaveSquare}
							label={tracks}
							primary
							small
							noIconHover
						/>
					</div>
					<StyledButton
						icon={faUserPlus}
						label='Follow'
						special
					/>
				</div>
				<div className={classes.mainWrapper}>
					<TruncateSection maxHeight={140}>
						<p>{TRACK_PLACEHOLDER.desc}</p>
					</TruncateSection>
				</div>
			</div>
		</PageLayoutTemplate>
	);
};

export default Track;
