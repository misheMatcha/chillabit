import React, { useState } from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
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
		height: ({ isQuotaVisible }) => (isQuotaVisible ? 134 : 98),
		marginBottom: 10,
		marginTop: 90,
		padding: spacing['2_5'],
	},
	iconToggle: {
		cursor: 'pointer',
		padding: `0 ${spacing['0_5']}px`,
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
		overflow: 'hidden',
	},
	quotaInfo: {
		...typography.captions,
		fontSize: 13,
		fontWeight: weight[300],
	},
	upsellLink: {
		'& > a': {
			...typography.captions,
			fontSize: 13,
			fontWeight: weight[300],
			marginRight: spacing['0_5'],
		},
		...displayFlex,
		...typography.captions,
		fontSize: 13,
		fontWeight: weight[300],
	},
}));

// TODO: add percentage width when quota is used

const variants = {
	initial: { rotate: 180 },
	stop: { rotate: 0 },
};

const QuotaMeter = () => {
	const theme = useTheme();
	const [isQuotaVisible, setIsQuotaVisible] = useState(false);
	const classes = useStyles({ isQuotaVisible, theme });

	return (
		<div className={classes.container}>
			<div className={classes.meterWrapper}>
				<div className={classes.quota}>
					0% of free uploads used
					<div>
						<motion.div
							className={classes.iconToggle}
							variants={variants}
							animate={isQuotaVisible ? 'rotate' : 'initial'}
							onClick={() => setIsQuotaVisible(!isQuotaVisible)}
						>
							<FontAwesomeIcon icon={faAngleDown} />
						</motion.div>
					</div>
				</div>
				<div className={classes.meter}>
					<div />
					<div />
				</div>
				{isQuotaVisible && <div className={classes.quotaInfo}>0 of 180 minutes (0%) used.</div>}
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
