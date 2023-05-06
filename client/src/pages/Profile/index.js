import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Outlet } from 'react-router';
import Header from './Header';
import ProfileNavBar from './ProfileNavBar';
import Sidebar from '../../components/Sidebar';
import { styles } from '../../utils/styles';

const { displayFlex, flexDirection, width } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...displayFlex,
		...flexDirection.column,
	},
	content: {
		'& > div:first-child': {
			...displayFlex,
			flexGrow: 1,
		},
		...displayFlex,
		...width[100].percentage,
		backgroundColor: 'red',
	},
	contentWrapper: {
		...displayFlex,
		...flexDirection.column,
		backgroundColor: theme.background.surface,
		flex: 1,
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
				<ProfileNavBar />
				<div className={classes.content}>
					<Outlet />
					<Sidebar />
				</div>
			</div>
		</div>
	);
};

export default Profile;
