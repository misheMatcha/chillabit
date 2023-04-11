import React from 'react';
import Button from 'antd/lib/button';
import { createUseStyles, useTheme } from 'react-jss';
import LandingCarousel from './Carousel/index';
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
		...height[100].view,
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
				<div>
					<div>Never stop listening</div>
					<div>{CHILLABIT} is available on Web, iOS, Android, Sonos, Chromecast, and Xbox One.</div>
				</div>
				<div>
					<div>Calling all creators</div>
					<div>
						Get on {CHILLABIT} to connect with fans, share your sounds, and grow your audience. What
						are you waiting for?
					</div>
					<div>
						<Button>Find out more</Button>
					</div>
				</div>
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
