import React from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'antd/lib/button';
import { createUseStyles, useTheme } from 'react-jss';
import Footer from './Footer';
import Header from './Header';
import useAuth from '../../../hooks/useAuth';
import useModal from '../../../hooks/useModal';
import { styles } from '../../../utils/styles';
import AuthForm from '../AuthForm/index';

const { alignItems, displayFlex, flexDirection, justifyContent, spacing, typography, width } =
	styles;

const useStyles = createUseStyles((theme) => ({
	close: {
		'&:hover': {
			backgroundColor: `${theme.color.transparent} !important`,
			borderColor: `${theme.color.transparent} !important`,
			color: '#333 !important',
		},
		...alignItems.flexEnd,
		...displayFlex,
		...justifyContent.flexStart,
		...typography.body,
		backgroundColor: theme.color.transparent,
		borderColor: theme.color.transparent,
		color: '#333',
		height: spacing['3_5'],
		padding: 0,
		position: 'absolute',
		right: 0,
		top: 0,
		width: spacing['3_5'],
	},
	container: {
		'& > div': {
			...width[100].percentage,
		},
		...alignItems.center,
		...displayFlex,
		...flexDirection.column,
		...justifyContent.center,
		...width[100].percentage,
		minHeight: 400,
	},
}));

const LoginSignUp = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { toggleModal } = useAuth();
	const { closeModal } = useModal();

	return (
		<div className={classes.container}>
			<Button
				className={classes.close}
				onClick={() => closeModal()}
			>
				<FontAwesomeIcon icon={faXmark} />
			</Button>
			<Header />
			<AuthForm />
			<Footer />
		</div>
	);
};

export default LoginSignUp;
