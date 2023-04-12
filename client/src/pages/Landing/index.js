import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import CallingCreators from './CallingCreators';
import LandingCarousel from './Carousel/index';
import MobileTeaser from './MobileTeaser';
import SignOff from './SignOff';
import Trending from './Trending';
import { styles } from '../../utils/styles';

const { displayFlex, height, justifyContent, width } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...width.max,
		backgroundColor: theme.color.white,
		paddingBottom: 75,
	},
	containerWrapper: {
		...displayFlex,
		...height[100].percentage,
		...justifyContent.center,
	},
}));

const Landing = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.containerWrapper}>
			<div className={classes.container}>
				<LandingCarousel />
				<Trending />
				<MobileTeaser />
				<CallingCreators />
				<SignOff />
			</div>
		</div>
	);
};

export default Landing;
