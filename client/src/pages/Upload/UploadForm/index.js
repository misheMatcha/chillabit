import React from 'react';
import Radio from 'antd/lib/radio';
import Upload from 'antd/lib/upload';
import { createUseStyles, useTheme } from 'react-jss';
import QuotaMeter from './QuotaMeter';
import UploadFormData from './UploadFormData';
import UploadFormFiles from './UploadFormFiles';
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
	container: {},
}));

const UploadForm = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			{/* <UploadFormFiles /> */}
			<UploadFormData />
		</div>
	);
};

export default UploadForm;
