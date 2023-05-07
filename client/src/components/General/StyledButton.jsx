import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'antd/lib/button';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, radius, spacing } = styles;

const useStyles = createUseStyles((theme) => ({
	defaultStyle: {
		'&:hover': {
			borderColor: '#ccc !important',
			color: '#333 !important',
		},
		...alignItems.center,
		...displayFlex,
		borderColor: '#e5e5e5',
		borderRadius: radius[3],
		color: '#333',
		height: 26,
		padding: `${spacing['0_25']}px 10px`,
	},
	icon: {
		fontSize: spacing['1_5'],
	},
	label: {
		height: '100%',
		marginLeft: ({ icon }) => (icon ? spacing['0_5'] : 0),
	},
	specialStyle: {
		'&:hover': {
			borderColor: `${theme.button.backgroundColor.special} !important`,
			color: `${theme.button.color.special} !important`,
		},
		backgroundColor: theme.button.backgroundColor.special,
		borderColor: theme.button.backgroundColor.special,
		color: theme.button.color.special,
	},
	transparentSpecialStyle: {
		'&:hover': {
			borderColor: `${theme.button.backgroundColor.special} !important`,
			color: `${theme.color.special} !important`,
		},
		borderColor: theme.button.backgroundColor.special,
		color: theme.color.special,
	},
	transparentStyle: {
		backgroundColor: 'transparent',
	},
}));

const StyledButton = ({
	children,
	label,
	onClick,
	styles,
	icon = null,
	special = false,
	transparent = false,
}) => {
	const theme = useTheme();
	const classes = useStyles({ icon, theme });

	return (
		<Button
			className={cn(
				classes.defaultStyle,
				{
					[`${classes.specialStyle}`]: special && !transparent,
					[`${classes.transparentStyle}`]: transparent,
					[`${classes.transparentSpecialStyle}`]: special && transparent,
				},
				styles
			)}
			onClick={onClick}
		>
			{children ? (
				children
			) : (
				<>
					{icon && (
						<FontAwesomeIcon
							className={classes.icon}
							icon={icon}
						/>
					)}
					<span className={classes.label}>{label}</span>
				</>
			)}
		</Button>
	);
};

export default StyledButton;
