import React, { useEffect, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../utils/styles';

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
	container: {
		width: 300,
	},
}));

const Sidebar = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {});

	return (
		<div className={classes.container}>
			<div>sidebar</div>
		</div>
	);
};

export default Sidebar;
