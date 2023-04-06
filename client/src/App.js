import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import LoginSignUp from './components/Authenticate';
import AuthContext from './context/AuthContext';
import Landing from './pages/Landing';

const useStyles = createUseStyles({
	container: {},
});

const App = () => {
	const classes = useStyles();

	const { displayModal } = useContext(AuthContext);

	return (
		<div className={classes.container}>
			{displayModal && <LoginSignUp />}
			<Landing />
		</div>
	);
};

export default App;
