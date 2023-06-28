import React from 'react';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles, useTheme } from 'react-jss';
import { FormCheckbox } from '../../../components/form';
import StyledLink from '../../../components/General/StyledLink';
import { Step } from '../../../components/steps/index';
import { CHILLABIT } from '../../../utils/constants';
import { styles } from '../../../utils/styles';

const { alignItems, displayFlex, flexDirection, radius, spacing, textAlign, typography, weight } =
	styles;

const useStyles = createUseStyles((theme) => ({
	access: {
		'& > svg': {
			marginRight: spacing['0_5'],
		},
		...typography.h4,
		borderBottom: `1px solid ${theme.background.highlight}`,
		color: '#999',
		fontSize: spacing['1_7'],
		fontWeight: weight[600],
		letterSpacing: 0.025,
	},
	checkbox: {
		marginBottom: 0,
		paddingRight: spacing['1_7'],
		paddingTop: 10,
	},
	checkboxContianer: {
		padding: '10px 0',
	},
	checkboxWarning: {
		color: theme.color.error,
		marginTop: 7,
	},
	checkboxWrapper: {
		...displayFlex,
		flexWrap: 'wrap',
	},
	container: {},
	control: {
		...alignItems.center,
		...displayFlex,
		...flexDirection.column,
		...textAlign.center,
		backgroundColor: theme.background.highlight,
		border: `1px solid #e5e5e5`,
		marginBottom: 25,
		marginTop: spacing['2_5'],
		padding: `${spacing['3_7']}px 80px`,
	},
	controlInfo: {
		color: '#999',
		fontSize: spacing['1_7'],
		fontWeight: weight[500],
		lineHeight: 1.4,
	},
	controlTitle: {
		...typography.h4,
		fontWeight: weight[600],
	},
	proLink: {
		backgroundColor: theme.background.surface,
		borderColor: '#e5e5e5',
		borderRadius: radius[3],
		color: theme.color.black,
		fontSize: spacing['1_7'],
		padding: `${spacing['0_25']}px 14px`,
	},
}));

const Permissions = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	const checkboxOptions = [
		{
			checkedLabel: (
				<>
					This track will be available for direct download in the original format it was uploaded.
					<div className={classes.checkboxWarning}>
						Distributing content without permission is unlawful. Make sure you have all necessary
						rights.
					</div>
				</>
			),
			label:
				'This track will not be available for direct download in the original format it was uploaded.',
			name: 'download',
			title: 'Enable direct downloads',
		},
		{
			checkedLabel: 'This track can be played on devices without an internet connection.',
			label: 'Playing this track will not be possible on devices without an internet connection.',
			name: 'offline',
			title: 'Offline listening',
		},
		{
			checkedLabel: 'This track will be included in your RSS feed if it is public.',
			label: 'This track will not be included in your RSS feed.',
			name: 'rss',
			title: 'Include in RSS feed',
		},
		{
			checkedLabel: `This track's embedded-player code will be displayed publicly.`,
			label: `This track's embedded-player code will only be displayed to you.`,
			name: 'embed',
			title: 'Display embed code',
		},
		{
			checkedLabel: `This track will be playable outside of ${CHILLABIT} and its apps.`,
			label: `This track will not be playable outside of ${CHILLABIT} and its apps.`,
			name: 'playback',
			title: 'Enable app playback',
		},
	];

	return (
		<Step step={5}>
			<div className={classes.container}>
				<div className={classes.checkboxContianer}>
					<div className={classes.access}>
						<FontAwesomeIcon icon={faBan} /> Access
					</div>
					<div className={classes.checkboxWrapper}>
						{checkboxOptions.map(({ formConfig, title, ...option }, i) => (
							<FormCheckbox
								special
								key={`${i}-${title}`}
								formConfig={formConfig}
								styles={classes.checkbox}
								title={title}
								{...option}
							/>
						))}
					</div>
				</div>
				<div className={classes.control}>
					<h2 className={classes.controlTitle}>Be in control</h2>
					<p className={classes.controlInfo}>
						With a Next Pro plan, you're in charge with quiet mode. Choose whether comments should
						be public, private, or not allowed. You can also show or hide stats.
					</p>
					<StyledLink
						button
						styles={classes.proLink}
					>
						Unlock with Next Pro
					</StyledLink>
				</div>
			</div>
		</Step>
	);
};

export default Permissions;
