import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import Footer from './Footer';
import Header from './Header';
import { AuthFormProvider } from '../../../context/AuthFormContext';
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

const LoginSignUp = ({ newUser = false }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<AuthFormProvider>
			<div className={classes.container}>
				<Header newUser={newUser} />
				<AuthForm />
				<Footer />
			</div>
		</AuthFormProvider>
	);
};

export default LoginSignUp;
