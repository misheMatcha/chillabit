import React from 'react';
import { faClone, faHeart, faRepeat, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { createUseStyles } from 'react-jss';
import SidebarSection from '../../components/General/Sidebar/SidebarSection';
import SidebarTrack from '../../components/General/Sidebar/SidebarTrack';
import { TRACKS_SIDEBAR_LIST } from '../../data/trackPlaceholders';

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
				{TRACKS_SIDEBAR_LIST.map((track, i) => (
					<SidebarTrack
						key={i}
						track={track}
					/>
				))}
			</SidebarSection>
			<SidebarSection
				icon={faClone}
				title='In albums'
			>
				a
			</SidebarSection>
			<SidebarSection
				icon={faClone}
				title='In playlists'
			>
				a
			</SidebarSection>
			<SidebarSection
				icon={faHeart}
				title='144K likes'
			>
				a
			</SidebarSection>
			<SidebarSection
				icon={faRepeat}
				title='4,700 reposts'
			>
				a
			</SidebarSection>
		</div>
	);
};

export default TrackSidebar;
