import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import StyledLink from '../../../components/General/StyledLink';
import { styles } from '../../../utils/styles';

const {
	alignItems,
	displayFlex,
	flexDirection,
	justifyContent,
	radius,
	spacing,
	textAlign,
	typography,
	weight,
} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {},
	control: {
		...alignItems.center,
		...displayFlex,
		...flexDirection.column,
		...textAlign.center,
		backgroundColor: theme.background.highlight,
		border: `1px solid #e5e5e5`,
		padding: `30px 80px`,
	},
	controlInfo: {
		color: '#999',
		fontSize: 14,
		fontWeight: weight[600],
		lineHeight: 1.4,
		margin: `10px 0 20px`,
	},
	controlTitle: {
		...typography.h4,
		fontWeight: weight[600],
	},
	proLink: {
		backgroundColor: theme.background.surface,
		borderColor: '#e5e5e5',
		borderRadius: radius[3],
		color: theme.color.black,
		fontSize: 14,
		padding: `${spacing['0_25']}px 14px`,
	},
}));

const UploadPermissions = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div>
			<div>no access</div>
			<div>
				<div>
					<div>1</div>
					<div>2</div>
				</div>
				<div>
					<div>1</div>
					<div>2</div>
				</div>
				<div>
					<div>1</div>
				</div>
			</div>
			<div className={classes.control}>
				<h2 className={classes.controlTitle}>Be in control</h2>
				<p className={classes.controlInfo}>
					With a Next Pro plan, you’re in charge with quiet mode. Choose whether comments should be
					public, private, or not allowed. You can also show or hide stats.
				</p>
				<StyledLink
					button
					styles={classes.proLink}
				>
					Unlock with Next Pro
				</StyledLink>
			</div>
		</div>
	);
};

export default UploadPermissions;
