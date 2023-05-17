import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../utils/styles';

const { displayFlex, flexDirection, height } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...displayFlex,
		...flexDirection.column,
		backgroundColor: theme.background.surface,
	},
	content: {
		borderRight: `1px solid ${theme.background.highlight}`,
		flexGrow: 1,
		paddingRight: 30,
	},
	contentWrapper: {
		...displayFlex,
		...height[100].percentage,
		padding: '0 30px',
	},
	nav: {
		padding: '0 30px',
	},
	sidebar: {
		paddingLeft: 30,
		width: 330,
	},
}));

const PageLayoutTemplate = ({ children, header, nav, sidebar }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<div>{header}</div>
			{nav && <div className={classes.nav}>{nav}</div>}
			<div className={classes.contentWrapper}>
				<div className={classes.content}>{children}</div>
				<div className={classes.sidebar}>{sidebar}</div>
			</div>
		</div>
	);
};

export default PageLayoutTemplate;
