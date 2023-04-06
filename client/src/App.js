import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import AuthForm from './components/AuthForm';
import AuthContext from './context/AuthContext';
import Landing from './pages/Landing';

const useStyles = createUseStyles({
	container: {},
});

const App = () => {
	const classes = useStyles();

	const { auth } = useContext(AuthContext);

	return (
		<div className={classes.container}>
			{auth.displayModal && <AuthForm />}
			<Landing />
		</div>
	);
};

export default App;
