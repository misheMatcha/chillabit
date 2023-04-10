import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	container: {},
});

const Home = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div>home</div>
		</div>
	);
};

export default Home;
