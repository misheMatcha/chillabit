import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import EmptyProfilePage from './EmptyProfilePage';
import { styles } from '../../../utils/styles';

const {} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {},
}));

// Refac/consolidate other pages to single page when tracks feature is complete

const PopularTracks = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<EmptyProfilePage
			icon='tracks'
			uploadButton
		/>
	);
};

export default PopularTracks;
