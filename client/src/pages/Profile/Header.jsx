import React, { useEffect, useState } from 'react';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'antd/lib/button';
import Tooltip from 'antd/lib/tooltip';
import Upload from 'antd/lib/upload';
import isEmpty from 'lodash/isEmpty';
import { createUseStyles, useTheme } from 'react-jss';
import useAuth from '../../hooks/useAuth';
import useCurrentPath from '../../hooks/useCurrentPath';
import axios from '../../utils/axios';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, justifyContent, radius, spacing, typography, weight, width } =
	styles;

const useStyles = createUseStyles((theme) => ({
	avatar: {
		backgroundImage: 'linear-gradient(135deg,#8e8485,#70929c)',
		borderRadius: '50%',
		height: 200,
		marginRight: 30,
		width: 200,
	},
	container: {
		...displayFlex,
		background: 'linear-gradient(315deg, rgb(221, 201, 187) 0%, rgb(108, 89, 78) 100%)',
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
		...alignItems.center,
		...displayFlex,
		...justifyContent.center,
		...typography.h5,
		...width[100].percentage,
		borderRadius: radius[3],
		fontWeight: weight[400],
		height: spacing[3],
		padding: `${spacing['0_25']}px 10px`,
	},
	uploadIcon: {
		padding: spacing['0_5'],
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
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { userIdentifier } = useCurrentPath();
	const { currentUser, token } = useAuth();
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState({});

	useEffect(() => {
		// need to add timeout
		const fetchUser = async () => {
			try {
				const response = await axios.get(`/users/${userIdentifier}`);
				setUser(response.data);
			} catch (err) {
				console.log(err.response.data);
			}
		};

		if (loading) {
			if (isEmpty(user)) {
				if (currentUser && currentUser.url === userIdentifier) {
					setUser(currentUser);
					setLoading(false);
				} else {
					fetchUser();
					setLoading(false);
				}
			}
		}

		return () => {};
	}, [currentUser, loading, user, userIdentifier]);

	// Future features:
	// - verification check mark
	// - avatar modal
	// - hoverable featured profiles

	const { username } = user;

	// setting up api call for uploading
	const uploadAction = (file) => {
		const config = {
			headers: {
				authorization: `Bearer ${token}`,
				'content-type': 'multipart/form-data',
			},
		};

		axios
			.put(`/users/${userIdentifier}`, { user: { header_bg: file } }, config)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => err.response.data);
	};

	return loading ? (
		<></>
	) : (
		<div className={classes.container}>
			<div className={classes.avatar} />
			<div className={classes.contentWrapper}>
				<div className={classes.content}>
					<div className={classes.username}>{username}</div>
					{/* need to add fname + lname */}
					{/* <div>This is Hiderway</div>
					<div>Boston</div> */}
				</div>
			</div>
			<div className={classes.uploadWrapper}>
				{/* <Tooltip title='For best results, upload PNG or JPG images of at least 2480x520 pixels. 2MB file-size limit.'> */}
				<Upload
					action={uploadAction}
					name={`${userIdentifier}`}
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
		</div>
	);
};

export default Header;
