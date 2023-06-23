import React, { useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import Advanced from './Advanced';
import BasicInfo from './BasicInfo';
import FormNavbar from './FormNavbar';
import Metadata from './Metadata';
import Permissions from './Permissions';
import Status from './Status';
import StyledButton from '../../../components/General/StyledButton';
import { Steps } from '../../../components/steps/index';
import { styles } from '../../../utils/styles';

const { displayFlex, justifyContent, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		border: `1px solid ${theme.background.highlight}`,
		boxShadow: `0 ${spacing['0_25']}px ${spacing['1_5']}px -5px rgba(0,0,0,.1)`,
	},
	formSubmit: {
		// ...displayFlex,
		// ...justifyContent.spaceBetween,
		// ...typography.captions,
		// borderTop: `1px solid ${theme.background.highlight}`,
		// height: 67,
		// padding: `${spacing['2_5']}px 25px`,
	},
	formSubmitBtns: {
		'& > button:first-child': {
			// borderColor: theme.color.transparent,
			// marginRight: spacing['0_5'],
		},
		'& > button:last-child': {
			// fontWeight: weight[600],
		},
		// ...displayFlex,
	},
	formWrapper: {
		// padding: '14px 25px 25px',
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
}));

const UploadDataLayout = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<Steps numSteps={4}>
			<Status />
			<div className={classes.container}>
				<FormNavbar />
				<BasicInfo />
				<Metadata />
				<Permissions />
				<Advanced />
				<div>
					<div className={classes.required}>Required fields</div>
					<StyledButton>Cancel</StyledButton>
					<StyledButton
						htmlType='submit'
						special
					>
						Save
					</StyledButton>
				</div>
			</div>
		</Steps>
	);
};

export default UploadDataLayout;
