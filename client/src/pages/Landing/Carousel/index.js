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
import UpcomingBanner from '../assets/upcoming_banner.jpeg';

// todo
// - fix font family
// - add reusable styles to styles constant in utils

const useStyles = createUseStyles({
	container: {
		borderTop: '4px solid #f50',
		color: '#fff',
		display: 'flex',
		fontFamily: 'Overpass',
		height: 450,
		width: 1240,
	},
	layer1: {
		width: '100%',
	},
	layer2: {
		display: 'flex',
		marginLeft: '-100%',
		width: '100%',
	},
	nav: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '13px 30px 0 30px',
		width: '100%',
		zIndex: 1,
	},
	page: {
		alignItems: 'center',
		color: '#fff',
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
	},
	page1Buttons: {
		// backgroundColor: 'green',
	},
	pageWrapper1: {
		backgroundImage: `url(${DiscoverBanner})`,
		height: 450,
		paddingTop: 145,
	},
	pageWrapper2: {
		backgroundImage: `url(${UpcomingBanner})`,
		height: 450,
		paddingTop: 145,
	},
	tagline: {
		fontFamily: 'Overpass',
		fontSize: 18,
		fontWeight: 500,
		textAlign: 'center',
		width: 530,
	},
	title: {
		fontFamily: 'Overpass',
		fontSize: 36,
		fontWeight: 500,
		textAlign: 'center',
	},
});

const LandingCarousel = () => {
	const classes = useStyles();

	const { toggleModal } = useAuth();

	return (
		<div className={classes.container}>
			<div className={classes.layer1}>
				<Carousel>
					<div className={classes.pageWrapper1}>
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
					<div className={classes.pageWrapper2}>
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
			<div className={classes.layer2}>
				<div className={classes.nav}>
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
			</div>
		</div>
	);
};

export default LandingCarousel;
