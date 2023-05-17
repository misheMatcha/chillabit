import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { styles } from '../../../utils/styles';

const { alignItems, displayFlex, justifyContent, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		marginBottom: spacing['2_5'],
	},
	content: {
		// border: '1px solid black',
		paddingTop: 5,
	},
	title: {
		'& > :first-child': {
			marginRight: spacing[1],
		},
	},
	titleWrapper: {
		'&:hover > div:last-child': {
			color: '#333',
		},
		...alignItems.center,
		...displayFlex,
		...justifyContent.spaceBetween,
		...typography.body,
		borderBottom: `1px solid ${theme.background.highlight}`,
		color: '#999',
		fontSize: spacing['1_7'],
		fontWeight: weight[600],
		height: 30,
		letterSpacing: -0.5,
		lineHeight: spacing[3],
		textDecoration: theme.link.textDecoration.standard,
	},
}));

const SidebarSection = ({ children, icon, title, viewAllUrl }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<Link
				className={classes.titleWrapper}
				to={viewAllUrl}
			>
				<div className={classes.title}>
					<FontAwesomeIcon icon={icon} />
					{title}
				</div>
				<div>View all</div>
			</Link>
			<div className={classes.content}>{children}</div>
		</div>
	);
};

export default SidebarSection;
