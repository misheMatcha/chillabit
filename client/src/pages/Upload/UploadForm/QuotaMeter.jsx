import React from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles, useTheme } from 'react-jss';
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
		...justifyContent.spaceBetween,
		border: `1px solid ${theme.background.highlight}`,
		height: 98,
		marginBottom: 10,
		padding: spacing['2_5'],
	},
	meter: {
		'& > div': {
			...height[100].percentage,
			borderRadius: radius[4],
			position: 'absolute',
		},
		'& > div:first-child': {
			...width[100].percentage,
			backgroundColor: '#e5e5e5',
		},
		'& > div:last-child': {
			backgroundColor: theme.color.special,
		},
		height: spacing['0_5'],
		position: 'relative',
	},
	meterWrapper: {
		...displayFlex,
		...flexDirection.column,
		...height[100].percentage,
		...justifyContent.spaceBetween,
		width: 410,
	},
	quota: {
		...displayFlex,
		...justifyContent.spaceBetween,
		...typography.captions,
	},
	upsellLink: {
		'& > a': {
			...typography.captions,
			fontSize: spacing['1_5'],
			fontWeight: weight[300],
			marginRight: spacing['0_5'],
		},
		...displayFlex,
		...typography.captions,
		fontSize: spacing['1_5'],
		fontWeight: weight[300],
	},
}));

// TODO: add percentage width when quota is used

const QuotaMeter = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<div className={classes.meterWrapper}>
				<div className={classes.quota}>
					0% of free uploads used
					<FontAwesomeIcon icon={faAngleDown} />
				</div>
				<div className={classes.meter}>
					<div />
					<div />
				</div>
				<div className={classes.upsellLink}>
					<StyledLink
						label='Try Next Pro'
						small
					/>
					to get unlimited uploads.
				</div>
			</div>
			<StyledLink
				label='Try Next Pro'
				button
				medium
				teritary
			/>
		</div>
	);
};

export default QuotaMeter;
