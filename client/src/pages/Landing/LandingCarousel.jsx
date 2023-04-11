import React from 'react';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'antd/lib/button';
import Carousel from 'antd/lib/carousel';
import * as cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import DiscoverBanner from './assets/discover_banner.jpg';
import UpcomingBanner from './assets/upcoming_banner.jpeg';
import useAuth from '../../hooks/useAuth';
import { CHILLABIT } from '../../utils/constants';

// todo
// - fix font family
// - add reusable styles to styles constant in utils
// - refac styles

const useStyles = createUseStyles({
	btn: {
		'&:hover': {
			border: '1px solid #f50 !important',
			color: '#fff !important',
		},
		backgroundColor: '#f50',
		border: '1px solid #f50',
		borderRadius: 3,
		color: '#fff',
	},
	carouselWrapper: {
		width: '100%',
	},
	clearBtn: {
		'&:hover': {
			border: '1px solid #fff !important',
			color: '#fff !important',
		},
		backgroundColor: 'transparent',
		border: '1px solid #fff',
		borderRadius: 3,
		color: '#fff',
	},
	container: {
		borderTop: '4px solid #f50',
		color: '#fff',
		display: 'flex',
		fontFamily: 'Overpass',
		height: 450,
		width: 1240,
	},
	learnMore: {
		'&:hover': {
			color: '#fff',
		},
		backgroundColor: 'transparent',
		border: '1px solid #fff',
		borderRadius: 3,
		color: '#fff',
		flexGrow: 1,
		fontSize: 17,
		height: 46,
		marginRight: 25,
		padding: '12px 15px',
		textAlign: 'center',
	},
	linkBtn: {
		'&:hover': {
			color: '#fff',
		},
		backgroundColor: '#f50',
		border: '1px solid #f50',
		borderRadius: 3,
		color: '#fff',
		fontSize: 18,
		height: 46,
		padding: '12px 15px',
	},
	linkBtnWrapper: {
		display: 'flex',
		justifyContent: 'space-evenly',
		marginTop: 17,
		width: 400,
	},
	logo: {
		fontSize: 40,
		marginRight: 4,
	},
	logoSection: {
		alignItems: 'center',
		display: 'flex',
		fontSize: 14,
		fontWeight: 900,
		letterSpacing: 1,
		textTransform: 'uppercase',
	},
	nav: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '13px 30px 0 30px',
		position: 'absolute',
		width: 1240,
		zIndex: 1,
	},
	navBtnWrapper: {
		'& > a': {
			color: '#fff',
			fontSize: 14,
			fontWeight: 600,
			textDecoration: 'none',
		},
		'& button': {
			fontSize: 14,
			marginRight: 10,
			padding: '2px 16px',
		},
	},
	page: {
		alignItems: 'center',
		color: '#fff',
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
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
		fontSize: 18,
		fontWeight: 500,
		marginBottom: 10,
		textAlign: 'center',
		width: 530,
	},
	title: {
		fontSize: 36,
		fontWeight: 500,
		marginBottom: 8,
		textAlign: 'center',
	},
});

const LandingCarousel = () => {
	const classes = useStyles();

	const { toggleModal } = useAuth();

	return (
		<div className={classes.container}>
			<div className={classes.nav}>
				<div className={classes.logoSection}>
					<FontAwesomeIcon
						className={classes.logo}
						icon={faSoundcloud}
					/>
					{CHILLABIT}
				</div>
				<div className={classes.navBtnWrapper}>
					<Button
						className={cn(classes.clearBtn)}
						onClick={() => toggleModal()}
					>
						Sign in
					</Button>
					<Button
						className={classes.btn}
						onClick={() => toggleModal(true)}
					>
						Create account
					</Button>
					<Link>For Artists</Link>
				</div>
			</div>
			<div className={classes.carouselWrapper}>
				<Carousel
					autoplay
					autoplaySpeed={4000}
					speed={720}
				>
					<div className={classes.pageWrapper1}>
						<div className={classes.page}>
							<div className={classes.title}>Discover more with {CHILLABIT} Go+</div>
							<div className={classes.tagline}>
								{CHILLABIT} Go+ lets you listen offline, ad-free, with over 320 million tracks — and
								growing.
							</div>
							<div className={classes.linkBtnWrapper}>
								<Link className={cn(classes.learnMore)}>Learn more</Link>
								<Link className={classes.linkBtn}>Try it for free for 30 days</Link>
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
							<div className={classes.linkBtnWrapper}>
								<Link className={classes.linkBtn}>Start uploading today</Link>
							</div>
						</div>
					</div>
				</Carousel>
			</div>
		</div>
	);
};

export default LandingCarousel;
