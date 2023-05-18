import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { styles } from '../../utils/styles';

const { displayFlex, spacing } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...displayFlex,
		flexWrap: 'wrap',
		padding: `10px 0 ${spacing[1]}px`,
	},
	image: {
		border: `2px solid ${theme.color.white}`,
		borderRadius: '50%',
		height: spacing[5],
		width: spacing[5],
	},
	list: {
		listStyle: 'none',
		marginRight: -8,
	},
}));

const SidebarUsers = ({ users }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<ul className={classes.container}>
			{users.map((user, i) => (
				<li
					className={classes.list}
					key={i}
				>
					<Link>
						<img
							className={classes.image}
							src={user.avatar}
							alt={user.username}
						/>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default SidebarUsers;
