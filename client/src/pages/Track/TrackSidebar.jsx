import React from 'react';
import { faClone, faHeart, faRepeat, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { createUseStyles } from 'react-jss';
import SidebarPlaylist from '../../components/SidebarSections/SidebarPlaylist';
import SidebarSection from '../../components/SidebarSections/SidebarSection';
import SidebarTrack from '../../components/SidebarSections/SidebarTrack';
import SidebarUsers from '../../components/SidebarSections/SidebarUsers';
import {
	TRACKS_LIKES_LIST_PLACEHOLDER,
	TRACKS_PLAYLISTS_PLACEHOLDER,
	TRACKS_REPOSTS_LIST_PLACEHOLDER,
	TRACKS_SIDEBAR_LIST_PLACEHOLDER,
} from '../../data/trackPlaceholders';

const useStyles = createUseStyles((theme) => ({
	container: {
		paddingTop: 10,
	},
}));

const TrackSidebar = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<SidebarSection
				icon={faWaveSquare}
				title='Related tracks'
			>
				{TRACKS_SIDEBAR_LIST_PLACEHOLDER.map((track, i) => (
					<SidebarTrack
						key={i}
						track={track}
					/>
				))}
			</SidebarSection>
			<SidebarSection
				icon={faClone}
				title='In playlists'
			>
				{TRACKS_PLAYLISTS_PLACEHOLDER.map((playlist, i) => (
					<SidebarPlaylist
						key={i}
						playlist={playlist}
					/>
				))}
			</SidebarSection>
			<SidebarSection
				icon={faHeart}
				title='144K likes'
			>
				<SidebarUsers users={TRACKS_LIKES_LIST_PLACEHOLDER} />
			</SidebarSection>
			<SidebarSection
				icon={faRepeat}
				title='4,700 reposts'
			>
				<SidebarUsers users={TRACKS_REPOSTS_LIST_PLACEHOLDER} />
			</SidebarSection>
		</div>
	);
};

export default TrackSidebar;
