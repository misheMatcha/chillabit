import React from 'react';
import TrackHeader from './TrackHeader';
import TrackSidebar from './TrackSidebar';
import PageLayoutTemplate from '../PageLayoutTemplate';

const Track = () => {
	return (
		<PageLayoutTemplate
			header={<TrackHeader />}
			sidebar={<TrackSidebar />}
		>
			hello
		</PageLayoutTemplate>
	);
};

export default Track;
