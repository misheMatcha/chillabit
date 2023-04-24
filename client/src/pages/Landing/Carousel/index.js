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
	alignItems,
	displayFlex,
	flexDirection,
	height,
	justifyContent,
	spacing,
	textAlign,
	typography,
	weight,
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
	container: {
		...displayFlex,
		...width.max,
		borderTop: `${spacing['0_5']}px solid ${theme.color.special}`,
		color: theme.color.white,
		height: 450,
	},
	learnMore: {
		...displayFlex,
		...justifyContent.center,
		...typography.body,
		flexGrow: 1,
		marginRight: 25,
	},
	linkWrapper: {
		...displayFlex,
		...justifyContent.center,
		marginTop: 17,
		width: 432,
	},
	page: {
		...alignItems.center,
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
		...textAlign.center,
		...typography.body,
		fontSize: 18,
		marginBottom: 10,
		width: 530,
	},
	title: {
		...textAlign.center,
		...typography.h1,
		fontSize: spacing['4_5'],
		fontWeight: weight[500],
		marginBottom: spacing['1_5'],
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
								<StyledLink
									clear
									styles={cn(classes.learnMore)}
								>
									Learn more
								</StyledLink>
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
