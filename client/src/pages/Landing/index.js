import React from 'react';
import Button from 'antd/lib/button';
import { createUseStyles, useTheme } from 'react-jss';
import CallingCreators from './CallingCreators';
import LandingCarousel from './Carousel/index';
import MobileTeaser from './MobileTeaser';
import Trending from './Trending';
import useAuth from '../../hooks/useAuth';
import { CHILLABIT } from '../../utils/constants';
import { styles } from '../../utils/styles';

const { displayFlex, height, justifyContent, width } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...width.max,
		backgroundColor: theme.color.white,
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

	const { toggleModal } = useAuth();

	return (
		<div className={classes.containerWrapper}>
			<div className={classes.container}>
				<LandingCarousel />
				<Trending />
				<MobileTeaser />
				<CallingCreators />
				<div>
					<div>Thanks for listening. Now join in.</div>
					<div>Save tracks, follow artists and build playlists. All for free.</div>
					<div>
						<Button onClick={() => toggleModal(true)}>Create account</Button>
						<div>
							Already have an account? <Button onClick={() => toggleModal()}>Sign in</Button>
						</div>
					</div>
				</div>
				<div>footer</div>
			</div>
		</div>
	);
};

export default Landing;
