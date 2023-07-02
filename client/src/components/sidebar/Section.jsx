import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../utils/styles';
import StyledLink from '../General/StyledLink';

const { displayFlex, justifyContent, spacing, typography } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		marginBottom: spacing['2_5'],
	},
	main: {
		paddingTop: 5,
	},
	title: {
		'& > :first-child': {
			marginRight: spacing[1],
		},
	},
	titleWrapper: {
		'&:hover $title': {
			color: '#999',
		},
		...displayFlex,
		...justifyContent.spaceBetween,
		...typography.body,
		borderBottom: `1px solid ${theme.background.highlight}`,
		fontSize: 15,
		height: spacing['3_7'],
		letterSpacing: -0.5,
	},
	viewAll: {},
}));

const Section = ({ children, icon, title, viewAllUrl }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<StyledLink
				styles={classes.titleWrapper}
				to={viewAllUrl}
				primary
			>
				<div className={classes.title}>
					<FontAwesomeIcon icon={icon} />
					{title}
				</div>
				<div className={classes.viewAll}>View all</div>
			</StyledLink>
			<div className={classes.main}>{children}</div>
		</div>
	);
};

export default Section;
