import React from 'react';
import Button from 'antd/lib/button';
import { createUseStyles } from 'react-jss';
import LandingCarousel from './Carousel';
import useAuth from '../../hooks/useAuth';
import { CHILLABIT } from '../../utils/constants';

const useStyles = createUseStyles({
	container: {},
});

const Landing = () => {
	const classes = useStyles();

	const { toggleModal } = useAuth();

	return (
		<div className={classes.container}>
			<LandingCarousel />
			<div>
				<div>
					<div>search bar</div>
					or
					<div>
						<Button>Upload your own</Button>
					</div>
				</div>
				<div>Hear what’s trending for free in the {CHILLABIT} community</div>
				<div>trending and tracks component</div>
				<div>
					<Button>Explore trending playlists</Button>
				</div>
			</div>
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
	);
};

export default Landing;
