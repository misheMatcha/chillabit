import React from 'react';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { createUseStyles, useTheme } from 'react-jss';
import StyledLink from '../../components/General/StyledLink';
import TruncateSection from '../../components/General/TruncateSection';
import { PROFILE_LINKS_PLACEHOLDER } from '../../data/profilePlaceholders';
import useGeneral from '../../hooks/useGeneral';
import { styles } from '../../utils/styles';

const { displayFlex, flexDirection, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'& a': {
			textDecoration: theme.link.textDecoration.standard,
		},
	},
	description: {
		...typography.captions,
	},
	links: {
		'& > li:not(:last-child)': {
			marginBottom: spacing['0_5'],
		},
		...typography.captions,
		listStyle: 'none',
		margin: 0,
		padding: 0,
	},
	stats: {
		'&:not(:first-child)': {
			borderLeft: `1px solid ${theme.background.highlight}`,
			paddingLeft: 12,
		},
		...flexDirection.column,
		...typography.h3,
		flex: 1,
		fontSize: 22,
		fontWeight: weight[500],
		paddingBottom: 1,
		paddingTop: 1,
	},
	statsTitle: {
		...typography.captions,
		fontWeight: weight[400],
		letterSpacing: -0.5,
	},
	statsWrapper: {
		...displayFlex,
		marginBottom: spacing['1_7'],
	},
}));

const ProfileSidebar = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { user } = useGeneral();

	return (
		<div className={classes.container}>
			<div className={classes.statsWrapper}>
				<StyledLink
					styles={classes.stats}
					to={`/${user.url}/followers`}
					primary
				>
					<div className={classes.statsTitle}>Followers</div>
					<div>277K</div>
				</StyledLink>
				<StyledLink
					styles={classes.stats}
					to={`/${user.url}/following`}
					primary
				>
					<div className={classes.statsTitle}>Following</div>
					<div>5</div>
				</StyledLink>
				<StyledLink
					styles={classes.stats}
					to={`/${user.url}/tracks`}
					primary
				>
					<div className={classes.statsTitle}>Tracks</div>
					<div>143</div>
				</StyledLink>
			</div>
			{user.bio && (
				<TruncateSection
					maxHeight={85}
					styles={classes.description}
				>
					<p>{user.bio}</p>
				</TruncateSection>
			)}
			{user.links && (
				<ul className={classes.links}>
					{PROFILE_LINKS_PLACEHOLDER.map((link, i) => (
						<li key={i}>
							<StyledLink
								to={link.url}
								target='_blank'
								icon={faEarthAmerica}
								label={link.title}
								primary
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default ProfileSidebar;
