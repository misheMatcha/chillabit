import React from 'react';
import Input from 'antd/lib/input';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../utils/styles';

const { Search } = Input;
const {} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {},
}));

const SearchBar = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return <Search className={classes.container} />;
};

export default SearchBar;
