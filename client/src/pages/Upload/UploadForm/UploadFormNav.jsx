import React from 'react';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { styles } from '../../../utils/styles';

const { alignItems, displayFlex, height, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...displayFlex,
		borderBottom: `1px solid ${theme.background.highlight}`,
	},
	link: {
		'&:hover': {
			color: '#333',
		},
		...alignItems.center,
		...displayFlex,
		...height[100].percentage,
		...typography.h1,
		color: '#333',
		fontSize: 26,
		fontWeight: weight[600],
		letterSpacing: -1,
	},
	linkActive: {
		'& $link': {
			color: theme.color.special,
		},
		borderColor: `${theme.color.special} !important`,
	},
	list: {
		'&:hover': {
			borderColor: theme.color.black,
		},
		borderBottom: `${spacing['0_25']}px solid ${theme.color.transparent}`,
		margin: `0 ${spacing['1_5']}px`,
	},
	new: {
		...typography.micro,
		border: `1px solid ${theme.color.special}`,
		color: theme.color.special,
		fontSize: 10,
		letterSpacing: -0.5,
		marginLeft: spacing['0_5'],
		padding: spacing['0_5'],
	},
}));

const UploadFormNav = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	const uploadNavList = [
		{ label: 'Basic info', step: 1 },
		{ label: 'Metadata', step: 2 },
		{ label: 'Permissions', step: 3 },
		{
			label: (
				<>
					<span>Advanced</span>
					<span className={classes.new}>new</span>
				</>
			),
			step: 4,
		},
	];

	return (
		<ul className={classes.container}>
			{uploadNavList.map((nav, i) => (
				<li
					className={cn(classes.list, { [`${classes.linkActive}`]: false })}
					key={i}
				>
					<Link className={classes.link}>{nav.label}</Link>
				</li>
			))}
		</ul>
	);
};

export default UploadFormNav;
