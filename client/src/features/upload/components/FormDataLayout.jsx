import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import Advanced from './Advanced';
import BasicInfo from './BasicInfo';
import FormNavbar from './FormNavbar';
import Metadata from './Metadata';
import Permissions from './Permissions';
import Status from './Status';
import StyledButton from '../../../components/General/StyledButton';
import { Step, Steps } from '../../../components/steps/index';
import { styles } from '../../../utils/styles';

const { displayFlex, justifyContent, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	btns: {
		'& > button:first-child': {
			borderColor: theme.color.transparent,
			marginRight: spacing['0_5'],
		},
		'& > button:last-child': {
			fontWeight: weight[600],
		},
		...displayFlex,
	},
	container: {
		'& > :first-child': {
			paddingTop: 14,
		},
		'& > :not(last-child)': {
			paddingLeft: 25,
			paddingRight: 25,
		},
		border: `1px solid ${theme.background.highlight}`,
		boxShadow: `0 ${spacing['0_25']}px ${spacing['1_5']}px -5px rgba(0,0,0,.1)`,
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
	submitSection: {
		...displayFlex,
		...justifyContent.spaceBetween,
		...typography.captions,
		borderTop: `1px solid ${theme.background.highlight}`,
		padding: `${spacing['2_5']}px 25px`,
	},
}));

const UploadDataLayout = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<Step step={2}>
			<Steps defaultStep={3}>
				<Status />
				<div className={classes.container}>
					<FormNavbar />
					<BasicInfo />
					<Metadata />
					{/* <Permissions /> */}
					{/* <Advanced /> */}
					<div className={classes.submitSection}>
						<div className={classes.required}>Required fields</div>
						<div className={classes.btns}>
							<StyledButton>Cancel</StyledButton>
							<StyledButton
								htmlType='submit'
								special
							>
								Save
							</StyledButton>
						</div>
					</div>
				</div>
			</Steps>
		</Step>
	);
};

export default UploadDataLayout;
