import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import UploadForm from './UploadForm';
import UploadNavBar from './UploadNavBar';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, flexDirection, height, justifyContent, spacing, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...alignItems.center,
		...displayFlex,
		...flexDirection.column,
		backgroundColor: theme.background.surface,
	},
	uploadForm: {
		marginTop: 90,
	},
}));

const Upload = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<UploadNavBar />
			<div className={classes.uploadForm}>
				<UploadForm />
			</div>
		</div>
	);
};

export default Upload;
