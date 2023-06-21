import React, { useState } from 'react';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import UploadAdvanced from './UploadAdvanced';
import UploadBasicInfo from './UploadBasicInfo';
import UploadFormNav from './UploadFormNav';
import UploadMetadata from './UploadMetadata';
import UploadPermissions from './UploadPermissions';
import UploadStatus from './UploadStatus';
import StyledButton from '../../../components/General/StyledButton';
import { styles } from '../../../utils/styles';

const { displayFlex, justifyContent, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		border: `1px solid ${theme.background.highlight}`,
		boxShadow: `0 ${spacing['0_25']}px ${spacing['1_5']}px -5px rgba(0,0,0,.1)`,
	},
	formSubmit: {
		...displayFlex,
		...justifyContent.spaceBetween,
		...typography.captions,
		borderTop: `1px solid ${theme.background.highlight}`,
		height: 67,
		padding: `${spacing['2_5']}px 25px`,
	},
	formSubmitBtns: {
		'& > button:first-child': {
			borderColor: theme.color.transparent,
			marginRight: spacing['0_5'],
		},
		'& > button:last-child': {
			fontWeight: weight[600],
		},
		...displayFlex,
	},
	formWrapper: {
		padding: '14px 25px 25px',
	},
	required: {
		'&::before': {
			color: theme.color.error,
			content: "'*'",
			display: 'block',
			marginRight: spacing['0_5'],
			verticalAlign: 'super',
		},
		...displayFlex,
	},
	display: {
		display: 'none',
	},
}));

const UploadFormData = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const [step, setStep] = useState(1);

	return (
		<div>
			<UploadStatus />
			<div className={classes.container}>
				<div className={classes.formWrapper}>
					<UploadFormNav
						step={step}
						setStep={setStep}
					/>
					<div className={cn({ [`${classes.display}`]: step !== 1 })}>
						<UploadBasicInfo />
					</div>
					<div className={cn({ [`${classes.display}`]: step !== 2 })}>
						<UploadMetadata />
					</div>
					<div className={cn({ [`${classes.display}`]: step !== 3 })}>
						<UploadPermissions />
					</div>
					<div className={cn({ [`${classes.display}`]: step !== 4 })}>
						<UploadAdvanced />
					</div>
				</div>
				<div className={classes.formSubmit}>
					<span className={classes.required}>Required fields</span>
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
