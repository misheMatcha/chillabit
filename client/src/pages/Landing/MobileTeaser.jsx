import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import NeverStopListening from './assets/never_stop_listening.jpeg';
import { CHILLABIT } from '../../utils/constants';
import { styles } from '../../utils/styles';

const { alignItemsCenter, displayFlex, flexDirection, justifyContent } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...displayFlex,
		backgroundColor: '#f2f2f2',
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
		...alignItemsCenter,
		...displayFlex,
		...justifyContent.flexEnd,
		flexGrow: 1,
	},
	tagline: {
		fontSize: 24,
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
		fontSize: 36,
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
