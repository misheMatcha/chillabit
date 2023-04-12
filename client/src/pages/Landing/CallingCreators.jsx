import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import CreatorImage from './assets/creator_image.jpg';
import StyledLink from './StyledLink';
import { CHILLABIT } from '../../utils/constants';
import { styles } from '../../utils/styles';

const { alignItemsCenter, displayFlex } = styles;

const useStyles = createUseStyles((theme) => ({
	clear: {
		backgroundColor: 'transparent',
		borderColor: '#e5e5e5',
		padding: '13px 24px',
	},
	container: {
		...alignItemsCenter,
		...displayFlex,
		backgroundColor: theme.color.black,
		backgroundImage: `url(${CreatorImage})`,
		backgroundSize: 'cover',
		color: theme.color.white,
		height: 350,
		paddingLeft: 70,
	},
	content: {
		width: 520,
	},
	linkWrapper: {
		...displayFlex,
		height: 46,
	},
	tagline: {
		fontSize: 24,
		lineHeight: 1.35,
		margin: '11px 0 26px',
	},
	title: {
		fontSize: 36,
	},
}));

const CallingCreators = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<div className={classes.content}>
				<div className={classes.title}>Calling all creators</div>
				<div className={classes.tagline}>
					Get on {CHILLABIT} to connect with fans, share your sounds, and grow your audience. What
					are you waiting for?
				</div>
				<div className={classes.linkWrapper}>
					<StyledLink styles={classes.clear}>Find out more</StyledLink>
				</div>
			</div>
		</div>
	);
};

export default CallingCreators;
