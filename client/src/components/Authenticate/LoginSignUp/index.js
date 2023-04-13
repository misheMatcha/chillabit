import React from 'react';
import { faX, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'antd/lib/button';
import { createUseStyles } from 'react-jss';
import AuthFooter from './AuthFooter';
import AuthForm from './AuthForm.jsx';
import AuthHeader from './AuthHeader';
import useAuth from '../../../hooks/useAuth';
import { styles } from '../../../utils/styles';

const { alignItemsCenter, displayFlex, flexDirection, justifyContent, width } = styles;

const useStyles = createUseStyles({
	close: {
		'&:hover': {
			backgroundColor: 'transparent !important',
			borderColor: 'transparent !important',
			color: '#333 !important',
		},
		...displayFlex,
		alignItems: 'flex-end',
		backgroundColor: 'transparent',
		borderColor: 'transparent',
		color: '#333',
		fontSize: 16,
		height: 25,
		justifyContent: 'flex-start',
		padding: 0,
		position: 'absolute',
		right: 0,
		top: 0,
		width: 25,
	},
	container: {
		'& > div': {
			...width[100].percentage,
		},
		...alignItemsCenter,
		...displayFlex,
		...flexDirection.column,
		...justifyContent.center,
		...width[100].percentage,
		minHeight: 500,
	},
});

const LoginSignUp = () => {
	const classes = useStyles();
	const { toggleModal } = useAuth();

	return (
		<div className={classes.container}>
			<Button
				className={classes.close}
				onClick={() => toggleModal()}
			>
				<FontAwesomeIcon icon={faXmark} />
			</Button>
			<AuthHeader />
			<AuthForm />
			<AuthFooter />
		</div>
	);
};

export default LoginSignUp;
