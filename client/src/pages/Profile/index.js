import React, { useEffect, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Outlet } from 'react-router';
import Header from './Header';
import ProfileNavBar from './ProfileNavBar';
import Sidebar from '../../components/Sidebar';
import useAuth from '../../hooks/useAuth';
import useCurrentPath from '../../hooks/useCurrentPath';
import useGeneral from '../../hooks/useGeneral';
import axios from '../../utils/axios';
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
	const [loading, setLoading] = useState(true);
	const { currentUser } = useAuth();
	const { setUser, user } = useGeneral();
	const { identifier, userPathMatches } = useCurrentPath();

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await axios.get(`/users/${identifier}`);
				setUser(response.data);
			} catch (err) {
				console.log(err.response.data);
			}
		};

		if (loading) {
			if (userPathMatches) {
				setUser(currentUser);
			} else {
				fetchUser();
			}
			setLoading(false);
		}
	}, [currentUser, identifier, loading, setUser, user, userPathMatches]);

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
