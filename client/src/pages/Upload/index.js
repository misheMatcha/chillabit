import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import UploadForm from './UploadForm';
import UploadNavBar from './UploadNavBar';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, flexDirection, spacing } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...alignItems.center,
		...displayFlex,
		...flexDirection.column,
		backgroundColor: theme.background.surface,
	},
	uploadForm: {
		marginTop: 18,
		width: spacing[1] * 100,
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
