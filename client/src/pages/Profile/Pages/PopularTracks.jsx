import React from 'react';
import EmptyProfilePage from './EmptyProfilePage';

// Refac/consolidate other pages to single page when tracks feature is complete

const PopularTracks = () => {
	return (
		<EmptyProfilePage
			icon='tracks'
			uploadButton
		/>
	);
};

export default PopularTracks;
