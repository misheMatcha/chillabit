import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../utils/styles';

const { alignItems, displayFlex, flexDirection, spacing } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...alignItems.c,
	},
}));

// complete after connecting backend

const InfoMarketing = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return <div className={classes.container}>uplaod infomation</div>;
};

export default InfoMarketing;
