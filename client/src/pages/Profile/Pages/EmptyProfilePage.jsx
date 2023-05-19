import React from 'react';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import StyledLink from '../../../components/General/StyledLink';
import { styles } from '../../../utils/styles';
import EmptyLists from '../assets/empty_lists.png';
import EmptyReposts from '../assets/empty_reposts.png';
import EmptyTracks from '../assets/empty_tracks.png';
import EmptyTracksAndLists from '../assets/empty_tracks_and_lists.png';

const { alignItems, displayFlex, flexDirection, height, spacing, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...alignItems.center,
		...displayFlex,
		...flexDirection.column,
		...height[100].percentage,
		paddingTop: 50,
	},
	iconWrapper: {},
	link: {
		height: spacing['2_25'],
		marginBottom: spacing['1_5'],
		marginTop: spacing[1],
	},
	tag: {
		fontSize: spacing['2_25'],
		fontWeight: weight[400],
		marginTop: spacing['2_5'],
	},
}));

const EmptyProfilePage = ({
	icon,
	linkText = 'Upload a track to share it with your followers.',
	tag = 'Seems a little quiet over here',
	uploadButton = false,
}) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	const getIcon = (type) => {
		let imgSrc = EmptyReposts;

		if (type === 'all') {
			imgSrc = EmptyTracksAndLists;
		} else if (type === 'tracks') {
			imgSrc = EmptyTracks;
		} else if (type === 'lists') {
			imgSrc = EmptyLists;
		}

		return (
			<img
				src={imgSrc}
				alt='empty'
			/>
		);
	};

	return (
		<div className={cn(classes.container)}>
			<div className={classes.iconWrapper}>{getIcon(icon)}</div>
			<div className={classes.tag}>{tag}</div>
			<StyledLink
				label={linkText}
				styles={classes.link}
			/>
			{uploadButton && (
				<StyledLink
					to='/upload'
					label='Upload now'
					button
					medium
					special
				/>
			)}
		</div>
	);
};

export default EmptyProfilePage;
