import React, { useEffect, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Outlet } from 'react-router';
import Sidebar from '../../components/Sidebar';
import useCurrentPath from '../../hooks/useCurrentPath';
import { styles } from '../../utils/styles';

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
	avatar: {
		backgroundColor: 'orangered',
		borderRadius: '50%',
		height: 200,
		marginRight: 30,
		width: 200,
	},
	container: {
		...displayFlex,
		...justifyContent.spaceBetween,
		...width[100].percentage,
		backgroundColor: 'rebeccapurple',
		height: 260,
		padding: 30,
	},
	content: {
		...displayFlex,
	},
}));

const Header = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { fullPath, userIdentifier } = useCurrentPath();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {});

	return (
		<div className={classes.container}>
			<div className={classes.content}>
				<div className={classes.avatar} />
				<div>
					<div>username</div>
					<div>blurb</div>
					<div>loc</div>
					<div>plus</div>
				</div>
			</div>
			<div>
				<div>upload</div>
			</div>
		</div>
	);
};

export default Header;
