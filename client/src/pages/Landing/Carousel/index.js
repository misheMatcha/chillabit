import React from 'react';
import Carousel from 'antd/lib/carousel';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import CarouselNav from './CarouselNav';
import { CHILLABIT } from '../../../utils/constants';
import { styles } from '../../../utils/styles';
import DiscoverBanner from '../assets/discover_banner.jpg';
import UpcomingBanner from '../assets/upcoming_banner.jpeg';
import StyledLink from '../StyledLink';

const {
	alignItemsCenter,
	displayFlex,
	flexDirection,
	height,
	justifyContent,
	textAlignCenter,
	width,
} = styles;

const defaultPageStlyes = {
	height: 450,
	paddingTop: 145,
};

const useStyles = createUseStyles((theme) => ({
	carouselWrapper: {
		...width[100].percentage,
	},
	clear: {
		'&:hover': {
			border: `1px solid ${theme.color.white} !important`,
			color: `${theme.color.white} !important`,
		},
		backgroundColor: 'transparent',
		border: `1px solid ${theme.color.white}`,
		color: theme.color.white,
	},
	container: {
		...displayFlex,
		...width.max,
		borderTop: '4px solid #f50',
		color: theme.color.white,
		height: 450,
	},
	learnMore: {
		...displayFlex,
		...justifyContent.center,
		flexGrow: 1,
		fontSize: 16,
		marginRight: 25,
	},
	linkWrapper: {
		...displayFlex,
		...justifyContent.center,
		marginTop: 16,
		width: 432,
	},
	page: {
		...alignItemsCenter,
		...displayFlex,
		...flexDirection.column,
		...height[100].percentage,
		color: theme.color.white,
	},
	pageWrapper1: {
		...defaultPageStlyes,
		backgroundImage: `url(${DiscoverBanner})`,
	},
	pageWrapper2: {
		...defaultPageStlyes,
		backgroundImage: `url(${UpcomingBanner})`,
	},
	tagline: {
		...textAlignCenter,
		fontSize: 18,
		fontWeight: 500,
		marginBottom: 10,
		width: 530,
	},
	title: {
		...textAlignCenter,
		fontSize: 36,
		fontWeight: 500,
		marginBottom: 8,
	},
}));

const LandingCarousel = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<CarouselNav />
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
							<div className={classes.linkWrapper}>
								<StyledLink styles={cn(classes.clear, classes.learnMore)}>Learn more</StyledLink>
								<StyledLink>Try it for free for 30 days</StyledLink>
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
							<div className={classes.linkWrapper}>
								<StyledLink>Start uploading today</StyledLink>
							</div>
						</div>
					</div>
				</Carousel>
			</div>
		</div>
	);
};

export default LandingCarousel;
