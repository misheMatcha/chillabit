import React from 'react';
import Radio from 'antd/lib/radio';
import Upload from 'antd/lib/upload';
import { createUseStyles, useTheme } from 'react-jss';
import UploadBasicInfo from './UploadBasicInfo';
import UploadFormNav from './UploadFormNav';
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
} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		// border: `1px solid ${theme.background.highlight}`,
		// boxShadow: `0 ${spacing['0_25']}px ${spacing['1_5']}px -5px rgba(0,0,0,.1)`,
	},
	formWrapper: {
		// padding: '0 25px',
		border: `1px solid ${theme.background.highlight}`,
		boxShadow: `0 ${spacing['0_25']}px ${spacing['1_5']}px -5px rgba(0,0,0,.1)`,
	},
	formNav: {
		// padding: '14px 25px 0',
	},
	formSubmit: {
		...displayFlex,
		...justifyContent.spaceBetween,
		borderTop: `1px solid ${theme.background.highlight}`,
		height: 67,
		padding: `${spacing['2_5']}px 25px`,
	},
	formSubmitBtns: {
		...displayFlex,
	},
	progressBar: {
		'& > div': {
			...height[100].percentage,
			width: '49.93%',
		},
		...displayFlex,
		...justifyContent.spaceBetween,
		height: 5,
	},
	progressBarBlue: {
		backgroundColor: '#06c',
	},
	progressBarOrange: {
		backgroundColor: theme.color.special,
	},
	uploadStatus: {
		...displayFlex,
		...justifyContent.spaceBetween,
		...typography.captions,
		fontSize: 13,
	},
	uploadStatusWrapper: {},
}));

const UploadFormData = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<div className={classes.uploadStatusWrapper}>
				<div className={classes.uploadStatus}>
					<span>244 (Kupo kupo).wav</span>
					<span>Ready. Click Save to post this track.</span>
				</div>
				<div className={classes.progressBar}>
					<div className={classes.progressBarBlue} />
					<div className={classes.progressBarOrange} />
				</div>
			</div>
			<div className={classes.formWrapper}>
				<UploadFormNav />
				<div className={classes.form}>
					<UploadBasicInfo />
				</div>
				<div className={classes.formSubmit}>
					<span>Required fields</span>
					<div className={classes.formSubmitBtns}>
						<StyledButton label='Cancel' />
						<StyledButton
							label='Save'
							special
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UploadFormData;
