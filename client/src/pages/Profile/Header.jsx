import React, { useEffect, useState } from 'react';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'antd/lib/button';
import Tooltip from 'antd/lib/tooltip';
import Upload from 'antd/lib/upload';
import { createUseStyles, useTheme } from 'react-jss';
import useAuth from '../../hooks/useAuth';
import useCurrentPath from '../../hooks/useCurrentPath';
import useGeneral from '../../hooks/useGeneral';
import axios from '../../utils/axios';
import { isEmptyObject } from '../../utils/general';
import { styles } from '../../utils/styles';

const {
	alignItems,
	displayFlex,
	height,
	justifyContent,
	radius,
	spacing,
	typography,
	weight,
	width,
} = styles;

const useStyles = createUseStyles((theme) => ({
	avatar: {
		backgroundImage: ({ avatar }) =>
			avatar ? `url(${avatar})` : 'linear-gradient(135deg,#8e8485,#70929c)',
		borderRadius: '50%',
		height: 200,
		marginRight: 30,
		width: 200,
	},
	avatarUpload: {
		'&:hover': {
			opacity: 1,
		},
		...alignItems.flexEnd,
		...displayFlex,
		...height[100].percentage,
		...justifyContent.center,
		opacity: 0,
		paddingBottom: `${spacing['1_5']}%`,
	},
	container: {
		...displayFlex,
		backgroundImage: ({ header_bg }) =>
			header_bg
				? `url(${header_bg})`
				: 'linear-gradient(315deg, rgb(221, 201, 187) 0%, rgb(108, 89, 78) 100%)',
		backgroundSize: 'cover',
		height: 260,
		padding: 30,
	},
	content: {
		'& > div': {
			backgroundColor: 'rgba(0, 0, 0, 0.8)',
			color: theme.color.white,
			letterSpacing: -0.75,
			width: 'max-content',
		},
		'& > div:not(:first-child)': {
			...typography.body,
			color: '#ccc',

			height: spacing[3],
			marginTop: spacing['0_5'],
			padding: `${spacing['0_25']}px 7px`,
		},
	},
	contentWrapper: {
		...displayFlex,
		...justifyContent.spaceBetween,
		flexGrow: 1,
	},
	uploadBtn: {
		'&:hover': {
			backgroundColor: theme.color.white,
			borderColor: 'rgba(0,0,0,.3) !important',
			color: '#333 !important',
		},
		...alignItems.center,
		...displayFlex,
		...justifyContent.center,
		...typography.h5,
		...width[100].percentage,
		backgroundColor: 'hsla(0,0%,100%,.8)',
		border: '1px solid rgba(0,0,0,.1)',
		borderRadius: radius[3],
		color: '#333',
		fontWeight: weight[400],
		height: spacing[3],
		padding: `${spacing['0_25']}px ${spacing['0_5']}px`,
	},
	uploadIcon: {
		padding: spacing['0_7'],
	},
	uploadWrapper: {
		paddingLeft: 30,
		width: 236,
	},
	username: {
		...typography.h2,
		fontWeight: weight[400],
		padding: `${spacing['0_5']}px 7px`,
	},
}));

const Header = () => {
	const { identifier, userPathMatches } = useCurrentPath();
	const { currentUser, setCurrentUser, token } = useAuth();
	const { user, setUser } = useGeneral();
	const theme = useTheme();

	const [loading, setLoading] = useState(true);

	const { avatar, fullname, full_location, header_bg, username } = user;
	const classes = useStyles({ avatar, header_bg, theme });

	useEffect(() => {
		// need to add timeout
		if (loading && !isEmptyObject(user)) setLoading(false);

		return () => {};
	}, [currentUser, loading, user, identifier, userPathMatches]);

	// Future features:
	// - verification check mark
	// - avatar modal
	// - hoverable featured profiles

	const uploadAction = async (file, type = 'header_bg' || 'avatar') => {
		const config = {
			headers: {
				authorization: token,
				'content-type': 'multipart/form-data',
			},
		};

		await axios
			.put(`/users/${identifier}`, { user: { [`${type}`]: file } }, config)
			.then((res) => {
				setUser(res.data);
				setCurrentUser(res.data);
			})
			.catch((err) => console.log(err.response.data));
	};

	return loading ? (
		<></>
	) : (
		<div className={classes.container}>
			<div className={classes.avatar}>
				{userPathMatches && (
					<div className={classes.avatarUpload}>
						<Upload
							customRequest={({ onSuccess }) => onSuccess('ok')}
							action={(file) => uploadAction(file, 'avatar')}
							showUploadList={false}
						>
							<Button className={classes.uploadBtn}>
								<FontAwesomeIcon
									className={classes.uploadIcon}
									icon={faCamera}
								/>
								{avatar ? 'Update' : 'Upload'} image
							</Button>
						</Upload>
					</div>
				)}
			</div>
			<div className={classes.contentWrapper}>
				<div className={classes.content}>
					<div className={classes.username}>{username}</div>
					{fullname && <div>{fullname}</div>}
					{full_location && <div>{full_location}</div>}
				</div>
			</div>
			{userPathMatches && (
				<div className={classes.uploadWrapper}>
					{/* <Tooltip title='For best results, upload PNG or JPG images of at least 2480x520 pixels. 2MB file-size limit.'> */}
					<Upload
						action={(file) => uploadAction(file, 'header_bg')}
						customRequest={({ onSuccess }) => onSuccess('ok')}
						showUploadList={false}
					>
						<Button className={classes.uploadBtn}>
							<FontAwesomeIcon
								className={classes.uploadIcon}
								icon={faCamera}
							/>
							Upload header image
						</Button>
					</Upload>
					{/* </Tooltip> */}
				</div>
			)}
		</div>
	);
};

export default Header;
