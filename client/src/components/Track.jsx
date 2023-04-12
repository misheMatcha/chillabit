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

const { displayFlex, flexDirection, height, justifyContent, width } = styles;

const useStyles = createUseStyles((theme, cover) => ({
	action: {
		...displayFlex,
		...justifyContent.center,
		backgroundColor: 'transparent',
		borderWidth: 0,
		height: 16,
		padding: '3px 9px 3px 8px',
		width: 8,
	},
	artist: {
		'&:hover': {
			color: '#333',
		},
		color: '#999',
		fontSize: 12,
		fontWeight: 500,
		overflow: 'hidden',
		textDecoration: 'none',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	},
	container: {
		height: 258,
	},
	cover: {
		'& > div': {
			...height[100].percentage,
			...width[100].percentage,
		},
		...displayFlex,
		boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
		cursor: 'pointer',
		height: 180,
		width: 180,
	},
	icon: {
		color: theme.color.white,
		fontSize: 12,
	},
	info: {
		...displayFlex,
		...flexDirection.column,
		marginTop: 6,
		width: 180,
	},
	layer1: {
		'&:hover': {
			// opacity: 1,
		},
		...displayFlex,
		...flexDirection.column,
		...justifyContent.flexEnd,
		opacity: 1,
		zIndex: 1,
	},
	layer2: {
		backgroundImage: ({ cover }) => `url(${cover})`,
		backgroundSize: 'cover',
		marginLeft: '-100%',
	},
	play: {
		'&:hover': {
			color: '#f30',
		},
		color: theme.color.orange,
	},
	playWrapper: {
		...displayFlex,
		...justifyContent.center,
		fontSize: 58,
	},
	playableActions: {
		...displayFlex,
		...justifyContent.flexEnd,
		margin: 5,
	},
	playableActionsWrapper: {
		...displayFlex,
		...justifyContent.flexEnd,
		alignItems: 'flex-end',
		background: 'linear-gradient(0deg,rgba(0,0,0,.4),transparent)',
		height: 50,
	},
	title: {
		'&:hover': {
			color: '#000',
		},
		color: '#333',
		fontSize: 14,
		overflow: 'hidden',
		textDecoration: 'none',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	},
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
				<div className={classes.layer1}>
					<div className={classes.playWrapper}>
						<FontAwesomeIcon
							onClick={() => console.log('plays song')}
							className={classes.play}
							icon={faCirclePlay}
						/>
					</div>
					<div className={classes.playableActionsWrapper}>
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
				</div>
				<div className={classes.layer2} />
			</div>
			<div className={classes.info}>
				<Link className={classes.title}>{title}</Link>
				<Link className={classes.artist}>{artist}</Link>
			</div>
		</div>
	);
};

export default Track;
