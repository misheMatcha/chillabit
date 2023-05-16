import React from 'react';
import EmptyProfilePage from './EmptyProfilePage';

const Playlists = () => {
	return (
		<EmptyProfilePage
			icon='lists'
			linkText='Learn about playlists'
			tag='You haven’t created any playlists.'
		/>
	);
};

export default Playlists;
