import React from 'react';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles, useTheme } from 'react-jss';
import FormItem from '../../../components/form/FormItem';
import StyledLink from '../../../components/General/StyledLink';
import { Step } from '../../../components/steps/index';
import { CHILLABIT } from '../../../utils/constants';
import { styles } from '../../../utils/styles';

const { alignItems, displayFlex, flexDirection, radius, spacing, textAlign, typography, weight } =
	styles;

const useStyles = createUseStyles((theme) => ({
	access: {
		'& > svg': {
			marginRight: 4,
		},
		...typography.h4,
		borderBottom: `1px solid ${theme.background.highlight}`,
		color: '#999',
		fontSize: 14,
		fontWeight: weight[600],
		letterSpacing: 0.025,
	},
	checkbox: {
		marginBottom: 0,
		paddingRight: 14,
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
		marginTop: 20,
		padding: `30px 80px`,
	},
	controlInfo: {
		color: '#999',
		fontSize: 14,
		fontWeight: weight[600],
		lineHeight: 1.4,
		margin: `10px 0 20px`,
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
		fontSize: 14,
		padding: `${spacing['0_25']}px 14px`,
	},
}));

const Permissions = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	const checkboxOptions = [
		{
			inputConfig: {
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
				title: 'Enable direct downloads',
				type: 'checkbox',
			},
			name: 'download',
		},
		{
			inputConfig: {
				checkedLabel: 'This track can be played on devices without an internet connection.',
				label: 'Playing this track will not be possible on devices without an internet connection.',
				title: 'Offline listening',
				type: 'checkbox',
			},
			name: 'offline',
		},
		{
			inputConfig: {
				checkedLabel: 'This track will be included in your RSS feed if it is public.',
				label: 'This track will not be included in your RSS feed.',
				title: 'Include in RSS feed',
				type: 'checkbox',
			},
			name: 'rss',
		},
		{
			inputConfig: {
				checkedLabel: 'This track’s embedded-player code will be displayed publicly.',
				label: 'This track’s embedded-player code will only be displayed to you.',
				title: 'Display embed code',
				type: 'checkbox',
			},
			name: 'embed',
		},
		{
			inputConfig: {
				checkedLabel: `This track will be playable outside of ${CHILLABIT} and its apps.`,
				label: `This track will not be playable outside of ${CHILLABIT} and its apps.`,
				title: 'Enable app playback',
				type: 'checkbox',
			},
			name: 'playback',
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
						{checkboxOptions.map((option, i) => (
							<FormItem
								key={i}
								name={option.name}
								inputConfig={option.inputConfig}
								styles={classes.checkbox}
							/>
						))}
					</div>
				</div>
				<div className={classes.control}>
					<h2 className={classes.controlTitle}>Be in control</h2>
					<p className={classes.controlInfo}>
						With a Next Pro plan, you’re in charge with quiet mode. Choose whether comments should
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
