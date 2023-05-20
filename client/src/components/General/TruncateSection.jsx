import React, { useEffect, useState } from 'react';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import StyledLink from './StyledLink';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, spacing, width } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...width[100].percentage,
	},
	content: {
		overflow: 'hidden',
	},
	toggle: {
		...alignItems.center,
		...displayFlex,
		color: '#333',
		fontSize: 13,
	},
	toggleIcon: {
		fontSize: spacing[2],
		marginLeft: spacing['0_7'],
	},
	truncate: {
		marginBottom: 10,
		maxHeight: ({ maxHeight }) => maxHeight,
	},
	truncateContainer: {
		'&::after': {
			background: 'linear-gradient(hsla(0,0%,100%,0),#fff)',
			bottom: spacing[6] + 10,
			content: "''",
			display: 'block',
			height: 25,
			position: 'relative',
		},
	},
}));

const TruncateSection = ({ children, maxHeight, styles }) => {
	const theme = useTheme();
	const classes = useStyles({ maxHeight, theme });
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [isOverflowed, setIsOverflowed] = useState(false);

	useEffect(() => {
		const isElementYOverflown = (el) => {
			return el.scrollHeight > el.clientHeight;
		};

		setIsOverflowed(isElementYOverflown(document.getElementById('truncateContent')));
	}, []);

	const toggleDisplay = () => setIsCollapsed(!isCollapsed);

	const displayToggle = () =>
		isCollapsed ? (
			<StyledLink
				onCLick={toggleDisplay}
				styles={classes.toggle}
			>
				Show less
				<FontAwesomeIcon
					className={classes.toggleIcon}
					icon={faCaretUp}
				/>
			</StyledLink>
		) : (
			<StyledLink
				onCLick={toggleDisplay}
				styles={classes.toggle}
			>
				Show more
				<FontAwesomeIcon
					className={classes.toggleIcon}
					icon={faCaretDown}
				/>
			</StyledLink>
		);

	return (
		<div
			className={cn(
				classes.container,
				{ [`${classes.truncateContainer}`]: !isCollapsed && isOverflowed },
				styles
			)}
		>
			<div
				className={cn(classes.content, { [`${classes.truncate}`]: !isCollapsed })}
				id='truncateContent'
			>
				{children}
			</div>
			{isOverflowed && displayToggle()}
		</div>
	);
};

export default TruncateSection;
