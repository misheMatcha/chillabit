import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Outlet } from 'react-router';
import Header from './Header';
import Sidebar from '../../components/Sidebar';
import { styles } from '../../utils/styles';

const { displayFlex, height } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {},
	contentWrapper: {
		'& > div:first-child': {
			...displayFlex,
			flexGrow: 1,
		},
		...displayFlex,
		...height[100].percentage,
		backgroundColor: theme.background.surface,
		padding: '0 30px',
	},
}));

const Profile = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<Header />
			<div className={classes.contentWrapper}>
				<Outlet />
				<Sidebar />
			</div>
		</div>
	);
};

export default Profile;
