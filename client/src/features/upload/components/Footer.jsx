import React from 'react';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import StyledLink from '../../../components/General/StyledLink';
import useSteps from '../../../hooks/useSteps';
import { styles } from '../../../utils/styles';

const { displayFlex, flexDirection, spacing, typography } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'& > div': {
			...displayFlex,
		},
		'& > div:not(:last-child)': {
			marginBottom: 10,
		},
		'& a': {
			...typography.captions,
		},
		...typography.captions,
		...displayFlex,
		...flexDirection.column,
		marginBottom: spacing['3_7'],
		padding: spacing['2_5'],
		width: 800,
	},
	faqLink: {
		'&:hover': {
			color: '#333',
		},
		color: '#38d',
	},
	link: {
		'&:hover': {
			color: '#999',
		},
		color: '#666',
		whiteSpace: 'nowrap',
	},
	linkWrapper: {
		'& > div': {
			...displayFlex,
		},
		borderTop: `1px solid ${theme.background.highlight}`,
		flexWrap: 'wrap',
		padding: '11px 0',
	},
	spacer: {
		margin: `0 ${spacing['0_5']}px`,
	},
}));

const linkList = [
	'Legal',
	'Do Not Sell or Share My Personal Information',
	'Privacy',
	'Cookie Policy',
	'Cookie Manager',
	'Imprint',
	'Artist Resources',
	'Blog',
	'Charts',
];

const Footer = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	const { currentStep } = useSteps();

	return (
		<div className={classes.container}>
			{currentStep === 1 && (
				<div>
					<StyledLink styles={classes.faqLink}>Supported file types and sizes</StyledLink>
					<span className={classes.spacer}>-</span>
					<StyledLink styles={classes.faqLink}>Upload troubleshooting tips</StyledLink>
					<span className={classes.spacer}>-</span>
					<StyledLink styles={classes.faqLink}>Copyright FAQs</StyledLink>
				</div>
			)}
			<div>
				By uploading, you confirm that your sounds comply with our
				<StyledLink styles={cn(classes.spacer, classes.faqLink)}>Terms of Use</StyledLink>
				and you don't infringe anyone else's rights.
			</div>
			<div className={classes.linkWrapper}>
				{linkList.map((link, i) => (
					<div key={`${i}-${link}`}>
						<StyledLink styles={classes.link}>{link}</StyledLink>
						{i < linkList.length - 1 && <span className={classes.spacer}>-</span>}
					</div>
				))}
			</div>
		</div>
	);
};

export default Footer;
