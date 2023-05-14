import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import ProfilePagesTemplate from './ProfilePagesTemplate';
import { styles } from '../../utils/styles';

const {} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {},
}));

const PopularTracks = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return <ProfilePagesTemplate></ProfilePagesTemplate>;
};

export default PopularTracks;
