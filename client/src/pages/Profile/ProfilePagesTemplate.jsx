import React from 'react';
import { AlignCenterOutlined } from '@ant-design/icons';
import { createUseStyles, useTheme } from 'react-jss';
import StyledLink from '../../components/General/StyledLink';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, justifyContent, radius, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {},
	link: {},
	linkBtn: {},
	noContent: {
		'& svg': {
			color: '#ccc',
			fontSize: 60,
			transform: 'rotate(90deg)',
		},
		...alignItems.center,
		...displayFlex,
		...justifyContent.center,
		border: `${spacing[1]}px solid ${theme.background.highlight}`,
		borderRadius: radius[4],
		height: 167,
		width: 240,
	},
	tag: {
		...typography.h3,
		fontWeight: weight[400],
	},
}));

const text = {
	playlists: {
		tag: 'You haven’t created any playlists.',
		link: 'Learn about playlists',
	},
	reposts: {
		tag: 'You haven’t reposted any sounds.',
		link: 'Learn about reposts',
		btn: false,
	},
};

const defaultConfig = {
	hasBtn: false,
	icon: (
		<>
			<AlignCenterOutlined />
			<AlignCenterOutlined />
		</>
	),
	linkText: 'Upload a track to share it with your followers.',
	tag: 'Seems a little quiet over here',
	url: '',
};

const ProfilePagesTemplate = ({ children, config = defaultConfig }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			{children ? (
				children
			) : (
				<div>
					<div className={classes.noContent}>{config.icon}</div>
					<div className={classes.tag}>{config.tag}</div>
					<StyledLink label={config.linkText} />
					<StyledLink
						label='Upload now'
						button
						medium
						special
						to='/upload'
					/>
				</div>
			)}
		</div>
	);
};

export default ProfilePagesTemplate;
