import React from 'react';
import Form from 'antd/lib/form';
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
	container: {
		// border: '1px solid black',
	},
}));

const UploadForm = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const [form] = Form.useForm();

	return (
		<Form
			className={classes.container}
			form={form}
		>
			{/* <UploadFormFiles /> */}
			<UploadFormData />
		</Form>
	);
};

export default UploadForm;
