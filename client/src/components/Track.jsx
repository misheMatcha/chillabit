import React from 'react';
import { faCircleUp } from '@fortawesome/free-regular-svg-icons';
import {
	faCirclePlay,
	faEllipsis,
	faHeart,
	faLink,
	faListUl,
	faRetweet,
	faShare,
	faTowerBroadcast,
	faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'antd/lib/button';
import Dropdown from 'antd/lib/dropdown';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
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

const COVER_SIZE = 180;

const useStyles = createUseStyles((theme, cover) => ({
	action: {
		'&:hover': {
			borderColor: `${theme.color.transparent} !important`,
			color: `${theme.color.white} !important`,
		},
		backgroundColor: theme.color.transparent,
		borderColor: theme.color.transparent,
		color: theme.color.white,
		height: 22,
		padding: 0,
		width: 25,
	},
	artist: {},
	container: {
		height: 258,
		width: COVER_SIZE,
	},
	cover: {
		...displayFlex,
		...flexDirection.column,
		backgroundImage: ({ cover }) => `url(${cover})`,
		backgroundSize: 'cover',
		boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
		height: COVER_SIZE,
		width: COVER_SIZE,
	},
	icon: {
		...width[100].percentage,
	},
	info: {},
	layer1: {
		...displayFlex,
		...height[100].percentage,
	},
	play: {
		'&:hover': {
			color: '#f30',
		},
		color: theme.color.special,
		fontSize: 58,
	},
	playWrapper: {
		...alignItems.flexEnd,
		...displayFlex,
		...justifyContent.center,
		...width[100].percentage,
		paddingBottom: 50,
	},
	playableActions: {
		height: 22,
		marginLeft: COVER_SIZE - 80,
		marginTop: COVER_SIZE - 27,
		position: 'absolute',
	},
	title: {},
}));

const items = [
	{
		icon: <FontAwesomeIcon icon={faRetweet} />,
		key: '1',
		label: <Link>Repost</Link>,
	},
	{
		icon: <FontAwesomeIcon icon={faShare} />,
		key: '2',
		label: <Link>Share</Link>,
	},
	{
		icon: <FontAwesomeIcon icon={faLink} />,
		key: '3',
		label: <Link>Copy Link</Link>,
	},
	{
		icon: <FontAwesomeIcon icon={faCircleUp} />,
		key: '4',
		label: <Link>Add to Next up</Link>,
	},
	{
		icon: <FontAwesomeIcon icon={faListUl} />,
		key: '5',
		label: <Link>Add to playlist</Link>,
	},
	{
		icon: <FontAwesomeIcon icon={faTowerBroadcast} />,
		key: '6',
		label: <Link>Station</Link>,
	},
];

const Track = ({ artist, cover, title }) => {
	const theme = useTheme();
	const classes = useStyles({ cover, theme });
	const { toggleModal } = useAuth();

	return (
		<div className={classes.container}>
			<div className={classes.cover}>
				<Link
					to='/home'
					className={classes.layer1}
				>
					<div className={classes.playWrapper}>
						<Link>
							<FontAwesomeIcon
								onClick={() => console.log('plays song')}
								className={classes.play}
								icon={faCirclePlay}
							/>
						</Link>
					</div>
				</Link>
				<div className={classes.playableActions}>
					<Button
						className={classes.action}
						onClick={() => toggleModal()}
					>
						<FontAwesomeIcon
							className={classes.icon}
							icon={faHeart}
						/>
					</Button>
					<Button
						className={classes.action}
						onClick={() => toggleModal()}
					>
						<FontAwesomeIcon
							className={classes.icon}
							icon={faUserPlus}
						/>
					</Button>
					<Dropdown
						menu={{ items }}
						placement='topLeft'
						trigger={['click']}
					>
						<Button className={classes.action}>
							<FontAwesomeIcon
								className={classes.icon}
								icon={faEllipsis}
							/>
						</Button>
					</Dropdown>
				</div>
			</div>
			<div className={classes.info}>
				<Link className={classes.title}>{title}</Link>
				<Link className={classes.artist}>{artist}</Link>
			</div>
		</div>
	);
};

export default Track;
