import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import QuotaMeter from './QuotaMeter';
import StyledButton from '../../../components/General/StyledButton';
import StyledLink from '../../../components/General/StyledLink';
import { styles } from '../../../utils/styles';

const {
	alignItems,
	displayFlex,
	flexDirection,
	height,
	justifyContent,
	radius,
	spacing,
	weight,
	width,
} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		backgroundColor: theme.background.surface,
		width: spacing[1] * 100,
	},
	mainWrapper: {
		...alignItems.center,
		...displayFlex,
		...flexDirection.column,
		...justifyContent.center,
		border: `1px solid ${theme.background.highlight}`,
		height: 391,
	},
	proLink: {},
}));

const UploadForm = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<QuotaMeter />
			<div className={classes.mainWrapper}>
				<div>Drag and drop your tracks & albums here</div>
				<StyledButton
					label='or choose files to upload'
					special
				/>
			</div>
		</div>
	);
};

export default UploadForm;
