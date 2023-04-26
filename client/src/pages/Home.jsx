import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
	container: {
		backgroundColor: theme.background.surface,
	},
}));

const Home = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<div>home</div>
		</div>
	);
};

export default Home;
