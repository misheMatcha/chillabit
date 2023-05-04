import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import useAuth from '../../hooks/useAuth';
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

const Profile = ({ user = null }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	// const {user} = useAuth()

	return (
		<div className={classes.container}>
			<div>profile</div>
		</div>
	);
};

export default Profile;
