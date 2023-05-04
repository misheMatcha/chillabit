import React, { useEffect, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Outlet } from 'react-router';
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
}));

const Profile = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { fullPath, identifier } = useCurrentPath();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {});

	return (
		<div className={classes.container}>
			<div>profile</div>
			<Outlet />
		</div>
	);
};

export default Profile;
