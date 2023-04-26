import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { styles } from '../utils/styles';

const { height, spacing, width } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {},
}));

const Helmet = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<NavBar />
			<Outlet />
		</div>
	);
};

export default Helmet;
