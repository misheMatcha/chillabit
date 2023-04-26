import React from 'react';
import Button from 'antd/lib/button';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { styles } from '../utils/styles';

const {
	alignItems,
	displayFlex,
	flexDirection,
	justifyContent,
	radius,
	spacing,
	typography,
	weight,
	width,
} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...displayFlex,
		...justifyContent.center,
		backgroundColor: '#333',
		height: spacing['5_7'],
		position: 'fixed',
	},
	headerWrapper: {
		...displayFlex,
		...flexDirection.row,
		...width.max,
		backgroundColor: 'gray',
		headerLeft: {},
		headerMiddle: {},
		headerRight: {},
	},
}));

const NavBar = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { user } = useAuth;

	return (
		<div className={classes.container}>
			<div className={classes.headerWrapper}>
				<div className={classes.headerLeft}>
					<div>logo</div>
					<div>
						<Link>Home</Link>
						<Link>Feed</Link>
						<Link>Library</Link>
					</div>
				</div>
				<div className={classes.headerMiddle}>search bar</div>
				<div className={classes.headerRight}>
					{/* logic for if signed in */}
					<Button>Sign in</Button>
					<Button>Create account</Button>
					<Link>Upload</Link>
					<div>drop down</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
