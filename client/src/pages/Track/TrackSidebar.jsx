import React from 'react';
import { faClone, faHeart, faRepeat, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { createUseStyles, useTheme } from 'react-jss';
import SidebarSection from '../../components/General/Sidebar/SidebarSection';
import { styles } from '../../utils/styles';

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
	container: {},
}));

const TrackSidebar = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	return (
		<div className={classes.container}>
			<SidebarSection
				icon={faWaveSquare}
				title='Related tracks'
			>
				a
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
