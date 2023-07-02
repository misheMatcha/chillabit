import React from 'react';
import { faClone, faHeart, faRepeat, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { createUseStyles } from 'react-jss';
import { Playlist, Section, Tracks, Users } from '../../../components/sidebar';
import {
	TRACKS_LIKES_LIST_PLACEHOLDER,
	TRACKS_PLAYLISTS_PLACEHOLDER,
	TRACKS_REPOSTS_LIST_PLACEHOLDER,
	TRACKS_SIDEBAR_LIST_PLACEHOLDER,
} from '../../../data/trackPlaceholders';

const useStyles = createUseStyles((theme) => ({
	container: {
		paddingTop: 10,
	},
}));

const Sidebar = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Section
				icon={faWaveSquare}
				title='Related tracks'
			>
				{TRACKS_SIDEBAR_LIST_PLACEHOLDER.map((track, i) => (
					<Tracks
						key={i}
						track={track}
					/>
				))}
			</Section>
			<Section
				icon={faClone}
				title='In playlists'
			>
				{TRACKS_PLAYLISTS_PLACEHOLDER.map((playlist, i) => (
					<Playlist
						key={i}
						playlist={playlist}
					/>
				))}
			</Section>
			<Section
				icon={faHeart}
				title='144K likes'
			>
				<Users users={TRACKS_LIKES_LIST_PLACEHOLDER} />
			</Section>
			<Section
				icon={faRepeat}
				title='4,700 reposts'
			>
				<Users users={TRACKS_REPOSTS_LIST_PLACEHOLDER} />
			</Section>
		</div>
	);
};

export default Sidebar;
