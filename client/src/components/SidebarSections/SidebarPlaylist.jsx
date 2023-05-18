import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../utils/styles';
import StyledLink from '../General/StyledLink';

const { displayFlex, flexDirection, justifyContent, truncateText, typography } = styles;

const useStyles = createUseStyles((theme) => ({
	artist: {
		...truncateText,
	},
	container: {
		...displayFlex,
		...justifyContent.spaceBetween,
		...typography.captions,
		margin: '5px 0',
	},
	image: {
		height: 50,
		width: 50,
	},
	main: {
		...displayFlex,
		...flexDirection.column,
		width: 240,
	},
	title: {
		...truncateText,
		color: '#333',
	},
}));

const SidebarPlaylist = ({ playlist }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	const { artist, image, title } = playlist;

	return (
		<div className={classes.container}>
			<img
				className={classes.image}
				src={image}
				alt={title}
			/>
			<div className={classes.main}>
				<StyledLink
					styles={classes.artist}
					to=''
					primary
				>
					{artist}
				</StyledLink>
				<StyledLink
					styles={classes.title}
					to=''
				>
					{title}
				</StyledLink>
			</div>
		</div>
	);
};

export default SidebarPlaylist;
