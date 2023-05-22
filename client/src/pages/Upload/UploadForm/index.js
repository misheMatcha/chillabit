import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
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
	typography,
	weight,
	width,
} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...alignItems.center,
		...displayFlex,
		...flexDirection.column,
		...justifyContent.spaceBetween,
		border: `1px solid ${theme.background.highlight}`,
		boxShadow: `0 ${spacing['0_25']}px ${spacing['1_5']}px -5px rgba(0,0,0,.1)`,
		height: 391,
	},
	form: {
		...alignItems.center,
		...displayFlex,
		...flexDirection.column,
		padding: '100px 0',
	},
	qualityInfo: {
		'& > a': {
			...typography.captions,
			marginLeft: spacing['0_5'],
		},
		...displayFlex,
		...typography.captions,
		fontWeight: weight[400],
		marginBottom: spacing['3_25'],
	},
	title: {
		...typography.h2,
		fontSize: 22,
		fontWeight: weight[400],
	},
	uploadBtn: {
		...height[100].percentage,
		...displayFlex,
		...justifyContent.center,
		...typography.body,
		height: spacing[5],
		margin: `${spacing[2]}px 0 ${spacing['1_5']}px`,
		width: 300,
	},
}));

const UploadForm = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<div className={classes.form}>
				<div className={classes.title}>Drag and drop your tracks & albums here</div>
				<StyledButton
					styles={classes.uploadBtn}
					label='or choose files to upload'
					special
				/>
				<div>
					<span>Make a playlist when multiple files are selected</span>
					<span>Privacy</span>
				</div>
			</div>
			<div className={classes.qualityInfo}>
				Provide FLAC, WAV, ALAC, or AIFF for highest audio quality.
				<StyledLink label='Learn more about lossless HD.' />
			</div>
		</div>
	);
};

export default UploadForm;
