import React from 'react';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import useGeneral from '../hooks/useGeneral';
import { styles } from '../utils/styles';

const {
	alignItems,
	displayFlex,
	flexDirection,
	height,
	justifyContent,
	radius,
	spacing,
	typography,
	weight,
	width,
} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		paddingLeft: 30,
		width: 360,
	},
	link: {
		'&:hover': {
			color: '#333',
		},
		color: '#999',
		textDecoration: theme.link.textDecoration.standard,
	},
	linkIcon: {
		marginRight: spacing[1],
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
		...typography.h3,
		color: '#999',
		flex: 1,
		fontSize: 22,
		fontWeight: weight[500],
		paddingBottom: 1,
		paddingTop: 1,
		textDecoration: theme.link.textDecoration.standard,
	},
	statsTitle: {
		...typography.captions,
		fontWeight: weight[400],
		letterSpacing: -0.5,
	},
	statsWrapper: {
		...displayFlex,
	},
}));

const LINKS_PLACEHOLDER = [
	{
		title: 'Tik Tok',
		url: '',
	},
	{
		title: 'pachacco',
		url: '',
	},
	{
		title: 'badtz',
		url: '',
	},
	{
		title: 'star',
		url: '',
	},
	{
		title: 'orange',
		url: '',
	},
];

const Sidebar = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { user } = useGeneral();

	return (
		<div className={classes.container}>
			<div className={classes.statsWrapper}>
				<Link className={classes.stats}>
					<div className={classes.statsTitle}>Followers</div>
					<div>277K</div>
				</Link>
				<Link className={classes.stats}>
					<div className={classes.statsTitle}>Following</div>
					<div>5</div>
				</Link>
				<Link className={classes.stats}>
					<div className={classes.statsTitle}>Tracks</div>
					<div>143</div>
				</Link>
			</div>
			<div>bio</div>
			{user.links && (
				<ul className={classes.links}>
					{LINKS_PLACEHOLDER.map((link, i) => (
						<li key={i}>
							<Link
								className={classes.link}
								target='_blank'
								to={link.url}
							>
								<FontAwesomeIcon
									className={classes.linkIcon}
									icon={faEarthAmerica}
								/>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Sidebar;
