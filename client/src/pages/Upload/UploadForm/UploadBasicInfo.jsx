import React from 'react';
import Radio from 'antd/lib/radio';
import Upload from 'antd/lib/upload';
import { createUseStyles, useTheme } from 'react-jss';
import StyledLink from '../../../components/General/StyledLink';
import { styles } from '../../../utils/styles';

const {
	alignItems,
	displayFlex,
	flexDirection,
	height,
	justifyContent,
	radius,
	spacing,
	typography,
	weight,
} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...displayFlex,
		// border: `1px solid ${theme.background.highlight}`,
		// boxShadow: `0 ${spacing['0_25']}px ${spacing['1_5']}px -5px rgba(0,0,0,.1)`,
	},
}));

const UploadBasicInfo = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<div>avatar</div>
			<div>
				<div>title</div>
				<div>permalink</div>
				<div>genre</div>
				<div>additional tags</div>
				<div>description</div>
				<div>caption</div>
				<div>privacy</div>
			</div>
		</div>
	);
};

export default UploadBasicInfo;
