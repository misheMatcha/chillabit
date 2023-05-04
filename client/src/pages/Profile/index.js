import React, { useEffect, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Outlet } from 'react-router';
import Sidebar from '../../components/Sidebar';
import useCurrentPath from '../../hooks/useCurrentPath';
import { styles } from '../../utils/styles';

const {
	alignItems,
	displayFlex,
	flexDirection,
	height,
	justifyContent,
	radius,
	spacing,
	typography,
	weight,
	width,
} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {},
	contentWrapper: {
		'& > div:first-child': {
			...displayFlex,
			flexGrow: 1,
		},
		...displayFlex,
		padding: '0 30px',
	},
}));

const Profile = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { fullPath, userIdentifier } = useCurrentPath();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {});

	return (
		<div className={classes.container}>
			<div>profile</div>
			<div className={classes.contentWrapper}>
				<Outlet />
				<Sidebar />
			</div>
		</div>
	);
};

export default Profile;
