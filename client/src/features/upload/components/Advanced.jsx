import React from 'react';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles, useTheme } from 'react-jss';
import StyledLink from '../../../components/General/StyledLink';
import { Step } from '../../../components/steps/index';
import { styles } from '../../../utils/styles';

const { alignItems, displayFlex, flexDirection, spacing, textAlign, typography } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...alignItems.center,
		...displayFlex,
		...flexDirection.column,
		...typography.body,
		fontSize: 13,
		lineHeight: 1.4,
	},
	content: {
		...textAlign.center,
		...displayFlex,
		...alignItems.center,
		height: 108,
		width: 498,
	},
	info: {
		color: '#999',
		paddingLeft: spacing['0_7'],
	},
	infoIcon: {
		border: `1px solid #999`,
		borderRadius: '50%',
		color: '#999',
		fontSize: spacing[1],
		padding: 3,
		width: spacing['1_5'],
	},
	infoWrapper: {
		...alignItems.center,
		...displayFlex,
	},
	link: {
		display: 'inline',
		fontSize: 13,
		paddingLeft: spacing['0_5'],
	},
}));

const Advanced = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<Step step={4}>
			<div className={classes.container}>
				<div className={classes.content}>
					This type of audio cannot be played before processing. To edit the track preview, use the
					Edit functionality after the track has been processed.
				</div>
				<div className={classes.infoWrapper}>
					<FontAwesomeIcon
						className={classes.infoIcon}
						icon={faInfo}
					/>
					<div className={classes.info}>
						Select the 20 second excerpt of your track that you’d like to use as your track preview
						for artist shortcuts. Previews help get listeners excited so choose an excerpt that best
						represents your track.
						<StyledLink
							styles={classes.link}
							small
						>
							Learn more
						</StyledLink>
					</div>
				</div>
			</div>
		</Step>
	);
};

export default Advanced;
