import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { styles } from '../../utils/styles';

const { displayFlex, flexDirection, justifyContent, spacing, truncateText, typography, weight } =
	styles;

const useStyles = createUseStyles((theme) => ({
	artist: {
		...typography.h5,
		...truncateText,
		color: '#999',
		fontSize: spacing['1_7'],
		fontWeight: weight[600],
	},
	container: {
		'& a': {
			textDecoration: theme.link.textDecoration.standard,
		},
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
		...typography.h5,
		...truncateText,
		color: '#333',
		fontSize: spacing['1_7'],
		fontWeight: weight[500],
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
				<Link className={classes.artist}>{artist}</Link>
				<Link className={classes.title}>{title}</Link>
			</div>
		</div>
	);
};

export default SidebarPlaylist;
