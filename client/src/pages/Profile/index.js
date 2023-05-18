import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import ProfileHeader from './ProfileHeader';
import ProfileNavBar from './ProfileNavBar';
import ProfileSidebar from './ProfileSidebar';
import useAuth from '../../hooks/useAuth';
import useCurrentPath from '../../hooks/useCurrentPath';
import useGeneral from '../../hooks/useGeneral';
import axios from '../../utils/axios';
import PageLayoutTemplate from '../PageLayoutTemplate';

const Profile = () => {
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
		<PageLayoutTemplate
			header={<ProfileHeader />}
			nav={<ProfileNavBar />}
			sidebar={<ProfileSidebar />}
		>
			<Outlet />
		</PageLayoutTemplate>
	);
};

export default Profile;
