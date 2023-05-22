import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import UploadNavBar from './UploadNavBar';
import { styles } from '../../utils/styles';

const { displayFlex, height, spacing, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		backgroundColor: theme.background.surface,
	},
}));

const Upload = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<UploadNavBar />
			<div>hi</div>
		</div>
	);
};

export default Upload;
