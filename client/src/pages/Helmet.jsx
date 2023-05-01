import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { styles } from '../utils/styles';

const { alignItems, displayFlex, flexDirection, height, spacing, width } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'& > div:first-child': {
			...width[100].percentage,
		},
		...alignItems.center,
		...displayFlex,
		...flexDirection.column,
		...height[100].percentage,
	},
	outlet: {
		'& > div': {
			...height[100].percentage,
		},
		...width.max,
		flexGrow: 1,
		paddingTop: spacing['5_7'],
	},
}));

const Helmet = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<NavBar />
			<div className={classes.outlet}>
				<Outlet />
			</div>
		</div>
	);
};

export default Helmet;
