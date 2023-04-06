import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	container: {},
});

const App = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div>app</div>
		</div>
	);
};

export default App;
