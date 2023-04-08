import React from 'react';
import { createUseStyles } from 'react-jss';
import LoginSignUp from './components/Authenticate';
import useAuth from './hooks/useAuth';
import Landing from './pages/Landing';

const useStyles = createUseStyles({
	container: {},
});

const App = () => {
	const classes = useStyles();

	const { displayModal } = useAuth();

	return (
		<div className={classes.container}>
			{displayModal && <LoginSignUp />}
			<Landing />
		</div>
	);
};

export default App;
