import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import EmptyProfilePage from './EmptyProfilePage';
import { styles } from '../../../utils/styles';

const {} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {},
}));

const Reposts = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<EmptyProfilePage
			linkText='Learn about reposts'
			tag='You haven’t reposted any sounds.'
		/>
	);
};

export default Reposts;
