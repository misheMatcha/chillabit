import React from 'react';
import Button from 'antd/lib/button';
import { createUseStyles } from 'react-jss';
import useAuth from '../hooks/useAuth';

const useStyles = createUseStyles({
	container: {},
});

const Landing = () => {
	const classes = useStyles();

	const { setClickedSignUp, setDisplayModal } = useAuth();

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
