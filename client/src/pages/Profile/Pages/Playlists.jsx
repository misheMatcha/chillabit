import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import EmptyProfilePage from './EmptyProfilePage';
import { styles } from '../../../utils/styles';

const {} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {},
}));

const Playlists = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<EmptyProfilePage
			icon='lists'
			linkText='Learn about playlists'
			tag='You haven’t created any playlists.'
		/>
	);
};

export default Playlists;
