import React, { useContext } from 'react';
import { Button } from 'antd';
import { createUseStyles } from 'react-jss';
import AuthContext from '../context/AuthContext';
import AuthFormContext from '../context/AuthFormContext';

const useStyles = createUseStyles({
	container: {},
});

const Landing = () => {
	const classes = useStyles();

	const { setDisplayModal } = useContext(AuthContext);
	const { setClickedSignUp } = useContext(AuthFormContext);

	return (
		<div className={classes.container}>
			<div>
				<Button onClick={() => setDisplayModal(true)}>Sign in</Button>
				<Button
					onClick={() => {
						setClickedSignUp(true);
						setDisplayModal(true);
					}}
				>
					Create account
				</Button>
			</div>
		</div>
	);
};

export default Landing;
