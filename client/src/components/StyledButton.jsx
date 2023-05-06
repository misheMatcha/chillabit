import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'antd/lib/button';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../utils/styles';

const { displayFlex } = styles;

const useStyles = createUseStyles((theme) => ({
	defaultStyle: {
		'&:hover': {
			borderColor: '#ccc !important',
			color: '#333 !important',
		},
		...displayFlex,
		borderColor: '#e5e5e5',
		color: '#333',
		height: 26,
	},
	specialStyle: {
		backgroundColor: theme.button.backgroundColor.special,
		borderColor: theme.button.backgroundColor.special,
		color: theme.button.color.special,
	},
	transparentStyle: {},
}));

const StyledButton = ({
	label,
	onClick,
	styles,
	icon = null,
	special = false,
	transparent = false,
}) => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<Button
			className={cn(
				classes.defaultStyle,
				{
					[`${classes.specialStyle}`]: special,
					[`${classes.transparentStyle}`]: transparent,
				},
				styles
			)}
			onClick={onClick}
		>
			{icon && <FontAwesomeIcon icon={icon} />}
			{label}
		</Button>
	);
};

export default StyledButton;
