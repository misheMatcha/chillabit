import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import NeverStopListening from './assets/never_stop_listening.jpeg';
import { CHILLABIT } from '../../utils/constants';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, flexDirection, justifyContent, spacing, typography, weight } =
	styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...displayFlex,
		backgroundColor: theme.background.highlight,
		color: '#333',
		marginTop: 60,
		paddingRight: 70,
	},
	content: {
		...displayFlex,
		...flexDirection.column,
		width: 325,
	},
	contentWrapper: {
		...alignItems.center,
		...displayFlex,
		...justifyContent.flexEnd,
		flexGrow: 1,
	},
	tagline: {
		...typography.h2,
		fontWeight: weight[400],
	},
	title: {
		'&:after': {
			backgroundImage: 'linear-gradient(90deg,#7d01a1,#f30 50%,#f50)',
			content: "''",
			display: 'block',
			height: 3,
			marginTop: 10,
			width: 70,
		},
		...typography.h1,
		fontSize: spacing['4_5'],
		fontWeight: weight[400],
		marginBottom: 17,
	},
}));

const MobileTeaser = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<img
				src={NeverStopListening}
				alt='Never stop listening'
			/>
			<div className={classes.contentWrapper}>
				<div className={classes.content}>
					<div className={classes.title}>Never stop listening</div>
					<div className={classes.tagline}>
						{CHILLABIT} is available on Web, iOS, Android, Sonos, Chromecast, and Xbox One.
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileTeaser;
