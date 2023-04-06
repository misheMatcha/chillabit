import React, { useContext } from 'react';
import { Button } from 'antd';
import { createUseStyles } from 'react-jss';
import AuthContext from '../context/AuthContext';

const useStyles = createUseStyles({
	container: {},
});

const Landing = () => {
	const classes = useStyles();

	const { setDisplayModal } = useContext(AuthContext);

	return (
		<div className={classes.container}>
			<div>
				<Button onClick={() => setDisplayModal(true)}>Sign in</Button>
				<Button onClick={() => setDisplayModal(true)}>Create account</Button>
			</div>
		</div>
	);
};

export default Landing;
