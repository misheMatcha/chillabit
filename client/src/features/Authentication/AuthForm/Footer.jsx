import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../../utils/styles';

const { spacing, textAlign, typography, width } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...typography.captions,
		color: '#999',
	},
	content: {
		'& a': {
			'&:nth-child(2)': {
				paddingRight: spacing['0_5'],
			},
			paddingLeft: spacing['0_5'],
		},
	},
	helpLinkWrapper: {
		...textAlign.right,
		...width[100].percentage,
		margin: `${spacing['1_5']}px 0`,
	},
	link: {
		'&:hover': {
			color: theme.color.black,
		},
		color: theme.link.color.standard,
		textDecoration: theme.link.textDecoration.standard,
	},
	moreInfo: {
		...textAlign.center,
		color: theme.color.black,
		marginBottom: '1em',
	},
	passwordReset: {
		...textAlign.center,
	},
}));

const Footer = ({ children }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return <div className={classes.container}>{children}</div>;
};

export default Footer;
