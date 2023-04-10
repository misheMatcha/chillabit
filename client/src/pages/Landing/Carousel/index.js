import React from 'react';
import Button from 'antd/lib/button';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import { CHILLABIT } from '../../../utils/constants';

const useStyles = createUseStyles({
	container: {
		backgroundColor: 'orange',
		borderTop: '4px solid #f50',
		height: 454,
		width: 1240,
	},
	layer1: {},
	layer2: {},
	page1: {},
	page2: {},
});

const LandingCarousel = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.layer1}>
				<div>logo {CHILLABIT}</div>
				<div>
					<Button>Sign in</Button>
					<Button>Create account</Button>
					<Link>For Artists</Link>
				</div>
			</div>
			<div className={classes.layer2}>
				<div className={classes.page1}>
					<div>Discover more with {CHILLABIT} Go+</div>
					<div>
						{CHILLABIT} Go+ lets you listen offline, ad-free, with over 320 million tracks — and
						growing.
					</div>
					<div>
						<Button>Learn more</Button>
						<Button>Try it for free for 30 days</Button>
					</div>
				</div>
				<div className={classes.page2}>
					<div>What's next in music is first on {CHILLABIT}</div>
					<div>
						Upload your first track and begin your journey. SoundCloud gives you space to create,
						find your fans, and connect with other artists.
					</div>
					<div>
						<Button>Start uploading today</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingCarousel;
