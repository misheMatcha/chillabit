import React, { useState } from 'react';
import { faCaretDown, faCaretUp, faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import StyledLink from '../../components/General/StyledLink';
import { PROFILE_LINKS_PLACEHOLDER } from '../../data/profilePlaceholders';
import useGeneral from '../../hooks/useGeneral';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, flexDirection, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'& a': {
			textDecoration: theme.link.textDecoration.standard,
		},
	},
	description: {
		marginBottom: 10,
	},
	descriptionShow: {
		'& > :last-child': {
			marginLeft: spacing[1],
		},
		'& > svg': {
			fontSize: 16,
		},
		...alignItems.center,
		...displayFlex,
		...typography.captions,
		color: theme.color.black,
		fontWeight: weight[400],
	},
	descriptionWrapper: {
		marginBottom: spacing['2_5'],
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
	truncated: {
		maxHeight: 85,
		overflow: 'hidden',
	},
	truncatedWrapper: {
		'&::after': {
			background: 'linear-gradient(hsla(0,0%,100%,0),#fff)',
			bottom: 54,
			content: "''",
			display: 'block',
			height: 25,
			position: 'relative',
		},
	},
}));

const ProfileSidebar = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { user } = useGeneral();
	const [showMore, setShowMore] = useState(false);

	const toggleShowMore = () => setShowMore(!showMore);

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
				<div
					className={cn(classes.descriptionWrapper, { [`${classes.truncatedWrapper}`]: !showMore })}
				>
					<div className={cn(classes.description, { [`${classes.truncated}`]: !showMore })}>
						{user.bio}
					</div>
					{showMore ? (
						<Link
							className={classes.descriptionShow}
							onClick={toggleShowMore}
							to='#'
						>
							Show less <FontAwesomeIcon icon={faCaretUp} />
						</Link>
					) : (
						<Link
							className={classes.descriptionShow}
							onClick={toggleShowMore}
							to='#'
						>
							Show more <FontAwesomeIcon icon={faCaretDown} />
						</Link>
					)}
				</div>
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
