import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';
import useAuth from '../../hooks/useAuth';
import { styles } from '../../utils/styles';
import SearchBar from '../SearchBar';

const { alignItems, displayFlex, flexDirection, justifyContent, spacing, width } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...displayFlex,
		...justifyContent.center,
		backgroundColor: '#333',
		color: theme.color.white,
		height: spacing['5_7'],
		position: 'fixed',
	},
	headerWrapper: {
		...displayFlex,
		...flexDirection.row,
		...width.max,
	},
	middleHeader: {
		...alignItems.center,
		...displayFlex,
		padding: '9px 10px',
		width: ({ user }) => (user ? 232 : 412),
	},
}));

const NavBar = () => {
	const theme = useTheme();
	const { user } = useAuth();
	const classes = useStyles({ theme, user });

	return (
		<div className={classes.container}>
			<div className={classes.headerWrapper}>
				<LeftHeader />
				<div className={classes.middleHeader}>
					<SearchBar isNav />
				</div>
				<RightHeader />
			</div>
		</div>
	);
};

export default NavBar;
