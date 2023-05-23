import React from 'react';
import Radio from 'antd/lib/radio';
import Upload from 'antd/lib/upload';
import { createUseStyles, useTheme } from 'react-jss';
import UploadBasicInfo from './UploadBasicInfo';
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
		// border: `1px solid ${theme.background.highlight}`,
		// boxShadow: `0 ${spacing['0_25']}px ${spacing['1_5']}px -5px rgba(0,0,0,.1)`,
	},
	form: {
		// padding: '0 25px',
	},
	formNav: {
		// padding: '14px 25px 0',
	},
}));

const UploadFormData = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<div>msg</div>
			<div>
				<div className={classes.formNav}>nav</div>
				<div className={classes.form}>
					<UploadBasicInfo />
				</div>
				<div>required fields</div>
			</div>
		</div>
	);
};

export default UploadFormData;
