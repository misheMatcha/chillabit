import React from 'react';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'antd/lib/button';
import Carousel from 'antd/lib/carousel';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { CHILLABIT } from '../../../utils/constants';
import DiscoverBanner from '../assets/discover_banner.jpg';

const useStyles = createUseStyles({
	container: {
		borderTop: '4px solid #f50',
		height: 454,
		width: 1240,
		// fontFamily: 'Overpass',

		display: 'flex',
	},
	layer1: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		padding: '13px 30px 0 30px',
	},
	layer2: {
		paddingTop: 145,
		marginLeft: '-100%',
		width: '100%',
	},
	pageWrapper: {
		// backgroundColor: 'pink',
		height: 305,
		backgroundImage: `url(${DiscoverBanner})`,
	},
	page: {
		// height: 305,
		// backgroundColor: 'blue',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		height: '100%',
	},
	title: {
		fontFamily: 'Overpass',
		fontWeight: 500,
		fontSize: 36,
		textAlign: 'center',
		// backgroundColor: 'yellow',
	},
	tagline: {
		fontFamily: 'Overpass',
		fontWeight: 500,
		fontSize: 18,
		width: 530,
		textAlign: 'center',
		// backgroundColor: 'purple',
	},
	page1Buttons: {
		// backgroundColor: 'green',
	},
});

const LandingCarousel = () => {
	const classes = useStyles();

	const { toggleModal } = useAuth();

	return (
		<div className={classes.container}>
			<div className={classes.layer1}>
				<div>
					<FontAwesomeIcon icon={faSoundcloud} />
					{CHILLABIT}
				</div>
				<div>
					<Button onClick={() => toggleModal()}>Sign in</Button>
					<Button onClick={() => toggleModal(true)}>Create account</Button>
					<Link>For Artists</Link>
				</div>
			</div>
			<div className={classes.layer2}>
				<Carousel>
					<div className={classes.pageWrapper}>
						<div className={classes.page}>
							<div className={classes.title}>Discover more with {CHILLABIT} Go+</div>
							<div className={classes.tagline}>
								{CHILLABIT} Go+ lets you listen offline, ad-free, with over 320 million tracks — and
								growing.
							</div>
							<div className={classes.page1Buttons}>
								<Button>Learn more</Button>
								<Button>Try it for free for 30 days</Button>
							</div>
						</div>
					</div>
					<div className={classes.pageWrapper}>
						<div className={classes.page}>
							<div className={classes.title}>What's next in music is first on {CHILLABIT}</div>
							<div className={classes.tagline}>
								Upload your first track and begin your journey. SoundCloud gives you space to
								create, find your fans, and connect with other artists.
							</div>
							<div>
								<Button>Start uploading today</Button>
							</div>
						</div>
					</div>
				</Carousel>
			</div>
		</div>
	);
};

export default LandingCarousel;
