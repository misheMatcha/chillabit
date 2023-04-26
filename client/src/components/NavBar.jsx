import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../utils/styles';

const {
	alignItems,
	displayFlex,
	flexDirection,
	justifyContent,
	radius,
	spacing,
	typography,
	weight,
	width,
} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {},
}));

const NavBar = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return <div className={classes.container}>navbar</div>;
};

export default NavBar;
